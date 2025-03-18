
import React from 'react';
import { Code, Globe, Server, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon, skills }) => {
  return (
    <Card className="glass-panel">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-none space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="text-sm text-muted-foreground hover-glow">
              {skill}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const About: React.FC = () => {
  const profileImage = 'lovable-uploads/89b030eb-46bd-49e9-b235-2ba5ca5cbb5f.png';

  return (
    <section id="about" className="min-h-screen py-20 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-glow text-center">About Me</h2>
        
        <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
          <div className="lg:w-1/3">
            <div className="relative w-56 h-56 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-600 to-gray-400 blur-md animate-pulse-subtle"></div>
              <img 
                src={profileImage} 
                alt="Vilgach" 
                className="relative rounded-full w-full h-full object-cover border-2 border-white/20 border-glow"
              />
            </div>
            
            <div className="mt-8 glass-panel p-6 text-center">
              <h3 className="text-2xl font-semibold mb-3 text-glow">Vilgach</h3>
              <p className="text-muted-foreground">
                Web Developer with around 1 year of experience crafting digital experiences
              </p>
            </div>
          </div>
          
          <div className="lg:w-2/3 space-y-8">
            <div className="glass-panel p-6">
              <h3 className="text-xl font-semibold mb-4">Introduction</h3>
              <p className="text-muted-foreground leading-relaxed">
                Hi, I'm Vilgach, a web developer with around 1 year of experience. 
                I'm passionate about creating sleek, modern, and functional web applications 
                that deliver exceptional user experiences. I enjoy working with the latest 
                technologies and am constantly expanding my skillset.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SkillCard 
                title="Languages" 
                icon={<Code className="w-4 h-4" />} 
                skills={["Python", "Java", "JavaScript", "GoLang"]} 
              />
              <SkillCard 
                title="Frontend" 
                icon={<Globe className="w-4 h-4" />} 
                skills={["React", "HTML/CSS", "Tailwind CSS", "Three.js"]} 
              />
              <SkillCard 
                title="Backend" 
                icon={<Server className="w-4 h-4" />} 
                skills={["Node.js", "Express", "Django", "Go HTTP"]} 
              />
              <SkillCard 
                title="Database" 
                icon={<Database className="w-4 h-4" />} 
                skills={["MongoDB", "PostgreSQL", "MySQL", "Redis"]} 
              />
            </div>
            
            <div className="glass-panel p-6">
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              <p className="text-muted-foreground leading-relaxed">
                I've worked on various web projects including e-commerce platforms, content management 
                systems, and responsive web applications. My focus is on creating clean, efficient code 
                that delivers seamless user experiences across all devices. I'm particularly interested 
                in 3D web experiences and interactive user interfaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
