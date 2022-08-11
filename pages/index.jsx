import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

const features = [
  {
    name: "Analytics",
    href: "#",
    description:
      "Get a better understanding of where your traffic is coming from.",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    href: "#",
    description: "Speak directly to your customers in a more meaningful way.",
    icon: CursorClickIcon,
  },
  {
    name: "Security",
    href: "#",
    description: "Your customers' data will be safe and secure.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    href: "#",
    description: "Connect with third-party tools that you're already using.",
    icon: ViewGridIcon,
  },
  {
    name: "Automations",
    href: "#",
    description:
      "Build strategic funnels that will drive your customers to convert",
    icon: RefreshIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

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
              Start Working
            </a>
          </div>
        </div>
      </div>

      <main className="lg:relative">
        <div
          // className="mx-auto max-w-7xl w-full pt-16 pb-20 lg:py-48 lg:text-left"
          className="flex flex-col py-10 lg:flex-row lg:justify-between lg:items-center"
          data-testid="test-splash-container"
        >
          <div
            className="px-4 py-5 lg:w-1/2 sm:px-8 xl:pr-16"
            data-testid="test-splash-text-container"
          >
            <h1
              className="font-homeTitle text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
              data-testid="test-splash-title"
            >
              <span className="block xl:inline">The best</span>{" "}
              <span className="block text-staygesPurple xl:inline">
                working
              </span>{" "}
              <span className="block text-staygesOrange xl:inline">
                environment
              </span>{" "}
              <span className="block xl:inline">for productivity</span>
              <img
                className="w-3/6"
                src="https://github.com/ma8642/stayges/blob/main/images/figma_homepage_effect_1.png?raw=true"
                alt=""
              />
            </h1>
            <p className="mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:max-w-3xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
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
                  Start Working
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
