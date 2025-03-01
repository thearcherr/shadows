import { JSX } from "react";

export default function Hero(): JSX.Element {
    return (
        <div className="h-screen hero relative">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0">
                <h1 className="text-6xl md:text-9xl font-roboto text-white mt-30 font-bold">
                    <span className="bg-white text-black">EVELYN</span>
                </h1>
                <h1 className="text-4xl md:text-7xl font-roboto text-white mt-10 mx-30">
                    PHOTOGRAPHY
                </h1>
            </div>
        </div>
    )
}