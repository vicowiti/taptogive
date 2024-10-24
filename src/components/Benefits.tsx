

const posts = [
  {
    icon: "/give.jpg",
    title: "Streamlined Giving",
    href: "#",
    category: { name: "Article", href: "#" },
    description:
      "Tap2Give simplifies the giving process, making giving faster and more convenient, ensuring memners can focus on their spiritual experience without worrying about how to contribute.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "#",
    },
  },
  {
    icon: "/grow.jpg",
    title: "Know More, Grow More",
    href: "#",
    category: { name: "Video", href: "#" },
    description:
      "With Comprehensive analytics, churches can track giving trends and visualize data in real time. This helps the leadership make informed decisions and plan for future growth, allowing the chuch to thrive financially and spriritually.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "4 min",
    author: {
      name: "Brenna Goyette",
      href: "#",
    },
  },
  {
    icon: "/empower.jpg",
    title: "Empower Every Giving, Every Member",
    href: "#",
    category: { name: "Case Study", href: "#" },
    description:
      "Tap2Give's scheduling, giving history and pledge features enhnce the member experience by providing personalized options. Churches can promote a stronger connection with their congregation, encouraging regular contributions and fostering a sense of belonging through customized interactions and giving opportunities.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
    },
  },
];

export default function Benefits() {
  return (
    <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Benefits of Tap To Give
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Tap To Give lets church members donate quickly via mobile, offering
            a simple and secure platform for giving.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0 flex justify-center items-center">
                <img src={post.icon}
                  color="#f9995d"
                  className="h-48 w-[50%] object-fit"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <a href={post.href} className="mt-2 block">
                    <p className="text-2xl font-bold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-5 text-lg text-gray-500">
                      {post.description}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
