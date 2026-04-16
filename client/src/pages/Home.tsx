import { Instagram, Facebook, Phone, Mail, MapPin, CheckCircle, Clock, Star, ArrowRight, Image as ImageIcon, X, Heart, Share2, Link2, MessageCircle, CalendarClock, PhoneCall } from "lucide-react";
import { useState, useRef } from "react";

import { useMutation } from "@tanstack/react-query";
import { motion, useInView } from "framer-motion";
import Chatbot from "@/components/Chatbot";

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
import storyPhoto from "@assets/20250530_232612_1772246249932.jpg";

function ScrollReveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerChildren({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const } },
} as const;

export default function Home() {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<{src: string, title: string} | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: "apparel",
    designDetails: "",
    quantity: 1,
  });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const [callbackData, setCallbackData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredDate: "",
    bestTimeStart: "09:00",
    bestTimeEnd: "17:00",
    reason: "",
  });
  const [callbackStatus, setCallbackStatus] = useState<"idle" | "success" | "error">("idle");

  const callbackMutation = useMutation({
    mutationFn: async (data: typeof callbackData) => {
      const response = await fetch("/api/callbacks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to schedule callback");
      return response.json();
    },
    onSuccess: () => {
      setCallbackStatus("success");
      setCallbackData({
        name: "",
        phone: "",
        email: "",
        preferredDate: "",
        bestTimeStart: "09:00",
        bestTimeEnd: "17:00",
        reason: "",
      });
      setTimeout(() => setCallbackStatus("idle"), 5000);
    },
    onError: () => {
      setCallbackStatus("error");
      setTimeout(() => setCallbackStatus("idle"), 5000);
    },
  });

  const handleCallbackChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCallbackData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    callbackMutation.mutate(callbackData);
  };

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(127);
  const [shareOpen, setShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const siteUrl = typeof window !== "undefined" ? window.location.origin : "";
  const shareText = "Check out Yellow Rose Swag & Design - Custom apparel, etched glassware, and more! Quality first, Family always.";

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(prev => liked ? prev - 1 : prev + 1);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(siteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(siteUrl)}&text=${encodeURIComponent(shareText)}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(siteUrl)}&description=${encodeURIComponent(shareText)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + " " + siteUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(siteUrl)}`,
    email: `mailto:?subject=${encodeURIComponent("Yellow Rose Swag & Design")}&body=${encodeURIComponent(shareText + "\n\n" + siteUrl)}`,
  };

  const createOrderMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          estimatedCost: 5000,
        }),
      });
      if (!response.ok) throw new Error("Failed to create order");
      return response.json();
    },
    onSuccess: () => {
      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        serviceType: "apparel",
        designDetails: "",
        quantity: 1,
      });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    },
    onError: () => {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    },
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createOrderMutation.mutate(formData);
  };

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
      {/* Mobile Share Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-xl">
        <div className="flex items-center justify-around py-3 px-4">
          <button
            data-testid="button-like-mobile"
            onClick={handleLike}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full transition-all active:scale-90 ${
              liked ? "bg-red-500 text-white" : "bg-gray-100 text-gray-600"
            }`}
          >
            <Heart className={`w-4 h-4 ${liked ? "fill-current" : ""}`} />
            <span className="text-sm font-bold">{likeCount}</span>
          </button>
          <a href={shareLinks.facebook} target="_blank" rel="noreferrer" data-testid="link-share-facebook-mobile" className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center active:scale-90">
            <Facebook className="w-4 h-4" />
          </a>
          <a href={shareLinks.twitter} target="_blank" rel="noreferrer" data-testid="link-share-twitter-mobile" className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center active:scale-90">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href={shareLinks.whatsapp} target="_blank" rel="noreferrer" data-testid="link-share-whatsapp-mobile" className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center active:scale-90">
            <MessageCircle className="w-4 h-4" />
          </a>
          <button onClick={handleCopyLink} data-testid="button-copy-link-mobile" className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center active:scale-90">
            {copied ? <CheckCircle className="w-4 h-4 text-green-400" /> : <Link2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

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
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-4 cursor-pointer group bg-transparent border-none p-0 text-left"
          >
            <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-white rounded-full p-0 shadow-xl border-2 border-gold/40 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:scale-110 group-hover:shadow-gold/40 group-hover:border-gold/60">
              <img 
                src={logoImg} 
                alt="Yellow Rose Logo" 
                className="w-full h-full object-cover drop-shadow-md scale-[1.7]"
                loading="eager"
                decoding="async" 
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-white drop-shadow-md">
                Yellow Rose <span className="text-secondary italic">Swag & Design, LLC</span>
              </span>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-secondary uppercase opacity-80 group-hover:text-white transition-colors">
                Quality First • Family Always
              </span>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-10">
            <a href="#about" className="text-sm font-bold text-white/70 hover:text-secondary uppercase tracking-[0.2em] transition-colors">Our Story</a>
            <a href="#products" className="text-sm font-bold text-white/70 hover:text-secondary uppercase tracking-[0.2em] transition-colors">Products</a>
            <a href="#gallery" className="text-sm font-bold text-white/70 hover:text-secondary uppercase tracking-[0.2em] transition-colors">Gallery</a>
            <a href="#contact" className="text-sm font-bold text-white/70 hover:text-secondary uppercase tracking-[0.2em] transition-colors">Contact Us</a>
            <div className="flex items-center gap-2">
              <button
                data-testid="button-like"
                onClick={handleLike}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-full transition-all active:scale-90 ${
                  liked 
                    ? "bg-red-500 text-white" 
                    : "bg-white/15 text-white/80 hover:bg-red-500/20 hover:text-red-400"
                }`}
                title="Like this page"
              >
                <Heart className={`w-4 h-4 ${liked ? "fill-current" : ""}`} />
                <span className="text-xs font-bold" data-testid="text-like-count">{likeCount}</span>
              </button>
              <div className="relative">
                <button
                  data-testid="button-share-toggle"
                  onClick={() => setShareOpen(!shareOpen)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/15 text-white/80 hover:bg-secondary/20 hover:text-secondary transition-all active:scale-90"
                  title="Share this page"
                >
                  <Share2 className="w-4 h-4" />
                  <span className="text-xs font-bold">Share</span>
                </button>
                {shareOpen && (
                  <div className="absolute top-full right-0 mt-2 flex gap-2 bg-white rounded-2xl shadow-2xl p-3 animate-in fade-in slide-in-from-top-2">
                    <a href={shareLinks.facebook} target="_blank" rel="noreferrer" data-testid="link-share-facebook" className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-all" title="Facebook">
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a href={shareLinks.twitter} target="_blank" rel="noreferrer" data-testid="link-share-twitter" className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-all" title="X (Twitter)">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <a href={shareLinks.pinterest} target="_blank" rel="noreferrer" data-testid="link-share-pinterest" className="w-9 h-9 rounded-full bg-[#E60023] text-white flex items-center justify-center hover:scale-110 transition-all" title="Pinterest">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z"/></svg>
                    </a>
                    <a href={shareLinks.whatsapp} target="_blank" rel="noreferrer" data-testid="link-share-whatsapp" className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-all" title="WhatsApp">
                      <MessageCircle className="w-3.5 h-3.5" />
                    </a>
                    <a href={shareLinks.linkedin} target="_blank" rel="noreferrer" data-testid="link-share-linkedin" className="w-9 h-9 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 transition-all" title="LinkedIn">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                    <a href={shareLinks.email} data-testid="link-share-email" className="w-9 h-9 rounded-full bg-gray-600 text-white flex items-center justify-center hover:scale-110 transition-all" title="Email">
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                    <button onClick={handleCopyLink} data-testid="button-copy-link" className="w-9 h-9 rounded-full bg-gray-800 text-white flex items-center justify-center hover:scale-110 transition-all" title="Copy link">
                      {copied ? <CheckCircle className="w-3.5 h-3.5 text-green-400" /> : <Link2 className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                )}
              </div>
            </div>
            <a href="#contact" className="bg-secondary text-primary px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-all shadow-lg hover:shadow-secondary/20 active:scale-95">
              Start Design
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0 will-change-transform">
          <img src={heroImg} alt="Workshop Background" className="w-full h-full object-cover opacity-30 mix-blend-overlay scale-105 animate-slow-zoom" loading="eager" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-transparent to-primary/90" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-8"
            >
              <Star className="w-4 h-4 text-secondary fill-secondary" />
              <span className="text-sm font-bold text-white uppercase tracking-[0.3em]">Elgin's Premier Custom Shop</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.9] mb-8"
            >
              Quality First. <br />
              <span className="text-secondary italic font-serif font-medium">Family</span> Always.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-2xl mb-12 leading-relaxed"
            >
              Yellow Rose Swag & Design creates bespoke apparel and etched glassware that celebrates your story. Owned by Seger Tyler.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              <a href="#contact" className="group bg-secondary text-primary px-8 sm:px-10 py-4 sm:py-5 rounded-full font-extrabold text-base sm:text-lg flex items-center justify-center gap-3 hover:bg-yellow-400 transition-all shadow-2xl hover:shadow-secondary/40 active:scale-95">
                Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
              <a href="#gallery" className="px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg border-2 border-white/20 text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                View Showcase
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-12 right-12 hidden lg:flex flex-col gap-6"
        >
          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <p className="text-white font-bold text-xl leading-none">100% Custom</p>
              <p className="text-white/40 text-xs uppercase tracking-widest mt-1">Unique Designs</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section id="about" className="py-20 sm:py-28 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <ScrollReveal className="lg:w-1/2">
              <div className="relative">
                <motion.div
                  initial={{ rotate: 0, scale: 0.95 }}
                  whileInView={{ rotate: 3, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="absolute -inset-4 bg-secondary/20 rounded-2xl"
                />
                <img 
                  src={storyPhoto} 
                  alt="Our Story" 
                  className="relative rounded-2xl shadow-2xl w-full aspect-[4/5] object-cover shadow-gold/20"
                  loading="lazy"
                  decoding="async" 
                />
              </div>
            </ScrollReveal>
            <div className="lg:w-1/2">
              <ScrollReveal delay={0.2}>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-8">Our Story</h2>
                <div className="h-1.5 w-24 bg-secondary mb-10 rounded-full" />
                <div className="space-y-6 text-lg sm:text-xl text-foreground/80 leading-relaxed">
                  <p className="font-serif italic text-xl sm:text-2xl text-primary mb-8">
                    "Yellow Rose Swag & Design, LLC is my baby!!"
                  </p>
                  <p>
                    I'm a nurse who LOVES to make CUSTOM t-shirts, apparel, etc. We are a small business, family-owned and operated.
                  </p>
                  <p>
                    This company was born from the desire to honor my grandmother. The yellow rose was my Nanny's favorite flower! She was my inspiration! What better way to honor her memory.
                  </p>
                </div>
              </ScrollReveal>
              
              <StaggerChildren className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-border">
                <motion.div variants={staggerItem} className="text-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-6 h-6 text-secondary fill-secondary" />
                  </div>
                  <p className="font-bold text-primary">Family Owned</p>
                </motion.div>
                <motion.div variants={staggerItem} className="text-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <p className="font-bold text-primary">Quick Delivery</p>
                </motion.div>
                <motion.div variants={staggerItem} className="text-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <p className="font-bold text-primary">Nurse Craft</p>
                </motion.div>
              </StaggerChildren>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 skew-x-12 transform translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-16 text-center">
            <motion.div variants={staggerItem} className="group">
              <motion.div whileHover={{ scale: 1.05, rotate: 2 }} className="inline-block">
                <h3 className="text-2xl font-serif font-bold mb-4">Quality Focus</h3>
              </motion.div>
              <p className="text-primary-foreground/60">Premium materials for lasting designs.</p>
            </motion.div>
            <motion.div variants={staggerItem} className="group">
              <motion.div whileHover={{ scale: 1.05, rotate: -2 }} className="inline-block">
                <h3 className="text-2xl font-serif font-bold mb-4">Quick Turnaround</h3>
              </motion.div>
              <p className="text-primary-foreground/60">Fast processing for your custom needs.</p>
            </motion.div>
            <motion.div variants={staggerItem} className="group">
              <motion.div whileHover={{ scale: 1.05, rotate: 2 }} className="inline-block">
                <h3 className="text-2xl font-serif font-bold mb-4">Personal Touch</h3>
              </motion.div>
              <p className="text-primary-foreground/60">Every order treated like family.</p>
            </motion.div>
          </StaggerChildren>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 sm:py-24 bg-white/40">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-primary mb-6">Design Showcase</h2>
                <p className="text-base sm:text-lg text-foreground/70">
                  Explore our work by category. Click on a group to view all custom designs in that collection.
                </p>
              </div>
              <a href="https://instagram.com/yellowrose_swag" target="_blank" rel="noreferrer" className="text-secondary font-bold flex items-center gap-2 hover:underline text-lg">
                Follow us for more <Instagram className="w-5 h-5" />
              </a>
            </div>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
            {galleryData.map((group) => (
              <motion.div 
                key={group.id}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedGroup(group.id)}
                className="group cursor-pointer relative aspect-square overflow-hidden rounded-xl shadow-lg bg-white border border-border/50 hover:shadow-2xl transition-shadow duration-500"
              >
                <img 
                  src={group.image} 
                  alt={group.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-6 sm:p-8">
                  <h3 className="text-white font-serif text-xl sm:text-2xl font-bold mb-2">{group.title}</h3>
                  <p className="text-white/80 text-xs mb-4 line-clamp-2">{group.description}</p>
                  <span className="text-secondary font-bold flex items-center gap-2 text-sm group-hover:translate-x-2 transition-transform">
                    View ({group.items.length}) <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
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
                    <div 
                      key={idx} 
                      className="group relative aspect-square overflow-hidden rounded-lg shadow-md bg-white border border-border/30 cursor-zoom-in"
                      onClick={() => setSelectedImage(item)}
                    >
                      <img 
                        src={item.src} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        decoding="async" 
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

        {/* Full Screen Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-in fade-in zoom-in duration-300">
            <div className="absolute inset-0 bg-black/95 backdrop-blur-sm" onClick={() => setSelectedImage(null)} />
            <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center pointer-events-none">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white z-50 pointer-events-auto"
              >
                <X className="w-8 h-8" />
              </button>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title} 
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                decoding="async" 
              />
              <p className="text-white font-serif text-2xl font-bold mt-6 text-center px-4 drop-shadow-lg">
                {selectedImage.title}
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Products Showcase */}
      <section id="products" className="py-20 sm:py-28 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-primary mb-8">Our Specialties</h2>
            <div className="h-1.5 w-24 bg-secondary mx-auto mb-8 rounded-full" />
            <p className="text-lg sm:text-xl text-foreground/70">
              Personalized solutions for every occasion. If you can dream it, we can design it.
            </p>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Product 1 */}
            <motion.div variants={staggerItem} whileHover={{ y: -6 }} className="group bg-white rounded-xl shadow-sm hover:shadow-2xl transition-shadow duration-500 overflow-hidden border border-border/50">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={apparelImg} alt="Custom Apparel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" decoding="async" />
              </div>
              <div className="p-8 sm:p-10">
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">Custom Apparel</h3>
                <p className="text-foreground/60 mb-8 leading-relaxed">Premium t-shirts, hoodies, and long-sleeves customized for your family, team, or business.</p>
                <a href="#contact" className="text-secondary font-bold inline-flex items-center gap-2 group/link">
                  Get Started <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Product 2 */}
            <motion.div variants={staggerItem} whileHover={{ y: -6 }} className="group bg-white rounded-xl shadow-sm hover:shadow-2xl transition-shadow duration-500 overflow-hidden border border-border/50">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={glasswareImg} alt="Etched Glassware" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" decoding="async" />
              </div>
              <div className="p-8 sm:p-10">
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">Etched Glassware</h3>
                <p className="text-foreground/60 mb-8 leading-relaxed">Elegant glassware with permanent, high-definition etching. Perfect for gifts and celebrations.</p>
                <a href="#contact" className="text-secondary font-bold inline-flex items-center gap-2 group/link">
                  Design Glass <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Product 3 */}
            <motion.div variants={staggerItem} whileHover={{ y: -6 }} className="group bg-white rounded-xl shadow-sm hover:shadow-2xl transition-shadow duration-500 overflow-hidden border border-border/50 flex flex-col">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/5 to-secondary/10 flex flex-col items-center justify-center p-12 text-center relative">
                <ImageIcon className="w-20 h-20 text-secondary mb-6 opacity-40" />
                <h4 className="text-3xl font-serif font-bold text-primary">Custom Totes & More</h4>
                <div className="absolute bottom-10 left-0 right-0 px-8">
                  <div className="h-px bg-border/50 w-full mb-6" />
                  <p className="text-sm font-medium text-secondary uppercase tracking-widest">Seasonal Specialties</p>
                </div>
              </div>
              <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4">Stockings & Bags</h3>
                  <p className="text-foreground/60 mb-8 leading-relaxed">From holiday stockings to everyday canvas tote bags, we create functional art for your lifestyle.</p>
                </div>
                <a href="#contact" className="text-secondary font-bold inline-flex items-center gap-2 group/link">
                  View Catalog <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </StaggerChildren>
        </div>
      </section>

      {/* Callback Scheduling Section */}
      <section id="callback" className="py-20 sm:py-28 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full mb-5">
              <PhoneCall className="w-4 h-4 text-secondary" />
              <span className="text-sm font-bold text-secondary uppercase tracking-widest">Schedule a Call</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-5">Request a Callback</h2>
            <p className="text-lg text-primary-foreground/70">
              Prefer to talk it through? Tell us when you're free and we'll give you a call to discuss your custom design.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="bg-white text-foreground rounded-3xl shadow-2xl p-8 sm:p-12 border border-secondary/20">
              {callbackStatus === "success" ? (
                <div className="text-center py-12" data-testid="status-callback-success">
                  <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-secondary" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold mb-3">You're on the calendar!</h3>
                  <p className="text-lg text-muted-foreground max-w-md mx-auto">
                    We've received your request and will give you a call during your preferred time. A confirmation has been sent to your email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleCallbackSubmit} className="space-y-6" data-testid="form-callback">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="cb-name" className="block text-sm font-bold text-foreground mb-2 uppercase tracking-wide">Name</label>
                      <input
                        id="cb-name"
                        name="name"
                        type="text"
                        required
                        value={callbackData.name}
                        onChange={handleCallbackChange}
                        placeholder="Jane Doe"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition"
                        data-testid="input-callback-name"
                      />
                    </div>
                    <div>
                      <label htmlFor="cb-phone" className="block text-sm font-bold text-foreground mb-2 uppercase tracking-wide">Number</label>
                      <input
                        id="cb-phone"
                        name="phone"
                        type="tel"
                        required
                        value={callbackData.phone}
                        onChange={handleCallbackChange}
                        placeholder="(555) 123-4567"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition"
                        data-testid="input-callback-phone"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cb-email" className="block text-sm font-bold text-foreground mb-2 uppercase tracking-wide">Email</label>
                    <input
                      id="cb-email"
                      name="email"
                      type="email"
                      required
                      value={callbackData.email}
                      onChange={handleCallbackChange}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition"
                      data-testid="input-callback-email"
                    />
                  </div>

                  <div>
                    <label htmlFor="cb-date" className="block text-sm font-bold text-foreground mb-2 uppercase tracking-wide">Preferred Date</label>
                    <input
                      id="cb-date"
                      name="preferredDate"
                      type="date"
                      required
                      min={new Date().toISOString().split("T")[0]}
                      value={callbackData.preferredDate}
                      onChange={handleCallbackChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition"
                      data-testid="input-callback-date"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2 uppercase tracking-wide">
                      <CalendarClock className="w-4 h-4 inline mr-1" />
                      Best Time to Call Between
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <input
                          name="bestTimeStart"
                          type="time"
                          required
                          value={callbackData.bestTimeStart}
                          onChange={handleCallbackChange}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition"
                          data-testid="input-callback-time-start"
                        />
                        <p className="text-xs text-muted-foreground mt-1 ml-1">From</p>
                      </div>
                      <div>
                        <input
                          name="bestTimeEnd"
                          type="time"
                          required
                          value={callbackData.bestTimeEnd}
                          onChange={handleCallbackChange}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition"
                          data-testid="input-callback-time-end"
                        />
                        <p className="text-xs text-muted-foreground mt-1 ml-1">To</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cb-reason" className="block text-sm font-bold text-foreground mb-2 uppercase tracking-wide">Reason for Call</label>
                    <textarea
                      id="cb-reason"
                      name="reason"
                      required
                      rows={4}
                      value={callbackData.reason}
                      onChange={handleCallbackChange}
                      placeholder="Tell us a bit about what you'd like to discuss — apparel order, glassware design, event swag, etc."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition resize-none"
                      data-testid="input-callback-reason"
                    />
                  </div>

                  {callbackStatus === "error" && (
                    <div className="bg-destructive/10 border border-destructive/30 text-destructive rounded-xl p-4 text-sm" data-testid="status-callback-error">
                      Something went wrong submitting your request. Please try again or call us directly at 318-829-7479.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={callbackMutation.isPending}
                    className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold py-4 px-8 rounded-xl text-lg transition-all hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    data-testid="button-callback-submit"
                  >
                    {callbackMutation.isPending ? (
                      "Scheduling..."
                    ) : (
                      <>
                        <PhoneCall className="w-5 h-5" />
                        Schedule My Callback
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-muted-foreground">
                    We'll do our best to call within your selected window. You'll receive an email confirmation right away.
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-28 bg-white/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 max-w-6xl">
          <ScrollReveal>
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
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary/80 uppercase tracking-wider">First Name</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleFormChange}
                      required
                      className="w-full p-4 rounded-xl border border-border focus:outline-none focus:ring-4 focus:ring-secondary/20 focus:border-secondary transition-all bg-background/50" 
                      placeholder="Jane" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary/80 uppercase tracking-wider">Last Name</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleFormChange}
                      required
                      className="w-full p-4 rounded-xl border border-border focus:outline-none focus:ring-4 focus:ring-secondary/20 focus:border-secondary transition-all bg-background/50" 
                      placeholder="Doe" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary/80 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full p-4 rounded-xl border border-border focus:outline-none focus:ring-4 focus:ring-secondary/20 focus:border-secondary transition-all bg-background/50" 
                    placeholder="jane@example.com" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary/80 uppercase tracking-wider">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    required
                    className="w-full p-4 rounded-xl border border-border focus:outline-none focus:ring-4 focus:ring-secondary/20 focus:border-secondary transition-all bg-background/50" 
                    placeholder="(555) 123-4567" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary/80 uppercase tracking-wider">Service Needed</label>
                  <select 
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleFormChange}
                    className="w-full p-4 rounded-xl border border-border focus:outline-none focus:ring-4 focus:ring-secondary/20 focus:border-secondary transition-all bg-background/50 font-medium"
                  >
                    <option value="apparel">Custom T-Shirts & Apparel</option>
                    <option value="glassware">Etched Glassware</option>
                    <option value="totes">Tote Bag Design</option>
                    <option value="other">Custom Christmas Stockings</option>
                    <option value="other">Bulk/Corporate Order</option>
                    <option value="other">Other / Question</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary/80 uppercase tracking-wider">Quantity</label>
                  <input 
                    type="number" 
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleFormChange}
                    min="1"
                    className="w-full p-4 rounded-xl border border-border focus:outline-none focus:ring-4 focus:ring-secondary/20 focus:border-secondary transition-all bg-background/50" 
                    placeholder="1" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary/80 uppercase tracking-wider">Reference Images (Optional)</label>
                  <div className="relative">
                    <input 
                      type="file" 
                      multiple 
                      accept="image/*"
                      className="hidden" 
                      id="file-upload"
                      onChange={(e) => {
                        const files = e.target.files;
                        if (files && files.length > 0) {
                          alert(`${files.length} file(s) selected. In this prototype, files are not actually uploaded to a server.`);
                        }
                      }}
                    />
                    <label 
                      htmlFor="file-upload" 
                      className="flex flex-col items-center justify-center w-full p-8 rounded-xl border-2 border-dashed border-border hover:border-secondary hover:bg-secondary/5 transition-all cursor-pointer bg-background/50 group"
                    >
                      <ImageIcon className="w-10 h-10 text-primary/30 group-hover:text-secondary mb-3 transition-colors" />
                      <span className="text-sm font-bold text-primary/60 group-hover:text-primary transition-colors">Click to upload or drag and drop</span>
                      <span className="text-xs text-primary/40 mt-1">PNG, JPG up to 10MB</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary/80 uppercase tracking-wider">Design Project Details</label>
                  <textarea 
                    name="designDetails"
                    value={formData.designDetails}
                    onChange={handleFormChange}
                    required
                    rows={5} 
                    className="w-full p-4 rounded-xl border border-border focus:outline-none focus:ring-4 focus:ring-secondary/20 focus:border-secondary transition-all resize-none bg-background/50" 
                    placeholder="Describe your vision (colors, sizes, design ideas...)"
                  ></textarea>
                </div>

                {submitStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <p className="text-green-800 font-bold">✓ Order submitted successfully! We'll be in touch shortly.</p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <p className="text-red-800 font-bold">✗ Error submitting order. Please try again.</p>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={createOrderMutation.isPending}
                  className="w-full bg-primary text-white py-5 rounded-xl font-bold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-xl text-lg uppercase tracking-[0.2em] active:scale-[0.98]"
                >
                  {createOrderMutation.isPending ? "Submitting..." : "Submit Request"}
                </button>
              </form>
            </div>
          </div>
        </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <ScrollReveal>
        <footer className="bg-primary border-t border-white/5 text-primary-foreground/40 py-16 pb-24 md:pb-16 text-center">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center mb-10">
              <motion.img
                src={logoImg}
                alt="Yellow Rose Swag"
                className="h-24 w-24 object-contain brightness-0 invert mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              />
              <h4 className="text-2xl font-serif font-bold text-white mb-2">Yellow Rose Swag & Design, LLC</h4>
              <p className="text-secondary font-semibold uppercase tracking-[0.3em] text-sm">Elgin • South Carolina</p>
            </div>
            <div className="h-px w-full max-w-lg bg-white/10 mx-auto mb-10" />
            <p className="text-sm">© {new Date().getFullYear()} Yellow Rose Swag & Design. Quality first, Family always.</p>
          </div>
        </footer>
      </ScrollReveal>

      <Chatbot />
    </div>
  );
}
