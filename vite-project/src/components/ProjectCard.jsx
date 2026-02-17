import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export const ProjectCard = ({ project, isOpen, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!isOpen || !project) return null;

    const images =
        project.imageGallery && project.imageGallery.length > 0
            ? project.imageGallery
            : [project.image];

    const handlePrev = () =>
        setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

    const handleNext = () =>
        setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={handleBackdropClick}
        >
            <div className="relative bg-card border border-border rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 text-foreground/60 hover:text-primary transition-colors duration-300 cursor-pointer"
                >
                    <X size={22} />
                </button>

                {/* Image Gallery */}
                <div className="relative w-full h-64 sm:h-72 overflow-hidden rounded-t-xl">
                    <img
                        src={images[currentImageIndex]}
                        alt={`${project.title} - image ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover transition-opacity duration-300"
                    />

                    {images.length > 1 && (
                        <>
                            <button
                                onClick={handlePrev}
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors duration-200 cursor-pointer"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors duration-200 cursor-pointer"
                            >
                                <ChevronRight size={20} />
                            </button>

                            {/* Dots indicator */}
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                                {images.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentImageIndex(idx)}
                                        className={`w-2 h-2 rounded-full transition-all duration-200 cursor-pointer ${idx === currentImageIndex
                                                ? "bg-primary w-4"
                                                : "bg-white/60 hover:bg-white/90"
                                            }`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag) => (
                            <span
                                className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                                key={tag}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {project.extendedDescription || project.description}
                    </p>

                    {/* Links */}
                    <div className="flex gap-3 pt-2">
                        {project.githubUrl && project.githubUrl !== "#" && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                className="cosmic-button text-sm flex items-center gap-2"
                            >
                                View on GitHub
                            </a>
                        )}
                        {project.demoUrl && project.demoUrl !== "#" && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                className="cosmic-button text-sm flex items-center gap-2"
                            >
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
