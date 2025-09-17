/*
* Description:
Top section introducing the free trial offer.

Purpose:
Quickly capture user attention and encourage them to start the free trial.
* */
export default function HeroSection(){
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6 py-16 text-center">
                <div className="mx-auto max-w-3xl">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
                        Try TaskFlow Free for 14 Days
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                        Experience seamless project management and boost your team's productivity. No credit card required.
                    </p>
                    <div className="mt-10">
                        <button
                            type="button"
                            className="rounded-md bg-indigo-600 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Start Free Trial
                        </button>
                    </div>
                </div>
                <div className="mt-16">
                    {/* Placeholder for product screenshot */}
                    <img
                        className="mx-auto rounded-lg shadow-xl ring-1 ring-gray-900/10"
                        src="https://blog.chargebee.com/wp-content/uploads/2021/07/chargebee-free-trial.png"
                        alt="TaskFlow application screenshot" />
                </div>
            </div>
        </section>
    );
}