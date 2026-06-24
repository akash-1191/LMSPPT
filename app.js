/* ==========================================================================
   GyrusLMS Presentation App - Data & Interaction Logic
   ========================================================================== */

// Slide Data definition
const slides = [
    {
        title: "GyrusLMS (Learning Management System)",
        badge: "Title Slide",
        type: "title",
        subtitle: "A Web-Based Platform for Centralized Training, Standard E-Learning (SCORM), and AI-Assisted Learning Support",
        info: [
            { label: "Submitted By", value: "Maurya Akash Radheshyam", subvalue: "Enrollment: R24110018000710021" },
            { label: "Internal Project Guide", value: "DR. Dhaval Joshi", subvalue: "Department of I.C.T., VNSGU" }
        ],
        company: {
            name: "Developed at Shree Krupa Systems Pvt. Ltd., Surat",
            logo: "extracted_media/Company_Logo.png"
        },
        notes: "Good morning/afternoon respected examiners, guide, and teachers. Today, I am Maurya Akash Radheshyam, going to present my M.Sc. (I.C.T.) 4th-semester final project titled 'GyrusLMS'. This project was developed during my internship at Shree Krupa Systems Pvt. Ltd. GyrusLMS is a modern Learning Management System designed to streamline training management, support SCORM standards, and incorporate an AI assistant for learners."
    },
    {
        title: "Project Overview & Objectives",
        badge: "Introduction",
        type: "bullets",
        bullets: [
            "Centralized Training Management: Provides a unified environment to host training content and manage learners across organizations and departments.",
            "Standard E-Learning Delivery: Natively supports SCORM-compliant courses, tracking student execution URLs, times, and final scores.",
            "Flexible Course Assignment: Admins can assign training modules in 3 distinct ways: by Organization, by Job Role, or Directly to specific Learners.",
            "Real-Time Monitoring: Offers administrators immediate tracking of learner enrollment status, test attempts, and progress reports.",
            "AI-Powered Student Support: Integrates Gemini AI API to provide 24/7 instant chat assistance on training materials.",
            "Secure Access Control: Employs JSON Web Tokens (JWT) and Role-Based Access Control (RBAC) to segment admin and learner activities."
        ],
        image: "extracted_media/Company_Logo.png", // Use company logo as a placeholder/visual
        caption: "GyrusLMS Core Project Pillars",
        notes: "Let me introduce the core objectives of GyrusLMS. The primary goal is to replace paper-based or disjointed learning workflows with a centralized web system. It serves two main roles: Administrators and Learners. Key highlights include the support for standard SCORM courses, which are package zip files that run interactively in browsers, and an AI Chatbot powered by Google Gemini API to answer learners' immediate queries about their training materials."
    },
    {
        title: "System Scope & User Roles",
        badge: "Proposed System",
        type: "bullets",
        bullets: [
            "Admin Role - Core Capabilities:",
            " - Manage Users: Define corporate departments, job profiles, and employee accounts.",
            " - Course Management: Upload document trainings, external course links, and SCORM packages.",
            " - Learning Paths: Link courses in sequence to form a step-by-step guided training curriculum.",
            " - Support & Analytics: Review student evaluation feedback, answer help tickets, and monitor AI chatbot conversation logs.",
            "Learner Role - Core Capabilities:",
            " - Interactive Training: Access assigned trainings, read documents, and play SCORM packages.",
            " - Assessment: Attempt quizzes/exams with custom timer limits and view results.",
            " - AI Chatbot & Helpdesk: Chat with AI for learning guidance, and raise support tickets for bugs."
        ],
        notes: "GyrusLMS establishes distinct boundaries for its users. The Administrator maintains complete control over company profiles, job designations, user accounts, training materials, learning pathways, assessments, and feedback systems. On the other side, the Learner is the consumer of the training. They have a clean dashboard where they can see their assigned courses, launch SCORM players, view quiz deadlines, submit course evaluations, and interact with the chatbot or support desk."
    },
    {
        title: "Use Case Diagram - Administrative Workflows",
        badge: "UML Diagrams",
        type: "bullets",
        bullets: [
            "Central Actor (Admin): Manages the structural backbone and training deployment rules of the system.",
            "User & Role Management: Extends to managing Organizations, Job Roles, and Employees.",
            "Training and Materials: Covers Document uploading, SCORM packaging, and External link setup.",
            "Guided Curriculums: Admin can group individual trainings into logical step-by-step Learning Paths.",
            "Review and Support: Admin conducts Course Evaluations, views AI Chatbot analytics, and responds to Learner Support Tickets."
        ],
        image: "extracted_media/UseCase_Diagram_1.jpg",
        caption: "Admin Actor Use Case Model",
        notes: "Here, we see the Admin Use Case diagram extracted from the document. The Admin actor interacts with a wide range of use cases. This includes user account creation, system configuration, setting up learning modules (such as SCORM files and document folders), configuring training pathways, establishing evaluations, monitoring AI chatbot logs, and managing support tickets. The Admin represents the operational management layer."
    },
    {
        title: "Use Case Diagram - Learner Workflows",
        badge: "UML Diagrams",
        type: "bullets",
        bullets: [
            "Central Actor (Learner): Focuses on course consumption, feedback, and support interactions.",
            "Access Controls: Authentication (Login via username/password) which generates JWT credentials.",
            "Training Execution: Launching and reading Document training, playing SCORM training packages, and reading External articles.",
            "Self-Assessment: Attempting course assessments, viewing quiz scores, and submitting course feedback forms.",
            "Support Ecosystem: Conversing with the AI chatbot for learning help and raising technical help tickets for admins."
        ],
        image: "extracted_media/UseCase_Diagram_2.jpg",
        caption: "Learner Actor Use Case Model",
        notes: "This slide shows the Learner Use Case diagram. The Learner actor has a more focused set of use cases. After logging in securely (JWT authentication), they can view their personalized learning dashboard, launch document or SCORM training packages, take tests, submit course feedback evaluations, chat with the AI chatbot for instant support, and submit technical support tickets if they run into any issues."
    },
    {
        title: "Class-Responsibility-Collaborator (CRC) Cards",
        badge: "System Analysis",
        type: "crc",
        classes: [
            {
                name: "User (Admin / Learner)",
                collaborators: "Organization, Job, RoleGuard, AuthGuard",
                responsibilities: [
                    "Authenticate user login credentials using JWT.",
                    "Store user profile details (Name, Email, Job Title, Organization).",
                    "Manage and enforce user roles (Admin vs. Learner) during page routing."
                ]
            },
            {
                name: "Training (Doc, SCORM, Path)",
                collaborators: "ScormPackage, Evaluation, Assessment, User",
                responsibilities: [
                    "Store course details (Title, Description, Thumbnail, Type).",
                    "Organize learning contents into chapters or modules.",
                    "Track student enrollment status, start times, and course completion."
                ]
            },
            {
                name: "Assessment (Quizzes / Exams)",
                collaborators: "User, Training, QuestionCategory",
                responsibilities: [
                    "Define test rules (Passing score, timer duration, maximum attempts).",
                    "Group test questions by category and support multiple-choice questions.",
                    "Calculate final scores and log assessment results for user profiles."
                ]
            },
            {
                name: "ChatSession (AI Chatbot)",
                collaborators: "User, ChatBot, User (Admin)",
                responsibilities: [
                    "Process user prompts and query Gemini LLM for answers.",
                    "Store chat conversation history logs for learner review.",
                    "Flag unresolved/failed user queries for administrator monitoring."
                ]
            }
        ],
        notes: "Before creating the database and code structures, CRC cards were defined to specify the core software components. The User class handles authentication and profiles, collaborating with roles and organizations. The Training class controls learning files (like PDF or SCORM packages) and enrollment records. The Assessment class governs tests, grading, and timers. The ChatSession class manages interactions with the Gemini AI chatbot, maintaining history and flagging failed queries."
    },
    {
        title: "Class Diagram - Part 1: Core, Training & AI Chatbot",
        badge: "System Architecture",
        type: "bullets",
        bullets: [
            "User Profile & Authentication: Links the base User entity to Organization and Job titles. Handles password hashes and logins.",
            "Training Structure: Models the base Training entity, detailing parameters for Document (PDFs), External Links, and SCORM files.",
            "Interactive Evaluations: Represents Feedback / Evaluation forms completed by learners after course completion.",
            "AI Chatbot Session: Maps ChatSession, tracking historical prompts and responses linked to a specific Learner's profile."
        ],
        image: "extracted_media/ClassDiagram_Part1.png",
        caption: "Class Diagram - Core Training & User Modules",
        notes: "This class diagram segment covers the core modules. The User class is associated with Organization and Job. The Training class has relationships with the Document and External training specifications. The ChatSession class maintains user prompts and model responses, showing how the system models the AI chatbot database tables and logical objects."
    },
    {
        title: "Class Diagram - Part 2: SCORM, Assessment & Helpdesk",
        badge: "System Architecture",
        type: "bullets",
        bullets: [
            "SCORM Package Tracking: Models SCORM player parameters, including tracking launch URLs, suspend data, and progress percentages.",
            "Learning Paths: Models the sequence mapping tables that connect multiple trainings into step-by-step tracks.",
            "Assessment & Quizzes: Houses rules for tests, linking Assessment to Questions, Choices, and student QuizAttempts.",
            "Support Helpdesk: Represents SupportTicket, capturing description, category, creation date, open/closed status, and messaging history."
        ],
        image: "extracted_media/ClassDiagram_Part2.png",
        caption: "Class Diagram - Standard E-Learning, Assessments & Tickets",
        notes: "The second part of the class diagram outlines the e-learning standards and assessments. The SCORM package entity is modeled to track learner states in interactive SCORM files. The Assessment class defines exam rules, question lists, and answers. The SupportTicket class is modeled to maintain user questions and support messaging logs, demonstrating a clean separation of concerns in the system."
    },
    {
        title: "Activity Diagram - Administrator Workflows",
        badge: "Process Flow",
        type: "bullets",
        bullets: [
            "Administrative Path: Starts with login authentication (JWT verification).",
            "User Setup: Creating client organizations, defining job structures, and enrolling employees.",
            "Training Production: Selecting training type (Doc, Link, SCORM), uploading materials, and defining learning paths.",
            "Targeted Assignments: Distributing trainings by organization, job role, or direct assignment.",
            "System Maintenance: Managing test questions, reading evaluation forms, checking chatbot logs, and resolving help tickets."
        ],
        image: "extracted_media/ActivityDiagram_Admin.png",
        caption: "Admin Activity Flow Chart",
        notes: "The Admin Activity Diagram illustrates the operational process. Once authenticated, the admin can navigate to user management, course setup, assessments, or helpdesk modules. They can upload new documents, play around with course parameters, deploy paths, and view feedback tables. It clearly shows the decisions and options available to admins."
    },
    {
        title: "Activity Diagram - Learner Journey",
        badge: "Process Flow",
        type: "bullets",
        bullets: [
            "Learner Path: Authenticates, landing on the dashboard showing assigned trainings.",
            "Course Execution: Learner selects an active training. System plays the document reader, external browser window, or SCORM player.",
            "Progress Tracking: Completing slide milestones in SCORM triggers completion tracking.",
            "Assessment Phase: Launches quiz timer, displays questions, calculates results, and marks passing or failing.",
            "Support Loop: Learner can submit feedback forms, chat with AI bot, or open tickets."
        ],
        image: "extracted_media/ActivityDiagram_Learner.png",
        caption: "Learner Activity Flow Chart",
        notes: "This activity diagram maps the student's journey. After login, they view assigned courses. They select a training, which the system loads according to its type. They progress through slides, launch quizzes, complete evaluations, or seek help. This diagram represents the core learner UX path from login to course completion."
    },
    {
        title: "Sequence Diagram - System Operations",
        badge: "Interaction Model",
        type: "sequence",
        images: {
            admin: "extracted_media/SequenceDiagram_Admin.png",
            learner: "extracted_media/SequenceDiagram_Learner.png" // Fallback or alternative sequence
        },
        bullets: [
            "Actor to Controller: The user (Admin/Learner) interacts with the Angular Client View, which sends requests to the ASP.NET Controllers.",
            "Controller to Service: Controllers invoke Business Logic Services to perform logic (e.g. check credentials, verify SCORM tracking).",
            "Service to Database: Services query the DB via SQL Entity Framework Core and return result payloads back up the chain.",
            "JWT Authentication Loop: Shows token creation during login and token validation with subsequent API requests."
        ],
        notes: "The Sequence Diagram explains the communication flow between the Angular client, the .NET Core backend controller, the service layers, and the database. It highlights how JWT is passed in the header of each HTTP request, verified by the API, and how SQL queries are executed and returned as JSON objects to update the UI dynamically."
    },
    {
        title: "Database Design - Entity-Relationship Diagram",
        badge: "Database Design",
        type: "bullets",
        bullets: [
            "Central Entities: Users table (representing admins and learners) with BCrypt-hashed credentials.",
            "Organizational Structure: Organization and Job tables establishing foreign key relations with Users.",
            "Course Architecture: Training table holding general course data, associated with DocumentTraining, ScormTraining, and LearningPath mapping tables.",
            "Testing Records: Assessment, Question, Choice, and QuizAttempt tables capturing student test history and timer data.",
            "Communications Log: ChatSession (chat logs) and SupportTicket tables linked to user IDs."
        ],
        image: "extracted_media/ERDiagram.png",
        caption: "Relational Database Schema (ER Diagram)",
        notes: "The ER Diagram illustrates the database design. The Users table is at the center, linked to Organizations and Job Roles. The Training table maps to specific types like SCORM or external links. The Assessments tables link questions and choices, and log user attempts. It forms a clean, normalized relational structure using SQL Server."
    },
    {
        title: "User Interface Showcase",
        badge: "Interface Design",
        type: "gallery",
        images: [
            "extracted_media/UI_Screenshot_1.png",
            "extracted_media/UI_Screenshot_2.png",
            "extracted_media/UI_Screenshot_3.png",
            "extracted_media/UI_Screenshot_4.png"
        ],
        captions: [
            "GyrusLMS Admin Dashboard & Training Overview Screen",
            "Learner Dashboard - Assigned Courses and Progress Tracking",
            "Interactive Assessment & Quiz Taker with Count Down Timer",
            "AI Chatbot Learner Assistant with Gemini-Powered Threading"
        ],
        notes: "This slide showcases the screenshots of the completed GyrusLMS application. We can see the Admin Dashboard with user stats, the Learner Dashboard showing course cards and progress status, the interactive Quiz Player featuring a countdown timer, and the Google Gemini-powered AI Chatbot screen where learners receive instant, contextual help."
    },
    {
        title: "Technology Stack & Development Environment",
        badge: "Environment Specification",
        type: "tech",
        techStack: [
            {
                icon: "logo-angular",
                name: "Angular 21.2.3",
                detail: "Presentation Layer: Dynamic, component-driven SPA interface using RxJS, Router guards (AuthGuard, RoleGuard), and HttpClient for REST APIs."
            },
            {
                icon: "code-working-outline",
                name: "ASP.NET Core Web API",
                detail: "Business Logic: RESTful backend API using C# and Visual Studio 2022. Handles JWT token signing, SCORM URL players, and Gemini integration."
            },
            {
                icon: "server-outline",
                name: "Microsoft SQL Server & EF Core",
                detail: "Data Tier: High-performance relational database managed using SSMS. Access is optimized via Entity Framework Core LINQ queries."
            },
            {
                icon: "hardware-chip-outline",
                name: "Google Gemini API & Swagger",
                detail: "AI & APIs: Generative AI for natural language learner support. Swagger is used for automatic API documentation and testing."
            }
        ],
        notes: "The system is built on a standard three-tier architecture. The client-side uses Angular 21, which provides a fast, component-based user interface. The backend API is powered by .NET Core, ensuring rapid request processing and secure JWT token signing. The data layer uses SQL Server. API testing and documentation are handled through Swagger."
    },
    {
        title: "Conclusion & Future Roadmap",
        badge: "Project Summary",
        type: "bullets",
        bullets: [
            "Successful Implementation: Delivered a fully functional three-tier LMS supporting document and SCORM training packages.",
            "AI Assist Success: Integrated Gemini API to provide reliable, instant contextual feedback to student questions.",
            "Development Quality: Ensured API standards via Swagger and robust testing suites achieving high success rates.",
            "Future Enhancement - Supervisor Role: Add department supervisors to view learner progress and approve training requests.",
            "Future Enhancement - Gamification: Introduce reward badges, points, and digital completion certificates.",
            "Future Enhancement - Mobile App: Wrap Angular project using Cordova/Capacitor for Android and iOS mobile app delivery."
        ],
        notes: "In conclusion, GyrusLMS successfully achieves its goals. We built a three-tier system combining .NET Core and Angular, supported SCORM standards, and integrated Gemini AI. For the future, we plan to add Supervisor/Manager roles, incorporate gamification (like badges and leaderboard rewards), and build a mobile app version using Capacitor to support offline learning on the go. Thank you, and I am open to any questions!"
    }
];

