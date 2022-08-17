function splashPage() {
  return (
    <div
      // className="mx-auto max-w-7xl w-full pt-16 pb-20 lg:py-48 lg:text-left"
      className="flex flex-col py-10 lg:flex-row lg:justify-between lg:items-center bg-beige-100"
      data-testid="test-splash-container"
    >
      <div
        className="px-4 py-5 lg:w-1/2 sm:px-8 xl:pr-16"
        data-testid="test-splash-text-container"
      >
        <h1
          className="font-homeTitle text-5xl leading-normal font-semibold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
          data-testid="test-splash-title"
        >
          <span className="block inline">The best</span>{" "}
          <span className="block text-staygesPurple inline">working</span>{" "}
          <span className="block text-staygesOrange inline">environment</span>{" "}
          <span className="block inline">for productivity</span>
          <img
            className="w-3/6"
            src="https://github.com/ma8642/stayges/blob/main/images/figma_homepage_effect_1.png?raw=true"
            alt=""
          />
        </h1>
        <p className="mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:max-w-3xl">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
        <div className="mt-10 flex justify-start">
          <div
            className="rounded-md font-homeTitle"
            data-testid="test-start-working-button"
          >
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black md:py-4 md:text-lg md:px-10 tracking-wide"
            >
              Start Working{" "}
              <svg
                className="ml-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.25 6H18V15.75"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="py-5" data-testid="test-splash-image">
        <img
          className="w-full"
          src="https://github.com/ma8642/stayges/blob/main/images/figma_homepage_image_1.png?raw=true"
          alt=""
        />
      </div>
    </div>
  );
}

function aboutPage() {
  return (
    <div
      // className="mx-auto max-w-7xl w-full pt-16 pb-20 lg:py-48 lg:text-left"
      className="flex flex-col py-10 lg:flex-row lg:justify-between lg:items-center bg-white"
      data-testid="test-about-container"
    >
      <div className="py-5" data-testid="test-about-text-container">
        <h1 className="text-4xl mx-12 mb-8">
          What are the advantages of our workspace?
        </h1>
        <p className="mx-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          viverra auctor velit. Vestibulum id velit aliquam, placerat lacus et,
          consequat leo. Quisque vel lobortis lectus.
        </p>
      </div>
      <a
        href="#"
        className="ml-8 flex px-4 py-2 text-base font-medium text-black tracking-wide"
      >
        Learn More{" "}
        <svg
          className="ml-2"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 18L18 6"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.25 6H18V15.75"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
      <img src="" alt="" />
      <div
        className="px-4 py-5 lg:w-1/2 sm:px-8 xl:pr-16"
        data-testid="test-about-reasons-container"
      >
        <img
          src="https://github.com/ma8642/stayges/blob/main/images/about_1.png?raw=true"
          className="m-6"
          data-testid="test_about_1"
        />
        <img
          src="https://github.com/ma8642/stayges/blob/main/images/about_2.png?raw=true"
          className="m-6"
          data-testid="test_about_2"
        />
        <img
          src="https://github.com/ma8642/stayges/blob/main/images/about_3.png?raw=true"
          className="m-6"
          data-testid="test_about_3"
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-beige-100">
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Stayges</span>
              <img
                className="h-20 w-auto"
                src="https://github.com/ma8642/stayges/blob/main/images/logo_with_name.png?raw=true"
                alt=""
              />
            </a>
          </div>
          <div as="nav" className="hidden md:flex space-x-10">
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Home
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Facilities
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Location
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Pricing
            </a>
          </div>
          <div
            className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 font-homeTitle"
            data-testid="test-start-working-button-header"
          >
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-black border border-black tracking-wide"
            >
              Start Working{" "}
              <svg
                className="ml-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.25 6H18V15.75"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <main className="lg:relative">
        {splashPage()}
        {aboutPage()}
      </main>
      <p className="ml-10 text-gray-500" data-testid="test-attribution">
        Site by{" "}
        <a
          href="https://github.com/ma8642/stayges"
          className="hover:text-gray-900"
        >
          Marley
        </a>
      </p>
    </div>
  );
}
