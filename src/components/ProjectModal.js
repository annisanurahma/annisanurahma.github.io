// ProjectModal.js
import { Modal, Carousel, Button } from "react-bootstrap";

export const ProjectModal = ({ show, onHide, project }) => {
  if (!project) return null;

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{project.description}</p>
        <Carousel>
          {project.images.map((imgUrl, idx) => (
            <Carousel.Item key={idx}>
              <img
                className="d-block w-100"
                src={imgUrl}
                alt={`${project.title} slide ${idx + 1}`}
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
