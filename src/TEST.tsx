import React, { useState } from 'react'; // Import useState
import { Mail, Phone, MapPin, Linkedin, Github, HardDrive, Globe, Calendar, Building, GraduationCap, Code, ChevronDown, ChevronRight, Briefcase } from 'lucide-react'; // Added Briefcase icon for projects

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
              {/* Using a placeholder for now, you can replace this with your actual headshot URL */}
              <img
                src="/profilephoto.jpg"
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white"
              />
            </div>
            
            {/* Main Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Jordan Perrone</h1>
              <h2 className="text-xl text-blue-600 font-semibold mb-2">PhD Student & Graduate Research Assistant</h2>
              <p className="text-gray-600 text-lg mb-2 max-w-4xl">
                @ Florida Atlantic University's (FAU's) Center of Connected Autonomy & Artificial Intelligence (CA-AI)
              </p>
              
              {/* Contact Info (Email and Phone removed) */}
              <div className="flex flex-wrap justify-center md:justify-start gap-6">
                <div className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <MapPin className="w-5 h-5" />
                  <span>Boca Raton, FL</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex flex-wrap gap-4 mt-4"> {/* Changed from flex-col to flex-wrap and adjusted gap */}
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/jordanperrone/"
                  target= "_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm hidden sm:inline">LinkedIn</span> {/* Hidden on small screens, shown on larger */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Three Columns */}
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8"> {/* Main grid for 3 columns on large screens */}
          
          {/* Column 1: Work Experience */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Building className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Experience</h3>
            </div>
            
            <div className="space-y-6">
              {/* Experience Item 1: AI Specialist */}
              <div className="border-l-4 border-blue-600 pl-4">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                  <Calendar className="w-4 h-4" />
                  <span>May 2025 – Aug 2025</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">AI Specialist</h4>
                <h5 className="text-blue-600 font-medium mb-2">Florida Atlantic University, Office of Information Technology</h5>
                <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
                  <li>Established documentation and conducted faculty/staff training on GenAI context engineering & best practices.</li>
                  <li>Generated a public repository of system prompts validated through research and agent testing.</li>
                  <li>Developed a system prompting framework to ensure consistent, accurate responses with minimal hallucinations.</li>
                  <li>Created templated course TA bots for professors to deploy in minutes to support instruction across any subject.</li>
                  <li>Built bulk document analysis tool using LLMs on 32 parallel nodes in collaboration with cloud computing leader.</li>
                  <li>Acted as the internal specialist on RAG (Retrieval-Augmented Generation) within low-code AI agent platform.</li>
                  <li>Interfaced with external vendor (Cloudforce) to triage feature requests and manage stakeholder expectations.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">GenAI</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">LLMs</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">RAG</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Cloud Computing</span>
                </div>
              </div>

              {/* Experience Item 2: Senior Project Development Engineer */}
              <div className="border-l-4 border-gray-300 pl-4">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                  <Calendar className="w-4 h-4" />
                  <span>Aug 2020 – Aug 2024</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Senior Project Development Engineer (EIT)</h4>
                <h5 className="text-blue-600 font-medium mb-2">DEPCOM Power, Systems Engineering</h5>
                <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
                  <li>Designed and executed construction of 2000MW of solar & energy storage facilities from award to operations.</li>
                  <li>Selected as team lead of energy storage systems (ESS) applications engineering and promoted to Senior PDE.</li>
                  <li>Educated over 30 new and existing employees in battery technology and ESS section of corporate training initiative.</li>
                  <li>Supported executive management in customer interactions as energy storage engineering subject matter expert.</li>
                  <li>Led contract negotiations for over $1billion of utility-scale solar and energy storage assets in the US & PR.</li>
                  <li>Produced & presented industry leading financial optimization models encompassing parametric analyses of hundreds of plant energy yield adjusted cash flows adding 10+ basis points of IRR to customer proformas.</li>
                  <li>Optimized field implementation of designs accelerate construction schedule & increase margin retention by 2%.</li>
                  <li>Modeled and analyzed relative effects of various bifacial solar module parameters on energy production to compare financial returns.</li>
                  <li>Managed collaborative effort to certify SCADA architecture compliance with Puerto Rico grid Minimum Technical Requirements.</li>
                  <li>Interfaced weekly with construction team on-site or virtually to incorporate feedback on system integration.</li>
                  <li>Established 4 long-term customer partnerships for the organization in sales support engineering facet of this role.</li>
                </ul>
                <p className="text-gray-600 text-sm font-semibold mt-3">Key Achievements:</p>
                <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
                    <li>Secured record $500MM portfolio by presenting development engineering and financial modeling of 4 US Department of Energy funded solar and energy storage projects.</li>
                    <li>Served as Team Lead of solar and energy storage systems technical negotiations and liaison to US Department of Energy, project owner, Engineer of Record, transmission provider, and international equipment suppliers.</li>
                    <li>Managed cross-disciplinary engineering on simultaneous projects including internal teams and subcontractors.</li>
                    <li>Independently derived and validated a novel Python program that automates applications engineering and optimizes electrical equipment sizing for new battery energy storage facilities saving of 500+ hours per year.</li>
                    <li>Collaborated with electrical engineering manager to integrate Python and replace Excel VBA code improving processing speeds by 60%.</li>
                    <li>Developed, distributed, and maintained regular energy storage system design platform incorporating 30+ Python programs with Excel as the interface to analyze battery technologies, degradation, energy markets, & financials.</li>
                    <li>Engineered energy simulation data processing tools to forecast expected shading losses due to site topography.</li>
                    <li>Pioneered data analytics model to predict photovoltaic module soiling losses used in PVsyst energy models based on 25-100 years of NOAA daily precipitation data.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Solar</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Energy Storage</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Python</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Financial Modeling</span>
                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">SCADA</span>
                </div>
              </div>

              {/* Earlier Experience Subsection */}
              <div className="mt-8">
                <button 
                  className="flex items-center gap-2 text-lg font-semibold text-gray-900 w-full text-left py-2 hover:bg-gray-100 rounded-md px-2 transition-colors"
                  onClick={() => setIsEarlierExperienceCollapsed(!isEarlierExperienceCollapsed)}
                >
                  {isEarlierExperienceCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  Earlier Experience
                </button>
                {!isEarlierExperienceCollapsed && (
                  <div className="space-y-6 mt-4">
                    {/* Earlier Experience Item 1: Technical Intern, Electric Operations Engineering (PSEG - May 2019) */}
                    <div className="border-l-4 border-gray-300 pl-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>May 2019 - Aug 2019 · 4 mos</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">Technical Intern, Electric Operations Engineering</h4>
                      <h5 className="text-blue-600 font-medium mb-2">PSEG, Somerset, New Jersey</h5>
                      <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
                        <li>Furthered knowledge from previous internship experience and set a new goal of understanding and practicing every skill required for each engineering project supervisor role.</li>
                        <li>Tracked the completion rate and budget of some of the largest new infrastructure projects in 2019.</li>
                        <li>Evaluated and improved the street light groups' ability to satisfy customer complaints & make repairs.</li>
                        <li>Participated in field checks of storm damage and voltage issues allowing me to learn specific problems with electric service and distribution and how to address them.</li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Electric Operations</span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Project Tracking</span>
                        <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Field Checks</span>
                      </div>
                    </div>

                    {/* Earlier Experience Item 2: Innovator at Nuclear Innovation Bootcamp (Aug 2018) */}
                    <div className="border-l-4 border-gray-300 pl-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>Aug 2018 - Aug 2018 · 1 mo</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">Innovator at Nuclear Innovation Bootcamp</h4>
                      <h5 className="text-blue-600 font-medium mb-2">Nuclear Innovation Alliance, Berkeley, CA</h5>
                      <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
                        <li>Invited to UC Berkeley campus to spend two weeks developing an innovative new company that addresses a major issue hindering the nuclear energy industry.</li>
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Nuclear Energy</span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Innovation</span>
                        <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Startup Development</span>
                      </div>
                    </div>

                    {/* Earlier Experience Item 3: Engineering Intern (PSEG - May 2018) */}
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
              </div> {/* End Earlier Experience Subsection */}
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
              {/* Graduate Education 1: PhD Student */}
              <div className="border-l-4 border-green-600 pl-4">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                  <Calendar className="w-4 h-4" />
                  <span>Aug 2025 – Present</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">PhD Student in Computer Science</h4>
                <h5 className="text-green-600 font-medium mb-2">Florida Atlantic University</h5>
                <p className="text-gray-600 text-sm mb-2">
                  Research Position: Graduate Research Assistant for the Center of Connected Autonomy & Artificial Intelligence<br />
                  Coursework: Smart Antennas, Intelligent Autonomous Robotics, Reinforcement Learning, Cloud Computing<br />
                  Dissertation Topic: Federated learning for AI model training, aggregation, & inferencing in drone swarm networks
                </p>
              </div>

              {/* Graduate Education 2: MS in AI */}
              <div className="border-l-4 border-gray-300 pl-4">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                  <Calendar className="w-4 h-4" />
                  <span>Aug 2024 – Aug 2025</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">MS in Artificial Intelligence (GPA: 3.9)</h4>
                <h5 className="text-green-600 font-medium mb-2">Florida Atlantic University</h5>
                <p className="text-gray-600 text-sm mb-2">
                  Research Position: National Science Foundation (NSF) sponsored Research Assistant<br />
                  Coursework: Deep Learning, Neural Networks, GenAI in Software Dev, Data Mining & ML, Linear Algebra for ML, Natural Language Processing, Modern Cryptography, Social Networks & Big Data Analytics, Gas Turbine Theory
                </p>
                <p className="text-gray-600 text-sm font-semibold mt-3">Research and Reports:</p>
                <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
                    <li>Led a collaborative research project developing TensorFlow CNN models for toxic plant classification with 85% accuracy and achieving 80% faster runtimes by leveraging CUDA for parallel computations on Nvidia GPU.</li>
                    <li>Developed & deployed custom Generative AI enabled Discord chat bot powered by an LLM on remote server.</li>
                    <li>Surveyed literature, tested code, and presented most robust subset of dozens of unsupervised learning models.</li>
                    <li>Produced experimental reports on parametric analysis of thrust & fuel efficiency based on design parameters of aeroderivative gas turbine engines, Turbojet engines, and Turbofan engines using GasTurb 14 software.</li>
                    <li>Implemented cryptographic cybersecurity schemes in C++ including El Gamal Public Key Encryption and DES.</li>
                </ul>
                <p className="text-gray-600 text-sm font-semibold mt-3">NSF Program Highlights:</p>
                <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
                    <li>One of only 8 students selected to contribute to NSF-sponsored Graduate Research Traineeship dedicated to training STEM students in interdisciplinary research areas supported by a merit-based grant & scholarship.</li>
                    <li>The NSF Research Traineeship goal is to deploy comprehensive, transdisciplinary knowledge and practical skills in data science and artificial intelligence through partnerships with industry leaders and domain experts.</li>
                </ul>
              </div>

              {/* Undergraduate Education */}
              <div className="border-l-4 border-gray-300 pl-4">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                  <Calendar className="w-4 h-4" />
                  <span>Sep 2017 - May 2020</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">BS in Mechanical Engineering</h4>
                <h5 className="text-green-600 font-medium mb-2">Rutgers University, Honors Academy</h5>
                <p className="text-gray-600 text-sm mb-2">
                  Achievements: Graduated Cum Laude, Dean’s List, Completed Bachelor's Degree in just 3 years (6 semesters)<br />
                  Coursework: Internal Combustion Engines, Power Plants, Thermodynamics, Fluid Mechanics, Heat Transfer, Alternative Energy, Mechatronics, Dynamic Systems & Controls, Python Data Structures & Algorithm Analysis
                </p>
                <p className="text-gray-600 text-sm font-semibold mt-3">Research and Reports:</p>
                <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
                    <li>Capstone: Mechanical Fish for Submarine Exploration; 3D printed assembly powered by Arduino & DC motors.</li>
                    <li>ANSYS Fluent Simulation: Produced, analyzed, and reported converging airflow simulation of NACA airfoils.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 3: Projects followed by Skills & Interests */}
          <div> {/* This div acts as the container for the third column content */}
            {/* Projects Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-4"> {/* Added mb-4 to separate from Skills below */}
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Briefcase className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Projects</h3>
              </div>
              <div className="grid grid-cols-1 gap-6"> {/* Simplified to 1-column grid for better stacking in a narrower column */}
                {/* Project Item 1 */}
                <div>
                  <a
                    href="https://github.com/jperrone2024/owlone-system-prompts"
                    className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors flex items-center gap-2 mb-2 w-fit"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm">Prompt Engineering Library</span>
                  </a>
                  <p className="text-gray-600 text-sm ml-2">This repository contains system prompts (also known as instruction sets) and prompt templates for Generative AI agents on low-code agent building platforms.</p>
                </div>
                
                {/* Project Item 2 */}
                <div>
                  <a
                    href="https://github.com/jperrone27/mistral-discord-bot-pipeline"
                    className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors flex items-center gap-2 mb-2 w-fit"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm">Mister-FAU AI Discord Bot</span>
                  </a>
                  <p className="text-gray-600 text-sm ml-2">Prototype of GenAI Powered Discord Bot "Mister-FAU"</p>
                </div>

                {/* Project Item 3 */}
                <div>
                  <a
                    href="https://drive.google.com/file/d/1DveGQt8oZsmb41gj66r-2efwlpVYhL-B/view?usp=sharing"
                    className="p-2 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors flex items-center gap-2 mb-2 w-fit"
                  >
                    <HardDrive className="w-5 h-5" />
                    <span className="text-sm">Spotify Network Analysis</span>
                  </a>
                  <p className="text-gray-600 text-sm ml-2">Analyzing Spotify Network Data for Classification + Prediction</p>
                </div>

                {/* Project Item 4 */}
                <div>
                  <a
                    href="https://drive.google.com/file/d/1jdFPSlRzEeTIeUbyrpzOZiCbO7SzsG-f/view?usp=drive_link"
                    className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors flex items-center gap-2 mb-2 w-fit"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm">CNN Deep Learning Models</span>
                  </a>
                  <p className="text-gray-600 text-sm ml-2">Comparing accuracy of VGG-16, ResNet, and InceptionNet CNN models for classification of Toxic Plants</p>
                </div>
                
                {/* Project Item 5 */}
                <div>
                  <a
                    href="https://drive.google.com/file/d/1Cb2oMUG1d7tMDwf3C7AJpGmTgxsviroE/view?usp=drive_link"
                    className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors flex items-center gap-2 mb-2 w-fit"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm">Cybersecurity of Vehicle Control Systems</span>
                  </a>
                  <p className="text-gray-600 text-sm ml-2">Cybersecurity of Vehicle Control Systems (Aviation, Automobiles, Drones)</p>
                </div>
                
                {/* Project Item 6 */}
                <div>
                  <a
                    href="https://drive.google.com/file/d/1UrAAcP-tt-PCMf5EgOG24HAohqBMoas1/view?usp=drive_link"
                    className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors flex items-center gap-2 mb-2 w-fit"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm">Survey of Unsupervised Learning Methods</span>
                  </a>
                  <p className="text-gray-600 text-sm ml-2">Survey of recent novel unsupervised learning techniques with publicly available Python implementations and evaluates their generalizability to tabular datasets.</p>
                </div>
                
                {/* Project Item 7 */}
                <div>
                  <a
                    href="https://drive.google.com/file/d/15NZvdbhMbDuHxybTfdCfasQ_jiEyY2F3/view?usp=drive_link"
                    className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors flex items-center gap-2 mb-2 w-fit"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm">Gas Power Turbine Analysis</span>
                  </a>
                  <p className="text-gray-600 text-sm ml-2">Gas Power Turbine Designs - Parametric Analysis</p>
                </div>
                
                {/* Project Item 8 */}
                <div>
                  <a
                    href="https://drive.google.com/file/d/1Cb2oMUG1d7tMDwf3C7AJpGmTgxsviroE/view?usp=drive_link"
                    className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors flex items-center gap-2 mb-2 w-fit"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm">Aircraft Turbine Analysis</span>
                  </a>
                  <p className="text-gray-600 text-sm ml-2">Aircraft Turbine Engine Designs - Parametric Analysis</p>
                </div> 
              </div>
            </div>

            {/* Skills & Interests Section */}
            <div className="bg-white rounded-lg shadow-sm p-6"> {/* Removed mb-2 as it's the last item in the column */}
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Code className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Skills & Interests</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Reduced to 2 columns for a narrower space */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Software Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'R', 'C++', 'TensorFlow', 'Pytorch', 'Linux', 'SolidWorks', 'Fusion', 'MATLAB', 'ANSYS CFD', 'MS Office', 'VBA'].map(skill => (
                      <span key={skill} className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-full">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Professional Interests:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['AI Integration', 'Supersonic Propulsion', 'Controls & Embedded Systems', 'RF Systems'].map(interest => (
                      <span key={interest} className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-full">{interest}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Personal Interests:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Building Cars', '3D Printing', 'Rocketry', 'Linux Projects', 'Soccer', 'Tennis', 'Lifting', 'Snowboarding'].map(interest => (
                      <span key={interest} className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-full">{interest}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Organizations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['National Science Foundation Researcher', 'Formula SAE', 'Technology & Aerospace Club', 'SHPE'].map(org => (
                      <span key={org} className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-full">{org}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div> {/* End Column 3 container */}

        </div> {/* End Main Grid */}
      </div> {/* End Main Content wrapper */}
    </div>
  );
}

export default App;