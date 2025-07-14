import React, { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css";

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [step, setStep] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [viewText, setViewText] = useState("");
  const [loading, setLoading] = useState(false);
  const chatBodyRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) startChat();
  };

  const startChat = () => {
    setMessages([]);
    setStep(0);
    setLoading(true);
    setTimeout(() => {
      setMessages([
        { from: "bot", text: "Hi! I'm Ankita." },
        { from: "bot", text: "How may I help you today?" },
        { from: "bot", text: "Are you looking for?" }
      ]);
      setStep(1);
      setLoading(false);
    }, 2500);
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const showTypingThen = (newMsg, nextStep) => {
    setLoading(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: newMsg }]);
      setStep(nextStep);
      setLoading(false);
    }, 2500);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setMessages((prev) => [...prev, { from: "user", text: option }]);
    showTypingThen("What's your name?", 2);
  };

  const handleSubmitInput = () => {
    if (!userInput.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text: userInput }]);

    if (step === 2) {
      setName(userInput);
      showTypingThen("Please enter your number.", 3);
    } else if (step === 3) {
      setNumber(userInput);
      if (selectedOption === "Others") {
        showTypingThen("Type your view.", 5);
      } else {
        showTypingThen(`Thanks ${userInput}! Please click Submit.`, 4);
      }
    } else if (step === 5) {
      setViewText(userInput);
      showTypingThen(`Thanks for your response, ${name}. Please click Submit.`, 4);
    }

    setUserInput("");
  };

  const handleWhatsAppRedirect = () => {
    const phone = "917855865181";

    const message = selectedOption === "Others"
      ? `Hi, my name is ${name}. I selected "Others".
Here is my view: ${viewText}
You can contact me at: ${number}.
Thanks!`
      : `Hi, my name is ${name}. I'm interested in ${selectedOption}.
Please share the details regarding the process, documents required, and charges.
You can contact me at: ${number}.
Thanks!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phone}?text=${encodedMessage}`;

    const newWindow = window.open(whatsappURL, '_blank');

    if (!newWindow) {
      alert("❌ Failed to open WhatsApp. Please ensure popup is allowed.");
    } else {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }

  };

  return (
    <>
      <button className="whatsapp-float" onClick={toggleChat}>
        <i className="fab fa-whatsapp"></i>
      </button>

      {isOpen && (
        <div className="chat-popup">
          <div className="chat-header">
            <img src="https://i.ibb.co/3kJ9Y9V/ankita.jpg" alt="ankita" className="agent-pic" />
            <strong>Ankita</strong>
            <span className="close-btn" onClick={toggleChat}>&times;</span>
          </div>

          <div className="chat-content-wrapper">
            <div className="chat-body" ref={chatBodyRef}>
              {messages.map((msg, i) => (
                <div key={i} className={`chat-bubble ${msg.from}`}>{msg.text}</div>
              ))}
              {loading && (
                <div className="chat-bubble bot">
                  Typing<span className="dots">...</span>
                </div>
              )}
              {step === 1 && !loading && (
                <div className="options">
                  {[
                    "Private Company Registration",
                    "LLP Registration",
                    "OPC(One Person Company) Registration",
                    "Public Company Registration",
                    "Virtual Company Registration",
                    "Others"
                  ].map((opt) => (
                    <button key={opt} className="option-btn" onClick={() => handleOptionClick(opt)}>
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {(step === 2 || step === 3 || step === 5) && (
              <div className="input-bar">
                <input
                  type="text"
                  className="form-control"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder={
                    step === 2 ? "Enter your name" :
                      step === 3 ? "Enter your number" :
                        "Type your view"
                  }
                />
                <button className="btn btn-primary" onClick={handleSubmitInput}>Send</button>
              </div>
            )}

            {step === 4 && (
              <button className="btn btn-success w-100 mt-2" onClick={handleWhatsAppRedirect}>
                Submit
              </button>
            )}
          </div>
        </div>
      )}

      {/* Footer (unchanged) */}
      <footer id="footer" className="main-footer bg-dark-blue text-white pt-5 pb-3">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-3 col-sm-12 text-start">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-white text-dark rounded-circle d-flex align-items-center justify-content-center me-2 foot-icon">
                  <i className="fa-solid fa-r"></i>
                </div>
                <h5 className="fw-bold mb-0">Register With Us</h5>
              </div>
              <p className="small mb-1">Register with us was created for<br /> the new ways we live and work.</p>
              <p className="small">We make a better register with<br /> us around the world</p>
            </div>
            <div className="col-lg-4 col-sm-6 text-start">
              <h5 className="fw-bold mb-3">Contact Info</h5>
              <ul className="list-unstyled small">
                <li className="mb-3">
                  <a href="https://maps.google.com/?q=Bhubaneshwar, Odisha, India" target="_blank" className="text-white text-decoration-none">
                    <i className="fas fa-map-marker-alt fs-5 me-2 icon-color"></i> Bhubaneshwar, Odisha, India
                  </a>
                </li>
                <li className="mb-3">
                  <a href="tel:+91XXXXXXXXXX" className="text-white text-decoration-none">
                    <i className="fas fa-phone-alt fs-5 me-2 icon-color"></i> +91 XXXX-XXXXXX
                  </a>
                </li>
                <li className="mb-3">
                  <a href="mailto:contact@example.com" className="text-white text-decoration-none">
                    <i className="fas fa-envelope fs-5 me-2 icon-color"></i> contact@example.com
                  </a>
                </li>
                <li className="mb-3">
                  <i className="fas fa-clock fs-5 me-2 icon-color"></i> Business Hours: Mon-Sat, 9:00 AM - 6:00 PM IST
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-sm-6 text-start">
              <h5 className="fw-bold mb-3">Company</h5>
              <ul className="list-unstyled small">
                <li className="mb-3"><Link to="/about" className="text-white text-decoration-none"><i className="fas fa-arrow-right fs-5 me-2"></i> About</Link></li>
                <li className="mb-3"><Link to="/blogs" className="text-white text-decoration-none"><i className="fas fa-arrow-right fs-5 me-2"></i> Blog</Link></li>
                {/* <li className="mb-3"><Link to="/hero" className="text-white text-decoration-none"><i className="fas fa-arrow-right fs-5 me-2"></i> Hero Banner</Link></li> */}
                <li><Link to="/faqs" className="text-white text-decoration-none"><i className="fas fa-arrow-right fs-5 me-2"></i> FAQ's</Link></li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-12 text-start">
              <h5 className="fw-bold mb-3">Try It Today</h5>
              <p className="small mb-3">Get started for free. Add your<br /> whole team as your needs grow.</p>
              <a href="#" className="btn btn-info text-dark fw-semibold px-4 py-2 rounded-3">
                Start today <i className="fa-solid fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>

          <hr className="border-secondary my-4" />

          <div className="footer-service-dark text-white">
            <div className="row">
              <div className="col-12 mb-4" id="business-registration" >
                <h6 className="section-title footer-heading">Business Registration</h6>
                <div className="row g-2">
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>Sole Proprietorship</div>
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>Partnership</div>
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>LLP Registration</div>
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>Private Limited Company Registration</div>
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>Public Limited Company Registration</div>
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>Foreign Company Registration</div>
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>NGO / Section 8 Company Registration</div>
                </div>
              </div>

              <div className="col-12 mb-4">
                <h6 id="trade-licenses" className="section-title footer-heading">Trade Licenses</h6>
                <div className="row g-2">
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>PAN</div>
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>GST</div>
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>IEC</div>
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>Manufactures</div>
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>Wholesale / Retail</div>
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>Relabeler</div>
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>Professional Tax Registrations</div>
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>MSME</div>
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>Start-Up Registration</div>
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>Shops & Establishment</div>
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>APEDA Registration</div>
                </div>
              </div>

              <div className="col-12 mb-4">
                <h6 className="section-title footer-heading">Labour Laws</h6>
                <div className="row g-2">
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>One Time PF Registrations</div>
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>ESIC Registrations</div>
                </div>
              </div>

              <div className="col-12 mb-4">
                <h6 className="section-title footer-heading">Trademarks</h6>
                <div className="row g-2">
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>TM Registration</div>
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>TM Renewal</div>
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>TM Assignments / Transfers</div>
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>TM Amendments</div>
                </div>
              </div>

              <div className="col-12 mb-4">
                <h6 id="company-compliances" className="section-title footer-heading">Company Compliance</h6>
                <div className="row g-2">
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>Share Transfers</div>
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>Share Transmission</div>
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>Share Allotments</div>
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>Equity / Debt Raising</div>
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>Change in Directors / KMP</div>
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>Change in Auditors</div>
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>Change in Address / Shifting of Office</div>
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>MSME Fillings</div>
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>Return of Deposit</div>
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>Fund Raise</div>
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>Annual Filling</div>
                </div>
              </div>

              <div className="col-12 mb-4">
                <h6 id="tax-fillings" className="section-title footer-heading">Tax Filling</h6>
                <div className="row g-2">
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>Individual ITR Fillings</div>
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>Corporate ITR Fillings</div>
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>GST Returns</div>
                  <div className="col-lg-3 srvc-footer col-md-6 col-sm-12"><i class="fa-solid fa-angles-right fa-icons me-2 text-light"></i>TDS Fillings</div>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-secondary my-4" />

          <div className="d-flex flex-wrap justify-content-between align-items-center text-center text-md-start small">
            <div className="mb-2 mb-md-0 text-start">
              <a href="/privacy" className="text-white me-4 text-decoration-none">Privacy Policy</a>
              <a href="/refund" className="text-white me-4 text-decoration-none">Refund Policy</a>
              {/* <a href="#" className="text-white me-4 text-decoration-none">Status</a> */}
              <span>©2025 TECHGEERING</span>
              {/* <a href="/hero" className="ms-3 text-decoration-none text-white" >Hero Banner</a> */}
            </div>
            <div className="text-start">
              <a href="#" className="text-white me-3"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white me-3"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default ChatWidget;
