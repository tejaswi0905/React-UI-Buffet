import Link from "next/link";


const HomePage = () => {
  return (
    <div className="container mx-auto px-6 py-10 bg-gradient-to-r from-indigo-200 to-indigo-300 min-h-screen">
      <header className="flex justify-between items-center bg-gradient-to-r from-gray-100 to-indigo-200 px-6 py-4 rounded-lg shadow-md">
        <div className="flex flex-col items-center">
          <span className="text-gray-900 font-semibold text-lg">User Name</span>
          <Link href="/auth/login">
            <span className="text-gray-700 hover:text-blue-600 mt-1">
              Login
            </span>
          </Link>
        </div>
        <h1 className="text-4xl font-extrabold text-blue-600">
          react-ui-buffet
        </h1>
        <div className="flex flex-col items-center">
          <Link href="https://github.com/tejaswi0905">
            <span className="text-gray-700 hover:text-blue-600">GitHub</span>
          </Link>
        </div>
      </header>
      <div className="flex mt-10">
        <aside className="w-1/4 px-6 py-8 rounded-lg shadow-md bg-gradient-to-r from-gray-100 to-indigo-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Navigation</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/">
                <span className="text-gray-700 hover:text-blue-600 text-lg">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/timer">
                <span className="text-gray-700 hover:text-blue-600 text-lg">
                  Timer
                </span>
              </Link>
            </li>
            <li>
              <Link href="/accordion">
                <span className="text-gray-700 hover:text-blue-600 text-lg">
                  Accordion
                </span>
              </Link>
            </li>
            <li>
              <Link href="/auto-complete-search">
                <span className="text-gray-700 hover:text-blue-600 text-lg">
                  Auto-Complete Search
                </span>
              </Link>
            </li>
          </ul>
        </aside>
        <main className="w-3/4 ml-8 bg-gradient-to-r from-gray-100 to-indigo-200 px-6 py-8 rounded-lg shadow-md">
          <p>
            /Todo main content, Add user details Describe project and provide my
            social links/
          </p>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
