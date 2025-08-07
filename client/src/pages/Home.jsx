import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Education from "../components/Education";
import Skills from "../components/Skills";
import pfp from "../assets/loki-pfp.png";
import resume from "../assets/Resume.pdf";

const Home = () => {

    return (

        <section className="flex flex-col justify-center items-center text-center min-h-screen" data-aos="fade-up">

            <img src={pfp} alt={pfp} className="mt-7 h-50 w-50 rounded-full outline-3 outline-white outline-offset-10 outline-double bg-linear-to-r from-transparent via-transparent to-lime-200" />
            <br />
            <p className="max-w-xl text-cyan-500 text-lg sm:text-xl font-bold mb-8">
                Hey, This is <span className="text-[#ffeb54] text-3xl font-bold">Lokesh</span>
            </p>                                                         {/*  &#128075 */}
            <p className="max-w-xl text-lime-100 font-bold text-lg sm:text-xl mb-8">
                I'm a MERN Stack fresher & I develop beautiful and responsive full-stack web experiences. Eager to learn, grow and collaborate. Open to networking, mentorship, and exciting front-end/full stack opportunitites.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

                <a
                    href={resume}
                    download
                    className="bg-linear-to-br from-lime-200 via-teal-700 to-teal-900 text-white font-bold px-6 py-3 rounded-xl shadow-xl hover:bg-blue-600 hover:border-2 hover:text-[#ffd700] hover:cursor-pointer hover:scale-[1.05]"
                >
                    Download CV
                </a>

                <Link
                    to="/projects"
                    className="flex items-center gap-2 border border-white px-6 py-3 rounded-xl bg-linear-to-r from-teal-500 via-teal-700 to-lime-200 text-white hover:bg-white hover:text-[#ffd700] hover:font-bold transition hover:border-[#ffd700]"
                >
                    View Projects <ArrowRight size={18} />
                </Link>

            </div>

            <div className="flex flex-row flex-wrap justify-around gap-30 mt-20 mb-30 flex-stretch">
                <Education />
                <Skills />
            </div>

        </section>
    )
};

export default Home;
