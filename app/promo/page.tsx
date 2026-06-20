import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const promos = [
  {
    title: "Buy 1 Get 1 Free",
    tag: "Limited Friday Deal",
    desc: "Every Friday, buy one selected coffee and get another one for free.",
    bg: "bg-pink-400 text-white",
  },
  {
    title: "Student Discount 20%",
    tag: "Student Special",
    desc: "Show your student ID and enjoy 20% off on all beverages.",
    bg: "bg-white text-gray-800",
  },
  {
    title: "Weekend Brunch Combo",
    tag: "Weekend Favorite",
    desc: "Get your favorite coffee paired with pastry at a special combo price.",
    bg: "bg-pink-100 text-gray-800",
  },
];

export default function PromoPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
        {/* Header */}
        <section className="px-6 py-16 md:px-12 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-[2rem] bg-gradient-to-r from-pink-400 to-pink-300 p-8 text-white shadow-2xl md:p-12">
              <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
                Sistech Cafe Promo
              </span>

              <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Sweet Deals for Your
                <span className="block">Coffee Moments</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-pink-50 sm:text-lg">
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
                className={`rounded-3xl p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${promo.bg}`}
              >
                <span className="rounded-full bg-black/10 px-3 py-1 text-sm">
                  {promo.tag}
                </span>

                <h2 className="mt-5 text-3xl font-bold">{promo.title}</h2>
                <p className="mt-4 leading-8">{promo.desc}</p>

                <button className="mt-8 rounded-xl border border-current px-5 py-3 transition hover:bg-white/20">
                  Claim Promo
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Highlight Banner */}
        <section className="px-6 pb-20 md:px-12 lg:px-16">
          <div className="mx-auto max-w-7xl rounded-[2rem] bg-white p-8 shadow-xl md:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-500">
                  This Month’s Highlight
                </span>

                <h2 className="mt-6 text-4xl font-bold leading-tight text-gray-800">
                  Collect stamps and get a free drink on your 5th visit ☕
                </h2>

                <p className="mt-5 leading-8 text-gray-600">
                  Join our simple loyalty program and enjoy rewards every time you
                  stop by. Great coffee tastes even better when it comes with a little bonus.
                </p>

                <button className="mt-8 rounded-xl bg-pink-400 px-6 py-3 text-white transition hover:bg-pink-500">
                  Join Loyalty Program
                </button>
              </div>

              <div className="h-[320px] rounded-3xl bg-gradient-to-br from-pink-100 to-pink-200"></div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}