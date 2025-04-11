
import { AudioLines } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 md:px-10 flex items-center justify-between border-b border-cyberBlue/20">
      <div className="flex items-center space-x-2">
        <AudioLines className="h-8 w-8 text-cyberBlue animate-pulse-glow" />
        <h1 className="text-2xl font-bold font-jetbrains tracking-tight text-white">
          DARK<span className="text-cyberBlue">WAVE</span>
        </h1>
      </div>
      
      <nav className="hidden md:flex items-center space-x-6">
        <Link to="/" className="text-white hover:text-cyberBlue transition-colors">
          Home
        </Link>
        <a href="#education-section" className="text-white hover:text-cyberBlue transition-colors">
  Education
</a>

       
      </nav>
    </header>
  );
};

export default Header;
