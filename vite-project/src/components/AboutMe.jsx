import { Code, User, Briefcase } from 'lucide-react';

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* TODO: Add information about yourslef */}
            <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech Creator</h3>

            <p className="text-muted-foreground">
              You can do whatever you want
              And talk about yourself
            </p>

            <p className="text-muted-foreground">
              What I know and what I am Passionat
              aboue!!!
            </p>

            <div className="flex flex-col md:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button"> Get in Touch </a>

              {/* TODO: Add download for CV */}
              <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                Download CV
              </a>
            </div>
          </div>

          {/* TODO: fill out the fields below */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary"/>
                </div>

                <div className='text-left'>
                  <h4 className='font-semibold text-lg'> Web Development</h4>
                  <p className='text-muted-foreground'>
                    I make them websites cause I'm so cool
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary"/>
                </div>

                                <div className='text-left'>
                  <h4 className='font-semibold text-lg'> UI/UX Design</h4>
                  <p className='text-muted-foreground'>
                    I make them websites cause I'm so cool
                  </p>
                </div>
              </div>
            </div>
            
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary"/>
                </div>

                <div className='text-left'>
                  <h4 className='font-semibold text-lg'> Project Management</h4>
                  <p className='text-muted-foreground'>
                    I carry my teammates and collaborate with them to achieve the best results
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