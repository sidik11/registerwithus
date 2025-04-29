import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Blogdetails.css';

function Blogdetails() {
    return (
        <section>
            <div class="container py-5">
                        <h2 class="fw-bold">Mastering ChatGPT</h2>
                        <p class="date">17 April 2024</p>
                <div class="row">
                    <div class="col-lg-8">
                        <img src="img/blog-details1.png" class="img-fluid blog-img mb-4" alt="AI Writing" />

                        <h5 class="fw-semibold">Exploring Generative AI in Content Creation</h5>
                        <p><strong>Brief:</strong> Explore how AI tools like ChatGPT are transforming content creation with speed, precision, and versatility.</p>

                        <p>AI-powered writing tools like <a href="#">ChatGPT</a> can supercharge your writing flow, saving hours by brainstorming topics, generating ideas, or even writing full drafts. Their capacity for natural language generation makes them ideal for bloggers, marketers, and writers alike.</p>

                        <h5 class="fw-semibold mt-4">Steering Clear of Common AI Writing Pitfalls</h5>
                        <p>AI text generators often produce generic content if not guided properly. Always provide clear prompts and personalize the content. Avoid over-reliance on AI to maintain a human touch.</p>

                        <h5 class="fw-semibold mt-4">Understanding ChatGPT Capabilities – Define Your Style</h5>
                        <p>ChatGPT can mimic tone and voice effectively if given the right examples. Feed it with a few of your past articles or paragraphs to set the style guide.</p>

                        <h5 class="fw-semibold mt-4">Understand Your Readers</h5>
                        <p>Identify who you're writing for. Whether it’s a tech-savvy audience or beginners, tailor your language and format. AI helps segment tone and structure accordingly.</p>

                        <h5 class="fw-semibold mt-4">Understand Trust: Restructuring Quality AI-powered Blogs That Google Loves</h5>
                        <p>Google values originality. Use AI to brainstorm and draft but ensure final content reflects your expertise. Always review and fact-check before publishing.</p>

                        <h5 class="fw-semibold mt-4">Conclusion: Embracing AI in Writing Creation</h5>
                        <p>AI is not replacing writers, but empowering them. Mastering tools like ChatGPT can make you faster and sharper while keeping the creative spark alive.</p>
                    </div>

                    <div class="col-lg-4 mt-5 mt-lg-0">
                        <div class="author-card text-center mb-4">
                            <img src="img/blog-author1.png" class="rounded-circle mb-3" alt="Author" />
                            <h6 class="fw-bold mb-0">Sarah Miller</h6>
                            <p class="text-muted small">Content Strategist | AI Enthusiast</p>
                            <p class="small">Sarah explores the intersection of content and emerging tech. When not writing, she’s testing the latest AI tools.</p>
                            <div class="d-flex justify-content-center gap-2">
                                <a href="#"><img src="https://img.icons8.com/ios-filled/24/000000/facebook--v1.png" /></a>
                                <a href="#"><img src="https://img.icons8.com/ios-filled/24/000000/linkedin.png" /></a>
                                <a href="#"><img src="https://img.icons8.com/ios-filled/24/000000/instagram-new.png" /></a>
                            </div>
                        </div>

                        <h5 class="fw-bold">Related Posts</h5>
                        <div class="related-post d-flex mb-3">
                            <img src="img/related-post1.png" class="me-3 rounded" alt="Post" />
                            <div class="info">
                                <a href="#" class="fw-semibold d-block text-dark">ChatGPT for Marketers</a>
                                <span class="text-muted">12 Apr 2024</span>
                            </div>
                        </div>
                        <div class="related-post d-flex mb-3">
                            <img src="img/related-post1.png" class="me-3 rounded" alt="Post" />
                            <div class="info">
                                <a href="#" class="fw-semibold d-block text-dark">AI in Creative Writing</a>
                                <span class="text-muted">08 Apr 2024</span>
                            </div>
                        </div>
                        <div class="related-post d-flex mb-3">
                            <img src="img/related-post1.png" class="me-3 rounded" alt="Post" />
                            <div class="info">
                                <a href="#" class="fw-semibold d-block text-dark">Prompt Engineering Tips</a>
                                <span class="text-muted">03 Apr 2024</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blogdetails;
