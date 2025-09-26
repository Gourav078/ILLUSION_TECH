// components/MatrixCareer.tsx
"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import WorkshopForm from "@/components/WorkshopForm";
import React, { useState, useEffect } from "react";

// Career data can be kept inside the component or moved to a separate file
const careers = {
  red: [
    {
      name: "Penetration Tester",
      desc: "Simulate real-world cyberattacks to identify security vulnerabilities in Indian enterprises. Work with banks, fintech, and IT companies to strengthen their security posture.",
      salary: "₹4.5L - ₹25L",
      demand: "Very High",
      growth: "+28% annually",
      difficulty: 3,
      skills:
        "Kali Linux, Metasploit, Burp Suite, OWASP Top 10, network protocols, Python scripting",
    },
    {
      name: "Red Team Specialist",
      desc: "Advanced adversarial simulation for large Indian corporations and government agencies. Lead complex attack scenarios against enterprise environments and critical infrastructure.",
      salary: "₹12L - ₹45L",
      demand: "Extreme",
      growth: "+35% annually",
      difficulty: 5,
      skills:
        "Advanced persistent threats, custom malware, Active Directory attacks, cloud security, OSINT",
    },
    {
      name: "Bug Bounty Hunter",
      desc: "IndeIndependent security researcher working with Indian startups and MNCs. Discover vulnerabilities in popular Indian platforms like Paytm, Flipkart, and government portals.",
      salary: "₹3L - ₹50L+",
      demand: "High",
      growth: "+42% annually",
      difficulty: 4,
      skills:
        "Web application security, mobile app testing, API security, OWASP methodology, creative thinking",
    },
    {
      name: "Vulnerability Assessment Analyst",
      desc: "Entry to mid-level role focusing on systematic vulnerability identification in Indian organizations. Perfect stepping stone for fresh graduates entering cybersecurity.",
      salary: "₹3.5L - ₹15L",
      demand: "Very High",
      growth: "+25% annually",
      difficulty: 2,
      skills:
        "Nessus, Qualys, OpenVAS, vulnerability databases, report writing, risk assessment",
    },
    {
      name: "Ethical Hacker",
      desc: "Freelance and corporate ethical hacking roles with Indian cybersecurity firms. Conduct authorized penetration testing and security assessments for various industries.",
      salary: "₹4L - ₹20L",
      demand: "High",
      growth: "+30% annually",
      difficulty: 3,
      skills:
        "CEH certification, penetration testing tools, social engineering, wireless security, mobile security",
    },
    {
      name: "Application Security Engineer",
      desc: "Focus on securing Indian software applications and platforms. Work with development teams to implement secure coding practices and conduct security reviews.",
      salary: "₹6L - ₹28L",
      demand: "Very High",
      growth: "+26% annually",
      difficulty: 4,
      skills:
        "Secure coding, SAST/DAST tools, DevSecOps, threat modeling, code review",
    },
    {
      name: "Cyber Security Consultant",
      desc: "Senior-level consulting role working with multiple Indian clients across banking, healthcare, and e-commerce sectors. Provide strategic security guidance and implementation.",
      salary: "₹15L - ₹60L",
      demand: "High",
      growth: "+22% annually",
      difficulty: 4,
      skills:
        "Risk management, compliance frameworks, client management, security architecture, business acumen",
    },
  ],
  blue: [
    {
      name: "SOC Analyst (L1/L2)",
      desc: "Monitor security events for Indian enterprises and service providers. Entry-level position in Security Operations Centers of companies like TCS, Infosys, and Indian banks.",
      salary: "₹2.8L - ₹12L",
      demand: "Extreme",
      growth: "+32% annually",
      difficulty: 2,
      skills:
        "SIEM tools (Splunk, QRadar), log analysis, incident escalation, basic networking, Windows/Linux",
    },
    {
      name: "Incident Response Analyst",
      desc: "HHandle cybersecurity incidents for Indian organizations. Respond to breaches, malware infections, and security events affecting Indian businesses and government entities.",
      salary: "₹6L - ₹22L",
      demand: "Very High",
      growth: "+29% annually",
      difficulty: 4,
      skills:
        "Digital forensics, malware analysis, incident handling, NIST framework, communication skills",
    },
    {
      name: "Cyber Threat Analyst",
      desc: "Analyze threats targeting Indian infrastructure and businesses. Work with CERTs, government agencies, and private sector to understand emerging threat landscape in India.",
      salary: "₹5L - ₹18L",
      demand: "High",
      growth: "+26% annually",
      difficulty: 3,
      skills:
        "Threat intelligence platforms, OSINT, malware analysis, geopolitical awareness, research skills",
    },
    {
      name: "Security Operations Engineer",
      desc: "Maintain and optimize security infrastructure for Indian enterprises. Manage firewalls, intrusion detection systems, and security tools across hybrid cloud environments.",
      salary: "₹4.5L - ₹20L",
      demand: "Very High",
      growth: "+24% annually",
      difficulty: 3,
      skills:
        "Firewall management, IDS/IPS, cloud security (AWS/Azure), automation, scripting",
    },
    {
      name: "Cyber Security Architect",
      desc: "Design comprehensive security frameworks for large Indian corporations and government projects. Lead security initiatives for digital transformation programs.",
      salary: "₹18L - ₹65L",
      demand: "High",
      growth: "+20% annually",
      difficulty: 5,
      skills:
        "Enterprise architecture, risk assessment, compliance (ISO 27001, NIST), cloud security, leadership",
    },
    {
      name: "Digital Forensics Specialist",
      desc: "Investigate cybercrimes and security incidents for Indian law enforcement, legal firms, and corporations. Handle cases involving financial fraud, data breaches, and cyber terrorism.",
      salary: "₹4L - ₹25L",
      demand: "High",
      growth: "+18% annually",
      difficulty: 4,
      skills:
        "EnCase, FTK, mobile forensics, legal procedures, court testimony, evidence handling",
    },
    {
      name: "GRC Analyst",
      desc: "Ensure compliance with Indian regulations like DPDP Act, RBI guidelines, and international frameworks. Work with Indian financial services and healthcare organizations.",
      salary: "₹4.5L - ₹18L",
      demand: "Very High",
      growth: "+22% annually",
      difficulty: 2,
      skills:
        "Regulatory compliance, risk assessment, audit coordination, documentation, stakeholder management",
    },
    {
      name: "Cloud Security Engineer",
      desc: "Secure cloud infrastructure for Indian companies migrating to AWS, Azure, and Google Cloud. High-demand role as Indian enterprises accelerate cloud adoption.",
      salary: "₹8L - ₹35L",
      demand: "Extreme",
      growth: "+38% annually",
      difficulty: 4,
      skills:
        "AWS/Azure security, container security, DevSecOps, infrastructure as code, cloud compliance",
    },
  ],
};

