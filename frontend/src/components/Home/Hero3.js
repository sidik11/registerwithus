import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Hero3.css';

function Hero3() {
    const form = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            user_name: form.current.user_name.value,
            user_phone: form.current.user_phone.value,
            user_email: form.current.user_email.value,
            message: form.current.message.value,
            form_type: "Quick Contact"
        };

        try {
            const response = await fetch('http://localhost:3001/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (result.success) {
                alert('✅ Message saved to DB!');
                form.current.reset();
            } else {
                alert('❌ Failed to save message.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('❌ Server error. Please try again.');
        }
    };

    return (
        <section className="biz-hero-section mt-5">
            <div className="biz-hero-overlay">
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-lg-7 text-white biz-hero-content">
                            <h1 className="hero-title">
                                We help you <br />
                                <span className="highlight-yellow">Anyway</span> to rise, build, and lead.
                            </h1>
                            <h5 className="sub-head">Ignite Possibilities</h5>
                            <ul className="hero-features mt-4">
                                <li><i className="fas fa-check-circle text-success me-2"></i> Empowering startups with seamless registration</li>
                                <li><i className="fas fa-check-circle text-success me-2"></i> compliance</li>
                                <li><i className="fas fa-check-circle text-success me-2"></i> business growth services</li>
                            </ul>
                            <div className="btn-area mt-4 d-flex align-items-center flex-wrap">
                                <a href="#" className="btn btn-yellow">Explore More</a>
                                <button className="btn play-btnsss ms-3"><i className="fas fa-play me-2"></i> Play Now</button>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="styled-form-containers">
                                <p className='text-white'>
                                    Submit your details to get an instant <span className='text-theme'>All-inclusive</span> Quote to your email and a <span className='text-theme'>FREE</span> Expert Consultation
                                </p>
                                <form ref={form} onSubmit={handleSubmit}>
                                    <input type="text" name="user_name" className="form-control custom-inputs mb-3" placeholder="Your Name" required />
                                    <div className="input-group mb-3">
                                        <span className="input-group-text custom-addons">+91</span>
                                        <input type="tel" name="user_phone" className="form-control custom-inputs" placeholder="Mobile Number" required />
                                    </div>
                                    <input type="email" name="user_email" className="form-control custom-inputs mb-3" placeholder="Email" required />
                                    <textarea name="message" className="form-control custom-inputs mb-3" placeholder="Message" rows="3" required></textarea>
                                    <button type="submit" className="btn btn-gradients w-100 fw-bold">Register Now →</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero3;
