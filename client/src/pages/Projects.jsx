
import lcprev from "../assets/lokicartprev.PNG";
import { getRandomColor } from "../components/Utilities";

const projectList = [
    {
        title: "LokiCart-E-comm platform for Grocery Order",
        description: "MERN-powered app to order groceries with firebase-auth-login & stripe payment method with an Admin Dashboard which displays all the data analysis",
        tech: [ "TypeScript", "Scss", "Nodejs", "React", "Express", "MongoDB"],
        link: "https://lokicart-mern.netlify.app/",
        codeLink: "https://github.com/iloki-codes/Lokicart",
        img: {lcprev}
    },
    {
        title: "LokiBites-E-comm platform for Food Delievery",
        description: "MERN-powered app to order food at your loaction with paypal integration.",
        tech: ["React", "Nodejs", "Express", " MongoDB"],
        link: "https://lokibites.netlify.app/",
        codeLink: "https://github.com/iloki-codes/LokiBites",
        img: "https://d33wubrfki0l68.cloudfront.net/6883b73b14844058da2c9a2e/screenshot_2025-07-25-16-57-09-0000.webp"
    },
    {
        title: "This Portfolio Website",
        description: "A personal site build using MERN stack with animations & responsive design",
        tech: ["Vite/Reactjs", "Tailwind", "Framer Motion", "Expressjs"],
        link: "alt",
        codeLink: "https://github.com/iloki-codes/Loki-Portfolio",
        img: ""
    },
];

const Projects = () => {

  return (

    <section className="py-16" data-aos="fade-up">

        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Projects I've Built
        </h2>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 px-4">

            {
                projectList.map((project, i) => (
                    <div
                        key={i}
                        className="group bg-linear-to-br from-zinc-900 via-yellow-950 to-teal-900 rounded-2xl shadow-lg p-6 hover:shadow-3xl hover:scale-[1.02] transition-all h-auto w-auto"
                    >
                        <h3 className="text-xl font-semibold mb-2 text-blue-400 hover:cursor-pointer">
                            <a href={project.link}>{project.title}</a>
                        </h3>

                        <aside className="flex flex-row no-wrap gap-4">
                            <p className="text-gray-300 mt-3 text-sm">
                                {project.description}
                            </p>
                            <a href={project.link} className="hover:cursor-pointer h-[10vw] w-[15vw] rounded-xl">
                                <img src={project.img} className="rounded-xl" alt={project.img} loading="lazy" />
                            </a>
                        </aside>

                        <div className="flex flex-wrap gap-2 lg--mt-10 md-mt-0 text-xs">
                            {project.tech.map((t, i) => {
                                const color = getRandomColor();

                                return (
                                <span
                                    key={i}
                                    style={{ backgroundColor: color }}
                                    className="text-black font-bold px-2 py-1 rounded-full"
                                >
                                    {t}
                                </span>
                            )})}
                        </div>


                        <p className="text-gray-400 mb-2 mt-4 ml-2 text-sm hover:text-blue-400 hover:cursor-pointer">
                                    <a href={project.codeLink}>Github repo</a>
                                </p>
                    </div>
                ))
            }

        </div>

    </section>
  )
}

export default Projects;