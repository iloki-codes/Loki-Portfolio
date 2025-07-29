


const projectList = [
    {
        title: "LokiCart-E-comm platform for Grocery Order",
        description: "MERN-powered app to order groceries with firebase-auth-login & stripe payment method with an Admin Dashboard which displays all the data analysis",
        tech: [ "TypeScript", "Scss", "Nodejs", "Vite/React", "Express", "MongoDB"],
        link: "https://lokicart-mern.netlify.app/",
        codeLink: "https://github.com/iloki-codes/Lokicart"
    },
    {
        title: "LokiBites-E-comm platform for Food Delievery",
        description: "MERN-powered app to order food at your loaction with paypal integration.",
        tech: ["React", "Nodejs", "Express", " MongoDB"],
        link: "https://lokibites.netlify.app/",
        codeLink: "https://github.com/iloki-codes/LokiBites"
    },
    {
        title: "This Portfolio Website",
        description: "A personal site build using MERN stack with animations & responsive design",
        tech: ["Vite/Reactjs", "Tailwind", "Framer Motion", "Expressjs"],
        link: "alt",
        codeLink: "https://github.com/iloki-codes/Loki-Portfolio"
    },
];

const Projects = () => {

  return (

    <section className="py-16" data-aos="fade-up">

        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Projects I've Built
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">

            {
                projectList.map((project, index) => (
                    <a
                        key={index}
                        heref={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-zinc-900 rounded-2xl shadow-lg p-6 hover:shadow-xl hover:scale-[1.02] transition-all"
                    >
                        <h3 className="text-xl font-semibold mb-2 text-blue-400">
                            {project.title}
                        </h3>
                        <p className="text-gray-300 mb-4 text-sm">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 text-xs">
                            {project.tech.map((t, i) => (
                                <span
                                    key={i}
                                    className="ng-blue-800 text-whitepx-2 py-1 rounded-full"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </a>
                ))
            }
        </div>

    </section>
  )
}

export default Projects;