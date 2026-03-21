import { Link } from 'react-router-dom';
import i1 from '../../assets/i1.jpg';
import i2 from '../../assets/i2.jpg';
import i3 from '../../assets/i3.jpg';

const ShopByCategory = () => {
  const categories = [
    { number: "01", image: i1, title: "Printers", link: "/printers", desc: "Enterprise multifactor systems." },
    { number: "02", image: i3, title: "Ink Systems", link: "/ink-toner", desc: "Precision liquid delivery." },
    { number: "03", image: i2, title: "Toner Tech", link: "/ink-toner", desc: "High-yield powder solutions." }
  ];

  return (
    <section className="shop-by-category-elite">
      <div className="cat-header-wrap reveal">
        <span className="cat-badge">Inventory Spectrum</span>
        <h2 className="cat-title">Elite <span className="text-[#B19777]">Classifications.</span></h2>
      </div>

      <div className="cat-grid-elite">
        {categories.map((cat, index) => (
          <Link to={cat.link} key={index} className="cat-card-elite group reveal-zoom">
            <div className="cat-visual">
               <img src={cat.image} alt={cat.title} />
               <div className="cat-overlay"></div>
               <span className="cat-number">{cat.number}</span>
            </div>
            <div className="cat-info-elite">
               <h3 className="cat-card-title">{cat.title}</h3>
               <p className="cat-card-desc">{cat.desc}</p>
               <span className="cat-explore-trigger">Explore Collection</span>
            </div>
          </Link>
        ))}
      </div>

      <style>{`
        .shop-by-category-elite { padding: 180px 40px; background: #ffffff; max-width: 1600px; margin: 0 auto; }
        .cat-header-wrap { text-align: center; margin-bottom: 80px; }
        .cat-badge { font-family: 'Montserrat'; font-weight: 900; font-size: 10px; letter-spacing: 5px; text-transform: uppercase; color: #777; margin-bottom: 20px; display: block; }
        .cat-title { font-family: 'Montserrat'; font-weight: 950; font-size: 42px; text-transform: uppercase; letter-spacing: -1px; color: #111111; line-height: 1.2; }
        
        .cat-grid-elite { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; background: #eee; border: 1px solid #eee; }
        .cat-card-elite { background: #fff; text-decoration: none; position: relative; overflow: hidden; height: 100%; display: flex; flex-direction: column; transition: all 0.5s; }
        .cat-card-elite:hover { background: #111111; z-index: 2; transform: scale(1.02); box-shadow: 0 40px 100px rgba(0,0,0,0.2); }
        
        .cat-visual { position: relative; width: 100%; height: 500px; overflow: hidden; background: #fbfbfb; display: flex; align-items: center; justify-content: center; padding: 40px; }
        .cat-visual img { width: 100%; height: 100%; object-fit: contain; filter: grayscale(1); opacity: 0.8; transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .cat-card-elite:hover .cat-visual img { transform: scale(1.1); filter: grayscale(0); opacity: 1; }
        
        .cat-overlay { position: absolute; inset: 0; background: #111; opacity: 0; transition: 0.5s; pointer-events: none; }
        .cat-card-elite:hover .cat-overlay { opacity: 0.05; }
        
        .cat-number { position: absolute; top: 30px; left: 30px; font-family: 'Montserrat'; font-weight: 950; font-size: 14px; color: #eee; text-transform: uppercase; transition: color 0.5s; }
        .cat-card-elite:hover .cat-number { color: #B19777; }
        
        .cat-info-elite { padding: 50px 40px; transition: all 0.5s; }
        .cat-card-title { font-family: 'Montserrat'; font-weight: 900; font-size: 24px; text-transform: uppercase; letter-spacing: 2px; color: #111; margin-bottom: 10px; transition: color 0.5s; }
        .cat-card-desc { font-family: 'Poppins'; font-size: 12px; color: #777; margin-bottom: 30px; transition: color 0.5s; }
        .cat-explore-trigger { font-family: 'Montserrat'; font-weight: 900; font-size: 10px; text-transform: uppercase; letter-spacing: 3px; color: #B19777; border-bottom: 1px solid #B19777; padding-bottom: 5px; opacity: 0; transform: translateY(10px); transition: all 0.5s; }
        
        .cat-card-elite:hover .cat-card-title { color: #fff; }
        .cat-card-elite:hover .cat-card-desc { color: #999; }
        .cat-card-elite:hover .cat-explore-trigger { opacity: 1; transform: translateY(0); }

        @media (max-width: 1200px) {
          .cat-grid-elite { grid-template-columns: 1fr; }
          .cat-visual { height: 400px; }
          .cat-title { font-size: 42px; }
        }
      `}</style>
    </section>
  );
};

export default ShopByCategory;
