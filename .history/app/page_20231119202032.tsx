import Image from "next/image";
import Link from "next/link";
import logo from "public/logo.png";
const Home = () => {
  const handleClubsClick = (event) => {
    event.preventDefault();
    // 处理点击事件，显示/隐藏下拉菜单
    // 可以使用 useState 来处理显示/隐藏状态
    console.log("Clubs Clicked");
  }
 
  return (
    <nav className="bg-gray-800 p-4">
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
                href="/"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={handleClubsClick}
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
              >
                Clubs
              </a>
              {/* 下拉菜单 */}
              {/* 可以使用 state 控制显示/隐藏 */}
              <div className="hidden">
                <ul>
                  <li>
                    <Link href="/Clubs/Club1">
                      <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded block">
                        Club 1
                      </a>
                    </Link>
                
            </li>
            <li>
              <a
                href="/About"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </li>
      </div>
    </nav>
  )
  }

