
import { Code, Database, Globe, Cpu } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["JavaScript", "Python", "Java", "C++", "SQL", "HTML/CSS"]
    },
    {
      icon: Database,
      title: "Technologies & Frameworks",
      skills: ["React", "Node.js", "MongoDB", "PostgreSQL", "Git", "Docker"]
    },
    {
      icon: Globe,
      title: "Web Development",
      skills: ["Frontend Development", "Backend Development", "API Design", "Responsive Design"]
    },
    {
      icon: Cpu,
      title: "Computer Science",
      skills: ["Data Structures", "Algorithms", "Machine Learning", "Software Engineering"]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of the technical skills and knowledge I've acquired through my studies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <category.icon className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
