import TagsCollection from "./tags-collection"

export const badges = [
  "Tips",
  "Rant",
  "Advice",
  "Help",
  "Question",
  "Vent",
  "SOS",
  "question",
  "Good-news",
  "Happy",
]

function RightContainer() {
  return (
    <div className="md:w-64">
      <TagsCollection badges={badges} />
    </div>
  )
}

export default RightContainer
