import React from "react";

export default function App() {
    return (
        <div className="font-sans m-0 leading-relaxed">
            {/* Hero Section */}
            <section className="text-center py-16 px-5 bg-[#eef6ff]">
                <h1 className="text-4xl md:text-5xl text-[#222] mb-3 font-bold">
                    Try TaskFlow Free for 14 Days
                </h1>
                <p className="text-lg text-gray-600 mb-5">
                    Simplify your projects with powerful task management, team
                    collaboration, and reporting tools.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 text-base rounded-lg cursor-pointer mt-3 hover:bg-blue-700">
                    Start Free Trial
                </button>
            </section>

            {/* Product Benefits */}
            <section className="py-12 px-5 text-center">
                <h2 className="text-3xl mb-6 font-semibold">Why Choose TaskFlow?</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    <div className="flex-1 min-w-[250px] bg-white p-6 rounded-lg text-center shadow">
                        <h3 className="text-xl font-semibold">✅ Task Management</h3>
                        <p className="text-gray-700">
                            Organize tasks, set priorities, and never miss a deadline.
                        </p>
                    </div>
                    <div className="flex-1 min-w-[250px] bg-white p-6 rounded-lg text-center shadow">
                        <h3 className="text-xl font-semibold">🤝 Team Collaboration</h3>
                        <p className="text-gray-700">
                            Work seamlessly with your team in real-time.
                        </p>
                    </div>
                    <div className="flex-1 min-w-[250px] bg-white p-6 rounded-lg text-center shadow">
                        <h3 className="text-xl font-semibold">📊 Smart Reporting</h3>
                        <p className="text-gray-700">
                            Track progress with detailed reports and analytics.
                        </p>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-12 px-5 text-center bg-[#f9f9f9]">
                <h2 className="text-3xl mb-6 font-semibold">How It Works</h2>
                <ol className="list-decimal max-w-md mx-auto text-left space-y-2">
                    <li>Sign up for free in minutes</li>
                    <li>Explore all premium features</li>
                    <li>Upgrade anytime when you’re ready</li>
                </ol>
            </section>

            {/* Trial Offer */}
            <section className="py-12 px-5 text-center">
                <h2 className="text-3xl mb-6 font-semibold">What’s Included</h2>
                <p>✅ 14 days free • ✅ All premium features • ✅ No credit card required</p>
            </section>

            {/* Sign-Up Form */}
            <section className="py-12 px-5 text-center bg-[#f9f9f9]">
                <h2 className="text-3xl mb-6 font-semibold">Start Your Free Trial</h2>
                <form className="flex flex-col gap-4 max-w-md mx-auto">
                    <input
                        type="text"
                        placeholder="Name"
                        className="px-4 py-3 rounded-md border border-gray-300 text-base"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="px-4 py-3 rounded-md border border-gray-300 text-base"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="px-4 py-3 rounded-md border border-gray-300 text-base"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Company (Optional)"
                        className="px-4 py-3 rounded-md border border-gray-300 text-base"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-base cursor-pointer mt-3 hover:bg-blue-700"
                    >
                        Get Started Free
                    </button>
                </form>
            </section>

            {/* Social Proof */}
            <section className="py-12 px-5 text-center">
                <h2 className="text-3xl mb-6 font-semibold">
                    Trusted by Teams Worldwide
                </h2>
                <blockquote className="italic mx-auto my-4 max-w-2xl text-gray-700">
                    “TaskFlow transformed our workflow – simple, powerful, and reliable.”
                </blockquote>
                <blockquote className="italic mx-auto my-4 max-w-2xl text-gray-700">
                    “Best productivity tool we’ve tried – our team loves it!”
                </blockquote>
            </section>

            {/* Footer */}
            <footer className="text-center py-5 bg-[#222] text-white text-sm">
                <p>
                    © 2025 TaskFlow |{" "}
                    <a href="#" className="text-white no-underline hover:underline">
                        About
                    </a>{" "}
                    |{" "}
                    <a href="#" className="text-white no-underline hover:underline">
                        Privacy
                    </a>{" "}
                    |{" "}
                    <a href="#" className="text-white no-underline hover:underline">
                        Terms
                    </a>{" "}
                    |{" "}
                    <a href="#" className="text-white no-underline hover:underline">
                        Contact
                    </a>
                </p>
            </footer>
        </div>
    );
}
