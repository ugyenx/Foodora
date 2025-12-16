import React from "react";

export const ShimmerCard = () => {
    return (
        <div className="w-full max-w-[280px] h-60 bg-gray-100 rounded-3xl p-4 animate-pulse relative mb-7 ring-1 ring-gray-100">
            {/* Circle Image Placeholder */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <div className="w-48 h-48 bg-gray-200 rounded-full border-4 border-white"></div>
            </div>

            {/* Content Placeholders */}
            <div className="mt-36 flex flex-col items-center gap-3">
                <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
                <div className="h-3 w-1/3 bg-gray-200 rounded"></div>
            </div>
        </div>
    );
};

export const ShimmerCarousel = () => {
    return (
        <div className="flex justify-center gap-4 w-full pt-12 px-4 py-8 overflow-hidden">
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex-shrink-0 w-[280px]">
                    <ShimmerCard />
                </div>
            ))}
        </div>
    );
};

export const ShimmerGrid = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-32 justify-items-center mt-40">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="w-full">
                    <ShimmerCard />
                </div>
            ))}
        </div>
    );
};
