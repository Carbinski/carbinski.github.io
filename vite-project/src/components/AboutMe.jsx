import { Code, Briefcase, Microscope, Smartphone } from 'lucide-react';

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Computer Science at Georgia Tech
            </h3>

            <p className="text-muted-foreground">
              My goal is to work at the intersection of full-stack development and machine learning by designing complete systems that leverage machine learning.
            </p>

            <p className="text-muted-foreground">
              I’m actively working on mobile apps, contributing to ML research, and collaborating on projects that push my technical and creative boundaries.
            </p>

            <div className="flex flex-col md:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button"> Get in Touch </a>

              <a
                href="projects/Carson McNeill Resume _ Fall 2026 SWE.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                target='_blank'
                rel="noopener noreferrer"
                download
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Updated fields based on Resume */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>

                <div className='text-left'>
                  <h4 className='font-semibold text-lg'> Mobile & Full-Stack Development </h4>
                  <p className='text-muted-foreground'>
                    I build robust applications using Swift (iOS) and React, with experience in complex state management and cloud integration (Firebase, AWS).
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Microscope className="h-6 w-6 text-primary" />
                </div>

                <div className='text-left'>
                  <h4 className='font-semibold text-lg'> ML & Robotics Research </h4>
                  <p className='text-muted-foreground'>
                    I conduct research in computer vision and autonomous systems, working on projects like pose estimation for healthcare and semantic segmentation for robot navigation.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className='text-left'>
                  <h4 className='font-semibold text-lg'> Engineering Leadership </h4>
                  <p className='text-muted-foreground'>
                    I lead development teams (GT iOS Club) and compete in hackathons, winning awards for building developer tools and AR applications (HackGT Winner).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}