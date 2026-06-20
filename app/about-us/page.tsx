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
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
        {/* Hero */}
        <section className="px-6 py-16 md:px-12 lg:px-16">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-500">
                About Sistech Cafe
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                A Cafe Built on
                <span className="block text-pink-400">Coffee, Care, and Community</span>
              </h1>

              <p className="mt-6 text-base leading-8 text-gray-700 sm:text-lg">
                Sistech Cafe is more than a coffee shop. It is a space where local
                flavors, creativity, and women empowerment come together. We believe
                every cup can tell a story — of warmth, connection, and meaningful work.
              </p>

              <p className="mt-4 text-base leading-8 text-gray-700 sm:text-lg">
                Founded with the vision of creating a safe and inspiring environment,
                Sistech Cafe celebrates the talent of women in hospitality while
                bringing customers closer to the beauty of Indonesian coffee culture.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-2xl">
              <div className="h-[420px] rounded-3xl bg-gradient-to-br from-pink-100 via-pink-50 to-pink-200"></div>
            </div>
          </div>
        </section>

        {/* Mission + Stats */}
        <section className="px-6 pb-16 md:px-12 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
            <div className="rounded-3xl bg-pink-400 p-8 text-white shadow-xl lg:col-span-2">
              <p className="text-sm uppercase tracking-wide text-pink-100">Our Mission</p>
              <h2 className="mt-3 text-3xl font-bold">
                Serving great coffee while empowering extraordinary women.
              </h2>
              <p className="mt-5 max-w-3xl leading-8 text-pink-50">
                We aim to create a cafe experience that feels warm, inclusive, and
                memorable. Through quality coffee, thoughtful service, and meaningful
                teamwork, we hope to inspire confidence, creativity, and connection in
                every person who walks through our doors.
              </p>
            </div>

            <div className="grid gap-5">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl bg-white p-6 shadow-lg">
                  <h3 className="text-4xl font-extrabold text-pink-400">{stat.number}</h3>
                  <p className="mt-2 text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="px-6 pb-20 md:px-12 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <h2 className="text-4xl font-bold text-gray-800">What We Stand For</h2>
              <p className="mx-auto mt-4 max-w-2xl leading-8 text-gray-600">
                Everything we do at Sistech Cafe is guided by values that keep our
                space warm, purposeful, and full of heart.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="mb-6 h-14 w-14 rounded-2xl bg-pink-100"></div>
                  <h3 className="text-2xl font-bold text-gray-800">{value.title}</h3>
                  <p className="mt-4 leading-8 text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}