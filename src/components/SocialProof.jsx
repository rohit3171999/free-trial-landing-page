/*
* Description:
Testimonials or customer logos to build credibility.

Purpose:
Provide trust signals that TaskFlow is reliable.
* */
export default function SocialProof(){
    // Data for testimonials. Using an array of objects keeps the component clean and easy to manage.
    const testimonials = [
        {
            id: 1,
            body: 'TaskFlow has completely transformed how our team works. We are more organized and productive than ever before. The ability to see everything in one place is a game-changer.',
            author: {
                name: 'Sarah Johnson',
                handle: 'Project Manager, Innovate Inc.',
                imageUrl: 'https://i.pravatar.cc/150?u=sarahjohnson',
            },
        },
        {
            id: 2,
            body: 'The simplicity and power of TaskFlow are unmatched. We were up and running in minutes, and it has streamlined our entire workflow. Highly recommended for any team looking to improve efficiency.',
            author: {
                name: 'Michael Chen',
                handle: 'Lead Developer, Tech Solutions',
                imageUrl: 'https://i.pravatar.cc/150?u=michaelchen',
            },
        },
        {
            id: 3,
            body: 'As a remote team, clear communication is key. TaskFlow provides the perfect platform for us to collaborate seamlessly across different time zones. It\'s an essential tool for our success.',
            author: {
                name: 'Emily Rodriguez',
                handle: 'Marketing Director, Creative Co.',
                imageUrl: 'https://i.pravatar.cc/150?u=emilyrodriguez',
            },
        },
        // Add more testimonials as needed
    ];

    return (
        <section className="relative isolate bg-white dark:bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600 dark:text-indigo-400">Testimonials</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Trusted by Teams Worldwide
                    </p>
                </div>
                {/* Testimonial grid */}
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <figure key={testimonial.id} className="flex flex-col rounded-2xl bg-gray-50 p-8 shadow-md dark:bg-gray-800">
                            {/* The flex-grow class makes the blockquote expand to fill available space, pushing the author to the bottom */}
                            <blockquote className="flex-grow text-gray-900 dark:text-gray-300">
                                <p>{`“${testimonial.body}”`}</p>
                            </blockquote>
                            <figcaption className="mt-6 flex items-center gap-x-4">
                                <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt={`Avatar of ${testimonial.author.name}`} />
                                <div>
                                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author.name}</div>
                                    <div className="text-gray-600 dark:text-gray-400">{testimonial.author.handle}</div>
                                </div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}