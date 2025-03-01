import Link from "next/link";
import { JSX } from "react";
import { FaArrowRight, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer(): JSX.Element {
    return (
        <footer id="footer" className="bg-white/5 border-t border-white/10 text-white">
    <div className="container mx-auto px-6 py-12">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">SHADOWS</h3>
          <p className="text-gray-400">Capturing moments in monochrome since 2015</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Navigation</h4>
          <ul className="space-y-2 text-gray-400">
            <li><span className="hover:text-white transition-colors cursor-pointer">Portfolio</span></li>
            <li><span className="hover:text-white transition-colors cursor-pointer">About</span></li>
            <li><span className="hover:text-white transition-colors cursor-pointer">Contact</span></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Social</h4>
          <div className="flex space-x-4">
            <Link aria-label="Twitter" href="#" className="text-gray-400 hover:text-white transition-colors text-xl">
              <FaTwitter />
            </Link>
            <Link aria-label="Instagram" href="#" className="text-gray-400 hover:text-white transition-colors text-xl">
              <FaInstagram />
            </Link>
            <Link aria-label="LinkedIn" href="#" className="text-gray-400 hover:text-white transition-colors text-xl">
              <FaLinkedin />
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4">Newsletter</h4>
          <div className="flex">
            <input type="email" placeholder="Your email" className="bg-black/40 px-4 py-2 flex-1" />
            <button aria-label="Submit" className="bg-white text-black px-4 hover:bg-gray-200 transition-colors">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
        <p>© 2025 Shadows Photography. All rights reserved.</p>
      </div>
    </div>
  </footer>
    )
}