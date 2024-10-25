"use client";

import { 
  FaJava,
  FaSpring,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,


 } from "react-icons/fa"

 import { SiTailwindcss, SiNextdotjs } from "react-icons/si"

 // about data
 const about = {
   title: 'About me',
   description:
     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid error unde omnis doloremque maiores dicta voluptatum, est, inventore veritatis sequi at repellendus consequuntur dolor corrupti illum molestiae',
   info: [
     {
       fieldName: 'Name',
       fieldValue: 'Itay Soldin',
     },
     {
       fieldName: 'Email',
       fieldValue: 'Itay@gmail.com',
     },
     {
       fieldName: 'Nationality',
       fieldValue: 'Israeli',
     },
     {
       fieldName: 'Languages',
       fieldValue: 'Hebrew, English',
     },
   ],
 };

  // education
 const education = {
   icon: '/',
   title: 'My Education',
   description:
     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid error unde omnis doloremque maiores dicta voluptatum, est, inventore veritatis sequi at repellendu.',
   items: [
     {
       institution: 'Afeka Academic College of Engineering',
       degree: 'BSc Computer Science',
       duration: '2022-presnet',
     },
     {
       institution: 'Ben Gurion University',
       degree: 'BA Poltical Science',
       duration: '2016-2019',
     },
   ],
 };

 //certifications
  const certifications = {
    icon: '/',
    title: 'Certifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid error unde omnis doloremque maiores dicta voluptatum, est, inventore veritatis sequi at repellendu.',
    items: [
      {
        provider: 'Amazon Web Services',
        name: 'AWS Certified Solutions Architect',
        duration: '2023',
      },
      {
        provider: 'Meta',
        name: 'Back-End Development',
        duration: '2023',
      },
    ],
  };

 // skills data
 const skills = {
   title: 'My Skills',
   description:
     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid error unde omnis doloremque maiores dicta voluptatum, est, inventore veritatis sequi at repellendu.',
   skillList: [
     {
       icon: <FaJava />,
       name: 'Java',
     },
     {
       icon: <FaSpring />,
       name: 'Spring Boot',
     },
     {
       icon: <FaJs />,
       name: 'JavaScript',
     },
     {
      icon: <FaReact />,
      name: 'React',
     },
     {
      icon: <FaNodeJs />,
      name: 'Node.js',
     },
     {
      icon: <FaPython />,
      name: 'Python',
     },
     {
      icon: <SiNextdotjs />, 
      name: 'Next.js',
     },
   ],
 };

 import { Tabs, TabsContent, TabsList, TabsTrigger} from "../../components/ui/tabs";

 import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../components/ui/tooltip";

 import { ScroollArea } from "../../components/ui/scroll-area";
 import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: 'easeIn',
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* about */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ScroollArea className="h-[400px]">

                </ScroollArea>
              </div>
            </TabsContent>

            {/* eduaction */}
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>

            {/* certifications */}
            <TabsContent value="certifications" className="w-full">
              certifications
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume