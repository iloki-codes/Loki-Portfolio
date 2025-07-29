

const blogs = [
  {
    title: "CSS~Flexbox",
    desc: "Wrote a detailed article on CSS' Flexbox property",
    link: "https://medium.com/@loki_codes/css-flexbox-163133aa4f07"
  },
  {
    title: "Media Queries",
    desc: "Wrote a article on CSS' media queries for responsive website designs",
    link: "https://medium.com/@loki_codes/media-queries-css-a040aabf3da5"
  }
]
const Blog = () => {

  return (

    <>
      <section className="py-16 px-4" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Blog & Articles</h2>

        <div className="max-w-4xl mx-auto grid gap-8">
          {blogs.map((post, index) => (
            <a
              key={index}
              href={post.link}
              className="block bg-zinc-900 hover:bg-zinc-800 transition-all p-6 rounded-xl shadow"
            >
              <h3 className="text-2xl font-semibold text-blue-400mb-2">{post.title}</h3>
              {/* <p className="text-gray-300 text-sm mb-2">{post.date}</p> */}
              <p className="text-gray-400 text-base">{post.desc}</p>
            </a>
          ))}
        </div>
      </section>
    </>
  )
};

export default Blog;