// App State
let currentSlideIndex = 0;
let isPlaying = false;
let autoplayTimer = null;
let autoplayInterval = 2000;
let zoomLevel = 1.0;
let isPanning = false;
let panStart = { x: 0, y: 0 };
let panOffset = { x: 0, y: 0 };
let activeSequenceTab = 'admin'; // 'admin' or 'learner'
let activeGalleryIndex = 0;

// DOM Elements
const sidebar = document.getElementById('sidebar');
const slideList = document.getElementById('slideList');
const slideContainer = document.getElementById('slideContainer');
const currentSlideNum = document.getElementById('currentSlideNum');
const totalSlidesNum = document.getElementById('totalSlidesNum');
const progressBar = document.getElementById('progressBar');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const speedSelect = document.getElementById('speedSelect');

const toggleSidebarBtn = document.getElementById('toggleSidebarBtn');
const closeSidebarBtn = document.getElementById('closeSidebarBtn');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const printBtn = document.getElementById('printBtn');



// Lightbox Elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
const lightboxCaption = document.getElementById('lightboxCaption');
const zoomInBtn = document.getElementById('zoomInBtn');
const zoomOutBtn = document.getElementById('zoomOutBtn');
const zoomResetBtn = document.getElementById('zoomResetBtn');

// Initialize the Application
function init() {
    totalSlidesNum.textContent = slides.length;
    renderSlideList();
    goToSlide(0);
    setupEventListeners();
    preloadSlideImages(); // Preload images in background
}

