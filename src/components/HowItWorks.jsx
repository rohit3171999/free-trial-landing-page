/*
* Description:
Simple steps explaining how the trial works.

Purpose:
Reduce friction by clarifying the process.
* */
export default function HowItWorks(){
    // Data for the steps. This makes the component easy to update and keeps the JSX clean.
    const steps = [
        {
            name: 'Sign Up',
            description: 'Create your account in seconds with just an email address. No credit card required.',
            stepNumber: '01',
        },
        {
            name: 'Explore Features',
            description: 'Dive into all of our premium features. Set up your first project and invite your team to collaborate.',
            stepNumber: '02',
        },
        {
            name: 'Start Building',
            description: 'Enjoy your 14-day free trial to see how TaskFlow can boost your team\'s productivity.',
            stepNumber: '03',
        },
    ];

    return (
        <section className="bg-white dark:bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">The Process</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Get Started in 3 Easy Steps
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                        We've simplified the process to get you and your team up and running as quickly as possible.
                    </p>
                </div>
                {/* Steps container */}
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    {/* 
                      Using <ol> for semantic correctness as these are ordered steps.
                      The 'list-none' class removes default browser styling for the ordered list.
                      A 'relative' class is added to the parent to contain the decorative lines.
                    */}
                    <ol className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3 list-none">
                        {steps.map((step, stepIdx) => (
                            <li key={step.name} className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                                {/* Decorative line for desktop view, hidden on the last item */}
                                {stepIdx !== steps.length - 1 ? (
                                    <div className="absolute top-5 left-full hidden h-px w-screen max-w-[20rem] bg-gray-200 dark:bg-gray-700 lg:block" aria-hidden="true" />
                                ) : null}
                                
                                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-indigo-600 bg-white dark:bg-gray-900">
                                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">{step.stepNumber}</span>
                                </div>
                                <h3 className="mt-6 text-xl font-semibold leading-7 text-gray-900 dark:text-white">{step.name}</h3>
                                <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">{step.description}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}