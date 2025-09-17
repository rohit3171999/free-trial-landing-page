/*
* Description:
Details of the free trial (duration, inclusions, no credit card).

Purpose:
Answer FAQs upfront, build trust.
* */
export default function TrialOfferDetails(){
    // Data for the included features. This makes the component easy to update.
    const includedFeatures = [
        {
            name: 'Full Feature Access',
            description: 'Use every tool and integration from day one, just like a paying customer.',
        },
        {
            name: 'Unlimited Projects',
            description: 'Create as many projects and tasks as you need to get your team fully organized.',
        },
        {
            name: 'Team Collaboration',
            description: 'Invite your entire team to collaborate, assign tasks, and share feedback in real-time.',
        },
        {
            name: 'No Credit Card Required',
            description: 'Sign up in seconds. We don\'t ask for your payment details until you decide to subscribe.',
        },
    ];

    // Reusable Check Icon component
    const CheckIcon = (props) => (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
    );

    return (
        <section className="bg-gray-50 dark:bg-gray-800 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Transparent & Simple</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        What’s Included in Your Free Trial
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                        We want you to have the best experience possible. That's why our 14-day trial gives you full access, completely risk-free.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {includedFeatures.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <CheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}