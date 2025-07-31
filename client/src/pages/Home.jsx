import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Education from "../components/Education";
import Skills from "../components/Skills";
import pfp from "../assets/pfp.jpg";

const Home = () => {

    return (
        <section className="flex flex-col justify-center items-center text-center min-h-screen"
            data-aos="fade-up">

            <img src={pfp} alt={pfp} className="h-30 w-30 rounded-full" />

            <h1 className="max-w-xl text-gray-300 text-lg sm:text-xl mb-8">
                Hey, This is <span className="text-blue-400">Lokesh</span>
            </h1>                                                         {/*  &#128075 */}
            <p className="max-w-xl text-gray-300 text-lg sm:text-xl mb-8">
                I develop beautiful and responsive full-stack web experiences using the MERN stack.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <a
                    href="/https://docs.google.com/document/d/1lM4-_OEnFxlgYHFuV8EHbO_NnrTBVBVIx8GvrzcVZYQ/edit?usp=drivesdk"
                    download
                    className="bg-blue-500 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-600 transition"
                >
                    Download Resume
                </a>

                <Link
                    to="/projects"
                    className="flex items-center gap-2 border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
                >
                    View Projects <ArrowRight size={18} />
                </Link>

            </div>

            <div className="flex flex-row flex-stretch">

                <Education />
                <aside className="bg-white">
                    <Skills />
                </aside>
            </div>

        </section>
    )
};

export default Home;
