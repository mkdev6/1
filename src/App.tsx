import React, { useState, useEffect, useRef } from 'react';
import { 
  Truck, 
  Bot, 
  Building2, 
  CreditCard, 
  FileText, 
  Clock, 
  Shield, 
  Headphones,
  ChevronRight,
  Menu,
  X,
  Star,
  CheckCircle,
  ArrowRight,
  Pill,
  Activity,
  Users,
  Zap,
  Heart,
  TrendingUp,
  Globe,
  Package,
  MapPin,
  Timer,
  Smartphone,
  ShoppingCart,
  Layers,
  Home,
  Bed,
  Settings,
  Info,
  Phone,
  Award
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typewriterText, setTypewriterText] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [glowIntensity, setGlowIntensity] = useState(0);
  const heroRef = useRef(null);
  const particlesRef = useRef([]);

  // Enhanced typewriter effect with multiple phases
  useEffect(() => {
    const text = 'Medicine Deliveries';
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setTypewriterText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 120);

    return () => clearInterval(timer);
  }, []);

  // Glow intensity animation
  useEffect(() => {
    const glowTimer = setInterval(() => {
      setGlowIntensity(prev => (prev + 1) % 100);
    }, 50);

    return () => clearInterval(glowTimer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Initialize particles for hero section
  useEffect(() => {
    const particles = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        opacity: Math.random() * 0.5 + 0.1
      });
    }
    particlesRef.current = particles;
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  const deliverySteps = [
    {
      icon: Smartphone,
      title: "Order Placed",
      description: "Patient or hospital staff places order through our platform",
      color: "from-blue-500 to-cyan-500",
      delay: "0ms"
    },
    {
      icon: Bot,
      title: "AI Processing",
      description: "Our AI validates prescription and checks inventory in real-time",
      color: "from-purple-500 to-pink-500",
      delay: "200ms"
    },
    {
      icon: Package,
      title: "Smart Packaging",
      description: "Automated systems prepare and package medications securely",
      color: "from-green-500 to-teal-500",
      delay: "400ms"
    },
    {
      icon: Truck,
      title: "Express Delivery",
      description: "Real-time tracked delivery from hospital pharmacy to patient bed or home",
      color: "from-orange-500 to-red-500",
      delay: "600ms"
    }
  ];

  const primaryServices = [
    {
      icon: Building2,
      title: "Tech-First Hospital Pharmacies",
      description: "We setup and operate cutting-edge, AI-powered pharmacies inside hospitals with automated inventory and smart dispensing systems.",
      color: "from-blue-600 to-cyan-600",
      stats: "Full Setup & Operations",
      highlight: true
    },
    {
      icon: Bed,
      title: "Bedside Delivery Network",
      description: "Lightning-fast delivery from our hospital pharmacies directly to patient beds within the hospital in under 10 minutes.",
      color: "from-purple-600 to-pink-600",
      stats: "< 10 min in-hospital",
      highlight: true
    },
    {
      icon: Home,
      title: "Home Delivery Service",
      description: "Same-day delivery from hospital pharmacies to patient homes with real-time tracking and temperature-controlled transport.",
      color: "from-green-600 to-teal-600",
      stats: "Same-day home delivery",
      highlight: true
    }
  ];

  const additionalServices = [
    {
      icon: Bot,
      title: "Automated Pharmacy Operations",
      description: "Streamline inventory management, prescription processing, and workflow optimization with AI-powered automation.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Layers,
      title: "Virtual Pharmacy Kiosks",
      description: "Self-service kiosks for high-traffic hospitals offering medication dispensing in under 10 minutes.",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: Activity,
      title: "AI-First EHR/HMS",
      description: "Comprehensive electronic health records and hospital management system powered by artificial intelligence.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: CreditCard,
      title: "Loyalty & Financial Programs",
      description: "Cashbacks, loans, EMIs, and health insurance programs to enhance patient engagement and accessibility.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: FileText,
      title: "AI Prescription Reading",
      description: "Advanced OCR technology that accurately reads and processes both digital and handwritten prescriptions.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Shield,
      title: "Secure Data Handling",
      description: "Enterprise-grade encryption and HIPAA-compliant data security for all patient information.",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const visionStats = [
    { number: "Vision", label: "Revolutionizing Healthcare", icon: Package, color: "from-blue-500 to-cyan-500" },
    { number: "Innovation", label: "AI-Powered Solutions", icon: Building2, color: "from-purple-500 to-pink-500" },
    { number: "Speed", label: "< 10min Hospital Delivery", icon: Timer, color: "from-green-500 to-teal-500" },
    { number: "Future", label: "Next-Gen Pharmacy Tech", icon: CheckCircle, color: "from-orange-500 to-red-500" }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden relative">
      {/* Advanced Particle System */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <svg className="w-full h-full">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {particlesRef.current.map((particle) => (
            <circle
              key={particle.id}
              cx={particle.x + Math.sin(scrollY * 0.01 + particle.id) * 20}
              cy={particle.y + Math.cos(scrollY * 0.01 + particle.id) * 15}
              r={particle.size}
              fill="url(#particleGradient)"
              opacity={particle.opacity}
              filter="url(#glow)"
              className="animate-pulse"
            />
          ))}
          <defs>
            <linearGradient id="particleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Mouse Follower Effect */}
      <div 
        className="fixed pointer-events-none z-10 mix-blend-difference"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          transition: 'all 0.1s ease-out'
        }}
      >
        <div className="w-5 h-5 bg-white rounded-full opacity-50"></div>
      </div>

      {/* Advanced Navigation */}
      <nav 
        className="fixed top-0 w-full z-50 transition-all duration-700 ease-out"
        style={{
          backgroundColor: scrollY > 50 ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px) saturate(180%)',
          borderBottom: scrollY > 50 ? '1px solid rgba(229, 231, 235, 0.5)' : 'none',
          transform: `translateY(${scrollY > 100 ? '-2px' : '0px'}) scale(${scrollY > 50 ? '0.98' : '1'})`,
          boxShadow: scrollY > 50 ? '0 25px 50px rgba(0, 0, 0, 0.15)' : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <img 
                  src="/New_Logo_MK.png" 
                  alt="MediKloud Logo" 
                  className="h-10 w-auto transition-all duration-500 group-hover:scale-125" 
                />
                <div className="absolute inset-0 bg-blue-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-ping"></div>
              </div>
            </div>
            
            {/* Desktop Navigation with Professional Menu Items */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: 'Solutions', icon: Building2, target: 'delivery' },
                { name: 'Services', icon: Layers, target: 'Services' },
                { name: 'Technology', icon: Bot, target: 'stats' },
                { name: 'About', icon: Info, target: 'hero' }
              ].map((item, index) => (
                <button 
                  key={item.name}
                  onClick={() => scrollToSection(item.target)}
                  className="relative text-gray-700 hover:text-blue-600 transition-all duration-500 group overflow-hidden flex items-center space-x-1 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <item.icon className="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 transition-all duration-500 group-hover:w-full"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-lg transform scale-110"></span>
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">Contact Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse rounded-full"></div>
              </button>
            </div>

            {/* Advanced Mobile Menu Button */}
            <button 
              className="md:hidden relative w-10 h-10 transition-transform duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Menu 
                  className={`absolute transition-all duration-500 ${isMenuOpen ? 'rotate-180 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`} 
                />
                <X 
                  className={`absolute transition-all duration-500 ${isMenuOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-180 opacity-0 scale-50'}`} 
                />
              </div>
            </button>
          </div>
        </div>

        {/* Advanced Mobile Navigation */}
        <div 
          className={`md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 transition-all duration-700 ease-out ${
            isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-4 py-2 space-y-1">
            {[
              { name: 'Solutions', icon: Building2, target: 'delivery' },
              { name: 'Services', icon: Layers, target: 'Services' },
              { name: 'Technology', icon: Bot, target: 'stats' },
              { name: 'About', icon: Info, target: 'hero' },
              { name: 'Contact Us', icon: Phone, target: 'contact' }
            ].map((item, index) => (
              <button 
                key={item.name}
                onClick={() => scrollToSection(item.target)}
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 rounded-xl transition-all duration-500 transform hover:scale-105 w-full text-left"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transform: isMenuOpen ? 'translateX(0) scale(1)' : 'translateX(-20px) scale(0.95)',
                  opacity: isMenuOpen ? 1 : 0,
                  transition: `all 0.5s ease-out ${index * 100}ms`
                }}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section with Fixed Text Layout */}
      <section ref={heroRef} className="relative pt-24 pb-20 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
        {/* Morphing Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl transition-all duration-[3000ms] ease-in-out"
            style={{
              transform: `translate(${Math.sin(scrollY * 0.01) * 50}px, ${Math.cos(scrollY * 0.01) * 30}px) scale(${1 + Math.sin(scrollY * 0.005) * 0.2})`,
              filter: `blur(${30 + Math.sin(scrollY * 0.01) * 10}px)`
            }}
          ></div>
          <div 
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl transition-all duration-[4000ms] ease-in-out"
            style={{
              transform: `translate(${Math.cos(scrollY * 0.008) * 40}px, ${Math.sin(scrollY * 0.008) * 25}px) scale(${1 + Math.cos(scrollY * 0.006) * 0.15})`,
              filter: `blur(${25 + Math.cos(scrollY * 0.008) * 8}px)`
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div 
            id="hero"
            className={`transition-all duration-1000 ease-out ${
              isVisible.hero ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
            }`}
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-sm font-semibold mb-4 animate-bounce">
                🚀 Revolutionizing Hospital Pharmacy Operations
              </span>
            </div>
            
            <h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-[10] cursor-pointer select-none space-y-4"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="block">
                <span 
                  className="relative inline-block animate-fade-in-up text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-900 to-black hover:from-blue-600 hover:via-purple-600 hover:to-cyan-600 transition-all duration-700 transform hover:scale-105 z-50"
                  style={{ 
                    animationDelay: '0.2s',
                    position: 'relative',
                    zIndex: 50
                  }}
                >
                  Lightning-Fast
                </span>
              </div>
              
              <div className="block">
                <span className="relative inline-block group">
                  <span 
                    className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 animate-fade-in-up transform transition-all duration-500 hover:scale-110"
                    style={{ 
                      animationDelay: '0.4s',
                      textShadow: isHovering ? `0 0 ${15 + glowIntensity * 0.2}px rgba(59, 130, 246, 0.4)` : 'none',
                      filter: isHovering ? `drop-shadow(0 0 ${8 + glowIntensity * 0.1}px rgba(6, 182, 212, 0.3))` : 'none'
                    }}
                  >
                    {typewriterText}
                  </span>
                  <span 
                    className="animate-blink text-blue-500 ml-1 text-6xl font-thin"
                    style={{
                      textShadow: `0 0 ${10 + glowIntensity * 0.1}px rgba(59, 130, 246, 0.6)`,
                      filter: `drop-shadow(0 0 5px rgba(6, 182, 212, 0.4))`
                    }}
                  >
                    |
                  </span>
                  
                  {/* Enhanced background glow - larger and more visible */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-teal-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-lg"
                    style={{
                      transform: `scale(${1.3 + Math.sin(glowIntensity * 0.05) * 0.1})`,
                      top: '-20%',
                      bottom: '-20%',
                      left: '-30%',
                      right: '-30%'
                    }}
                  ></div>
                  
                  {/* Larger floating particles around text */}
                  {isHovering && [...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-70 animate-ping"
                      style={{
                        left: `${10 + Math.random() * 80}%`,
                        top: `${10 + Math.random() * 80}%`,
                        animationDelay: `${i * 250}ms`,
                        animationDuration: `${1.8 + Math.random() * 0.7}s`
                      }}
                    ></div>
                  ))}
                </span>
              </div>
              
              <div className="block">
                <span 
                  className="inline-block animate-fade-in-up text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 hover:from-purple-600 hover:via-indigo-600 hover:to-blue-600 transition-all duration-700 transform hover:scale-105"
                  style={{ animationDelay: '0.6s' }}
                >
                  from Hospital Pharmacies
                </span>
              </div>
            </h1>
            
            <p 
              className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up hover:text-gray-700 transition-colors duration-300"
              style={{ animationDelay: '0.8s' }}
            >
              We're building the future of hospital pharmacy operations with AI-powered delivery networks. 
              From setting up tech-first pharmacies inside hospitals to delivering medications to patient beds in under 10 minutes or homes the same day.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
              style={{ animationDelay: '1s' }}
            >
              <button 
                onClick={() => scrollToSection('contact')}
                className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>
              
              <button 
                onClick={() => scrollToSection('delivery')}
                className="group relative border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold overflow-hidden transition-all duration-500 hover:shadow-xl hover:scale-105"
              >
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="absolute inset-0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center font-semibold">
                  Learn More
                </span>
              </button>
            </div>
          </div>

          {/* Animated Delivery Visualization */}
          <div 
            className={`relative transition-all duration-1000 ease-out ${
              isVisible.hero ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'
            }`}
          >
            <div className="relative bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/50">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Delivery Vision</h3>
                <p className="text-gray-600">From hospital pharmacy to patient - seamlessly</p>
              </div>
              
              <div className="space-y-6">
                {deliverySteps.map((step, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-4 group cursor-pointer"
                    style={{ 
                      animationDelay: step.delay,
                      animation: `slideInRight 0.8s ease-out ${step.delay} both`
                    }}
                  >
                    <div className={`relative bg-gradient-to-br ${step.color} w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                      <step.icon className="h-6 w-6 text-white" />
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>
                    <div className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-4 transition-all duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Vision Stats Section */}
      <section id="stats" className="py-20 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 ${
              isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {visionStats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group cursor-pointer relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col items-center space-y-4 transform group-hover:scale-110 transition-all duration-500">
                  <div className={`relative bg-gradient-to-br ${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-all duration-500 shadow-xl`}>
                    <stat.icon className="w-8 h-8 text-white" />
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl animate-pulse"></div>
                  </div>
                  
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-yellow-200 transition-all duration-500">
                    <span className="inline-block animate-count-up">{stat.number}</span>
                  </div>
                  
                  <div className="text-blue-100 text-sm md:text-base group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
                
                {/* Ripple effect on hover */}
                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 group-hover:scale-150 transition-all duration-700 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Services - Delivery Focus */}
      <section id="delivery" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible.delivery ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Revolutionary
              </span>
              {' '}Hospital Pharmacy Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're building an AI-powered ecosystem that transforms hospital pharmacy operations - from setting up tech-first pharmacies 
              to delivering medications directly from hospital pharmacies to patients wherever they are.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {primaryServices.map((service, index) => (
              <div 
                key={index} 
                className={`group relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:border-transparent transition-all duration-700 transform hover:-translate-y-6 hover:rotate-1 cursor-pointer overflow-hidden ${
                  isVisible.delivery ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-all duration-700`}></div>
                
                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-1000"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${20 + i * 10}%`,
                        animationDelay: `${i * 200}ms`,
                        animation: 'float 3s ease-in-out infinite'
                      }}
                    ></div>
                  ))}
                </div>
                
                <div className="relative z-10">
                  <div className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-[360deg] transition-all duration-700 shadow-2xl`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-sm font-semibold mb-3">
                      {service.stats}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-500">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                    Learn More
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-3 transition-transform duration-300" />
                  </div>
                </div>
                
                {/* Advanced hover effect */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 group-hover:w-full transition-all duration-700"></div>
                <div className="absolute top-0 right-0 w-1 h-0 bg-gradient-to-b from-blue-500 via-cyan-500 to-teal-500 group-hover:h-full transition-all duration-700 delay-200"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section id="Services" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible.Services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Healthcare Technology Suite</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond deliveries, we're envisioning comprehensive solutions to modernize every aspect of hospital pharmacy operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div 
                key={index} 
                className={`group bg-white p-6 rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer relative overflow-hidden ${
                  isVisible.Services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  transitionDelay: `${index * 75}ms`
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className={`relative bg-gradient-to-br ${service.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="relative text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="relative text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
                
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-cyan-900/30"></div>
          {/* Animated mesh gradient */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`
            }}
          ></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div 
              className={`transition-all duration-1000 ${
                isVisible.contact ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <h2 className="text-5xl font-bold text-white mb-6">
                Transform Your Hospital's 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  {' '}Pharmacy Operations
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Experience the future of healthcare delivery with our comprehensive pharmacy solutions. 
                From AI-powered automation to lightning-fast delivery networks, we're ready to revolutionize your operations.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: CheckCircle, text: "Complete pharmacy setup and operations" },
                  { icon: Zap, text: "AI-powered automation and efficiency" },
                  { icon: Shield, text: "Enterprise-grade security and compliance" },
                  { icon: TrendingUp, text: "Proven results and scalable solutions" }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center text-gray-300 group cursor-pointer"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-10 h-10 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="group-hover:text-white transition-colors duration-300 text-lg">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div 
              className={`bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 transition-all duration-1000 ${
                isVisible.contact ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <form className="space-y-6">
                {[
                  { id: "name", label: "Hospital/Organization Name", type: "text", placeholder: "Enter your organization name" },
                  { id: "email", label: "Email Address", type: "email", placeholder: "Enter your email" },
                  { id: "phone", label: "Phone Number", type: "tel", placeholder: "Enter your phone number" }
                ].map((field, index) => (
                  <div key={field.id} style={{ animationDelay: `${index * 150}ms` }}>
                    <label htmlFor={field.id} className="block text-sm font-medium text-white mb-2">
                      {field.label}
                    </label>
                    <input 
                      type={field.type} 
                      id={field.id} 
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 hover:bg-white/20 backdrop-blur-sm"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
                
                <div style={{ animationDelay: '450ms' }}>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Tell us about your pharmacy needs
                  </label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 hover:bg-white/20 backdrop-blur-sm"
                    placeholder="Share your current pharmacy challenges and how we can help transform your operations"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 relative overflow-hidden group"
                  style={{ animationDelay: '600ms' }}
                >
                  <span className="relative z-10">Get Started Today</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Footer */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-900"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="group">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/New_Logo_MK.png" 
                  alt="MediKloud Logo" 
                  className="h-8 w-auto group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                Revolutionizing healthcare delivery through innovative pharmacy logistics and AI-powered automation.
              </p>
            </div>
            
            {[
              {
                title: "Solutions",
                links: ["Tech-First Pharmacies", "Bedside Delivery", "Home Delivery", "AI Automation"]
              },
              {
                title: "Technology", 
                links: ["AI Prescription Reading", "Virtual Kiosks", "EHR Integration", "Data Security"]
              },
              {
                title: "Company",
                links: ["About Us", "Careers", "News", "Contact"]
              }
            ].map((section, sectionIndex) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold mb-4 text-cyan-400">{section.title}</h4>
                <ul className="space-y-3 text-gray-300">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href="#" 
                        className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block relative group"
                        style={{ animationDelay: `${(sectionIndex * 4 + linkIndex) * 100}ms` }}
                      >
                        {link}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p className="hover:text-white transition-colors duration-300">
              &copy; 2025 MediKloud. Transforming Healthcare Delivery. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg)