"use client";

import {
  BellIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon,
  DocumentIcon,
  FolderIcon,
  GiftIcon,
  QrCodeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import ContactUs from "@/components/ContactUs";
import AltHero from "@/components/Hero";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Benefits from "./Benefits";
import Link from "next/link";

const features = [
  {
    name: "Automated Giving",
    description:
      "Easily set up automated tithing and offerings for hassle-free giving. Members can schedule their donations to support church operations consistently.",
    icon: GiftIcon,
  },
  {
    name: "Custom Giving Categories",
    description:
      "Create and manage multiple giving categories and subcategories, from tithes to special offerings, ensuring donations are directed where they are needed most.",
    icon: FolderIcon,
  },
  {
    name: "Multi-Channel Payment",
    description:
      "Integration with popular platforms like M-Pesa, Airtel Money, credit/debit cards, and others",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Member Management & Engagement",
    description:
      "Churches and members can monitor individual giving histories, pledges management, send announcements, reminders, and updates to members in real time.",
    icon: QrCodeIcon,
  },
  {
    name: "Member Contribution Tracking",
    description:
      "Track each member's contributions over time, providing detailed reports for transparency and accountability.",
    icon: ChartBarIcon,
  },
  {
    name: "User-Friendly Interface",
    description:
      "Both congregants and church administrators can easily navigate and use the platform, making adoption and engagement seamless.",
    icon: UsersIcon,
  },
  {
    name: "Instant Giving Notifications",
    description:
      "Notify members instantly upon successful donations, and keep them engaged with regular updates on their contributions.",
    icon: BellIcon,
  },
  {
    name: "Detailed Financial Reports",
    description:
      "Generate in-depth financial reports for church leaders, ensuring proper stewardship and insight into church funds.",
    icon: DocumentIcon,
  },
];

const metrics = [
  {
    id: 1,
    stat: "800+",
    emphasis: "Churches",
    rest: "",
  },
  {
    id: 2,
    stat: "25K+",
    emphasis: "Congregants",
    rest: "",
  },
  {
    id: 3,
    stat: "98%",
    emphasis: "System efficiency",
    rest: "",
  },
];
const footerNavigation = {
  solutions: [
    { name: "Analytics", href: "#" },
    { name: "Bulk SMS", href: "#" },
    { name: "Automations", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" },
  ],
  company: [
    { name: "Sign In", href: "/login" },
    { name: "Sign Up", href: "/register" },
    { name: "Home", href: "/" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: FaFacebook,
    },
    {
      name: "Instagram",
      href: "#",
      icon: FaInstagram,
    },
    {
      name: "Twitter",
      href: "#",
      icon: FaXTwitter,
    },
  ],
};

export default function AltLanding() {
  return (
    <div className="bg-white">
      <main>
        {/* Hero section */}
        <AltHero />

        {/* Logo Cloud */}

        {/* Alternating Feature Sections */}
        <Benefits />

        {/* Gradient Feature Section */}
        <div id="features" className="bg-gradient-to-r from-green-800 to-[#083D77]">
          <div className="mx-auto max-w-4xl py-16 px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Tap2Give Features
            </h2>
           
            <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name}>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-white">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-base text-purple-200">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="relative bg-gray-900">
          <div className="absolute inset-x-0 bottom-0 h-80 xl:top-0 xl:h-full">
            <div className="h-full w-full xl:grid xl:grid-cols-2">
              <div className="h-full xl:relative xl:col-start-2">
                <img
                  className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                  src="/landing/praise.jpg"
                  alt="church service"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                />
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-4xl px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
            <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
              <h2 className="text-base font-semibold">
                {/* <span className="bg-gradient-to-r from-green-300 to-[#083D77] bg-clip-text text-transparent">
                  Valuable Metrics
                </span> */}
              </h2>

              <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-3">
                {metrics.map((item) => (
                  <p key={item.id}>
                    <span className="block text-2xl font-bold text-white">
                      {item.stat}
                    </span>
                    <span className="mt-1 block text-base text-gray-300">
                      <span className="font-medium text-white">
                        {item.emphasis}
                      </span>{" "}
                      {item.rest}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white">
          <div className="mx-auto max-w-4xl py-16 px-6 sm:py-24 lg:flex lg:max-w-7xl lg:items-center lg:justify-between lg:px-8">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Ready to get started?</span>
            </h2>
            <div className="mt-6 space-y-4 sm:flex sm:space-y-0 sm:space-x-5">
              <Link
                href="/#about"
                className="flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-green-600 to-[#083d77] bg-origin-border px-4 py-3 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
              >
                Learn more
              </Link>
              <Link
                href="/register"
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-50 px-4 py-3 text-base font-medium text-indigo-800 shadow-sm "
              >
                Get started
              </Link>
            </div>
          </div>
        </div>

        <ContactUs />
      </main>

      <footer className="bg-gray-50" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-8 lg:pt-24">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base font-medium text-gray-900">
                    Benefits
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {footerNavigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-base font-medium text-gray-900">
                    Features
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {footerNavigation.support.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base font-medium text-gray-900">
                    Navigation
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-base font-medium text-gray-900">Legal</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-12 xl:mt-0">
              <h3 className="text-base font-medium text-gray-900">
                Subscribe to our newsletter
              </h3>
              <p className="mt-4 text-base text-gray-500">
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
              <form className="mt-4 sm:flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-indigo-500"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-green-600 to-[#083d77] bg-origin-border px-4 py-3 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between lg:mt-16">
            <div className="flex space-x-6 md:order-2">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-base text-gray-400 md:order-1 md:mt-0">
              &copy; {new Date().getFullYear()} Tap2Give, Inc. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
