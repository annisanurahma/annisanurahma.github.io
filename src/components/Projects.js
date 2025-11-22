// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/Minymamessaging-Cover.png";
// import projImg2 from "../assets/img/Highwaypolice-cover.png";
// import projImg3 from "../assets/img/mbil-cover.png";
// import projImg4 from "../assets/img/HidupSehatApp-Cover.png";
// import projImg5 from "../assets/img/OncologyPHR_Cover.png";
// import projImg6 from "../assets/img/GrooveAppDesign.png";
// import projImg7 from "../assets/img/pesonacoffe-cover.png";
// import projImg8 from "../assets/img/webilu-cover.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

// export const Projects = () => {

//   const projects = [
//     {
//       title: "Messaging Service for Minyma",
//       description: "Backend Developer",
//       imgUrl: projImg1,
//       githubUrl: "https://mynima-messaging-stg-aad7266df561.herokuapp.com/swagger-ui/index.html#/",
//       category: "webdev"
//     },
//     {
//       title: "Police Highway Game",
//       description: "Unity Project",
//       imgUrl: projImg2,
//       githubUrl: "https://drive.google.com/drive/folders/1phNrrueT2gQyKv6u9wM5Zur8SKFTRQ3c",
//       category: "webdev"
//     },
//     {
//       title: "MBIL App",
//       description: "Mobile App Development",
//       imgUrl: projImg3,
//       githubUrl: "https://drive.google.com/drive/folders/1Z-LOMYWQ6v_lDe6K4izOSJxdT-VP3mQ2?usp=sharing",
//       category: "webdev"
//     },
//     {
//       title: "Design Website Oncology",
//       description: "UI/UX Design",
//       imgUrl: projImg5,
//       githubUrl: "https://www.figma.com/design/HKxi3Pyli3fSEaUzzpnKYr/Website-Oncology?node-id=253-2032&t=B7Jit23mrzorfjI3-1",
//       category: "design"
//     },
//     {
//       title: "Design App HidupSehat",
//       description: "UI/UX Design",
//       imgUrl: projImg4,
//       githubUrl: "https://www.figma.com/design/ChYFoWq2Pgyh5Z3ISrT0J0/HidupSehat?node-id=0-1&t=NnunHCsL7TkCD73o-1",
//       category: "design"
//     },
//     {
//       title: "Design App Groove",
//       description: "UI/UX Design",
//       imgUrl: projImg6,
//       githubUrl: "https://www.figma.com/design/pZJcgzUGSSCWqIz4Zzk8XY/Kelompok-3---Projek-Akhir---Groove?node-id=0-1&t=cAMWQuAnbMd58Gfj-1",
//       category: "design"
//     },
//     {
//       title: "Pesona Coffe Website",
//       description: "Website",
//       imgUrl: projImg7,
//       githubUrl: "https://drive.google.com/drive/folders/1FJolM66xKUU_E13bq76uVIw86-ZJ-J85?usp=sharing",
//       category: "webdev"
//     },
//     {
//       title: "Design Web Webilu",
//       description: "website react sederhana",
//       imgUrl: projImg8,
//       githubUrl: "https://uas-webilu.vercel.app/home",
//       category: "webdev"
//     },
//   ];

//   // Fungsi filter project by category
//   const filterProjects = (cat) => projects.filter(project => project.category === cat);

//   return (
//     <section className="project" id="projects">
//       <Container>
//         <Row>
//           <Col size={12}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//                   <h2>Projects</h2>
//                   <p>Click project card to visit the repository.</p>
//                   <Tab.Container id="projects-tabs" defaultActiveKey="all">
//                     <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
//                       <Nav.Item>
//                         <Nav.Link eventKey="all">All Projects</Nav.Link>
//                       </Nav.Item>
//                       <Nav.Item>
//                         <Nav.Link eventKey="webdev">Web Development</Nav.Link>
//                       </Nav.Item>
//                       <Nav.Item>
//                         <Nav.Link eventKey="design">Design</Nav.Link>
//                       </Nav.Item>
//                     </Nav>
//                     <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
//                       <Tab.Pane eventKey="all">
//                         <Row>
//                           {projects.map((project, index) => (
//                             <ProjectCard key={index} {...project} />
//                           ))}
//                         </Row>
//                       </Tab.Pane>

