// components/Contact.jsx
import { useState, useEffect, useRef } from 'react';
import { FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post('http://localhost:5000/send-email', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section className={`contact-section ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="contact-container">
        <h2 className="section-title">Get in Touch</h2>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <FiMapPin className="info-icon" />
              <div>
                <h3>Location</h3>
                <p>New Delhi, India</p>
              </div>
            </div>

            <div className="info-item">
              <FiMail className="info-icon" />
              <div>
                <h3>Email</h3>
                <p>anuragmahanta730@gmail.com</p>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FiGithub className="social-icon" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FiLinkedin className="social-icon" />
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <textarea
                id="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows="5"
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            {submitStatus === 'success' && (
              <div className="alert success">
                Message sent successfully! 🎉
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="alert error">
                Failed to send message. Please try again later.
              </div>
            )}

            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;