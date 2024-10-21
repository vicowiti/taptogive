import React from "react";

const AboutUs = () => {
  return (
    <div id="about" className="relative bg-gray-900 h-screen">
      <div className="absolute inset-x-0 bottom-0 h-80 xl:top-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2">
            <img
              width={100}
              height={100}
              className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
              src="/landing/praise.jpg"
              alt="feature"
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
            <span className="text-white font-extrabold text-3xl">About Us</span>
          </h2>

          <p className="mt-5 text-xl text-gray-300">
            Tap2Give makes giving to your church a convenient and joyful
            experience. Our platform provides church members with easy access to
            various giving categories enabling quick and secure contributions
            via mobile moey and other supported payment platforms. We are
            committed to simplifying the giving process, empowering church
            communities, and supporting a culture of generosity.
          </p>

          <h4 className="text-white mt-5 font-bold text-2xl">
            Empowering seamless giving for your church
          </h4>
          <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            {/* {metrics.map((item) => (
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
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
