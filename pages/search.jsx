import { Fragment, useState, useEffect } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = {
  categories: [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "About",
      href: "#",
    },
  ],
  pages: [
    { name: "Features", href: "#" },
    { name: "Content", href: "#" },
  ],
};
const sortOptions = [
  { name: "Most Popular", href: "#" },
  { name: "Best Rating", href: "#" },
  { name: "Newest", href: "#" },
  {
    name: "Price: Low to High",
    href: "#",
    handleClick: (searchResults, setSearchResults) =>
      sortPrice(true, searchResults, setSearchResults),
  },
  {
    name: "Price: High to Low",
    href: "#",
    handleClick: (searchResults, setSearchResults) =>
      sortPrice(false, searchResults, setSearchResults),
  },
];
const filters = [
  {
    // TODO make this conditionally generated based on type of studio chosen
    id: "amenities",
    name: "Amenities",
    options: [
      { value: "mirrors", label: "Mirrors" },
      { value: "fall-mats", label: "Fall Mats" },
      { value: "hardwood-floors", label: "Hardwood Floors" },
      { value: "vinyl-marley-floors", label: "Marley Flooring" },
      { value: "sound-proof", label: "Soundproof" },
      { value: "pole", label: "Pole" },
      { value: "barre", label: "Barre" },
      { value: "silks", label: "Silks" },
      { value: "lyra", label: "Lyra" },
      { value: "lighting", label: "Lighting" },
      { value: "piano", label: "Piano" },
      { value: "yoga-mat", label: "Yoga Mat" },
    ],
  },
  {
    id: "privacy",
    name: "Privacy",
    options: [
      { value: "room", label: "Room" },
      { value: "whole-building", label: "Whole Building" },
    ],
  },
  {
    id: "usage",
    name: "Usage",
    options: [
      { value: "equipment-included", label: "Equipment Included" },
      { value: "space-only", label: "Space Only" },
    ],
  },
];
const listings = [
  {
    id: 1,
    name: "Sunny Yoga Room with private entrance",
    href: "listings/1",
    category: "yoga",
    price: "$25",
    description: "Incudes yoga ball, mat, blocks, and straps. AC/heating.",
    imageSrc:
      "https://github.com/ma8642/stayges/blob/main/images/yoga_3.jpeg?raw=true",
    zipCode: "33705",
  },
  {
    id: 2,
    name: "Clean dance studio with surround sound",
    href: "listings/2",
    category: "dance",
    price: "$50",
    description: "Good for practicing your next routine or filming a tik tok",
    imageSrc:
      "https://github.com/ma8642/stayges/blob/main/images/dance_3.png?raw=true",
    zipCode: "33705",
  },
  {
    id: 3,
    name: "Private Gym with Yoga Equipment",
    href: "listings/3",
    category: "gym",
    price: "$40",
    description: "Please clean equipment before you leave.",
    imageSrc:
      "https://github.com/ma8642/stayges/blob/main/images/gym_and_yoga.jpg?raw=true",
    zipCode: "33601",
  },
  {
    id: 4,
    name: "Jam space for bands",
    href: "listings/4",
    category: "music",
    price: "$37",
    description:
      "Full soundproofing and no neighbors. You can play as loud as you want!",
    imageSrc:
      "https://github.com/ma8642/stayges/blob/main/images/music_2.jpeg?raw=true",
    zipCode: "33601",
  },
  {
    id: 5,
    name: "Aerial Room",
    href: "listings/5",
    category: "dance",
    price: "$45",
    description:
      "Includes chrome spin/static pole, silks, and lyra hoop. Please don't wear lotion or jewelry. Please use earbuds for music.",
    imageSrc:
      "https://github.com/ma8642/stayges/blob/main/images/poledoctor_1.jpeg?raw=true",
    zipCode: "33601",
  },
  {
    id: 6,
    name: "Piano Room",
    href: "listings/6",
    category: "music",
    price: "$38",
    description: "Baby grand steinway in private room.",
    imageSrc:
      "https://github.com/ma8642/stayges/blob/main/images/music_1.png?raw=true",
    zipCode: "33705",
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

function sortPrice(lowToHigh, searchResults, setSearchResults) {
  console.log("hi");
  const sorted = [...searchResults];
  if (lowToHigh) {
    sorted.sort((listing1, listing2) => {
      parseInt(listing1.price) > parseInt(listing2.price);
    });
  } else {
    sorted.sort((listing1, listing2) => {
      parseInt(listing1.price) <= parseInt(listing2.price);
    });
  }
  console.log(sorted);
  setSearchResults(sorted);
}

function InputField({
  label,
  type = "input",
  value,
  name,
  id,
  placeholder = "",
  handleChange,
}) {
  return (
    <div className="flex items-center mr-2">
      <label
        htmlFor={label}
        className="block text-sm font-medium text-gray-700 mr-2"
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          type={type}
          name={name}
          value={value}
          id={id}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

function handleSubmit(searchQuery, setCategory, setLocation, setDate) {
  setCategory(searchQuery?.category);
  setLocation(searchQuery?.location);
  setDate(searchQuery?.date);
}

function CategorySelect({ searchQuery, handleChange }) {
  return (
    <div className="flex items-center mr-2">
      <label htmlFor="sp_type" className="flex items-center mr-2">
        Category
      </label>
      <select
        id="sp_type"
        name="sp_type"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        onChange={(e) =>
          handleChange({ ...searchQuery, category: e.target.value })
        }
      >
        <option value={null}>Space needed for...</option>
        <option value="dance">Dance</option>
        <option value="music">Music</option>
        <option value="art">Art</option>
        <option value="yoga">Yoga</option>
        <option value="photography">Photography</option>
        <option value="gym">Gym</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
}

function SearchInput({
  searchQuery,
  handleChange,
  setCategory,
  setLocation,
  setDate,
}) {
  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <form>
          <div className="flex justify-center">
            <div className="flex items-center justify-around">
              <CategorySelect
                searchQuery={searchQuery}
                handleChange={handleChange}
              />
              <InputField
                label="Location"
                name="location"
                value={searchQuery?.location}
                id="location"
                placeholder="What is your zipcode?"
                handleChange={(e) => {
                  console.log(e.target.value);
                  return handleChange({
                    ...searchQuery,
                    location: e.target.value,
                  });
                }}
              />
              <InputField
                label="Date"
                name="date"
                value={searchQuery?.date}
                id="date"
                type="date"
                placeholder="When are you booking?"
                handleChange={(e) =>
                  handleChange({ ...searchQuery, date: e.target.value })
                }
              />
            </div>
            <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                onClick={() =>
                  handleSubmit(searchQuery, setCategory, setLocation, setDate)
                }
              >
                Find a space
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SearchPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState({});

  useEffect(() => {
    if (category || location || date) {
      // TODO here is where we query from the api
      setSearchResults(listings);
    }
  }, [category, location, date]);

  console.log(searchResults);

  return (
    <div className="bg-gray-50">
      <div>
        {/* Mobile menu */}
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileMenuOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 flex z-40">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                  <div className="px-4 pt-5 pb-2 flex">
                    <button
                      type="button"
                      className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Links */}
                  <Tab.Group as="div" className="mt-2">
                    <div className="border-b border-gray-200">
                      <Tab.List className="-mb-px flex px-4 space-x-8">
                        {navigation.categories.map((category) => (
                          <Tab
                            key={category.name}
                            className={({ selected }) =>
                              classNames(
                                selected
                                  ? "text-indigo-600 border-indigo-600"
                                  : "text-gray-900 border-transparent",
                                "flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium"
                              )
                            }
                          >
                            {category.name}
                          </Tab>
                        ))}
                      </Tab.List>
                    </div>
                  </Tab.Group>

                  <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                    {navigation.pages.map((page) => (
                      <div key={page.name} className="flow-root">
                        <a
                          href={page.href}
                          className="-m-2 p-2 block font-medium text-gray-900"
                        >
                          {page.name}
                        </a>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                    <div className="flow-root">
                      <a
                        href="#"
                        className="-m-2 p-2 block font-medium text-gray-900"
                      >
                        Create an account
                      </a>
                    </div>
                    <div className="flow-root">
                      <a
                        href="#"
                        className="-m-2 p-2 block font-medium text-gray-900"
                      >
                        Sign in
                      </a>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <header className="relative">
          <nav aria-label="Top">
            {/* Secondary navigation */}
            <div className="bg-white shadow-sm">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-16 flex items-center justify-between">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex-1 lg:flex lg:items-center">
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      <img
                        className="logo-top h-8 w-auto"
                        src="https://github.com/ma8642/stayges/blob/main/images/logo.png?raw=true"
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="hidden h-full lg:flex">
                    {/* Flyout menus */}
                    <Popover.Group className="px-4 bottom-0 inset-x-0">
                      <div className="h-full flex justify-center space-x-8">
                        {navigation.categories.map((category) => (
                          <Popover key={category.name} className="flex">
                            {({ open }) => (
                              <>
                                <div className="relative flex">
                                  <Popover.Button
                                    className={classNames(
                                      open
                                        ? "text-indigo-600"
                                        : "text-gray-700 hover:text-gray-800",
                                      "relative flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium"
                                    )}
                                  >
                                    {category.name}
                                    <span
                                      className={classNames(
                                        open ? "bg-indigo-600" : "",
                                        "absolute z-30 -bottom-px inset-x-0 h-0.5 transition ease-out duration-200"
                                      )}
                                      aria-hidden="true"
                                    />
                                  </Popover.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="transition ease-in duration-150"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Popover.Panel className="absolute z-20 top-full inset-x-0 bg-white text-sm text-gray-500">
                                    {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                    <div
                                      className="absolute inset-0 top-1/2 bg-white shadow"
                                      aria-hidden="true"
                                    />
                                    {/* Fake border when menu is open */}
                                    <div
                                      className="absolute inset-0 top-0 h-px max-w-7xl mx-auto px-8"
                                      aria-hidden="true"
                                    >
                                      <div
                                        className={classNames(
                                          open
                                            ? "bg-gray-200"
                                            : "bg-transparent",
                                          "w-full h-px transition-colors ease-out duration-200"
                                        )}
                                      />
                                    </div>
                                  </Popover.Panel>
                                </Transition>
                              </>
                            )}
                          </Popover>
                        ))}

                        {navigation.pages.map((page) => (
                          <a
                            key={page.name}
                            href={page.href}
                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                          >
                            {page.name}
                          </a>
                        ))}
                      </div>
                    </Popover.Group>
                  </div>

                  {/* Mobile menu(lg-) */}
                  <div className="flex-1 flex items-center lg:hidden">
                    <button
                      type="button"
                      className="-ml-2 bg-white p-2 rounded-md text-gray-400"
                      onClick={() => setMobileMenuOpen(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Logo (lg-) */}
                  <a href="#" className="lg:hidden">
                    <span className="sr-only">Workflow</span>
                    <img
                      src="https://github.com/ma8642/stayges/blob/main/images/logo.png?raw=true"
                      alt=""
                      className="logo-2 h-8 w-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>

      <div>
        <main>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="py-24 text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
                Stayges
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-base text-gray-500 mb-6">
                Book practice spaces cheaper for just 1 hour
              </p>
              <SearchInput
                searchQuery={searchQuery}
                handleChange={setSearchQuery}
                setCategory={setCategory}
                setLocation={setLocation}
                setDate={setDate}
              />
            </div>

            {/* Product grid */}
            <section aria-labelledby="products-heading">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                  {searchResults
                    .filter((l) => {
                      return l.category === category;
                    })
                    .map((product) => (
                      <a key={product.id} href={product.href} className="group">
                        <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                          <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="object-center object-cover group-hover:opacity-75"
                          />
                        </div>
                        <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                          <h3>{product.name}</h3>
                          <p>{product.price}</p>
                        </div>
                        <p className="mt-1 text-sm italic text-gray-500">
                          {product.description}
                        </p>
                      </a>
                    ))}
                </div>
              ) : (
                <div className="flex justify-center text-2xl text-gray-900 mb-16 font-extralight">
                  The world is a stayge. Let us help you find it.
                </div>
              )}
            </section>
          </div>
        </main>

        <footer
          aria-labelledby="footer-heading"
          className="bg-white border-t border-gray-200"
        >
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-20">
              <div className="grid grid-cols-1 md:grid-cols-12 md:grid-flow-col md:gap-x-8 md:gap-y-16 md:auto-rows-min">
                {/* Image section */}
                <div className="col-span-1 md:col-span-2 lg:row-start-1 lg:col-start-1">
                  <img
                    src="https://github.com/ma8642/stayges/blob/main/images/logo.png?raw=true"
                    alt=""
                    className="logo-3 h-8 w-auto"
                  />
                </div>

                {/* Sitemap sections */}
                <div className="mt-10 col-span-6 grid grid-cols-2 gap-8 sm:grid-cols-3 md:mt-0 md:row-start-1 md:col-start-3 md:col-span-8 lg:col-start-2 lg:col-span-6">
                  <div className="grid grid-cols-1 gap-y-12 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8">
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
                    Want to bring Stayges to your city?
                  </h3>
                  <form className="mt-2 flex sm:max-w-md">
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      type="text"
                      autoComplete="email"
                      required
                      placeholder="your@email.com"
                      className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    />
                    <div className="ml-4 flex-shrink-0">
                      <button
                        type="submit"
                        className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Let's talk
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 py-10 text-center">
              <p className="text-sm text-gray-500">
                &copy; 2022 Stayges, LLC. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
