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
      <footer className="py-10 px-6 bg-linear-to-br from-stone-800 via-zinc-800 to-yellow-950 text-center mt-16 border-t border-zinc-800">
        <div className="flex justify-center gap-6 mb-4">
          {socials.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#ffd700] transition">
                {item.icon}
            </a>
          ))}
        </div>

        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Lokesh. All rights reserved.
        </p>
      </footer>
    </>
  )
};

export default Footer;
