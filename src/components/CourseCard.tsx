
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
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300 overflow-hidden group">
      <div className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 font-light mb-2">{institution}</p>
            <div className="flex items-center text-gray-500 text-sm mb-2 font-light">
              <Calendar className="h-4 w-4 mr-2" />
              {duration}
            </div>
          </div>
          {grade && (
            <div className="flex items-center bg-white/20 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-full text-sm font-light border border-white/30">
              <Award className="h-4 w-4 mr-2" />
              {grade}
            </div>
          )}
        </div>

        <p className="text-gray-700 mb-6 leading-relaxed font-light">{description}</p>

        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-800 mb-3 flex items-center">
            <BookOpen className="h-4 w-4 mr-2" />
            Skills
          </h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-white/20 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-white/30 transition-colors border border-white/30 font-light"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-800 mb-3">Highlights</h4>
          <ul className="space-y-2">
            {highlights.map((highlight, index) => (
              <li key={index} className="text-gray-600 text-sm flex items-start font-light">
                <span className="text-gray-400 mr-3">•</span>
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
