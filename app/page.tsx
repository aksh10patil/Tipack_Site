
import TipackFeatureCard from '@/components/tipack-ui/TipackFeatureCard';
import TipackNewsletter from '@/components/tipack-ui/TipackNewsletter';
import TipackTestimonial from '@/components/tipack-ui/TipackTestimonial';
import { Package, Zap, Leaf, Check, X, Truck, Palette, ShieldCheck, ShoppingBag, ScanLine } from 'lucide-react';
import Hero from '@/components/Hero';
import CelloTape from '@/components/CelloTape';



const PRODUCTS = [
    {
        id: 1,
        title: "Heavy Duty Corrugated Boxes",
        image: "/images/big_box.png",
        description: "Built for endurance. Safely transport heavy and bulky items without breaking a sweat.",
        icon: Package,
        spec: "FIG-A // CORRUGATED"
    },
    {
        id: 2,
        title: "Zip Lock Pouch",
        image: "/images/packet.png",
        description: "Perfect seal. Keep your contents fresh and secure with our premium zip pouches.",
        icon: ShieldCheck,
        spec: "FIG-B // POUCH"
    },
    {
        id: 4,
        title: "Food Packaging Boxes",
        image: "/images/Food_box.png",
        description: "Food-safe and insulated. Maintain the quality and taste of your edibles.",
        icon: Leaf,
        spec: "FIG-D // FOOD-GRADE"
    },
    {
        id: 5,
        title: "Layered Boxes",
        image: "/images/Layered_boxes.png",
        description: "Multi-level protection. Ideal for separating and securing delicate individual components.",
        icon: Package,
        spec: "FIG-E // LAYERED"
    },
    {
        id: 6,
        title: "Heavy Duty Cube",
        image: "/images/heavy_duty_cube.png",
        description: "Maximum volume, maximum strength. Perfect for heavy square items.",
        icon: Package,
        spec: "FIG-F // CUBIC"
    },
    {
        id: 7,
        title: "Wardrobe Box",
        image: "/images/wardrobe_box.png",
        description: "Hang garments safely in transit. The ultimate moving solution for clothing.",
        icon: ShoppingBag,
        spec: "FIG-G // APPAREL"
    }
];

