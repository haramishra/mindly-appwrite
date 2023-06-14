import Image from "next/image"

function RightSection() {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center gap-28 bg-muted dark:bg-black">
      <Image
        src="/login-blob.png"
        width={500}
        height={500}
        alt="gradient blog"
        className="p-5"
      />
      <h2 className="scroll-m-20 p-5 text-4xl font-extrabold tracking-tight lg:w-[85%] lg:text-5xl xl:w-[80%]">
        Share Your Thoughts Anonymously.
      </h2>
    </div>
  )
}

export default RightSection
