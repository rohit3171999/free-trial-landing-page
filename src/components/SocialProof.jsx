/*
* Description:
Testimonials or customer logos to build credibility.

Purpose:
Provide trust signals that TaskFlow is reliable.
* */
export default function SocialProof({authorName, authorHandle, authorBody, imageURL, altText}){
    // Data for testimonials. Using an array of objects keeps the component clean and easy to manage.


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

                        <figure key={authorName} className="flex flex-col rounded-2xl bg-gray-50 p-8 shadow-md dark:bg-gray-800">
                            {/* The flex-grow class makes the blockquote expand to fill available space, pushing the author to the bottom */}
                            <blockquote className="flex-grow text-gray-900 dark:text-gray-300">
                                <p>{authorBody}</p>
                            </blockquote>
                            <figcaption className="mt-6 flex items-center gap-x-4">
                                <img className="h-10 w-10 rounded-full bg-gray-50" src={imageURL} alt={altText} />
                                <div>
                                    <div className="font-semibold text-gray-900 dark:text-white">{authorName}</div>
                                    <div className="text-gray-600 dark:text-gray-400">{authorHandle}</div>
                                </div>
                            </figcaption>
                        </figure>

                </div>
            </div>
        </section>
    );
}