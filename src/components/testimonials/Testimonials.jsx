import React from "react";
// import Swiper core and required modules
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import AVTR1 from "../../assets/portfolio-1.webp";
import AVTR2 from "../../assets/portfolio-2.webp";
import AVTR3 from "../../assets/portfolio-3.webp";
import AVTR4 from "../../assets/portfolio-4.webp";
import "./testimonial.css";

const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus delectus consectetur est veniam maiores mollitia voluptatem ratione impedit? Deserunt autem consequatur illum exercitationem repudiandae suscipit dolor, quaerat quas dolore hic.",
  },

  {
    id: 2,
    avatar: AVTR2,
    name: "Zimika Snow",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus delectus consectetur est veniam maiores mollitia voluptatem ratione impedit? Deserunt autem consequatur illum exercitationem repudiandae suscipit dolor, quaerat quas dolore hic.",
  },

  {
    id: 3,
    avatar: AVTR3,
    name: "Zummy Snow",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus delectus consectetur est veniam maiores mollitia voluptatem ratione impedit? Deserunt autem consequatur illum exercitationem repudiandae suscipit dolor, quaerat quas dolore hic.",
  },

  {
    id: 4,
    avatar: AVTR4,
    name: "Zimmika Snow",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus delectus consectetur est veniam maiores mollitia voluptatem ratione impedit? Deserunt autem consequatur illum exercitationem repudiandae suscipit dolor, quaerat quas dolore hic.",
  },
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testemonials</h2>

      <Swiper
        className='container testimonials__container'
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}>
        {data.map(({ id, avatar, name, review }) => {
          return (
            <SwiperSlide key={id} className='testimonial'>
              <div className='client_avatar'>
                <img src={avatar} alt={name} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
