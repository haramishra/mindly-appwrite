import Image from "next/image"

function Why() {
  return (
    <section id="why">
      {/* <!-- Features --> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Grid --> */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="lg:col-span-7">
            {/* <!-- Grid --> */}
            <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
              <div className="col-span-5">
                <Image
                  className="rounded-xl"
                  src="/why1.jpg"
                  width={320}
                  height={640}
                  alt="Image Description"
                />
              </div>
              {/* <!-- End Col --> */}

              {/* <div className="col-span-3">
                <img
                  className="rounded-xl"
                  src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                  alt="Image Description"
                />
              </div> */}
              {/* <!-- End Col --> */}

              <div className="col-span-6">
                <Image
                  className="rounded-xl"
                  src="/why2.jpg"
                  width={320}
                  height={640}
                  alt="Image Description"
                />
              </div>
              {/* <!-- End Col --> */}
            </div>
            {/* <!-- End Grid --> */}
          </div>
          {/* <!-- End Col --> */}

          <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
            <div className="space-y-6 sm:space-y-8">
              {/* <!-- Title --> */}
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                  Mindly is a safe space to share mental health stories
                  anonymously.
                </h2>
                <p className="text-gray-500">
                  By increasing the understanding of mental health conditions we
                  hope to abolish stigma. A powerful story can change a life.
                </p>
              </div>
              {/* <!-- End Title --> */}

              {/* <!-- List --> */}
              <ul role="list" className="space-y-2 sm:space-y-4">
                <li className="flex space-x-3">
                  {/* <!-- Solid Check --> */}
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fill-opacity="0.1"
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* <!-- End Solid Check --> */}

                  <span className="text-sm sm:text-base text-gray-500">
                    <span className="font-bold">Anonymous</span>
                  </span>
                </li>

                <li className="flex space-x-3">
                  {/* <!-- Solid Check --> */}
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fill-opacity="0.1"
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* <!-- End Solid Check --> */}

                  <span className="text-sm sm:text-base text-gray-500">
                    <span className="font-bold">Private</span>
                  </span>
                </li>

                <li className="flex space-x-3">
                  {/* <!-- Solid Check --> */}
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fill-opacity="0.1"
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* <!-- End Solid Check --> */}

                  <span className="text-sm sm:text-base text-gray-500">
                    <span className="font-bold">Safe</span>
                  </span>
                </li>
              </ul>
              {/* <!-- End List --> */}
            </div>
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Features --> */}
    </section>
  )
}

export default Why
