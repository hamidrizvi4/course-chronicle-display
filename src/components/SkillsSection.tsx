
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
    <section id="skills" className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            Technical skills and knowledge acquired through studies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg mr-3 border border-white/30">
                  <category.icon className="h-5 w-5 text-gray-700" />
                </div>
                <h3 className="font-medium text-gray-900">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="text-sm text-gray-700 bg-white/20 backdrop-blur-sm px-3 py-1 rounded border border-white/30 font-light">
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
