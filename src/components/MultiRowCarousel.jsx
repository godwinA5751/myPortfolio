
import "./carousel.css";

const skills = [
    { name: "HTML5", icon: "/images/html.svg" },
    { name: "CSS3", icon: "/images/css3.svg" },
    { name: "JavaScript", icon: "/images/javascript.svg" },
    { name: "ReactJs", icon: "/images/Reactjs.png" },
    { name: "Tailwind", icon: "/images/tailwind-css (1).svg" },
    { name: "NextJs", icon: "/images/nextjs.png" },
    { name: "SASS", icon: "/images/sass.png" },
  ];

const Row = ({ direction = "left", speed = "slow" }) => {
  return (
    <div className="carousel-row">
      <div className={`carousel-track ${direction} ${speed}`}>
        {[...skills, ...skills].map((skill, index) => (
          <div className="card  bg-white/30 dark:bg-slate-900/30 backdrop-blur border border-white/40 dark:border-slate-700/50 
                p-6 rounded-xl shadow-xl shadow-sky-200/30 dark:shadow-black/30" key={index}>
            <img src={skill.icon} alt={skill.name} className="w-15 h-15 object-contain rounded-full" />
            <span className="text-sm font-medium text-slate-900 dark:text-white">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function MultiRowCarousel() {
  return (
    <div className="carousel-container">
      <Row direction="left" speed="slow" />
      <Row direction="right" speed="medium" />
      {/* <Row direction="left" speed="fast" /> */}
    </div>
  );
}