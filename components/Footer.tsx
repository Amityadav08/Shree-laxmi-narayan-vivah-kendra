import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-cream-100 text-burgundy-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Shree Laxminarayan Vivah Kendra</h3>
            <p className="text-sm">Find your perfect match with our AI-powered matrimonial platform.</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About Us", "Contact", "Privacy Policy", "Terms of Service"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm hover:text-burgundy-600 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Features</h4>
            <ul className="space-y-2">
              {["Advanced Search", "AI Matchmaking", "Video Profiles", "Privacy Controls"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm hover:text-burgundy-600 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {["Twitter", "LinkedIn", "Facebook"].map((platform) => (
                <a key={platform} href="#" className="text-burgundy-600 hover:text-burgundy-800 transition-colors">
                  <span className="sr-only">{platform}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-burgundy-200 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Shree Laxminarayan Vivah Kendra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