// Render Slide List in Sidebar
function renderSlideList() {
    slideList.innerHTML = '';
    slides.forEach((slide, index) => {
        const slideItem = document.createElement('div');
        slideItem.className = `slide-item ${index === currentSlideIndex ? 'active' : ''}`;
        slideItem.innerHTML = `
            <div class="slide-num-badge">${String(index + 1).padStart(2, '0')}</div>
            <div class="slide-title-text" title="${slide.title}">${slide.title}</div>
        `;
        slideItem.addEventListener('click', () => {
            stopAutoplay();
            goToSlide(index);
        });
        slideList.appendChild(slideItem);
    });
}

// Go to Specific Slide
function goToSlide(index) {
    if (index < 0 || index >= slides.length) return;

    // Save state
    currentSlideIndex = index;

    // Update sidebar selection
    const items = slideList.querySelectorAll('.slide-item');
    items.forEach((item, idx) => {
        if (idx === index) {
            item.classList.add('active');
            item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
            item.classList.remove('active');
        }
    });

    // Update progress numbers and bar
    currentSlideNum.textContent = index + 1;
    const progressPercent = ((index + 1) / slides.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Render Slide Content
    const slide = slides[index];
    renderSlideContent(slide);


}

// Next Slide
function nextSlide() {
    if (currentSlideIndex < slides.length - 1) {
        goToSlide(currentSlideIndex + 1);
    } else {
        stopAutoplay(); // Stop if reached the end
    }
}

// Previous Slide
function prevSlide() {
    if (currentSlideIndex > 0) {
        goToSlide(currentSlideIndex - 1);
    }
}

// Toggle Autoplay
function togglePlay() {
    if (isPlaying) {
        stopAutoplay();
    } else {
        startAutoplay();
    }
}

function startAutoplay() {
    isPlaying = true;
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
    autoplayTimer = setInterval(nextSlide, autoplayInterval);
}

function stopAutoplay() {
    isPlaying = false;
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
    if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
    }
}

