"use client";

import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Information() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const rotate = useTransform(scrollYProgress, [0, 0.35], [-45, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.75, 1.5]);
  const shift = useTransform(scrollYProgress, [0.15, 0.8], [0, 1200]);
  const shift2 = useTransform(scrollYProgress, [0.15, 0.8], [0, -1000]);

  return (
    <section
      id="info"
      className="mb-96 flex transform items-center justify-center bg-primary-950"
    >
      <div
        className=" relative w-screen "
        style={{
          perspective: "1000px",
        }}
      >
        <motion.div
          id="testing"
          style={{
            rotateX: rotate,
            scale,
            translateY: shift,
            zIndex: 0,
          }}
        >
          <div className="h-56 w-screen bg-gradient-to-t from-primary-950 to-primary-900"></div>
          <img
            src="/test.webp"
            className="z-0 h-screen w-full"
            alt="borderline porn"
          />
          <div className="h-56 w-screen bg-gradient-to-t from-primary-900 to-primary-950"></div>
        </motion.div>
        <motion.div
          style={{
            translateY: shift2,
            zIndex: 10,
          }}
        >
          <section className="mx-auto mb-96 flex h-60 w-screen max-w-4xl rounded-sm bg-primary-950/60 p-6 leading-8">
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
