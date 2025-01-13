import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const news = [
  {
    title: "Rising Demand for AI Security Experts",
    date: "2024-02-15",
    content: "Major tech companies are actively recruiting AI security specialists with competitive packages for fresh graduates.",
    type: "jobs"
  },
  {
    title: "New Zero-Day Vulnerability Lab Released",
    date: "2024-02-10",
    content: "Experience hands-on training with the latest critical vulnerabilities in our secure environment.",
    type: "security"
  },
  {
    title: "Remote Cybersecurity Positions Surge",
    date: "2024-02-05",
    content: "Companies worldwide are offering remote positions for entry-level cybersecurity analysts.",
    type: "jobs"
  },
  {
    title: "AI-Powered Threat Detection Tools",
    date: "2024-02-03",
    content: "Latest developments in AI-based security tools are revolutionizing threat detection and response.",
    type: "tech"
  },
  {
    title: "Cybersecurity Bootcamp Success Stories",
    date: "2024-02-01",
    content: "Recent graduates share their journey from bootcamp to securing positions at top tech companies.",
    type: "success"
  },
  {
    title: "Machine Learning in Penetration Testing",
    date: "2024-01-28",
    content: "New frameworks combining ML with traditional pentesting showing promising results.",
    type: "tech"
  }
];

const NewsSection = () => {
  return (
    <section className="relative py-20 px-4 bg-cyber-dark text-white">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),rgba(0,0,0,0.5))] opacity-60"
      />
      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Latest Industry Updates
        </h2>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              {/* Title and Date */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">
                  {item.title}
                </h3>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-400">{item.date}</p>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      item.type === "jobs"
                        ? "bg-cyan-400/20 text-cyan-400"
                        : item.type === "tech"
                        ? "bg-purple-400/20 text-purple-400"
                        : "bg-pink-400/20 text-pink-400"
                    }`}
                  >
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                  </span>
                </div>
              </div>
              {/* Content */}
              <p className="text-gray-300">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;


