"use client";

import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Information() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

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
            zIndex: 0,
          }}
        >
          <img
            src="/test.webp"
            className="my-56 h-screen object-cover"
            alt="Crowd picture from FurGroove 1.0"
          />
        </motion.div>
        <motion.div
          style={{
            translateY: shift_text,
            zIndex: 10,
          }}
          className="mx-6"
        >
          <section className="mx-auto mb-96 flex max-w-4xl rounded-sm border-2 border-solid border-accent-500 bg-primary-900/80 p-6 leading-8">
            <p className="z-40 my-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
              veniam, labore est voluptates blanditiis facere dolore, aperiam
              quasi, earum nobis sunt? Unde rem voluptas sit distinctio
              inventore omnis accusantium odit. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Temporibus repellendus, est et nisi
              unde rerum quas reiciendis earum expedita in debitis facilis!
              Consequatur laudantium repudiandae quod debitis maiores ab optio!
            </p>
          </section>
        </motion.div>
      </div>
    </section>
  );
}
