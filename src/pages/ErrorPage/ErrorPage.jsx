// import React from 'react';
import { Link } from "react-router";

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-[#f8fafc] text-black flex items-center justify-center px-6 overflow-hidden relative">

            {/* Background Blur */}
            <div className="absolute w-72 h-72 bg-purple-300/40 rounded-full blur-3xl top-10 left-10"></div>
            <div className="absolute w-72 h-72 bg-cyan-300/40 rounded-full blur-3xl bottom-10 right-10"></div>

            <div className="relative z-10 text-center max-w-xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-3xl p-10">

                {/* 404 Text */}
                <h1 className="text-8xl md:text-[170px] font-black bg-linear-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text leading-none">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-3xl md:text-5xl font-bold mt-4">
                    Oops! Page Not Found
                </h2>

                {/* Description */}
                <p className="text-gray-500 mt-4 text-sm md:text-base leading-relaxed">
                    The page you are looking for doesn’t exist or has been moved.
                    Maybe the URL is wrong or the page was deleted.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">

                    <Link to="/">
                        <button className="px-7 py-3 rounded-xl bg-linear-to-r from-cyan-500 to-blue-500 text-white hover:scale-105 duration-300 font-semibold shadow-lg shadow-cyan-300/40">
                            Back Home
                        </button>
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="px-7 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 duration-300 font-semibold"
                    >
                        Go Back
                    </button>

                </div>

                {/* Small Bottom Text */}
                <p className="mt-10 text-xs text-gray-400">
                    Error Code: 404 | Lost in Space  🚀
                </p>

            </div>
        </div>
    );
};

export default ErrorPage;