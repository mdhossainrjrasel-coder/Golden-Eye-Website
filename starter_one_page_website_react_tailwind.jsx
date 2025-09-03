import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Mail, Phone, MapPin, ArrowRight, Sparkles, Globe, Shield, Rocket, Shirt } from "lucide-react";

// 🧩 Customized for Golden Eye Clothing

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: <Shirt className="h-6 w-6" aria-hidden />,
    title: "Men’s Wear",
    desc: "Stylish and comfortable clothing for every occasion.",
  },
  {
    icon: <Shirt className="h-6 w-6" aria-hidden />,
    title: "Women’s Wear",
    desc: "Trendy outfits with premium quality fabrics.",
  },
  {
    icon: <Shirt className="h-6 w-6" aria-hidden />,
    title: "Kids Collection",
    desc: "Fashionable and comfy wear for little ones.",
  },
];

const PRODUCTS = [
  { title: "Formal Shirts", img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop", tag: "Men" },
  { title: "Casual Dresses", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop", tag: "Women" },
  { title: "Kids T-Shirts", img: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1200&auto=format&fit=crop", tag: "Kids" },
];

export default function GoldenEyeClothing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white text-gray-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-black/90 border-b border-yellow-400">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-bold text-xl text-yellow-400">
            <Sparkles className="h-5 w-5 text-yellow-400" /> <span>Golden Eye</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-yellow-300 hover:text-yellow-500">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:block">
              <Button className="rounded-2xl bg-yellow-400 text-black hover:bg-yellow-500">Order Now</Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:py-28 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black">
              Premium Clothing by <span className="text-yellow-500">Golden Eye</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Fashion that blends style and comfort. Discover men’s, women’s, and kids’ wear in one place.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button className="rounded-2xl bg-yellow-400 text-black hover:bg-yellow-500">Shop Now</Button>
              <a href="#products" className="inline-flex items-center gap-2 text-sm text-black">
                View Collection <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-yellow-200 blur-2xl opacity-50 rounded-3xl" aria-hidden />
              <img
                src="https://images.unsplash.com/photo-1521335629791-ce4aec67dd53?q=80&w=1200&auto=format&fit=crop"
                alt="Golden Eye Clothing"
                className="relative rounded-3xl shadow-xl ring-1 ring-black/5"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 sm:mb-14 text-center">
            <h2 className="text-3xl font-bold text-black">Our Collection</h2>
            <p className="mt-2 text-gray-600">Trendy and high-quality outfits for all.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => (
              <div key={p.title} className="group rounded-2xl overflow-hidden ring-1 ring-black/5 bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition" />
                </div>
                <div className="p-4">
                  <div className="text-xs uppercase tracking-wide text-yellow-600">{p.tag}</div>
                  <div className="font-semibold text-black">{p.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 sm:py-24 bg-gradient-to-b from-yellow-50 to-white">
        <div className="mx-auto max-w-5xl px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-black">About Golden Eye</h2>
            <p className="mt-3 text-gray-700">
              Golden Eye is a fashion-forward clothing brand based in Bangladesh. We focus on creating stylish yet
              comfortable clothing for men, women, and kids. Our goal is to bring quality apparel within everyone’s reach.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-gray-800">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-yellow-500" /> Premium fabrics</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-yellow-500" /> Modern designs</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-yellow-500" /> Affordable prices</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img className="rounded-2xl ring-1 ring-black/5" src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop" alt="Clothing" />
            <img className="rounded-2xl ring-1 ring-black/5" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop" alt="Showroom" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-black">Get in touch</h2>
            <p className="mt-2 text-gray-600">Order via WhatsApp or send us a message.</p>
          </div>

          <Card className="rounded-2xl">
            <CardContent className="p-6">
              <form
                className="grid sm:grid-cols-2 gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thanks! This demo form isn’t wired up yet.");
                }}
              >
                <div className="sm:col-span-1">
                  <label className="text-sm text-black">Your Name</label>
                  <Input placeholder="e.g., Hossain" required className="mt-1" />
                </div>
                <div className="sm:col-span-1">
                  <label className="text-sm text-black">Email</label>
                  <Input type="email" placeholder="you@example.com" required className="mt-1" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm text-black">Message</label>
                  <Textarea placeholder="What would you like to order?" required className="mt-1" rows={5} />
                </div>
                <div className="sm:col-span-2 flex items-center justify-between mt-2">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700">
                    <span className="inline-flex items-center gap-1"><Phone className="h-4 w-4 text-green-600" /> WhatsApp: +880 1700‑000000</span>
                    <span className="inline-flex items-center gap-1"><Mail className="h-4 w-4 text-yellow-500" /> goldeneye@example.com</span>
                    <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4 text-red-500" /> Dhaka, Bangladesh</span>
                  </div>
                  <Button type="submit" className="rounded-2xl bg-yellow-400 text-black hover:bg-yellow-500">Send</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t bg-black">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-yellow-400">© {new Date().getFullYear()} Golden Eye. All rights reserved.</p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="text-yellow-400 hover:text-yellow-500">Privacy</a>
            <a href="#" className="text-yellow-400 hover:text-yellow-500">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
