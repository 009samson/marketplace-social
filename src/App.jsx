import { useMemo, useState } from 'react';

const categories = ['All', 'Beauty', 'Tech', 'Fashion', 'Home', 'Wellness', 'Lifestyle'];

const products = [
  {
    id: 1,
    name: 'NovaGlow Serum',
    category: 'Beauty',
    price: 59,
    rating: 4.9,
    reviews: 1842,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
    seller: 'GlowCart',
    tag: 'Best Seller',
    description: 'Hydrating serum powered by peptides and hyaluronic acid to brighten skin in 14 days.',
  },
  {
    id: 2,
    name: 'Echo Mini Speaker',
    category: 'Tech',
    price: 89,
    rating: 4.8,
    reviews: 1208,
    image: 'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=900&q=80',
    seller: 'ByteNest',
    tag: 'Trending',
    description: 'Compact smart speaker with room-filling sound, voice assistant and multi-room sync.',
  },
  {
    id: 3,
    name: 'Astra Hoodie',
    category: 'Fashion',
    price: 72,
    rating: 4.7,
    reviews: 962,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    seller: 'StreetLoop',
    tag: 'Limited Drop',
    description: 'Soft premium cotton hoodie designed for everyday comfort and street-style versatility.',
  },
  {
    id: 4,
    name: 'Haven Smart Lamp',
    category: 'Home',
    price: 49,
    rating: 4.9,
    reviews: 1459,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    seller: 'Nestora',
    tag: 'Eco Pick',
    description: 'Adaptive lighting for your desk or bedroom with app control and color temperature modes.',
  },
  {
    id: 5,
    name: 'ZenBlend Protein Kit',
    category: 'Wellness',
    price: 42,
    rating: 4.8,
    reviews: 524,
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80',
    seller: 'VitaBloom',
    tag: 'New',
    description: 'A balanced nutrition kit with protein blends and low-sugar ingredients for busy lifestyles.',
  },
  {
    id: 6,
    name: 'Summit Travel Set',
    category: 'Lifestyle',
    price: 96,
    rating: 4.7,
    reviews: 744,
    image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=900&q=80',
    seller: 'NomadLoop',
    tag: 'Travel Favorite',
    description: 'Premium travel organizer set with compact storage for clothing, toiletries and accessories.',
  },
];

const reels = [
  {
    id: 1,
    author: 'Maya L.',
    handle: '@mayalooks',
    title: '3-minute glow routine',
    views: '2.1M',
    likes: '184K',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    accent: '#ff6fa8',
  },
  {
    id: 2,
    author: 'Theo K.',
    handle: '@bytebro',
    title: 'Desk setup tour',
    views: '890K',
    likes: '47K',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
    accent: '#5ec5ff',
  },
  {
    id: 3,
    author: 'Ari S.',
    handle: '@ariathome',
    title: 'Modern room refresh',
    views: '1.4M',
    likes: '83K',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
    accent: '#74d4a8',
  },
  {
    id: 4,
    author: 'Nina C.',
    handle: '@ninastyle',
    title: 'Outfit drop styling',
    views: '750K',
    likes: '62K',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
    accent: '#ffc857',
  },
];

const sellerCards = [
  { name: 'GlowCart', followers: '1.4M', category: 'Beauty', accent: '#ff5d8f' },
  { name: 'ByteNest', followers: '880K', category: 'Tech', accent: '#4dc0ff' },
  { name: 'StreetLoop', followers: '2.1M', category: 'Fashion', accent: '#9b7bff' },
  { name: 'Nestora', followers: '650K', category: 'Home', accent: '#31d0aa' },
];

const trendingTopics = ['#SummerDrop', '#GlowRoutine', '#CreatorMarket', '#HomeReset', '#TechFinds'];
const tabs = ['For You', 'Marketplace', 'Creators', 'Live'];

