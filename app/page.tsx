
import TipackFeatureCard from '@/components/tipack-ui/TipackFeatureCard';
import TipackComparisonTable from '@/components/tipack-ui/TipackComparisonTable';
import TipackNewsletter from '@/components/tipack-ui/TipackNewsletter';
import TipackShowcase from '@/components/tipack-ui/TipackShowcase';
import TipackTestimonial from '@/components/tipack-ui/TipackTestimonial';
import { Package, Zap, Leaf } from 'lucide-react';
import Hero from '@/components/Hero';

export default function TipackDemoPage() {
    return (
        <>

            <main>
                <Hero />

            </main>
            <div className="min-h-screen bg-[var(--color-base)] p-8 md:p-16 space-y-24">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black font-heading tracking-tight mb-6 text-[var(--color-text-main)]">
                        The <span className="text-[var(--color-secondary)]">Tipack</span> UI Kit
                    </h1>
                    <p className="text-xl text-[var(--color-text-sub)]">
                        A collection of vibrant, playful, and conversion-focused components for your packaging brand.
                    </p>
                </div>

                {/* 1. Feature Cards */}
                <section>
                    <h2 className="text-3xl font-bold mb-8 text-center">1. Feature Cards</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <TipackFeatureCard
                            title="Eco-Friendly"
                            description="Our materials are 100% recyclable and compostable. Good for the planet, great for your brand."
                            variant="green"
                            icon={<Leaf className="w-8 h-8" />}
                        />
                        <TipackFeatureCard
                            title="Lightning Fast"
                            description="Order today, ship tomorrow. We don't mess around when it comes to speed."
                            variant="purple" // secondary
                            icon={<Zap className="w-8 h-8" />}
                        />
                        <TipackFeatureCard
                            title="Custom Design"
                            description="Our design team works with you to create the perfect unboxing experience."
                            variant="yellow" // primary
                            icon={<Package className="w-8 h-8" />}
                        />
                    </div>
                </section>

                {/* 2. Comparison Table */}
                <section className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">2. Comparison Table</h2>
                    <TipackComparisonTable
                        rows={[
                            { feature: "Custom Branding", us: true, them: false },
                            { feature: "Minimum Order Quantity", us: "50 Units", them: "5000 Units" },
                            { feature: "Lead Time", us: "3 Days", them: "3 Weeks" },
                            { feature: "Eco-certified", us: true, them: "Maybe?" },
                        ]}
                    />
                </section>

                {/* 3. Newsletter */}
                <section>
                    <h2 className="text-3xl font-bold mb-8 text-center">3. Newsletter Section</h2>
                    <TipackNewsletter />
                </section>

                {/* 4. Showcase */}
                <section>
                    <h2 className="text-3xl font-bold mb-8 text-center">4. Product Showcase (Flip Cards)</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        <TipackShowcase
                            item={{
                                id: 1,
                                title: "Mailer Box",
                                image: "https://images.unsplash.com/photo-1628144211603-9bb6da0d8544?q=80&w=300&auto=format&fit=crop",
                                description: "Sturdy, stylish, and sustainable. The perfect vessel for your products.",
                                color: "bg-blue-400"
                            }}
                        />
                        <TipackShowcase
                            item={{
                                id: 2,
                                title: "Tape & Sticker",
                                image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=300&auto=format&fit=crop",
                                description: "Seal the deal with custom printed tape that screams your brand name.",
                                color: "bg-[var(--color-primary)]"
                            }}
                        />
                        <TipackShowcase
                            item={{
                                id: 3,
                                title: "Tote Bags",
                                image: "https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?q=80&w=300&auto=format&fit=crop",
                                description: "Reusable totes that your customers will actually want to carry around.",
                                color: "bg-[var(--color-accent-green)]"
                            }}
                        />
                    </div>
                </section>

                {/* 5. Testimonial */}
                <section className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">5. Testimonial</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <TipackTestimonial
                            quote="I've never seen packaging this good. My customers post it on Instagram before they even open it!"
                            name="Sarah Jenkins"
                            role="Founder"
                            company="Glow Cosmetics"
                            avatar="https://randomuser.me/api/portraits/women/44.jpg"
                        />
                        <TipackTestimonial
                            quote="Tipack saved our launch. The speed and quality are unmatched in the industry."
                            name="Mike Ross"
                            role="Operations"
                            company="TechGear"
                            avatar="https://randomuser.me/api/portraits/men/32.jpg"
                        />
                    </div>
                </section>

            </div>

        </>

    );
}
