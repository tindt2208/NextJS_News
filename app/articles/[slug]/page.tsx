import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import ReactMarkdown from "react-markdown"

const markdown = ``
export default function Page() {
    // redirect('/login');
    return (
        <>
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <div className="flex flex-col justify-center rounded bg-gray-50 dark:bg-gray-800 p-6">
                        {/* Title */}
                        <div>
                            <nav className="flex mb-4" aria-label="Breadcrumb">
                                <ol className="inline-flex items-center space-x-1 md:space-x-3 rtl:space-x-reverse">
                                    <li className="inline-flex items-center">
                                        <a
                                            href="#"
                                            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                                        >
                                            <svg
                                                className="w-3 h-3 me-2.5"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                            </svg>
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <div className="flex items-center">
                                            <svg
                                                className="w-3 h-3 text-gray-400 mx-1 rtl:rotate-180"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 6 10"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="m1 9 4-4-4-4"
                                                />
                                            </svg>
                                            <a
                                                href="#"
                                                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                                            >
                                                Projects
                                            </a>
                                        </div>
                                    </li>
                                    <li aria-current="page">
                                        <div className="flex items-center">
                                            <svg
                                                className="w-3 h-3 text-gray-400 mx-1 rtl:rotate-180"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 6 10"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="m1 9 4-4-4-4"
                                                />
                                            </svg>
                                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                                                Flowbite
                                            </span>
                                        </div>
                                    </li>
                                </ol>
                            </nav>
                            <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
                                Team management
                            </h2>
                            <h6 className="text-lg font-bold dark:text-white mb-4">Heading 6</h6>
                            <div className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse divide-x divide-slate-400">
                                <div
                                    className="inline-flex items-center text-sm font-medium text-gray-700  dark:text-gray-400 "
                                >
                                    <div className="w-7 h-7 me-2.5 relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                        <span className="font-medium text-gray-600 dark:text-gray-300">JL</span>
                                    </div>
                                    Name
                                </div>
                                <div className="inline-flex items-center text-sm font-medium text-gray-700  dark:text-gray-400">
                                    <div
                                        className="ms-1 text-sm font-medium text-gray-700  md:ms-2 dark:text-gray-400 "
                                    >
                                        Projects
                                    </div>
                                </div>
                                <div className="inline-flex items-center text-sm font-medium text-gray-700  dark:text-gray-400">
                                    <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                                        Flowbite
                                    </span>
                                </div>
                            </div>
                        </div>
                        <hr className="border-gray-600 my-4" />
                        <div className="flex items-center justify-center rounded bg-gray-50  dark:bg-gray-800 my-4">
                            <ReactMarkdown className={`prose prose-xl  dark:prose-invert max-w-none subpixel-antialiased font-sans`} >{markdown}</ReactMarkdown>
                        </div>                       
                    </div>
                </div>
            </div>
        </>
    );
}
