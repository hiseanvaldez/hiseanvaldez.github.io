"use client";
import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import Section from "@/components/Section";
import WelcomeSection from "@/components/Welcome";
import Header from "@/components/Header";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen transition-colors ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="snap-y snap-mandatory h-screen overflow-y-auto">
        <div className="flex flex-col">
          <WelcomeSection />
          <Section title="About Me">Just all about me</Section>
          <Section title="Projects">Check out my cool stuff</Section>
          <Section title="Contact">Let’s stay in touch</Section>
        </div>
      </main>
    </div>
  );
}
