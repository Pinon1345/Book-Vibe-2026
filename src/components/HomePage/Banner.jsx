// import React from 'react';
import heroImage from "../../assets/hero_img_two.png";

const Banner = () => {
    return (
        <div>

            <div className="hero bg-base-200 min-h-screen rounded-xl my-6 container mx-auto w-11/12">
                <div className="hero-content flex-col lg:flex-row-reverse gap-8 w-full justify-around">
                    <img
                        src={heroImage}
                        className="max-w-sm rounded-lg w-full h-full shadow-2xl"
                    />
                    <div className="space-y-12">
                        <h1 className="text-6xl font-bold">Books to freshen up <br /> your bookshelf</h1>

                        <div className="pt-4">
                            <button
                                className="btn bg-[#23BE0A] hover:bg-[#1fa309] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                View The List
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;