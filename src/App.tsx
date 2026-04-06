import { motion, useScroll, useTransform } from "motion/react";
import { 
  Phone, 
  MapPin, 
  Dumbbell, 
  Users, 
  Apple, 
  Sparkles, 
  Instagram, 
  Facebook, 
  Twitter, 
  Menu, 
  X,
  ChevronRight,
  Clock
} from "lucide-react";
import { useState, useEffect } from "react";

const services = [
  {
    title: "Personal Training",
    description: "Expert-led one-on-one sessions designed to push your limits and achieve your specific fitness goals.",
    icon: <Dumbbell className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Group Fitness",
    description: "Join our high-energy community classes including Zumba, HIIT, and Yoga for all fitness levels.",
    icon: <Users className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Nutrition Plans",
    description: "Comprehensive nutrition and diet plans tailored to complement your workout routine for maximum results.",
    icon: <Apple className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Spa & Recovery",
    description: "Premium wellness and recovery services including specialized spa treatments to rejuvenate your body.",
    icon: <Sparkles className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-zinc-950/80 backdrop-blur-lg border-b border-white/10 py-4" : "bg-transparent py-6"}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#" className="text-2xl font-display font-extrabold tracking-tighter text-white flex items-center gap-2">
            <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center">
              <Dumbbell className="w-6 h-6 text-black" />
            </div>
            <span>LAGURU</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
            <a href="#home" className="hover:text-brand transition-colors">Home</a>
            <a href="#services" className="hover:text-brand transition-colors">Services</a>
            <a href="#membership" className="hover:text-brand transition-colors">Membership</a>
            <a href="#about" className="hover:text-brand transition-colors">About</a>
            <a href="#contact" className="hover:text-brand transition-colors">Contact</a>
            <a href="tel:07069417558" className="bg-brand text-black px-6 py-2 rounded-full hover:bg-brand-dark transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-zinc-900 border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Home</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Services</a>
            <a href="#membership" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Membership</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">About</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Contact</a>
            <a href="tel:07069417558" className="bg-brand text-black px-6 py-3 rounded-xl text-center font-bold">Call Now</a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity, scale }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/60 to-zinc-950 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Gym Interior"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-widest mb-6 border border-brand/20">
              Premium Fitness Club in Utako
            </span>
            <h1 className="text-5xl md:text-8xl font-display font-black text-white mb-8 leading-none tracking-tighter">
              TRANSFORM YOUR BODY.<br />
              <span className="text-brand">ELEVATE YOUR FITNESS.</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Experience the ultimate fitness destination in Abuja. State-of-the-art equipment, expert trainers, and a holistic approach to wellness.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="tel:07069417558" 
                className="w-full sm:w-auto bg-brand text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-dark transition-all transform hover:scale-105 flex items-center justify-center gap-3 shadow-2xl shadow-brand/20"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a 
                href="#services" 
                className="w-full sm:w-auto bg-white/5 backdrop-blur-sm text-white border border-white/10 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3"
              >
                Explore Services
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-brand rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/5 bg-zinc-900/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Modern Equipment", value: "50+" },
              { label: "Expert Trainers", value: "15+" },
              { label: "Weekly Classes", value: "30+" },
              { label: "Happy Members", value: "500+" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-black text-white mb-2">{stat.value}</div>
                <div className="text-zinc-500 text-sm font-medium uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div className="max-w-2xl">
              <span className="text-brand font-bold uppercase tracking-widest text-sm mb-4 block">Our Expertise</span>
              <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-none">
                EVERYTHING YOU NEED TO <span className="text-zinc-500">SUCCEED.</span>
              </h2>
            </div>
            <p className="text-zinc-400 max-w-sm">
              We provide a comprehensive range of services designed to help you achieve your fitness goals and maintain a healthy lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card rounded-3xl overflow-hidden group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    alt={service.title}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-brand/10 rounded-2xl flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-black transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-zinc-900/50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-3xl overflow-hidden aspect-square"
              >
                <img 
                  src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1000" 
                  className="w-full h-full object-cover"
                  alt="Gym Floor"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand/20 blur-[100px] -z-10" />
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand/10 blur-[100px] -z-10" />
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 glass-card p-8 rounded-2xl z-20 max-w-[240px]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center text-black">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="font-bold text-white">Opening Hours</div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-zinc-400">
                    <span>Mon - Fri</span>
                    <span className="text-white">6am - 10pm</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>Sat - Sun</span>
                    <span className="text-white">8am - 8pm</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <div>
              <span className="text-brand font-bold uppercase tracking-widest text-sm mb-4 block">About Laguru</span>
              <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-8 leading-tight">
                MORE THAN JUST A GYM. <br />
                <span className="text-zinc-500">A COMMUNITY.</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                Laguru Fitness Club & Spa is Abuja's premier fitness destination. We believe in a balanced approach to health, combining intense physical training with rejuvenating wellness services.
              </p>
              <div className="space-y-6 mb-10">
                {[
                  "State-of-the-art cardio and strength equipment",
                  "Luxury spa facilities for post-workout recovery",
                  "Certified professional trainers and nutritionists",
                  "Vibrant community and supportive environment"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center text-brand">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <span className="text-zinc-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <a 
                href="tel:07069417558" 
                className="inline-flex items-center gap-3 text-brand font-bold text-lg group"
              >
                Join Our Community
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section id="membership" className="py-32 bg-zinc-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-widest mb-6 border border-brand/20">
              Membership Plans
            </span>
            <h2 className="text-4xl md:text-7xl font-display font-black text-white mb-8 leading-none tracking-tighter">
              CHOOSE YOUR <span className="text-brand">TIER.</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-medium">
              Flexible membership options designed to fit your lifestyle and fitness goals. Join the elite community of Laguru Fitness.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Monthly",
                price: "₦35,000",
                period: "/month",
                description: "Perfect for those who want flexibility and full access to our premium facilities.",
                features: [
                  "Full Gym Access",
                  "All Group Fitness Classes",
                  "Locker & Shower Facilities",
                  "Initial Fitness Assessment",
                  "10% Discount on Spa Services"
                ],
                highlight: false,
                cta: "Join Monthly"
              },
              {
                name: "Quarterly",
                price: "₦90,000",
                period: "/3 months",
                description: "Our most popular plan for consistent results and better value for your commitment.",
                features: [
                  "Everything in Monthly",
                  "2 Personal Training Sessions",
                  "Nutrition Consultation",
                  "Guest Passes (2 per month)",
                  "20% Discount on Spa Services"
                ],
                highlight: true,
                cta: "Join Quarterly"
              },
              {
                name: "Annual",
                price: "₦320,000",
                period: "/year",
                description: "The ultimate commitment to your health with the best long-term value and exclusive perks.",
                features: [
                  "Everything in Quarterly",
                  "Unlimited Guest Passes",
                  "Private Locker Access",
                  "Monthly Body Composition Analysis",
                  "30% Discount on Spa Services"
                ],
                highlight: false,
                cta: "Join Annual"
              }
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-[32px] p-8 flex flex-col h-full border ${plan.highlight ? 'bg-brand border-brand' : 'bg-zinc-950 border-white/5'}`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-xl">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className={`text-2xl font-display font-black mb-4 ${plan.highlight ? 'text-black' : 'text-white'}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className={`text-4xl font-display font-black ${plan.highlight ? 'text-black' : 'text-white'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm font-bold ${plan.highlight ? 'text-black/60' : 'text-zinc-500'}`}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={`text-sm font-medium leading-relaxed ${plan.highlight ? 'text-black/70' : 'text-zinc-400'}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="flex-grow mb-10">
                  <ul className="space-y-4">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.highlight ? 'bg-black/10 text-black' : 'bg-brand/10 text-brand'}`}>
                          <ChevronRight className="w-3 h-3" />
                        </div>
                        <span className={`text-sm font-bold ${plan.highlight ? 'text-black/80' : 'text-zinc-300'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://www.bountee.co/business/laguru-fitness"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-2xl font-black text-center transition-all transform hover:scale-[1.02] ${plan.highlight ? 'bg-black text-white hover:bg-zinc-900' : 'bg-brand text-black hover:bg-brand-dark'}`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="relative rounded-[40px] overflow-hidden bg-brand p-12 md:p-24 text-center">
            <div className="absolute inset-0 opacity-10">
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover grayscale"
                alt="Background"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-display font-black text-black mb-8 leading-none">
                READY TO START YOUR <br />
                FITNESS JOURNEY?
              </h2>
              <p className="text-black/70 text-xl max-w-xl mx-auto mb-12 font-medium">
                Join Laguru Fitness Club & Spa today and experience the difference. Your transformation starts here.
              </p>
              <a 
                href="tel:07069417558" 
                className="inline-flex items-center gap-4 bg-black text-white px-12 py-6 rounded-full font-black text-xl hover:scale-105 transition-transform shadow-2xl shadow-black/20"
              >
                <Phone className="w-6 h-6" />
                CALL 07069417558
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-zinc-950 pt-32 pb-12 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mb-24">
            <div className="col-span-1 lg:col-span-1">
              <a href="#" className="text-3xl font-display font-black text-white flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center text-black">
                  <Dumbbell className="w-8 h-8" />
                </div>
                <span>LAGURU</span>
              </a>
              <p className="text-zinc-500 leading-relaxed mb-8">
                The ultimate destination for fitness and wellness in Abuja. We help you transform your body and elevate your lifestyle.
              </p>
              <div className="flex gap-4">
                {[
                  { Icon: Instagram, href: "https://www.instagram.com/Laguru_fitness" },
                  { Icon: Facebook, href: "https://www.facebook.com/laguruhealthclub/" }
                ].map(({ Icon, href }, i) => (
                  <a 
                    key={i} 
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-brand hover:text-black hover:border-brand transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Quick Links</h4>
              <ul className="space-y-4 text-zinc-500 font-medium">
                <li><a href="#home" className="hover:text-brand transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-brand transition-colors">Services</a></li>
                <li><a href="#membership" className="hover:text-brand transition-colors">Membership</a></li>
                <li><a href="#about" className="hover:text-brand transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-brand transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Contact Info</h4>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-zinc-500 font-medium text-sm">Ojimadu Nwaeze House, P.O.W Mafemi Crescent off Solomon Lar way, Utako Abuja, Nigeria</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <a href="tel:07069417558" className="text-zinc-500 font-medium hover:text-brand transition-colors">07069417558</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-600 text-sm font-medium">
            <p>© 2026 Laguru Fitness Club & Spa. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
              <a href="#" className="hover:text-zinc-400">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
