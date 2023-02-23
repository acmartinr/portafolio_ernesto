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

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

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
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
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
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
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
