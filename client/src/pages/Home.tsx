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

// Import new apparel photos
import apparelNew1 from "@assets/20250216_191820_1772243487180.jpg";
import apparelNew2 from "@assets/20250216_191901_1772243487180.jpg";
import apparelNew3 from "@assets/20250216_192445_1772243487181.jpg";
import apparelNew4 from "@assets/20250317_181228_1772243487181.jpg";
import apparelNew5 from "@assets/20250317_181812_1772243487182.jpg";
import apparelNew6 from "@assets/20250317_181950_1772243487182.jpg";
import apparelNew7 from "@assets/20250325_011529_1772243487183.jpg";
import apparelNew8 from "@assets/20250325_014932_1772243487183.jpg";
import apparelNew9 from "@assets/20260222_181530_1772243487183.jpg";
import apparelNew10 from "@assets/20260222_181547_1772243487184.jpg";
import apparelNew11 from "@assets/20260222_224501_1772243487184.jpg";

// Import custom tote photos
import totePhoto1 from "@assets/20251028_191157_1772243294205.jpg";
import totePhoto2 from "@assets/20251028_194231_1772243294206.jpg";

// Import personal story photo
import storyPhoto from "@assets/20240919_065505_1772245679023.jpg";

export default function Home() {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

  const galleryData = [
    {
      id: "apparel",
      title: "Custom Apparel",
      description: "T-shirts, hoodies, and more with high-quality designs.",
      image: realPhoto1,
      items: [
        { src: apparelNew1, title: "Tiger Pride Softball Tee" },
        { src: apparelNew2, title: "Tiger Pride Collection" },
        { src: apparelNew3, title: "Custom Team Name Backs" },
        { src: apparelNew4, title: "T-Ball Dad Baseball Tee" },
        { src: apparelNew5, title: "Family T-Ball Set" },
        { src: apparelNew6, title: "T-Ball Mom Raglan" },
        { src: apparelNew7, title: "Wyatt Personalized Jersey" },
        { src: apparelNew8, title: "Wyatt Number 5 Tee" },
        { src: apparelNew9, title: "'Beautifully Broken' Rose Sweatshirt" },
        { src: apparelNew10, title: "Faith-Based Message Tee" },
        { src: apparelNew11, title: "High Rollers M/C Custom Long-Sleeve" },
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
      {/* Enhanced Background Watermark Logo - Higher Visibility */}
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden opacity-[0.12]">
        <img 
          src={logoImg} 
          alt="" 
          className="w-[140%] max-w-none rotate-6 scale-125 blur-[0.5px] contrast-[1.3] brightness-[1.15] saturate-[1.2]" 
        />
      </div>

      {/* Header / Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-white/5 py-4 transition-all duration-300">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center gap-4 cursor-pointer group">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full p-1.5 shadow-md border border-gold/30 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-110 group-hover:shadow-gold/20">
                <img src={logoImg} alt="Yellow Rose Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-white drop-shadow-sm">
                Yellow Rose <span className="text-secondary italic">Swag & Design, LLC</span>
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <a href="#about" className="text-sm font-bold text-white/70 hover:text-secondary uppercase tracking-[0.2em] transition-colors">Our Story</a>
            <a href="#products" className="text-sm font-bold text-white/70 hover:text-secondary uppercase tracking-[0.2em] transition-colors">Products</a>
            <a href="#gallery" className="text-sm font-bold text-white/70 hover:text-secondary uppercase tracking-[0.2em] transition-colors">Gallery</a>
            <a href="#contact" className="bg-secondary text-primary px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-all shadow-lg hover:shadow-secondary/20 active:scale-95">
              Start Design
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Workshop Background" className="w-full h-full object-cover opacity-30 mix-blend-overlay scale-105 animate-slow-zoom" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-transparent to-primary/90" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-8 animate-in slide-in-from-bottom-4 duration-700">
              <Star className="w-4 h-4 text-secondary fill-secondary" />
              <span className="text-sm font-bold text-white uppercase tracking-[0.3em]">Elgin's Premier Custom Shop</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.9] mb-8 animate-in slide-in-from-bottom-6 duration-1000 delay-150">
              Quality First. <br />
              <span className="text-secondary italic font-serif font-medium">Family</span> Always.
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mb-12 leading-relaxed animate-in slide-in-from-bottom-8 duration-1000 delay-300">
              Yellow Rose Swag & Design creates bespoke apparel and etched glassware that celebrates your story. Owned by Seger Tyler.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 animate-in slide-in-from-bottom-10 duration-1000 delay-500">
              <a href="#contact" className="group bg-secondary text-primary px-10 py-5 rounded-full font-extrabold text-lg flex items-center justify-center gap-3 hover:bg-yellow-400 transition-all shadow-2xl hover:shadow-secondary/40 active:scale-95">
                Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
              <a href="#gallery" className="px-10 py-5 rounded-full font-bold text-lg border-2 border-white/20 text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                View Showcase
              </a>
            </div>
          </div>
        </div>

        {/* Floating Stat Badges */}
        <div className="absolute bottom-12 right-12 hidden lg:flex flex-col gap-6 animate-in fade-in duration-1000 delay-700">
          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <p className="text-white font-bold text-xl leading-none">100% Custom</p>
              <p className="text-white/40 text-xs uppercase tracking-widest mt-1">Unique Designs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="about" className="py-28 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-secondary/20 rounded-2xl rotate-3" />
                <img 
                  src={storyPhoto} 
                  alt="Our Story" 
                  className="relative rounded-2xl shadow-2xl w-full aspect-[4/5] object-cover contrast-[1.05] brightness-[1.02]" 
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8">Our Story</h2>
              <div className="h-1.5 w-24 bg-secondary mb-10 rounded-full" />
              <div className="space-y-6 text-xl text-foreground/80 leading-relaxed">
                <p className="font-serif italic text-2xl text-primary mb-8">
                  "Yellow Rose Swag & Design, LLC is my baby!!"
                </p>
                <p>
                  I'm a nurse who LOVES to make CUSTOM t-shirts, apparel, etc. We are a small business, family-owned and operated.
                </p>
                <p>
                  This company was born from the desire to honor my grandmother. The yellow rose was my Nanny's favorite flower! She was my inspiration! What better way to honor her memory.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-border">
                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-6 h-6 text-secondary fill-secondary" />
                  </div>
                  <p className="font-bold text-primary">Family Owned</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <p className="font-bold text-primary">Quick Delivery</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <p className="font-bold text-primary">Nurse Craft</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 skew-x-12 transform translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            {/* ... keeping simplified values grid ... */}
            <div className="group">
              <h3 className="text-2xl font-serif font-bold mb-4">Quality Focus</h3>
              <p className="text-primary-foreground/60">Premium materials for lasting designs.</p>
            </div>
            <div className="group">
              <h3 className="text-2xl font-serif font-bold mb-4">Quick Turnaround</h3>
              <p className="text-primary-foreground/60">Fast processing for your custom needs.</p>
            </div>
            <div className="group">
              <h3 className="text-2xl font-serif font-bold mb-4">Personal Touch</h3>
              <p className="text-primary-foreground/60">Every order treated like family.</p>
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
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 contrast-[1.1] brightness-[1.05] saturate-[1.15] sharpness-[1.1]" 
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
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 contrast-[1.1] brightness-[1.05] saturate-[1.15] sharpness-[1.1]" 
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
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors group-hover:text-primary">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-secondary uppercase tracking-widest mb-1">Email Us</p>
                      <a href="mailto:yellowroseswag@gmail.com" className="text-xl font-medium hover:text-secondary transition-colors">yellowroseswag@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors group-hover:text-primary">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-secondary uppercase tracking-widest mb-1">Call Us</p>
                      <a href="tel:3188297479" className="text-xl font-medium hover:text-secondary transition-colors">318-829-7479</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors group-hover:text-primary">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-secondary uppercase tracking-widest mb-1">Visit Us</p>
                      <p className="text-xl font-medium">Elgin, South Carolina</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-12 border-t border-white/10 mt-12 flex gap-6">
                <a href="https://facebook.com" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all active:scale-90 shadow-lg">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/yellowrose_swag" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all active:scale-90 shadow-lg">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-3/5 p-12 md:p-16">
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
