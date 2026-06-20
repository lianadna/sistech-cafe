import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const menuItems = [
  {
    name: "Americano",
    price: "Rp 25.000",
    desc: "Bold espresso with hot water for a smooth and rich finish.",
    category: "Hot Coffee",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Cappuccino",
    price: "Rp 35.000",
    desc: "Classic espresso topped with silky milk foam.",
    category: "Hot Coffee",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Latte",
    price: "Rp 38.000",
    desc: "Smooth espresso blended with creamy steamed milk.",
    category: "Milk Coffee",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Caramel Latte",
    price: "Rp 42.000",
    desc: "Sweet caramel notes with soft, velvety coffee flavor.",
    category: "Milk Coffee",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Iced Matcha Latte",
    price: "Rp 40.000",
    desc: "Fresh matcha with creamy milk and a lightly sweet taste.",
    category: "Non Coffee",
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Chocolate Croissant",
    price: "Rp 28.000",
    desc: "Flaky buttery pastry with warm chocolate filling.",
    category: "Pastry",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop&q=80",
  },
];

const categories = ["All", "Hot Coffee", "Milk Coffee", "Non Coffee", "Pastry"];

export default function MenuPage() {
  return (
    // Background polos seragam, seluruh tag ornamen melayang sudah dihapus
    <div className="min-h-screen bg-[#fffbfa] text-gray-800">
      <Navbar />

      <main className="relative z-10">
        <section className="px-6 py-14 md:px-12 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FF74B1]/20 bg-[#FF74B1]/10 px-4 py-2 text-sm font-medium text-[#FF74B1] shadow-sm">
              ☕ WOMEN-OWNED CAFE / Our Menu
            </span>

            <div className="mt-6 grid items-center gap-10 lg:grid-cols-2">
              <div>
                {/* Judul disamakan jadi text-gray-900 agar hitam pekat */}
                <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-6xl lg:text-[4.5rem]">
                  Crafted Drinks,
                  <span className="block text-[#FF74B1] mt-2">Fresh Pastries</span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
                  Discover handcrafted coffee, non-coffee drinks, and sweet pastries
                  made to brighten your day. Every menu item is prepared with care,
                  warmth, and a little bit of Sistech magic.
                </p>
              </div>

              <div className="overflow-hidden rounded-3xl bg-white p-2 shadow-xl shadow-[#FF74B1]/5 border border-gray-100">
                <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden bg-gradient-to-br from-[#FF74B1]/10 to-[#FF74B1]/20">
                  <div className="p-8">
                    <p className="text-sm font-medium uppercase tracking-wide text-[#FF74B1]">
                      Featured Drink
                    </p>
                    <h2 className="mt-3 text-3xl font-bold text-gray-800">
                      Strawberry Cloud Latte
                    </h2>
                    <p className="mt-4 leading-7 text-gray-600">
                      A dreamy blend of espresso, milk, and sweet strawberry cream —
                      smooth, playful, and perfect for your afternoon break.
                    </p>
                    <div className="mt-8 flex items-center justify-between gap-4">
                      <span className="text-3xl font-bold text-[#FF74B1]">Rp 45.000</span>
                      <button className="rounded-xl bg-[#FF74B1] px-6 py-3.5 font-semibold text-white transition-all hover:bg-[#e5689f] shadow-md">
                        Order Now
                      </button>
                    </div>
                  </div>
                  <div className="h-64 md:h-full w-full">
                    <img 
                      src="https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&auto=format&fit=crop&q=80" 
                      alt="Strawberry Cloud Latte close up" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`rounded-full px-5 py-3.5 text-sm font-medium transition ${
                    cat === "All"
                      ? "bg-[#FF74B1] text-white shadow-lg shadow-[#FF74B1]/30"
                      : "bg-white text-gray-700 shadow-sm border border-gray-100 hover:bg-[#FF74B1]/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 md:px-12 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-3">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="group overflow-hidden rounded-[2.5rem] bg-white shadow-md border border-gray-100 transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#FF74B1]/10"
              >
                <div className="h-52 bg-gradient-to-br from-[#FF74B1]/10 via-[#FF74B1]/5 to-white">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-t-[2.5rem]" />
                </div>

                <div className="p-8">
                  <span className="rounded-full bg-[#FF74B1]/10 border border-[#FF74B1]/20 px-3 py-1.5 text-xs font-medium text-[#FF74B1]">
                    {item.category}
                  </span>

                  <div className="mt-4 flex items-start justify-between gap-4">
                    <h2 className="text-2xl font-bold text-gray-900 leading-tight">{item.name}</h2>
                    <span className="whitespace-nowrap text-lg font-bold text-[#FF74B1] mt-0.5">
                      {item.price}
                    </span>
                  </div>

                  <p className="mt-3.5 leading-relaxed text-gray-600">{item.desc}</p>

                  <div className="mt-8 flex items-center justify-between gap-4 border-t border-gray-100 pt-6">
                    <button className="rounded-xl bg-[#FF74B1] px-6 py-3.5 font-semibold text-white transition hover:bg-[#e5689f] shadow-md">
                      Add to Cart
                    </button>
                    <button className="text-sm font-medium text-gray-500 transition group-hover:text-[#FF74B1]">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}