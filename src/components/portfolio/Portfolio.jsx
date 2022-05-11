import React from "react";
import IMG1 from "../../assets/portfolio-1.webp";
import IMG2 from "../../assets/portfolio-2.webp";
import IMG3 from "../../assets/portfolio-3.webp";
import {
  default as IMG4,
  default as IMG5,
} from "../../assets/portfolio-4.webp";
import IMG6 from "../../assets/portfolio-6.webp";
import "./portfolio.css";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Eclipse - Figma dashboard UI kit for data design web apps",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/18013185-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },

  {
    id: 2,
    image: IMG2,
    title: "Orion UI kit - Charts templates & infographics in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17992262-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },

  {
    id: 3,
    image: IMG3,
    title: "Orion UI kit - Charts templates & infographics in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17992247-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },

  {
    id: 4,
    image: IMG4,
    title: "Orion UI kit - Charts templates & infographics in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17919820-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },

  {
    id: 5,
    image: IMG5,
    title: "Orion UI kit - Charts templates & infographics in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17919797-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },

  {
    id: 6,
    image: IMG6,
    title: "Orion UI kit - Charts templates & infographics in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17919781-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
];

const Portfolio = () => {
  return (
    <section id='section'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a
                  href={github}
                  className='btn'
                  target='_blank'
                  rel='noreferrer'>
                  Github
                </a>
                <a
                  href={demo}
                  className='btn btn-primary'
                  target='_blank'
                  rel='noreferrer'>
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
