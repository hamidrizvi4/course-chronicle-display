
import Header from "../components/Header";
import CourseCard from "../components/CourseCard";
import { BookText } from "lucide-react";

const Index = () => {
  const courses = [
    {
      title: "MG-GY 8203A Project Management",
      institution: "New York University",
      duration: "Jan 2025 - May 2025",
      description: "Applied Agile and traditional methodologies to lead simulated projects, enhancing skills in stakeholder management and risk assessment.",
      skills: ["Project Planning and Execution", "Risk and Change Management", "Agile Project Management(Scrum, Jira)", "Stakeholder Management", "Documentation"],
      highlights: [
        "Led a team of 6 developers on a major project",
        "Master Agile and traditional project management frameworks to execute projects with precision.",
        "Gain proficiency in applying Agile and Waterfall methodologies to manage complex simulated projects using Gantt charts and Work Breakdown Structures (WBS)",
        "Build expertise in risk analysis and stakeholder engagement through Project Initiation Documentation (PID) and technical frameworks"
      ],
      category: "Computer Science"
    },
    {
      title: "MG-GY 6023A Economics & Strategy",
      institution: "New York University",
      duration: "Sept 2024 - Dec 2024",
      description: "Analyzed industry dynamics and business models, including a research project on consumer electronics in the wellness market.",
      skills: ["Industry Analysis", "Strategic Thinking", "Critical Thinking", "Research and Synthesis:"],
      highlights: [
        "Analyze industry dynamics and competitive landscapes, focusing on economic trends in the $1.8T wellness market.",
        "Develop strategic business models by evaluating macro-environmental factors and their impact on tech industries",
        "Conduct in-depth research on consumer electronics, as demonstrated by a project on wellness market innovations",
        "Synthesize findings to propose actionable strategies, enhancing critical thinking for market-driven decision-making"
      ],
      category: "Computer Science"
    },
    {
      title: "MG-GY 6183A Communication for Tech Managers",
      institution: "New York University",
      duration: "Sep 2024 - Dec 2024",
      description: "Developed strategic communication skills through presentations, writing assignments, and group projects.",
      skills: ["Strategic Communication", "Collaborative Engagement", "Presentation Skills", "Professional Writing"],
      highlights: [
        "Craft strategic, audience-tailored presentations to effectively communicate complex technical concepts",
        "Enhance professional writing skills through assignments like reports and proposals for tech-focused audiences",
        "Develop persuasive communication techniques to influence stakeholders and drive project alignment.",
        "Practice delivering clear, impactful messages, bridging the gap between technical teams and non-technical stakeholders."
      ],
      category: "Mathematics"
    },
    {
      title: "MG-GY 6073A Marketing",
      institution: "New York University",
      duration: "Jan 2025 - May 2025",
      description: "Explored marketing strategy through 16 simulations, mastering market analysis, customer segmentation, and the 4Ps.",
      skills: ["Data Analysis for Market Insights", "Ethical Marketing and Sustainability", "Decision-Making", "Critical Thinking", "Team Collaboration"],
      highlights: [
        "Master customer segmentation and targeting through 16 industry-specific marketing simulations, including fitness tech and automotive",
        "Develop expertise in applying the 4Ps (Product, Price, Place, Promotion) to create effective, data-driven marketing strategies.",
        "Analyze market dynamics and macro-environmental factors to adapt campaigns for competitive advantage",
        "Enhance collaborative skills by designing and presenting marketing plans in team-based simulation environments"
      ],
      category: "Computer Science"
    },
    {
      title: "MG-GY 9753 FinTech",
      institution: "New York University",
      duration: "Jan 2025 - May 2025",
      description: "Studied FinTech innovations, including blockchain, AI in finance, and regulatory compliance, through case studies and a final project.",
      skills: ["Blockchain and AI Application", "Regulatory Analysis", "Project Development:", "Data Analysis", "Case Study Analysis"],
      highlights: [
        "Explore the application of blockchain technology in enhancing financial security and transaction efficiency.",
        "Analyze the role of artificial intelligence in optimizing financial forecasting and customer personalization",
        "Develop a final project showcasing reasearch about the company Tether.",
        "Investigate the impact of fintech innovations on traditional banking models and market disruption"
      ],
      category: "Computer Science"
    },
    {
      title: "MG-GY - 7953 Global Innovation",
      institution: "New York University",
      duration: "Sept 20224 - Dec 2024",
      description: "This course explores how organizations foster innovation worldwide, delving into strategies, ecosystems, and sustainability through case studies, presentations, and a Ideathon.",
      skills: ["Innovation Process Analysis", "Critical Thinking", "Sector and Firm Analysis", "Global Strategy Development"],
      highlights: [
        "Analyze global innovation strategies and competitive landscapes through sector and firm case studies",
        "Explore the impact of geographic, economic, and societal factors on innovation in emerging markets and ecosystems",
        "Explore disruptive market dynamics and innovation strategies, including Box 3 frameworks",
        "Investigate the influence of sustainability and green technologies on global innovation"
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
              Comprehensive courses that have shaped my knowledge and expertise. 
              Each course represents a milestone in my continuous learning journey.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <BookText className="h-5 w-5 mr-2" />
                <span className="font-light">{courses.length} Courses Completed</span>
              </div>
              {/* <div className="flex items-center">
                <span className="h-5 w-5 mr-2 bg-green-400 rounded-full flex items-center justify-center text-white text-xs">✓</span>
                <span className="font-light">All Certifications Earned</span>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      
      <section id="courses" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4"></h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-light">
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
      {/* <footer className="bg-white/10 backdrop-blur-md text-gray-600 py-8 px-6 border-t border-white/20">
        <div className="container mx-auto text-center">
          <p className="font-light">&copy; 2024 NYU Learning Journey. Built with passion for education and growth.</p>
        </div>
      </footer> */}
    </div>
  );
};

export default Index;
