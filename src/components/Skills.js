import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiSpringboot, 
  SiReact,
  SiMysql,
  SiPostgresql,
  SiPython
} from "react-icons/si";

import { DiJava, DiCode } from "react-icons/di"; // DiCode dipakai untuk C++

export const Skills = () => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const skills = [
    { icon: <DiJava size={60} color="#007396" />, name: "Java" },
    { icon: <SiHtml5 size={60} color="#E34F26" />, name: "HTML" },
    { icon: <SiCss3 size={60} color="#1572B6" />, name: "CSS" },
    { icon: <SiJavascript size={60} color="#F7DF1E" />, name: "JavaScript" },
    { icon: <SiSpringboot size={60} color="#6DB33F" />, name: "Springboot" },
    { icon: <SiReact size={60} color="#61DAFB" />, name: "React.js" },
    { icon: <SiMysql size={60} color="#4479A1" />, name: "MySQL" },
    { icon: <SiPostgresql size={60} color="#336791" />, name: "PostgreSQL" },
    { icon: <SiPython size={60} color="#3776AB" />, name: "Python" },
    { icon: <DiCode size={60} color="#00599C" />, name: "C++" }, // Ganti icon C++
  ];

  return (
    <section
      id="skills"
      style={{
        backgroundColor: "#060a17",
        padding: "50px 20px",
        color: "#e0e0ff",
        textAlign: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2 style={{ fontWeight: "700", marginBottom: 20, fontSize: 44 }}>Skills</h2>
      <p style={{ maxWidth: 600, margin: "0 auto 40px", color: "#b0b3cc", fontSize: 16 }}>
        Key programming languages, frameworks, and databases I use in.
      </p>

      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        removeArrowOnDeviceType={["mobile"]}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
      >
        {skills.map((skill, idx) => (
          <div
            key={idx}
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: 16,
              padding: 25,
              margin: "0 12px",
              boxShadow: "0 0 12px rgba(100, 100, 255, 0.5)",
              cursor: "default",
              color: "#f0eefe",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: 200,  // dinaikkan dari 160 jadi 200 biar muat icon+text dengan lega
              minWidth: 250, 
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <div style={{ marginBottom: 15 }}>{skill.icon}</div>
            <h4 style={{ fontWeight: "600", fontSize: 20 }}>{skill.name}</h4>
          </div>
        ))}
      </Carousel>
    </section>
  );
};