// Render Slide HTML Content
function renderSlideContent(slide) {
    slideContainer.innerHTML = '';

    const slideDiv = document.createElement('div');
    slideDiv.className = 'slide';

    // Header
    const slideHeader = `
        <div class="slide-header">
            <span class="slide-badge">${slide.badge}</span>
            <h2 class="slide-title">${slide.title}</h2>
        </div>
    `;

    // Body Generation based on Slide Type
    let slideBody = '';

    if (slide.type === 'title') {
        // Title Slide Layout
        let gridHTML = '';
        slide.info.forEach(item => {
            gridHTML += `
                <div class="title-grid-card">
                    <div class="title-grid-label">${item.label}</div>
                    <div class="title-grid-value">${item.value}</div>
                    <div class="title-grid-subvalue">${item.subvalue}</div>
                </div>
            `;
        });

        slideBody = `
            <div class="title-slide-body">
                <div class="title-badge-main">M.Sc. (I.C.T.) 4th Sem Project</div>
                <h1 class="title-slide-main-title">${slide.title}</h1>
                <p class="title-slide-subtitle">${slide.subtitle}</p>
                <div class="title-slide-grid">
                    ${gridHTML}
                </div>
                <div class="title-company-bar">
                    <img src="${slide.company.logo}" class="title-company-logo" alt="Company Logo" onerror="this.style.display='none'">
                    <span>${slide.company.name}</span>
                </div>
            </div>
        `;
    } else if (slide.type === 'bullets') {
        // Bullet Points + Visual Column Layout
        let bulletsHTML = '';
        slide.bullets.forEach(bullet => {
            bulletsHTML += `<li>${bullet}</li>`;
        });

        let visualHTML = '';
        if (slide.image) {
            visualHTML = `
                <div class="slide-visual-content">
                    <div class="diagram-card" onclick="openLightbox('${slide.image}', '${slide.caption || slide.title}')">
                        <img src="${slide.image}" class="diagram-img" alt="${slide.title}">
                        <div class="zoom-hint">
                            <ion-icon name="search-outline"></ion-icon>
                            <span>Click to Zoom</span>
                        </div>
                    </div>
                </div>
            `;
        }

        slideBody = `
            <div class="slide-body ${slide.image ? '' : 'single-col'}">
                <div class="slide-text-content">
                    <ul class="slide-bullets">
                        ${bulletsHTML}
                    </ul>
                </div>
                ${visualHTML}
            </div>
        `;
    } else if (slide.type === 'crc') {
        // CRC Cards Grid Layout
        let cardsHTML = '';
        slide.classes.forEach(cls => {
            let respHTML = '';
            cls.responsibilities.forEach(r => respHTML += `<li>${r}</li>`);
            let collHTML = '';
            cls.collaborators.split(',').forEach(c => collHTML += `<li>${c.trim()}</li>`);

            cardsHTML += `
                <div class="crc-card">
                    <div class="crc-header">
                        <div class="crc-class-name">${cls.name}</div>
                        <div class="crc-collaborators-badge">CRC Card</div>
                    </div>
                    <div class="crc-content">
                        <div class="crc-responsibilities">
                            <div class="crc-section-title">Responsibilities</div>
                            <ul>${respHTML}</ul>
                        </div>
                        <div class="crc-collaborators">
                            <div class="crc-section-title">Collaborators</div>
                            <ul>${collHTML}</ul>
                        </div>
                    </div>
                </div>
            `;
        });

        slideBody = `
            <div class="slide-body single-col">
                <div class="crc-grid">
                    ${cardsHTML}
                </div>
            </div>
        `;
    } else if (slide.type === 'sequence') {
        // Sequence Diagrams with Admin / Learner Tabs
        let bulletsHTML = '';
        slide.bullets.forEach(b => bulletsHTML += `<li>${b}</li>`);

        const activeImg = activeSequenceTab === 'admin' ? slide.images.admin : slide.images.learner;
        const activeCap = activeSequenceTab === 'admin' ? 'Admin Interaction Sequence' : 'Learner Interaction Sequence';

        slideBody = `
            <div class="slide-body">
                <div class="slide-text-content">
                    <div class="tab-selectors" style="display: flex; gap: 8px; margin-bottom: 12px;">
                        <button class="action-btn-secondary ${activeSequenceTab === 'admin' ? 'active' : ''}" onclick="switchSequenceTab('admin')" style="background-color: ${activeSequenceTab === 'admin' ? 'rgba(0, 242, 254, 0.15)' : 'var(--bg-control)'}; border-color: ${activeSequenceTab === 'admin' ? 'var(--color-accent)' : 'var(--border-color)'};">
                            Admin Flow
                        </button>
                        <button class="action-btn-secondary ${activeSequenceTab === 'learner' ? 'active' : ''}" onclick="switchSequenceTab('learner')" style="background-color: ${activeSequenceTab === 'learner' ? 'rgba(0, 242, 254, 0.15)' : 'var(--bg-control)'}; border-color: ${activeSequenceTab === 'learner' ? 'var(--color-accent)' : 'var(--border-color)'};">
                            Learner Flow
                        </button>
                    </div>
                    <ul class="slide-bullets">
                        ${bulletsHTML}
                    </ul>
                </div>
                <div class="slide-visual-content">
                    <div class="diagram-card" onclick="openLightbox('${activeImg}', '${activeCap}')">
                        <img src="${activeImg}" class="diagram-img" alt="Sequence Diagram">
                        <div class="zoom-hint">
                            <ion-icon name="search-outline"></ion-icon>
                            <span>Click to Zoom</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else if (slide.type === 'gallery') {
        // UI Screenshots gallery view
        let thumbsHTML = '';
        slide.images.forEach((img, idx) => {
            thumbsHTML += `
                <div class="ui-thumb ${idx === activeGalleryIndex ? 'active' : ''}" onclick="switchGalleryImage(${idx})">
                    <img src="${img}" alt="UI Thumbnail">
                </div>
            `;
        });

        slideBody = `
            <div class="slide-body">
                <div class="slide-text-content">
                    <p class="slide-description" style="font-weight: 600; color: var(--color-accent); margin-bottom: 8px;">
                        ${slide.captions[activeGalleryIndex]}
                    </p>
                    <ul class="slide-bullets">
                        <li>Visualizing the high-fidelity client frontend layout.</li>
                        <li>Angular interfaces leverage responsive CSS with smooth component animations.</li>
                        <li>Interactive components integrate directly with .NET controllers using secure endpoints.</li>
                    </ul>
                    <div class="ui-thumbnails" style="margin-top: 20px;">
                        ${thumbsHTML}
                    </div>
                </div>
                <div class="slide-visual-content">
                    <div class="ui-main-display" onclick="openLightbox('${slide.images[activeGalleryIndex]}', '${slide.captions[activeGalleryIndex]}')">
                        <img src="${slide.images[activeGalleryIndex]}" class="ui-main-img" alt="UI Dashboard Screen">
                        <div class="zoom-hint">
                            <ion-icon name="search-outline"></ion-icon>
                            <span>Click to Zoom</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else if (slide.type === 'tech') {
        // Technology Stack Matrix layout
        let boxHTML = '';
        slide.techStack.forEach(t => {
            boxHTML += `
                <div class="tech-box">
                    <div class="tech-icon">
                        <ion-icon name="${t.icon}"></ion-icon>
                    </div>
                    <div class="tech-info">
                        <h4>${t.name}</h4>
                        <p>${t.detail}</p>
                    </div>
                </div>
            `;
        });

        slideBody = `
            <div class="slide-body single-col">
                <div class="tech-grid">
                    ${boxHTML}
                </div>
            </div>
        `;
    }

    // Combine structure
    if (slide.type === 'title') {
        slideDiv.innerHTML = slideBody;
    } else {
        slideDiv.innerHTML = slideHeader + slideBody;
    }

    slideContainer.appendChild(slideDiv);
}

// Switch Sequence Tabs
window.switchSequenceTab = function (tab) {
    activeSequenceTab = tab;
    goToSlide(currentSlideIndex); // Re-render current slide
}

// Switch UI Gallery Images
window.switchGalleryImage = function (index) {
    activeGalleryIndex = index;
    goToSlide(currentSlideIndex); // Re-render current slide
}

// Zoom Lightbox Functionality
function openLightbox(imgSrc, captionText) {
    lightboxImg.src = imgSrc;
    lightboxCaption.textContent = captionText;
    lightbox.classList.add('active');

    // Reset zoom and pan
    zoomLevel = 1.0;
    panOffset = { x: 0, y: 0 };
    updateImageTransform();
}

function closeLightbox() {
    lightbox.classList.remove('active');
}

function updateImageTransform() {
    lightboxImg.style.transform = `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoomLevel})`;
}

// Setup Event Listeners
function setupEventListeners() {
    // Navigation Buttons
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    playBtn.addEventListener('click', togglePlay);

    // Autoplay Speed Selection
    speedSelect.addEventListener('change', (e) => {
        autoplayInterval = parseInt(e.target.value);
        if (isPlaying) {
            stopAutoplay();
            startAutoplay();
        }
    });

    // Theme Mode Toggle
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
    });

    // Sidebar Toggle
    toggleSidebarBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });

    closeSidebarBtn.addEventListener('click', () => {
        sidebar.classList.add('collapsed');
    });



    // Print Presentation
    printBtn.addEventListener('click', () => {
        // Automatically close overlays
        closeLightbox();
        window.print();
    });

    // Lightbox Controls
    lightboxCloseBtn.addEventListener('click', closeLightbox);

    zoomInBtn.addEventListener('click', () => {
        zoomLevel = Math.min(zoomLevel + 0.25, 4.0);
        updateImageTransform();
    });

    zoomOutBtn.addEventListener('click', () => {
        zoomLevel = Math.max(zoomLevel - 0.25, 0.5);
        updateImageTransform();
    });

    zoomResetBtn.addEventListener('click', () => {
        zoomLevel = 1.0;
        panOffset = { x: 0, y: 0 };
        updateImageTransform();
    });

    // Drag-to-Pan in Lightbox
    const lightboxContentElem = document.querySelector('.lightbox-content');

    lightboxContentElem.addEventListener('mousedown', (e) => {
        isPanning = true;
        panStart = { x: e.clientX - panOffset.x, y: e.clientY - panOffset.y };
        lightboxContentElem.style.cursor = 'grabbing';
    });

    window.addEventListener('mousemove', (e) => {
        if (!isPanning) return;
        panOffset = { x: e.clientX - panStart.x, y: e.clientY - panStart.y };
        updateImageTransform();
    });

    window.addEventListener('mouseup', () => {
        if (isPanning) {
            isPanning = false;
            lightboxContentElem.style.cursor = 'grab';
        }
    });

    // Mousewheel Zoom in Lightbox
    lightboxContentElem.addEventListener('wheel', (e) => {
        e.preventDefault();
        const zoomFactor = e.deltaY < 0 ? 0.1 : -0.1;
        zoomLevel = Math.min(Math.max(zoomLevel + zoomFactor, 0.5), 4.0);
        updateImageTransform();
    });

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') closeLightbox();
            return;
        }

        switch (e.key) {
            case 'ArrowRight':
            case 'Space':
            case ' ':
                e.preventDefault();
                nextSlide();
                break;
            case 'ArrowLeft':
                e.preventDefault();
                prevSlide();
                break;
            case 'Escape':
                sidebar.classList.add('collapsed');
                break;
        }
    });
}

// Preload all slide images to prevent loading lag
function preloadSlideImages() {
    const imagesToPreload = new Set();

    slides.forEach(slide => {
        if (slide.image) {
            imagesToPreload.add(slide.image);
        }
        if (slide.images) {
            if (Array.isArray(slide.images)) {
                slide.images.forEach(img => imagesToPreload.add(img));
            } else if (typeof slide.images === 'object') {
                Object.values(slide.images).forEach(img => imagesToPreload.add(img));
            }
        }
    });

    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Start the Presentation Application
document.addEventListener('DOMContentLoaded', init);
