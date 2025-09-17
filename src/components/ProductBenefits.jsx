/*
* Description:
Highlights 3–4 main benefits of using TaskFlow.

Purpose:
Communicate value in a scannable, visual format.
* */
export default function ProductBenefits(){
    // Data for the benefits section. Using an array of objects makes the component cleaner and easier to update.
    const benefits = [
        {
            name: 'Seamless Collaboration',
            description: 'Easily assign tasks, share files, and communicate with your team in one centralized place.',
            icon: (props) => (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962A3 3 0 013 11.175V15a3 3 0 01-3 3v-1.5a.75.75 0 01.75-.75 2.25 2.25 0 002.25-2.25v-1.5a3 3 0 00-3-3m10.5 4.5A3 3 0 0118 13.5v1.5a3 3 0 01-3 3v-1.5a.75.75 0 01.75-.75 2.25 2.25 0 002.25-2.25v-1.5a3 3 0 00-3-3M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
        },
        {
            name: 'Automate Workflows',
            description: 'Save time by automating repetitive tasks and processes, letting your team focus on what matters most.',
            icon: (props) => (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
            ),
        },
        {
            name: 'Actionable Insights',
            description: 'Gain a clear overview of project progress with customizable dashboards and powerful reporting tools.',
            icon: (props) => (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
            ),
        },
    ];

    return (
        <section className="bg-gray-50 dark:bg-gray-800 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Everything You Need</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Why Teams Choose TaskFlow
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                        Discover the features that make TaskFlow the perfect choice for teams who want to get more done with less effort.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {benefits.map((benefit) => (
                            <div key={benefit.name} className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600">
                                        <benefit.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {benefit.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                                    <p className="flex-auto">{benefit.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}