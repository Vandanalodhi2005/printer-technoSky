import React, { useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { Link } from 'react-router-dom';
import ecofriendly from '../assets/ecofriendly.png';
import inkjetvstoner from '../assets/inkjetvstoner.jpg';
import moneysave from '../assets/moneysave.jpg';
import printerisoffline from '../assets/printerisoffline.png';
import top10 from '../assets/top10.jpg';
import ultimateguide from '../assets/ultimateguide.jpg';

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogs = [
    {
      id: 1,
      title: "Top 10 Home Printers in 2026 — Best Picks for Students, Families & Remote Workers",
      excerpt: "Choosing the best home printer in 2026 has become more important than ever. Find out our top picks across different categories.",
      date: "February 11, 2026",
      slug: "top-10-home-printers-2026",
      category: "Buying Guide",
      image: top10
    },
     {
      id: 2,
      title: "Inkjet vs Laser Printers (2026 Buying Guide) — Which One Is Right for You?",
      excerpt: "Should you buy an inkjet printer or a laser printer? We break down the technical and financial differences to help you decide.",
      date: "February 11, 2026",
      slug: "inkjet-vs-laser-printers-2026",
      category: "Buying Guide",
      image: inkjetvstoner
    },
     {
      id: 3,
      title: "How to Save Money on Ink & Toner — Smart Printing Tips Every User Should Know (2026 Guide)",
      excerpt: "Ink costs can be frustrating. Learn instant ways to reduce printing costs, optimize settings, and save 30-60% per year.",
      date: "February 11, 2026",
      slug: "save-money-on-ink-toner-2026",
      category: "Cost Saving Tips",
      image: moneysave
    },
    {
      id: 4,
      title: "The Ultimate Guide to Setting Up a New Printer (Windows & macOS) — 2026 Edition",
      excerpt: "Frustrated with printer setup? Follow our step-by-step guide for unboxing, driver installation, and troubleshooting common connection issues.",
      date: "February 11, 2026",
      slug: "printer-setup-guide-2026",
      category: "Technical Guide",
      image: ultimateguide
    },
    {
      id: 5,
      title: "Why Your Printer Is Offline — 7 Quick Fixes You Can Try at Home (2026 Guide)",
      excerpt: "Is your printer refusing to connect? We break down 7 quick and effective fixes to get your printer back online in minutes.",
      date: "February 11, 2026",
      slug: "printer-offline-fix-guide-2026",
      category: "Troubleshooting",
      image: printerisoffline
    },
    {
      id: 6,
      title: "Eco-Friendly Printing — How to Reduce Waste & Extend Printer Life (2026 Sustainability Guide)",
      excerpt: "Eco-friendly printing saves money and protects the environment. Learn how to print sustainably in 2026.",
      date: "February 11, 2026",
      slug: "eco-friendly-printing-guide-2026",
      category: "Sustainability",
      image: ecofriendly
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header Section (Black & Gold Premium) */}
        <header className="bg-[#111111] text-white py-32 md:py-48 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <span className="inline-block bg-[#B19777] text-white text-[10px] font-black px-6 py-2 mb-8 uppercase tracking-[0.3em]">
              Knowledge Base
            </span>
            <h1 className="font-['Montserrat'] text-4xl md:text-7xl font-black mb-8 uppercase tracking-[0.1em] leading-tight">
              Ink Kart LLC Blog
            </h1>
            <div className="w-40 h-1 bg-[#B19777] mx-auto mb-10"></div>
            <p className="text-[11px] uppercase tracking-[0.4em] font-black text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Curated Printing Insights • Technical Expertise • Industry Reviews
            </p>
          </div>
        </header>

        {/* Blog Directory (Premium Grid) */}
        <section className="max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-100">
            {blogs.map((blog, index) => (
              <div key={blog.id} className={`p-8 md:p-16 border border-gray-50 flex flex-col group hover:bg-[#111111] transition-all duration-700 ${index % 2 !== 0 ? 'bg-[#fafafa]' : 'bg-white'}`}>
                <div className="flex items-center gap-4 mb-8">
                     <span className="text-[10px] font-black uppercase tracking-widest text-[#B19777] group-hover:text-white transition-colors">{blog.category}</span>
                     <span className="w-8 h-[1px] bg-gray-200 group-hover:bg-[#B19777]"></span>
                     <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{blog.date}</span>
                </div>
                
                <h2 className="font-['Montserrat'] text-xl md:text-2xl font-black text-[#111111] mb-8 uppercase tracking-widest leading-snug group-hover:text-white transition-colors">
                    <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
                </h2>
                
                <p className="text-gray-500 text-sm leading-loose mb-12 line-clamp-3 group-hover:text-gray-400 font-medium tracking-wide">
                  {blog.excerpt}
                </p>
                
                <div className="mt-auto">
                    <Link 
                      to={`/blogs/${blog.slug}`}
                      className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-[#B19777] hover:text-white transition-all border-b-2 border-transparent hover:border-[#B19777] pb-2"
                    >
                      Explore Technical Analysis &rarr;
                    </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Section (High-End Callout) */}
        <section className="bg-[#111111] py-32 border-t-8 border-[#B19777]">
            <div className="container mx-auto px-4 text-center">
                <h3 className="font-['Montserrat'] font-black text- white text-2xl uppercase tracking-[0.3em] mb-8">Stay Ahead of Printing Trends</h3>
                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-[0.3em] mb-12">Register for executive updates directly from our technical team.</p>
                <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-0">
                    <input 
                        type="email" 
                        placeholder="Executive Email Address" 
                        className="bg-transparent border border-[#333] px-6 py-5 text-white text-[10px] uppercase tracking-widest flex-1 focus:outline-none focus:border-[#B19777] border-r-0"
                    />
                    <button className="bg-[#B19777] text-white px-8 py-5 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-[#111111] transition-all">
                        Register
                    </button>
                </div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blogs;
