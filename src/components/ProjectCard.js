import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {
  const handleClick = () => {
    if (githubUrl) {
      window.open(githubUrl, '_blank');
    }
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div
        className="proj-imgbx"
        onClick={handleClick}
        style={{
          cursor: githubUrl ? "pointer" : "default",
          borderRadius: 15,
          overflow: "hidden",
          boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      >
        <img src={imgUrl} alt={title} style={{ width: "100%", height: "220px", objectFit: "cover" }} />
        <div
          className="proj-txtx"
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            color: "#fff",
            padding: "10px 15px",
            textAlign: "center",
          }}
        >
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
