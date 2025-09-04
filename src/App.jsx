import React from "react";

export default function App() {
    return (
        <div style={styles.page}>
            {/* Hero Section */}
            <section style={styles.hero}>
                <h1 style={styles.heroTitle}>Try TaskFlow Free for 14 Days</h1>
                <p style={styles.heroSubtitle}>
                    Simplify your projects with powerful task management, team
                    collaboration, and reporting tools.
                </p>
                <button style={styles.cta}>Start Free Trial</button>
            </section>

            {/* Product Benefits */}
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>Why Choose TaskFlow?</h2>
                <div style={styles.benefitList}>
                    <div style={styles.benefitBox}>
                        <h3>✅ Task Management</h3>
                        <p>Organize tasks, set priorities, and never miss a deadline.</p>
                    </div>
                    <div style={styles.benefitBox}>
                        <h3>🤝 Team Collaboration</h3>
                        <p>Work seamlessly with your team in real-time.</p>
                    </div>
                    <div style={styles.benefitBox}>
                        <h3>📊 Smart Reporting</h3>
                        <p>Track progress with detailed reports and analytics.</p>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section style={{ ...styles.section, background: "#f9f9f9" }}>
                <h2 style={styles.sectionTitle}>How It Works</h2>
                <ol style={styles.steps}>
                    <li>Sign up for free in minutes</li>
                    <li>Explore all premium features</li>
                    <li>Upgrade anytime when you’re ready</li>
                </ol>
            </section>

            {/* Trial Offer */}
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>What’s Included</h2>
                <p>✅ 14 days free • ✅ All premium features • ✅ No credit card required</p>
            </section>

            {/* Sign-Up Form */}
            <section style={{ ...styles.section, background: "#f9f9f9" }}>
                <h2 style={styles.sectionTitle}>Start Your Free Trial</h2>
                <form style={styles.form}>
                    <input type="text" placeholder="Name" style={styles.input} required />
                    <input type="email" placeholder="Email" style={styles.input} required />
                    <input type="password" placeholder="Password" style={styles.input} required />
                    <input type="text" placeholder="Company (Optional)" style={styles.input} />
                    <button type="submit" style={styles.cta}>
                        Get Started Free
                    </button>
                </form>
            </section>

            {/* Social Proof */}
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>Trusted by Teams Worldwide</h2>
                <blockquote style={styles.quote}>
                    “TaskFlow transformed our workflow – simple, powerful, and reliable.”
                </blockquote>
                <blockquote style={styles.quote}>
                    “Best productivity tool we’ve tried – our team loves it!”
                </blockquote>
            </section>

            {/* Footer */}
            <footer style={styles.footer}>
                <p>
                    © 2025 TaskFlow | <a href="#" style={styles.footerLink}>About</a> |{" "}
                    <a href="#" style={styles.footerLink}>Privacy</a> |{" "}
                    <a href="#" style={styles.footerLink}>Terms</a> |{" "}
                    <a href="#" style={styles.footerLink}>Contact</a>
                </p>
            </footer>
        </div>
    );
}

const styles = {
    page: { fontFamily: "Arial, sans-serif", margin: 0, lineHeight: "1.6" },
    hero: {
        textAlign: "center",
        padding: "60px 20px",
        background: "#eef6ff",
    },
    heroTitle: { fontSize: "2.5rem", color: "#222", marginBottom: "10px" },
    heroSubtitle: { fontSize: "1.2rem", color: "#555", marginBottom: "20px" },
    cta: {
        background: "#007bff",
        color: "#fff",
        border: "none",
        padding: "12px 24px",
        fontSize: "1rem",
        borderRadius: "8px",
        cursor: "pointer",
        marginTop: "10px",
    },
    section: { padding: "40px 20px", textAlign: "center" },
    sectionTitle: { fontSize: "2rem", marginBottom: "20px" },
    benefitList: {
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
    },
    benefitBox: {
        flex: "1 1 250px",
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        textAlign: "center",
    },
    steps: { listStyle: "decimal", maxWidth: "400px", margin: "0 auto", textAlign: "left" },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        maxWidth: "400px",
        margin: "0 auto",
    },
    input: {
        padding: "12px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        fontSize: "1rem",
    },
    quote: {
        fontStyle: "italic",
        margin: "15px auto",
        maxWidth: "600px",
        color: "#444",
    },
    footer: {
        textAlign: "center",
        padding: "20px",
        background: "#222",
        color: "#fff",
        fontSize: "0.9rem",
    },
    footerLink: { color: "#fff", textDecoration: "none" },
};
