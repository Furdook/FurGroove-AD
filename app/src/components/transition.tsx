"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Transition() {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 1.6]);
  const shift = useTransform(scrollYProgress, [0.15, 0.8], [0, 1000]);
  const shift_text = useTransform(scrollYProgress, [0.15, 0.6], [0, -1000]);

  return (
    <section className="transform items-center justify-center overflow-x-hidden">
      <div>
        <motion.div
          style={{
            scale,
            translateY: shift,
          }}
        >
          <img
            src="/test.webp"
            className="my-56 h-screen object-cover will-change-transform"
            alt="Crowd picture from FurGroove 1.0"
          />
        </motion.div>
        <motion.div
          style={{
            translateY: shift_text,
          }}
          className="mx-6 will-change-transform"
          id="info"
        >
          <section className="mx-auto mb-96 flex w-fit justify-center rounded-sm bg-primary-950/50 p-8 text-3xl leading-8 sm:text-4xl">
            <h1 className="my-auto [text-shadow:_0_0_5px_rgb(0_0_0_/_100%)]">
              <span className="top-2 ml-[-24px]">“</span>
              Ready to bring out your gear?
              <span className="bottom-[-1rem] ml-1">”</span>
            </h1>
          </section>
        </motion.div>
      </div>
    </section>
  );
}
