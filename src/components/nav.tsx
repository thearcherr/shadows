import Link from "next/link";
import { JSX } from "react";

export default function Nav(): JSX.Element {
    return (
        <div className="flex flex-row h-14 items-center">
            <div className="flex-1">
                <h1 className="text-2xl font-roboto text-white font-bold mx-6">SHADOWS</h1>
            </div>
            <div className="flex-1 font-semibold max-sm:hidden">
                <ul className="flex flex-row justify-end">
                    <li className="p-2">
                        <Link href="#" className="text-white p-2 hover:bg-white hover:text-black transition-all duration-200">Home</Link>
                    </li>
                    <li className="p-2">
                        <Link href="#portfolio" className="text-white p-2 hover:bg-white hover:text-black transition-all duration-200">Portfolio</Link>
                    </li>
                    <li className="p-2">
                        <Link href="#work" className="text-white p-2 hover:bg-white hover:text-black transition-all duration-200">About</Link>
                    </li>
                    <li className="p-2">
                        <Link href="#footer" className="text-white p-2 hover:bg-white hover:text-black transition-all duration-200">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}