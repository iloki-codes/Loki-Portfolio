import { motion } from "framer-motion";

const skills = [
    {
        name: "React.js",
        value: "90",
        color: "bg-blue-400"
    },
    {
        name: "Node.js",
        value: "80",
        color: "bg-green-200"
    },
    {
        name: "Express.js",
        value: "80",
        color: "bg-black"
    },
    {
        name: "MongoDB",
        value: "75",
        color: "bg-green-600"
    },
    {
        name: "Tailwind CSS",
        value: "80",
        color: "bg-cyan-500"
    },
    {
        name: "TypeScript",
        value: "70",
        color: "bg-red-400"
    },
    {
        name: "Redux-Toolkit",
        value: "80",
        color: "bg-white"
    },
    {
        name: "RESTful APIs",
        value: "80",
        color: "bg-purple-500"
    },
    {
        name: "HTML5",
        value: "90",
        color: "bg-amber-800"
    },
    {
        name: "CSS3",
        value: "70",
        color: "bg-yellow-500"
    },{
        name: "Git",
        value: "70",
        color: "bg-gray-900"
    },
];

const Skills = () => {


    return (

        <>

            <div className="">

                <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-linear-to-br from-lime-200 via-[#0f2027] to-yellow-800 text-[#ffeb54] rounded-xl shadow-xl">

                    <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
                        Skills & Expertise
                    </h2>

                    <div className="space-y-6 max-w-3xl mx-auto">
                        {
                            skills.map((skill, i) => (
                                <div key={i} className="space-y-1">
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-[#ffe5b4]">{skill.name}</span>
                                        <span className="text-sm text-cyan-200">{skill.value}%</span>
                                    </div>

                                    <div className="w-full h-3 bg-gray-600 rounded-full">
                                        <motion.div
                                            className={`h-full ${skill.color} rounded-full`}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.value}%` }}
                                            transition={{ duration: 1, delay: i*0.1 }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </section>

            </div>

        </>

    )

};

export default Skills;