function App() {
  const [activeTab, setActiveTab] = useState('For You');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartCount, setCartCount] = useState(1);
  const [followed, setFollowed] = useState(['GlowCart', 'StreetLoop']);
  const [liked, setLiked] = useState([1, 3]);
  const [query, setQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, query]);

  const toggleLike = (id) => {
    setLiked((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  };

  const toggleFollow = (seller) => {
    setFollowed((current) =>
      current.includes(seller) ? current.filter((item) => item !== seller) : [...current, seller]
    );
  };

  const addToCart = () => {
    setCartCount((count) => count + 1);
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">S</div>
          <div>
            <div className="brand-name">SociMarket</div>
            <div className="brand-tag">Social commerce</div>
          </div>
        </div>

        <nav className="tab-nav" aria-label="primary navigation">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={tab === activeTab ? 'tab active' : 'tab'}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>

        <div className="topbar-actions">
          <button className="icon-button">⌕</button>
          <button className="icon-button">♥</button>
          <div className="cart-pill">
            <span>Cart</span>
            <strong>{cartCount}</strong>
          </div>
        </div>
      </header>

      <main className="page-content">
        <section className="hero-section">
          <div className="hero-copy">
            <span className="eyebrow">Creator commerce</span>
            <h1>Shop what’s trending, and discover it socially.</h1>
            <p>
              A marketplace built for brands, creators and shoppers — blending product discovery,
              short-form content, live commerce, and community trust into one experience.
            </p>
            <div className="cta-row">
              <button className="primary-btn">Start shopping</button>
              <button className="secondary-btn">Become a seller</button>
            </div>
            <div className="stats-row">
              <div>
                <strong>28M+</strong>
                <span>Monthly shoppers</span>
              </div>
              <div>
                <strong>94%</strong>
                <span>Repeat purchase rate</span>
              </div>
              <div>
                <strong>12K</strong>
                <span>Live sellers</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="feature-card large-card">
              <div className="mini-head">
                <span className="live-dot" />
                Live commerce
              </div>
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
                alt="Live commerce host"
              />
              <div className="overlay-panel">
                <div>
                  <span className="label">Featured drop</span>
                  <strong>Summer Glow Kit</strong>
                </div>
                <button className="small-btn">Watch live</button>
              </div>
            </div>
          </div>
        </section>

        <section className="trending-strip">
          {trendingTopics.map((topic) => (
            <span key={topic} className="trend-tag">
              {topic}
            </span>
          ))}
        </section>

        <section className="content-grid">
          <div className="main-column">
            <div className="section-header">
              <div>
                <span className="eyebrow">Marketplace</span>
                <h2>Trending products</h2>
              </div>
              <div className="search-box">
                <span>⌕</span>
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search products"
                />
              </div>
            </div>

            <div className="category-row">
              {categories.map((category) => (
                <button
                  key={category}
                  className={selectedCategory === category ? 'category-btn active' : 'category-btn'}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="product-grid">
              {filteredProducts.map((product) => (
                <article key={product.id} className="product-card">
                  <div className="product-image-wrap">
                    <img src={product.image} alt={product.name} />
                    <span className="badge">{product.tag}</span>
                    <button
                      className={liked.includes(product.id) ? 'love-btn liked' : 'love-btn'}
                      onClick={() => toggleLike(product.id)}
                    >
                      {liked.includes(product.id) ? '♥' : '♡'}
                    </button>
                  </div>
                  <div className="product-info">
                    <div className="product-header">
                      <span className="seller-name">{product.seller}</span>
                      <span className="stars">★ {product.rating}</span>
                    </div>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <div className="meta-row">
                      <strong>${product.price}</strong>
                      <span>{product.reviews.toLocaleString()} reviews</span>
                    </div>
                    <div className="action-row">
                      <button className="primary-btn small" onClick={() => setSelectedProduct(product)}>
                        View details
                      </button>
                      <button className="secondary-btn small" onClick={addToCart}>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="sidebar">
            <div className="mini-panel summary-panel">
              <div className="panel-header">
                <span className="eyebrow">Your cart</span>
                <span className="pill">{cartCount} items</span>
              </div>
              <div className="summary-line">
                <span>NovaGlow Serum</span>
                <strong>$59</strong>
              </div>
              <div className="summary-line">
                <span>Delivery</span>
                <strong>Free</strong>
              </div>
              <div className="summary-total">
                <span>Total</span>
                <strong>$59</strong>
              </div>
              <button className="primary-btn full">Checkout</button>
            </div>

            <div className="mini-panel">
              <div className="panel-header">
                <span className="eyebrow">Top creators</span>
              </div>
              <div className="seller-stack">
                {sellerCards.map((seller) => (
                  <div key={seller.name} className="seller-item">
                    <div className="avatar" style={{ background: seller.accent }}>{seller.name[0]}</div>
                    <div className="seller-copy">
                      <strong>{seller.name}</strong>
                      <span>{seller.category}</span>
                    </div>
                    <button
                      className={followed.includes(seller.name) ? 'follow-btn active' : 'follow-btn'}
                      onClick={() => toggleFollow(seller.name)}
                    >
                      {followed.includes(seller.name) ? 'Following' : 'Follow'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="mini-panel">
              <div className="panel-header">
                <span className="eyebrow">Trending hashtags</span>
              </div>
              <div className="tag-cloud">
                {trendingTopics.map((tag) => (
                  <span key={tag} className="cloud-tag">{tag}</span>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section className="social-section">
          <div className="section-header">
            <div>
              <span className="eyebrow">Social feed</span>
              <h2>Watch and shop</h2>
            </div>
          </div>

          <div className="reels-grid">
            {reels.map((reel) => (
              <article key={reel.id} className="reel-card" style={{ '--reel-accent': reel.accent }}>
                <img src={reel.image} alt={reel.title} />
                <div className="reel-overlay">
                  <div className="reel-owner">
                    <span className="mini-avatar">{reel.author[0]}</span>
                    <div>
                      <strong>{reel.author}</strong>
                      <span>{reel.handle}</span>
                    </div>
                  </div>
                  <h3>{reel.title}</h3>
                  <div className="reel-metrics">
                    <span>👁 {reel.views}</span>
                    <span>♥ {reel.likes}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <div className="modal-backdrop" style={{ display: selectedProduct ? 'flex' : 'none' }}>
        <div className="product-modal">
          <button className="close-btn" onClick={() => setSelectedProduct(null)}>
            ×
          </button>
          {selectedProduct && (
            <>
              <img src={selectedProduct.image} alt={selectedProduct.name} />
              <div className="modal-copy">
                <span className="eyebrow">{selectedProduct.category}</span>
                <h3>{selectedProduct.name}</h3>
                <div className="modal-meta">
                  <span>★ {selectedProduct.rating}</span>
                  <span>{selectedProduct.reviews.toLocaleString()} reviews</span>
                </div>
                <p>{selectedProduct.description}</p>
                <div className="modal-price-row">
                  <strong>${selectedProduct.price}</strong>
                  <span>Free shipping</span>
                </div>
                <div className="modal-actions">
                  <button className="primary-btn" onClick={addToCart}>Add to cart</button>
                  <button className="secondary-btn">Save for later</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
