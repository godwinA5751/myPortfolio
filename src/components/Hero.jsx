import Reveal from "./Reveal";
function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center 
                 bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
    >
      {/* 🎥 Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* 📝 Hero Content */}

      <div className="relative z-10 max-w-3xl text-center space-y-6 px-4">

        {/* Intro */}
        <Reveal>
          <h3 className="text-xl md:text-2xl text-white">
            Hi, I'm
          </h3>
        </Reveal>

        {/* Name */}
        <Reveal>
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
            Godwin Chinedu Augustine
          </h1>
        </Reveal>

        {/* Role */}
        <Reveal>
          <span className="bg-linear-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent text-xl md:text-2xl font-semibold">
            Frontend Developer
          </span>
        </Reveal>

        {/* Description */}
        <Reveal>
          <p className="text-white max-w-xl mx-auto">
            I create beautiful, responsive websites with modern technologies.
          </p>
        </Reveal>

        {/* Action Buttons */}
        <Reveal>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#projects"
              className="bg-sky-500 hover:bg-sky-600 dark:bg-sky-400 dark:hover:bg-sky-300 text-white dark:text-slate-900 px-6 py-3 rounded-3xl transition-all duration-300"
            >
              View My Work
            </a>

            <a
              href="/files/Godwin Chinedu augustine.pdf"
              download="Godwin_Augustine_Resume.pdf"
              className="bg-sky-500/10 dark-sky-400/10 backdrop-blur-md text-white dark:text-slate-400 border border-white/40 px-6 py-3 rounded-3xl hover:border-0 hover:bg-sky-500 dark:hover:bg-sky-300 dark:hover:text-slate-900 transition-all duration-300"
            >
              Download Resume
            </a>
          </div>
        </Reveal>

        {/* Social Links */}
        <Reveal>
          <div className="flex justify-center gap-6 pt-6">
            <a
              href="https://www.linkedin.com/in/godwin-augustine-b7729231b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/linkedin.svg"
                alt="LinkedIn"
                className="w-6 h-6 hover:scale-110 transition-transform"
              />
            </a>

            <a
              href="https://www.instagram.com/kinggodzy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/instagram.svg"
                alt="Instagram"
                className="w-6 h-6 hover:scale-110 transition-transform"
              />
            </a>

            <a
              href="https://github.com/godwinA5751"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/github.svg"
                alt="GitHub"
                className="w-6 h-6 hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;