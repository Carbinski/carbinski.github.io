import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get In <span className="text-primary">Touch</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your team.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {/* Email Card */}
                    <div className="bg-card p-6 rounded-lg shadow-sm flex flex-col items-center text-center space-y-4 hover:border-primary/50 border border-transparent transition-all">
                        <div className="p-4 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-medium mb-1">Email</h4>
                            <a
                                href="mailto:carson@mcneillfamily.org"
                                className="text-muted-foreground hover:text-primary transition-colors text-sm"
                            >
                                carson@mcneillfamily.org
                            </a>
                        </div>
                    </div>

                    {/* Phone Card */}
                    <div className="bg-card p-6 rounded-lg shadow-sm flex flex-col items-center text-center space-y-4 hover:border-primary/50 border border-transparent transition-all">
                        <div className="p-4 rounded-full bg-primary/10">
                            <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-medium mb-1">Phone</h4>
                            <a
                                href="tel:+19494496800"
                                className="text-muted-foreground hover:text-primary transition-colors text-sm"
                            >
                                +1 (949) 449-6800
                            </a>
                        </div>
                    </div>

                    {/* Location Card */}
                    <div className="bg-card p-6 rounded-lg shadow-sm flex flex-col items-center text-center space-y-4 hover:border-primary/50 border border-transparent transition-all">
                        <div className="p-4 rounded-full bg-primary/10">
                            <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-medium mb-1">Location</h4>
                            <p className="text-muted-foreground text-sm">
                                Orange County, CA
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <h4 className="font-medium mb-6">Connect With Me</h4>
                    <div className="flex space-x-6 justify-center">
                        <a
                            href="https://www.linkedin.com/in/carson-mcneill/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all transform hover:scale-110"
                        >
                            <Linkedin className="h-6 w-6" />
                        </a>
                        <a
                            href="https://www.instagram.com/carson_mcneillllll/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all transform hover:scale-110"
                        >
                            <Instagram className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};