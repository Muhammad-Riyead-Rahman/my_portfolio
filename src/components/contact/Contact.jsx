import emailjs from "emailjs-com";
import React, { useRef } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_j9wxn0b",
      "template_kfo0ujd",
      form.current,
      "kAHSTvVvvvZWJH_Ye"
    );

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>helloworld.asset@gamil.com</h5>
            <a
              href='mailto:helloworld.asset@gamil.com'
              target='_blank'
              rel='noreferrer'>
              Send a message
            </a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Riyead Rahman</h5>
            <a
              href='https://www.facebook.com/profile.php?id=100080174059604'
              target='_blank'
              rel='noreferrer'>
              Send a message
            </a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+880 1611-179917</h5>
            <a
              href='https://api.whatsapp.com/send?phone=+8801611179917'
              target='_blank'
              rel='noreferrer'>
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Enter your email'
            required
          />
          <textarea
            name='message'
            rows='7'
            placeholder='Your Message'
            required></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
