import { Sun, Moon } from "lucide-react";

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header
      className={`fixed top-0 left-0 w-full p-4 flex justify-between items-center backdrop-blur-md z-50 transition-colors
      ${darkMode ? "bg-gray-900/70 text-white" : "bg-white/70 text-gray-900"}`}
    >
      <h1 className="text-xl font-bold">Hisean John Valdez</h1>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 flex items-center justify-center"
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
    </header>
  );
}
