
import { Github, Twitter, Facebook, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20 py-8 px-6 border-t border-cyberBlue/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">DARKWAVE</h3>
            <p className="text-sm text-gray-400">
              Protecting users from voice cloning scams through education and awareness.
            </p>
            <div className="flex mt-4 space-x-4">
            <a 
  href="https://x.com/Aritra123x" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-gray-400 hover:text-cyberBlue"
>
  <Twitter size={20} />
</a>
<a 
  href="https://www.facebook.com/aritra.kundu.35574" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-gray-400 hover:text-cyberBlue"
>
  <Facebook size={20} />
</a>


<a 
  href="https://github.com/Aritra0101x8e2" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-gray-400 hover:text-cyberBlue"
>
  <Github size={20} />
</a>

<a 
  href="mailto:aritrakundu70@gmail.com" 
  className="text-gray-400 hover:text-cyberBlue"
>
  <Mail size={20} />
</a>

            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-cyberBlue">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-cyberBlue">Terms of Service</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-cyberBlue">Contact Us</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-cyberBlue">Report Fraud</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay Safe</h3>
            <p className="text-sm text-gray-400">
              Remember: Financial institutions will never ask for urgent transfers or sensitive information over the phone.
            </p>
            <Link to="/" className="mt-2 text-sm text-cyberBlue hover:underline inline-block">
              Read More Safety Tips →
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© 2025 DARKWAVE by Aritra . Educational purposes only.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
