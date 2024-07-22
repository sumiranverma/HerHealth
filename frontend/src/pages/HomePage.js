import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <img src="./favicon.ico" alt="Her Health Icon" className="home-icon" />
                <h1 className="home-title">Her Health</h1>
            </header>
            <section className="home-content">
                <p className="home-mission">
                    Our mission is to provide reliable information and support to women regarding menstrual health, cycle tracking, and myth busting. Join our webinars with top gynecologists and explore our recommended products.
                </p>
                <figure className="home-figure">
                    <img src="https://images.onlymyhealth.com/imported/images/2023/June/02_Jun_2023/Thumb-menstrualhealth.jpg" alt="Menstrual Health" className="home-image" />
                    <figcaption><a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Image Source: Unsplash</a></figcaption>
                </figure>
                <blockquote className="home-quote">
                    "Empowering women through education and support."
                </blockquote>
                <figure className="home-figure">
                    <img src="https://shcs.ucdavis.edu/sites/g/files/dgvnsk7846/files/media/images/Menstrual_Health_Banner.jpg" alt="Women's Health" className="home-image" />
                    <figcaption><a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Image Source: Unsplash</a></figcaption>
                </figure>
                <section className="home-pcos">
                    <h2>Understanding PCOS</h2>
                    <p>
                        PCOS (Polycystic Ovary Syndrome) is a common hormonal disorder affecting women of reproductive age. Women with PCOS may have infrequent or prolonged menstrual periods, and often have excessive androgen levels (male hormones). The ovaries may develop numerous small collections of fluid (follicles) and fail to regularly release eggs.
                    </p>
                    <p>
                        Symptoms of PCOS include:
                        <ul>
                            <li>Irregular periods</li>
                            <li>Excess facial and body hair</li>
                            <li>Severe acne</li>
                            <li>Male-pattern baldness</li>
                            <li>Weight gain or difficulty losing weight</li>
                            <li>Darkening of the skin</li>
                            <li>Skin tags</li>
                        </ul>
                    </p>
                    <p>
                        While the exact cause of PCOS is unknown, factors such as excess insulin, low-grade inflammation, heredity, and excess androgen may play a role. Treatment for PCOS typically focuses on managing individual symptoms and may include lifestyle changes, medications, and possibly surgery.
                    </p>
                </section>
                <section className="home-pcod">
                    <h2>Understanding PCOD</h2>
                    <p>
                        PCOD (Polycystic Ovarian Disease) is another hormonal disorder affecting the ovaries. Similar to PCOS, PCOD is characterized by the formation of multiple cysts in the ovaries due to the imbalance of hormones.
                    </p>
                    <p>
                        Symptoms of PCOD include:
                        <ul>
                            <li>Irregular menstrual cycles</li>
                            <li>Heavy bleeding during periods</li>
                            <li>Weight gain</li>
                            <li>Acne and skin problems</li>
                            <li>Hair loss or thinning hair</li>
                            <li>Infertility</li>
                        </ul>
                    </p>
                    <p>
                        PCOD can be managed with a combination of lifestyle changes, medications, and regular monitoring by a healthcare provider. It's important to consult a gynecologist for a proper diagnosis and personalized treatment plan.
                    </p>
                </section>
                <figure className="home-figure">
                    <img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/womens_health_2.width-1200.format-webp.webp" alt="Women's Health" className="home-image" />
                    <figcaption><a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Image Source: Unsplash</a></figcaption>
                </figure>
                <blockquote className="home-quote">
                    "Your health is your wealth."
                </blockquote>
                <figure className="home-figure">
                    <img src="https://media.licdn.com/dms/image/D5612AQEtgPLz3wktow/article-cover_image-shrink_600_2000/0/1687786381825?e=2147483647&v=beta&t=0_XbRlmTiJ2pDA1CGBbTFNtPGja-RcLQYESEI55jfXI" alt="Healthy Lifestyle" className="home-image" />
                    <figcaption><a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Image Source: Unsplash</a></figcaption>
                </figure>
            </section>
        </div>
    );
};

export default HomePage;
