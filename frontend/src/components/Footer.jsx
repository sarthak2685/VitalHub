import React from 'react';

function Footer() {
  return (
    <>
<footer className="">
<hr className="my-6 border-gray-800 md:my-10" />

    <div className="container  mx-auto">
        <div className="flex flex-col items-center text-center">
            <a href="#">
            <img src="/logo.png" alt="logo" className="w-auto h-10" />

            </a>

            <div className="flex flex-wrap justify-center mt-6 -mx-4">
                <a
                    href="#"
                    className="mx-4 text-sm text-black font-semibold transition-colors duration-300 hover:text-blue-500  "
                    aria-label="Reddit"
                >
                    Home
                </a>
                <a
                    href="#"
                    className="mx-4 text-sm text-black font-semibold transition-colors duration-300 hover:text-blue-500  "
                    aria-label="Reddit"
                >
                    About
                </a>
                <a
                    href="#"
                    className="mx-4 text-sm text-black font-semibold transition-colors duration-300 hover:text-blue-500  "
                    aria-label="Reddit"
                >
                    Service
                </a>
                <a
                    href="#"
                    className="mx-4 text-sm text-black font-semibold transition-colors duration-300 hover:text-blue-500  "
                    aria-label="Reddit"
                >
                    Contact
                </a>
                <a
                    href="#"
                    className="mx-4 text-sm text-black font-semibold transition-colors duration-300 hover:text-blue-500  "
                    aria-label="Reddit"
                >
                    Appointment
                </a>
            </div>
        </div>

        <hr className="my-6 border-gray-800 md:my-10" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between ml-4 mr-4 mt-4">
            <p className="text-sm text-black font-bold ">© Copyright 2024.| All Rights Reserved.</p>

            <div className="flex -mx-2">
                <a
                    href="#"
                    className="mx-2 text-black font-semibold transition-colors duration-300  hover:text-blue-500 "
                    aria-label="Reddit"
                >
                    <svg
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z" />
                    </svg>
                </a>

                <a
                    href="#"
                    className="mx-2 text-black font-semibold transition-colors duration-300  hover:text-blue-500 "
                    aria-label="Facebook"
                >
                    <svg
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M13.859 21.002C13.859 21.002 14.031 21.002 14.155 21.002C18.62 21.002 21 18.673 21 14.275C21 10.178 18.574 7.8 14.467 7.8H13.5V9.98C13.5 9.98 14.443 9.98 14.824 9.98C15.0157 9.9834 15.2029 10.0336 15.3656 10.125C15.5284 10.2163 15.6618 10.3469 15.751 10.502C15.8211 10.618 15.8682 10.7496 15.8891 10.8871C15.91 11.0246 15.9041 11.1658 15.8715 11.3013C15.8388 11.4368 15.7802 11.5636 15.7 11.672C15.6197 11.7804 15.5197 11.8678 15.407 11.928C15.3001 11.9945 15.1777 12.0279 15.053 12.025H14.194C13.98 12.025 13.5 12.025 13.5 12.025V21.002H10.5V12.025H9.5V9.98H10.5V8.96C10.5 7.36 11.199 5 14.307 5C14.4996 4.9965 14.6921 5.01047 14.882 5.04193C15.1435 5.08267 15.3966 5.16456 15.63 5.284C15.8098 5.38172 15.9778 5.494 16.133 5.619L15.5 7.815C15.284 7.78953 15.0665 7.77157 14.848 7.761L14.7 7.75C14.08 7.75 13.5 8 13.5 8.65V10H14.67L14.5 12.025H13.5V21.002H13.859Z" />
                    </svg>
                </a>

                <a
                    href="#"
                    className="mx-2 text-black font-semibold transition-colors duration-300  hover:text-blue-500 "
                    aria-label="Github"
                >
                    <svg
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10.9 2C6.52 2 2.9 5.65 2.9 10.07C2.9 14.17 5.47 17.51 9.15 18.55C9.49 18.61 9.63 18.4 9.63 18.22C9.63 18.05 9.62 17.55 9.62 16.95C6.9 17.56 6.17 15.91 6.17 15.91C5.86 15.11 5.38 14.89 5.38 14.89C4.73 14.45 5.42 14.46 5.42 14.46C6.13 14.52 6.53 15.22 6.53 15.22C7.14 16.28 8.1 15.97 8.46 15.81C8.52 15.28 8.73 14.92 8.96 14.72C6.96 14.53 4.85 13.83 4.85 10.21C4.85 9.25 5.17 8.46 5.71 7.85C5.62 7.65 5.31 6.81 5.79 5.6C5.79 5.6 6.53 5.39 9.63 7.17C10.34 6.97 11.12 6.87 11.9 6.87C12.68 6.87 13.46 6.97 14.18 7.17C17.27 5.38 18.01 5.59 18.01 5.59C18.49 6.81 18.18 7.65 18.09 7.85C18.63 8.46 18.95 9.24 18.95 10.21C18.95 13.84 16.83 14.53 14.83 14.72C15.15 15.02 15.43 15.59 15.43 16.39C15.43 17.53 15.41 18.42 15.41 18.22C15.41 18.39 15.56 18.61 15.91 18.55C19.6 17.51 22.17 14.16 22.17 10.07C22.17 5.65 18.55 2 14.17 2H10.9Z" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</footer>


    </>
  )
}

export default Footer