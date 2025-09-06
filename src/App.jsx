import React, { useState } from 'react';

// Helper component for SVG icons to keep the main component cleaner
const Icon = ({ d, className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d={d} />
    </svg>
);

// Individual components are defined within the same file for a single-file structure

// Header Component
const Header = () => (
    <header className="bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <svg className="w-8 h-8 text-indigo-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                <h1 className="text-2xl font-bold text-white">TaskFlow</h1>
            </div>
            <button className="hidden md:inline-block px-4 py-2 text-sm font-semibold text-white bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
                Log In
            </button>
        </div>
    </header>
);

// Hero Section Component
const HeroSection = () => (
    <section className="py-20 md:py-32 text-center bg-slate-900 text-white">
        <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
                Try TaskFlow Free for 14 Days
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 animate-fade-in-up">
                Unlock seamless collaboration, streamline your projects, and boost productivity. No credit card required.
            </p>
            <a href="#signup-form" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 inline-block animate-bounce-in">
                Start Free Trial
            </a>
        </div>
    </section>
);

// Benefit Item Component
const BenefitItem = ({ iconPath, title, description }) => (
    <div className="bg-slate-800 p-6 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
        <div className="flex justify-center items-center mb-4">
            <div className="bg-slate-700 p-3 rounded-full">
                <Icon d={iconPath} className="w-8 h-8 text-indigo-400" />
            </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400">{description}</p>
    </div>
);

// Benefits Section Component
const BenefitsSection = () => (
    <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Everything you need to move work forward</h2>
                <p className="text-slate-400 mt-2">TaskFlow brings all your tasks, teammates, and tools together.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <BenefitItem
                    iconPath="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    title="Intuitive Task Management"
                    description="Easily create, assign, and track tasks with customizable workflows and deadlines."
                />
                <BenefitItem
                    iconPath="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    title="Seamless Team Collaboration"
                    description="Communicate in real-time with comments, file sharing, and team channels."
                />
                <BenefitItem
                    iconPath="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    title="Powerful Reporting"
                    description="Gain insights with visual dashboards and generate custom reports on project progress."
                />
            </div>
        </div>
    </section>
);

// How It Works Section Component
const HowItWorksSection = () => (
    <section className="py-20 bg-slate-950 text-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Get started in 3 simple steps</h2>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                <div className="text-center max-w-xs">
                    <div className="relative mb-4">
                        <div className="bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto">1</div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Sign Up in Seconds</h3>
                    <p className="text-slate-400">Create your account with just your name and email. No credit card needed.</p>
                </div>
                <div className="text-center max-w-xs">
                    <div className="relative mb-4">
                        <div className="bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto">2</div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Explore Features</h3>
                    <p className="text-slate-400">Dive into our full suite of premium features to organize your projects.</p>
                </div>
                <div className="text-center max-w-xs">
                    <div className="relative mb-4">
                        <div className="bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto">3</div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Upgrade Anytime</h3>
                    <p className="text-slate-400">Love it? Choose a plan that fits your team's needs when your trial ends.</p>
                </div>
            </div>
        </div>
    </section>
);


// Testimonial Item Component
const TestimonialItem = ({ text, author, role, company, avatarUrl }) => (
    <div className="bg-slate-800 p-8 rounded-lg">
        <p className="text-slate-300 italic mb-6">"{text}"</p>
        <div className="flex items-center">
            <img className="w-12 h-12 rounded-full mr-4" src={avatarUrl} alt={author} />
            <div>
                <p className="font-bold text-white">{author}</p>
                <p className="text-slate-400 text-sm">{role}, {company}</p>
            </div>
        </div>
    </div>
);

// Social Proof Section
const SocialProofSection = () => (
    <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Trusted by teams at top companies</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <TestimonialItem
                    text="TaskFlow has revolutionized our workflow. We're delivering projects 30% faster and collaboration has never been easier."
                    author="Sarah Johnson"
                    role="Project Manager"
                    company="Innovate Corp"
                    avatarUrl="https://placehold.co/100x100/E2E8F0/475569?text=SJ"
                />
                <TestimonialItem
                    text="We switched from a competitor and the difference is night and day. The UI is clean, intuitive, and incredibly powerful."
                    author="Michael Chen"
                    role="CEO"
                    company="Creative Solutions"
                    avatarUrl="https://placehold.co/100x100/E2E8F0/475569?text=MC"
                />
            </div>
        </div>
    </section>
);


// Sign-up Form Section
const SignUpForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', company: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (formData.name && formData.email && formData.password) {
            console.log('Form Submitted:', formData);
            setSubmitted(true);
        } else {
            alert('Please fill out all required fields.');
        }
    };

    if (submitted) {
        return (
            <div className="text-center py-12">
                <Icon d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" className="w-16 h-16 text-green-500 mx-auto mb-4"/>
                <h3 className="text-2xl font-bold text-white">Thank you for signing up!</h3>
                <p className="text-slate-300 mt-2">Check your email for login details and next steps.</p>
            </div>
        );
    }

    return (
        <div className="bg-slate-800 p-8 rounded-lg shadow-2xl max-w-md w-full">
            <h3 className="text-2xl font-bold text-white text-center mb-2">Get Started Free</h3>
            <p className="text-slate-400 text-center mb-6">Access all premium features for 14 days.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="text-sm font-bold text-slate-300 block mb-2" htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full p-3 rounded-md bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                    <label className="text-sm font-bold text-slate-300 block mb-2" htmlFor="email">Work Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-3 rounded-md bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                    <label className="text-sm font-bold text-slate-300 block mb-2" htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required className="w-full p-3 rounded-md bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                    <label className="text-sm font-bold text-slate-300 block mb-2" htmlFor="company">Company (Optional)</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full p-3 rounded-md bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                    Get Started Free
                </button>
            </form>
            <p className="text-xs text-slate-500 text-center mt-4">By signing up, you agree to our Terms of Service.</p>
        </div>
    );
};

// Main CTA and Form Section
const CtaSection = () => (
    <section id="signup-form" className="py-20 bg-slate-900">
        <div className="container mx-auto px-6 flex justify-center">
            <SignUpForm />
        </div>
    </section>
);


// Footer Component
const Footer = () => (
    <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="container mx-auto px-6 text-center">
            <div className="flex justify-center gap-6 mb-4">
                <a href="#" className="hover:text-white">About</a>
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms</a>
                <a href="#" className="hover:text-white">Contact</a>
            </div>
            <p>&copy; {new Date().getFullYear()} TaskFlow. All rights reserved.</p>
        </div>
    </footer>
);


// Main App Component
export default function App() {
    return (
        <div className="bg-slate-950 font-sans">
            <Header />
            <main>
                <HeroSection />
                <BenefitsSection />
                <HowItWorksSection />
                <SocialProofSection />
                <CtaSection />
            </main>
            <Footer />
        </div>
    );
}
