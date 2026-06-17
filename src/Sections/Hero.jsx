import Button from "../components/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";

gsap.registerPlugin(useGSAP);

function Hero() {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
      },
    );
  }, []);
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* LEFT: HERO CONTENT */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h3 className="text-blue-400">I'm Abrham Biresaw</h3>

              <h3>Full Stack Developer</h3>
            </div>

            <p className="text-white-50 md:text-xl mt-6 leading-relaxed">
              I'm Abrham Biresaw, a passionate Full Stack Developer based in
              Ethiopia. I specialize in building modern, responsive, and
              scalable web applications using the MERN stack (MongoDB,
              Express.js, React, Node.js), along with JavaScript (ES6+), HTML5,
              CSS3, and Tailwind CSS. I build RESTful APIs, implement
              authentication using JWT, and use Git & GitHub for version
              control. I enjoy transforming ideas into real-world solutions with
              clean code, intuitive design, and high-performance user
              experiences. Constantly learning and exploring new technologies, I
              strive to create applications that are both functional and
              impactful.
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="See my Work"
            />
          </div>
        </header>

        {/* RIGHT: photo */}

        <figure className="flex justify-center items-center">
          <img
            src="/images/profile.webp"
            alt="Abrham Biresaw"
            className="w-[350px] md:w-[400px] rounded-3xl object-cover -translate-x-10"
          />
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
}

export default Hero;
