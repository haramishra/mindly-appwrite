import Image from "next/image"

function RightSection() {
  return (
    <div className="flex flex-col justify-center items-center dark:bg-black bg-muted h-[100vh] gap-28">
      <Image
        src="/signup-blob.png"
        width={500}
        height={500}
        alt="gradient blog"
        className="p-5"
      />
      <h2 className="scroll-m-20 text-4xl p-5 lg:w-[85%] xl:w-[80%] font-extrabold tracking-tight lg:text-5xl">
        Share Your Thoughts Anonymously.
      </h2>
    </div>
  )
}

export default RightSection
