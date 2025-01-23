import React, { useState, useEffect } from 'react';
    import { useLocation, useNavigate } from 'react-router-dom';

    function Favorites() {
      const location = useLocation();
      const queryParams = new URLSearchParams(location.search);
      const subjectName = queryParams.get('subject');
      const [favorites, setFavorites] = useState(() => {
        const storedFavorites = localStorage.getItem('favoriteSubjects');
        return storedFavorites ? JSON.parse(storedFavorites) : [];
      });
      const navigate = useNavigate();
      const [subjectDetails, setSubjectDetails] = useState(null);
      const [skillDetails, setSkillDetails] = useState(null);

      useEffect(() => {
        localStorage.setItem('favoriteSubjects', JSON.stringify(favorites));
      }, [favorites]);

      useEffect(() => {
        if (subjectName) {
          const studyMaterials = [
            {
              year: 1,
              semesters: [
                {
                  sem: 1,
                  subjects: [
                    { name: 'Maths', pdfLink: '/resources/y1s1/maths.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'Physics', pdfLink: '/resources/y1s1/physics.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'Computer Science', pdfLink: '/resources/y1s1/cs.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'Engineering Drawing', pdfLink: '/resources/y1s1/ed.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'Mechanics', pdfLink: '/resources/y1s1/mechanics.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                  ],
                },
                {
                  sem: 2,
                  subjects: [
                    { name: 'Chemistry', pdfLink: '/resources/y1s2/chemistry.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'Biology', pdfLink: '/resources/y1s2/biology.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'Electrical', pdfLink: '/resources/y1s2/electrical.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'Environmental Science', pdfLink: '/resources/y1s2/es.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'Engineering Mechanics', pdfLink: '/resources/y1s2/em.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                  ],
                },
              ],
            },
            {
              year: 2,
              semesters: [
                {
                  sem: 1,
                  subjects: [
                    { name: 'Data Structures', pdfLink: '/resources/y2s1/ds.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'Algorithm', pdfLink: '/resources/y2s1/algo.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'Electronics', pdfLink: '/resources/y2s1/electronics.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'Digital Logic', pdfLink: '/resources/y2s1/dl.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'Signals and Systems', pdfLink: '/resources/y2s1/ss.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                  ],
                },
                {
                  sem: 2,
                  subjects: [
                    { name: 'Database', pdfLink: '/resources/y2s2/db.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'Operating Systems', pdfLink: '/resources/y2s2/os.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'Networking', pdfLink: '/resources/y2s2/networking.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'Software Engineering', pdfLink: '/resources/y2s2/se.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'Mathematics II', pdfLink: '/resources/y2s2/maths2.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                  ],
                },
              ],
            },
            {
              year: 3,
              semesters: [
                {
                  sem: 1,
                  subjects: [
                    { name: 'Web Development', pdfLink: '/resources/y3s1/webdev.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'AI', pdfLink: '/resources/y3s1/ai.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'Software Engineering', pdfLink: '/resources/y3s1/se.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'Computer Networks', pdfLink: '/resources/y3s1/cn.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'Database Systems', pdfLink: '/resources/y3s1/dbs.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                  ],
                },
                {
                  sem: 2,
                  subjects: [
                    { name: 'Machine Learning', pdfLink: '/resources/y3s2/ml.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'Cloud Computing', pdfLink: '/resources/y3s2/cc.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'Security', pdfLink: '/resources/y3s2/security.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'Cryptography', pdfLink: '/resources/y3s2/crypto.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'Mobile Computing', pdfLink: '/resources/y3s2/mc.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                  ],
                },
              ],
            },
            {
              year: 4,
              semesters: [
                {
                  sem: 1,
                  subjects: [
                    { name: 'Advanced Algorithms', pdfLink: '/resources/y4s1/aa.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'Big Data', pdfLink: '/resources/y4s1/bd.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'DevOps', pdfLink: '/resources/y4s1/devops.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'Blockchain', pdfLink: '/resources/y4s1/blockchain.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'Artificial Intelligence', pdfLink: '/resources/y4s1/ai.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                  ],
                },
                {
                  sem: 2,
                  subjects: [
                    { name: 'Blockchain', pdfLink: '/resources/y4s2/blockchain.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'IoT', pdfLink: '/resources/y4s2/iot.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'Cybersecurity', pdfLink: '/resources/y4s2/cybersecurity.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'Cloud Security', pdfLink: '/resources/y4s2/cloudsecurity.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                    { name: 'Network Security', pdfLink: '/resources/y4s2/networksecurity.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                  ],
                },
              ],
            },
          ];
          let foundSubject = null;
          studyMaterials.forEach(yearData => {
            yearData.semesters.forEach(semester => {
              semester.subjects.forEach(subject => {
                if (subject.name === subjectName) {
                  foundSubject = subject;
                }
              });
            });
          });
          setSubjectDetails(foundSubject);
        } else {
          setSubjectDetails(null);
        }
        
        if (subjectName) {
          const careerData = {
            'software-developer': {
              title: 'Software Developer',
              skills: {
                'Core Programming': ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'TypeScript'],
                'Frontend Development': ['React', 'Angular', 'Vue.js', 'Responsive Design', 'UI/UX Principles', 'State Management (Redux, Context API)', 'Testing (Jest, Cypress)'],
                'Backend Development': ['Node.js', 'Express.js', 'Python (Flask/Django)', 'RESTful APIs', 'GraphQL', 'Authentication & Authorization', 'Serverless Functions'],
                'Databases': ['SQL (PostgreSQL, MySQL)', 'NoSQL (MongoDB, Firebase)', 'Database Design', 'ORM (Sequelize, Prisma)'],
                'Version Control': ['Git', 'GitHub', 'GitLab', 'Branching Strategies'],
                'Testing': ['Unit Testing', 'Integration Testing', 'End-to-End Testing', 'Test-Driven Development (TDD)'],
                'DevOps': ['Docker', 'CI/CD Pipelines', 'Cloud Deployment (AWS, Azure, GCP)'],
                'Problem Solving': ['Algorithms', 'Data Structures', 'Design Patterns'],
              },
              youtube: [
                { title: 'freeCodeCamp.org', url: 'https://www.youtube.com/c/freecodecamp' },
                { title: 'The Net Ninja', url: 'https://www.youtube.com/c/TheNetNinja' },
                { title: 'Traversy Media', url: 'https://www.youtube.com/c/TraversyMedia' },
              ],
            },
            'data-scientist': {
              title: 'Data Scientist',
              skills: {
                'Programming': ['Python', 'R', 'SQL'],
                'Machine Learning': ['Supervised Learning', 'Unsupervised Learning', 'Deep Learning', 'Model Evaluation', 'Model Selection'],
                'Statistics': ['Hypothesis Testing', 'Regression Analysis', 'Probability', 'Statistical Modeling', 'Experimental Design'],
                'Data Analysis': ['Data Cleaning', 'Data Wrangling', 'Feature Engineering', 'Exploratory Data Analysis (EDA)'],
                'Data Visualization': ['Matplotlib', 'Seaborn', 'Plotly', 'Tableau', 'Power BI'],
                'Databases': ['SQL', 'NoSQL', 'Data Warehousing', 'ETL Processes'],
                'Big Data': ['Hadoop', 'Spark', 'Data Lakes'],
              },
              youtube: [
                { title: 'Sentdex', url: 'https://www.youtube.com/c/sentdex' },
                { title: 'StatQuest with Josh Starmer', url: 'https://www.youtube.com/c/joshstarmer' },
                { title: '3Blue1Brown', url: 'https://www.youtube.com/c/3blue1brown' },
              ],
            },
            'cybersecurity-analyst': {
              title: 'Cybersecurity Analyst',
              skills: {
                'Network Security': ['Firewalls', 'Intrusion Detection Systems', 'VPNs', 'Network Protocols'],
                'Ethical Hacking': ['Penetration Testing', 'Vulnerability Scanning', 'Exploitation'],
                'Cryptography': ['Encryption', 'Hashing', 'Digital Signatures', 'PKI'],
                'Security Auditing': ['Risk Assessment', 'Compliance', 'Security Policies'],
                'Incident Response': ['Malware Analysis', 'Forensics', 'Incident Handling'],
                'Security Tools': ['Nmap', 'Wireshark', 'Metasploit'],
                'Operating Systems': ['Linux', 'Windows'],
              },
              youtube: [
                { title: 'The Cyber Mentor', url: 'https://www.youtube.com/c/TheCyberMentor' },
                { title: 'John Hammond', url: 'https://www.youtube.com/c/JohnHammond010' },
                { title: 'LiveOverflow', url: 'https://www.youtube.com/c/LiveOverflow' },
              ],
            },
            'ui-ux-designer': {
              title: 'UI/UX Designer',
              skills: {
                'Design Tools': ['Figma', 'Adobe XD', 'Sketch', 'Adobe Photoshop', 'Illustrator'],
                'User Research': ['User Interviews', 'Surveys', 'Usability Testing', 'User Personas'],
                'Wireframing': ['Low-Fidelity Wireframes', 'High-Fidelity Wireframes', 'User Flows'],
                'Prototyping': ['Interactive Prototypes', 'Clickable Prototypes', 'Microinteractions'],
                'Usability Testing': ['A/B Testing', 'User Feedback Analysis', 'Heuristic Evaluation'],
                'Accessibility': ['WCAG Guidelines', 'Inclusive Design'],
                'Design Systems': ['Component Libraries', 'Style Guides'],
              },
              youtube: [
                { title: 'Flux', url: 'https://www.youtube.com/c/FluxWithRanSegall' },
                { title: 'Jesse Showalter', url: 'https://www.youtube.com/c/JesseShowalter' },
                { title: 'DesignCourse', url: 'https://www.youtube.com/c/DesignCourse' },
              ],
            },
            'ai-ml-engineer': {
              title: 'AI/ML Engineer',
              skills: {
                'Programming': ['Python', 'R'],
                'Machine Learning': ['Supervised Learning', 'Unsupervised Learning', 'Deep Learning', 'Model Evaluation', 'Model Selection'],
                'Data Analysis': ['Data Cleaning', 'Data Wrangling', 'Feature Engineering', 'Exploratory Data Analysis (EDA)'],
                'Deep Learning': ['TensorFlow', 'Keras', 'PyTorch'],
                'Natural Language Processing': ['NLTK', 'SpaCy', 'Transformers'],
                'Computer Vision': ['OpenCV', 'Image Processing', 'Object Detection'],
              },
              youtube: [
                { title: 'DeepLearningAI', url: 'https://www.youtube.com/c/Deeplearningai' },
                { title: 'Arxiv Insights', url: 'https://www.youtube.com/c/ArxivInsights' },
                { title: 'Two Minute Papers', url: 'https://www.youtube.com/c/TwoMinutePapers' },
              ],
            },
            'devops-engineer': {
              title: 'DevOps Engineer',
              skills: {
                'Infrastructure as Code': ['Terraform', 'CloudFormation', 'Ansible'],
                'Containerization': ['Docker', 'Kubernetes', 'Container Orchestration'],
                'CI/CD': ['Jenkins', 'GitLab CI', 'GitHub Actions'],
                'Monitoring': ['Prometheus', 'Grafana', 'ELK Stack'],
                'Scripting': ['Bash', 'Python'],
                'Version Control': ['Git', 'GitHub', 'GitLab'],
              },
              youtube: [
                { title: 'TechWorld with Nana', url: 'https://www.youtube.com/c/TechWorldwithNana' },
                { title: 'DevOps Toolkit', url: 'https://www.youtube.com/c/DevOpsToolkit' },
                { title: 'Kunal Kushwaha', url: 'https://www.youtube.com/c/KunalKushwaha' },
              ],
            },
            'mobile-app-developer': {
              title: 'Mobile App Developer',
              skills: {
                'Cross-Platform Development': ['React Native', 'Flutter', 'Xamarin'],
                'Native iOS Development': ['Swift', 'Objective-C', 'Xcode'],
                'Native Android Development': ['Kotlin', 'Java', 'Android Studio'],
                'UI/UX Design': ['Mobile UI/UX Principles', 'Responsive Design'],
                'Testing': ['Unit Testing', 'UI Testing', 'Integration Testing'],
                'API Integration': ['RESTful APIs', 'GraphQL'],
                'State Management': ['Redux', 'Context API', 'MobX'],
              },
              youtube: [
                { title: 'The Flutter Way', url: 'https://www.youtube.com/c/TheFlutterWay' },
                { title: 'React Native Radio', url: 'https://www.youtube.com/c/ReactNativeradio' },
                { title: 'Android Developers', url: 'https://www.youtube.com/user/AndroidDevelopers' },
              ],
            },
            'blockchain-developer': {
              title: 'Blockchain Developer',
              skills: {
                'Smart Contracts': ['Solidity', 'Vyper', 'Web3.js'],
                'Blockchain Platforms': ['Ethereum', 'Hyperledger Fabric', 'Binance Smart Chain'],
                'Cryptography': ['Hashing', 'Encryption', 'Digital Signatures'],
                'Decentralized Applications (DApps)': ['Web3.js', 'Ethers.js', 'Truffle'],
                'Consensus Mechanisms': ['Proof of Work', 'Proof of Stake', 'Delegated Proof of Stake'],
                'Tokenomics': ['Token Design', 'Token Distribution', 'Token Utility'],
                'Security': ['Smart Contract Security', 'Vulnerability Analysis'],
              },
              youtube: [
                { title: 'EatTheBlocks', url: 'https://www.youtube.com/c/EatTheBlocks' },
                { title: 'Dapp University', url: 'https://www.youtube.com/c/DappUniversity' },
                { title: 'Patrick Collins', url: 'https://www.youtube.com/c/patrickcollins' },
              ],
            },
            'embedded-systems-engineer': {
              title: 'Embedded Systems Engineer',
              skills: {
                'Programming': ['C', 'C++', 'Assembly Language'],
                'Microcontrollers': ['ARM', 'AVR', 'PIC'],
                'Real-Time Operating Systems (RTOS)': ['FreeRTOS', 'uC/OS', 'VxWorks'],
                'Hardware Interfacing': ['SPI', 'I2C', 'UART', 'GPIO'],
                'Digital Signal Processing (DSP)': ['Filtering', 'FFT', 'Signal Analysis'],
                'PCB Design': ['Schematic Capture', 'Layout Design', 'Prototyping'],
                'Testing': ['Unit Testing', 'Integration Testing', 'Hardware Debugging'],
              },
              youtube: [
                { title: 'Digi-Key Electronics', url: 'https://www.youtube.com/c/digikey' },
                { title: 'Shawn Hymel', url: 'https://www.youtube.com/c/ShawnHymel' },
                { title: 'GreatScott!', url: 'https://www.youtube.com/c/GreatScott' },
              ],
            },
            'technical-writer': {
              title: 'Technical Writer',
              skills: {
                'Technical Writing': ['Documentation', 'User Manuals', 'API Documentation'],
                'Communication': ['Clear Writing', 'Concise Language', 'Audience Analysis'],
                'Content Creation': ['Content Planning', 'Content Strategy', 'Content Editing'],
                'Tools': ['Markdown', 'LaTeX', 'Confluence', 'Jira'],
                'Information Architecture': ['Content Organization', 'Navigation Design'],
                'Collaboration': ['Teamwork', 'Feedback Management'],
                'Version Control': ['Git', 'GitHub', 'GitLab'],
              },
              youtube: [
                { title: 'Tom Johnson', url: 'https://www.youtube.com/c/TomJohnsonTechnicalCommunication' },
                { title: 'I’d Rather Be Writing', url: 'https://www.youtube.com/c/idratherbewriting' },
                { title: 'ClickHelp', url: 'https://www.youtube.com/c/ClickHelp' },
              ],
            },
            'backend-developer': {
              title: 'Backend Developer',
               skills: {
                'Server-Side Languages': ['Node.js', 'Python', 'Java', 'Go', 'C#'],
                'Frameworks': ['Express.js', 'Django', 'Spring Boot', 'ASP.NET Core', 'Gin'],
                'Databases': ['SQL (PostgreSQL, MySQL)', 'NoSQL (MongoDB, Cassandra)', 'Database Design', 'ORM (Sequelize, Prisma)'],
                'API Design': ['RESTful APIs', 'GraphQL', 'API Documentation'],
                'Authentication & Authorization': ['OAuth 2.0', 'JWT', 'Session Management'],
                'Server Management': ['Linux', 'Docker', 'Kubernetes'],
                'Testing': ['Unit Testing', 'Integration Testing', 'API Testing'],
                'Cloud Services': ['AWS', 'Azure', 'GCP'],
              },
              youtube: [
                { title: 'Fireship', url: 'https://www.youtube.com/c/Fireship' },
                { title: 'Code with Ania Kubów', url: 'https://www.youtube.com/c/AniaKubow' },
                { title: 'Web Dev Simplified', url: 'https://www.youtube.com/c/WebDevSimplified' },
              ],
            },
             'game-developer': {
              title: 'Game Developer',
              skills: {
                'Game Engines': ['Unity', 'Unreal Engine', 'Godot'],
                'Programming Languages': ['C#', 'C++', 'GDScript'],
                'Game Design': ['Level Design', 'Game Mechanics', 'Storytelling'],
                'Graphics': ['3D Modeling', 'Texturing', 'Animation'],
                'Physics': ['Collision Detection', 'Rigid Body Dynamics'],
                'Audio': ['Sound Design', 'Music Composition'],
                'AI': ['Pathfinding', 'Behavior Trees'],
                'Networking': ['Multiplayer Game Development', 'Server-Side Logic'],
              },
              youtube: [
                { title: 'Brackeys', url: 'https://www.youtube.com/c/Brackeys' },
                { title: 'Sebastian Lague', url: 'https://www.youtube.com/c/SebastianLague' },
                { title: 'Code Monkey', url: 'https://www.youtube.com/c/CodeMonkeyUnity' },
              ],
            },
            'frontend-developer': {
              title: 'Frontend Developer',
              skills: {
                'Core Languages': ['HTML5', 'CSS3', 'JavaScript (ES6+)'],
                'Frameworks/Libraries': ['React', 'Angular', 'Vue.js', 'Svelte'],
                'State Management': ['Redux', 'Context API', 'Vuex', 'Zustand'],
                'UI/UX': ['Responsive Design', 'Accessibility', 'UI Libraries (Material UI, Tailwind CSS)'],
                'Testing': ['Unit Testing', 'Integration Testing', 'End-to-End Testing'],
                'Build Tools': ['Webpack', 'Parcel', 'Vite'],
                'Version Control': ['Git', 'GitHub', 'GitLab'],
                'API Integration': ['RESTful APIs', 'GraphQL'],
              },
              youtube: [
                { title: 'Kevin Powell', url: 'https://www.youtube.com/c/KevinPowell' },
                { title: 'Ben Awad', url: 'https://www.youtube.com/c/BenAwad97' },
                { title: 'codedamn', url: 'https://www.youtube.com/c/codedamn' },
              ],
            },
          };
          let foundSkill = null;
          for (const career in careerData) {
            if (careerData.hasOwnProperty(career)) {
              for (const skill in careerData[career].skills) {
                if (careerData[career].skills.hasOwnProperty(skill)) {
                  if (Array.isArray(careerData[career].skills[skill])) {
                    if (careerData[career].skills[skill].includes(subjectName)) {
                      foundSkill = {
                        youtubePlaylist: careerData[career].youtube,
                        name: subjectName
                      };
                      break;
                    }
                  } else if (skill === subjectName) {
                    foundSkill = {
                      youtubePlaylist: careerData[career].youtube,
                      name: subjectName
                    };
                    break;
                  }
                }
              }
              if (foundSkill) break;
            }
          }
          setSkillDetails(foundSkill);
        } else {
          setSkillDetails(null);
        }
      }, [subjectName]);

      return (
        <div className="container mx-auto py-12 px-4">
          {subjectName && (subjectDetails || skillDetails) ? (
            <>
              <h1 className="text-4xl font-bold text-center mb-8">{subjectName}</h1>
              <div className="flex justify-center space-x-4">
                {(subjectDetails?.pdfLink) && (
                  <a href={subjectDetails?.pdfLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200">
                    View PDF
                  </a>
                )}
                {(subjectDetails?.youtubePlaylist || skillDetails?.youtubePlaylist) && (
                  <a href={subjectDetails?.youtubePlaylist || skillDetails?.youtubePlaylist} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200">
                    View YouTube Playlist
                  </a>
                )}
              </div>
            </>
          ) : (
            <>
              <h1 className="text-4xl font-bold text-center mb-8">Favorite Subjects</h1>
              {favorites.length > 0 ? (
                <ul className="space-y-4">
                  {favorites.map((fav, index) => (
                    <li key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-blue-500/20 transition-all duration-300">
                      <button onClick={() => navigate(`/favorites?subject=${fav}`)} className="text-gray-300">{fav}</button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400 text-center">
                  You have not marked any subjects as favorites yet.
                </p>
              )}
            </>
          )}
        </div>
      );
    }

    export default Favorites;
