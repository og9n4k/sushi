import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, Instagram, Facebook, MapPin, Phone } from 'lucide-react';

const ROLLS = [
  {
    id: 1,
    name: 'Golden Dragon',
    description: 'Eel, cream cheese, avocado, tobiko caviar, gold leaf, unagi sauce.',
    price: '£24',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Truffle Salmon',
    description: 'Seared salmon, truffle oil, cream cheese, asparagus, microgreens.',
    price: '£18',
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Imperial Crab',
    description: 'Crab meat, avocado, Japanese mayo, black flying fish roe.',
    price: '£28',
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Black Pearl',
    description: 'Black rice, bluefin tuna, scallop, mango-chili sauce, sesame.',
    price: '£22',
    image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Wagyu Beef Roll',
    description: 'A5 Wagyu beef, asparagus, crispy leek, truffle ponzu sauce.',
    price: '£32',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Spicy Tuna Volcano',
    description: 'Spicy tuna, cucumber, topped with tempura flakes and spicy mayo.',
    price: '£16',
    image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 7,
    name: 'Vegan Zen',
    description: 'Shiitake mushrooms, avocado, cucumber, pickled daikon, sesame dressing.',
    price: '£14',
    image: 'https://images.unsplash.com/photo-1582450871972-ab5ca641643d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 8,
    name: 'Lobster Tempura',
    description: 'Lobster tail tempura, avocado, tobiko, yuzu mayo.',
    price: '£35',
    image: 'https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=800&auto=format&fit=crop',
  },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAllItems, setShowAllItems] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const displayedRolls = showAllItems ? ROLLS : ROLLS.slice(0, 4);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f2ed] selection:bg-[#D4AF37] selection:text-[#050505]">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'glass-panel py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div 
            className="text-xl tracking-widest uppercase font-light cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="serif italic mr-1">O</span>kāmi
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#menu" className="small-caps hover:text-white transition-colors">Menu</a>
            <a href="#philosophy" className="small-caps hover:text-white transition-colors">Philosophy</a>
            <a href="#contact" className="small-caps hover:text-white transition-colors">Contact</a>
            <button className="nav-pill" onClick={() => setIsBookingOpen(true)}>Book a Table</button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[#f5f2ed]"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-[#050505] flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-6 right-6 text-[#f5f2ed]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col items-center space-y-8 text-2xl serif">
              <a href="#menu" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#D4AF37] transition-colors">Menu</a>
              <a href="#philosophy" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#D4AF37] transition-colors">Philosophy</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#D4AF37] transition-colors">Contact</a>
              <button 
                className="mt-8 nav-pill text-lg px-8 py-3"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsBookingOpen(true);
                }}
              >
                Book a Table
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=2000&auto=format&fit=crop"
            alt="Premium Sushi"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-transparent to-[#050505]"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="small-caps mb-6 text-[#D4AF37]"
          >
            The Art of Taste
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] mb-8"
          >
            Perfection <br />
            <span className="italic text-[#ffffff]/80">in every detail</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <a href="#menu" className="inline-flex items-center space-x-3 group cursor-pointer">
              <span className="small-caps group-hover:text-white transition-colors">View Menu</span>
              <div className="w-10 h-10 rounded-full border border-[#f5f2ed]/30 flex items-center justify-center group-hover:bg-[#f5f2ed] group-hover:text-[#050505] transition-all duration-300">
                <ChevronRight size={16} />
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?q=80&w=1000&auto=format&fit=crop"
                alt="Chef preparing sushi"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#0a0a0a] border border-[#f5f2ed]/10 flex items-center justify-center p-6 hidden md:flex">
              <p className="serif italic text-xl text-center text-[#D4AF37]">
                "Only the freshest ingredients"
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="small-caps mb-4 text-[#D4AF37]">The Okāmi Philosophy</h2>
            <h3 className="serif text-4xl md:text-5xl font-light mb-8 leading-tight">
              Japanese Traditions <br />in a Modern Interpretation
            </h3>
            <div className="space-y-6 text-[#f5f2ed]/70 font-light leading-relaxed">
              <p>
                We don't just make rolls. We create a gastronomic experience that awakens the senses. Every ingredient is selected with obsessive care: from premium Akita Komachi rice to the freshest bluefin tuna, delivered by direct flights.
              </p>
              <p>
                Our chefs trained with masters in Tokyo to bring authentic techniques to your plate, adding a signature touch that makes each roll a unique work of art.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-[#0a0a0a] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <h2 className="small-caps mb-4 text-[#D4AF37]">Signature Menu</h2>
              <h3 className="serif text-4xl md:text-5xl font-light">Premium Rolls</h3>
            </div>
            <button className="mt-6 md:mt-0 nav-pill self-start md:self-auto">
              Download Full Menu (PDF)
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {displayedRolls.map((roll, index) => (
              <motion.div
                key={roll.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-sm mb-6 aspect-[4/3]">
                  <img
                    src={roll.image}
                    alt={roll.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between items-start mb-3">
                  <h4 className="serif text-2xl">{roll.name}</h4>
                  <span className="font-mono text-sm tracking-widest text-[#D4AF37]">{roll.price}</span>
                </div>
                <p className="text-[#f5f2ed]/60 font-light text-sm leading-relaxed max-w-[90%]">
                  {roll.description}
                </p>
                <div className="mt-6 horizontal-line w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <button 
              className="nav-pill px-10 py-4 text-sm"
              onClick={() => setShowAllItems(!showAllItems)}
            >
              {showAllItems ? 'Show Less' : 'View All Items'}
            </button>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <AnimatePresence>
        {isBookingOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-[#050505]/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#0a0a0a] border border-[#f5f2ed]/10 p-8 md:p-12 rounded-sm max-w-md w-full relative"
            >
              <button
                className="absolute top-6 right-6 text-[#f5f2ed]/60 hover:text-white transition-colors"
                onClick={() => setIsBookingOpen(false)}
              >
                <X size={24} />
              </button>
              
              <div className="text-center mb-8">
                <h3 className="serif text-3xl mb-2">Book a Table</h3>
                <p className="text-[#f5f2ed]/60 font-light text-sm">Join us for an unforgettable experience.</p>
              </div>
              
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Booking request sent!'); setIsBookingOpen(false); }}>
                <div>
                  <label className="block small-caps mb-2 text-[#f5f2ed]/60">Name</label>
                  <input type="text" required className="w-full bg-transparent border-b border-[#f5f2ed]/20 py-2 text-[#f5f2ed] focus:outline-none focus:border-[#D4AF37] transition-colors" />
                </div>
                <div>
                  <label className="block small-caps mb-2 text-[#f5f2ed]/60">Phone</label>
                  <input type="tel" required className="w-full bg-transparent border-b border-[#f5f2ed]/20 py-2 text-[#f5f2ed] focus:outline-none focus:border-[#D4AF37] transition-colors" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block small-caps mb-2 text-[#f5f2ed]/60">Date</label>
                    <input type="date" required className="w-full bg-transparent border-b border-[#f5f2ed]/20 py-2 text-[#f5f2ed] focus:outline-none focus:border-[#D4AF37] transition-colors" />
                  </div>
                  <div>
                    <label className="block small-caps mb-2 text-[#f5f2ed]/60">Guests</label>
                    <select className="w-full bg-transparent border-b border-[#f5f2ed]/20 py-2 text-[#f5f2ed] focus:outline-none focus:border-[#D4AF37] transition-colors [&>option]:bg-[#0a0a0a]">
                      <option>1 Person</option>
                      <option>2 People</option>
                      <option>3 People</option>
                      <option>4 People</option>
                      <option>5+ People</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="w-full bg-[#D4AF37] text-[#050505] py-4 uppercase tracking-widest text-sm font-medium hover:bg-white transition-colors mt-8">
                  Confirm Booking
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer id="contact" className="pt-24 pb-12 px-6 border-t border-[#f5f2ed]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="text-3xl tracking-widest uppercase font-light mb-6">
              <span className="serif italic mr-1">O</span>kāmi
            </div>
            <p className="text-[#f5f2ed]/60 font-light max-w-sm">
              Premium delivery and Japanese restaurant. Art you can taste.
            </p>
          </div>
          
          <div>
            <h5 className="small-caps mb-6 text-white">Contact Us</h5>
            <ul className="space-y-4 text-[#f5f2ed]/70 font-light text-sm">
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-[#D4AF37]" />
                <span>+44 20 7946 0958</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={16} className="text-[#D4AF37]" />
                <span>15 Berkeley Square, Mayfair, London</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="small-caps mb-6 text-white">Opening Hours</h5>
            <ul className="space-y-4 text-[#f5f2ed]/70 font-light text-sm">
              <li className="flex justify-between">
                <span>Mon - Thu</span>
                <span>12:00 PM - 12:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Fri - Sun</span>
                <span>12:00 PM - 02:00 AM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="horizontal-line mb-8"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs text-[#f5f2ed]/40 font-light">
          <p>© 2025 Okāmi Premium Sushi. All rights reserved. (doublewwwwwww)</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors"><Instagram size={18} /></a>
            <a href="#" className="hover:text-white transition-colors"><Facebook size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
