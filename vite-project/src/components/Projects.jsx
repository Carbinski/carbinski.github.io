import { ExternalLink, Github, ArrowRight } from "lucide-react";


const projects = [
    {
        id: -1,
        title: "BuzzFinder",
        description: "A website for reporting missing items around Georgia Tech's campus",
        image: "/projects/buzzfinder.png",
        tags: ["React", "Next", "Google API"],
        demoUrl: "#",
        githubUrl: "https://github.com/itsevelync/buzz-finder"
    },
    {
        id: 0,
        title: "InfraBlocks",
        description: 'Hackathon-winning drag-and-drop tool to simplify the design and deployment of AWS microservice architectures',
        image: "/projects/infrablocks.png",
        tags: ["React Flow", "Terraform", "AWS"],
        demoUrl: "https://devpost.com/software/infrablocks",
        githubUrl: "https://github.com/infrablocks-oss/InfraBlocks"
    },
    {
        id: 1,
        title: "The Buku App",
        description: "A campus-focused marketplace startup that allows college students to buy and sell items.",
        image: "/projects/bukuapp.png",
        tags: ["Xcode", "Swift", "Firebase", "Notion"],
        demoUrl: "https://apps.apple.com/us/app/the-buku-app/id6751913315?l=es-MX",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "Smart Facial Recognition",
        description: "A smart home project that uses Haar Cascade facial recognition to generate responses based detected person.",
        image: "/projects/facialdetection.png",
        tags: ["Python", "Facial Recognition", "APIs",],
        demoUrl: "#",
        githubUrl: "https://github.com/Carbinski/Facial_Recognition",
    },
    {
        id: 3,
        title: "IngramMicro Datasheet",
        description: "A custom script to proccess a raw .txt file into a usable inventory management excel spreadsheet.",
        image: "/projects/ingram.jpg",
        tags: ["Python", "Excel", "Data Processing"],
        demoUrl: "#",
        githubUrl: "https://github.com/Carbinski/IngramMicro_Datasheet",
    },
    {
        id: 4,
        title: "WanderSync",
        description: "An Android app that helps users plan and sync their travel itineraries with friends.",
        image: "/projects/wandersync.png",
        tags: ["Android Studio", "Java", "Firebase"],
        demoUrl: "https://carbinski.github.io/CS2340D_Team28/",
        githubUrl: "#",
    },
    {
        id: 5,
        title: "SpecTackles",
        description: "Hackathon-winning augmented reality glasses that help users control smart home devices with hand gestures.",
        image: "/projects/spectackles.png",
        tags: ["Lens Studio", "NextJS", "Firebase"],
        demoUrl: "https://devpost.com/software/spectackles",
        githubUrl: "https://github.com/Carbinski/HackGT-Temp?tab=readme-ov-file",
    },
    {
        id: 6,
        title: "Agronav Research Analysis",
        description: "Project focused on evaluating the generalizability of Agronav, a resarch paper on using ML for robot navigation.",
        image: "/projects/agronav.png",
        tags: ["AI", "TensorFlow", "Python"],
        demoUrl: "https://docs.google.com/presentation/d/1lGJP4gWrtGXV4pMct62idTu602tspZfMK5FjVAu5lIM/edit?usp=sharing",
        githubUrl: "#",
    },
    {
        id: 7,
        title: "Enable: 3D Printed Prosthetic Hand",
        description: "A 3D printed prosthetic hand designed to be affordable and accessible for youths in need.",
        image: "/projects/prosthetic.png",
        tags: ["3D Printing", "Community Service"],
    },
    {
        id: 8,
        title: "Eagle Scout Project",
        description: "Budgeted, planned, and organized the construction of three benches for local community.",
        image: "/projects/eaglescout.jpeg",
        tags: ["Leadership", "Community Service"],
        demoUrl: "#",
        githubUrl: "#"
    }
]

// TODO: fill out the text and projects eventually
export const ProjectSection = () => {
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
                                        {project.demoUrl && project.demoUrl !== "#" && (
                                            <a 
                                                href={project.demoUrl} 
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                                target="_blank"
                                            > 
                                                <ExternalLink size={20}/>
                                            </a>
                                        )}

                                        {project.githubUrl && project.githubUrl !== "#" && (
                                            <a 
                                                href={project.githubUrl}
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                                target="_blank"
                                            >
                                                <Github size={20}/>
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
                        Check My GitHub <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    )
};