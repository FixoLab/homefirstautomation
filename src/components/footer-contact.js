import React, { useState, useEffect } from "react";
const contactFrom = process.env.REACT_APP_CONTACTFROM;

const FooterContact = () => {
  const [answer, setAnswer] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);

  useEffect(() => {
    const randomFirstNumber = Math.floor(Math.random() * 20);
    setFirstNumber(randomFirstNumber);
    const randomSecondNumber = Math.floor(Math.random() * 20);
    setSecondNumber(randomSecondNumber);
  }, []);

  const captureAnswer = firstNumber + secondNumber;

  // Handle changes to the math question input
  function handleAnswerChange(event) {
    const value = event.target.value;
    setAnswer(value);
    setSubmitDisabled(value !== captureAnswer.toString()); // Check if the answer is correct
  }
  return (
    <div className="footer-widgets column-one grid-item">
      <div className="contactarea">
        <div className="contactareabox">
          <h3>Let’s Get Started</h3>
          <p>
            <span className="minifoot">Contact us for a free consultation</span>
            <br />
          </p>
          <div className="wpcf7">
            <form
              action={contactFrom}
              method="post"
              className="wpcf7-form init"
            >
              <p>
                <label>
                  <br />
                  <span>
                    <input
                      type="text"
                      name="name"
                      size="40"
                      placeholder="Full Name"
                    />
                  </span>
                </label>
              </p>
              <p>
                <label>
                  <br />
                  <span>
                    <input
                      type="email"
                      name="email"
                      size="40"
                      placeholder="Email Address"
                    />
                  </span>{" "}
                </label>
              </p>
              <p>
                <label>
                  <br />
                  <span>
                    <input
                      type="tel"
                      name="phone"
                      size="40"
                      placeholder="Phone Number"
                    />
                  </span>{" "}
                </label>
              </p>
              <p>
                <label>
                  <br />
                  <span>
                    <textarea
                      name="message"
                      cols="30"
                      rows="10"
                      placeholder="How can we help you"
                    ></textarea>
                  </span>{" "}
                </label>
              </p>
              <div className="math-question">
                <label htmlFor="math-question">
                  What is {firstNumber} + {secondNumber} ?
                </label>
                <input
                  type="number"
                  value={answer}
                  onChange={handleAnswerChange}
                  placeholder="Write Answer"
                ></input>
              </div>
              <p>
                <input
                  type="submit"
                  disabled={submitDisabled}
                  className="wpcf7-submit"
                />
              </p>
            </form>
          </div>
        </div>
        <div className="contactareabox2">
          <h3>
            Contact Us <br />
            Directly
          </h3>
          <p>
            <i className="fas fa-solid fa-location-dot"></i>
          </p>

          <p>
            <strong>Address</strong> <br />
            6735 Conroy Windermere Rd, <br />
            Suite 219, <br />
            Orlando, Florida 32835
          </p>
          <p>
            <a aria-label="Phone number" href="tel:4072283000">
              <i className="fas fa-phone"></i>
            </a>
          </p>
          <a href="tel:4072283000">
            <p>
              <strong>Phone:</strong> <br />
              407.228.3000
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
