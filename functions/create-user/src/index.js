const sdk = require("node-appwrite")
const {
  uniqueNamesGenerator,
  adjectives,
  animals,
} = require("unique-names-generator")
const axios = require("axios").default

/*
    'req' variable has:
      'headers' - object with request headers
      'payload' - request body data as a string
      'variables' - object with function variables

    'res' variable has:
      'send(text, status)' - function to return text response. Status code defaults to 200
      'json(obj, status)' - function to return JSON response. Status code defaults to 200

    If an error is thrown, a response with code 500 will be returned.
  */

module.exports = async function (req, res) {
  const client = new sdk.Client()
  const account = new sdk.Account(client)
  // const avatars = new sdk.Avatars(client)
  const database = new sdk.Databases(client)
  // const functions = new sdk.Functions(client)
  // const health = new sdk.Health(client)
  // const locale = new sdk.Locale(client)
  // const storage = new sdk.Storage(client)
  // const teams = new sdk.Teams(client)

  // const users = new sdk.Users(client)

  const {
    APPWRITE_FUNCTION_ENDPOINT,
    APPWRITE_FUNCTION_API_KEY,
    APPWRITE_FUNCTION_PROJECT_ID,
    APPWRITE_FUNCTION_JWT,
    APPWRITE_FUNCTION_USER_ID,
  } = req.variables

  if (!APPWRITE_FUNCTION_ENDPOINT || !APPWRITE_FUNCTION_API_KEY) {
    return res.json({
      error:
        "Environment variables are not set. Function cannot use Appwrite SDK.",
    })
  } else {
    client
      .setEndpoint(APPWRITE_FUNCTION_ENDPOINT)
      .setProject(APPWRITE_FUNCTION_PROJECT_ID)
      .setKey(APPWRITE_FUNCTION_API_KEY)
      .setJWT(APPWRITE_FUNCTION_JWT)
      .setSelfSigned(true)
  }

  const updateAvatar = async () => {
    const seed = APPWRITE_FUNCTION_USER_ID

    const diceBearEndPoint = `https://api.dicebear.com/6.x/lorelei/svg?seed=${seed}&backgroundType=gradientLinear&earringsProbability=15&frecklesProbability=10&glassesProbability=15&backgroundColor=ffdfbf,ffd5dc,d1d4f9,c0aede,b6e3f4`

    try {
      const avatar = await axios.get(diceBearEndPoint)
      await account.updatePrefs({ avatar: avatar.data })
      return avatar.data
    } catch (error) {
      return "failed async"
    }
  }

  const updateName = async () => {
    const name = uniqueNamesGenerator({
      dictionaries: [adjectives, animals], // colors can be omitted here as not used
      length: 2,
      style: "capital",
      separator: "_",
    })
    try {
      const promise = await account.updateName(name)
      return promise
    } catch (error) {
      return error
    }
  }

  const addUserCollection = async () => {
    const user = await account.get()
    const data = {
      name: user.name,
      email: user.email,
    }

    const DATABASE_ID = "6469db4675eba906b2ff"
    const COLLECTION_ID = "6469db66cffc8f1ac755"
    const DOCUMENT_ID = APPWRITE_FUNCTION_USER_ID

    const promise = await database.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      DOCUMENT_ID,
      data
    )

    return promise
  }

  const name = await updateName()
  // const avatar = await updateAvatar()
  const addUser = await addUserCollection()

  const promiseMain = await Promise.all([name, addUser])

  return res.json({
    res: promiseMain.toString,
  })

  // const updateAccount = async (name, avatar) => {

  // }
}
