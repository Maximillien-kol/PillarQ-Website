"use client"

import Link from "next/link"

const blogPosts = [
    {
        id: 1,
        title: "Minimalist Interior",
        description: "We're honored to have partnered with these reputable organizations on impactful architectural",
        image: "/post 1.jpg",
        link: "/blog/minimalist-interior"
    },
    {
        id: 2,
        title: "Modern Facades",
        description: "We're honored to have partnered with these reputable organizations on impactful architectural",
        image: "/post 2.jpg",
        link: "/blog/modern-facades"
    },
    {
        id: 3,
        title: "Sustainable Living",
        description: "We're honored to have partnered with these reputable organizations on impactful architectural",
        image: "/post 3.jpg",
        link: "/blog/sustainable-living"
    }
]

export function BlogSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-3">
                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                        Resources Blog & News
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        Explore our blog for the latest architecture trends, design insights, project updates, and industry news to stay inspired.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-35">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="group cursor-pointer">
                            <div className="aspect-[4/3] overflow-hidden mb-6 bg-gray-100">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-3">
                                {post.title}
                            </h3>
                            <p className="text-black mb-4 leading-relaxed">
                                {post.description}
                            </p>
                            <Link
                                href={post.link}
                                className="inline-block text-black font-medium border-b border-black pb-0.5"
                            >
                                Learn More
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
