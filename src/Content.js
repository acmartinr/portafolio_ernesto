// import images
import Hero_person from "./assets/images/Hero/person.png";

import ae from "./assets/images/Skills/ae.png";
import ai from "./assets/images/Skills/ai.png";
import aid from "./assets/images/Skills/aid.png";
import alr from "./assets/images/Skills/alr.png";
import ame from "./assets/images/Skills/ame.png";
import apr from "./assets/images/Skills/apr.png";
import aps from "./assets/images/Skills/aps.png";
import axd from "./assets/images/Skills/axd.png";
import c4d from "./assets/images/Skills/c4d.png";

import brand from "./assets/images/Services/branddesign.png";
import models from "./assets/images/Services/3dmodel.png";
import edit from "./assets/images/Services/editdesign.png";
import ilustration from "./assets/images/Services/ilustration.png";
import photoedition from "./assets/images/Services/photoedition.png";
import uidesign from "./assets/images/Services/uidesign.png";

import project1 from "./assets/images/Skills/ae.png";
import project2 from "./assets/images/Skills/ae.png";
import project3 from "./assets/images/Skills/ae.png";
import person_project from "./assets/images/Projects/projexts_person.png";

import esterio from "./assets/images/Testimonials/esterio.png";
import martin from "./assets/images/Testimonials/martin.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

var cv = "http://localhost:5173/src/assets/cv/cv.pdf";
//var cv = "https://portafolio-ernesto.vercel.app/src/assets/cv/cv.pdf"; //prod

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Diseñador Gráfico",
    firstName: "Ernesto",
    LastName: "García",
    btnText: "Contáctame",
    image: Hero_person,
    hero_content: [
      {
        count: "4+",
        text: "años de experiencia",
      },
      {
        count: "20+",
        text: "proyectos trabajados en mi carrera",
      },
    ],
  },
  skills: {
    title: "Habilidades",
    subtitle: "Mi top de habilidades",
    skills_content: [
      {
        name: "Adobe Illustrator",
        para: "Dibujo vectorial y diseño de marca",
        logo: ai,
      },
      {
        name: "Adobe Photoshop",
        para: "Edición fotográfica e ilustración",
        logo: aps,
      },
      {
        name: "Adobe Lightroom",
        para: "Edición fotográfica",
        logo: alr,
      },
      {
        name: "Adobe InDesign",
        para: "Diseño Editorial (web e impresión)",
        logo: aid,
      },
      {
        name: "Adobe Xd",
        para: "Diseño UI / UX",
        logo: axd,
      },
      {
        name: "Adobe After Effects",
        para: "Animación y edición de video",
        logo: ae,
      },
      {
        name: "Adobe Premiere",
        para: "Edición de video",
        logo: apr,
      },
      {
        name: "Adobe Media Encoder",
        para: "Transferencia y codificación de video",
        logo: ame,
      },
      {
        name: "Cinema 4D",
        para: "Diseño y animación 3D",
        logo: c4d,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Servicios",
    subtitle: "Lo que puedo hacer",
    service_content: [
      {
        title: "Diseño de marca",
        para: "Experiencia en el Diseño de marca y todo lo relacionado al branding y el marketing.",
        logo: brand,
      },
      {
        title: "Ilustración",
        para: "Experiencia en el mundo del cartel y la ilustración, donde he obtenido reconocimientos en varios concursos.",
        logo: ilustration,
      },
      {
        title: "Diseño Editorial",
        para: "Diseño de libros, revistas, periódicos, folletos, carteles publicitarios y tarjetas de presentación.",
        logo: edit,
      },
      {
        title: "Diseño UI / UX",
        para: "Experiencia en el diseño de interfaz y experiencia del usuario. (Diseño Web, software y aplicaciones móviles).",
        logo: uidesign,
      },
      {
        title: "Edición de fotos",
        para: "Experiencia en la edición fotográfica, y en el montaje e ilustración de imágenes fotográficas.",
        logo: photoedition,
      },
      {
        title: "Modelado en 3D",
        para: "He incursionado en el modelado en 3D, principalmente para artistas.",
        logo: models,
      }
    ],
  },
  Projects: {
    cv:cv,
    title: "Projects",
    downloadTitle:"Descarga mi portafolio",
    downloadDescription:"Toda clase de soluciones gráficas a sus necesidades como cliente.",
    downloadButtonTxt:"Descargar PDF",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonios",
    subtitle: "Opiniones de mis clientes",
    testimonials_content: [
      {
        review:
          "“Trabajé con Ernesto por más dos años. Como artista visual, puedo afirmar que domina una amplia gamma del Diseño Gráfico. En la esfera bidimensional y tridimensional.”",
        img: esterio,
        name: "Esterio segura mora (artista visual)",
      },
      {
        review:
          "“Trabajé con Ernesto por más dos años. Como artista visual, puedo afirmar que domina una amplia gamma del Diseño Gráfico. En la esfera bidimensional y tridimensional.”",
        img: martin,
        name: "Alberto Martín (Ingeniero de Software)",
      }
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "codeaprogram@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "+91 1234 56778",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "codeaprogram",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
