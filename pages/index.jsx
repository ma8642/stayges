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
      className="flex flex-col py-10 lg:flex-row-reverse lg:justify-between lg:items-center bg-white"
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
      </div>
      <div className="flex justify-end mr-5">
        <svg
          width="27"
          height="30"
          viewBox="0 0 27 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.9662 27.9959C20.5443 27.2621 23.2435 26.892 25.8619 26.5529C26.4258 26.4818 26.9494 26.8785 26.9897 27.4374C27.0703 27.9967 26.6672 28.5082 26.1435 28.5792C23.6057 28.9057 20.9876 29.255 18.5303 29.9613C18.0066 30.1145 17.4424 29.7991 17.2813 29.2566C17.1202 28.7145 17.4425 28.1495 17.9662 27.9959Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.1516 17.5933C14.3008 13.2993 18.9736 9.55791 23.0422 5.14861C23.4047 4.73681 24.0493 4.71475 24.4521 5.09918C24.8549 5.48402 24.895 6.13113 24.4922 6.54293C20.4236 10.9649 15.7508 14.7185 11.6017 19.0253C11.1988 19.4273 10.5545 19.433 10.1516 19.0375C9.78909 18.6425 9.74881 17.9953 10.1516 17.5933Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.37636 1.0768C2.25551 3.53453 2.1349 5.99226 2.01405 8.45041C2.01405 9.01337 1.53042 9.44805 0.966454 9.42067C0.402493 9.39289 -0.000101089 8.91369 -0.000101089 8.35032C0.120748 5.8885 0.241361 3.42709 0.36221 0.965673C0.402493 0.402715 0.885967 -0.0291052 1.44993 0.00153479C1.97361 0.0321748 2.41664 0.514245 2.37636 1.0768Z"
            fill="black"
          />
        </svg>
      </div>

      <div
        className="flex flex-col justify-center lg:w-1/2 sm:px-8 xl:pr-16"
        data-testid="test-about-reasons-container"
      >
        <img
          src="https://github.com/ma8642/stayges/blob/main/images/about_1.png?raw=true"
          className="mt-6 mx-6 mb-3"
          data-testid="test_about_1"
        />
        <img
          src="https://github.com/ma8642/stayges/blob/main/images/about_2.png?raw=true"
          className="mx-6 my-3"
          data-testid="test_about_2"
        />
        <img
          src="https://github.com/ma8642/stayges/blob/main/images/about_3.png?raw=true"
          className="mx-6 my-3"
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