export default function TipackDemoPage() {
    return (
        <>

            <main>
                <Hero />
                <CelloTape />
            </main>
            <div className="min-h-screen bg-[var(--color-base)] p-8 md:p-16 space-y-24">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black font-heading tracking-tight mb-6 text-[var(--color-text-main)]">
                        The <span className="text-[var(--color-secondary)]">Tipack</span> Features
                    </h1>
                    <p className="text-xl text-[var(--color-text-sub)]">
                        A collection of vibrant, playful, and conversion-focused packaging for your brand.
                    </p>
                </div>

                {/* 1. Feature Cards */}
                <section>
                    {/* Centering container */}
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                            <TipackFeatureCard
                                title="Eco-Friendly Materials"
                                description="All our packaging is recyclable and compostable, helping your brand stay sustainable without compromising quality."
                                variant="green"
                                icon={<Leaf className="w-8 h-8" />}
                            />

                            <TipackFeatureCard
                                title="Fast Turnaround"
                                description="With optimized production and logistics, your orders move quickly from checkout to delivery."
                                variant="purple"
                                icon={<Zap className="w-8 h-8" />}
                            />

                            <TipackFeatureCard
                                title="Custom Packaging"
                                description="Tailored designs and sizes that perfectly match your product and brand identity."
                                variant="yellow"
                                icon={<Package className="w-8 h-8" />}
                            />

                            <TipackFeatureCard
                                title="Secure Protection"
                                description="Durable structures designed to keep your products safe during handling and transit."
                                variant="blue"
                                icon={<ShieldCheck className="w-8 h-8" />}
                            />

                            <TipackFeatureCard
                                title="Reliable Delivery"
                                description="Consistent shipping and tracking ensure your packaging arrives when you need it."
                                variant="red"
                                icon={<Truck className="w-8 h-8" />}
                            />

                            <TipackFeatureCard
                                title="Premium Finishes"
                                description="Enhance your unboxing experience with high-quality textures, coatings, and print effects."
                                variant="orange"
                                icon={<Palette className="w-8 h-8" />}
                            />

                        </div>
                    </div>
                </section>

                {/* 2. Comparison Table */}
                <section className="max-w-6xl mx-auto px-4 md:px-8 py-20 bg-[#FFFEF9] text-black">

                    {/* HEADER */}
                    <div className="flex flex-col items-center mb-12 text-center">
                        <div className="relative inline-block mb-4 transform -rotate-2">

                            <div
                                className="absolute left-[-11px] top-0 bottom-0 w-[12px]"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23F4D03F' d='M12 0L0 6l12 6V0z'/%3E%3C/svg%3E")`,
                                    backgroundSize: "12px 12px",
                                }}
                            />

                            <div
                                className="absolute right-[-11px] top-0 bottom-0 w-[12px]"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23F4D03F' d='M0 0l12 6-12 6V0z'/%3E%3C/svg%3E")`,
                                    backgroundSize: "12px 12px",
                                }}
                            />

                            <div className="bg-[#F4D03F] px-8 py-2 text-xl font-black uppercase border-y-2 border-black text-black">
                                Tale of the Tape
                            </div>
                        </div>

                        <h2 className="text-5xl font-black uppercase tracking-tighter text-black">
                            Us <span className="text-gray-500">vs</span> Them
                        </h2>
                    </div>

                    {/* BOARD */}
                    <div className="bg-white border-2 border-black shadow-[8px_8px_0px_0px_#000]">

                        {/* HEADERS */}
                        <div className="grid grid-cols-12 border-b-2 border-black">

                            <div className="col-span-4 p-5 bg-black text-white font-mono text-xs uppercase tracking-widest">
                                Parameter
                            </div>

                            <div className="col-span-4 p-5 bg-[#F4D03F] text-center border-l-2 border-black relative">
                                <div className="absolute top-0 right-0 bg-black text-white text-[10px] px-2 py-1">
                                    WINNER
                                </div>
                                <h3 className="font-black text-2xl uppercase italic text-black">
                                    Tipack
                                </h3>
                            </div>

                            <div className="col-span-4 p-5 bg-white text-center border-l-2 border-black">
                                <h3 className="font-bold text-2xl uppercase text-white line-through decoration-red-500">
                                    The Others
                                </h3>
                            </div>
                        </div>

                        {/* ROWS */}
                        {[
                            { feature: "Custom Branding", tipack: true, them: false },
                            { feature: "Minimum Order Qty", tipack: "50 Units", them: "5000 Units" },
                            { feature: "Lead Time", tipack: "3 Days", them: "3 Weeks" },
                            { feature: "Eco-certified", tipack: true, them: "Maybe?" },
                        ].map((row, idx) => (
                            <div key={idx} className="grid grid-cols-12 border-b-2 border-black last:border-b-0">

                                <div className="col-span-4 p-5 bg-gray-50 border-r-2 border-black text-black font-bold uppercase">
                                    {row.feature}
                                </div>

                                <div className="col-span-4 p-5 flex justify-center items-center border-r-2 border-black bg-[#fffdf5] text-black">
                                    {row.tipack === true ? (
                                        <div className="bg-black text-[#F4D03F] p-1 rounded-full">
                                            <Check size={20} strokeWidth={4} />
                                        </div>
                                    ) : (
                                        <span className="font-black text-xl uppercase">{row.tipack}</span>
                                    )}
                                </div>

                                <div className="col-span-4 p-5 flex justify-center items-center bg-gray-100 text-black">
                                    {row.them === false ? (
                                        <X size={28} className="text-red-500" strokeWidth={3} />
                                    ) : (
                                        <span className="font-mono font-bold line-through decoration-red-500">
                                            {row.them}
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* FOOTER */}
                        <div className="p-4 bg-black text-white text-center font-mono text-xs uppercase tracking-widest">
                            Verdict: Stop wasting money on cardboard that melts.
                        </div>
                    </div>
                </section>




                {/* 4. Showcase */}
                <section className="max-w-6xl mx-auto px-4 md:px-8 py-20 bg-[#FFFEF9] text-[#2D2424]">

                    {/* --- HEADER --- */}
                    <div className="flex flex-col items-center mb-16 text-center">
                        <div className="relative inline-block mb-4 transform rotate-1">
                            {/* Yellow Serrated Edges */}
                            <div className="absolute left-[-11px] top-0 bottom-0 w-[12px]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23F4D03F' d='M12 0L0 6l12 6V0z'/%3E%3C/svg%3E")`, backgroundSize: "12px 12px" }} />
                            <div className="absolute right-[-11px] top-0 bottom-0 w-[12px]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23F4D03F' d='M0 0l12 6-12 6V0z'/%3E%3C/svg%3E")`, backgroundSize: "12px 12px" }} />

                            <div className="bg-[#F4D03F] px-8 py-2 text-xl font-black uppercase tracking-tight shadow-[0px_4px_6px_rgba(0,0,0,0.1)] border-y-2 border-black text-black">
                                The Lineup
                            </div>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-black">
                            Standard <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">Issue</span>
                        </h2>
                    </div>

                    {/* --- GRID --- */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {PRODUCTS.map((product, index) => {
                            // Map your existing PRODUCTS array to the expected visual style
                            // We use index to assign the specific "FIG" label if not present in data
                            const specs = ["FIG-A // CORRUGATED", "FIG-B // ADHESIVE", "FIG-C // TEXTILE"];

                            return (
                                <div key={product.id} className="group relative w-full md:w-[350px] bg-white border-2 border-black p-4 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_#F4D03F] shadow-[8px_8px_0px_0px_#2D2424]">

                                    {/* Top Label */}
                                    <div className="flex justify-between items-center mb-3 border-b-2 border-black pb-2">
                                        <span className="font-mono text-xs font-bold text-gray-500 uppercase">{product.spec || specs[index]}</span>
                                        {product.icon && <product.icon size={18} className="text-black" />}
                                    </div>

                                    {/* Image Area */}
                                    <div className="aspect-square bg-[#F2F2F2] border-2 border-black mb-4 relative overflow-hidden group-hover:border-black transition-colors">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                                        />
                                        {/* Overlay Grid Pattern */}
                                        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 flex flex-col">
                                        <h3 className="text-2xl font-black uppercase tracking-tight mb-2 text-black leading-none group-hover:underline decoration-4 decoration-[#F4D03F] underline-offset-4">
                                            {product.title}
                                        </h3>
                                        <p className="text-sm font-medium text-gray-600 leading-snug mb-6">
                                            {product.description}
                                        </p>

                                        <button className="mt-auto w-full bg-black text-white py-3 font-bold uppercase tracking-widest flex items-center justify-center gap-2 group-hover:bg-[#F4D03F] group-hover:text-black transition-colors border-2 border-transparent group-hover:border-black">
                                            View Specs <ScanLine size={16} />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-8 text-center">Newsletter</h2>
                    <TipackNewsletter />
                </section>


                <section className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
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
