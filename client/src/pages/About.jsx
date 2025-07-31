import React from 'react'
import Skills from '../components/Skills';
import { Brain, Goal, Handshake, Lightbulb, SendHorizonal, Wrench } from 'lucide-react';

const About = () => {

  return (

    <div className=' flex flex-wrap'>

      <section className='border-4'>

        <p className="text-[#f5deb3] backdrop-blur-full shadow-lg p-10">
          Hello! I'm Lokesh, a passionate and self-driven Full Stack Web Developer specializing in the MERN (MongoDB, Express.js, React.js, Node.js) stack. I completed my training in full-stack development from iNeuron.ai (which is now PW Skills) under Hitesh Chaudhary Sir (a well known renowned programmer) and have been building real-world projects that demonstrate my ability to create responsive, performant, and scalable web applications. Though I'm a fresher in terms of professional experience, I bring a solid foundation in javaScript, a sharp eye for design and a constant hunger to learn, improve, and create. Over the last few months, I've built multiple full-stack<span>projects<a href='/projects'>(View Projects Page)</a></span> to using the MERN stack. I focus on writing clean, maintainable code, implementing secure backend APIs, and crafting seamless user experiences. <br /><br />
          <Lightbulb className='inline text-[#ffd700]' /><span className='text-[#fffff0]'>What Sets Me Apart - </span><br /><br />
          <Wrench className='inline text-[#ffd700]'/><span className='text-[#2c2c2c]'>End-to-End Development:</span> I build everything from scratch- databases, APIs, and frontends- ensuring full control and deep understanding of each layer.<br /><br />
          <Brain className='inline text-[#ffd700]'/> <span className='text-[#ffd700]'>Fast Learner:</span> I pick up new technologies quickly and adapt to project needs efficiently. I'm comfortable reading docs and debugging on my own.<br /><br />
          <Handshake className='inline text-[#ffd700]'/> <span className='text-[#ffd700]'>Team-Ready:</span> I may be a fresher, but when guided by strong mentors, I absorb fast, adapt quickly, and consistently improve the quality of my work.<br /><br />
          {/* I’ve worked in small team environments during bootcamps and personal projects — using Git, Trello, and VS Code Live Share to collaborate remotely and effectively. */}
          <Goal className='inline text-[#ffd700]'/><span className='text-[#ffd700]'>Career Goal:</span> I'm looking to kickstart my professional journey as a Full Stack Developer in a dynamic team where I can contribute to impactful projects, continue learning, and grow into a tech leader. My goal is to work on meaningful products that solve real problems while evolving my skills every single day.<br /><br />
          <SendHorizonal className='inline text-[#ffd700]'/> <span className='text-[#ffd700]'>Let's Connect:</span> If you're looking for a driven, GENWIN MERN developer who can grow with your team and deliver high-quality code from day one- I'd love to connect!
        </p>

      </section>

      <Skills />

    </div>
  )
}

export default About;
