import { useState } from 'react';
import { cn } from '@/lib/utils';
const skills = [
    // Frontend Skills
    {name: "HTML/CSS", level: 65, category: "frontend"},
    {name: "JavaScript", level: 35, category: "frontend"},
    {name: "React", level: 35, category: "frontend"},
    {name: "Tailwind CSS", level: 10, category: "frontend"},
    {name: "Next.js", level: 10, category: "frontend"},

    // Backend Skills
    {name: "Node.js", level: 10, category: "backend"},
    {name: "Express.js", level: 10, category: "backend"},
    {name: "Firebase", level: 80, category: "backend"},
    {name: "MongoDB", level: 45, category: "backend"},
    {name: "PostgreSQL", level: 10, category: "backend"},
    {name: "GraphQL", level: 10, category: "backend"},

    // Tools
    {name: "Git/GitHub", level: 85, category: "tools"},
    {name: "Docker", level: 25, category: "tools"},
    {name: "Figma", level: 20, category: "tools"},
    {name: "VS Code", level: 45, category: "tools"},
    {name: "Postman", level: 15, category: "tools"},
];

const categories = [
    "all",
    "frontend",
    "backend",
    "tools"
];


export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skills) => activeCategory === "all" || skills.category === activeCategory
    );

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className='flex flex-wrap justify-center gap-4 mb-12'>
                    {categories.map((category) => (
                        <button 
                            key={category} 
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                'px-5 py-2 rounded-full transition-colors duration-300 capitalize',
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary")}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, index) => (
                        <div 
                            key={index} 
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> {skill.name} </h3>
                            </div>

                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div 
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                                    style={{width: skill.level + "%"}}
                                />
                            </div>

                            <div className="text-right mt-1 text-sm text-muted-foreground">
                                <span>{skill.level + "%"}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}