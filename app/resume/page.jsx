"use client";

import { 
  FaJava,
  FaSpring,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,


 } from "react-icons/fa"

 import { SiSpringboot } from 'react-icons/si';


 import { SiTailwindcss, SiNextdotjs } from "react-icons/si"
 import { ScrollArea } from "../../components/ui/scroll-area";
 import {
   Tabs,
   TabsContent,
   TabsList,
   TabsTrigger,
 } from '../../components/ui/tabs';

 import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
 } from '../../components/ui/tooltip';

 import { motion } from 'framer-motion';


 // about data
 const about = {
   title: 'About me',
   description: 'Junior software developer passionate about crafting efficient solutions through code, and learning new technologies. ',
   info: [
     {
       fieldName: 'Name',
       fieldValue: 'Itay Soldin',
     },
     {
       fieldName: 'Email',
       fieldValue: 'Itaysoldin8@gmail.com',
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
     'Diversity in education is key to a well-rounded individual. ',
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
    title: 'My Certifications',
    description:
      'Continuously expanding knowledge through professional certifications',
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
   description: 'Versatile tech stack.',
   skillList: [
     {
       icon: <FaJava />,
       name: 'Java',
     },
     {
       icon: <SiSpringboot />,
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
       icon: <SiNextdotjs />,
       name: 'Next.js',
     },
     {
       icon: <FaPython />,
       name: 'Python',
     },
   ],
 };

 
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
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-2-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-2-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* eduaction */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                          flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* certifications */}
            <TabsContent value="certifications" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{certifications.name}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {certifications.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {certifications.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                          flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.name}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.provider}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume