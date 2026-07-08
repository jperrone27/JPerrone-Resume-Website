import React, { useState } from 'react';
import profilephoto from './assets/profilephoto.jpg';
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  HardDrive,
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
                Data Engineer | Ph.D. Candidate
              </h2>
              <p className="text-gray-600 text-lg mb-3 max-w-4xl">
                Currently @ NextEra Energy (Project Atlas) & Florida Atlantic University (CA-AI)
              </p>

              {/* Contact + Location */}
              <div className="flex flex-col gap-2">
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

      {/* Main Content Sections */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="space-y-6">
          
          {/* Professional Summary Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Professional Summary</h3>
            </div>
            <p className="text-gray-600 text-lg">
              Software engineer developing enterprise data pipelines, AI-enabled software, and engineering systems. Currently serving on NextEra Energy’s Project Atlas, a strategic modernization initiative transforming data architecture and governance to enable reliable generative AI analytics for America’s largest energy asset portfolio while pursuing a Ph.D. in Computer Science focused on distributed machine learning for Radiofrequency signal processing.
            </p>
          </div>

          {/* Technical Skills Section - Full Width */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Code className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Technical Skills</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Programming & Tools:</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'C/C++', 'CUDA', 'OpenMP', 'MPI', 'AVX2', 'R', 'SQL', 'ReactJS', 'Agentic Development'].map(
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
                  {['Databricks', 'PostgreSQL', 'Nvidia HPC', 'Kubernetes', 'Arduino', 'Simulink', 'RedHawk Linux', 'Unix', 'Git', 'Docker'].map(
                    (item) => (
                      <span key={item} className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-full">
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">AI/ML:</h4>
                <div className="flex flex-wrap gap-2">
                  {['PyTorch', 'TensorFlow', 'Neural Networks', 'Transformers', 'Multimodal LLMs', 'Agentic Systems', 'Classical ML'].map(
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

          {/* Main Grid Section - 2 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Column: Experience */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Building className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Experience</h3>
              </div>

              <div className="space-y-6">
                
                {/* NextEra Energy */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>May 2026 – Present</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Data Engineer (Contract)</h4>
                  <h5 className="text-blue-600 font-medium mb-2">NextEra Energy, PGD</h5>
                  <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
                    <li>Build complex financial forecasting and reporting models including upstream data pipelines in Databricks enabling near-real-time analytics of the world’s largest wind turbine fleet and avoiding +1000 hours of manual work.</li>
                    <li>Champion and prototype enterprise use cases of GenAI to executive management including Databricks Genie, Google Gemini Suite, and custom LLM powered tools built with agentic development.</li>
                    <li>Architect and implement cloud data migration strategies for Project Atlas, translating legacy, spreadsheet-driven mathematical models (repair cost projections, asset failure counts) into structured Databricks Medallion products.</li>
                    <li>Lead a team of consultants in executing source-to-target mapping, metadata standardization, and Databricks Unity Catalog governance workflows, new pipeline development, and process modernization.</li>
                    <li>Translate complex cross-functional business requirements (Finance, FP&A, Reliability Engineering) into scalable technical specifications for data pipeline architecture and downstream cloud analytics development.</li>
                    <li>Modernize operational analytics pipelines by replacing fragile, human-in-the-loop business workflows with governed, reusable cloud data products supporting fleet-wide major component and expenditure forecasting.</li>
                    <li>Drive new hierarchy development and implementation for IBM Maximo and SAP, leveraging deep systems engineering and business knowledge of energy facility design, construction, operation, and financials.</li>
                    <li>Develop custom internal tools including VLM powered construction drawing review and data extraction software for automated asset data collection and data quality verification to avoid 200 hours of manual review per site.</li>
                    <li>Translate field-site technical constraints, including low-connectivity edge environments, technician data-collection blockers, and photo-capture gaps, into software requirements for centralized asset intelligence platforms.</li>
                    <li>Design predictive workflows for wind fleet spare-parts and BOM creation, analyzing Maximo job planning and SAP transaction data for equipment-level supply chain intelligence.</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Databricks</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">GenAI</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Data Architecture</span>
                  </div>
                </div>

                {/* GRA */}
                <div className="border-l-4 border-gray-300 pl-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>Aug 2025 – Present</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">AI/ML Researcher, Ph.D. Candidate</h4>
                  <h5 className="text-blue-600 font-medium mb-2">Florida Atlantic University</h5>
                  <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
                    <li>Researched RF direction-of-arrival (DOA) estimation algorithms using 16-element antenna (ULA) signal samples.</li>
                    <li>Developed Physics-Informed Neural Network (PINN), DNN, and hybrid models in PyTorch for DOA estimation.</li>
                    <li>Presented research seminar comparing neural network based and classical DOA estimators (e.g. Maximum Likelihood grid search algorithms) under varying SNR conditions for single and multi-snapshot cases.</li>
                    <li>Explored decentralized and federated learning frameworks for collaborative edge-based DOA estimation, optimizing model accuracy under communication and compute constraints.</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">PyTorch</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Signal Processing</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Distributed Compute</span>
                  </div>
                </div>

                {/* DEPCOM */}
                <div className="border-l-4 border-gray-300 pl-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>Aug 2020 – Aug 2024</span>
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900">Senior Systems Engineer</h4>
                  <h5 className="text-blue-600 font-medium mb-2">Koch Engineered Solutions, DEPCOM Power</h5>

                  <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1 mt-3">
                    <li>Acted as systems engineering team lead for Energy Storage Systems (ESS), managing multi-disciplinary teams across internal engineering, subcontractors, vendors, and international suppliers.</li>
                    <li>Served as technical authority in contract negotiations (requirements definition, architecture, integration, verification, and operational handoff) for 2,000+ MW of utility-scale solar and battery energy storage systems.</li>
                    <li>Led system architecture design and trade studies for hybrid solar + storage platforms across multiple geographic regions and grid interconnection standards, optimizing performance, reliability, and cost.</li>
                    <li>Engineered and maintained proprietary Python-based software for battery system simulation and optimization, including numerical modeling, performance evaluation, and cost optimization.</li>
                    <li>Independently developed a Python-based software tool that automates applications engineering and electrical system sizing for battery energy storage facilities, reducing engineering labor by 500+ hours/year.</li>
                    <li>Replaced legacy Excel/VBA workflows with Python-based software tools, improving processing speed by 60% and enabling solar plant systems engineering team to generate 200+ optimized system designs annually.</li>
                    <li>Routinely conducted parametric sensitivity analyses across hundreds of system configurations to improve project internal rate of return (IRR) by up to 10+ basis points compared to customer RFP targets.</li>
                    <li>Engineered environmental and operational modeling tools to predict shading, soiling, and degradation impacts using multi-decade NOAA datasets to forecast downtime and maintenance.</li>
                    <li>Redesigned and optimized a Python program that automates electrical calculations by iteratively processing manufacturer configuration files, modeling degradation-driven changes in current and voltage over system lifetime.</li>
                  </ul>

                  <p className="text-gray-600 text-sm font-semibold mt-3">Key Technical Achievements:</p>
                  <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
                    <li>Secured a $500M multi-project portfolio by leading systems engineering analysis and presenting validated performance, reliability, and financial models for U.S. Department of Energy funded infrastructure programs.</li>
                    <li>Served as lead systems engineering liaison between the U.S. Department of Energy, Puerto Rico Electric Power Authority, Engineer of Record, transmission operators, and international equipment manufacturers.</li>
                    <li>Developed, tested, validated, and deployed a modular Python-based energy system design platform used to optimally configure 30+ subsystems for performance, power grid stability, and lifecycle economics.</li>
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Python</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">System Architecture</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Optimization</span>
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
                      <div className="border-l-4 border-gray-300 pl-4">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                          <Calendar className="w-4 h-4" />
                          <span>May 2019 - Aug 2019 · 4 mos</span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">Technical Intern, Electric Operations Engineering</h4>
                        <h5 className="text-blue-600 font-medium mb-2">PSEG, Somerset, New Jersey</h5>
                        <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
                          <li>Tracked the completion rate and budget of some of the largest new infrastructure projects in 2019.</li>
                          <li>Evaluated and improved the street light groups&apos; ability to satisfy customer complaints & make repairs.</li>
                          <li>Participated in field checks of storm damage and voltage issues, allowing me to learn specific problems with electric service and distribution and how to address them.</li>
                        </ul>
                      </div>

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
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Education & Projects */}
            <div className="space-y-8">
              
              {/* Education Section */}
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
                    <h4 className="text-lg font-semibold text-gray-900">Ph.D. Candidate, Computer Science (GPA: 3.9)</h4>
                    <h5 className="text-green-600 font-medium mb-2">Florida Atlantic University</h5>

                    <p className="text-gray-600 text-sm mb-2">
                      Research Group: Center for Connected Autonomy & Artificial Intelligence (CA-AI)
                      <br /><br />
                      Technical Focus: Smart Antennas, Parallel Computing, Computer Networks, Digital Twins, Autonomous Robotics
                      <br /><br />
                      Dissertation Topic: Distributed machine learning for Radiofrequency signal processing versus classical methods
                    </p>

                    <p className="text-gray-600 text-sm font-semibold mt-3">Selected Research:</p>
                    <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
                      <li>HQC on GPU – developed & evaluated Nvidia CUDA versus AVX2 CPU implementation of bit-wise addition and multiplication of 17,000 bit integer critical to HQC, a computationally intense post-quantum cryptography algorithm.</li>
                      <li>Autonomous Wall-Tracking Robotic System – Developed ROS2-based perception & control stack integrating LiDAR and IR sensing for sensor fusion and closed-loop wall tracking, enabling real-time obstacle avoidance.</li>
                    </ul>
                  </div>

                  {/* MS */}
                  <div className="border-l-4 border-gray-300 pl-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>Aug 2024 – Aug 2025</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">M.S. Artificial Intelligence</h4>
                    <h5 className="text-green-600 font-medium mb-2">Florida Atlantic University</h5>
                    <p className="text-gray-600 text-sm mb-2">
                      Scholarship position: National Science Foundation (NSF) sponsored Research Assistant
                      <br /><br />
                      Technical Focus: Deep Learning, Generative AI, Reinforcement Learning, Social Networks & Big Data, Data Mining
                    </p>

                    <p className="text-gray-600 text-sm font-semibold mt-3">Selected Research:</p>
                    <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
                      <li>Deep Learning for Toxic Plant Classification – Led development and benchmarking of VGG-16, ResNet, and InceptionNet Convolutional Neural Network (CNN) models for toxic plant classification from images. Achieved 85% accuracy and 80% faster runtime using TensorFlow with CUDA acceleration on NVIDIA GPU.</li>
                      <li>EfficientNet (CNN) vs Vision Transformer (ViT) – trained & compared for boat classification from spectrogram data; mitigated class imbalance using data augmentation with Variational Autoencoder & Diffusion Models.</li>
                      <li>Mister-FAU, GenAI Powered Discord Bot – Developed and deployed a custom Generative-AI powered Discord bot with a Python backend connected to a hosted Mistral-7B LLM running on a personal remote server.</li>
                    </ul>
                  </div>

                  {/* BS */}
                  <div className="border-l-4 border-gray-300 pl-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>Sep 2017 – May 2020</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">B.S. Mechanical Engineering (Cum Laude)</h4>
                    <h5 className="text-green-600 font-medium mb-2">Rutgers University</h5>
                    <p className="text-gray-600 text-sm mb-2">
                      Achievements: Completed Degree in 3 years (6 semesters), Engineering Honors Academy, Dean’s List
                    </p>
                  </div>
                </div>
              </div>

              {/* Software Projects Section */}
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
                      <span className="text-sm">Deep Learning for Toxic Plant Classification</span>
                    </a>
                    <a
                      href="https://github.com/jperrone27/cnn-toxic-plant-classification"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors flex items-center gap-2 mb-2 w-fit"
                    >
                      <Github className="w-5 h-5" />
                      <span className="text-sm">GitHub: CNN Plant Classification</span>
                    </a>
                    <p className="text-gray-600 text-sm ml-2">
                      Led development and benchmarking of VGG-16, ResNet, and InceptionNet CNN models for toxic plant image classification. Achieved 85% accuracy and 80% faster runtime using TensorFlow with CUDA acceleration on NVIDIA GPU.
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
                      Developed and deployed a custom Generative-AI powered Discord bot with a Python backend connected to a hosted Mistral-7B LLM running on a personal remote server.
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
                      Developed ROS2-based perception & control stack integrating LiDAR and IR sensing for sensor fusion and closed-loop wall tracking, enabling real-time obstacle avoidance.
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
          </div> {/* End 2-col grid */}
        </div>
      </div>
    </div>
  );
}

export default App;