import { Instagram, Facebook, Phone, Mail, MapPin, CheckCircle, Clock, Users, Star, ArrowRight, Image as ImageIcon } from "lucide-react";
import { Link } from "wouter";

// Import generated images
import logoImg from "@/assets/images/logo.png";
import heroImg from "@/assets/images/hero.png";
import apparelImg from "@/assets/images/apparel.png";
import glasswareImg from "@/assets/images/glassware.png";
import design1 from "@/assets/images/design-1.png";
import design2 from "@/assets/images/design-2.png";
import design3 from "@/assets/images/design-3.png";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 h-24 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logoImg} alt="Yellow Rose Swag & Design Logo" className="h-20 w-20 md:h-24 md:w-24 object-contain" />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-2xl text-primary leading-tight">Yellow Rose</span>
              <span className="text-xs text-secondary font-semibold uppercase tracking-[0.2em]">Swag & Design</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-10 font-medium text-sm text-foreground/80">
            <a href="#services" className="hover:text-secondary transition-colors">Services</a>
            <a href="#products" className="hover:text-secondary transition-colors">Products</a>
            <a href="#gallery" className="hover:text-secondary transition-colors flex items-center gap-1.5">
              <ImageIcon className="w-4 h-4" /> Gallery
            </a>
            <a href="#about" className="hover:text-secondary transition-colors">About</a>
            <a href="#contact" className="hover:text-secondary transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-4 mr-2">
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
            </div>
            <a href="#contact" className="bg-primary text-white px-6 py-3 rounded-sm font-medium hover:bg-primary/90 transition-all shadow-md active:scale-95">
              Get a Quote
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Family workshop" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-bold mb-8 border border-secondary/20">
              <Star className="w-4 h-4 fill-secondary" />
              <span className="uppercase tracking-wider">Family Tradition Since 1927</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-primary leading-[1.1] mb-8">
              Crafting <span className="text-secondary italic">Excellence</span> in Every Thread.
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-10 leading-relaxed max-w-2xl">
              Custom apparel, etched glassware, and unique seasonal gifts designed with heart in Elgin, South Carolina.
            </p>
            <div className="flex flex-col sm:row gap-5">
              <a href="#contact" className="bg-primary text-white px-10 py-5 rounded-sm font-bold text-lg text-center hover:bg-primary/90 transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95">
                Start Your Design <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#order" className="bg-white/50 backdrop-blur-sm text-primary border-2 border-primary px-10 py-5 rounded-sm font-bold text-lg text-center hover:bg-white transition-all active:scale-95">
                Order Form
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white/40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">Design Showcase</h2>
              <p className="text-lg text-foreground/70">
                Browse our recent work and get inspired for your next project. From intricate glass etching to bold apparel designs.
              </p>
            </div>
            <a href="https://instagram.com/yellowrose_swag" target="_blank" rel="noreferrer" className="text-secondary font-bold flex items-center gap-2 hover:underline text-lg">
              Follow us for more <Instagram className="w-5 h-5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group relative aspect-square overflow-hidden rounded-lg shadow-lg">
              <img src={design1} alt="Custom T-Shirt Design" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                <p className="text-white font-serif text-xl font-bold">Custom Floral T-Shirt</p>
              </div>
            </div>
            <div className="group relative aspect-square overflow-hidden rounded-lg shadow-lg">
              <img src={design2} alt="Etched Glassware Design" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                <p className="text-white font-serif text-xl font-bold">Premium Etched Monogram</p>
              </div>
            </div>
            <div className="group relative aspect-square overflow-hidden rounded-lg shadow-lg">
              <img src={design3} alt="Custom Christmas Stocking" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                <p className="text-white font-serif text-xl font-bold">Hand-Finished Holiday Stockings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Values */}
      <section id="about" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 skew-x-12 transform translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-secondary/20 rounded-2xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-0 transition-transform">
                <CheckCircle className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4">Exceptional Quality</h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                Every stitch and every etch is crafted with meticulous attention to detail. We pride ourselves on delivering premium products that stand the test of time.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-secondary/20 rounded-2xl flex items-center justify-center mb-8 -rotate-3 group-hover:rotate-0 transition-transform">
                <Clock className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4">Quick Turnaround</h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                We know your time is valuable. Our optimized workflow ensures your custom orders are processed with speed without ever sacrificing quality.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-accent/20 rounded-2xl flex items-center justify-center mb-8 rotate-6 group-hover:rotate-0 transition-transform">
                <Users className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4">Family Operated</h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                Owned by Seger Tyler. We treat every order as if it were for our own family, ensuring a personal touch that big brands just can't match.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section id="products" className="py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl md:text-7xl font-bold text-primary mb-8">Our Specialties</h2>
            <div className="h-1.5 w-24 bg-secondary mx-auto mb-8 rounded-full" />
            <p className="text-xl text-foreground/70">
              Personalized solutions for every occasion. If you can dream it, we can design it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Product 1 */}
            <div className="group bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-border/50">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={apparelImg} alt="Custom Apparel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">Custom Apparel</h3>
                <p className="text-foreground/60 mb-8 leading-relaxed">Premium t-shirts, hoodies, and long-sleeves customized for your family, team, or business.</p>
                <a href="#contact" className="text-secondary font-bold inline-flex items-center gap-2 group/link">
                  Get Started <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-border/50">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={glasswareImg} alt="Etched Glassware" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">Etched Glassware</h3>
                <p className="text-foreground/60 mb-8 leading-relaxed">Elegant glassware with permanent, high-definition etching. Perfect for gifts and celebrations.</p>
                <a href="#contact" className="text-secondary font-bold inline-flex items-center gap-2 group/link">
                  Design Glass <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-border/50 flex flex-col">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/5 to-secondary/10 flex flex-col items-center justify-center p-12 text-center relative">
                <ImageIcon className="w-20 h-20 text-secondary mb-6 opacity-40" />
                <h4 className="text-3xl font-serif font-bold text-primary">Custom Totes & More</h4>
                <div className="absolute bottom-10 left-0 right-0 px-8">
                  <div className="h-px bg-border/50 w-full mb-6" />
                  <p className="text-sm font-medium text-secondary uppercase tracking-widest">Seasonal Specialties</p>
                </div>
              </div>
              <div className="p-10 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4">Stockings & Bags</h3>
                  <p className="text-foreground/60 mb-8 leading-relaxed">From holiday stockings to everyday tote bags, we create functional art for your lifestyle.</p>
                </div>
                <a href="#contact" className="text-secondary font-bold inline-flex items-center gap-2 group/link">
                  View Catalog <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-28 bg-white/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-border/30 flex flex-col lg:flex-row">
            
            {/* Contact Info */}
            <div className="lg:w-2/5 bg-primary text-primary-foreground p-12 md:p-16 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary" />
              <div className="relative z-10">
                <h2 className="text-4xl font-serif font-bold mb-4">Let's Create Together</h2>
                <p className="text-primary-foreground/60 mb-12 text-lg">
                  Bring your vision to Elgin's finest custom design shop. We can't wait to work with you.
                </p>

                <div className="space-y-10">
                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors">
                      <MapPin className="w-6 h-6 text-secondary group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Our Workshop</h4>
                      <p className="text-primary-foreground/60 leading-relaxed">Elgin, South Carolina<br/><span className="text-secondary font-semibold">Owner: Seger Tyler</span></p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors">
                      <Phone className="w-6 h-6 text-secondary group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Phone</h4>
                      <a href="tel:3188297479" className="text-primary-foreground/60 hover:text-white transition-colors text-lg font-medium tracking-wide">318-829-7479</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors">
                      <Mail className="w-6 h-6 text-secondary group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Email</h4>
                      <a href="mailto:yellowroseswag@gmail.com" className="text-primary-foreground/60 hover:text-white transition-colors text-lg font-medium">yellowroseswag@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-20 pt-12 border-t border-white/10 relative z-10">
                <h4 className="font-bold mb-6 text-lg">Follow Our Creative Journey</h4>
                <div className="flex gap-5">
                  <a href="https://instagram.com/yellowrose_swag" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-secondary hover:text-primary transition-all hover:-translate-y-1">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="https://facebook.com/YellowRoseSwagAndDesignLLC" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-secondary hover:text-primary transition-all hover:-translate-y-1">
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-3/5 p-12 md:p-16">
              <div className="mb-10">
                <h3 className="text-3xl font-bold text-primary mb-4">Design Inquiry</h3>
                <p className="text-foreground/50">Tell us a bit about what you're looking for, and we'll get back to you with a quote and timeline.</p>
              </div>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary/80 uppercase tracking-wider">First Name</label>
                    <input type="text" className="w-full p-4 rounded-xl border border-border focus:outline-none focus:ring-4 focus:ring-secondary/20 focus:border-secondary transition-all bg-background/50" placeholder="Jane" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary/80 uppercase tracking-wider">Last Name</label>
                    <input type="text" className="w-full p-4 rounded-xl border border-border focus:outline-none focus:ring-4 focus:ring-secondary/20 focus:border-secondary transition-all bg-background/50" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary/80 uppercase tracking-wider">Email Address</label>
                  <input type="email" className="w-full p-4 rounded-xl border border-border focus:outline-none focus:ring-4 focus:ring-secondary/20 focus:border-secondary transition-all bg-background/50" placeholder="jane@example.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary/80 uppercase tracking-wider">Service Needed</label>
                  <select className="w-full p-4 rounded-xl border border-border focus:outline-none focus:ring-4 focus:ring-secondary/20 focus:border-secondary transition-all bg-background/50 font-medium">
                    <option>Custom T-Shirts & Apparel</option>
                    <option>Etched Glassware</option>
                    <option>Tote Bag Design</option>
                    <option>Custom Christmas Stockings</option>
                    <option>Bulk/Corporate Order</option>
                    <option>Other / Question</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary/80 uppercase tracking-wider">Design Project Details</label>
                  <textarea rows={5} className="w-full p-4 rounded-xl border border-border focus:outline-none focus:ring-4 focus:ring-secondary/20 focus:border-secondary transition-all resize-none bg-background/50" placeholder="Describe your vision (quantity, sizes, designs...)"></textarea>
                </div>

                <button type="button" className="w-full bg-primary text-white py-5 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-xl text-lg uppercase tracking-[0.2em] active:scale-[0.98]">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary border-t border-white/5 text-primary-foreground/40 py-16 text-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-10">
            <img src={logoImg} alt="Yellow Rose Swag" className="h-24 w-24 object-contain brightness-0 invert mb-6" />
            <h4 className="text-2xl font-serif font-bold text-white mb-2">Yellow Rose Swag & Design, LLC</h4>
            <p className="text-secondary font-semibold uppercase tracking-[0.3em] text-sm">Elgin • South Carolina</p>
          </div>
          <div className="h-px w-full max-w-lg bg-white/10 mx-auto mb-10" />
          <p className="text-sm">© {new Date().getFullYear()} Yellow Rose Swag & Design. Established 1927. Quality first, Family always.</p>
        </div>
      </footer>
    </div>
  );
}
