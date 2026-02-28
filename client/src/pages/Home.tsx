import { Instagram, Facebook, Phone, Mail, MapPin, CheckCircle, Clock, Users, Star, ArrowRight, Image as ImageIcon, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

import logoImg from "@/assets/images/logo.png";
import heroImg from "@/assets/images/hero.png";
import apparelImg from "@/assets/images/apparel.png";
import glasswareImg from "@/assets/images/glassware.png";
import design1 from "@/assets/images/design-1.png";
import design2 from "@/assets/images/design-2.png";
import design3 from "@/assets/images/design-3.png";
import design4 from "@/assets/images/design-4.png";
import design5 from "@/assets/images/design-5.png";

// Import real product photos
import realPhoto1 from "@assets/20240622_180321_1772241671668.jpg";
import realPhoto2 from "@assets/20240622_204452_1772241671668.jpg";
import realPhoto3 from "@assets/20240622_205301_1772241671669.jpg";
import realPhoto4 from "@assets/20240827_223045_1772241671669.jpg";
import realPhoto5 from "@assets/20241028_234036_1772241671669.jpg";
import realPhoto6 from "@assets/20241029_180006_1772241671670.jpg";
import realPhoto7 from "@assets/20241029_180025_1772241671670.jpg";
import realPhoto8 from "@assets/20241029_180054_1772241671671.jpg";
import realPhoto9 from "@assets/20241105_125613_1772241671672.jpg";
import realPhoto10 from "@assets/20241109_201007_1772241671673.jpg";
import realPhoto11 from "@assets/20241212_194633_1772241671673.jpg";
import realPhoto12 from "@assets/20241214_224420_1772241671674.jpg";
import realPhoto13 from "@assets/20241214_224502_1772241671674.jpg";
import realPhoto14 from "@assets/20241214_224707_1772241671675.jpg";
import realPhoto15 from "@assets/20241214_224922_1772241671676.jpg";
import realPhoto16 from "@assets/20241215_012616_1772241671676.jpg";
import realPhoto17 from "@assets/20241222_222711_1772241671676.jpg";
import realPhoto18 from "@assets/20241222_222757_1772241671677.jpg";
import realPhoto19 from "@assets/20241223_214449_1772241671677.jpg";
import realPhoto20 from "@assets/20241226_162152_1772241671677.jpg";

// Import real glass etching photos
import glassPhoto1 from "@assets/20241219_002402_1772242332556.jpg";
import glassPhoto2 from "@assets/20241219_002407_1772242332557.jpg";
import glassPhoto3 from "@assets/20241219_002536_1772242332557.jpg";
import glassPhoto4 from "@assets/20241219_002553_1772242332557.jpg";
import glassPhoto5 from "@assets/20241219_002642_(1)_1772242332558.jpg";
import glassPhoto6 from "@assets/20241219_002739_1772242332558.jpg";
import glassPhoto7 from "@assets/20241220_011727_1772242332559.jpg";
import glassPhoto8 from "@assets/20241220_011740_1772242332559.jpg";

// Import custom tote photos
import totePhoto1 from "@assets/20251028_191157_1772243294205.jpg";
import totePhoto2 from "@assets/20251028_194231_1772243294206.jpg";

export default function Home() {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

  const galleryData = [
    {
      id: "apparel",
      title: "Custom Apparel",
      description: "T-shirts, hoodies, and more with high-quality designs.",
      image: realPhoto1,
      items: [
        { src: realPhoto1, title: "Faith-Based Baseball Tee" },
        { src: realPhoto2, title: "Custom Glitter Tank" },
        { src: realPhoto3, title: "Man of Faith Polo" },
        { src: realPhoto4, title: "Personalized Nurse Long-Sleeve" },
        { src: realPhoto5, title: "Custom Clemson Hoodie" },
        { src: realPhoto9, title: "Team T-Shirt Set" },
        { src: realPhoto12, title: "Unafraid Hoodie Front" },
        { src: realPhoto13, title: "God Got Me Hoodie Back" },
        { src: realPhoto14, title: "Walk by Faith Hoodie" },
        { src: realPhoto15, title: "Original Body Style Hoodie" },
        { src: realPhoto17, title: "Proverbs 31:25 Hoodie" },
        { src: realPhoto18, title: "Strength & Dignity Design" },
        { src: realPhoto19, title: "SC Gamecocks Hoodie" },
        { src: realPhoto20, title: "Cool Besties Club Shirt" },
        { src: design1, title: "Custom Floral T-Shirt" },
        { src: design5, title: "Bespoke Gold Emblem Sweatshirt" },
      ]
    },
    {
      id: "glassware",
      title: "Etched Glassware",
      description: "Permanent, elegant designs on glass and acrylic.",
      image: glassPhoto3,
      items: [
        { src: glassPhoto1, title: "'Believe in the Magic' Carafe" },
        { src: glassPhoto2, title: "Custom Holiday Glassware" },
        { src: glassPhoto3, title: "Personalized Wine Glass Set" },
        { src: glassPhoto4, title: "'Matthew' Etched Glass" },
        { src: glassPhoto5, title: "'Brianna' Custom Glass" },
        { src: glassPhoto6, title: "'Matt & Brianna' Wedding Glass" },
        { src: glassPhoto7, title: "LED 'Friends' Acrylic Sign" },
        { src: glassPhoto8, title: "Multi-Color LED Acrylic Gift" },
        { src: design2, title: "Premium Etched Monogram" },
      ]
    },
    {
      id: "seasonal",
      title: "Seasonal & Kitchen",
      description: "Custom stockings, aprons, and home accessories.",
      image: realPhoto16,
      items: [
        { src: realPhoto6, title: "Cajun Seafood Boil Kitchen Set" },
        { src: realPhoto7, title: "Custom Potholder" },
        { src: realPhoto8, title: "Seafood Boil Collection" },
        { src: realPhoto10, title: "Custom Event Aprons" },
        { src: realPhoto11, title: "Holiday Baby Onesie" },
        { src: realPhoto16, title: "Custom Gator Stocking" },
        { src: design3, title: "Hand-Finished Holiday Stockings" },
      ]
    },
    {
      id: "totes",
      title: "Custom Totes",
      description: "Personalized tote bags for any occasion.",
      image: totePhoto1,
      items: [
        { src: totePhoto1, title: "Personalized 'Wyatt' Bug Bag" },
        { src: totePhoto2, title: "Custom Patterned Tote" },
        { src: design4, title: "Canvas Tote" },
      ]
    }
  ];

  const currentGroup = galleryData.find(g => g.id === selectedGroup);

  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      {/* ... (watermark, nav, hero sections remain same) */}

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white/40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">Design Showcase</h2>
              <p className="text-lg text-foreground/70">
                Explore our work by category. Click on a group to view all custom designs in that collection.
              </p>
            </div>
            <a href="https://instagram.com/yellowrose_swag" target="_blank" rel="noreferrer" className="text-secondary font-bold flex items-center gap-2 hover:underline text-lg">
              Follow us for more <Instagram className="w-5 h-5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {galleryData.map((group) => (
              <div 
                key={group.id} 
                onClick={() => setSelectedGroup(group.id)}
                className="group cursor-pointer relative aspect-square overflow-hidden rounded-xl shadow-lg bg-white border border-border/50 hover:shadow-2xl transition-all duration-500"
              >
                <img 
                  src={group.image} 
                  alt={group.title} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 contrast-[1.05] brightness-[0.9]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-white font-serif text-2xl font-bold mb-2">{group.title}</h3>
                  <p className="text-white/80 text-xs mb-4 line-clamp-2">{group.description}</p>
                  <span className="text-secondary font-bold flex items-center gap-2 text-sm group-hover:translate-x-2 transition-transform">
                    View ({group.items.length}) <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Modal */}
        {selectedGroup && currentGroup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
            <div className="absolute inset-0 bg-primary/95 backdrop-blur-xl" onClick={() => setSelectedGroup(null)} />
            <div className="relative w-full max-w-7xl max-h-[90vh] bg-background rounded-2xl shadow-2xl overflow-hidden flex flex-col">
              <div className="p-6 md:p-10 border-b border-border flex items-center justify-between sticky top-0 bg-background/80 backdrop-blur-md z-10">
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">{currentGroup.title}</h2>
                  <p className="text-foreground/60 mt-2">{currentGroup.description}</p>
                </div>
                <button 
                  onClick={() => setSelectedGroup(null)}
                  className="p-3 hover:bg-muted rounded-full transition-colors text-primary"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>
              <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {currentGroup.items.map((item, idx) => (
                    <div key={idx} className="group relative aspect-square overflow-hidden rounded-lg shadow-md bg-white border border-border/30">
                      <img 
                        src={item.src} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 contrast-[1.05] brightness-[1.02] saturate-[1.1]" 
                      />
                      <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center backdrop-blur-[2px]">
                        <p className="text-white font-serif text-lg font-bold drop-shadow-md">{item.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ... (rest of the sections remain same) */}


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
                  <p className="text-foreground/60 mb-8 leading-relaxed">From holiday stockings to everyday canvas tote bags, we create functional art for your lifestyle.</p>
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
