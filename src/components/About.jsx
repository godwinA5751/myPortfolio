import MultiRowCarousel from "./MultiRowCarousel";
import Reveal from "./Reveal";
function About() {

  return (
    <section
      id="about"
      className="py-20 px-6"
    >
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Title */}
        <Reveal>
          <h1 className="text-3xl md:text-4xl bg-linear-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent font-bold text-center">
            About Me
          </h1>
        </Reveal>

        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Image + Name */}
          <Reveal>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
                <img
                  src="/images/IMG-20250705-WA0001.jpg"
                  alt="Godwin Augustine"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl bg-linear-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent font-semibold">
                Godwin Chinedu Augustine (Hackix)
              </h4>
            </div>
          </Reveal>

          {/* Info */}
          <Reveal>
            <div className="bg-white/30 dark:bg-slate-900/30 backdrop-blur-md border border-white/40 
                dark:border-slate-700/50 p-6 rounded-xl shadow-xl shadow-sky-200/30 dark:shadow-black/30 space-y-4 text-slate-900 dark:text-white">
              <p>
                I'm a passionate web developer with a keen interest in creating
                dynamic and responsive web applications. I love coding and always
                strive to learn new technologies.
              </p>
              <p>
                My journey in tech has been exciting, and I enjoy sharing my
                experiences and projects with others.
              </p>
              <p>
                Feel free to explore my work and reach out if you have any
                collaboration ideas!
              </p>
            </div>
          </Reveal>
        </div>

        {/* Skills Section */}
        <Reveal>
          <div className="space-y-6">

            <h4 className="text-2xl bg-linear-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent font-semibold text-center">
              Skills
            </h4>

            <MultiRowCarousel />
          </div>
        </Reveal>

      </div>
    </section>
  );
}

export default About;