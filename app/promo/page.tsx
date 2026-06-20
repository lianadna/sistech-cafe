import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const promos = [
  {
    title: "Buy 1 Get 1 Free",
    tag: "Limited Friday Deal",
    desc: "Every Friday, buy one selected coffee and get another one for free.",
    bg: "bg-[#FF74B1] text-white", // Diubah ke warna tema utama
  },
  {
    title: "Student Discount 20%",
    tag: "Student Special",
    desc: "Show your student ID and enjoy 20% off on all beverages.",
    bg: "bg-white text-gray-900 border border-gray-100", // Dipertegas
  },
  {
    title: "Weekend Brunch Combo",
    tag: "Weekend Favorite",
    desc: "Get your favorite coffee paired with pastry at a special combo price.",
    bg: "bg-[#FF74B1]/10 text-gray-900", // Diubah ke warna tema transparan
  },
];

export default function PromoPage() {
  return (
    // Background disamakan dengan Landing Page, Menu, dan About Us
    <div className="min-h-screen bg-[#fffbfa] text-gray-800">
      <Navbar />

      <main className="relative z-10">
        {/* Header */}
        <section className="px-6 py-16 md:px-12 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-[2rem] bg-gradient-to-r from-[#FF74B1] to-[#e0659b] p-8 text-white shadow-2xl shadow-[#FF74B1]/20 md:p-12">
              <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
                Sistech Cafe Promo
              </span>

              <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Sweet Deals for Your
                <span className="block">Coffee Moments</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
                Explore our latest discounts, seasonal specials, and limited offers
                designed to make every cafe visit a little more delightful.
              </p>
            </div>
          </div>
        </section>

        {/* Promo Cards */}
        <section className="px-6 pb-14 md:px-12 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-3">
            {promos.map((promo) => (
              <div
                key={promo.title}
                className={`rounded-3xl p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FF74B1]/10 ${promo.bg}`}
              >
                <span className="rounded-full bg-black/10 px-3 py-1 text-sm font-medium">
                  {promo.tag}
                </span>

                <h2 className="mt-5 text-3xl font-bold">{promo.title}</h2>
                <p className="mt-4 leading-8 opacity-90">{promo.desc}</p>

                <button className="mt-8 rounded-xl border border-current px-5 py-3 font-semibold transition hover:bg-black/5">
                  Claim Promo
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Highlight Banner */}
        <section className="px-6 pb-20 md:px-12 lg:px-16">
          <div className="mx-auto max-w-7xl rounded-[2rem] bg-white p-8 shadow-xl border border-gray-50 md:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <span className="rounded-full bg-[#FF74B1]/10 px-4 py-2 text-sm font-medium text-[#FF74B1]">
                  This Month’s Highlight
                </span>

                <h2 className="mt-6 text-4xl font-bold leading-tight text-gray-900">
                  Collect stamps and get a free drink on your 5th visit ☕
                </h2>

                <p className="mt-5 leading-8 text-gray-600">
                  Join our simple loyalty program and enjoy rewards every time you
                  stop by. Great coffee tastes even better when it comes with a little bonus.
                </p>

                <button className="mt-8 rounded-xl bg-[#FF74B1] px-6 py-3 font-semibold text-white transition hover:bg-[#e5689f] shadow-md">
                  Join Loyalty Program
                </button>
              </div>

              {/* Ditambahkan gambar agar senada dengan halaman About Us */}
              <div className="h-[320px] rounded-3xl bg-white p-2 shadow-lg shadow-[#FF74B1]/10 border border-gray-100 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop" 
                  alt="Loyalty program stamp card highlight" 
                  className="h-full w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}