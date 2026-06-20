import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LoginPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white px-6 py-12 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-2xl lg:grid-cols-2">
          {/* Left panel */}
          <div className="flex flex-col justify-between bg-pink-400 p-8 text-white md:p-12">
            <div>
              <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
                Welcome Back
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl">
                Your coffee
                <span className="block">experience starts here</span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-8 text-pink-50 sm:text-lg">
                Sign in to access your account, discover exclusive promos, save your
                favorite drinks, and stay connected with the warm world of Sistech Cafe.
              </p>
            </div>

            <div className="mt-10 rounded-3xl bg-white/15 p-6 backdrop-blur">
              <p className="text-sm uppercase tracking-wide text-pink-100">
                Member Benefit
              </p>
              <h2 className="mt-3 text-2xl font-bold">
                Get early access to new menu drops & special deals
              </h2>
            </div>
          </div>

          {/* Right panel */}
          <div className="p-8 md:p-12">
            <div className="mx-auto max-w-md">
              <h2 className="text-3xl font-bold text-gray-800">Login to your account</h2>
              <p className="mt-3 text-gray-600">
                Enter your details below to continue your Sistech Cafe journey.
              </p>

              <div className="mt-8 space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-pink-400"
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-700">Password</label>
                    <button className="text-sm font-medium text-pink-400">
                      Forgot password?
                    </button>
                  </div>

                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-pink-400"
                  />
                </div>

                <button className="w-full rounded-2xl bg-pink-400 py-3 font-semibold text-white transition hover:bg-pink-500">
                  Sign In
                </button>
              </div>

              <div className="my-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-gray-200"></div>
                <span className="text-sm text-gray-400">or continue with</span>
                <div className="h-px flex-1 bg-gray-200"></div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <button className="rounded-2xl border border-gray-300 px-4 py-3 font-medium text-gray-700 transition hover:bg-gray-50">
                  Google
                </button>
                <button className="rounded-2xl border border-gray-300 px-4 py-3 font-medium text-gray-700 transition hover:bg-gray-50">
                  Apple
                </button>
              </div>

              <p className="mt-8 text-center text-sm text-gray-500">
                Don’t have an account?{" "}
                <span className="font-medium text-pink-400">Create one</span>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}