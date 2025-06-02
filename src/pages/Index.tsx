
import Header from "../components/Header";
import CourseCard from "../components/CourseCard";
import SkillsSection from "../components/SkillsSection";
import { BookText, Mail, Phone, MapPin } from "lucide-react";

const Index = () => {
  const courses = [
    {
      title: "Computer Science Fundamentals",
      institution: "University of Technology",
      duration: "Sep 2020 - Dec 2020",
      description: "Comprehensive introduction to computer science covering programming fundamentals, data structures, and algorithmic thinking. This course laid the foundation for my technical journey.",
      skills: ["Python Programming", "Data Structures", "Algorithms", "Problem Solving", "Object-Oriented Programming"],
      grade: "A+",
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
      institution: "Tech Academy",
      duration: "Jan 2021 - Jun 2021",
      description: "Intensive full-stack web development program covering modern web technologies, responsive design, and deployment strategies. Focused on practical, industry-relevant skills.",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "MongoDB", "Git"],
      grade: "Excellent",
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
      institution: "Institute of Mathematical Sciences",
      duration: "Sep 2021 - Dec 2021",
      description: "Advanced mathematical concepts essential for computer science including discrete mathematics, linear algebra, and calculus applications in computing.",
      skills: ["Discrete Mathematics", "Linear Algebra", "Calculus", "Statistics", "Mathematical Modeling"],
      grade: "A",
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
      institution: "Data Science Institute",
      duration: "Feb 2022 - May 2022",
      description: "Comprehensive study of database systems, design principles, and management techniques. Covered both relational and NoSQL databases with hands-on projects.",
      skills: ["SQL", "Database Design", "PostgreSQL", "MongoDB", "Data Modeling", "Query Optimization"],
      grade: "A+",
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
      institution: "AI Research Center",
      duration: "Jun 2022 - Sep 2022",
      description: "Introduction to machine learning concepts, algorithms, and practical applications. Hands-on experience with popular ML libraries and frameworks.",
      skills: ["Python", "Scikit-learn", "TensorFlow", "Data Analysis", "Statistical Learning", "Neural Networks"],
      grade: "A",
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
      institution: "Engineering College",
      duration: "Oct 2022 - Jan 2023",
      description: "Software development lifecycle, design patterns, testing methodologies, and project management. Emphasis on building scalable and maintainable software systems.",
      skills: ["Software Architecture", "Design Patterns", "Testing", "Agile Development", "Version Control", "CI/CD"],
      grade: "Excellent",
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Educational</span> Journey
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Explore the comprehensive courses and programs that have shaped my knowledge and expertise. 
              Each course represents a milestone in my continuous learning journey.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <BookText className="h-5 w-5 mr-2" />
                {courses.length} Courses Completed
              </div>
              <div className="flex items-center">
                <span className="h-5 w-5 mr-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-xs">✓</span>
                All Certifications Earned
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Portfolio</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
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

      <SkillsSection />

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Interested in discussing my educational background or potential opportunities? I'd love to hear from you.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              <span>your.email@example.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              <span>Your City, Country</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 My Learning Journey. Built with passion for education and growth.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
