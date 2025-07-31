
import { motion } from "framer-motion";

const Education = () => {

    const edList = [
        {
            course: "MCA-Master Of Computer Applications",
            school: "IGNOU",
            duration: "01/2025-01/2027",
            grade: "-"
        },
        {
            course: "BCA-BAchelor Of Computer Applications",
            school: "Maharaja Agrasen Himalayan Garhwal University",
            duration: "08/2019-05/2022",
            grade: "6.5"
        },
        {
            course: "Full Stack Web Development",
            school: "iNeuron",
            duration: "11/2022-07/2023",
            grade: "Certified"
        },
        {
            course: "Senior & Secondary School Certification",
            school: "CBSE - X & XII",
            duration: "2015 - 2017",
            grade: "90% & 70%"
        }
        // {
        //     course: "Secondary School Certification",
        //     school: "CBSE",
        //     duration: "2017",
        //     grade: "70%"
        // },
    ];

    return (

        <>
            <section className="bg-gray-200 border-2 border-black py-16" data-aos="fade-up">


                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                    Education
                </h2>

                <div className="space-y-10 max-w-3xl max-auto px-4">

                    {
                        edList.map((edu, i) => (

                            <motion.div
                                key={i}
                                initial={{ opacity:0 , y: 50 }}
                                whileInView={{ opacity:1 , y: 0 }}
                                transition={{ duration: 0.6, delay: i*0.2 }}
                                viewport={{ once:true }}
                                className="border-l-4 border-purple-600 pl-6 py-4 bg-gray-50 dark:bg-[#1a1a1a] rounded-lg shadow-sm"
                            >

                            <li className="text-xl font-semibold">
                                {edu.course}
                            </li>
                            <li className="text-purple-600 font-medium text-sm">
                                {edu.school}
                            </li>
                            <li className="text-sm mt-2 text-blue-400">
                                {edu.duration}
                            </li>

                            </motion.div>

                        ))
                    }

                </div>

            </section>
        </>
    )
};

export default Education;
