// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Award, Layers, Image, X, Share2, Menu, Download, ArrowRight, Loader } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [activeGalleryTab, setActiveGalleryTab] = useState('ruturaj'); // New state for gallery sub-tabs
  const [selectedArt, setSelectedArt] = useState<any>(null);
  const [showQR, setShowQR] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [imageLoadingStates, setImageLoadingStates] = useState<Record<number, boolean>>({});

  // Artist Data
  const artist = {
    name: "Hina Bhatt",
    dob: "15th December 1970",
    email: "hina.bhatt@yahoo.com",
    phone: "+91 9766927455",
    address: "F-704, Lunkad Sky Lounge, Lane 7, Kalyaninagar, Pune - 411006, Maharashtra, India",
    statement: "Nature has always been my greatest source of inspiration and reflection. Its ever-changing light, colours, and moods speak to the rhythm of life itself. Through my work, I explore our intimate connection with the universe—the bonds between man, nature, and the divine. My paintings move between abstraction and emotion, expressing the energies, textures, and spiritual undercurrents that flow through existence. Each brushstroke becomes a meditation on harmony, transformation, and the quiet truths that nature reveals when we pause, observe, and allow ourselves to feel deeply.",
    ruturajStatement: "Ruturaj celebrates spring as a symbol of renewal, abundance, and divine joy. Inspired by Krishna’s words, these works reflect the blossoming of life both in nature and within the self. Each painting is a meditation on harmony—with the eternal, with nature, and with one’s inner being. Though seasons may change, a spirit connected to the divine remains in perpetual bloom—radiant, grateful, and full of grace."
  };

  const resume = {
    education: [
      { title: "Bachelor of Fine Arts", inst: "Stella Maris College, Chennai (1991)", type: "Graduation" },
      { title: "Diploma in Textile Designing", inst: "Nirmala Niketan Mumbai (1993)", type: "Diploma" },
      { title: "Management of Social Initiatives", inst: "IIM Kozhikode", type: "MDP" }
    ],
    awards: ["Gold Award at Sumbaran Art Foundation"],
    soloShows: "7 Solo Exhibitions (Pune, Mumbai)",
    groupShows: "40+ Group Shows in India and Abroad (Chennai, Mumbai, Bangalore, Pune, Dubai, Doha, New Delhi, Lucknow, Ahmedabad, Varanasi)",
    collections: [
      "Lakshya Outdoor Media",
      "MD - JP Morgan",
      "CEO, Bajaj Finance",
      "Rahi Platform Technologies",
      "Yoga Centre - Mumbai",
      "Many private collectors in India and abroad"
    ]
  };

  // ARTWORK COLLECTIONS
  const collections = {
    ruturaj: [
        { 
        id: 1, 
        title: "Ruturaj-1", 
        size: "24 × 24 inches", 
        medium: "Oil on Canvas", 
        price: "Price on Request", 
        color: "bg-amber-100",
        image: "https://i.postimg.cc/v8fYz9RZ/9103CEB7-507C-4DE0-8DC3-332BFE96CE70-1-102-o.jpg" 
        },
        { 
        id: 2, 
        title: "Ruturaj-7", 
        size: "36 × 36 inches", 
        medium: "Oil on Canvas", 
        price: "Price on Request", 
        color: "bg-orange-100",
        image: "https://i.postimg.cc/J0Y5thNW/F04A3B1D-B158-4256-ABD8-427EFE983C0C-1-102-o.jpg"
        },
        { 
        id: 3, 
        title: "Ruturaj-15", 
        size: "24 × 24 inches", 
        medium: "Oil on Canvas", 
        price: "Price on Request", 
        color: "bg-yellow-100", 
        image: "https://i.postimg.cc/Df96XSLv/35D9FB1B-ED18-4A73-A34A-378C22D9E62D-1-102-o.jpg" 
        },
        { 
        id: 4, 
        title: "Ruturaj-23", 
        size: "60 × 36 inches", 
        medium: "Oil on Canvas", 
        price: "Price on Request", 
        color: "bg-rose-100", 
        image: "https://i.postimg.cc/P538179w/FD571F0D-5DE6-44B2-870D-97971731E75A-1-102-o.jpg" 
        },
        { 
        id: 5, 
        title: "Ruturaj-39", 
        size: "60 × 36 inches", 
        medium: "Oil on Canvas", 
        price: "Price on Request", 
        color: "bg-red-50", 
        image: "https://i.postimg.cc/dV1hQB3T/33137944-AAD5-4530-91D3-75170872CCE2-4-5005-c.jpg" 
        },
        { 
        id: 6, 
        title: "Ruturaj-43", 
        size: "36 × 36 inches", 
        medium: "Oil on Canvas", 
        price: "Price on Request", 
        color: "bg-emerald-50", 
        image: "https://i.postimg.cc/QdHMZdYL/5A38C771-458A-4A15-AD72-94BE02FBC99F-1-102-o.jpg" 
        },
        { 
        id: 7, 
        title: "Ruturaj-48", 
        size: "36 × 36 inches", 
        medium: "Oil on Canvas", 
        price: "Price on Request", 
        color: "bg-teal-50", 
        image: "https://i.postimg.cc/TwqdJL1t/6187CAF2-89F4-4B6F-A3AC-2CD338AEAC9C-1-102-o.jpg" 
        },
        { 
        id: 8, 
        title: "Ruturaj-53", 
        size: "30 × 30 inches", 
        medium: "Oil on Canvas", 
        price: "Price on Request", 
        color: "bg-blue-50", 
        image: "https://i.postimg.cc/25nrCb4J/702E2988-D099-4287-B8C3-0A0FA85DAA2F-1-102-o.jpg" 
        },
        { 
        id: 9, 
        title: "Ruturaj-54", 
        size: "30 × 30 inches", 
        medium: "Oil on Canvas", 
        price: "Price on Request", 
        color: "bg-indigo-50", 
        image: "https://i.postimg.cc/CMrGGz8B/7F9A83C4-D794-4A1B-A540-234ABE244A1A-1-102-o.jpg" 
        },
        { 
        id: 10, 
        title: "Ruturaj-56", 
        size: "30 × 30 inches", 
        medium: "Oil on Canvas", 
        price: "Price on Request", 
        color: "bg-violet-50", 
        image: "https://i.postimg.cc/d1L8pFPK/1D297077-5ABE-497D-8C41-3A66CA85C28E-1-102-o.jpg" 
        },
        { 
        id: 11, 
        title: "Ruturaj-61", 
        size: "24 × 48 inches (Diptych)", 
        medium: "Oil on Canvas", 
        price: "Price on Request", 
        extra: "Total: 16 sq. ft", 
        color: "bg-purple-100", 
        image: "https://i.postimg.cc/T3d5BxnX/EFC580D6-9826-4216-9297-EE776C0B08D0-1-102-o.jpg" 
        },
    ],
    // New Collection: Roots and Bonds
    rootsAndBonds: [
        { 
        id: 201, 
        title: "Roots and Bonds - 1", 
        size: "24 x 23 Inches", 
        medium: "Mix Media on Canvas", 
        price: "Price on Request", 
        color: "bg-stone-200", 
        image: "https://imagizer.imageshack.com/img924/3189/wiJjEH.jpg" 
        },
        { 
        id: 202, 
        title: "Roots and Bonds - 2", 
        size: "18 x 18 Inches", 
        medium: "Mix Media on Canvas", 
        price: "Price on Request", 
        color: "bg-stone-200", 
        image: "https://imagizer.imageshack.com/img924/9132/eyRFqf.jpg" 
        },
        { 
        id: 203, 
        title: "Roots and Bonds - 3", 
        size: "18 x 18 Inches", 
        medium: "Mix Media on Canvas", 
        price: "Price on Request", 
        color: "bg-stone-200", 
        image: "https://imagizer.imageshack.com/img923/6051/sHV9ac.jpg" 
        },
        { 
        id: 204, 
        title: "Roots and Bonds - 4", 
        size: "18 x 18 Inches", 
        medium: "Mix Media on Canvas", 
        price: "Price on Request", 
        color: "bg-stone-200", 
        image: "https://imagizer.imageshack.com/img922/8008/Tam4ps.jpg" 
        },
        { 
        id: 205, 
        title: "Roots and Bonds - 5", 
        size: "12 x 24 Inches", 
        medium: "Mix Media on Canvas", 
        price: "Price on Request", 
        color: "bg-stone-200", 
        image: "https://imagizer.imageshack.com/img924/889/QAXXVY.jpg" 
        },
        { 
        id: 206, 
        title: "Roots and Bonds - 6", 
        size: "13 x 16 Inches", 
        medium: "Mix Media on Canvas", 
        price: "Price on Request", 
        color: "bg-stone-200", 
        image: "https://imagizer.imageshack.com/img921/9428/u28vtZ.jpg" 
        },
        { 
        id: 207, 
        title: "Roots and Bonds - 7", 
        size: "13 x 16 Inches", 
        medium: "Mix Media on Canvas", 
        price: "Price on Request", 
        color: "bg-stone-200", 
        image: "https://imagizer.imageshack.com/img921/6076/sn44zM.jpg" 
        },
        { 
        id: 208, 
        title: "Roots and Bonds - 8", 
        size: "24 x 36 Inches", 
        medium: "Mix Media on Canvas", 
        price: "Price on Request", 
        color: "bg-stone-200", 
        image: "https://imagizer.imageshack.com/img922/50/kyh6M4.jpg" 
        },
        { 
        id: 209, 
        title: "Roots and Bonds - 9", 
        size: "24 x 24 Inches", 
        medium: "Mix Media on Canvas", 
        price: "Price on Request", 
        color: "bg-stone-200", 
        image: "https://imagizer.imageshack.com/img923/3425/uCCvrj.jpg" 
        },
        { 
        id: 210, 
        title: "Roots and Bonds - 10", 
        size: "24 x 36 Inches", 
        medium: "Mix Media on Canvas", 
        price: "Price on Request", 
        color: "bg-stone-200", 
        image: "https://imagizer.imageshack.com/img921/6107/8reJKn.jpg" 
        },
        { 
        id: 211, 
        title: "Roots and Bonds - 11", 
        size: "24 x 24 Inches", 
        medium: "Mix Media on Canvas", 
        price: "Price on Request", 
        color: "bg-stone-200", 
        image: "https://imagizer.imageshack.com/img922/7646/w1zYSj.jpg" 
        },
        { 
        id: 212, 
        title: "Roots and Bonds - 12", 
        size: "24 x 24 Inches", 
        medium: "Mix Media on Canvas", 
        price: "Price on Request", 
        color: "bg-stone-200", 
        image: "https://imagizer.imageshack.com/img923/3443/TYHV8v.jpg" 
        },
        { 
        id: 213, 
        title: "Roots and Bonds - 13", 
        size: "24 x 48 Inches", 
        medium: "Mix Media on Canvas", 
        price: "Price on Request", 
        color: "bg-stone-200", 
        image: "https://imagizer.imageshack.com/img923/3443/TYHV8v.jpg" 
        }
    ]
  };

  // QR Code URL
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`;

  const TabButton = ({ name, label }: any) => (
    <button
      onClick={() => { setActiveTab(name); setIsMenuOpen(false); }}
      className={`px-4 py-3 text-sm tracking-widest uppercase transition-colors duration-300 
        ${activeTab === name 
          ? 'text-gray-900 border-b-2 border-gray-900 font-semibold' 
          : 'text-gray-500 hover:text-gray-900'}`}
    >
      {label}
    </button>
  );

  const handleImageLoad = (id: number) => {
    setImageLoadingStates(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="min-h-screen bg-stone-50 text-gray-800 font-sans selection:bg-stone-200">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button 
              onClick={() => setActiveTab('home')}
              className="text-xl font-serif tracking-wider text-gray-900 hover:opacity-80 transition-opacity"
            >
              HINA BHATT
            </button>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-2 lg:space-x-6">
              <TabButton name="home" label="Home" />
              <TabButton name="gallery" label="Gallery" />
              <TabButton name="about" label="Statement" />
              <TabButton name="cv" label="CV & Bio" />
              <TabButton name="contact" label="Contact" />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
               <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-600">
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
               </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-200 absolute w-full left-0 animate-fade-in-down shadow-lg z-50">
            <div className="flex flex-col p-4 space-y-2">
              <TabButton name="home" label="Home" />
              <TabButton name="gallery" label="Gallery" />
              <TabButton name="about" label="Statement" />
              <TabButton name="cv" label="CV & Bio" />
              <TabButton name="contact" label="Contact" />
            </div>
          </div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div key={activeTab} className="animate-fade-in-up w-full">
            {/* VIEW: HOME */}
            {activeTab === 'home' && (
              <div className="flex flex-col items-center justify-center min-h-[60vh] md:min-h-[70vh] text-center">
                 <div className="max-w-3xl space-y-8">
                    <div className="inline-block p-4 border-t border-b border-stone-300 mb-4">
                      <span className="text-sm md:text-base uppercase tracking-[0.3em] text-stone-500">Fine Artist</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-gray-900 tracking-tight leading-tight">
                      Hina Bhatt
                    </h1>

                    <p className="text-lg md:text-2xl text-stone-600 font-serif italic leading-relaxed max-w-2xl mx-auto">
                      "Exploring the intimate connection between nature, humanity, and the divine."
                    </p>

                    <div className="pt-8">
                      <button 
                        onClick={() => setActiveTab('gallery')}
                        className="group inline-flex items-center px-8 py-4 bg-gray-900 text-white text-sm md:text-base tracking-widest uppercase hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                      >
                        View The Collection
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                    <div className="pt-16 grid grid-cols-3 gap-4 opacity-50 max-w-lg mx-auto">
                       <div className="h-1 bg-gradient-to-r from-transparent to-stone-300"></div>
                       <div className="h-1 bg-stone-300"></div>
                       <div className="h-1 bg-gradient-to-l from-transparent to-stone-300"></div>
                    </div>
                 </div>
              </div>
            )}
            
            {/* VIEW: GALLERY - REDESIGNED */}
            {activeTab === 'gallery' && (
              <div className="w-full">
                <div className="mb-10 text-center max-w-3xl mx-auto">
                  {/* Collection Tabs */}
                  <div className="flex justify-center space-x-8 mb-8 border-b border-stone-200 pb-2">
                    <button 
                      onClick={() => setActiveGalleryTab('ruturaj')}
                      className={`pb-2 text-lg font-serif tracking-wide transition-colors ${activeGalleryTab === 'ruturaj' ? 'border-b-2 border-gray-900 text-gray-900' : 'text-stone-400 hover:text-gray-600'}`}
                    >
                      Ruturaj
                    </button>
                    <button 
                      onClick={() => setActiveGalleryTab('rootsAndBonds')}
                      className={`pb-2 text-lg font-serif tracking-wide transition-colors ${activeGalleryTab === 'rootsAndBonds' ? 'border-b-2 border-gray-900 text-gray-900' : 'text-stone-400 hover:text-gray-600'}`}
                    >
                      Roots and Bonds
                    </button>
                  </div>

                  <div key={`${activeGalleryTab}-text`} className="animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
                      {activeGalleryTab === 'ruturaj' ? 'The Ruturaj Collection' : 'Roots and Bonds'}
                    </h2>
                    <p className="text-gray-600 italic leading-relaxed font-serif">
                      "{activeGalleryTab === 'ruturaj' ? artist.ruturajStatement : 'Exploring our intimate connection with the universe—the bonds between man, nature, and the divine.'}"
                    </p>
                  </div>
                </div>

                {/* REDESIGNED GALLERY GRID - No aspect ratio constraint */}
                <div key={`${activeGalleryTab}-grid`} className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 animate-fade-in-up">
                  {collections[activeGalleryTab].map((art: any) => (
                    <div 
                      key={art.id} 
                      onClick={() => setSelectedArt(art)}
                      className="group cursor-pointer bg-white rounded-sm shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden flex flex-col"
                    >
                      {/* FIXED HEIGHT IMAGE CONTAINER - Same size for all cards */}
                      <div className="w-full aspect-square bg-white flex items-center justify-center relative overflow-hidden">
                        {art.image ? (
                          <div className="relative w-full h-full">
                            {!imageLoadingStates[art.id] && (
                              <div className="absolute inset-0 flex items-center justify-center bg-stone-100">
                                <Loader className="w-8 h-8 text-stone-400 animate-spin" />
                              </div>
                            )}
                            <img 
                              src={art.image} 
                              alt={art.title} 
                              referrerPolicy="no-referrer"
                              onLoad={() => handleImageLoad(art.id)}
                              className={`w-full h-full object-contain p-2 md:p-6 transition-all duration-700 ${
                                imageLoadingStates[art.id] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                              } group-hover:scale-105`}
                              style={{ objectPosition: 'center' }}
                            />
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center p-8 text-stone-400">
                            <Image className="mb-2 w-12 h-12 opacity-40" />
                            <span className="opacity-60 text-sm tracking-widest">ARTWORK IMAGE</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="p-3 md:p-6 text-center">
                        <h3 className="text-sm md:text-xl font-serif text-gray-900 mb-1 truncate">{art.title}</h3>
                        <p className="text-stone-500 text-[10px] md:text-sm uppercase tracking-wide truncate">{art.size}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* VIEW: ABOUT / STATEMENT */}
            {activeTab === 'about' && (
              <div className="max-w-4xl mx-auto">
                <div className="bg-white p-8 md:p-16 shadow-sm border border-stone-100 rounded-sm">
                  <h1 className="text-4xl md:text-5xl font-serif text-center mb-12 text-gray-900">Artist Statement</h1>
                  <div className="prose prose-lg prose-stone mx-auto">
                    <p className="text-lg md:text-xl text-gray-700 leading-9 mb-10 first-letter:text-6xl first-letter:font-serif first-letter:text-gray-900 first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]">
                      {artist.statement}
                    </p>
                    <div className="w-24 h-1 bg-stone-300 mx-auto my-12"></div>
                    <h3 className="text-2xl md:text-3xl font-serif text-center mb-6">On Ruturaj</h3>
                    <p className="text-lg md:text-xl text-gray-700 leading-9 italic text-center">
                      "{artist.ruturajStatement}"
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW: CV */}
            {activeTab === 'cv' && (
              <div className="max-w-4xl mx-auto space-y-8">
                
                {/* Education */}
                <div className="bg-white p-6 md:p-10 shadow-sm rounded-sm border border-stone-100">
                  <div className="flex items-center mb-8">
                    <Layers className="w-6 h-6 text-stone-400 mr-3" />
                    <h2 className="text-2xl md:text-3xl font-serif">Education</h2>
                  </div>
                  <div className="space-y-6 border-l-2 border-stone-200 pl-6">
                    {resume.education.map((edu, idx) => (
                      <div key={idx} className="relative">
                        <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-stone-300 border-4 border-white"></div>
                        <p className="text-xs uppercase tracking-widest text-stone-400 mb-1">{edu.type}</p>
                        <h3 className="text-lg text-gray-900 mb-1">{edu.title}</h3>
                        <p className="text-stone-600">{edu.inst}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Awards & Exhibitions */}
                <div className="bg-white p-6 md:p-10 shadow-sm rounded-sm border border-stone-100">
                  <div className="flex items-center mb-8">
                    <Award className="w-6 h-6 text-stone-400 mr-3" />
                    <h2 className="text-2xl md:text-3xl font-serif">Achievements & Shows</h2>
                  </div>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg mb-4 text-gray-900 border-b border-stone-100 pb-2">Awards</h3>
                      <ul className="list-disc list-inside text-stone-700 ml-2 space-y-2">
                        {resume.awards.map((a, i) => <li key={i}>{a}</li>)}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg mb-4 text-gray-900 border-b border-stone-100 pb-2">Exhibitions</h3>
                      <div className="space-y-4 text-stone-700">
                        <div className="bg-stone-50 p-4 rounded">
                          <span className="text-gray-800 block mb-1">Solo Exhibitions</span>
                          <p>{resume.soloShows}</p>
                        </div>
                        <div className="bg-stone-50 p-4 rounded">
                          <span className="text-gray-800 block mb-1">Group Exhibitions</span>
                          <p>{resume.groupShows}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Collections */}
                <div className="bg-white p-6 md:p-10 shadow-sm rounded-sm border border-stone-100">
                  <h2 className="text-2xl md:text-3xl font-serif mb-8">Select Collectors</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {resume.collections.map((col, idx) => (
                      <div key={idx} className="flex items-center bg-stone-50 p-4 rounded-md hover:bg-stone-100 transition-colors">
                        <div className="w-2 h-2 bg-stone-400 rounded-full mr-4 flex-shrink-0"></div>
                        <span className="text-stone-700">{col}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* VIEW: CONTACT */}
            {activeTab === 'contact' && (
              <div className="max-w-2xl mx-auto">
                <div className="bg-white p-8 md:p-12 shadow-sm text-center rounded-sm border border-stone-100">
                  <h2 className="text-3xl md:text-4xl font-serif mb-12">Get in Touch</h2>
                  
                  <div className="space-y-10">
                    <div className="flex flex-col items-center">
                      <div className="bg-stone-100 p-5 rounded-full mb-4 hover:bg-stone-200 transition-colors">
                        <Phone className="w-6 h-6 text-stone-600" />
                      </div>
                      <p className="text-xl font-medium">{artist.phone}</p>
                      <p className="text-stone-500 text-sm uppercase mt-2 tracking-wider">Mobile</p>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="bg-stone-100 p-5 rounded-full mb-4 hover:bg-stone-200 transition-colors">
                        <Mail className="w-6 h-6 text-stone-600" />
                      </div>
                      <a href={`mailto:${artist.email}`} className="text-xl font-medium hover:underline text-stone-800 break-all">{artist.email}</a>
                      <p className="text-stone-500 text-sm uppercase mt-2 tracking-wider">Email</p>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="bg-stone-100 p-5 rounded-full mb-4 hover:bg-stone-200 transition-colors">
                        <MapPin className="w-6 h-6 text-stone-600" />
                      </div>
                      <p className="text-lg text-stone-700 max-w-md mx-auto leading-relaxed">{artist.address}</p>
                      <p className="text-stone-500 text-sm uppercase mt-2 tracking-wider">Studio Address</p>
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-stone-100">
                    <button 
                      onClick={() => setShowQR(true)}
                      className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded hover:bg-gray-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Show QR Code
                    </button>
                  </div>
                </div>
              </div>
            )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-stone-100 py-10 text-center text-stone-500 text-sm border-t border-stone-200">
        <p>&copy; {new Date().getFullYear()} {artist.name}. All Rights Reserved.</p>
        <div className="mt-6 flex justify-center space-x-8">
            <button onClick={() => { setActiveTab('contact'); setShowQR(true); }} className="hover:text-stone-800 transition-colors">Share</button>
            <button onClick={() => setActiveTab('contact')} className="hover:text-stone-800 transition-colors">Contact</button>
        </div>
      </footer>

      {/* MODAL: Artwork Details - REDESIGNED */}
      {selectedArt && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-4 bg-black/90 backdrop-blur-sm animate-fade-in overflow-auto"
          onClick={() => setSelectedArt(null)}
        >
          <div 
            className="bg-white w-full h-full md:h-auto md:max-w-7xl md:max-h-[95vh] md:rounded-xl relative flex flex-col md:flex-row animate-scale-up overflow-hidden md:shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedArt(null)}
              className="absolute top-3 right-3 md:top-6 md:right-6 z-20 p-2 md:p-3 bg-white/90 hover:bg-white text-gray-900 rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            
            {/* REDESIGNED IMAGE CONTAINER - Full view, no cropping */}
            <div className="w-full md:w-2/3 flex items-center justify-center bg-white relative overflow-auto flex-shrink-0 p-4 md:p-12">
               {selectedArt.image ? (
                <img 
                  src={selectedArt.image} 
                  alt={selectedArt.title} 
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-full object-contain"
                  style={{ 
                    width: 'auto', 
                    height: 'auto',
                    maxWidth: '100%',
                    maxHeight: '100%'
                  }}
                />
              ) : (
                <div className="flex flex-col items-center text-stone-400">
                  <Image className="mb-4 w-16 h-16 opacity-40" />
                  <span className="opacity-60 tracking-widest text-lg">ARTWORK PREVIEW</span>
                </div>
              )}
            </div>
            
            {/* Details Container */}
            <div className="w-full md:w-1/3 bg-white p-6 md:p-10 flex flex-col justify-center overflow-auto">
              <div>
                <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">{selectedArt.title}</h3>
                <div className="h-0.5 w-16 bg-gray-900 mb-8"></div>
                
                <div className="space-y-6 text-base">
                  <div>
                    <p className="text-stone-400 uppercase text-xs mb-2 tracking-wider">Dimensions</p>
                    <p className="text-gray-900 text-lg">{selectedArt.size}</p>
                  </div>
                  <div>
                    <p className="text-stone-400 uppercase text-xs mb-2 tracking-wider">Medium</p>
                    <p className="text-gray-900 text-lg">{selectedArt.medium}</p>
                  </div>
                  {selectedArt.extra && (
                  <div>
                    <p className="text-stone-400 uppercase text-xs mb-2 tracking-wider">Details</p>
                    <p className="text-gray-900 text-lg">{selectedArt.extra}</p>
                  </div>
                  )}
                </div>

                <div className="mt-10 pt-8 border-t border-stone-200">
                  <p className="text-stone-400 uppercase text-xs mb-2 tracking-wider">Price</p>
                  <p className="text-xl md:text-2xl font-serif text-gray-900">{selectedArt.price}</p>
                </div>

                <div className="mt-8">
                  <button 
                    onClick={() => {
                      setSelectedArt(null);
                      setActiveTab('contact');
                    }}
                    className="w-full px-6 py-3 bg-gray-900 text-white text-sm tracking-wide rounded hover:bg-gray-800 transition-all shadow-md hover:shadow-lg"
                  >
                    Inquire About This Piece
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: QR Code */}
      {showQR && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setShowQR(false)}
        >
          <div 
            className="bg-white p-8 md:p-10 rounded-lg shadow-2xl text-center max-w-sm w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowQR(false)}
              className="absolute top-3 right-3 p-2 hover:bg-stone-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
            <h3 className="text-2xl font-serif mb-6">Share Portfolio</h3>
            <div className="bg-white p-4 border-2 border-stone-200 inline-block mb-6 rounded">
              <img src={qrCodeUrl} alt="QR Code" className="w-48 h-48" />
            </div>
            <p className="text-sm text-stone-600 mb-8">Scan to view Hina Bhatt's Portfolio on mobile.</p>
            <button 
               onClick={() => window.print()}
               className="flex items-center justify-center w-full px-6 py-3 border-2 border-stone-300 text-stone-700 hover:bg-stone-50 rounded transition-colors"
            >
               <Download className="w-4 h-4 mr-2" />
               Print / Save Info
            </button>
          </div>
        </div>
      )}
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.5s ease-out; }
        .animate-fade-in-up { animation: fadeInUp 0.5s ease-out both; }
        .animate-scale-up { animation: scaleUp 0.3s ease-out; }
        .animate-fade-in-down { animation: fadeInDown 0.3s ease-out; }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .animate-spin { animation: spin 1s linear infinite; }
      `}</style>
    </div>
  );
};

export default Portfolio;
