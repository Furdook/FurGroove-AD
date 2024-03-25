"use client";

import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Transition section between landing section and information section.
 * Gives a parallax effect to the background image and a quote on scroll.
 *
 * @returns A section with a background image and a quote
 */
export default function Transition() {
  // Framer Motion animation constants and hooks
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 1.6]); // scaling of the background image on scroll
  const shift = useTransform(scrollYProgress, [0.15, 0.8], [0, 1000]); // shifting of the background image on scroll
  const shift_text = useTransform(scrollYProgress, [0, 0.3], [0, -1000]); // shifting of the quote on scroll (oppsite direction)

  return (
    <div
      id="transition"
      className="mb-[-40rem] w-screen transform overflow-x-hidden"
    >
      <div>
        <motion.div
          style={{
            scale,
            translateY: shift,
          }}
        >
          <img
            src="/test.webp"
            className="mx-auto my-56 h-screen object-cover"
            alt="Crowd picture from FurGroove 1.0"
          />
        </motion.div>
        <motion.div
          style={{
            translateY: shift_text,
          }}
          className="mx-6"
        >
          <article className="mx-auto mb-[80vh] flex w-fit justify-center rounded-sm bg-primary-950/50 p-8 text-3xl leading-8 max-[550px]:text-lg sm:text-4xl">
            <h2 className="[text-shadow:_0_0_5px_rgb(0_0_0_/_100%) relative my-auto">
              <span className="absolute left-[-1rem] top-[-1rem]">“</span>
              Ready to bring out your gear?
              <span className="absolute bottom-[-2rem]">”</span>
            </h2>
          </article>
        </motion.div>
      </div>
    </div>
  );
}
