import { Github, Linkedin, Mail } from "lucide-react";



const Footer = () => {

  const socials = [
    {
      icon: <Github />,
      link: "https://github.com/iloki-codes"
    },
    {
      icon: <Linkedin />,
      link: "https://www.linkedin.com/in/lokeshlokicodes/"
    },
    {
      icon: <Mail />,
      link: "mailto:lokesh.loki.codes@gmail.com"
    }
  ]

  return (
    <>
      <footer className="py-10 px-6 bg-zinc-950 text-center mt-16 border-t border-zinc-800">
        <div className="flex justify-center gap-6 mb-4">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition">
                {social.icon}
            </a>
          ))}
        </div>

        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Lokesh. All rights reserved.
        </p>
      </footer>
    </>
  )
};

export default Footer;
