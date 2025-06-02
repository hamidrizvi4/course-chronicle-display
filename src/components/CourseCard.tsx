
import { BookOpen, Calendar, Award } from "lucide-react";

interface CourseCardProps {
  title: string;
  institution: string;
  duration: string;
  description: string;
  skills: string[];
  grade?: string;
  highlights: string[];
  category: string;
}

const CourseCard = ({
  title,
  institution,
  duration,
  description,
  skills,
  grade,
  highlights,
  category
}: CourseCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'computer science':
        return 'from-blue-500 to-cyan-500';
      case 'mathematics':
        return 'from-purple-500 to-pink-500';
      case 'engineering':
        return 'from-green-500 to-teal-500';
      case 'business':
        return 'from-orange-500 to-red-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className={`h-2 bg-gradient-to-r ${getCategoryColor(category)}`}></div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
            <p className="text-blue-600 font-medium mb-1">{institution}</p>
            <div className="flex items-center text-gray-500 text-sm mb-2">
              <Calendar className="h-4 w-4 mr-1" />
              {duration}
            </div>
          </div>
          {grade && (
            <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              <Award className="h-4 w-4 mr-1" />
              {grade}
            </div>
          )}
        </div>

        <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
            <BookOpen className="h-4 w-4 mr-1" />
            Key Skills Learned
          </h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Course Highlights</h4>
          <ul className="space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="text-gray-600 text-sm flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
