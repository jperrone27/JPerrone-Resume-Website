import React, { useState } from 'react';
import profilephoto from './assets/profilephoto.jpg';
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  HardDrive,
  Globe,
  Calendar,
  Building,
  GraduationCap,
  Code,
  ChevronDown,
  ChevronRight,
  Briefcase,
} from 'lucide-react';

function App() {
  const [isEarlierExperienceCollapsed, setIsEarlierExperienceCollapsed] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Profile Photo */}
            <div className="flex-shrink-0">
              <img
                src={profilephoto}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white"
              />
            </div>

            {/* Main Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Jordan Perrone</h1>
              <h2 className="text-xl text-blue-600 font-semibold mb-2">
                PhD Student & Graduate Research Assistant
              </h2>
              <p className="text-gray-600 text-lg mb-3 max-w-4xl">
                @ Florida Atlantic University&apos;s (FAU&apos;s) Center for Connected Autonomy & Artificial Intelligence (CA-AI)
              </p>

              {/* Contact + Locations */}
              <div className="flex flex-col gap-2">
                {/* Contact row */}
                <div className="flex flex-wrap justify-center md:justify-start gap-6">
                  <div className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <MapPin className="w-5 h-5" />
                    <span>Boca Raton, FL</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <Mail className="w-5 h-5" />
                    <span>jperrone27@gmail.com</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
                <a
                  href="https://www.linkedin.com/in/jordanperrone/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm hidden sm:inline">LinkedIn</span>
                </a>

                <a
                  href="https://github.com/jperrone27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors flex items-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  <span className="text-sm hidden sm:inline">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NEW: Single-column section (Objective only) */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="space-y-6">
          {/* Objective */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Objective</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 text-lg">
                To design and deploy robust, computationally efficient machine learning systems that operate reliably
                in distributed and resource-constrained environments.
              </p>

              {/* Desired metro areas: */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3 items-center">
                <span className="text-md font-semibold text-gray-700">Desired Metro Areas:</span>
                <div className="flex flex-wrap gap-2">
                  {['New York, NY', 'Los Angeles, CA', 'Miami, FL'].map((loc) => (
                    <span key={loc} className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-full">
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* NEW: Three-column section (Experience + Education + Right column [Skills + Projects]) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Column 1: Experience */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Building className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Experience</h3>
              </div>

              <div className="space-y-6">
                {/* Experience Item 0: GRA */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>Aug 2025 – Present</span>
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900">Graduate Research Assistant, PhD Student</h4>

                  <h5 className="text-blue-600 font-medium mb-2">
                    Florida Atlantic University, Center for Connected Autonomy & Artificial Intelligence (CA-AI)
                  </h5>

                  <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
                    <li>Researching decentralized learning for AI model training, aggregation, and inference at the edge.</li>
                    <li>
                      Conducting research and coursework in intelligent wireless communication systems (Smart Antennas),
                      focusing on signal coordination across multi-agent AI networks for data, model, and decision exchange.
                    </li>
                    <li>
                      Designing and evaluating decentralized learning frameworks that adapt aggregation and inference behavior
                      based on communication constraints, data distribution variability, and heterogeneous edge devices.
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Decentralized Learning</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Multi-Agent Systems</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Smart Antennas</span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Edge Inference</span>
                  </div>
                </div>

                {/* Experience Item 1: AI Specialist */}
                <div className="border-l-4 border-gray-300 pl-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>May 2025 – Aug 2025</span>
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900">AI Specialist</h4>
                  <h5 className="text-blue-600 font-medium mb-2">
                    Florida Atlantic University, Office of Information Technology
                  </h5>

                  <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
                    <li>Built and deployed customized course TA bots to support instruction across any subject.</li>
                    <li>Acted as the internal specialist on Retrieval-Augmented Generation (RAG) for AI agent building platforms.</li>
                    <li>
                      Collaborated with HPC experts to build a bulk document analysis tool using 32 parallel nodes for AI workloads on Google Vertex.
                    </li>
                    <li>Established documentation and conducted faculty/staff training on GenAI context engineering & best practices.</li>
                    <li>Designed and owned a public repository of system prompts validated through research and testing.</li>
                    <li>Developed a system prompting framework to reduce hallucinations and improve response reliability.</li>
                    <li>Interfaced with external vendor (Cloudforce) to triage feature requests and manage stakeholder expectations.</li>
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">GenAI</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">RAG</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">HPC</span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Google Vertex</span>
                  </div>
                </div>

                {/* Experience Item 2: Senior Systems Engineer */}
                <div className="border-l-4 border-gray-300 pl-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>Aug 2020 – Aug 2024</span>
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900">Senior Systems Engineer (EIT)</h4>
                  <h5 className="text-blue-600 font-medium mb-2">Koch Engineered Solutions, DEPCOM Power</h5>

                  <p className="text-gray-600 text-sm font-semibold mt-3">Automation and Modeling:</p>
                  <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
                    <li>
                      Engineered and maintained proprietary Python-based software for battery system simulation and optimization,
                      including numerical modeling, performance evaluation, and cost optimization.
                    </li>
                    <li>
                      Independently developed a Python-based software tool that automates applications engineering and electrical
                      system sizing for battery energy storage facilities, reducing engineering labor by 500+ hours/year.
                    </li>
                    <li>
                      Replaced legacy Excel/VBA workflows with Python-based software tools, improving processing speed by 60% and
                      enabling the solar plant systems engineering team to generate 200+ optimized system designs annually.
                    </li>
                    <li>
                      Routinely conducted parametric sensitivity analyses across hundreds of system configurations to improve
                      project internal rate of return (IRR) by up to 10+ basis points compared to customer RFP targets.
                    </li>
                    <li>
                      Engineered environmental and operational modeling tools to predict shading, soiling, and degradation impacts
                      using multi-decade NOAA datasets to forecast downtime and maintenance.
                    </li>
                    <li>
                      Redesigned and optimized a Python program that automates electrical calculations by iteratively processing
                      manufacturer configuration files, modeling degradation-driven changes in current and voltage over system
                      lifetime, and generating visualizations to verify long-term operational compliance.
                    </li>
                  </ul>

                  <p className="text-gray-600 text-sm font-semibold mt-3">Key Technical Achievements:</p>
                  <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
                    <li>
                      Secured a $500M multi-project portfolio by leading systems engineering analysis and presenting validated
                      performance, reliability, and financial models for U.S. Department of Energy funded infrastructure programs.
                    </li>
                    <li>
                      Served as lead systems engineering liaison between the U.S. Department of Energy, system owner, Engineer of
                      Record, transmission operators, and international equipment manufacturers.
                    </li>
                    <li>
                      Led technical negotiations and interface definition for large-scale energy infrastructure supporting grid
                      resilience and recovery in Puerto Rico.
                    </li>
                    <li>
                      Developed, tested, validated, and deployed a modular Python-based energy system design platform used to
                      optimally configure 30+ subsystems for performance, power grid stability, and lifecycle economics.
                    </li>
                  </ul>

                  <p className="text-gray-600 text-sm font-semibold mt-3">Core Responsibilities:</p>
                  <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
                    <li>
                      Acted as systems engineering team lead for Energy Storage Systems (ESS), managing multi-disciplinary teams
                      across internal engineering, subcontractors, vendors, and international suppliers.
                    </li>
                    <li>
                      Served as technical authority in contract negotiations (requirements definition, architecture, integration,
                      verification, and operational handoff) for 2,000+ MW of utility-scale solar and battery energy storage systems.
                    </li>
                    <li>
                      Led system architecture design and trade studies for hybrid solar + storage platforms across multiple
                      geographic regions and grid interconnection standards, optimizing performance, reliability, and cost.
                    </li>
                    <li>
                      Owned end-to-end system integration across electrical, controls, SCADA, power electronics, and civil
                      interfaces, incorporating continuous feedback from field execution teams.
                    </li>
                    <li>Mentored 30+ engineers and technical staff through a formal technical training process conducted onsite.</li>
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Python</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Modeling</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Optimization</span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Energy Storage</span>
                  </div>
                </div>

                {/* Earlier Experience Subsection */}
                <div className="mt-8">
                  <button
                    className="flex items-center gap-2 text-lg font-semibold text-gray-900 w-full text-left py-2 hover:bg-gray-100 rounded-md px-2 transition-colors"
                    onClick={() => setIsEarlierExperienceCollapsed(!isEarlierExperienceCollapsed)}
                  >
                    {isEarlierExperienceCollapsed ? (
                      <ChevronRight className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                    Earlier Experience
                  </button>

                  {!isEarlierExperienceCollapsed && (
                    <div className="space-y-6 mt-4">
                      {/* Earlier Experience Item 1 */}
                      <div className="border-l-4 border-gray-300 pl-4">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                          <Calendar className="w-4 h-4" />
                          <span>May 2019 - Aug 2019 · 4 mos</span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">
                          Technical Intern, Electric Operations Engineering
                        </h4>
                        <h5 className="text-blue-600 font-medium mb-2">PSEG, Somerset, New Jersey</h5>
                        <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
                          <li>
                            Furthered knowledge from previous internship experience and set a new goal of understanding and practicing every skill
                            required for each engineering project supervisor role.
                          </li>
                          <li>Tracked the completion rate and budget of some of the largest new infrastructure projects in 2019.</li>
                          <li>Evaluated and improved the street light groups&apos; ability to satisfy customer complaints & make repairs.</li>
                          <li>
                            Participated in field checks of storm damage and voltage issues, allowing me to learn specific problems with electric service
                            and distribution and how to address them.
                          </li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Electric Operations</span>
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Project Tracking</span>
                          <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Field Checks</span>
                        </div>
                      </div>

                      {/* Earlier Experience Item 2 */}
                      <div className="border-l-4 border-gray-300 pl-4">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                          <Calendar className="w-4 h-4" />
                          <span>Aug 2018 - Aug 2018 · 1 mo</span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">Innovator at Nuclear Innovation Bootcamp</h4>
                        <h5 className="text-blue-600 font-medium mb-2">Nuclear Innovation Alliance, Berkeley, CA</h5>
                        <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
                          <li>
                            Invited to UC Berkeley campus to spend two weeks developing an innovative new company that addresses a major issue hindering
                            the nuclear energy industry.
                          </li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Nuclear Energy</span>
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Innovation</span>
                          <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Startup Development</span>
                        </div>
                      </div>

                      {/* Earlier Experience Item 3 */}
                      <div className="border-l-4 border-gray-300 pl-4">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                          <Calendar className="w-4 h-4" />
                          <span>May 2018 - Aug 2018 · 4 mos</span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">Engineering Intern</h4>
                        <h5 className="text-blue-600 font-medium mb-2">PSEG, Somerset, New Jersey</h5>
                        <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
                          <li>Shadowed project managers in each of the main engineering groups in electric operations (i.e: new business, underground, system planning).</li>
                          <li>Learned the grid scheme and method of circuit design for electric delivery in central jersey.</li>
                          <li>Memorized geographical locations of large electrical grid infrastructure through site visits and field checks.</li>
                          <li>Managed spreadsheets tracking high volumes of electrical device inventory for volatile installation schedules.</li>
                          <li>Tracked accounting for largest contractor and saved the company several thousands of dollars in incorrect invoices.</li>
                          <li>Redesigned sub-transmission line route and provided properties for consideration by the system reinforcement group.</li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Electrical Grid</span>
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Circuit Design</span>
                          <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Inventory Management</span>
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Cost Savings</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Column 2: Education */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-green-100 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>

              <div className="space-y-6">
                {/* PhD */}
                <div className="border-l-4 border-green-600 pl-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>Aug 2025 – Present</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">PhD Student in Computer Science (GPA: 4.0)</h4>
                  <h5 className="text-green-600 font-medium mb-2">Florida Atlantic University</h5>

                  <p className="text-gray-600 text-sm mb-2">
                    Scholarship position: <br /> Graduate Research Assistant, Center for Connected Autonomy & Artificial Intelligence (CA-AI)
                    <br /><br />
                    Dissertation Topic: <br /> Decentralized learning for AI model training, aggregation, and inference at the edge
                  </p>

                  <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
                    <li>
                      Conducting research and coursework on intelligent wireless communication system engineering (Smart Antennas), focusing on signal coordination
                      across multi-agent AI networks for data, model, and decision exchange.
                    </li>
                    <li>
                      Designing and evaluating decentralized learning frameworks that adapt aggregation and inference behavior based on communication constraints,
                      data distribution variability, and heterogeneous edge devices.
                    </li>
                  </ul>
                </div>

                {/* MS */}
                <div className="border-l-4 border-gray-300 pl-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>Aug 2024 – Aug 2025</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">MS in Artificial Intelligence (GPA: 3.9)</h4>
                  <h5 className="text-green-600 font-medium mb-2">Florida Atlantic University</h5>
                  <p className="text-gray-600 text-sm mb-2">
                    Scholarship position: <br /> National Science Foundation (NSF) sponsored Research Assistant
                    <br /><br />
                    Coursework: <br /> Deep Learning, Neural Networks, GenAI in Software Dev, Data Mining & ML, Linear Algebra for ML, Natural Language Processing,
                    Modern Cryptography, Social Networks & Big Data Analytics, Gas Turbine Theory
                  </p>

                  <p className="text-gray-600 text-sm font-semibold mt-3">Research and Reports:</p>
                  <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
                    <li>
                      Trained EfficientNet (CNN) and Vision Transformer (ViT) models for classification of boats from spectrogram data; addressed class imbalance using
                      data augmentation with Variational Autoencoder & Diffusion Models.
                    </li>
                    <li>Surveyed literature, tested code, and developed a formal report of the most robust unsupervised learning models.</li>
                    <li>Implemented cryptographic cybersecurity schemes in C++ including El Gamal Public Key Encryption and DES.</li>
                    <li>Produced experimental reports on parametric analysis of thrust & fuel efficiency using GasTurb 14 software.</li>
                  </ul>

                  <p className="text-gray-600 text-sm font-semibold mt-3">NSF Program Highlights:</p>
                  <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
                    <li>One of only 8 students selected for an NSF-sponsored Graduate Research Traineeship supported by a merit-based grant & scholarship.</li>
                    <li>Program focus: deploying transdisciplinary data science and AI skills through partnerships with industry leaders and domain experts.</li>
                  </ul>
                </div>

                {/* BS */}
                <div className="border-l-4 border-gray-300 pl-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>Sep 2017 – May 2020</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">BS in Mechanical Engineering</h4>
                  <h5 className="text-green-600 font-medium mb-2">Rutgers University, Honors Academy</h5>
                  <p className="text-gray-600 text-sm mb-2">
                    Achievements: Graduated Cum Laude, Dean’s List, Completed Bachelor&apos;s Degree in just 3 years (6 semesters)
                    <br />
                    Coursework: Internal Combustion Engines, Power Plants, Thermodynamics, Fluid Mechanics, Heat Transfer, Alternative Energy, Mechatronics,
                    Dynamic Systems & Controls, Python Data Structures & Algorithm Analysis
                  </p>
                  <p className="text-gray-600 text-sm font-semibold mt-3">Research and Reports:</p>
                  <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
                    <li>Capstone: Mechanical Fish for Submarine Exploration; 3D printed assembly powered by Arduino & DC motors.</li>
                    <li>ANSYS Fluent Simulation: Produced, analyzed, and reported converging airflow simulation of NACA airfoils.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Column 3: Technical Focus & Skills + Software Projects */}
            <div className="space-y-8">
              {/* Software Projects */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Briefcase className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Software Projects</h3>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {/* Project 1 */}
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1jdFPSlRzEeTIeUbyrpzOZiCbO7SzsG-f/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-green-100 text-green-800 rounded-full hover:bg-green-800 hover:text-white transition-colors flex items-center gap-2 mb-2 w-fit"
                    >
                      <HardDrive className="w-5 h-5" />
                      <span className="text-sm">IEEE Style Report: Deep Learning for Toxic Plant Classification</span>
                    </a>
                    <a
                      href="https://github.com/jperrone27/cnn-toxic-plant-classification"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors flex items-center gap-2 mb-2 w-fit"
                    >
                      <Github className="w-5 h-5" />
                      <span className="text-sm">GitHub: Deep Learning for Toxic Plant Classification</span>
                    </a>
                    <p className="text-gray-600 text-sm ml-2">
                      Led development and benchmarking of VGG-16, ResNet, and InceptionNet CNN models for toxic plant image classification.
                      Achieved 85% accuracy and 80% faster runtime using TensorFlow with CUDA acceleration on NVIDIA GPU.
                    </p>
                  </div>

                  {/* Project 2 */}
                  <div>
                    <a
                      href="https://github.com/jperrone27/mistral-discord-bot-pipeline"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors flex items-center gap-2 mb-2 w-fit"
                    >
                      <Github className="w-5 h-5" />
                      <span className="text-sm">Mister-FAU, GenAI Powered Discord Bot</span>
                    </a>
                    <p className="text-gray-600 text-sm ml-2">
                      Developed and deployed a Generative-AI powered Discord bot with a Python backend connected to a hosted Mistral-7B LLM
                      running on a personal remote server.
                    </p>
                  </div>

                  {/* Project 3 */}
                  <div>
                    <a
                      href="https://github.com/jperrone27/turtlebot4_wall_following"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors flex items-center gap-2 mb-2 w-fit"
                    >
                      <Github className="w-5 h-5" />
                      <span className="text-sm">Autonomous Wall-Tracking Robotic System</span>
                    </a>
                    <p className="text-gray-600 text-sm ml-2">
                      Engineered an autonomous wall-tracking system for a mobile robot by developing specialized Python packages for perception,
                      motion control, and data logging.
                    </p>
                  </div>
                </div>
              </div>
              

              {/* Technical Skills & Focus */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Code className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Technical Focus & Skills</h3>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Machine Learning:</h4>
                      <div className="flex flex-wrap gap-2">
                        {['CNNs', 'RNNs', 'Autoencoders', 'Transformers', 'Fine-tuning', 'Multi-agent systems', 'Classical ML'].map(
                          (item) => (
                            <span key={item} className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-full">
                              {item}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Signal & Systems:</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Antenna array signal processing', 'Spectrogram-based learning', 'Distributed sensing & inference'].map(
                          (item) => (
                            <span key={item} className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-full">
                              {item}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Programming & Tools:</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Python', 'C++', 'R', 'MATLAB', 'PyTorch', 'TensorFlow', 'CUDA', 'Scikit-learn', 'Hugging Face'].map(
                          (item) => (
                            <span key={item} className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-full">
                              {item}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Platforms:</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Linux (Debian/Ubuntu)', 'Git', 'Docker', 'High Performance Computing (NVIDIA GPUs)', 'VSCode', 'Jupyter'].map(
                          (item) => (
                            <span key={item} className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-full">
                              {item}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div> {/* End 3-col grid */}
        </div>
      </div>
    </div>
  );
}

export default App;
