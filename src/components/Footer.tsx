import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-5 bg-white lg:px-20 px-5 text-lg font-semibold flex flex-col lg:flex-row justify-between w-full">
      <div className="flex justify-center items-center">
        <Image src="/logo/logo.png" width={100} height={50} alt="logo" />
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="flex justify-center items-center">
          <p className="duration-300 hover:text-green-600">© 2023 Tap2Give</p>
        </div>

        <div className="flex justify-center items-center">
          <p className="duration-300 hover:text-green-600">
            Phone: +254 777 104 733
          </p>
        </div>
        <div className="flex justify-center items-center">
          <p className="duration-300 hover:text-green-600">
            Email: info@tap2give.co.ke
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
