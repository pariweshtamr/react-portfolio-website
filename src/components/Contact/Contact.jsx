import React from 'react'
import emailjs from 'emailjs-com'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
  const form = React.useRef(null)

  const sendEmail = (e) => {
    e.preventDefault()

    const sendEmail = emailjs.sendForm(
      'service_milmbd7',
      'template_hkz6ugs',
      form.current,
      'user_crInatugY1fckdnkfRcc9',
    )
    e.target.reset()

    if (sendEmail) {
      return toast.success('Your message has been sent', {
        position: 'bottom-left',
        autoClose: 2000,
        theme: 'colored',
      })
    } else {
      toast.error(
        'Unable to send message! Please use alternative links provided.',
        {
          position: 'bottom-left',
          autoClose: 2000,
          theme: 'colored',
        },
      )
    }
  }

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>tamrpariwesh@gmail.com</h5>
            <a
              href="mailto:tamrpariwesh@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Pariwesh Tamrakar</h5>
            <a
              href="https://m.me/pariweshtamr7"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <a
              href="https://api.whatsapp.com/send?phone+61468804207"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          <ToastContainer />
        </form>
      </div>
    </section>
  )
}

export default Contact
