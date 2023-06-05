export interface FunctionObject {
  $id: string
  $createdAt: string
  $updatedAt: string
  $permissions: string[]
  functionId: string
  trigger: string
  status: string
  statusCode: number
  response: string
  stdout: string
  stderr: string
  duration: number
}
