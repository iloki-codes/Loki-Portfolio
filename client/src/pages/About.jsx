import React from 'react'
import Skills from '../components/Skills';
import { Brain, Goal, Handshake, Lightbulb, SendHorizonal, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import emerbg from "../assets/emerbg.jpg";

const About = () => {

  return (

    <div className='relative flex flex-row justify-betweeb=n flex-wrap gap-10'>

      {/* <img src={emerbg} className='-z-10 absolute inset-0 w-1/2 h-full object-cover mt-10' /> */}

      <section className='p-[50px] h-auto w-1/2 bg-linear-to-b from-emerald-950 via-yellow-800 to-emerald-900 relative backdrop-blur-md mt-10 border-1 flex flex-col items-center shadow-lg rounded-xl '>

        <h2 className='text-[#ffd700]'>About Me</h2><br />

        <p className="text-[#f5deb3]">
          Hello! I'm Lokesh, a passionate and self-driven Full Stack Web Developer specializing in the MERN (MongoDB, Express.js, React.js, Node.js) stack. I completed my training in full-stack development from iNeuron.ai (which is now PW Skills) under Hitesh Chaudhary Sir (a well known renowned programmer) and have been building real-world projects that demonstrate my ability to create responsive, performant, and scalable web applications. Though I'm a fresher in terms of professional experience, I bring a solid foundation in javaScript, a sharp eye for design and a constant hunger to learn, improve, and create. Over the last few months, I've built multiple full-stack <Link to="/projects" className='pro text-white relative inline-block hover:text-[#001f54] hover:cursor-pointer hover:[&>span]:block'> projects <span className='hidden absolute bg-[#ffd700]/90 bottom-5 w-[8rem] text-emerald-800 rounded-full text-sm'>View Projects Page</span></Link> to using the MERN stack. I focus on writing clean, maintainable code, implementing secure backend APIs, and crafting seamless user experiences. <br /><br />
          <Lightbulb className='inline text-[#ffd700]' /><span className='text-[#fffff0]'>What Sets Me Apart - </span><br /><br />
          <Wrench className='inline text-[#ffd700]'/><span className='text-[#ffd700]'>End-to-End Development:</span> I build everything from scratch- databases, APIs, and frontends- ensuring full control and deep understanding of each layer.<br /><br />
          <Brain className='inline text-[#ffd700]'/> <span className='text-[#ffd700]'>Fast Learner:</span> I pick up new technologies quickly and adapt to project needs efficiently. I'm comfortable reading docs and debugging on my own.<br /><br />
          <Handshake className='inline text-[#ffd700]'/> <span className='text-[#ffd700]'>Team-Ready:</span> I may be a fresher, but when guided by strong mentors, I absorb fast, adapt quickly, and consistently improve the quality of my work.<br /><br />
          {/* I’ve worked in small team environments during bootcamps and personal projects — using Git, Trello, and VS Code Live Share to collaborate remotely and effectively. */}
          <Goal className='inline text-[#ffd700]'/><span className='text-[#ffd700]'>Career Goal:</span> I'm looking to kickstart my professional journey as a Full Stack Developer in a dynamic team where I can contribute to impactful projects, continue learning, and grow into a tech leader. My goal is to work on meaningful products that solve real problems while evolving my skills every single day.<br /><br />
          <SendHorizonal className='inline text-[#ffd700]'/> <span className='text-[#ffd700]'>Let's Connect:</span> If you're looking for a driven, GENWIN MERN developer who can grow with your team and deliver high-quality code from day one- I'd love to connect!
        </p>

      </section>

      <div className="relative mt-10">
        <Skills />
      </div>

    </div>
  )
}

export default About;
