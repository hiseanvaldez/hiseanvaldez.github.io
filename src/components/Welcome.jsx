"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function WelcomeSection() {
  const [text, setText] = useState("");
  const words = "I  build things for mobile and the web."; // Text to animate
  const speed = 80; // Typing speed in ms
  const name = "Hisean"; // Your name

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        // Only add a character if it's valid
        if (i < words.length) {
          setText((prev) => prev + words.charAt(i)); // Use charAt to avoid any undefined
          i++;
        } else {
          clearInterval(interval); // Stop once we finish typing
        }
      }, speed);

      return () => clearInterval(interval); // Cleanup interval when component unmounts
    }, 1500); // Delay typing effect by 1.5 seconds

    return () => clearTimeout(timeout); // Cleanup timeout when component unmounts
  }, []);

  return (
    <section className="h-screen flex flex-col items-start justify-center text-left px-6">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold"
      >
        Hey, I’m <span className="text-blue-500">{name}</span>.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-xl sm:text-2xl text-gray-500 mt-2"
      >
        {text}
      </motion.p>
    </section>
  );
}
