import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Twitter, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <Link to="/" className="inline-block mb-6">
              <img
                src="/lovable-uploads/3a96efd8-34e7-4870-947c-9ab9f4346c48.png"
                alt="Watermark Alpha Logo"
                className="h-28 w-auto"
              />
            </Link>
            <div className="flex space-x-4">
              <Button asChild variant="outline" size="icon" className="rounded-full border-zinc-800 hover:border-watermark-gold hover:bg-transparent">
                <a href="https://www.linkedin.com/company/watermark-alpha/posts/?feedView=all" target="_blank" rel="noreferrer">
                  <Linkedin size={18} className="text-zinc-400 hover:text-watermark-gold" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" className="rounded-full border-zinc-800 hover:border-watermark-gold hover:bg-transparent">
                <a href="https://x.com/WatermarkAlpha" target="_blank" rel="noreferrer">
                  <Twitter size={18} className="text-zinc-400 hover:text-watermark-gold" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-zinc-400 hover:text-watermark-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-zinc-400 hover:text-watermark-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/strategy" className="text-zinc-400 hover:text-watermark-gold transition-colors">
                  Strategy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zinc-400 hover:text-watermark-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={16} className="text-watermark-gold mr-2" />
                <a
                  href="mailto:crypto@watermarkalpha.org"
                  className="text-zinc-400 hover:text-watermark-gold transition-colors"
                >
                  crypto@watermarkalpha.org
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="text-watermark-gold mr-2" />
                <a
                  href="tel:+918877990038"
                  className="text-zinc-400 hover:text-watermark-gold transition-colors"
                >
                  +91 88779 90038
                </a>
              </li>
              {/* New Address Section */}
              <li className="flex items-center">
                <MapPin size={21} className="text-watermark-gold mr-2" />
                <span className="text-zinc-400 hover:text-watermark-gold transition-colors">
                 1009 - 1011, Maker Chambers 5, Nariman Point, Mumbai 400021, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8">
          <p className="text-zinc-500 text-sm text-center">
            &copy; {currentYear} Watermark Alpha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
