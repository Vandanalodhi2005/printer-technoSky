import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import FAQHero from '../components/faqs/FAQHero/FAQHero';
import FAQSearch from '../components/faqs/FAQSearch/FAQSearch';
import FAQTabs from '../components/faqs/FAQTabs/FAQTabs';
import FAQList from '../components/faqs/FAQList/FAQList';
import FAQContact from '../components/faqs/FAQContact/FAQContact';

const FAQs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('products');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState({});

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'products', label: 'Product & Compatibility' },
    { id: 'ordering', label: 'Ordering & Payments' },
    { id: 'shipping', label: 'Shipping & Delivery' },
    { id: 'returns', label: 'Returns & Refunds' },
    { id: 'account', label: 'Account & Privacy' },
    { id: 'ownership', label: 'Brand & Ownership' },
    { id: 'support', label: 'Customer Support' }
  ];

  const faqData = {
    products: [
      { id: 'p1', question: '1. What types of products does Ink Kart LLC offer?', answer: 'We offer a wide selection of printers, ink cartridges, toner cartridges, photo paper, and everyday printing supplies for home and office needs.' },
      { id: 'p2', question: '2. How do I know if a cartridge is compatible with my printer?', answer: 'Each product page includes compatibility details based on manufacturer information. You can also check your printer model on the product label or user manual before making a purchase.' },
      { id: 'p3', question: '3. Are the printers wireless or mobile-printing ready?', answer: 'Many modern printers include Wi-Fi and mobile-printing features. Compatibility depends on the specific model. Product descriptions will list any available wireless capabilities.' },
      { id: 'p4', question: '4. What is page yield and why does it vary?', answer: 'Page yield refers to the estimated number of pages a cartridge may print based on standardized testing. Actual results can vary depending on the type of documents printed, settings, and usage patterns.' },
      { id: 'p5', question: '5. Do you offer product recommendations?', answer: 'Yes. If you need help selecting a printer or printing supplies, our team can assist with general product inquiries based on your needs.' }
    ],
    ordering: [
      { id: 'o1', question: '6. How can I place an order?', answer: 'Simply add products to your cart, proceed to checkout, and complete payment using our secure payment process.' },
      { id: 'o2', question: '7. What payment methods do you accept?', answer: 'We accept major payment methods listed at checkout. All transactions are processed securely.' },
      { id: 'o3', question: '8. Can I modify or cancel my order?', answer: 'Orders can be modified or canceled if they have not yet shipped. Contact us as soon as possible with your order number.' }
    ],
    shipping: [
      { id: 's1', question: '9. Do you ship across the United States and Canada?', answer: 'Yes, we offer shipping throughout the United States and Canada. Delivery times depend on location, product availability, and the selected shipping method.' },
      { id: 's2', question: '10. How long does delivery take?', answer: 'Delivery timelines vary by region. Estimated delivery times are shown during checkout. Weather, carrier delays, or product availability may affect shipping times.' },
      { id: 's3', question: '11. How can I track my order?', answer: 'Once your order ships, you will receive a shipping confirmation email with a tracking link.' }
    ],
    returns: [
      { id: 'r1', question: '12. What is your return policy?', answer: 'Eligible items may be returned within the specified return window. Products must be in original condition and packaging. Please visit our Refund & Return Policy page for full details.' },
      { id: 'r2', question: '13. How do I start a return?', answer: 'Contact our support team with your order number and the reason for return. We will provide the next steps and any applicable return instructions.' },
      { id: 'r3', question: '14. When will I receive my refund?', answer: 'Refunds are processed after the returned item is received and inspected. Processing times may vary depending on the payment method.' }
    ],
    account: [
      { id: 'a1', question: '15. Do I need an account to place an order?', answer: 'No, you can checkout as a guest. Creating an account allows you to view order history and save basic information for future purchases.' },
      { id: 'a2', question: '16. How is my personal information protected?', answer: 'We use industry-standard security practices to help protect your information. Details are available in our Privacy Policy.' }
    ],
    ownership: [
      { id: 'w1', question: '17. Is Ink Kart LLC affiliated with any printer brands?', answer: 'No. Ink Kart LLC is an independent online retailer. All trademarks, logos, and product names belong to their respective owners and are used for identification purposes only.' },
      { id: 'w2', question: '18. Do products come with a manufacturer warranty?', answer: 'Eligible products include standard manufacturer warranties as provided by the respective brands. Warranty terms vary by brand and product.' }
    ],
    support: [
      { id: 'u1', question: '19. What assistance do you provide?', answer: 'We assist customers with: Product-related inquiries, Order status questions, Returns and refund guidance, General shopping support.' },
      { id: 'u2', question: '20. How can I contact customer support?', answer: 'You may reach us via email or live chat during available business hours. Visit our Contact Us page for details.' }
    ]
  };

  const allFaqs = Object.values(faqData).flat();

  const handleSearchChange = (value) => {
    setSearchQuery(value);
    if (value.trim() !== '') {
      setActiveTab('all');
    } else {
      setActiveTab('products');
    }
  };

  const toggleItem = (id) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredFaqs = searchQuery.trim() !== ''
    ? allFaqs.filter(item =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : (faqData[activeTab] || []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <main className="flex-grow">
          {/* FAQ Hero Section (Black & Gold) */}
          <div className="bg-[#111111] py-32 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
            <div className="container mx-auto px-4 z-10 relative">
                <FAQHero />
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 py-24">
            <div className="mb-20">
                <FAQSearch searchQuery={searchQuery} setSearchQuery={handleSearchChange} />
            </div>
            
            <div className="mb-16 overflow-x-auto no-scrollbar">
                <FAQTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            <div className="max-w-4xl mx-auto">
                <FAQList faqs={filteredFaqs} openItems={openItems} toggleItem={toggleItem} />
            </div>
          </div>

          {/* Contact Support Section (Premium Callout) */}
          <div className="bg-[#111111] py -32 border-t-4 border-[#B19777]">
             <div className="container mx-auto px-4">
                <FAQContact />
             </div>
          </div>
      </main>

      <Footer />

      <style>{`
        .faq-hero {
            padding: 0 !important;
            margin-bottom: 0 !important;
        }
        .search-bar {
            margin-bottom: 0 !important;
        }
        .tabs-container {
            margin-bottom: 0 !important;
        }
        .faq-question {
            font-family: 'Montserrat' !important;
            font-weight: 900 !important;
            color: #111111 !important;
            text-transform: uppercase !important;
            letter-spacing: 0.15em !important;
            font-size: 13px !important;
        }
        .faq-item.open .faq-question {
            color: #B19777 !important;
        }
        .contact-section {
            margin-top: 0 !important;
            padding: 100px 0 !important;
            background: transparent !important;
        }
        .contact-section h2 {
            color: #ffffff !important;
            font-family: 'Montserrat' !important;
            font-weight: 900 !important;
            font-size: 32px !important;
            letter-spacing: 0.25em !important;
        }
        .contact-item {
            background: #1a1a1a !important;
            border-color: #333 !important;
            color: #fff !important;
        }
        .contact-item span {
            color: #999 !important;
            text-transform: uppercase !important;
            letter-spacing: 0.15em !important;
            font-size: 11px !important;
            font-weight: 700 !important;
        }
      `}</style>
    </div>
  );
};

export default FAQs;
