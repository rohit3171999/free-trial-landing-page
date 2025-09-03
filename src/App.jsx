import React from "react";
import "./App.css";

export default function App() {
    return (
        <div className="trial-container">
            {/* Header */}
            <header className="header">
                <h1 className="logo">🚀 SaaSify</h1>
                <nav>
                    <a href="#features">Features</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#trial">Start Free Trial</a>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-text">
                    <h2>Start Your 14-Day Free Trial Today</h2>
                    <p>
                        Experience the full power of <strong>SaaSify</strong> with no credit
                        card required. Cancel anytime.
                    </p>
                    <a href="#trial" className="cta-btn">Get Started Free</a>
                </div>
                <div className="hero-img">
                    <img src="https://via.placeholder.com/350x250" alt="Dashboard Preview" />
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="features">
                <h3>Why Choose SaaSify?</h3>
                <div className="feature-list">
                    <div className="feature-card">
                        <h4>📊 Powerful Analytics</h4>
                        <p>Track performance with real-time insights and reports.</p>
                    </div>
                    <div className="feature-card">
                        <h4>🤝 Team Collaboration</h4>
                        <p>Work seamlessly with your team on projects and tasks.</p>
                    </div>
                    <div className="feature-card">
                        <h4>🔒 Secure & Reliable</h4>
                        <p>Your data is encrypted and protected 24/7.</p>
                    </div>
                </div>
            </section>

            {/* Free Trial Form */}
            <section id="trial" className="trial">
                <h3>Sign Up for Your Free Trial</h3>
                <form className="trial-form">
                    <input type="text" placeholder="Full Name" required />
                    <input type="email" placeholder="Email Address" required />
                    <input type="password" placeholder="Create Password" required />
                    <button type="submit">Start Free Trial</button>
                </form>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="pricing">
                <h3>After the Trial</h3>
                <p>Upgrade anytime to unlock premium features.</p>
                <div className="price-box">
                    <h4>Pro Plan</h4>
                    <p><strong>$29/month</strong></p>
                    <ul>
                        <li>Unlimited Projects</li>
                        <li>Priority Support</li>
                        <li>Advanced Analytics</li>
                    </ul>
                    <button>Upgrade Plan</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>© 2025 SaaSify. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
