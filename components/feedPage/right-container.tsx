import TagsCollection from "./tags-collection"

function RightContainer() {
  const badges = ["Tips", "Rant", "Advice", "Help", "Question", "Vent", "SOS"]
  return (
    <div className="md:w-64">
      <TagsCollection badges={badges} />
    </div>
  )
}

export default RightContainer