interface MatrixCareerProps {
  closeModal: () => void;
}

const MatrixCareer: React.FC<MatrixCareerProps> = ({ closeModal }) => {
  // State to manage the live timestamp
  const [timestamp, setTimestamp] = useState("");
  // State to manage the active view/tab
  const [activeCommand, setActiveCommand] = useState("the-vision");
  // State to manage the selected career team (red/blue)
  const [selectedTeam, setSelectedTeam] = useState<"red" | "blue" | null>(null);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // useEffect to handle the real-time timestamp update
  useEffect(() => {
    const updateTimestamp = () => {
      const now = new Date();
      const ts = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(
        2,
        "0"
      )}.${String(now.getDate()).padStart(2, "0")} :: ${String(
        now.getHours()
      ).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(
        now.getSeconds()
      ).padStart(2, "0")} UTC`;
      setTimestamp(ts);
    };

    updateTimestamp();
    const intervalId = setInterval(updateTimestamp, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Function to handle command menu clicks
  const handleCommandClick = (command: string) => {
    setActiveCommand(command);
    // Reset career explorer if navigating to that tab
    if (command === "career-pathways") {
      setSelectedTeam(null);
    }
  };

  const renderDifficultyBars = (difficulty: number) => {
    const bars = [];
    for (let i = 1; i <= 5; i++) {
      bars.push(
        <div
          key={i}
          className={`difficulty-bar ${i <= difficulty ? "active" : ""}`}
        ></div>
      );
    }
    return bars;
  };

  const getDemandClass = (demand: string) => {
    if (demand === "Extreme") return "demand-extreme";
    if (demand === "Very High") return "demand-very-high";
    return "demand-high";
  };

  return (
    <div className="matrix-career-container">
      <button className="close-button" onClick={closeModal}>
        &times;
      </button>
      <div className="container">
        <div className="matrix-quantum-interface">
          {/* Quantum field background */}
          <div className="quantum-field">
            <div
              className="quantum-dot"
              style={{ left: "10%", animationDelay: "0s" }}
            ></div>
            <div
              className="quantum-dot"
              style={{ left: "25%", animationDelay: "5s" }}
            ></div>
            <div
              className="quantum-dot"
              style={{ left: "40%", animationDelay: "10s" }}
            ></div>
            <div
              className="quantum-dot"
              style={{ left: "55%", animationDelay: "15s" }}
            ></div>
            <div
              className="quantum-dot"
              style={{ left: "70%", animationDelay: "3s" }}
            ></div>
            <div
              className="quantum-dot"
              style={{ left: "85%", animationDelay: "8s" }}
            ></div>
          </div>

          {/* Header */}
          <div className="interface-header">
            <div className="terminal-identity">root@quantum-matrix:~$</div>
            <div className="system-title">AI Security Intelligence Hub</div>
            <div className="connection-status">
              <div className="status-dot"></div>
              <span>SECURE CONNECTION</span>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="main-grid">
            {/* Command Panel */}
            <div className="command-panel">
              <div className="panel-header">System Commands</div>
              <ul className="command-menu">
                <li
                  className={`command-item ${
                    activeCommand === "the-vision" ? "active" : ""
                  }`}
                  onClick={() => handleCommandClick("the-vision")}
                >
                  The Vision
                </li>
                <li
                  className={`command-item ${
                    activeCommand === "cyber-timeline" ? "active" : ""
                  }`}
                  onClick={() => handleCommandClick("cyber-timeline")}
                >
                  Cyber Evolution
                </li>
                <li
                  className={`command-item ${
                    activeCommand === "career-pathways" ? "active" : ""
                  }`}
                  onClick={() => handleCommandClick("career-pathways")}
                >
                  Career Pathways
                </li>
                <li
                  className={`command-item ${
                    activeCommand === "career-pathways" ? "active" : ""
                  }`}
                >
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <button onClick={() => setIsDialogOpen(true)}>
                        Register For Workshop
                      </button>
                    </DialogTrigger>

                    <DialogContent className="bg-transparent border-none p-0 max-w-sm">
                      <WorkshopForm onClose={() => setIsDialogOpen(false)} />
                    </DialogContent>
                  </Dialog>
                </li>
              </ul>
            </div>

            {/* Data Display Area */}
            <div className="data-display">
              {/* The Vision View */}
              {activeCommand === "the-vision" && (
                <div id="the-vision" className="analysis-view">
                  <div className="data-header">
                    <div className="data-title">
                      IllusionSecurity.tech - Origin Protocol
                    </div>
                    <div className="data-controls">
                      <div className="control-button" title="Refresh">
                        ⟳
                      </div>
                      <div className="control-button" title="Export">
                        ↓
                      </div>
                      <div className="control-button" title="Share">
                        ⚡
                      </div>
                    </div>
                  </div>
                  <div className="info-section">
                    <div className="section-title">Mission Parameters</div>
                    <div className="info-grid">
                      <div className="info-card">
                        <div className="info-value">6+</div>
                        <div className="info-label">Years in Field</div>
                      </div>
                      <div className="info-card">
                        <div className="info-value">1000+</div>
                        <div className="info-label">Students Trained</div>
                      </div>
                      <div className="info-card">
                        <div className="info-value">98.5%</div>
                        <div className="info-label">Satisfaction Rate</div>
                      </div>
                      <div className="info-card">
                        <div className="info-value">∞</div>
                        <div className="info-label">Learning Support</div>
                      </div>
                    </div>
                  </div>
                  <div className="progress-section">
                    <div className="section-title">Core Values Matrix</div>
                    <div className="progress-item">
                      <span style={{ color: "#00cc44" }}>
                        Student Success Priority
                      </span>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="progress-item">
                      <span style={{ color: "#00cc44" }}>
                        Industry Expertise
                      </span>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="progress-item">
                      <span style={{ color: "#00cc44" }}>
                        Innovation in Teaching
                      </span>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: "98%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="progress-item">
                      <span style={{ color: "#00cc44" }}>
                        Continuous Mentorship
                      </span>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="main-content">
                    <div className="content-header">
                      Raw Truth: Why I Started This
                    </div>
                    <div className="content-text">
                      <strong className="emphasis">
                        UNFILTERED MESSAGE FROM THE TRENCHES:
                      </strong>
                      <br />
                      <br />
                      Look, I&#39;ll be straight with you. After{" "}
                      <span className="highlight">
                        training 1000+ students
                      </span>{" "}
                      across multiple institutes, I got fed up with the same
                      bullshit everywhere -{" "}
                      <span className="highlight">₹80K-₹150K course fees</span>,
                      outdated content, trainers who barely know more than the
                      slides, and zero follow-up after you pay.
                      <br />
                      <br />
                      <span className="emphasis">THE REALITY CHECK:</span> Most
                      places will sell you a dream, take your money, give you a
                      certificate, and forget you exist. I&#39;ve been on the
                      inside - I know how little they actually care about
                      whether you get a job or become good at this.
                      <br />
                      <br />
                      I was stuck in that system too, but I always gave
                      everything to my students. I&#39;d stay back hours, answer
                      questions at 2 AM, help with resumes, connect them to
                      opportunities. But I was limited by corporate policies,
                      rigid schedules, and profit targets.
                      <br />
                      <br />
                      <span className="emphasis">
                        SO I SAID F*CK IT, I&#39;M DOING THIS MY WAY:
                      </span>
                      <br />◆{" "}
                      <span className="highlight">Pay what you can afford</span>{" "}
                      - Not some corporate pricing
                      <br />◆{" "}
                      <span className="highlight">
                        Real industry projects
                      </span>{" "}
                      - Not toy lab exercises
                      <br />◆{" "}
                      <span className="highlight">
                        I&#39;m available 24/7
                      </span>{" "}
                      - Seriously, I respond to messages
                      <br />◆{" "}
                      <span className="highlight">
                        You don&#39;t get it? Full refund
                      </span>{" "}
                      - No forms, no hassle
                      <br />◆{" "}
                      <span className="highlight">Job hunting help</span> -
                      I&#39;ll review your resume, prep you for interviews
                      <br />
                      <br />
                      <span className="emphasis">MY REAL AGENDA?</span> I want
                      to prove that education doesn&#39;t have to be a scam. I
                      want my students getting into{" "}
                      <span className="highlight">
                        Google, Microsoft, top Indian startups
                      </span>{" "}
                      and making{" "}
                      <span className="highlight">₹20L+ packages</span> in
                      cybersecurity. I want companies fighting over hiring my
                      students.
                      <br />
                      <br />
                      This isn&#39;t about building the next unicorn or making
                      millions. This is about showing that when someone actually
                      gives a damn about your growth,{" "}
                      <span className="highlight">magic happens</span>.
                      <br />
                      <br />
                      <span
                        style={{
                          color: "#00ff64",
                          fontSize: "12px",
                          fontWeight: 600,
                        }}
                      >
                        ◆ AUTHENTICITY_LEVEL: 100% ◆ CORPORATE_BS: 0% ◆
                        STUDENT_SUCCESS_OBSESSION: MAXIMUM ◆
                      </span>
                    </div>
                    <div
                      className="testimonials-section"
                      style={{ marginTop: "25px" }}
                    >
                      <div className="section-title">
                        Decoded Student Intelligence Reports
                      </div>
                      <div
                        className="testimonials-grid"
                        style={{
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(auto-fit, minmax(280px, 1fr))",
                          gap: "15px",
                        }}
                      >
                        <div className="testimonial-card">
                          <div className="testimonial-text">
                            &#39;Very knowledgeable and inspiring also motivated
                            me a lot...{" "}
                            <span className="highlight">
                              teaching us straight 4 hours without losing his
                              interest
                            </span>{" "}
                            or get bored with us.&#39;
                          </div>
                          <div className="testimonial-source">
                            - Student Report #001
                          </div>
                        </div>
                        <div className="testimonial-card">
                          <div className="testimonial-text">
                            &#39;He gave several{" "}
                            <span className="highlight">
                              realtime examples of what actually happens
                            </span>{" "}
                            and it was very intriguing.&#39;
                          </div>
                          <div className="testimonial-source">
                            - Student Report #002
                          </div>
                        </div>
                        <div className="testimonial-card">
                          <div className="testimonial-text">
                            &#39;The trainer was really good and{" "}
                            <span className="highlight">
                              I was able to relate and understand him at a
                              personal and professional level
                            </span>
                            . Very friendly, knowledgeable and passionate about
                            his work.&#39;
                          </div>
                          <div className="testimonial-source">
                            - Student Report #003
                          </div>
                        </div>
                        <div className="testimonial-card">
                          <div className="testimonial-text">
                            &#39;The instructor was{" "}
                            <span className="highlight">
                              very down to earth and friendly
                            </span>{" "}
                            with the students. Communication was so good which
                            made the class even more interesting.&#39;
                          </div>
                          <div className="testimonial-source">
                            - Student Report #004
                          </div>
                        </div>
                        <div className="testimonial-card">
                          <div className="testimonial-text">
                            &#39;Arghadip was a fantastic Instructor{" "}
                            <span className="highlight">
                              he cleared all the doubts
                            </span>{" "}
                            and his explanation was very accurate and easy to
                            understand.&#39;
                          </div>
                          <div className="testimonial-source">
                            - Student Report #005
                          </div>
                        </div>
                        <div className="testimonial-card">
                          <div className="testimonial-text">
                            &#39;Your deep knowledge of cybersecurity concepts
                            and{" "}
                            <span className="highlight">
                              real-world ethical hacking techniques made the
                              learning process both engaging and insightful
                            </span>
                            .&#39;
                          </div>
                          <div className="testimonial-source">
                            - Student Report #006
                          </div>
                        </div>
                        <div className="testimonial-card">
                          <div className="testimonial-text">
                            &#39;I enjoyed the classes, it definitely helped me
                            as I am a beginner, and now{" "}
                            <span className="highlight">
                              I can use what I learned and read forms and
                              practice
                            </span>
                            .&#39;
                          </div>
                          <div className="testimonial-source">
                            - Student Report #007
                          </div>
                        </div>
                        <div className="testimonial-card">
                          <div className="testimonial-text">
                            &#39;Nothing sir, you taught us many tools and{" "}
                            <span className="highlight">
                              shared many experiences which will guide us and
                              help for our future
                            </span>
                            .&#39;
                          </div>
                          <div className="testimonial-source">
                            - Student Report #008
                          </div>
                        </div>
                        <div className="testimonial-card">
                          <div className="testimonial-text">
                            &#39;Arghadip Sir is very knowledgeable in the
                            domain and has{" "}
                            <span className="highlight">
                              encouraged us to not only explore each syllabus
                              but also pursue cybersecurity and try various
                              concepts practically
                            </span>
                            .&#39;
                          </div>
                          <div className="testimonial-source">
                            - Student Report #009
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Cyber Timeline View */}
              {activeCommand === "cyber-timeline" && (
                <div id="cyber-timeline" className="analysis-view">
                  <div className="data-header">
                    <div className="data-title">
                      Cyber Evolution Matrix :: Past | Present | Future
                    </div>
                    <div className="data-controls">
                      <div className="control-button" title="Refresh">
                        ⟳
                      </div>
                      <div className="control-button" title="Export">
                        ↓
                      </div>
                      <div className="control-button" title="Share">
                        ⚡
                      </div>
                    </div>
                  </div>
                  <div className="info-section">
                    <div className="section-title">Timeline Analysis</div>
                    <div className="info-grid">
                      <div className="info-card">
                        <div className="info-value">1988</div>
                        <div className="info-label">First Virus Era</div>
                      </div>
                      <div className="info-card">
                        <div className="info-value">2010s</div>
                        <div className="info-label">Nation-State Wars</div>
                      </div>
                      <div className="info-card">
                        <div className="info-value">2025+</div>
                        <div className="info-label">AI Cyber Warfare</div>
                      </div>
                      <div className="info-card">
                        <div className="info-value">YOU</div>
                        <div className="info-label">Future Guardian</div>
                      </div>
                    </div>
                  </div>
                  <div className="progress-section">
                    <div className="section-title">Threat Evolution Stages</div>
                    <div className="progress-item">
                      <span style={{ color: "#00cc44" }}>
                        Individual Hackers (1988-2000)
                      </span>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="progress-item">
                      <span style={{ color: "#00cc44" }}>
                        Criminal Organizations (2000-2010)
                      </span>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="progress-item">
                      <span style={{ color: "#00cc44" }}>
                        Nation-State Actors (2010-2020)
                      </span>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="progress-item">
                      <span style={{ color: "#00cc44" }}>
                        AI-Powered Threats (2020-Future)
                      </span>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="main-content">
                    <div className="content-header">
                      The Cyber Evolution Chronicles
                    </div>
                    <div className="content-text">
                      <strong className="emphasis">
                        THE PAST (1988-2009) - The Digital Wild West
                      </strong>
                      <br />
                      <br />
                      <span className="highlight">Morris Worm (1988)</span> -
                      Accidental first internet worm that brought down 10% of
                      connected computers. The Kevin Mitnick Era - Social
                      engineering king who proved humans are the weakest link.
                      ILOVEYOU Virus (2000) caused $10B damage, showing how
                      curiosity could crash the world. Underground Forums
                      emerged: Legion of Doom, Chaos Computer Club, Cult of the
                      Dead Cow - legendary collectives that defined hacker
                      culture.
                      <br />
                      <br />
                      Difficulty: 2/5 - Beginner friendly
                      <br />
                      <br />
                      <strong className="emphasis">
                        THE PRESENT (2010-2025) - Professional Warfare Era
                      </strong>
                      <br />
                      <br />
                      <span className="highlight">Stuxnet (2010)</span> - First
                      cyberweapon with physical destruction, destroying Iranian
                      nuclear centrifuges.{" "}
                      <span className="highlight">Darknet Economy</span> matured
                      with Tor Browser and Silk Road ($1.2B transactions).{" "}
                      <span className="highlight">Anonymous Hacktivism</span>{" "}
                      launched Operation Payback with coordinated DDoS attacks.
                      <span className="highlight">
                        EternalBlue & WannaCry (2017)
                      </span>{" "}
                      - NSA tools weaponized by North Korea, paralyzing
                      hospitals worldwide.
                      <span className="highlight">Pegasus Spyware</span>{" "}
                      targeted 50K+ victims including world leaders and
                      journalists. <span className="highlight">SolarWinds</span>{" "}
                      - Russian SVR compromising 18K+ organizations through
                      supply chain.
                      <span className="highlight">Ransomware Pandemic</span> -
                      Colonial Pipeline, JBS, with average $5.3M ransom demands.{" "}
                      <span className="highlight">
                        Hezbollah Pager Attack (2024)
                      </span>
                      demonstrated supply chain weaponization at scale.
                      <br />
                      <br />
                      <span className="emphasisr">
                        Difficulty: 5/5 - Nation-state level
                      </span>
                      <br />
                      <br />
                      <strong className="emphasis">
                        THE FUTURE (2025-2035) - AI Warfare Era
                      </strong>
                      <br />
                      <br />
                      <span className="highlight">
                        Quantum Cryptographic Collapse
                      </span>{" "}
                      - All current encryption standards broken overnight.
                      <span className="highlight">
                        Agentic AI Cyber Armies
                      </span>{" "}
                      - Self-improving autonomous malware that learns faster
                      than humans.{" "}
                      <span className="highlight">
                        Satellite Constellation Warfare
                      </span>{" "}
                      - Starlink, GPS attacks disrupting global communications.{" "}
                      <span className="highlight">
                        Supply Chain Weaponization
                      </span>{" "}
                      - IoT devices, car hacking, medical implants turned into
                      weapons.{" "}
                      <span className="highlight">
                        Neural Interface Hacking
                      </span>{" "}
                      - Brain-computer interfaces and biotech vulnerabilities
                      exploited.{" "}
                      <span className="highlight">
                        Deepfake Reality Collapse{" "}
                      </span>{" "}
                      - Truth itself becomes a cybersecurity problem.{" "}
                      <span className="highlight">
                        Critical Infrastructure Cascades
                      </span>{" "}
                      - Power grids, nuclear plants, hospitals failing in domino
                      effects.
                      <span className="highlight">
                        Automotive & IoT Botnets
                      </span>{" "}
                      - 50 billion connected devices weaponized simultaneously.{" "}
                      <span className="highlight">OT Warfare</span> - Industrial
                      accidents triggered remotely to cause maximum damage.
                      <br />
                      <br />
                      <span className="emphasisr">
                        {" "}
                        Difficulty: EXISTENTIAL THREAT level
                      </span>
                      <br />
                      <br />
                      <strong className="emphasis">
                        ◆ TIMELINE_STATUS: ACCELERATING ◆ THREAT_LEVEL: MAXIMUM
                        ◆ PREPARATION_WINDOW: CLOSING ◆
                      </strong>
                    </div>
                  </div>
                  <div className="main-content">
                    <div className="content-header">
                      Where YOU Fit in This Epic
                    </div>
                    <div className="content-text">
                      <strong className="emphasis">
                        THE OPPORTUNITY IN CHAOS:
                      </strong>
                      <br />
                      <br />
                      We&apos;re entering the most dangerous yet most
                      opportunistic phase in cyber history. While AI-powered
                      threats multiply exponentially, the demand for intelligent
                      defenders is skyrocketing beyond anything we&apos;ve seen.
                      <br />
                      <br />
                      <strong className="emphasis">
                        HOW TO DOMINATE THIS SPACE:
                      </strong>
                      <br />
                      <br />◆
                      <span className="emphasis">
                        Learn offensive techniques
                      </span>{" "}
                      - Understand how attackers think and operate
                      <br />◆
                      <span className="emphasis"> Master AI security</span> -
                      Defend against and with artificial intelligence
                      <br />◆
                      <span className="emphasis">
                        {" "}
                        Specialize in emerging domains
                      </span>{" "}
                      - IoT, OT, quantum, space security
                      <br />◆
                      <span className="emphasis">
                        {" "}
                        Think like a nation-state
                      </span>{" "}
                      - Understand geopolitical cyber warfare
                      <br />◆
                      <span className="emphasis">
                        {" "}
                        Build practical experience
                      </span>{" "}
                      - Lab work isn&apos;t enough anymore
                      <br />
                      <br />
                      <strong className="emphasis">
                        ILLUSIONSECURITY.AI PREPARES YOU FOR:
                      </strong>
                      <br />
                      <br />◆ Understanding the
                      <span className="emphasis"> historical context</span>{" "}
                      behind modern attacks
                      <br />◆
                      <span className="emphasis">Hands-on experience</span> with
                      real attack vectors and defense strategies
                      <br />◆
                      <span className="emphasis">Future-ready skills</span> - AI
                      security, quantum cryptography, space security
                      <br />◆
                      <span className="emphasis">Strategic thinking</span> - Not
                      just technical knowledge but threat intelligence
                      <br />◆
                      <span className="emphasis">Industry connections</span> -
                      Network with professionals defending against these threats
                      <br />
                      <br />
                      The next chapter of cyber warfare is being written
                      <span className="emphasis"> right now</span>. You can
                      either be a spectator watching from the sidelines, or be
                      one of the{" "}
                      <span className="highlight">elite defenders</span> shaping
                      the digital future.
                      <br />
                      <br />
                      <strong className="emphasis">
                        ◆ MISSION_CLEAR: BECOME_THE_GUARDIAN ◆ TIME_WINDOW:
                        LIMITED ◆ READINESS_LEVEL: MAXIMUM ◆
                      </strong>
                    </div>
                  </div>
                </div>
              )}

              {/* Career Pathways View */}
              {activeCommand === "career-pathways" && (
                <div id="career-pathways" className="career-explorer active">
                  <div className="data-header">
                    <div className="data-title">
                      Cybersecurity Career Matrix
                    </div>
                  </div>

                  {/* Conditional rendering based on team selection */}
                  {selectedTeam === null ? (
                    <div id="domain-selector" className="domain-selection">
                      <div
                        className="domain-card red-team"
                        onClick={() => setSelectedTeam("red")}
                      >
                        <div className="domain-icon">⚔️</div>
                        <h3 className="domain-title">Red Team</h3>
                        <p className="domain-desc">
                          Offensive security operations, penetration testing,
                          and ethical hacking to identify vulnerabilities.
                        </p>
                      </div>
                      <div
                        className="domain-card blue-team"
                        onClick={() => setSelectedTeam("blue")}
                      >
                        <div className="domain-icon">🛡️</div>
                        <h3 className="domain-title">Blue Team</h3>
                        <p className="domain-desc">
                          Defensive security operations, monitoring, incident
                          response, and threat detection.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div id="careers-panel" className="careers-panel active">
                      <button
                        className="back-button"
                        onClick={() => setSelectedTeam(null)}
                      >
                        ← Back to Domains
                      </button>
                      <div className="careers-header">
                        <h2
                          className={`careers-title ${
                            selectedTeam === "red" ? "red" : "blue"
                          }`}
                        >
                          {selectedTeam === "red"
                            ? "Red Team Career Paths"
                            : "Blue Team Career Paths"}
                        </h2>
                      </div>
                      <div className="careers-grid">
                        {careers[selectedTeam].map((career) => (
                          <div key={career.name} className="career-item">
                            <div className="career-name">{career.name}</div>
                            <div className="career-desc">{career.desc}</div>
                            <div className="career-details">
                              <div className="detail-item">
                                <div className="detail-label">
                                  Salary Range:
                                </div>
                                <div className="detail-value salary-highlight">
                                  {career.salary}
                                </div>
                              </div>
                              <div className="detail-item">
                                <div className="detail-label">
                                  Market Demand:
                                </div>
                                <div className="detail-value">
                                  <span
                                    className={`demand-indicator ${getDemandClass(
                                      career.demand
                                    )}`}
                                  >
                                    {career.demand}
                                  </span>
                                </div>
                              </div>
                              <div className="detail-item">
                                <div className="detail-label">Growth Rate:</div>
                                <div className="detail-value">
                                  {career.growth}
                                </div>
                              </div>
                              <div className="detail-item">
                                <div className="detail-label">Key Skills:</div>
                                <div className="detail-value">
                                  {career.skills}
                                </div>
                              </div>
                            </div>
                            <div className="difficulty-indicator">
                              <div className="difficulty-label">
                                Technical Difficulty:
                              </div>
                              <div className="difficulty-bars">
                                {renderDifficultyBars(career.difficulty)}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Status Bar */}
          <div className="status-bar">
            <div className="status-info">
              <span>USER: root</span>
              <span>SESSION: secure</span>
              <span>ENCRYPTION: AES-256</span>
            </div>
            <div className="timestamp" id="live-timestamp">
              {timestamp}
            </div>
          </div>
        </div>
      </div>

      {/* All CSS from the original file is placed here */}
      {/* The 'global' keyword is used to apply styles globally, just like in a regular CSS file */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&display=swap");

        .matrix-career-container {
          background: transparent;
          font-family: "JetBrains Mono", monospace;
          margin: 0;
          padding: 20px;
          color: #00ff41;
          min-height: 100vh;
          overflow-x: hidden;
        }
        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 20px;
        }
        .matrix-quantum-interface {
          background: linear-gradient(
              90deg,
              rgba(0, 255, 100, 0.02) 1px,
              transparent 1px
            ),
            linear-gradient(
              180deg,
              rgba(0, 255, 100, 0.02) 1px,
              transparent 1px
            ),
            linear-gradient(135deg, #001a1a 0%, #002525 50%, #001a1a 100%);
          background-size: 25px 25px, 25px 25px, 100% 100%;
          border: 2px solid rgba(0, 255, 100, 0.3);
          border-radius: 15px;
          padding: 30px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 0 30px rgba(0, 255, 100, 0.1),
            inset 0 0 30px rgba(0, 255, 100, 0.05);
        }
        .quantum-field {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          opacity: 0.4;
        }
        .quantum-dot {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #00ff64;
          border-radius: 50%;
          animation: quantumDrift 20s linear infinite;
          box-shadow: 0 0 4px #00ff64;
        }
        @keyframes quantumDrift {
          0% {
            transform: translate3d(-50px, 100vh, 0) rotate(0deg);
            opacity: 0;
          }
          5% {
            opacity: 0.6;
          }
          95% {
            opacity: 0.6;
          }
          100% {
            transform: translate3d(50px, -50px, 0) rotate(180deg);
            opacity: 0;
          }
        }
        .interface-header {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          margin-bottom: 25px;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(0, 255, 100, 0.2);
        }
        .terminal-identity {
          color: #00ff64;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 1px;
        }
        .system-title {
          text-align: center;
          color: #00ff41;
          font-size: 18px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-shadow: 0 0 10px rgba(0, 255, 65, 0.5);
        }
        .connection-status {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #00cc33;
        }
        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #00ff41;
          animation: pulse 2s ease-in-out infinite;
          box-shadow: 0 0 8px #00ff41;
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }
        .main-grid {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 25px;
          min-height: 400px;
        }
        .command-panel {
          background: rgba(0, 40, 40, 0.3);
          border: 1px solid rgba(0, 255, 100, 0.2);
          border-radius: 8px;
          padding: 20px;
          backdrop-filter: blur(5px);
        }
        .panel-header {
          color: #00ff64;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 15px;
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(0, 255, 100, 0.2);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .command-menu {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .command-item {
          color: #00cc44;
          padding: 8px 0;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.2s ease;
          border-radius: 4px;
          padding-left: 8px;
        }
        .command-item:hover {
          color: #00ff64;
          background: rgba(0, 255, 100, 0.1);
          padding-left: 16px;
          transform: translateX(4px);
        }
        .command-item::before {
          content: "▶ ";
          color: #00ff41;
          font-size: 10px;
          margin-right: 6px;
        }
        .command-item.active {
          color: #00ff64;
          background: rgba(0, 255, 100, 0.15);
          font-weight: 500;
        }
        .data-display {
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(0, 255, 100, 0.15);
          border-radius: 8px;
          padding: 25px;
          position: relative;
          backdrop-filter: blur(3px);
        }
        .data-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(0, 255, 100, 0.2);
        }
        .data-title {
          color: #00ff41;
          font-size: 16px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .data-controls {
          display: flex;
          gap: 8px;
        }
        .control-button {
          width: 24px;
          height: 24px;
          border: 1px solid rgba(0, 255, 100, 0.4);
          background: rgba(0, 255, 100, 0.1);
          border-radius: 4px;
          color: #00ff64;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 12px;
          transition: all 0.2s ease;
        }
        .control-button:hover {
          background: rgba(0, 255, 100, 0.2);
          box-shadow: 0 0 8px rgba(0, 255, 100, 0.3);
          transform: scale(1.05);
        }
        .info-section {
          margin-bottom: 25px;
        }
        .section-title {
          color: #00ff64;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 15px;
          margin-bottom: 20px;
        }
        .info-card {
          background: rgba(0, 255, 100, 0.05);
          border: 1px solid rgba(0, 255, 100, 0.2);
          border-radius: 6px;
          padding: 12px;
          text-align: center;
          transition: all 0.3s ease;
        }
        .info-card:hover {
          background: rgba(0, 255, 100, 0.1);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 255, 100, 0.15);
        }
        .info-value {
          color: #00ff41;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 4px;
          text-shadow: 0 0 6px rgba(0, 255, 65, 0.3);
        }
        .info-label {
          color: #00cc44;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .progress-section {
          margin-bottom: 20px;
        }
        .progress-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          font-size: 12px;
        }
        .progress-bar {
          width: 80px;
          height: 6px;
          background: rgba(0, 255, 100, 0.2);
          border-radius: 3px;
          overflow: hidden;
          position: relative;
        }
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #00ff41, #00ff64);
          border-radius: 3px;
          position: relative;
        }
        .progress-fill::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          animation: progressScan 2s linear infinite;
        }
        @keyframes progressScan {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
        .main-content {
          background: rgba(0, 40, 40, 0.2);
          border: 1px solid rgba(0, 255, 100, 0.1);
          border-radius: 6px;
          padding: 20px;
          margin-top: 20px;
          min-height: 200px;
        }
        .content-header {
          color: #00ff64;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 15px;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .content-text {
          color: #ccffcc;
          line-height: 1.7;
          font-size: 14px;
          font-weight: 400;
          text-align: justify;
        }
        .highlight {
          background: linear-gradient(
            90deg,
            rgba(0, 255, 100, 0.2),
            rgba(0, 255, 150, 0.2)
          );
          color: #ffffff;
          padding: 2px 4px;
          border-radius: 3px;
          font-weight: 500;
        }
        .emphasis {
          color: #00ff64;
          font-weight: 600;
        }
        .emphasisr {
          color: #fa1414ff;
          font-weight: 600;
        }
        .career-explorer.active {
          display: block;
        }
        .domain-selection {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 25px;
        }
        .domain-card {
          background: rgba(0, 40, 40, 0.3);
          border: 2px solid transparent;
          border-radius: 8px;
          padding: 20px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .domain-card.red-team {
          border-color: rgba(255, 68, 68, 0.4);
          background: linear-gradient(
            135deg,
            rgba(40, 0, 0, 0.3),
            rgba(60, 0, 0, 0.2)
          );
        }
        .domain-card.blue-team {
          border-color: rgba(68, 68, 255, 0.4);
          background: linear-gradient(
            135deg,
            rgba(0, 0, 40, 0.3),
            rgba(0, 0, 60, 0.2)
          );
        }
        .domain-card:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 25px rgba(0, 255, 100, 0.15);
        }
        .domain-card.red-team:hover {
          box-shadow: 0 8px 25px rgba(255, 68, 68, 0.2);
        }
        .domain-card.blue-team:hover {
          box-shadow: 0 8px 25px rgba(68, 68, 255, 0.2);
        }
        .domain-icon {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }
        .domain-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .red-team .domain-title {
          color: #ff4444;
        }
        .blue-team .domain-title {
          color: #4444ff;
        }
        .domain-desc {
          color: #aaa;
          font-size: 0.9rem;
          line-height: 1.4;
        }
        .careers-panel.active {
          display: block;
        }
        .back-button {
          background: rgba(0, 40, 40, 0.3);
          border: 1px solid rgba(0, 255, 100, 0.3);
          color: #00ff64;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          font-family: "JetBrains Mono", monospace;
          font-size: 12px;
          margin-bottom: 20px;
          transition: all 0.3s ease;
        }
        .back-button:hover {
          background: rgba(0, 255, 100, 0.1);
          transform: translateX(-2px);
        }
        .careers-header {
          text-align: center;
          margin-bottom: 20px;
        }
        .careers-title {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .careers-title.red {
          color: #ff4444;
          text-shadow: 0 0 15px rgba(255, 68, 68, 0.3);
        }
        .careers-title.blue {
          color: #4444ff;
          text-shadow: 0 0 15px rgba(68, 68, 255, 0.3);
        }
        .careers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 15px;
        }
        .career-item {
          background: rgba(0, 40, 40, 0.2);
          border: 1px solid rgba(0, 255, 100, 0.2);
          border-radius: 6px;
          padding: 18px;
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .career-item:hover {
          border-color: rgba(0, 255, 100, 0.4);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 255, 100, 0.15);
          background: rgba(0, 40, 40, 0.3);
        }
        .career-name {
          color: #00ff64;
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .career-desc {
          color: #ccffcc;
          font-size: 0.85rem;
          line-height: 1.4;
          margin-bottom: 12px;
        }
        .career-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 10px;
        }
        .detail-item {
          font-size: 0.8rem;
        }
        .detail-label {
          color: #00cc44;
          font-weight: 600;
        }
        .detail-value {
          color: #aaffaa;
        }
        .salary-highlight {
          color: #00ff64;
          font-weight: 700;
          text-shadow: 0 0 8px rgba(0, 255, 100, 0.4);
        }
        .demand-indicator {
          display: inline-block;
          padding: 2px 6px;
          border-radius: 3px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
        }
        .demand-extreme {
          background: rgba(255, 0, 0, 0.2);
          color: #ff6666;
          border: 1px solid rgba(255, 0, 0, 0.3);
        }
        .demand-very-high {
          background: rgba(255, 165, 0, 0.2);
          color: #ffaa66;
          border: 1px solid rgba(255, 165, 0, 0.3);
        }
        .difficulty-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 10px;
        }
        .difficulty-label {
          font-size: 0.75rem;
          color: #00cc44;
          font-weight: 600;
        }
        .difficulty-bars {
          display: flex;
          gap: 2px;
        }
        .difficulty-bar {
          width: 8px;
          height: 4px;
          background: rgba(0, 255, 100, 0.2);
          border-radius: 1px;
        }
        .difficulty-bar.active {
          background: #00ff64;
          box-shadow: 0 0 4px #00ff64;
        }
        .status-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
          padding-top: 15px;
          border-top: 1px solid rgba(0, 255, 100, 0.2);
          font-size: 12px;
          color: #00cc44;
        }
        .status-info {
          display: flex;
          gap: 20px;
        }
        .timestamp {
          color: #00ff64;
          font-weight: 500;
        }
        .testimonial-card {
          background: rgba(0, 40, 40, 0.3);
          border: 1px solid rgba(0, 255, 100, 0.2);
          border-radius: 6px;
          padding: 12px;
        }
        .testimonial-text {
          color: #ccffcc;
          font-size: 0.85rem;
          line-height: 1.4;
          margin-bottom: 8px;
        }
        .testimonial-source {
          color: #00cc44;
          font-size: 0.75rem;
        }
        @media (max-width: 768px) {
          .main-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .interface-header {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 10px;
          }
          .info-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .domain-selection {
            grid-template-columns: 1fr;
          }
          .careers-grid {
            grid-template-columns: 1fr;
          }
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
          .container {
            padding: 15px;
          }
          .matrix-quantum-interface {
            padding: 20px;
          }
        }
        .close-button {x
          position: fixed; /* Fixed to the viewport corner */
          top: 15%;
          right: 20px;
          background: rgba(68, 255, 87, 0.34);
          color: rgba(0, 255, 30, 1);
          border: 1px solid rgba(66, 255, 9, 1);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          font-size: 20px;
          cursor: pointer;
          z-index: 1010; /* Ensures it's on top of everything */
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease, transform 0.3s ease;
        }

        .close-button:hover {
          background: rgba(81, 255, 0, 0.68);
          transform: scale(1.1);
          color: rgba(21, 255, 0, 1);
        }
      `}</style>
    </div>
  );
};

export default MatrixCareer;
