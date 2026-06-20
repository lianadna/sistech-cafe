import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const values = [
  {
    title: "Warm Hospitality",
    desc: "We create a welcoming atmosphere where every customer feels at home.",
  },
  {
    title: "Women Empowerment",
    desc: "Our cafe is proudly run by talented women who lead with passion and care.",
  },
  {
    title: "Local Coffee Love",
    desc: "We celebrate Indonesian coffee beans and the stories behind every brew.",
  },
];

const stats = [
  { number: "20+", label: "Coffee Variants" },
  { number: "100%", label: "Women-Led Team" },
  { number: "5K+", label: "Happy Customers" },
];

export default function AboutUsPage() {
  return (
    // Background #fffbfa polos, seragam dengan Halaman Menu
    <div className="min-h-screen bg-[#fffbfa] text-gray-800">
      <Navbar />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="px-6 py-16 md:px-12 lg:px-16">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="rounded-full bg-[#FF74B1]/10 px-4 py-2 text-sm font-medium text-[#FF74B1]">
                About Sistech Cafe
              </span>

              {/* Judul hitam pekat (text-gray-900) */}
              <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                A Cafe Built on
                <span className="block text-[#FF74B1] mt-2">Coffee, Care, and Community</span>
              </h1>

              <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
                Sistech Cafe is more than a coffee shop. It is a space where local
                flavors, creativity, and women empowerment come together. We believe
                every cup can tell a story — of warmth, connection, and meaningful work.
              </p>

              <p className="mt-4 text-base leading-8 text-gray-600 sm:text-lg">
                Founded with the vision of creating a safe and inspiring environment,
                Sistech Cafe celebrates the talent of women in hospitality while
                bringing customers closer to the beauty of Indonesian coffee culture.
              </p>
            </div>

            {/* BAGIAN GAMBAR CAFE (Menggunakan link baru yang lebih stabil) */}
            <div className="rounded-3xl bg-white p-3 shadow-2xl shadow-[#FF74B1]/10 border border-gray-100 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=800&auto=format&fit=crop" 
                alt="Suasana interior Sistech Cafe yang estetik, hangat, dan nyaman" 
                className="h-[420px] w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* Mission + Stats */}
        <section className="px-6 pb-16 md:px-12 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
            <div className="rounded-3xl bg-[#FF74B1] p-8 text-white shadow-xl lg:col-span-2">
              <p className="text-sm uppercase tracking-wide text-white/80 font-semibold">Our Mission</p>
              <h2 className="mt-3 text-3xl font-bold">
                Serving great coffee while empowering extraordinary women.
              </h2>
              <p className="mt-5 max-w-3xl leading-8 text-white/90">
                We aim to create a cafe experience that feels warm, inclusive, and
                memorable. Through quality coffee, thoughtful service, and meaningful
                teamwork, we hope to inspire confidence, creativity, and connection in
                every person who walks through our doors.
              </p>
            </div>

            <div className="grid gap-5">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl bg-white p-6 shadow-lg border border-gray-50">
                  <h3 className="text-4xl font-extrabold text-[#FF74B1]">{stat.number}</h3>
                  <p className="mt-2 text-gray-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="px-6 pb-20 md:px-12 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <h2 className="text-4xl font-bold text-gray-900">What We Stand For</h2>
              <p className="mx-auto mt-4 max-w-2xl leading-8 text-gray-600">
                Everything we do at Sistech Cafe is guided by values that keep our
                space warm, purposeful, and full of heart.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-3xl bg-white p-8 shadow-lg border border-gray-50 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FF74B1]/10"
                >
                  <div className="mb-6 flex h-14 w-14 rounded-2xl bg-[#FF74B1]/10 items-center justify-center text-2xl">
                    ✨
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{value.title}</h3>
                  <p className="mt-4 leading-8 text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}