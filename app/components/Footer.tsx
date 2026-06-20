import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-pink-400 text-white">
      <div className="mx-auto max-w-7xl px-8 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-2xl font-bold">SISTECH CAFE</h3>
            <p className="text-sm">
              Local Coffee brewed by Extraordinary Women in Indonesia.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>Menu</li>
              <li>About Us</li>
              <li>Promo</li>
              <li>Login</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact</h4>
            <p>Email: hello@sistechcafe.com</p>
            <p>Phone: +62 812 3456 7890</p>
            <p>Jakarta, Indonesia</p>
          </div>
        </div>

        <div className="mt-10 border-t border-pink-300 pt-6 text-center">
          <div className="mb-4 flex justify-center gap-6 text-2xl">
            <FaInstagram />
            <FaTwitter />
            <FaWhatsapp />
          </div>

          <p>Made with Love by Yulian Adiprana</p>
        </div>
      </div>
    </footer>
  );
}