//                       <Tab.Pane eventKey="webdev">
//                         <Row>
//                           {filterProjects("webdev").map((project, index) => (
//                             <ProjectCard key={index} {...project} />
//                           ))}
//                         </Row>
//                       </Tab.Pane>

//                       <Tab.Pane eventKey="design">
//                         <Row>
//                           {filterProjects("design").map((project, index) => (
//                             <ProjectCard key={index} {...project} />
//                           ))}
//                         </Row>
//                       </Tab.Pane>
//                     </Tab.Content>
//                   </Tab.Container>
//                 </div>
//               }
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//       <img className="background-image-right" src={colorSharp2} alt="" />
//     </section>
//   );
// };

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Minymamessaging-Cover.png";
import projImg2 from "../assets/img/Highwaypolice-cover.png";
import projImg3 from "../assets/img/mbil-cover.png";
import projImg4 from "../assets/img/HidupSehatApp-Cover.png";
import projImg5 from "../assets/img/OncologyPHR_Cover.png";
import projImg6 from "../assets/img/GrooveAppDesign.png";
import projImg7 from "../assets/img/pesonacoffe-cover.png";
import projImg8 from "../assets/img/webilu-cover.png";
import projImg9 from "../assets/img/image.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "DIGITall – Internal Financial & Performance Management System",
      description: "Laravel, MySQL, JavaScript",
      imgUrl: projImg9, // ganti dengan gambar cover khusus jika ada
      githubUrl: "https://drive.google.com/drive/folders/11z3WUlqS_MizrOyVBmwq4kjugGzF9_8v?usp=sharing",
      category: "webdev"
    },
    {
      title: "Messaging Service for Minyma",
      description: "Backend Developer",
      imgUrl: projImg1,
      githubUrl: "https://mynima-messaging-stg-aad7266df561.herokuapp.com/swagger-ui/index.html#/",
      category: "webdev"
    },
    {
      title: "Police Highway Game",
      description: "Unity Project",
      imgUrl: projImg2,
      githubUrl: "https://drive.google.com/drive/folders/1phNrrueT2gQyKv6u9wM5Zur8SKFTRQ3c",
      category: "webdev"
    },
    {
      title: "MBIL App",
      description: "Mobile App Development",
      imgUrl: projImg3,
      githubUrl: "https://drive.google.com/drive/folders/1Z-LOMYWQ6v_lDe6K4izOSJxdT-VP3mQ2?usp=sharing",
      category: "webdev"
    },
    {
      title: "Design Website Oncology",
      description: "UI/UX Design",
      imgUrl: projImg5,
      githubUrl: "https://www.figma.com/design/HKxi3Pyli3fSEaUzzpnKYr/Website-Oncology?node-id=253-2032&t=B7Jit23mrzorfjI3-1",
      category: "design"
    },
    {
      title: "Design App HidupSehat",
      description: "UI/UX Design",
      imgUrl: projImg4,
      githubUrl: "https://www.figma.com/design/ChYFoWq2Pgyh5Z3ISrT0J0/HidupSehat?node-id=0-1&t=NnunHCsL7TkCD73o-1",
      category: "design"
    },
    {
      title: "Design App Groove",
      description: "UI/UX Design",
      imgUrl: projImg6,
      githubUrl: "https://www.figma.com/design/pZJcgzUGSSCWqIz4Zzk8XY/Kelompok-3---Projek-Akhir---Groove?node-id=0-1&t=cAMWQuAnbMd58Gfj-1",
      category: "design"
    },
    {
      title: "Pesona Coffe Website",
      description: "Website",
      imgUrl: projImg7,
      githubUrl: "https://drive.google.com/drive/folders/1FJolM66xKUU_E13bq76uVIw86-ZJ-J85?usp=sharing",
      category: "webdev"
    },
    {
      title: "Design Web Webilu",
      description: "Website React Sederhana",
      imgUrl: projImg8,
      githubUrl: "https://uas-webilu.vercel.app/home",
      category: "webdev"
    },
  ];

  // Fungsi filter project by category
  const filterProjects = (cat) => projects.filter(project => project.category === cat);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Click project card to visit the repository.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="all">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="all">All Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="webdev">Web Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="design">Design</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="all">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="webdev">
                        <Row>
                          {filterProjects("webdev").map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="design">
                        <Row>
                          {filterProjects("design").map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
