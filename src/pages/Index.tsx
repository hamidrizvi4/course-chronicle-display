
import Header from "../components/Header";
import CourseCard from "../components/CourseCard";
import { BookText } from "lucide-react";

const Index = () => {
  const courses = [
    {
      title: "MG-GY 8203A Project Management",
      institution: "New York University",
      duration: "Sep 2020 - Dec 2020",
      description: "Comprehensive introduction to computer science covering programming fundamentals, data structures, and algorithmic thinking. This course laid the foundation for my technical journey.",
      skills: ["Python Programming", "Data Structures", "Algorithms", "Problem Solving", "Object-Oriented Programming"],
      highlights: [
        "Built a complete student management system using Python",
        "Implemented sorting and searching algorithms from scratch",
        "Completed 50+ coding challenges and projects",
        "Achieved top 5% in final examinations"
      ],
      category: "Computer Science"
    },
    {
      title: "Web Development Bootcamp",
      institution: "New York University",
      duration: "Jan 2021 - Jun 2021",
      description: "Intensive full-stack web development program covering modern web technologies, responsive design, and deployment strategies. Focused on practical, industry-relevant skills.",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "MongoDB", "Git"],
      highlights: [
        "Developed 5 full-stack web applications",
        "Collaborated on team projects using Agile methodology",
        "Deployed applications to cloud platforms",
        "Mentored junior students in the program"
      ],
      category: "Computer Science"
    },
    {
      title: "Advanced Mathematics for Computing",
      institution: "New York University",
      duration: "Sep 2021 - Dec 2021",
      description: "Advanced mathematical concepts essential for computer science including discrete mathematics, linear algebra, and calculus applications in computing.",
      skills: ["Discrete Mathematics", "Linear Algebra", "Calculus", "Statistics", "Mathematical Modeling"],
      highlights: [
        "Solved complex mathematical proofs and theorems",
        "Applied mathematical concepts to real-world computing problems",
        "Completed research project on optimization algorithms",
        "Presented findings at student mathematics symposium"
      ],
      category: "Mathematics"
    },
    {
      title: "Database Design & Management",
      institution: "New York University",
      duration: "Feb 2022 - May 2022",
      description: "Comprehensive study of database systems, design principles, and management techniques. Covered both relational and NoSQL databases with hands-on projects.",
      skills: ["SQL", "Database Design", "PostgreSQL", "MongoDB", "Data Modeling", "Query Optimization"],
      highlights: [
        "Designed and implemented a complete e-commerce database",
        "Optimized complex queries for performance improvements",
        "Worked with both relational and document databases",
        "Created comprehensive database documentation"
      ],
      category: "Computer Science"
    },
    {
      title: "Machine Learning Fundamentals",
      institution: "New York University",
      duration: "Jun 2022 - Sep 2022",
      description: "Introduction to machine learning concepts, algorithms, and practical applications. Hands-on experience with popular ML libraries and frameworks.",
      skills: ["Python", "Scikit-learn", "TensorFlow", "Data Analysis", "Statistical Learning", "Neural Networks"],
      highlights: [
        "Built predictive models for real-world datasets",
        "Implemented machine learning algorithms from scratch",
        "Completed capstone project on image classification",
        "Presented research findings at ML conference"
      ],
      category: "Computer Science"
    },
    {
      title: "Software Engineering Principles",
      institution: "New York University",
      duration: "Oct 2022 - Jan 2023",
      description: "Software development lifecycle, design patterns, testing methodologies, and project management. Emphasis on building scalable and maintainable software systems.",
      skills: ["Software Architecture", "Design Patterns", "Testing", "Agile Development", "Version Control", "CI/CD"],
      highlights: [
        "Led a team of 6 developers on a major project",
        "Implemented comprehensive testing strategies",
        "Designed scalable software architecture",
        "Delivered project ahead of schedule with zero critical bugs"
      ],
      category: "Engineering"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
              NYU courses studied
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
              Comprehensive courses and programs that have shaped my knowledge and expertise. 
              Each course represents a milestone in my continuous learning journey.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <BookText className="h-5 w-5 mr-2" />
                <span className="font-light">{courses.length} Courses Completed</span>
              </div>
              <div className="flex items-center">
                <span className="h-5 w-5 mr-2 bg-green-400 rounded-full flex items-center justify-center text-white text-xs">✓</span>
                <span className="font-light">All Certifications Earned</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Course Portfolio</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-light">
              Detailed overview of each course, including key learning outcomes, skills acquired, and project highlights
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/10 backdrop-blur-md text-gray-600 py-8 px-6 border-t border-white/20">
        <div className="container mx-auto text-center">
          <p className="font-light">&copy; 2024 NYU Learning Journey. Built with passion for education and growth.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
