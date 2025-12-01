import Image from "next/image";

const Navbar = () => {
  return (
    <header className="w-full h-[84px] bg-white">
      <nav className="h-full max-w-[1440px] mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/Health-care7.png"
            alt="Logo"
            width={100}
            height={78}
            priority
            className="object-contain pt-4"
          />
        </div>


        {/* Nav links */}
        <ul className="hidden md:flex items-center space-x-10 font-normal">
          <li><a href="#" className="hover:text-gray-500 text-[19.19px] text-black">Home</a></li>
          <li><a href="#" className="hover:text-gray-500 text-[19.19px] text-black">Shop</a></li>
          <li><a href="#" className="hover:text-gray-500 text-[19.19px] text-black">About Us</a></li>
          <li><a href="#" className="hover:text-gray-500 text-[19.19px] text-black">FAQ</a></li>
          <li><a href="#" className="hover:text-gray-500 text-[19.19px] text-black">Blog</a></li>
          <li><a href="#" className="hover:text-gray-500 text-[19.19px] text-black">Contact Us</a></li>


          <li>
            <Image
              src="/bag.png"
              alt="Bag"
              width={20.39}
              height={21.59}
              className="cursor-pointer"
            />
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button aria-label="Menu">
            <Image src="/menu.svg" alt="menu" width={26} height={26} />
          </button>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
