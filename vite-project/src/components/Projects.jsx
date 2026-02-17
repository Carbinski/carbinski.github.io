import { useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { ProjectCard } from "./ProjectCard";


const projects = [
    {
        id: -7,
        title: "CanvasPlus",
        description: "CanvasPlus is a ground up redesign of Canvas with new focus on customization and student centered features",
        extendedDescription: "CanvasPlus is a multi-semester iOS app project where we aim to recreate canvas from the ground up with students and Apple platforms features in mind. My responsibilites involve utilizing the foundation model to summarize course announcements, implementing spotlight / semantic search, and customizable backgrounds.",
        image: "/projects/canvasplus.png",
        imageGallery: [],
        tags: ["iOS", "Swift", "API", "Spotlight"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: -6,
        title: "SynchHub",
        description: "A multiplatform app designed to manage all user generated, education related media",
        extendedDescription: "SynchHub is a Spring 2026 iOS club project where I served as a Senior Developer in charge of the Content Management subteam. My responsibilities included leading the development of the app's content storage and symantic search features. Additionally, I was in charge of building core feature such as the content grouping, infinite canvas, and batching system. Furthermore I created educational content to teach our developers how to follow MVVM and best practices during development.",
        image: "/projects/synchub.png",
        imageGallery: [],
        tags: ["iOS", "Swift", "Firebase", "Spotlight"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: -5,
        title: "Chess Engine",
        description: "A classical chess engine utilizing Alpha-Beta Pruning and Minimax evaluation to achieve an ~2000+ elo",
        extendedDescription: "This chess engine was built from the ground up, implementing search algorithms such as Alpha-Beta Pruning with Minimax evaluation. It features iterative deepening, move ordering heuristics, and transposition tables to achieve competitive play at an estimated 2100+ Elo rating. Features also include the following: Open Book, PeSTO Position Evaluation, Killer Move Heuristics, Null Move Pruning, Adaptive Game Phase Evaluation, Adaptive Time Management based Search, Buffers to optimze Java's garbage collection, Stat Tracking, and Quiescence Search. I ended up create ~20 version of the bot. I originally created them in Python for ease of development, but I eventually started hitting performance issues and decided to switch to Java. To validate the bots improvement, I had them automatically play games against the pervious versions of bots and recorded the results.",
        image: "/projects/chess.png",
        imageGallery: [],
        tags: ["Java", "Python", "Pruning", "Minimax"],
        demoUrl: "#",
        githubUrl: "https://github.com/Carbinski/chess_engine"
    },
    {
        id: -4,
        title: "Spotify Next Upcoming Artist Predictor",
        description: "A machine learning project that uses Spotify music data, Linear Regression, Random Forest, KNN, and Cluster to predict the popularity of songs",
        extendedDescription: "A semester long machine learning project for CS 4641. I along with my 4 teammates utilized a Kaggle dataset of Spotify songs that recorded features such as tempo, key, loudness, and danceability to predict the popularity of songs. We used Linear Regression, Random Forest, KNN, K-Means, and GMM as well as SMOTE and data pre-processing tools like one-hot encoding and robust scaling. When classifying songs as popular and not popular, we achieved a maximum Macro Average F1 of 0.82. Meanwhile when performing regression analysis, we achieved a maximum R^2 of 0.6275.",
        image: "/projects/spotify.png",
        imageGallery: [],
        tags: ["Python", "ML", "Jupyter"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: -3,
        title: "I2P Fellowship: Alba",
        description: "A startup product idea that attempts to eliminate the need to manage multiple project communication channels by creating a single platform",
        extendedDescription: "Teams often use too many tools to manage their projects, such as Slack, Discord, Trello, Teams, and more. Alba is a startup product idea that attempts to eliminate the need to manage multiple project communication channels. It is a web applicaiton that has the core features of these tools such as Organization and Page Management, Markdown Editor, Calendar Event Scheduling, Kanban Boards, and Task Creation.",
        image: "/projects/alba.png",
        imageGallery: [],
        tags: ["React", "Next", "MongoDB"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: -2,
        title: "SkillSwap",
        description: "A iOS app designed to motivate the continuous learning and sharing of skills",
        extendedDescription: "SkillSwap is an iOS application designed to foster a community of learners by enabling users to trade skills with one another. Users can create profiles showcasing their expertise and interests, match with others who have complementary skills, and schedule skill-sharing sessions. Built with Swift and backed by Firebase for real-time data syncing and authentication.",
        image: "/projects/skillswap.png",
        imageGallery: [],
        tags: ["iOS", "Swift", "Firebase"],
        demoUrl: "https://devpost.com/software/skillswap-rwy4le",
        githubUrl: "#"
    },
    {
        id: -1,
        title: "BuzzFinder",
        description: "A website for reporting missing items around Georgia Tech's campus",
        extendedDescription: "BuzzFinder is a web platform built for the Georgia Tech community to help students locate and report lost or found items around campus. The application integrates Google Maps API for location pinning, allowing users to mark where items were lost or found. Each pin includes additional information such as a photo and a description when clicked, allowing students to easily identify and claim their lost items. Built with React and Next.js for a fast, responsive user experience.",
        image: "/projects/buzzfinder.png",
        imageGallery: [],
        tags: ["React", "Next", "Google API"],
        demoUrl: "#",
        githubUrl: "https://github.com/itsevelync/buzz-finder"
    },
    {
        id: 0,
        title: "InfraBlocks",
        description: 'Hackathon-winning drag-and-drop tool to simplify the design and deployment of AWS microservice architectures',
        extendedDescription: "InfraBlocks is a hackathon-winning project that provides a visual drag-and-drop interface for designing AWS microservice architectures. Users can compose cloud infrastructure by placing and connecting service blocks on a canvas, which then generates production-ready Terraform configuration files for one-click deployment. Built with React Flow for the interactive canvas and integrated with AWS services.",
        image: "/projects/infrablocks.png",
        imageGallery: [],
        tags: ["React Flow", "Terraform", "AWS"],
        demoUrl: "https://devpost.com/software/infrablocks",
        githubUrl: "https://github.com/infrablocks-oss/InfraBlocks"
    },
    {
        id: 1,
        title: "The Buku App",
        description: "A campus-focused marketplace startup that allows college students to buy and sell items.",
        extendedDescription: "The Buku App is a campus-focused marketplace startup designed exclusively for college students to buy and sell items within their university community. Featuring an intuitive listing process, real-time messaging, and secure transaction flows, the app simplifies peer-to-peer commerce on campus. Built natively in Swift with Firebase for backend services and currently live on the App Store.",
        image: "/projects/bukuapp.png",
        imageGallery: [],
        tags: ["Xcode", "Swift", "Firebase", "Notion"],
        demoUrl: "https://apps.apple.com/us/app/the-buku-app/id6751913315?l=es-MX",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "Smart Facial Recognition",
        description: "A smart home project that uses Haar Cascade facial recognition to generate responses based detected person.",
        extendedDescription: "This smart home project leverages Haar Cascade classifiers to perform real-time facial recognition via a connected camera. Once a person is detected and identified, the system generates personalized responses — such as custom greetings, lighting adjustments, or notifications — based on the recognized individual. Built in Python with OpenCV for computer vision and integrated with various APIs to fetch user relevant information.",
        image: "/projects/facialdetection.png",
        imageGallery: [],
        tags: ["Python", "Facial Recognition", "APIs",],
        demoUrl: "#",
        githubUrl: "https://github.com/Carbinski/Facial_Recognition",
    },
    {
        id: 3,
        title: "IngramMicro Datasheet",
        description: "A custom script to proccess a raw .txt file into a usable inventory management excel spreadsheet.",
        extendedDescription: "This custom automation script streamlines the inventory management process for IngramMicro by parsing raw .txt data exports and transforming them into well-structured Excel spreadsheets. It was created to replace an old PHP script that was no longer supported. The script handles data cleaning, formatting, and categorization, saving hours of manual data entry. Beyond just writing the script, I turned the scipt into an executable that automatically runs when at the end of each fiscal month. Built in Python with libraries for text processing, Excel file generation, and the creation of executable files.",
        image: "/projects/ingram.jpg",
        imageGallery: [],
        tags: ["Python", "Excel", "Data Processing"],
        demoUrl: "#",
        githubUrl: "https://github.com/Carbinski/IngramMicro_Datasheet",
    },
    {
        id: 4,
        title: "WanderSync",
        description: "An Android app that helps users plan and sync their travel itineraries with friends.",
        extendedDescription: "WanderSync is an Android application that makes group travel planning seamless. Users can collaboratively build travel itineraries, share destination recommendations, and sync schedules in real time with friends. The app features interactive maps, push notifications for itinerary updates, and offline access. Built with Java in Android Studio and powered by Firebase for real-time collaboration.",
        image: "/projects/wandersync.png",
        imageGallery: [],
        tags: ["Android Studio", "Java", "Firebase"],
        demoUrl: "https://carbinski.github.io/CS2340D_Team28/",
        githubUrl: "#",
    },
    {
        id: 5,
        title: "SpecTackles",
        description: "Hackathon-winning augmented reality glasses that help users control smart home devices with hand gestures.",
        extendedDescription: "SpecTackles is a hackathon-winning project featuring augmented reality glasses that enable users to control smart home devices through intuitive hand gestures. Using Snap's Lens Studio for AR gesture recognition and a Next.js web dashboard for device management, the system bridges the gap between wearable tech and home automation. Firebase handles real-time state synchronization between the glasses and connected devices.",
        image: "/projects/spectackles.png",
        imageGallery: [],
        tags: ["Lens Studio", "NextJS", "Firebase"],
        demoUrl: "https://devpost.com/software/spectackles",
        githubUrl: "https://github.com/Carbinski/HackGT-Temp?tab=readme-ov-file",
    },
    {
        id: 6,
        title: "Agronav Research Analysis",
        description: "Project focused on evaluating the generalizability of Agronav, a resarch paper on using ML for robot navigation.",
        extendedDescription: "This research project investigates the generalizability of Agronav, a machine learning framework for autonomous robot navigation in agricultural environments. The analysis involves replicating the original experiments, testing with new datasets and terrains, and evaluating model performance across different conditions. Conducted using TensorFlow and Python, with findings presented in an academic format.",
        image: "/projects/agronav.png",
        imageGallery: [],
        tags: ["AI", "TensorFlow", "Python"],
        demoUrl: "https://docs.google.com/presentation/d/1lGJP4gWrtGXV4pMct62idTu602tspZfMK5FjVAu5lIM/edit?usp=sharing",
        githubUrl: "#",
    },
    {
        id: 7,
        title: "Enable: 3D Printed Prosthetic Hand",
        description: "A 3D printed prosthetic hand designed to be affordable and accessible for youths in need.",
        extendedDescription: "This community service project involved designing and 3D printing an affordable prosthetic hand for youths in need through the e-NABLE network. I ultimately created 3 prosthetics: 2 Phoenix Hand v3s and a Kwawu Arm (seen in image). Special attention was given to customize the arms to the recipient's needs to ensure comfort and confidence when using the prosthetic. Recieved the National Youth Leadership Council Service-Learning Excellence Award for this project. The award included $1,000 in funding for further development of the prosthetic program at my school.",
        image: "/projects/prosthetic.png",
        imageGallery: [],
        tags: ["3D Printing", "Community Service"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 8,
        title: "Eagle Scout Project",
        description: "Budgeted, planned, and organized the construction of three benches for local community.",
        extendedDescription: "As the culminating achievement of the Eagle Scout journey, this project involved the complete planning, budgeting, and construction of three community benches for a local park. The project required leadership skills in managing a team of volunteers, coordinating with local authorities for permits and placement, sourcing materials within budget, and overseeing construction to ensure quality and safety standards were met.",
        image: "/projects/eaglescout.jpeg",
        imageGallery: [],
        tags: ["Leadership", "Community Service"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 9,
        title: "Presidential Service Award",
        description: "Recieved the Presidential Service Award Gold for performing over 225 hours of volunteer service.",
        extendedDescription: "Recieved the Presidential Service Award Gold for performing over 225 hours of volunteer service. Volunteering included the following projects: Someone Cares Soup Kitchen, Eagle Scout Project, Environment Cleanups, and Serviving as a Volunteer Counselor at the Environmental Nature Center.",
        image: "/projects/psa.jpeg",
        imageGallery: [],
        tags: ["Leadership", "Community Service"],
        demoUrl: "#",
        githubUrl: "#"
    }
]

// TODO: fill out the text and projects eventually
export const ProjectSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleExternalLinkClick = (project) => {
        if (project.demoUrl && project.demoUrl !== "#") {
            window.open(project.demoUrl, "_blank");
        } else {
            setSelectedProject(project);
        }
    };

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    Featured <span className="text-primary"> Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects! Click on the links to learn more.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground" key={tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>

                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <button
                                            onClick={() => handleExternalLinkClick(project)}
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer"
                                        >
                                            <ExternalLink size={20} />
                                        </button>

                                        {project.githubUrl && project.githubUrl !== "#" && (
                                            <a
                                                href={project.githubUrl}
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                                target="_blank"
                                            >
                                                <Github size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        href="https://github.com/Carbinski"
                        target="_blank"
                    >
                        Check My GitHub <ArrowRight size={16} />
                    </a>
                </div>
            </div>

            <ProjectCard
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    )
};