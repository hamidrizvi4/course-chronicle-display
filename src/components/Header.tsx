
import { GraduationCap } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">My Learning Journey</h1>
              <p className="text-sm text-gray-600">Academic Portfolio</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#courses" className="text-gray-700 hover:text-blue-600 transition-colors">
              Courses
            </a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
