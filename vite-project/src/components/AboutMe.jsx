import { Cloud, Microscope, Rocket } from 'lucide-react';

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
              Building systems that hold up in production
            </h3>

            <p className="text-muted-foreground">
              I'm a 4th year Computer Science student at Georgia Tech, concentrating in Intelligence and Internetworking.
            </p>

            <p className="text-muted-foreground">
              This fall I'm an SDE Intern at Amazon Web Services, working on scheduled tunnel maintenance for Site-to-Site VPN in Scala. I also do computer vision research at ViTAL Lab. Before AWS, I spent the summer at Deloitte building a behavioral health data platform for a state government client.
            </p>

            <div className="flex flex-col md:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button"> Get in Touch </a>

              <a
                href="/projects/Carson_McNeill_Resume.pdf"
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
                  <Cloud className="h-6 w-6 text-primary" />
                </div>

                <div className='text-left'>
                  <h4 className='font-semibold text-lg'> Cloud & Backend Systems </h4>
                  <p className='text-muted-foreground'>
                    I write production Scala on AWS, from configurable scheduling logic to reusable service packages.
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
                  <h4 className='font-semibold text-lg'> Computer Vision Research </h4>
                  <p className='text-muted-foreground'>
                    I enhance detection, re-identification, and pose estimation pipelines that help identify behaviors in profoundly autistic subjects, and I validate them against ground truth I label myself.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>

                <div className='text-left'>
                  <h4 className='font-semibold text-lg'> Products & Entrepreneurship </h4>
                  <p className='text-muted-foreground'>
                    I build and ship my own products. I'm also drawn to startups, and I spend time talking with founders as I work toward building a company of my own.
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