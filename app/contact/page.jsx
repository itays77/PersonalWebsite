"use client";

import { Button } from "../../components/ui/button";
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { FaEnvelope, FaMapMarkedAlt, FaLinkedin, FaFacebook } from "react-icons/fa";

const info = [
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'itaysoldin8@gmail.com',
  },
  {
    icon: <FaLinkedin />,
    title: 'LinkedIn',
    description: 'https://www.linkedin.com/in/itaysol/',
  },
  {
    icon: <FaFacebook />,
    title: 'Facebook',
    description: 'https://www.facebook.com/itay.soldin',
  },

  {
    icon: <FaMapMarkedAlt />,
    title: 'Address',
    description: 'Code Corner, herzliya',
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          {/* form */}
          <div className="flex-1 order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="fst">Full Stack</SelectItem>
                    <SelectItem value="bst">Back End</SelectItem>
                    <SelectItem value="wst">Web Development</SelectItem>
                    <SelectItem value="ist">Interview</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
              />
              {/* button */}
              <Button size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-start xl:items-center order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10 w-full">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-2xl xl:text-3xl">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact