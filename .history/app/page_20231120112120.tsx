import { useRouter } from "next/router";
import Image from "next/image";
import logo from "public/logo.png";

export default function Home() {
  const router = useRouter();

  const navigateTo = (route: any) => {
    router.push(route);
  };

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <div className="flex items-center">
            <Image src={logo} alt="Lu Lab" width={50} height={50} />
            <span className="ml-2 text-lg">Lu Lab</span>
          </div>
        </div>

        <div className="flex-grow text-center">
          <ul className="flex justify-center space-x-4">
            <li>
              <a
                onClick={() => navigateTo("/")}
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => navigateTo("/Clubs")}
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded cursor-pointer"
              >
                Clubs
              </a>
            </li>
            <li>
              <a
                onClick={() => navigateTo("/About")}
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded cursor-pointer"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
