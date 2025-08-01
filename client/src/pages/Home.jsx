import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Education from "../components/Education";
import Skills from "../components/Skills";
import pfp from "../assets/pfp.jpg";

const Home = () => {

    return (

        <section className="flex flex-col justify-center items-center text-center min-h-screen" data-aos="fade-up">

            <img src={pfp} alt={pfp} className="h-30 w-30 rounded-full" />
            <br />
            <p className="max-w-xl text-[#001f54] text-lg sm:text-xl font-bold mb-8">
                Hey, This is <span className="text-[#ffeb54] text-3xl font-bold">Lokesh</span>
            </p>                                                         {/*  &#128075 */}
            <p className="max-w-xl text-[#3a3a3a] font-bold text-lg sm:text-xl mb-8">
                I'm a MERN Stack fresher & I develop beautiful and responsive full-stack web experiences. Eager to learn, grow and collaborate. Open to networking, mentorship, and exciting front-end/full stack opportunitites.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

                <a
                    href="/https://docs.google.com/document/d/1lM4-_OEnFxlgYHFuV8EHbO_NnrTBVBVIx8GvrzcVZYQ/edit?usp=drivesdk"
                    download
                    className="bg-linear-to-br from-teal-500 via-teal-700 to-teal-900 text-white font-bold px-6 py-3 rounded-xl shadow-xl hover:bg-blue-600 transition-all"
                >
                    Download CV
                </a>

                <Link
                    to="/projects"
                    className="flex items-center gap-2 border border-white px-6 py-3 rounded-xl bg-linear-to-r from-teal-500 via-teal-700 to-teal-900 text-white hover:bg-white hover:text-black transition"
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
