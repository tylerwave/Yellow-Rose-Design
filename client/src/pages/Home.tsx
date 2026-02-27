import { Instagram, Facebook, Phone, Mail, MapPin, CheckCircle, Clock, Users, Star, ArrowRight } from "lucide-react";
import { Link } from "wouter";

// Import generated images
import logoImg from "@/assets/images/logo.png";
import heroImg from "@/assets/images/hero.png";
import apparelImg from "@/assets/images/apparel.png";
import glasswareImg from "@/assets/images/glassware.png";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Yellow Rose Swag & Design Logo" className="h-16 w-16 object-contain" />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl text-primary leading-tight">Yellow Rose</span>
              <span className="text-xs text-secondary font-medium uppercase tracking-widest">Swag & Design</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-foreground/80">
            <a href="#services" className="hover:text-secondary transition-colors">Services</a>
            <a href="#products" className="hover:text-secondary transition-colors">Products</a>
            <a href="#about" className="hover:text-secondary transition-colors">About</a>
            <a href="#contact" className="hover:text-secondary transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://instagram.com/yellowrose_swag" 
              target="_blank" 
              rel="noreferrer"
              className="text-primary hover:text-secondary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://facebook.com/YellowRoseSwagAndDesignLLC" 
              target="_blank" 
              rel="noreferrer"
              className="text-primary hover:text-secondary transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#contact" className="hidden md:inline-flex bg-primary text-white px-5 py-2.5 rounded-sm font-medium hover:bg-primary/90 transition-colors shadow-sm">
              Get a Quote
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Family workshop" 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-sm font-semibold mb-6">
              <Star className="w-4 h-4 text-secondary" />
              <span>Family-Owned in Elgin, SC</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight mb-6">
              Quality Custom Design for the <span className="text-secondary italic">Whole Family</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed">
              From custom t-shirts and cozy hoodies to elegantly etched glassware. 
              We bring your ideas to life with exceptional quality, quick turnaround times, and a personal touch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-primary text-white px-8 py-4 rounded-sm font-medium text-lg text-center hover:bg-primary/90 transition-colors shadow-md flex items-center justify-center gap-2">
                Request Design Info <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#order" className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-sm font-medium text-lg text-center hover:bg-gray-50 transition-colors">
                Order Form
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Values */}
      <section id="about" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3">Exceptional Quality</h3>
              <p className="text-primary-foreground/80">
                Every stitch, every etch is crafted with meticulous attention to detail. We pride ourselves on delivering premium products that last.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3">Quick Turnaround</h3>
              <p className="text-primary-foreground/80">
                We know you're excited to see your custom designs. Our efficient process ensures you get your swag right when you need it.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3">Family Operated</h3>
              <p className="text-primary-foreground/80">
                Owned by Seger Tyler in Elgin, SC. When you work with us, you're not just a customer—you're an extension of the Yellow Rose family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section id="products" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Custom Offerings</h2>
            <p className="text-lg text-foreground/70">
              Whether you need family reunion shirts, corporate gifts, or a personalized holiday stocking, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="group relative overflow-hidden rounded-sm shadow-md hover:shadow-xl transition-all duration-300 bg-background border border-border">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img src={apparelImg} alt="Custom Apparel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-primary mb-2">Custom Apparel</h3>
                <p className="text-foreground/70 mb-4">T-shirts, long-sleeve tees, sweatshirts, and cozy hoodies custom-tailored to your vision.</p>
                <span className="text-secondary font-medium group-hover:underline flex items-center gap-1 cursor-pointer">
                  Design Yours <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group relative overflow-hidden rounded-sm shadow-md hover:shadow-xl transition-all duration-300 bg-background border border-border">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img src={glasswareImg} alt="Etched Glassware" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-primary mb-2">Etched Glassware</h3>
                <p className="text-foreground/70 mb-4">Elegant, permanent designs etched into high-quality glass for gifts, weddings, or corporate events.</p>
                <span className="text-secondary font-medium group-hover:underline flex items-center gap-1 cursor-pointer">
                  Design Yours <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group relative overflow-hidden rounded-sm shadow-md hover:shadow-xl transition-all duration-300 bg-background border border-border flex flex-col">
              <div className="aspect-square bg-gradient-to-br from-primary/5 to-accent/10 flex flex-col items-center justify-center p-8 text-center border-b border-border">
                <Star className="w-16 h-16 text-secondary mb-4 opacity-50" />
                <h4 className="text-2xl font-serif font-bold text-primary">More Swag</h4>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif font-bold text-primary mb-2">Totes & Accessories</h3>
                  <p className="text-foreground/70 mb-4">Canvas tote bags, custom Christmas stockings, and other seasonal items made with love.</p>
                </div>
                <span className="text-secondary font-medium group-hover:underline flex items-center gap-1 cursor-pointer">
                  See Catalog <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-border flex flex-col lg:flex-row">
            
            {/* Contact Info */}
            <div className="lg:w-2/5 bg-primary text-primary-foreground p-10 md:p-12 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-2">Get in Touch</h2>
                <p className="text-primary-foreground/80 mb-10">
                  Ready to start your custom design? Fill out the form or reach out to us directly.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-secondary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg">Location</h4>
                      <p className="text-primary-foreground/70">Elgin, SC<br/>Owner: Seger Tyler</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-secondary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg">Phone</h4>
                      <a href="tel:3188297479" className="text-primary-foreground/70 hover:text-white transition-colors">318-829-7479</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-secondary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg">Email</h4>
                      <a href="mailto:yellowroseswag@gmail.com" className="text-primary-foreground/70 hover:text-white transition-colors">yellowroseswag@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-primary-foreground/20">
                <h4 className="font-semibold mb-4">Follow Our Work</h4>
                <div className="flex gap-4">
                  <a href="https://instagram.com/yellowrose_swag" target="_blank" rel="noreferrer" className="bg-primary-foreground/10 p-3 rounded-full hover:bg-secondary hover:text-primary transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://facebook.com/YellowRoseSwagAndDesignLLC" target="_blank" rel="noreferrer" className="bg-primary-foreground/10 p-3 rounded-full hover:bg-secondary hover:text-primary transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-3/5 p-10 md:p-12">
              <h3 className="text-2xl font-bold text-primary mb-6">Request Design Information</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <input type="text" className="w-full p-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" placeholder="Jane" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <input type="text" className="w-full p-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <input type="email" className="w-full p-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" placeholder="jane@example.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">What are you looking for?</label>
                  <select className="w-full p-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all bg-white">
                    <option>Custom T-Shirts/Hoodies</option>
                    <option>Etched Glassware</option>
                    <option>Tote Bags</option>
                    <option>Christmas Stockings</option>
                    <option>Other / General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Design Details</label>
                  <textarea rows={4} className="w-full p-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none" placeholder="Tell us about your project..."></textarea>
                </div>

                <button type="button" className="w-full bg-primary text-white py-4 rounded-md font-medium hover:bg-primary/90 transition-colors shadow-sm text-lg">
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary border-t border-primary-foreground/10 text-primary-foreground/60 py-8 text-center text-sm">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <img src={logoImg} alt="Yellow Rose Swag" className="h-8 w-8 object-contain brightness-0 invert" />
            <span className="font-serif font-bold text-white tracking-wide">Yellow Rose Swag & Design, LLC</span>
          </div>
          <p>© {new Date().getFullYear()} Yellow Rose Swag & Design. Established 1927. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
