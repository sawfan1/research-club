import Logo from "@/components/v2/Logo";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 absolute top-0 z-50 flex w-full">
      <div className="text-white ml-4 my-4">
        <h1 className="text-lg font-bold">
          <Logo /> SD Research Club
        </h1>
      </div>
      <div className="text-white ml-6 font-bold justify-center hidden md:flex">
        <ul className="flex gap-4 items-center justify-center">
          <li className="transition-colors px-4 h-full flex items-center cursor-pointer hover:bg-gray-900">
            <p>About Us</p>
          </li>
          <li className="transition-colors px-4 h-full flex items-center cursor-pointer hover:bg-gray-900">
            <p>Issues</p>
          </li>
          <li className="transition-colors px-4 h-full flex items-center cursor-pointer hover:bg-gray-900">
            <p>Events</p>
          </li>
          <li className="transition-colors px-4 h-full flex items-center cursor-pointer hover:bg-gray-900">
            <p>Workshops</p>
          </li>
          <li className="transition-colors px-4 h-full flex items-center cursor-pointer hover:bg-gray-900">
            <p>Faculty</p>
          </li>
        </ul>
      </div>
    </nav>
  );
}
