import { projectsData } from "../data/projects";
import Reveal from "./Reveal";
function Project() {
  return (
    <section
      id="projects"
      className="py-20 px-6  text-black dark:text-white transition-all duration-500"
    >
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Title */}
        <Reveal>
          <h1 className="text-3xl md:text-4xl bg-linear-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent font-bold text-center">
            Projects
          </h1>
        </Reveal>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {projectsData.map((project, index) => (
            <div
              key={index}
              className=" bg-white/30 dark:bg-slate-900/30 backdrop-blur border border-white/40
                dark:border-slate-700/50 p-6 rounded-xl shadow-xl shadow-sky-200/30 dark:shadow-black/30 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <Reveal>
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition"
                  />
                </div>
              </Reveal>

              {/* Content */}
              <Reveal>
                <div className="p-4 space-y-3">
                  <h4 className="text-lg bg-linear-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent font-semibold">
                    {project.title}
                  </h4>

                  <p className="text-sm text-slate-900 dark:text-white">
                    {project.tools}
                  </p>

                  {/* Button */}
                  {project.link === "#" ? (
                    <button
                      disabled
                      className="bg-gray-400 cursor-not-allowed text-gray-800 border border-white/40 inline-block mt-2 px-4 py-2 rounded-3xl text-sm font-medium transition"  
                    >
                      Coming Soon
                    </button>
                  ) : (
                    <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-4 py-2 rounded-3xl text-sm font-medium transition bg-sky-500 hover:bg-sky-600 text-white dark:bg-sky-400 dark:hover:bg-sky-300 dark:text-slate-900"
                  >
                    Live Preview
                  </a>
                  )
                  }
                </div>
              </Reveal>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Project;