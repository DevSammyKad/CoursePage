import React, { useEffect } from 'react';
import '../Form.css';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = ({ closeModal }) => {
  useEffect(() => {
    const scriptURL =
      'https://script.google.com/macros/s/AKfycbwZuqgnRZgxrWJxosgPZt591zIodi3m0dmmPT8wlU-XWm_KP0iwoOd9cCsDxUTER3eu/exec';
    const form = document.forms['submit-to-google-sheet'];

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then((response) => {
          if (response.ok) {
            // alert('Form submitted successfully');
            closeModal();
            toast.success('Form submitted successfully');
            console.log('Form submitted successfully');
            // You can redirect or show a success message here if needed.
          } else {
            toast.error('Error submitting the form');
            console.error('Error submitting the form');
          }
        })
        .catch((error) => console.error('Error!', error.message));
    });
  }, []);
  return (
    <>
      <div className="formbold-main-wrapper">
        <div
          className="formbold-form-wrapper
        relative"
        >
          <button onClick={closeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 absolute top-5 right-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>

          <h1>Schedule A Free Consultation</h1>

          <form method="POST" name="submit-to-google-sheet">
            <div className="formbold-input-flex">
              <div>
                <label htmlFor="firstname" className="formbold-form-label">
                  First name
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="First Name"
                  className="formbold-form-input"
                />
              </div>
              <div>
                <label htmlFor="lastname" className="formbold-form-label">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Last Name"
                  className="formbold-form-input"
                />
              </div>
            </div>

            <div className="formbold-input-flex">
              <div>
                <label htmlFor="email" className="formbold-form-label">
                  {' '}
                  Mail{' '}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="User@mail.com"
                  className="formbold-form-input"
                />
              </div>
              <div>
                <label htmlFor="phone" className="formbold-form-label">
                  {' '}
                  Phone{' '}
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="+91 00000 00000"
                  className="formbold-form-input"
                />
              </div>
            </div>

            <div className="formbold-input-radio-wrapper">
              <label htmlFor="service" className="formbold-form-label">
                What are you looking for?
              </label>

              {/* formbold-radio-flex */}
              <div className="flex flex-col gap-4 justify-start items-start">
                <div className="formbold-radio-group">
                  <label className="formbold-radio-label">
                    <input
                      className="formbold-input-radio"
                      type="radio"
                      name="service"
                      id="service"
                      value="Course-Information"
                    />
                    Course Information
                    <span className="formbold-radio-checkmark"></span>
                  </label>
                </div>

                <div className="formbold-radio-group">
                  <label className="formbold-radio-label">
                    <input
                      className="formbold-input-radio"
                      type="radio"
                      name="service"
                      id="service"
                      value="Enrollment-Assistance"
                    />
                    Enrollment Assistance
                    <span className="formbold-radio-checkmark"></span>
                  </label>
                </div>

                <div className="formbold-radio-group">
                  <label className="formbold-radio-label">
                    <input
                      className="formbold-input-radio"
                      type="radio"
                      name="service"
                      id="service"
                      value="Academic-Support"
                    />
                    Academic-Support
                    <span className="formbold-radio-checkmark"></span>
                  </label>
                </div>

                <div className="formbold-radio-group">
                  <label className="formbold-radio-label">
                    <input
                      className="formbold-input-radio"
                      type="radio"
                      name="service"
                      id="service"
                      value="Career-Guidance"
                    />
                    Career Guidance
                    <span className="formbold-radio-checkmark"></span>
                  </label>
                </div>

                <div className="formbold-radio-group">
                  <label className="formbold-radio-label">
                    <input
                      className="formbold-input-radio"
                      type="radio"
                      name="service"
                      id="service"
                      value="Others"
                    />
                    Others
                    <span className="formbold-radio-checkmark"></span>
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="formbold-form-label">
                {' '}
                Message{' '}
              </label>
              <textarea
                rows="6"
                name="message"
                id="message"
                placeholder="Type your message"
                className="formbold-form-input"
              ></textarea>
            </div>

            <button type="submit" name="submit" className="formbold-btn">
              Send Message
            </button>
          </form>
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default ContactForm;
