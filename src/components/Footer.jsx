import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";

const paymentMethods = [
  { name: "Visa", icon: "https://img.alicdn.com/tfs/TB1xcMWdEKF3KVjSZFEXXXExFXa-68-48.png" },
  { name: "Mastercard", icon: "https://ae01.alicdn.com/kf/S7b20ce778ba44e60a062008c35e98b57M/216x144.png" },
  { name: "PayPal", icon: "https://ae01.alicdn.com/kf/S8df1a1d99c8049d1b1a86c9a144719b6W/216x144.png" },
  { name: "Apple Pay", icon: "https://ae01.alicdn.com/kf/S2a5881f5906b4fb58a0c6da600ddf7bf1/216x144.png" },
  { name: "Google Pay", icon: "https://ae01.alicdn.com/kf/S173da9e53a234dcb9795cebd1856c4d7J/216x144.png" },
];

export default function Component() {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <p className="text-sm text-gray-600">
              We're dedicated to providing the best shopping experience with a
              wide range of products and excellent customer service.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shipping Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sitemap
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Store Locator
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-sm text-gray-600 mb-2">
              Stay updated with our latest offers and products.
            </p>
            <form className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="flex-grow"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/dev.option/" className="text-gray-600 hover:text-gray-900">
              <Facebook size={24} />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://www.instagram.com/dev.option/" className="text-gray-600 hover:text-gray-900">
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="https://www.instagram.com/dev.option/" className="text-gray-600 hover:text-gray-900">
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">We accept:</span>
            <div className="flex space-x-2">
              {paymentMethods.map((method) => (
                <img
                  key={method.name}
                  src={method.icon}
                  alt={method.name}
                  className="h-8"
                  title={method.name}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Your E-commerce Store. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
