import { useEffect, useState } from "react";

const role = [
  "Front-End Developer",
  "UI/UX Engineer",
  "React Developer",
  "Interface Designer"
]

export default function TypingEffect() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(120);

  useEffect(() => {
    const currentRole = role[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));
        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % role.length);
        }
      }
      setSpeed(isDeleting ? 60 : 120);
    }, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, speed]);

  return (
    <span className="bg-linear-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent text-xl md:text-2xl font-semibold">
      <span>{text}</span><span>|</span>
    </span>
  )
}