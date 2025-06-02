
import { GraduationCap } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-lg border-b border-white/20 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl border border-white/30">
              <GraduationCap className="h-6 w-6 text-gray-800" />
            </div>
            <div>
              <h1 className="text-xl font-medium text-gray-900">NYU courses studied</h1>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#courses" className="text-gray-700 hover:text-gray-900 transition-colors font-light">
              Courses
            </a>
            <a href="#skills" className="text-gray-700 hover:text-gray-900 transition-colors font-light">
              Skills
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors font-light">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
