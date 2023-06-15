import Link from "next/link"

import { Button } from "../ui/button"

function Hero() {
  return (
    <section id="hero" className=" mb-32">
      {/* <!-- Hero --> */}
      <div className="relative overflow-hidden before:absolute before:left-1/2 before:top-0  before:-z-[1] before:h-full before:w-full before:-translate-x-1/2 before:bg-cover before:bg-top before:bg-no-repeat">
        <div className="mx-auto max-w-[85rem] px-4 pb-10 pt-24 sm:px-6 lg:px-8">
          {/* <!-- Title --> */}
          <div className="mx-auto mt-5 max-w-2xl text-center">
            <h1 className="block text-4xl font-bold text-gray-800 dark:text-gray-200 md:text-5xl lg:text-6xl tracking-tight scroll-m-20">
              Share your stories, discuss mental health
              <br />
              <span className="bg-gradient-to-tl from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Anonymously
              </span>
            </h1>
          </div>
          {/* <!-- End Title --> */}

          <div className="mx-auto mt-5 max-w-3xl text-center">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Open up. Connect. Find empathy. Mindly is a privacy focused
              anonymous platform to discuss, vent, support and share information
              about mental health,
            </p>
          </div>

          {/* <!-- Buttons --> */}
          <Link href="/signup">
            <div className="mt-8 grid w-full gap-3 sm:inline-flex sm:justify-center">
              <Button className="px-8">Get Started</Button>
            </div>
          </Link>
          {/* <!-- End Buttons --> */}
        </div>
      </div>
      {/* <!-- End Hero --> */}
    </section>
  )
}

export default Hero
