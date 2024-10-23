"use client"

import {
 
  BellIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon,
  DocumentIcon,
  FolderIcon,
  GiftIcon,

  QrCodeIcon,

  SparklesIcon,

  UsersIcon,
 
} from "@heroicons/react/24/outline";
import ContactUs from "@/components/ContactUs"
import AltHero from "@/components/Hero"

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


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
    name: "Mobile Money Donations",
    description:
      "Members can give securely via mobile money by simply scanning a QR code, making giving fast and convenient from their smartphones.",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "QR Code Giving",
    description:
      "Simplify the donation process by allowing members to scan QR codes to give directly to specific causes or church funds.",
    icon: QrCodeIcon,
  },
  {
    name: "Member Contribution Tracking",
    description:
      "Track each member's contributions over time, providing detailed reports for transparency and accountability.",
    icon: ChartBarIcon,
  },
  {
    name: "Team Management",
    description:
      "Assign roles to team members and manage who can create or oversee donation categories and reporting.",
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
  {
    id: 4,
    stat: "12M+",
    emphasis: "Transactions",
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
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
   
    
    { name: "Partners", href: "#" },
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
      icon: FaFacebook
    },
    {
      name: "Instagram",
      href: "#",
      icon: FaInstagram
      ,
    },
    {
      name: "Twitter",
      href: "#",
      icon: FaXTwitter
    },
  
  ],
};

function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function AltLanding() {
  return (
    <div className="bg-white">
      <main>
        {/* Hero section */}
        <AltHero />

        {/* Logo Cloud */}

        {/* Alternating Feature Sections */}
        <div className="relative overflow-hidden pt-16 pb-32">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
          />
          <div className="relative">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
              <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                <div>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-green-600 to-[#083D77]">
                      <SparklesIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                      Streamline Church Giving with Ease
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      Automate tithes and offerings while allowing members to
                      donate via mobile money with a simple QR code. Track
                      contributions and manage funds efficiently, ensuring your
                      church stays on top of its giving efforts.
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-green-600 to-[#083d77] bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm "
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-6">
                  <blockquote>
                    <div>
                      <p className="text-base text-gray-500">
                        &ldquo;This system has transformed our church’s giving.
                        Members love the convenience, and we can easily manage
                        and track donations.&rdquo;
                      </p>
                    </div>
                    <footer className="mt-3">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <img
                            className="h-6 w-6 rounded-full"
                            src="https://unsplash.com/photos/standing-man-wearing-blue-denim-button-up-jacket-while-holding-microphone-pHb0Ztr2CFE"
                            alt=""
                          />
                        </div>
                        <div className="text-base font-medium text-gray-700">
                          Pastor John Sifuna, Church Leader
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="/landing/auth.jpg"
                    alt="church"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24"></div>
        </div>

        {/* Gradient Feature Section */}
        <div className="bg-gradient-to-r from-green-800 to-[#083D77]">
          <div className="mx-auto max-w-4xl py-16 px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Simplified Giving for Your Church
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-purple-200">
              Manage tithes, offerings, and donations effortlessly with our
              automated giving platform. Set up giving categories, allow mobile
              money donations via QR codes, and track contributions with
              ease—all built to enhance church stewardship and member
              convenience.
            </p>
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
              <p className="mt-3 text-3xl font-bold tracking-tight bg-gradient-to-r from-green-300 to-[#083D77] bg-clip-text text-transparent">
                About Us
              </p>
              <p className="mt-5 text-lg text-gray-300">
                Tap2Give makes giving to your church a convenient and joyful
                experience. Our platform provides church members with easy
                access to various giving categories enabling quick and secure
                contributions via mobile moey and other supported payment
                platforms. We are committed to simplifying the giving process,
                empowering church communities, and supporting a culture of
                generosity.
              </p>
              <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
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
              <span className="-mb-1 block bg-gradient-to-r from-green-600 to-[#083D77] bg-clip-text pb-1 text-transparent">
                Get in touch or create an account.
              </span>
            </h2>
            <div className="mt-6 space-y-4 sm:flex sm:space-y-0 sm:space-x-5">
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-green-600 to-[#083d77] bg-origin-border px-4 py-3 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
              >
                Learn more
              </a>
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-50 px-4 py-3 text-base font-medium text-indigo-800 shadow-sm "
              >
                Get started
              </a>
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
                    Solutions
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
                    Support
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
                    Company
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {footerNavigation.company.map((item) => (
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
              &copy; {new Date().getFullYear()} Tap To Give, Inc. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
