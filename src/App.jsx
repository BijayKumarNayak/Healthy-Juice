import React, { useState } from "react";

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <main className="overflow-hidden">
      <div>
        <div className="h-96 bg-slate-300">
          <nav className="flex items-center justify-between h-12 px-10 py-2 shadow-custom">
            <div>
              <h3 className="font-bold cursor-pointer">LOGO</h3>
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center gap-3 ">
                <li className="font-semibold cursor-pointer hover:text-blue-600">
                  HOME
                </li>
                <li className="font-semibold cursor-pointer hover:text-blue-600">
                  ABOUT
                </li>
                <li className="font-semibold cursor-pointer hover:text-blue-600">
                  CONTACT US
                </li>
              </ul>
            </div>

            <span
              className="material-symbols-outlined md:hidden"
              onClick={() => setShow(!show)}
            >
              menu
            </span>
            {show && (
              <div className="absolute right-0 p-4 bg-slate-300 top-12 ">
                <ul>
                  <li className="mb-2 font-semibold cursor-pointer">HOME</li>
                  <li className="mb-2 font-semibold cursor-pointer">ABOUT</li>
                  <li className="mb-2 font-semibold cursor-pointer">
                    CONTACT US
                  </li>
                </ul>
              </div>
            )}
          </nav>
          <div className="flex flex-col items-center gap-5 md:w-[540px] m-auto md:mt-20 mt-10">
            <h1 className="text-5xl font-bold text-center text-yellow-950">
              DRINK. CLEANSE. LIVE
            </h1>
            <div className="flex items-center justify-between w-full p-3 border border-black ">
              <p className="font-medium">4 STEP JUICE CLEANSE</p>
              <button className="px-3 py-2 text-sm font-semibold text-white bg-gradient-to-b from-yellow-900 to-yellow-950 hover:bg-gradient-to-t ">
                Start your cleanse
              </button>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center -mt-20 ">
          <img
            src="../public/images/coconut.webp"
            alt=""
            className="z-0 object-cover mt-20 h-72 w-80 -me-20"
          />
          <img
            src="../public/images/bottles.webp"
            alt=""
            className="z-10 h-80 w-[500px]  "
          />
          <img
            src="../public/images/fruit.webp"
            alt=""
            className="h-80 w-[400px] -ms-36 mt-6 z-30"
          />
          <img
            src="../public/images/banana.png"
            alt=""
            className="absolute bottom-0 z-40 md:left-72 left-48 w-60 h-36"
          />
        </div>
      </div>
      <div className="h-[90vh] bg-[#F4CB63] md:p-10 p-5 ">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:w-1/2 ">
            <h1 className="mb-3 text-5xl font-bold text-yellow-950">
              100% FRESH & NATURAL.
            </h1>
            <p className="mb-3 text-sm font-semibold">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <button className="px-3 py-2 text-sm font-semibold text-white rounded bg-gradient-to-b from-yellow-900 to-yellow-950 hover:bg-gradient-to-t">
              Start your cleanse
            </button>
          </div>
          <div className="relative flex items-baseline md:w-1/2">
            <img
              src="../public/images/image16.png"
              alt=""
              className="z-10 w-64 -mr-8 h-36"
            />
            <img
              src="../public/images/image15.png"
              alt=""
              className="z-0 h-96"
            />
            <img
              src="../public/images/image5.png"
              alt=""
              className="absolute object-contain w-32 h-20 bottom-10 right-24"
            />
          </div>
        </div>
      </div>
      <div className="h-[90vh] bg-[#C8DB8D] md:p-10 p-5 ">
        <div className="flex flex-col-reverse items-center md:flex-row ">
          <div className="relative flex items-baseline md:w-1/2">
            <img
              src="../public/images/image6.webp"
              alt=""
              className="z-0 md:w-96 w-72 "
            />
            <img
              src="../public/images/image7.png"
              alt=""
              className="z-10 h-80 -ms-10"
            />
            <img
              src="../public/images/image8.png"
              alt=""
              className="absolute object-contain h-32 -bottom-10 right-2 w-28"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="mb-3 text-5xl font-bold text-yellow-950 ">
              DESIGNED BY NUTRITIONIST & CLEANSE SPECIALISTS.
            </h1>
            <p className="mb-3 text-sm font-semibold">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <button className="px-3 py-2 text-sm font-semibold text-white rounded bg-gradient-to-b from-yellow-900 to-yellow-950 hover:bg-gradient-to-t">
              Start your cleanse
            </button>
          </div>
        </div>
      </div>
      <div className="md:h-[90vh] bg-[#B87FA6] md:p-10 p-5 ">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:w-1/2 ">
            <h1 className="mb-3 text-5xl font-bold text-yellow-950">
              AWARD WINNING TASTES.
            </h1>
            <p className="mb-3 text-sm font-semibold">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <button className="px-3 py-2 text-sm font-semibold text-white rounded bg-gradient-to-b from-yellow-900 to-yellow-950 hover:bg-gradient-to-t">
              Start your cleanse
            </button>
          </div>
          <div className="relative flex items-baseline md:w-1/2">
            <img
              src="../public/images/image9.png"
              alt=""
              className="w-36 h-28"
            />
            <img
              src="../public/images/image10.png"
              alt=""
              className="z-0 h-96"
            />
            <img
              src="../public/images/image11.webp"
              alt=""
              className="object-contain w-80 -ms-10"
            />
          </div>
        </div>
      </div>
      <div className="h-[90vh] bg-[#9FC6E0] md:p-10 p-5 ">
        <div className="flex flex-col-reverse items-center md:flex-row">
          <div className="relative flex items-baseline md:w-1/2">
            <img
              src="../public/images/image12.webp"
              alt=""
              className="z-20 w-64"
            />
            <img
              src="../public/images/image13.png"
              alt=""
              className="z-10 h-96 -ms-10 "
            />
            <img
              src="../public/images/image14.png"
              alt=""
              className="absolute z-0 w-52 right-20 bottom-10"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="mb-3 text-5xl font-bold text-yellow-950">
              4 DAYS 4 WAYS.
            </h1>
            <p className="mb-3 text-sm font-semibold">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <button className="px-3 py-2 text-sm font-semibold text-white rounded bg-gradient-to-b from-yellow-900 to-yellow-950 hover:bg-gradient-to-t">
              Start your cleanse
            </button>
          </div>
        </div>
      </div>

      <footer className="relative pt-8 pb-6 bg-blueGray-200">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full px-4 lg:w-6/12">
              <h4 className="text-3xl fonat-semibold text-blueGray-700">
                Let's keep in touch!
              </h4>
              <h5 className="mt-0 mb-2 text-lg text-blueGray-600">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 mb-6 lg:mb-0">
                <button
                  className="items-center justify-center w-10 h-10 mr-2 font-normal bg-white rounded-full shadow-lg outline-none text-lightBlue-400 align-center focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="items-center justify-center w-10 h-10 mr-2 font-normal bg-white rounded-full shadow-lg outline-none text-lightBlue-600 align-center focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-facebook-square"></i>
                </button>
                <button
                  className="items-center justify-center w-10 h-10 mr-2 font-normal text-pink-400 bg-white rounded-full shadow-lg outline-none align-center focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-dribbble"></i>
                </button>
                <button
                  className="items-center justify-center w-10 h-10 mr-2 font-normal bg-white rounded-full shadow-lg outline-none text-blueGray-800 align-center focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-github"></i>
                </button>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex flex-wrap mb-6 items-top">
                <div className="w-full px-4 ml-auto lg:w-4/12">
                  <span className="block mb-2 text-sm font-semibold uppercase text-blueGray-500">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                        href="https://www.creative-tim.com/presentation?ref=njs-profile"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                        href="https://blog.creative-tim.com?ref=njs-profile"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                        href="https://www.github.com/creativetimofficial?ref=njs-profile"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                      >
                        Free Products
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full px-4 lg:w-4/12">
                  <span className="block mb-2 text-sm font-semibold uppercase text-blueGray-500">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                        href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                        href="https://creative-tim.com/terms?ref=njs-profile"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                        href="https://creative-tim.com/privacy?ref=njs-profile"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                        href="https://creative-tim.com/contact-us?ref=njs-profile"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="w-full px-4 mx-auto text-center md:w-4/12">
              <div className="py-1 text-sm font-semibold text-blueGray-500">
                Copyright © <span id="get-current-year">2021</span>
                <a
                  href=""
                  className="text-blueGray-500 hover:text-gray-800"
                  target="_blank"
                >
                  Notus JS by
                </a>
                <a
                  href="https://www.creative-tim.com?ref=njs-profile"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  Creative Time{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default App;
