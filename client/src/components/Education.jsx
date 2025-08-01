
import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Education = () => {

    const scrollRef = useRef(null);

    // const [isClient, setIsClient] = useState(false);

    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start end", "end end"]
    });

    const edList = [
        {
            course: "MCA-Master Of Computer Applications",
            school: "IGNOU",
            duration: "2025-2027",
            grade: "-"
        },
        {
            course: "BCA-BAchelor Of Computer Applications",
            school: "Maharaja Agrasen Himalayan Garhwal University",
            duration: "2019-2022",
            grade: "6.5"
        },
        {
            course: "Full Stack Web Development",
            school: "iNeuron",
            duration: "2022-2023",
            grade: "Certified"
        },
        {
            course: "Senior & Secondary School Certification",
            school: "CBSE - X & XII",
            duration: "2015 - 2017",
            grade: "90% & 70%"
        }
    ];

    // useEffect(() => {
    //     setIsClient(true);
    // },[]);

    return (

        <>
            <section className="relative bg-linear-to-br from-yellow-800 via-emerald-900 to-[#0f2027] rounded-xl shadow-xl border-2 border-black py-16 px-10 min-h-200vh[]" data-aos="fade-up">

                <h2 className="relative text-3xl sm:text-4xl font-bold text-[#ffd700] text-center mb-12">
                    Education
                </h2>

                <div className="relative space-y-10 max-w-3xl max-auto px-4">

                    <div className="absolute left-2 top-0 h-full flex flex-col items-center z-0">
                    <div className="w-3 h-3 rounded-full bg-lime-400 shadow-[0_0_15px_5px_#84cc16] z-10"></div>
                        <motion.div
                            ref={scrollRef}
                            style={{ scaleY: scrollYProgress, originY: 0 }}
                            className="w-[3px] h-full absolute bg-linear-to-b from-lime-400 via-lime-300 to-transparent"
                        />
                    </div>

                    {
                        edList.map((edu, i) => (

                            <motion.div
                                key={i}
                                initial={{ opacity: 0 , y: 50 }}
                                whileInView={{ opacity: 1 , y: 0 }}
                                transition={{ duration: 0.7, delay: i*0.3 }}
                                viewport={{ once: true }}
                                className="border-r-3 border-white pl-6 py-4 rounded-lg shadow-sm  grid grid-cols-1 justify-items-start"
                            >

                            <h3 className="text-xl text-[#ffe5b4] font-semibold">
                                {edu.course}
                            </h3>
                            <h4 className="text-stone-300 font-medium text-sm">
                                {edu.school}
                            </h4>
                            <h5 className="text-sm mt-2 text-stone-400">
                                {edu.duration}
                            </h5>

                            </motion.div>

                        ))
                    }

                </div>

            </section>
        </>
    )
};

export default Education;
