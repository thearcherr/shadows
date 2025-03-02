"use client";

import { JSX, useRef, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";
import Lenis from "lenis";

export default function Portfolio(): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const [btnHovered, setBtnHovered] = useState<boolean>(false);

  const [onPhone, setOnPhone] = useState<boolean>(false);

  useEffect(() => {
    function lenisInit() {
      // Initialize Lenis
      const lenis = new Lenis();

      // Use requestAnimationFrame to continuously update the scroll
      function raf(time: EpochTimeStamp) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }

    lenisInit();

    const checkDeviceType = () => {
      const isPhone = window.innerWidth < 768; // Adjust the threshold as needed
      setOnPhone(isPhone);
      console.log(onPhone)
    };

    checkDeviceType();

    window.addEventListener("resize", checkDeviceType);

    return () => {
      window.removeEventListener("resize", checkDeviceType);
    };
  }, [onPhone]);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -800]);

  return (
    <div
      ref={ref}
          className="min-h-[200vh] overflow-x-hidden"
      data-scroll-container
    >
      <div className="min-h-[75vh] relative">
        <h1 className="text-5xl font-pf text-white font-thin mt-10 text-center">
          Portfolio
        </h1>
        <div id="portfolio" className="flex items-center min-h-fit w-11/12 mx-auto mt-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mx-auto">
            <motion.div className="aspect-[4/5]" style={{ x }}>
              <div className="relative group">
                <Image
                  src="/img/portfolio/img-1.jpg"
                  alt="Street Photography"
                  height={300}
                  width={300}
                />
                <div className="absolute inset-0 bg-black opacity-1 group-hover:opacity-45 transition duration-300"></div>
                <div className="absolute inset-0 flex items-end opacity-1 group-hover:opacity-100 transition duration-300">
                  <div className="flex flex-col">
                    <h3 className="text-roboto font-bold text-lg text-white mx-4">
                      Street Photography
                    </h3>
                    <p className="opacity-75 text-md text-white mb-6 mx-4">
                      Bracelona, Spain.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="aspect-[4/5]" style={{ x }}>
              <div className="relative group">
                <Image
                  src="/img/portfolio/img-2.jpg"
                  alt="Portrait Gallery"
                  height={300}
                  width={300}
                />
                <div className="absolute inset-0 bg-black opacity-1 group-hover:opacity-45 transition duration-300"></div>
                <div className="absolute inset-0 flex items-end opacity-1 group-hover:opacity-100 transition duration-300">
                  <div className="flex flex-col">
                    <h3 className="text-roboto font-bold text-lg text-white mx-4">
                      Portrait Gallery
                    </h3>
                    <p className="opacity-75 text-md text-white mb-6 mx-4">
                      New York City, NY.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="aspect-[4/5]" style={{ x }}>
              <div className="relative group">
                <Image
                  src="/img/portfolio/img-3.webp"
                  alt="Concrete Dreams"
                  height={300}
                  width={300}
                />
                <div className="absolute inset-0 bg-black opacity-1 group-hover:opacity-45 transition duration-300"></div>
                <div className="absolute inset-0 flex items-end opacity-1 group-hover:opacity-100 transition duration-300">
                  <div className="flex flex-col">
                    <h3 className="text-roboto font-bold text-lg text-white mx-4">
                      Concrete Dreams
                    </h3>
                    <p className="opacity-75 text-md text-white mb-6 mx-4">
                      Istanbul, Turkey.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="aspect-[4/5] hidden max-sm:block"
              style={{ x }}
            >
              <div className="relative group">
                <Image
                  src="/img/portfolio/img-4.webp"
                  alt="'80s Vintage"
                  height={300}
                  width={300}
                />
                <div className="absolute inset-0 bg-black opacity-1 group-hover:opacity-45 transition duration-300"></div>
                <div className="absolute inset-0 flex items-end opacity-1 group-hover:opacity-100 transition duration-300">
                  <div className="flex flex-col">
                    <h3 className="text-roboto font-bold text-lg text-white mx-4">
                      &apos;80s Vintage
                    </h3>
                    <p className="opacity-75 text-md text-white mb-6 mx-4">
                      Los Angeles, CA.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="min-h-[160vh] md:hidden flex items-center">
        <div className="w-11/12 min-h-[75vh] mx-auto grid gap-14">
          <div>
            <Image
              src="/img/profile.webp"
              alt="Profile Picture"
              height={400}
              width={400}
              className="rounded-full mx-auto"
            />
          </div>
          <div className="text-white flex items-center">
            <div className="mx-auto flex flex-col gap-6">
              <h1 className="text-4xl font-roboto font-semibold text-center">
                <span className="relative">
                  EVELYN MONROE
                  <motion.div
                    whileInView={{ scaleX: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-white origin-right"
                  ></motion.div>
                </span>
              </h1>
              <span className="text-center relative">
                Through the viewfinder, I seek to capture the ephemeral moments
                that exist between light and shadow. My work explores the
                delicate balance of contrast, form, and emotion in the
                monochromatic spectrum.
                <motion.div
                  whileInView={{ scaleX: 0 }}
                  transition={{ duration: 0.65 }}
                  className="absolute inset-0 bg-white origin-right"
                ></motion.div>
              </span>
              <div id="timeline" className="space-y-6 mx-auto mt-10">
                <div className="flex gap-4 relative">
                  <motion.div
                    whileInView={{ scaleX: 0 }}
                    transition={{ duration: 0.65 }}
                    className="absolute inset-0 bg-white origin-right"
                  ></motion.div>
                  <div className="w-24 font-bold">2025</div>
                  <div>
                    <h3 className="font-bold">National Gallery Exhibition</h3>
                    <p className="text-gray-400">
                      Solo exhibition &quot;Shadows of Existence&quot;
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 relative">
                  <motion.div
                    whileInView={{ scaleX: 0 }}
                    transition={{ duration: 0.65 }}
                    className="absolute inset-0 bg-white origin-right"
                  ></motion.div>
                  <div className="w-24 font-bold">2023</div>
                  <div>
                    <h3 className="font-bold">
                      International Photography Award
                    </h3>
                    <p className="text-gray-400">
                      First Place in Fine Art Category
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <button
                    onMouseOver={() => setBtnHovered(true)}
                    onMouseOut={() => setBtnHovered(false)}
                    className="mt-4 relative mx-auto py-2 px-6 cursor-pointer justify-self-center text-white font-bold border border-white rounded-md hover:text-black"
                  >
                    <AnimatePresence>
                      {btnHovered && (
                        <motion.div
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          exit={{ scaleY: 0 }}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-0 bg-white origin-bottom rounded-md z-[-10]"
                        ></motion.div>
                      )}
                    </AnimatePresence>
                    <span className="z-10">Connect</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-[160vh] max-sm:hidden flex items-center">
        <motion.div
          initial={{ x: onPhone ? 0 : 400 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.65 }}
          className="w-11/12 min-h-[75vh] mx-auto grid md:grid-cols-2 max-sm:gap-10"
        >
          <div>
            <Image
              src="/img/profile.webp"
              alt="Profile Picture"
              height={400}
              width={400}
              className="rounded-full"
            />
          </div>
          <div className="text-white flex items-center">
            <div className="mx-auto flex flex-col gap-6">
              <h1 className="text-4xl font-roboto font-semibold text-center">
                <span className="relative">
                  EVELYN MONROE
                  <motion.div
                    whileInView={{ scaleX: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-white origin-right"
                  ></motion.div>
                </span>
              </h1>
              <span className="text-center relative">
                Through the viewfinder, I seek to capture the ephemeral moments
                that exist between light and shadow. My work explores the
                delicate balance of contrast, form, and emotion in the
                monochromatic spectrum.
                <motion.div
                  whileInView={{ scaleX: 0 }}
                  transition={{ duration: 0.65 }}
                  className="absolute inset-0 bg-white origin-right"
                ></motion.div>
              </span>
              <div id="timeline" className="space-y-6 mx-auto mt-10">
                <div className="flex gap-4 relative">
                  <motion.div
                    whileInView={{ scaleX: 0 }}
                    transition={{ duration: 0.65 }}
                    className="absolute inset-0 bg-white origin-right"
                  ></motion.div>
                  <div className="w-24 font-bold">2025</div>
                  <div>
                    <h3 className="font-bold">National Gallery Exhibition</h3>
                    <p className="text-gray-400">
                      Solo exhibition &quot;Shadows of Existence&quot;
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 relative">
                  <motion.div
                    whileInView={{ scaleX: 0 }}
                    transition={{ duration: 0.65 }}
                    className="absolute inset-0 bg-white origin-right"
                  ></motion.div>
                  <div className="w-24 font-bold">2023</div>
                  <div>
                    <h3 className="font-bold">
                      International Photography Award
                    </h3>
                    <p className="text-gray-400">
                      First Place in Fine Art Category
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <button
                    onMouseOver={() => setBtnHovered(true)}
                    onMouseOut={() => setBtnHovered(false)}
                    className="mt-4 relative mx-auto py-2 px-6 cursor-pointer justify-self-center text-white font-bold border border-white rounded-md hover:text-black"
                  >
                    <AnimatePresence>
                      {btnHovered && (
                        <motion.div
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          exit={{ scaleY: 0 }}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-0 bg-white origin-bottom rounded-md z-[-10]"
                        ></motion.div>
                      )}
                    </AnimatePresence>
                    <span className="z-10">Connect</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
