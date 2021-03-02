import React from "react";

export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="w-full relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-blue-500"
                            href="#pablo"
                        >
                            Health Explore
            </a>
                        <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <div className={
                        "lg:flex flex-grow justify-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }>
                        <ul className="flex flex-col lg:flex-row list-none">
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center uppercase font-bold leading-snug hover:opacity-75"
                                    href="#pablo"
                                >
                                    <span className="ml-2">Profile</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center uppercase font-bold leading-snug hover:opacity-75"
                                    href="#pablo"
                                >
                                    <span className="ml-2">Jobs</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center uppercase font-bold leading-snug hover:opacity-75"
                                    href="#pablo"
                                >
                                    <span className="ml-2">Professional network</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center uppercase font-bold leading-snug hover:opacity-75"
                                    href="#pablo"
                                >
                                    <span className="ml-2">Lounge</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center uppercase font-bold leading-snug hover:opacity-75"
                                    href="#pablo"
                                >
                                    <span className="ml-2">Salary</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div
                        className={
                            "lg:flex items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item self-center">
                                <a
                                    className="px-3 py-2 flex items-center uppercase font-bold leading-snug hover:opacity-75"
                                    href="#pablo"
                                >
                                    <button className="border text-blue-500 border-blue-500 px-3 py-2 rounded-lg">Create Job</button>
                                </a>
                            </li>
                            <li className="nav-item self-center">
                                <a
                                    className="px-3 py-2 flex items-center uppercase font-bold leading-snug hover:opacity-75"
                                    href="#pablo"
                                >
                                    <button className="bg-blue-500 text-white rounded-full w-8 h-8">JO</button>
                                </a>
                            </li>
                            <li className="nav-item self-center">
                                <a
                                    className="px-3 py-2 flex items-center uppercase font-bold leading-snug hover:opacity-75"
                                    href="#pablo"
                                >
                                    <span className="ml-2">Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
