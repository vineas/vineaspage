export const Footer = () => {
    return (
        <>
            <div>
      <footer className="shadow bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="#"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-3xl font-semibold whitespace-nowrap text-white">
                <div className="VT323">
                VineasPage
                </div>
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 text-gray-400">
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
          <span className="block text-sm  sm:text-center text-gray-400">
            © 2024{" "}
            <a href="#" className="hover:underline">
              VineasPage
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
        </>
    );
};
