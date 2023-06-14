import Link from "next/link"

function Hero() {
  return (
    <section id="hero">
      {/* <!-- Hero --> */}
      <div className="relative overflow-hidden before:absolute before:left-1/2 before:top-0  before:-z-[1] before:h-full before:w-full before:-translate-x-1/2 before:bg-cover before:bg-top before:bg-no-repeat">
        <div className="mx-auto max-w-[85rem] px-4 pb-10 pt-24 sm:px-6 lg:px-8">
          {/* <!-- Announcement Banner --> */}
          <div className="flex justify-center">
            <Link
              className="inline-flex items-center gap-x-2 rounded-full border border-gray-200 bg-white p-1 pl-3 text-sm text-gray-800 transition hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-gray-600"
              href="#"
            >
              PRO release - Join to waitlist
              <span className="inline-flex items-center justify-center gap-x-2 rounded-full bg-gray-200 px-3 py-2 text-sm font-semibold text-gray-600 dark:bg-gray-700 dark:text-gray-400">
                <svg
                  className="h-2.5 w-2.5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
          {/* <!-- End Announcement Banner --> */}

          {/* <!-- Title --> */}
          <div className="mx-auto mt-5 max-w-2xl text-center">
            <h1 className="block text-4xl font-bold text-gray-800 dark:text-gray-200 md:text-5xl lg:text-6xl">
              Let&apos;s Build
              <span className="bg-gradient-to-tl from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Together
              </span>
            </h1>
          </div>
          {/* <!-- End Title --> */}

          <div className="mx-auto mt-5 max-w-3xl text-center">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Preline UI is an open-source set of prebuilt UI components,
              ready-to-use examples and Figma design system based on the
              utility-first Tailwind CSS framework.
            </p>
          </div>

          {/* <!-- Buttons --> */}
          <div className="mt-8 grid w-full gap-3 sm:inline-flex sm:justify-center">
            <Link
              className="inline-flex items-center justify-center gap-x-3 rounded-md border border-transparent bg-gradient-to-tl from-blue-600 to-violet-600 px-4 py-3 text-center text-sm font-medium text-white hover:from-violet-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
              href="#"
            >
              Get started
              <svg
                className="h-3 w-3"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
          </div>
          {/* <!-- End Buttons --> */}

          <div className="mt-5 flex items-center justify-center gap-x-1 sm:gap-x-3">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Package Manager:
            </span>
            <span className="text-sm font-bold text-gray-900 dark:text-white">
              npm
            </span>
            <svg
              className="h-5 w-5 text-gray-300 dark:text-gray-600"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 13L10 3"
                stroke="currentColor"
                strokeLinecap="round"
              />
            </svg>
            <Link
              className="inline-flex items-center gap-x-1.5 text-sm font-medium text-blue-600 decoration-2 hover:underline"
              href="#"
            >
              Installation Guide
              <svg
                className="h-2.5 w-2.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- End Hero --> */}
    </section>
  )
}

export default Hero
