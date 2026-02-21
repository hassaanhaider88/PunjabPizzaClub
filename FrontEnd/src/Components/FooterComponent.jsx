import { BsYoutube } from "react-icons/bs"; 
import { FiInstagram } from "react-icons/fi";
import { FaCcMastercard, FaFacebook, FaGlobe } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineTikTok } from "react-icons/ai";

const FooterComponent = () => {
  const CrtYear = new Date();
  return (
    <footer className="bg-[#af2a2f]  md:px-20 px-5 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2">
            <img
              className="w-40 h-20 bg-cover"
              src="./PPCLogo.png"
              alt="Punjab Pizza Club Lalian logo"
            />
          </div>
          <div className="mt-5">
            <p className="text-green-200  text-xs leading-relaxed mb-3">
              Open hours: 09:00 – 23:00
            </p>
            <p className="text-green-200 text-xs">
              Delivery time: 09:00 – 23:00
            </p>
          </div>
        </div>

        {/* Links */}
        {[
          {
            title: "Restaurants",
            links: [
              { name: "About company", redirect: "about" },
              { name: "Our restaurants", redirect: "restaurants" },
            ],
          },
          {
            title: "Services",
            links: [
              { name: "Promotions", redirect: "romotions" },
              { name: "Shipping and payment", redirect: "shipping-payment" },
            ],
          },
          {
            title: "Legal information",
            links: [
              { name: "Public offer", redirect: "offers" },
              { name: "Privacy policy", redirect: "privacy" },
            ],
          },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-bold text-white mb-3 text-sm">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <Link
                    to={link.redirect}
                    className="text-red-200 text-xs hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Socials */}
        <div>
          <h4 className="font-bold text-white mb-3 text-sm">Follow us</h4>
          <div className="flex gap-5">
                        
            <a
              href="https://www.facebook.com/punjabpizaclub.lallian"
              className=" hover:text-blue-800"
            >
              <FaFacebook size={27} />
            </a>
            <a
              href="https://www.tiktok.com/discover/punjab-pizza-club-lalian"
              className="hover:text-black"
            >
              <AiOutlineTikTok size={27} />
            </a>
            <a
              href="https://www.tiktok.com/discover/punjab-pizza-club-lalian"
              className="hover:text-pink-400"
            >
              <FiInstagram size={27} />
            </a>
            <a
              href="https://www.tiktok.com/discover/punjab-pizza-club-lalian"
              className="hover:text-red-400"
            >
              <BsYoutube size={27} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs">
          <p>© {CrtYear.getFullYear()} Pepe Pizza. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <RiVisaLine size={40} />
            <FaCcMastercard size={40} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
