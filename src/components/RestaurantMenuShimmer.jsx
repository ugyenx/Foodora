import React from "react";

const RestaurantMenuShimmer = () => {
    return (
        <div className="mx-4 md:mx-20 lg:mx-45 animate-pulse">
            {/* Header Skeleton */}
            <div className="mb-10">
                <div className="h-8 w-1/3 bg-gray-200 rounded mb-5"></div>
                <div className="bg-gray-100 rounded-2xl border border-slate-900/5 p-6 h-48">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-full bg-gray-200"></div>
                            <div className="h-4 w-40 bg-gray-200 rounded"></div>
                        </div>
                        <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
                        <div className="flex gap-3">
                            <div className="flex flex-col gap-2">
                                <div className="h-2 w-2 rounded-full bg-gray-200"></div>
                                <div className="h-8 w-[1px] bg-gray-200 mx-auto"></div>
                                <div className="h-2 w-2 rounded-full bg-gray-200"></div>
                            </div>
                            <div className="flex flex-col gap-3 w-full">
                                <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                                <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu Categories Skeleton */}
            <div className="mt-10 md:mx-5 flex flex-col gap-8">
                {[1, 2, 3].map((category) => (
                    <div key={category}>
                        {/* Category Title */}
                        <div className="flex justify-between items-center mb-6">
                            <div className="h-6 w-1/3 bg-gray-200 rounded"></div>
                            <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
                        </div>

                        {/* Menu Items */}
                        <div className="flex flex-col gap-8">
                            {[1, 2].map((item) => (
                                <div key={item} className="flex justify-between items-start gap-4">
                                    <div className="flex flex-col gap-3 w-[60%] md:w-4/5">
                                        <div className="h-5 w-3/4 bg-gray-200 rounded"></div>
                                        <div className="h-4 w-16 bg-gray-200 rounded"></div>
                                        <div className="h-10 w-full bg-gray-200 rounded hidden md:block"></div>
                                    </div>
                                    <div className="w-[35%] md:w-32 h-24 md:h-32 bg-gray-200 rounded-xl relative">
                                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-8 w-24 bg-gray-300 rounded-lg"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="h-[1px] w-full bg-gray-200 mt-8"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RestaurantMenuShimmer;
