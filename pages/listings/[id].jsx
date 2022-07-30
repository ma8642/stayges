import { useState } from "react";
import {
  CurrencyDollarIcon,
  GlobeIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

const product = {
  name: "Basic Tee",
  price: "$35",
  href: "#",
  images: [
    {
      id: 1,
      imageSrc:
        "https://github.com/ma8642/stayges/blob/main/images/yoga_3.jpeg?raw=true",
      imageAlt: "Back of women's Basic Tee in black.",
      primary: true,
    },
    {
      id: 2,
      imageSrc:
        "https://github.com/ma8642/stayges/blob/main/images/yoga_3.jpeg?raw=true",
      imageAlt: "Side profile of women's Basic Tee in black.",
      primary: false,
    },
    {
      id: 3,
      imageSrc:
        "https://github.com/ma8642/stayges/blob/main/images/yoga_3.jpeg?raw=true",
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
  ],
  description: `
    <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
    <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
  `,
  rules: ["no smoking", "no alcohol", "no food", "no shoes", "up to 2 guests"],
};
const policies = [
  {
    name: "International delivery",
    icon: GlobeIcon,
    description: "Get your order in 2 years",
  },
  {
    name: "Loyalty rewards",
    icon: CurrencyDollarIcon,
    description: "Don't look at other tees",
  },
];

const footerNavigation = {
  company: [
    { name: "Who we are", href: "#" },
    { name: "Press", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy", href: "#" },
  ],
  customerService: [
    { name: "Contact", href: "#" },
    { name: "Resolution Center", href: "#" },
    { name: "Insurance", href: "#" },
    { name: "Secure Payments", href: "#" },
    { name: "FAQ", href: "#" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Listing({
  title = "Sunny Yoga Room with private entrance",
  price = "25",
  description = "Incudes yoga ball, mat, blocks, and straps. AC/heating.",
  rules = product.rules,
  gallery = product.images,
  reviews = {
    average: 3,
    reviews: [
      {
        id: "123",
        author: "Risako M",
        date: "May 16, 2021",
        rating: 5,
        title: "Can't say enough good things",
        content: `Quiet, beautiful space within walking distance of town center. The private entrance really brings this to the next level! Can't wait to come back.`,
      },
    ],
  },
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="h-16 flex items-center justify-between">
              {/* Logo */}
              <a href="#" className="flex">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>

              <div className="flex-1 flex items-center justify-end">
                {/* Search */}
                <a
                  href="#"
                  className="hidden ml-6 p-2 text-gray-400 hover:text-gray-500 lg:block"
                >
                  <span className="sr-only">Search</span>
                  <SearchIcon className="w-6 h-6" aria-hidden="true" />
                </a>

                {/* Account */}
                <a
                  href="#"
                  className="p-2 text-gray-400 hover:text-gray-500 lg:ml-4"
                >
                  <span className="sr-only">Account</span>
                  <UserIcon className="w-6 h-6" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="mt-8 max-w-2xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
          <div className="lg:col-start-8 lg:col-span-5">
            <div className="flex justify-between">
              <h1 className="text-xl font-medium text-gray-900">{title}</h1>
              <p className="text-xl font-medium text-gray-900">${price}</p>
            </div>
            {/* Reviews */}
            <div className="mt-4">
              <h2 className="sr-only">Reviews</h2>
              <div className="flex items-center">
                <p className="text-sm text-gray-700">
                  {reviews.average}
                  <span className="sr-only"> out of 5 stars</span>
                </p>
                <div className="ml-1 flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating
                          ? "text-yellow-400"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <div aria-hidden="true" className="ml-4 text-sm text-gray-300">
                  ·
                </div>
                <div className="ml-4 flex">
                  <a
                    href="#"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    See all {reviews.reviews.length} reviews
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Image gallery */}
          <div
            id="imageGallery"
            className="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3"
          >
            <h2 className="sr-only">Images</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
              {gallery.map((image) => (
                <img
                  key={image.id}
                  src={image.imageSrc}
                  alt={image.imageAlt}
                  className={classNames(
                    image.primary
                      ? "lg:col-span-2 lg:row-span-2"
                      : "hidden lg:block",
                    "rounded-lg"
                  )}
                />
              ))}
            </div>
          </div>

          <div id="listingDetails" className="mt-8 lg:col-span-5">
            <form>
              <button
                type="submit"
                className="mt-8 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Book
              </button>
            </form>

            {/* Listing details */}
            <div id="description" className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Description</h2>

              <div
                className="mt-4 prose prose-sm text-gray-500"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>

            <div id="rules" className="mt-8 border-t border-gray-200 pt-8">
              <h2 className="text-sm font-medium text-gray-900">Rules</h2>

              <div className="mt-4 prose prose-sm text-gray-500">
                <ul role="list">
                  {rules.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Policies */}
            <section aria-labelledby="policies-heading" className="mt-10">
              <h2 id="policies-heading" className="sr-only">
                Our Policies
              </h2>

              <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {policies.map((policy) => (
                  <div
                    key={policy.name}
                    className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center"
                  >
                    <dt>
                      <policy.icon
                        className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="mt-4 text-sm font-medium text-gray-900">
                        {policy.name}
                      </span>
                    </dt>
                    <dd className="mt-1 text-sm text-gray-500">
                      {policy.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        </div>

        {/* Reviews */}
        <section
          id="reviews"
          aria-labelledby="reviews-heading"
          className="mt-16 sm:mt-24"
        >
          <h2
            id="reviews-heading"
            className="text-lg font-medium text-gray-900"
          >
            Recent reviews
          </h2>

          <div className="mt-6 border-t border-b border-gray-200 pb-10 divide-y divide-gray-200 space-y-10">
            {reviews.reviews.map((review) => (
              <div
                key={review.id}
                className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8"
              >
                <div className="lg:col-start-5 lg:col-span-8 xl:col-start-4 xl:col-span-9 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:items-start">
                  <div className="flex items-center xl:col-span-1">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            review.rating > rating
                              ? "text-yellow-400"
                              : "text-gray-200",
                            "h-5 w-5 flex-shrink-0"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="ml-3 text-sm text-gray-700">
                      {review.rating}
                      <span className="sr-only"> out of 5 stars</span>
                    </p>
                  </div>

                  <div className="mt-4 lg:mt-6 xl:mt-0 xl:col-span-2">
                    <h3 className="text-sm font-medium text-gray-900">
                      {review.title}
                    </h3>

                    <div
                      className="mt-3 space-y-6 text-sm text-gray-500"
                      dangerouslySetInnerHTML={{ __html: review.content }}
                    />
                  </div>
                </div>

                <div className="mt-6 flex items-center text-sm lg:mt-0 lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:flex-col lg:items-start xl:col-span-3">
                  <p className="font-medium text-gray-900">{review.author}</p>
                  <time
                    dateTime={review.datetime}
                    className="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
                  >
                    {review.date}
                  </time>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 py-20">
            <div className="grid grid-cols-1 md:grid-cols-12 md:grid-flow-col md:gap-x-8 md:gap-y-16 md:auto-rows-min">
              {/* Image section */}
              <div className="col-span-1 md:col-span-2 lg:row-start-1 lg:col-start-1">
                <img
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                  alt=""
                  className="h-8 w-auto"
                />
              </div>

              {/* Sitemap sections */}
              <div className="mt-10 col-span-6 grid grid-cols-2 gap-8 sm:grid-cols-3 md:mt-0 md:row-start-1 md:col-start-3 md:col-span-8 lg:col-start-2 lg:col-span-6">
                <div className="grid grid-cols-1 gap-y-12 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Products
                    </h3>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Company
                    </h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {footerNavigation.company.map((item) => (
                        <li key={item.name} className="text-sm">
                          <a
                            href={item.href}
                            className="text-gray-500 hover:text-gray-600"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    Customer Service
                  </h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.customerService.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.href}
                          className="text-gray-500 hover:text-gray-600"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Newsletter section */}
              <div className="mt-12 md:mt-0 md:row-start-2 md:col-start-3 md:col-span-8 lg:row-start-1 lg:col-start-9 lg:col-span-4">
                <h3 className="text-sm font-medium text-gray-900">
                  Sign up for our newsletter
                </h3>
                <p className="mt-6 text-sm text-gray-500">
                  The latest deals and savings, sent to your inbox weekly.
                </p>
                <form className="mt-2 flex sm:max-w-md">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    type="text"
                    autoComplete="email"
                    required
                    className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                  <div className="ml-4 flex-shrink-0">
                    <button
                      type="submit"
                      className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 py-10 text-center">
            <p className="text-sm text-gray-500">
              &copy; 2021 Workflow, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
