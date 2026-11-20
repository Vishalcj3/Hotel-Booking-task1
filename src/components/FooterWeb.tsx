import { Globe, Mail, Phone, Send } from "lucide-react";

function FooterWeb() {
  const socials = [Globe, Mail, Phone, Send];

  return (
    <footer className="bg-black text-white mt-24">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Brand + socials */}
          <div className="max-w-sm">
            <h2 className="text-4xl font-bold mb-4">
              Nginep <span style={{ color: "#ffaf04" }}>Boss</span>
            </h2>
            <p className="text-gray-400 mb-6">
              Your ultimate hotel booking solution. Find and reserve the best
              stays across Indonesia with ease.
            </p>
            <div className="flex gap-3">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-yellow-400 text-white flex items-center justify-center hover:scale-105 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">+62 1234 5678</a></li>
                <li><a href="#" className="hover:text-white">support@nginep.com</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/30 my-10" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between gap-3 text-sm text-gray-300">
          <p>Copyright 2024 Hotel Booking. All Right Reserved</p>
          <p>Use Term &amp; Condition | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterWeb;
