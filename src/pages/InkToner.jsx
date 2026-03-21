import { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../redux/actions/productActions';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import ProductCard from '../components/products/ProductCard';

const InkToner = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const productList = useSelector((state) => state.productList);
    const { loading, error, products, page: reduxPage, pages: totalPages } = productList;

    const [sortBy, setSortBy] = useState('featured');
    const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
    const [allProducts, setAllProducts] = useState([]);
    const [currPage, setCurrPage] = useState(1);

    // Guaranteed visibility: Pull everything and then manual filter
    useEffect(() => {
        setAllProducts([]);
        setCurrPage(1);
        dispatch(listProducts(searchQuery, '', 1));
    }, [dispatch, searchQuery]);

    useEffect(() => {
        if (products && Array.isArray(products) && !loading) {
            if (reduxPage === 1) {
                setAllProducts(products);
            } else {
                setAllProducts(prev => {
                    const existingIds = new Set(prev.map(p => p._id));
                    const uniqueNew = products.filter(p => !existingIds.has(p._id));
                    return [...prev, ...uniqueNew];
                });
            }
        }
    }, [products, reduxPage, loading]);

    const handleLoadMore = () => {
        if (currPage < totalPages && !loading) {
            const nextPage = currPage + 1;
            setCurrPage(nextPage);
            dispatch(listProducts(searchQuery, '', nextPage));
        }
    };

    const filteredAndSorted = useMemo(() => {
        // Find anything that refers to Ink or Toner in category OR title
        let filtered = allProducts.filter(p => {
            const catName = p.category?.name || p.category || '';
            const titleMatch = (p.title || p.name || '').toLowerCase().match(/ink|toner|cartridge|supply/i);
            const catMatch = catName.toLowerCase().match(/ink|toner/i);
            
            // Specifically exclude Printers if possible to distinguish
            const isPrinter = catName.toLowerCase().includes('printer') && !catName.toLowerCase().includes('ink');
            
            return (titleMatch || catMatch) && !isPrinter;
        });

        let sorted = [...filtered];
        switch (sortBy) {
            case 'price-low': sorted.sort((a, b) => a.price - b.price); break;
            case 'price-high': sorted.sort((a, b) => b.price - a.price); break;
            default: break;
        }
        return sorted;
    }, [allProducts, sortBy]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('revealed');
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal, .reveal-zoom').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, [filteredAndSorted]);

    return (
        <div className="category-view-elite">
            <Navbar />
            
            <header className="cat-hero-dark reveal">
                <div className="cat-hero-container">
                    <span className="cat-pretitle">Consumable Excellence</span>
                    <h1 className="cat-main-title">Ink <span className="text-[#B19777]">& Toner</span> Systems.</h1>
                    <p className="cat-meta-desc">
                        Genuine-quality liquid and powder delivery systems. Precision engineered 
                        for high-fidelity output and long-term hardware reliability.
                    </p>
                </div>
                <div className="cat-hero-bg-accent"></div>
            </header>

            <main className="cat-content-wrap">
                <div className="cat-utility-bar reveal">
                    <div className="utility-left">
                        <span className="results-indicator">AVAILABLE ASSETS: {filteredAndSorted.length}</span>
                    </div>
                    
                    <div className="utility-right">
                        <div className="search-box-minimal">
                            <input 
                                type="text" 
                                placeholder="Search supplies..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <select className="sort-select-luxury" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                            <option value="featured">Recommended</option>
                            <option value="price-low">Price: Ascending</option>
                            <option value="price-high">Price: Descending</option>
                        </select>
                    </div>
                </div>

                <div className="cat-product-grid-refined">
                    {filteredAndSorted.length > 0 ? (
                        filteredAndSorted.map(product => (
                            <ProductCard key={product._id} product={product} />
                        ))
                    ) : (
                        !loading && (
                            <div className="col-span-full py-40 text-center">
                                <p className="font-['Montserrat'] font-black text-xs tracking-widest text-[#B19777]">SYNCHRONIZING REPOSITORY...</p>
                            </div>
                        )
                    )}
                </div>

                {loading && (
                    <div className="cat-loading-status">
                         <div className="luxury-spinner"></div>
                         <span>Querying Enterprise Inventory...</span>
                    </div>
                )}

                {!loading && currPage < totalPages && (
                    <div className="load-more-center">
                        <button onClick={handleLoadMore} className="boutique-load-btn">
                            Load Additional Inventory
                        </button>
                    </div>
                )}
            </main>

            <Footer />

            <style>{`
                .category-view-elite { background: #ffffff; min-height: 100vh; }
                .cat-hero-dark { padding: 160px 40px 100px; background: #111111; color: #fff; position: relative; overflow: hidden; margin-bottom: 60px; }
                .cat-hero-container { max-width: 1400px; margin: 0 auto; position: relative; z-index: 2; }
                .cat-pretitle { font-family: 'Montserrat'; font-weight: 900; font-size: 10px; letter-spacing: 5px; color: #B19777; text-transform: uppercase; margin-bottom: 20px; display: block; }
                .cat-main-title { font-family: 'Montserrat'; font-weight: 950; font-size: 52px; text-transform: uppercase; letter-spacing: -2px; line-height: 1.1; margin-bottom: 40px; }
                .cat-meta-desc { font-family: Poppins; font-size: 14px; color: #888; max-width: 600px; line-height: 2; letter-spacing: 0.5px; }
                .cat-hero-bg-accent { position: absolute; top: -50%; right: -10%; width: 60%; height: 200%; background: linear-gradient(45deg, rgba(177, 151, 119, 0.05), transparent); transform: rotate(15deg); }
                .cat-content-wrap { max-width: 1400px; margin: 0 auto; padding: 0 40px 120px; }
                .cat-utility-bar { display: flex; justify-content: space-between; align-items: center; padding: 30px 0; border-bottom: 1px solid #f0f0f0; margin-bottom: 60px; }
                .results-indicator { font-family: 'Montserrat'; font-weight: 900; font-size: 9px; letter-spacing: 3px; color: #bbb; }
                .utility-right { display: flex; gap: 30px; align-items: center; }
                .search-box-minimal input { background: #fbfbfb; border: 1px solid #f0f0f0; padding: 12px 25px; font-family: Poppins; font-size: 12px; outline: none; width: 280px; }
                .sort-select-luxury { background: none; border: none; font-family: 'Montserrat'; font-weight: 900; font-size: 10px; text-transform: uppercase; letter-spacing: 2px; cursor: pointer; color: #111; }
                .cat-product-grid-refined { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; background: #f0f0f0; border: 1px solid #f0f0f0; }
                .cat-product-grid-refined > div { margin: 0 !important; border: none !important; border-bottom: 1px solid #f0f0f0 !important; border-right: 1px solid #f0f0f0 !important; }
                .cat-loading-status { text-align: center; padding: 60px; display: flex; flex-direction: column; align-items: center; gap: 20px; }
                .luxury-spinner { width: 30px; height: 30px; border: 2px solid #eee; border-top-color: #B19777; border-radius: 50%; animation: spin 1s infinite linear; }
                .load-more-center { display: flex; justify-content: center; margin-top: 80px; }
                .boutique-load-btn { background: #111; color: #fff; padding: 20px 40px; border: none; font-family: 'Montserrat'; font-weight: 900; font-size: 11px; text-transform: uppercase; letter-spacing: 3px; cursor: pointer; transition: all 0.4s; }
                .boutique-load-btn:hover { background: #B19777; transform: translateY(-5px); }
                @keyframes spin { from {transform: rotate(0deg);} to {transform: rotate(360deg);} }
                @media (max-width: 1200px) { .cat-product-grid-refined { grid-template-columns: repeat(3, 1fr); } }
                @media (max-width: 900px) { .cat-product-grid-refined { grid-template-columns: repeat(2, 1fr); } .cat-main-title { font-size: 34px; } }
                @media (max-width: 600px) { .cat-product-grid-refined { grid-template-columns: 1fr; } }
            `}</style>
        </div>
    );
};

export default InkToner;
