
const SERVICES_DB = {
  1: {
    id: 1,
    slug: 'lavender-glow-facial',
    title: 'Lavender Glow Facial',
    badge: 'Facial Ritual',
    category: 'Facial',
    tag: 'Facial',
    rating: 4.9,
    reviews: 142,
    image: 'assets/lavender-glow-facial.jpg',
    storyImg1: 'assets/science-plant-actives.jpg',
    storyImg2: 'assets/spa-facial-treatment.jpg',
    price: '$89',
    tagline: '"An artisanal journey your skin has been waiting for — pure, natural, transformative."',
    shortDesc: 'A calming, antioxidant-rich facial ritual using French lavender extract, hyaluronic-infused plant extracts, and cold-pressed herbal oils — leaving skin radiant and deeply nourished.',
    benefitsIntro: 'Discover the deep calming power of lavender — naturally soothing your skin while delivering intense hydration and antioxidant protection.',
    benefits: [
      { icon: 'droplets', title: 'Deep Hydration', desc: 'Hyaluronic-infused lavender complex locks in moisture up to 72 hours, visibly plumping and softening skin texture.' },
      { icon: 'shield', title: 'Antioxidant Protection', desc: 'Rich in natural antioxidants that combat free radicals and environmental damage, slowing visible signs of ageing.' },
      { icon: 'sun', title: 'Natural Radiance Boost', desc: 'Cold-pressed herbal oils illuminate skin from within, restoring healthy glow without artificial brighteners.' },
      { icon: 'wind', title: 'Calming & De-Stressing', desc: 'French lavender essential oils activate the parasympathetic system, visibly reducing redness and skin stress response.' },
      { icon: 'heart', title: 'Gentle & Nourishing', desc: 'Dermatologically tested formula safe for the most sensitive skin types — zero parabens, zero sulfates, 100% plant-active.' },
      { icon: 'leaf', title: 'Pore Refinement', desc: 'Natural astringent properties of lavender tighten pores and regulate sebum production for a refined, matte finish.' },
    ],
    pricing: { essential: '$89', signature: '$145', luxury: '$220' },
    skinTypes: [
      { icon: 'leaf', name: 'Sensitive Skin', desc: 'Gentle lavender formula is ideal for reactive, easily irritated skin — reduces redness and discomfort.', match: 'high', recommended: true },
      { icon: 'droplets', name: 'Dry Skin', desc: 'Deep herbal hydration restores moisture balance and strengthens the lipid barrier for lasting softness.', match: 'high', recommended: true },
      { icon: 'sparkles', name: 'Normal Skin', desc: 'Maintains skin\'s perfect balance while adding a luxurious radiance boost and protective antioxidant layer.', match: 'medium', recommended: false },
      { icon: 'flower2', name: 'Combination Skin', desc: 'Regulates oily T-zone while nourishing dry areas, creating harmonious skin balance across all zones.', match: 'medium', recommended: false },
    ],
    related: [2, 5, 7],
  },
  2: {
    id: 2,
    slug: 'rosehip-oil-elixir',
    title: 'Rosehip Oil Elixir',
    badge: 'Herbal Oil',
    category: 'Oil',
    tag: 'Herbal Oil',
    rating: 4.8,
    reviews: 98,
    image: 'assets/rosehip-elixir.jpg',
    storyImg1: 'assets/science-plant-actives.jpg',
    storyImg2: 'assets/lavender-hydrosol-mist.jpg',
    price: '$64',
    tagline: '"Nature\'s finest vitamin C elixir — brightening, healing, and renewing from within."',
    shortDesc: 'Pure cold-pressed rosehip seed oil blended with vitamin C-rich plant extracts to brighten complexion, fade dark spots, and restore youthful skin elasticity naturally.',
    benefitsIntro: 'Harness the power of rosehip — one of nature\'s richest sources of vitamin C and essential fatty acids for a radiant, youthful complexion.',
    benefits: [
      { icon: 'sun', title: 'Complexion Brightening', desc: 'High natural vitamin C content visibly brightens skin tone and reduces dullness, revealing a luminous complexion.' },
      { icon: 'eraser', title: 'Dark Spot Reduction', desc: 'Beta-carotene and lycopene work together to fade hyperpigmentation and even skin tone over time.' },
      { icon: 'refresh-cw', title: 'Skin Renewal', desc: 'Rich in retinoic acid precursors that naturally stimulate cell turnover and collagen synthesis without irritation.' },
      { icon: 'droplets', title: 'Deep Nourishment', desc: 'Omega-3 and omega-6 fatty acids deeply nourish and strengthen the skin barrier for lasting suppleness.' },
      { icon: 'shield', title: 'Anti-Ageing', desc: 'Clinically proven antioxidants combat collagen breakdown and reduce the appearance of fine lines and wrinkles.' },
      { icon: 'sparkles', title: 'Natural Glow', desc: 'Lightweight golden oil absorbs instantly, leaving skin with a natural, healthy sheen — never greasy.' },
    ],
    pricing: { essential: '$64', signature: '$120', luxury: '$190' },
    skinTypes: [
      { icon: 'sparkles', name: 'Dull Skin', desc: 'Vitamin C-rich formula transforms lifeless, dull complexion into vibrant, glowing skin within weeks.', match: 'high', recommended: true },
      { icon: 'moon', name: 'Mature Skin', desc: 'Anti-ageing actives reduce fine lines, improve elasticity, and restore youthful luminosity naturally.', match: 'high', recommended: true },
      { icon: 'flower2', name: 'Combination Skin', desc: 'Lightweight non-comedogenic formula balances combination skin without clogging pores.', match: 'medium', recommended: false },
      { icon: 'droplets', name: 'Dry Skin', desc: 'Fatty acid-rich formula melts into dry skin providing deep nourishment and barrier restoration.', match: 'medium', recommended: false },
    ],
    related: [1, 7, 5],
  },
  3: {
    id: 3,
    slug: 'shea-body-butter-ritual',
    title: 'Shea Body Butter Ritual',
    badge: 'Body Treatment',
    category: 'Body',
    tag: 'Body Treatment',
    rating: 4.9,
    reviews: 211,
    image: 'assets/shea-body-butter.jpg',
    storyImg1: 'assets/science-plant-actives.jpg',
    storyImg2: 'assets/skin-shea-face.jpg',
    price: '$52',
    tagline: '"Luxuriously wrap your body in the richness of pure shea butter — pure indulgence, pure skin."',
    shortDesc: 'Luxuriously whipped shea butter infused with vanilla, cocoa, and healing herbal extracts. Melts into skin leaving an impossibly soft, deeply moisturized feel for 24 hours.',
    benefitsIntro: 'Our shea body butter ritual transforms dry, rough body skin into silky soft, deeply nourished perfection — with results that last all day.',
    benefits: [
      { icon: 'droplets', title: '24-Hour Moisture Lock', desc: 'Triple-whipped shea butter forms a protective moisture barrier that keeps skin hydrated for a full 24 hours.' },
      { icon: 'heart', title: 'Ultra-Soft Skin Texture', desc: 'Cocoa butter and vanilla extracts transform rough, dry skin into baby-soft smoothness in just one application.' },
      { icon: 'shield', title: 'Barrier Repair', desc: 'High concentration of fatty acids and vitamins A, E, and F repair and strengthen the skin\'s natural moisture barrier.' },
      { icon: 'leaf', title: '100% Vegan Formula', desc: 'Entirely plant-based formula with no animal derivatives — ethical beauty that is as kind to the earth as it is to your skin.' },
      { icon: 'sun', title: 'Natural Vitamin E', desc: 'Potent natural vitamin E helps protect skin from environmental damage and maintains youthful skin suppleness.' },
      { icon: 'sparkles', title: 'Irresistible Scent', desc: 'Warm vanilla and cocoa herbal notes create an intoxicating, mood-lifting sensory experience.' },
    ],
    pricing: { essential: '$52', signature: '$98', luxury: '$165' },
    skinTypes: [
      { icon: 'sun', name: 'Very Dry Skin', desc: 'Intense shea concentration provides the deep, lasting hydration that very dry skin desperately needs.', match: 'high', recommended: true },
      { icon: 'droplets', name: 'Dry Skin', desc: 'Whipped formula melts into dry skin and restores natural softness and suppleness all day long.', match: 'high', recommended: true },
      { icon: 'sparkles', name: 'Normal Skin', desc: 'Maintains skin\'s natural moisture balance while adding a luxurious silky softness.', match: 'medium', recommended: false },
      { icon: 'leaf', name: 'Sensitive Skin', desc: 'Fragrance-free option available for sensitive skin with the same nourishing plant benefits.', match: 'medium', recommended: false },
    ],
    related: [8, 4, 1],
  },
  4: {
    id: 4,
    slug: 'lavender-oat-soap-bar',
    title: 'Lavender & Oat Soap Bar',
    badge: 'Handmade Soap',
    category: 'Soap',
    tag: 'Handmade Soap',
    rating: 5.0,
    reviews: 327,
    image: 'assets/soap-lavender-oat.jpg',
    storyImg1: 'assets/science-plant-actives.jpg',
    storyImg2: 'assets/skin-rosehip-face.jpg',
    price: '$14',
    tagline: '"Six weeks of love poured into every bar — handcrafted soap as nature intended it."',
    shortDesc: 'Cold-cured for 6 weeks with French lavender flowers, colloidal oats, and organic olive oil. Gentle for sensitive skin with a creamy, skin-nourishing lather.',
    benefitsIntro: 'The most loved soap in our collection — handcrafted using ancient cold-process methods that preserve every active plant benefit for your skin.',
    benefits: [
      { icon: 'leaf', title: 'Cold-Process Crafted', desc: 'Six-week cold-cure process preserves the full potency of herbal oils and extracts — never heat-stripped.' },
      { icon: 'heart', title: 'Sensitive Skin Safe', desc: 'Colloidal oat milk and lavender create the gentlest, most nourishing cleanse — zero irritation guaranteed.' },
      { icon: 'droplets', title: 'Creamy Rich Lather', desc: 'High olive oil content creates a luxuriously creamy, conditioning lather that leaves skin soft, never stripped.' },
      { icon: 'shield', title: 'Natural Preservative-Free', desc: 'No synthetic preservatives, colors or fragrances — just pure organic ingredients you can trust on your skin.' },
      { icon: 'sun', title: 'Organic Lavender', desc: 'Real French lavender flowers visible in every bar — providing genuine aromatherapy benefits in every wash.' },
      { icon: 'sparkles', title: 'Zero Waste Packaging', desc: 'Wrapped in compostable paper — our soap bars generate zero plastic waste for a greener cleansing ritual.' },
    ],
    pricing: { essential: '$14', signature: '$38', luxury: '$72' },
    skinTypes: [
      { icon: 'leaf', name: 'Sensitive Skin', desc: 'The gentlest soap formula you\'ll find — colloidal oats calm and protect even the most reactive skin.', match: 'high', recommended: true },
      { icon: 'droplets', name: 'Dry Skin', desc: 'Olive oil and glycerin prevent moisture loss, leaving even the driest skin soft and comfortable after every wash.', match: 'high', recommended: true },
      { icon: 'sparkles', name: 'Normal Skin', desc: 'A perfect everyday cleanser that maintains skin\'s natural balance and pH without over-stripping.', match: 'high', recommended: false },
      { icon: 'flower2', name: 'Combination Skin', desc: 'Gentle enough for sensitive areas while effectively cleansing oilier zones — ideal for combination skin.', match: 'medium', recommended: false },
    ],
    related: [6, 1, 3],
  },
  5: {
    id: 5,
    slug: 'forest-mist-hydrosol-toner',
    title: 'Forest Mist Hydrosol Toner',
    badge: 'Facial Ritual',
    category: 'Facial',
    tag: 'Facial Ritual',
    rating: 4.7,
    reviews: 189,
    image: 'assets/lavender-hydrosol-mist.jpg',
    storyImg1: 'assets/science-plant-actives.jpg',
    storyImg2: 'assets/skin-rosehip-face.jpg',
    price: '$38',
    tagline: '"Step into the forest every morning — a sensory ritual that resets and refreshes your skin."',
    shortDesc: 'A refreshing face mist infused with wild pine hydrosol, witch hazel, and alpine spring water. Balances skin pH, tightens pores, and provides an instant dewy refresh throughout the day.',
    benefitsIntro: 'Capture the essence of a misty forest morning in a single spritz — herbal-packed alpine water that refreshes, balances, and protects your skin all day.',
    benefits: [
      { icon: 'wind', title: 'Instant Refresh', desc: 'Alpine spring water and pine hydrosols provide an immediate burst of freshness — perfect for any time of day.' },
      { icon: 'circle-dot', title: 'Pore Tightening', desc: 'Witch hazel extract visibly minimizes pores and controls excess sebum without drying or irritating skin.' },
      { icon: 'activity', title: 'pH Balance Restoration', desc: 'Precisely calibrated herbal formula restores skin\'s optimal pH level after cleansing for maximum product absorption.' },
      { icon: 'droplets', title: 'Instant Hydration', desc: 'Micro-fine mist delivers instant hydration that locks in moisture and creates a dewy, fresh appearance.' },
      { icon: 'shield', title: 'Antioxidant Defense', desc: 'Alpine pine extracts are rich in natural antioxidants that protect skin from environmental pollutants.' },
      { icon: 'sparkles', title: 'Setting Spray', desc: 'Doubles as a makeup setting spray — locking in your look while keeping skin fresh and dewy throughout the day.' },
    ],
    pricing: { essential: '$38', signature: '$76', luxury: '$130' },
    skinTypes: [
      { icon: 'flower2', name: 'Combination Skin', desc: 'pH-balancing formula perfectly suits combination skin — controlling oil while hydrating dry zones simultaneously.', match: 'high', recommended: true },
      { icon: 'waves', name: 'Oily Skin', desc: 'Witch hazel controls excess oil production while plant extracts keep skin hydrated and comfortable.', match: 'high', recommended: true },
      { icon: 'sparkles', name: 'Normal Skin', desc: 'Maintains skin\'s perfect balance while adding a beautiful, dewy freshness throughout the day.', match: 'medium', recommended: false },
      { icon: 'leaf', name: 'Sensitive Skin', desc: 'Gentle alcohol-free formula is safe for sensitive skin — calming and refreshing without any irritation.', match: 'medium', recommended: false },
    ],
    related: [1, 2, 7],
  },
  6: {
    id: 6,
    slug: 'artisan-soap-craft-workshop',
    title: 'Artisan Soap Craft Workshop',
    badge: 'Workshop',
    category: 'Workshop',
    tag: 'Handcrafted Experience',
    rating: 4.9,
    reviews: 76,
    image: 'assets/soap-craft.jpg',
    storyImg1: 'assets/science-plant-actives.jpg',
    storyImg2: 'assets/body-butter.jpg',
    price: '$120',
    tagline: '"Learn the ancient art of soap making — create something beautiful with your own hands."',
    shortDesc: 'An immersive hands-on workshop teaching the ancient art of cold-process soap-making using organic herbs, essential oils, and natural colorants. Take home your creations.',
    benefitsIntro: 'More than a service — this is an experience. Learn centuries-old artisan soap-making craft and leave with beautiful, handmade creations and a new skill.',
    benefits: [
      { icon: 'hands', title: 'Hands-On Learning', desc: 'Guided by master soapmakers, you\'ll master the complete cold-process technique from raw ingredients to finished bar.' },
      { icon: 'flask-conical', title: 'Phyto Science', desc: 'Understand the chemistry of saponification and how different herbal oils create unique skin benefits in soap.' },
      { icon: 'gift', title: 'Take Home Creations', desc: 'Walk away with 4-6 handmade artisan soap bars you created yourself — ready to gift or treasure.' },
      { icon: 'users', title: 'Intimate Group Setting', desc: 'Maximum 8 participants per workshop ensures a personal, focused, and enjoyable learning experience.' },
      { icon: 'package', title: 'Complete Ingredient Kit', desc: 'All herbs, oils, molds, and packaging provided — plus a digital recipe guide to continue at home.' },
      { icon: 'leaf', title: 'Sustainability Focus', desc: 'Learn ethical sourcing, zero-waste techniques, and how to create eco-friendly soap packaging.' },
    ],
    pricing: { essential: '$120', signature: '$185', luxury: '$260' },
    skinTypes: [
      { icon: 'sparkles', name: 'All Skin Types', desc: 'You\'ll craft soap bars tailored to your own skin type — learning to customize formulas for any skin concern.', match: 'high', recommended: true },
      { icon: 'leaf', name: 'Sensitive Skin Focus', desc: 'Workshop includes a dedicated module on creating gentle, sensitive-skin certified soap formulations.', match: 'high', recommended: true },
      { icon: 'flower2', name: 'Combination Skin Focus', desc: 'Learn to balance oil-control and hydration in a single bar — perfect for combination skin types.', match: 'medium', recommended: false },
      { icon: 'waves', name: 'Oily Skin Focus', desc: 'Discover natural herbal ingredients that regulate sebum naturally while maintaining essential moisture balance.', match: 'medium', recommended: false },
    ],
    related: [4, 1, 3],
  },
  7: {
    id: 7,
    slug: 'phyto-active-serum-treatment',
    title: 'Phyto-Active Serum Treatment',
    badge: 'Serum',
    category: 'Facial',
    tag: 'Serum',
    rating: 4.8,
    reviews: 154,
    image: 'assets/skin-mist-face.jpg',
    storyImg1: 'assets/science-plant-actives.jpg',
    storyImg2: 'assets/forest-mist.jpg',
    price: '$76',
    tagline: '"12 powerful plant actives. One extraordinary serum. Limitless results."',
    shortDesc: 'A concentrated phyto-serum with 12 active plant compounds, retinol alternatives, and peptide-rich herbal extracts. Visibly reduces fine lines and restores natural radiance.',
    benefitsIntro: 'The most concentrated organic formula in our collection — 12 active plant compounds working in perfect synergy to transform skin at a cellular level.',
    benefits: [
      { icon: 'zap', title: '12 Active Plant Compounds', desc: 'Proprietary blend of 12 certified organic plant actives, each targeting a specific skin concern at cellular level.' },
      { icon: 'trending-up', title: 'Collagen Stimulation', desc: 'Plant-derived peptides and bakuchiol (natural retinol alternative) visibly stimulate collagen production without irritation.' },
      { icon: 'eraser', title: 'Fine Line Reduction', desc: 'Clinical results show visible reduction in fine lines and wrinkles within 4 weeks of consistent use.' },
      { icon: 'sun', title: 'Luminosity Restoration', desc: 'Brightening plant extracts restore skin\'s natural luminosity, fading dullness and restoring youthful radiance.' },
      { icon: 'shield', title: 'DNA Skin Protection', desc: 'Adaptogens and antioxidants protect skin DNA from UV-induced damage and environmental stress.' },
      { icon: 'activity', title: 'Instant Visible Results', desc: 'Visible plumping and smoothing effect within 30 minutes of application — immediate gratification with lasting results.' },
    ],
    pricing: { essential: '$76', signature: '$140', luxury: '$210' },
    skinTypes: [
      { icon: 'moon', name: 'Mature Skin', desc: 'The ultimate anti-ageing phyto-serum — visibly reduces fine lines and restores youthful radiance at any age.', match: 'high', recommended: true },
      { icon: 'sparkles', name: 'Dull Skin', desc: 'Brightening plant complex transforms dull, lifeless complexion into radiant, glowing skin.', match: 'high', recommended: true },
      { icon: 'droplets', name: 'Dry Skin', desc: 'Deeply hydrating plant actives restore moisture balance and plumpness to dehydrated skin types.', match: 'medium', recommended: false },
      { icon: 'sparkles', name: 'Normal Skin', desc: 'Maintains and enhances normal skin\'s natural radiance while providing preventative anti-ageing benefits.', match: 'medium', recommended: false },
    ],
    related: [1, 2, 5],
  },
  8: {
    id: 8,
    slug: 'shea-radiance-face-treatment',
    title: 'Shea Radiance Face Treatment',
    badge: 'Luxury',
    category: 'Face Treatment',
    tag: 'Face Treatment',
    rating: 5.0,
    reviews: 93,
    image: 'assets/skin-shea-face.jpg',
    storyImg1: 'assets/science-plant-actives.jpg',
    storyImg2: 'assets/skin-rosehip-face.jpg',
    price: '$145',
    tagline: '"The pinnacle of organic luxury — where gold meets nature in the ultimate anti-ageing ritual."',
    shortDesc: 'A luxurious shea-based facial treatment enriched with gold-infused plant extracts, hyaluronic acid, and precious plant stem cells. The ultimate anti-ageing herbal ritual.',
    benefitsIntro: 'Our most prestigious treatment — a masterclass in artisan luxury that delivers visible anti-ageing results and an unrivalled sensory experience.',
    benefits: [
      { icon: 'crown', title: 'Gold-Infused Formula', desc: '24-karat gold micro-particles work alongside plant extracts to accelerate ingredient absorption and boost luminosity.' },
      { icon: 'leaf', title: 'Plant Stem Cell Technology', desc: 'Rare plant stem cells from Alpine roses and Uttwiler Spätlauber apples protect skin\'s own stem cells from ageing.' },
      { icon: 'droplets', title: 'Triple Hyaluronic Complex', desc: 'Three different molecular weights of natural hyaluronic acid penetrate at every skin depth for unparalleled hydration.' },
      { icon: 'trending-up', title: 'Visible Lifting Effect', desc: 'Natural phytotensors provide an immediate visible lifting and firming effect from the very first application.' },
      { icon: 'sparkles', title: 'Ultimate Radiance', desc: 'Gold micro-particles and light-reflecting flora create an extraordinary, multi-dimensional skin radiance.' },
      { icon: 'shield', title: 'Epigenetic Protection', desc: 'Advanced phyto complex protects skin\'s epigenetic code — preventing cellular ageing at its deepest level.' },
    ],
    pricing: { essential: '$145', signature: '$240', luxury: '$380' },
    skinTypes: [
      { icon: 'moon', name: 'Mature Skin', desc: 'The gold standard anti-ageing treatment — visibly lifts, firms, and restores youthful radiance to mature skin.', match: 'high', recommended: true },
      { icon: 'droplets', name: 'Dry / Very Dry', desc: 'Triple hyaluronic complex delivers exceptional deep hydration to severely dry and dehydrated skin types.', match: 'high', recommended: true },
      { icon: 'sparkles', name: 'Dull / Tired Skin', desc: 'Gold micro-particles instantly transform dull, tired complexion into luminous, radiant perfection.', match: 'medium', recommended: false },
      { icon: 'leaf', name: 'Sensitive Skin', desc: 'Hypoallergenic plant stem cell formula is tested safe for sensitive skin seeking premium anti-ageing benefits.', match: 'medium', recommended: false },
    ],
    related: [1, 7, 3],
  },
};

function getServiceIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  return id && SERVICES_DB[id] ? id : 1; // default to 1 if not found
}

function populateHero(service) {

  document.getElementById('sd-page-title').textContent = `${service.title} — Haridra Rituals`;
  const metaDesc = document.getElementById('sd-meta-desc');
  if (metaDesc) metaDesc.setAttribute('content', service.shortDesc);

  const breadcrumbCurrent = document.getElementById('sd-breadcrumb-current');
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = service.title;

  const badge = document.getElementById('sd-hero-badge');
  if (badge) badge.textContent = service.badge;

  const ratingVal = document.getElementById('sd-rating-val');
  const ratingCount = document.getElementById('sd-rating-count');
  if (ratingVal) ratingVal.textContent = service.rating;
  if (ratingCount) ratingCount.textContent = `(${service.reviews} reviews)`;

  const stars = document.getElementById('sd-rating-stars');
  if (stars) {
    const fullCount = Math.floor(service.rating);
    let starsHTML = '';
    for (let i = 0; i < fullCount; i++) {
      starsHTML += '<i data-lucide="star" aria-hidden="true"></i> ';
    }
    stars.innerHTML = starsHTML;
  }

  const title = document.getElementById('sd-hero-title');
  if (title) title.textContent = service.title;

  const tagline = document.getElementById('sd-hero-tagline');
  if (tagline) tagline.textContent = service.tagline;

  const desc = document.getElementById('sd-hero-desc');
  if (desc) desc.textContent = service.shortDesc;

  const price = document.getElementById('sd-price-val');
  if (price) price.textContent = service.price;

  const img = document.getElementById('sd-hero-img');
  if (img) {
    img.src = service.image;
    img.alt = service.title;
  }

  const cardInfoTitle = document.getElementById('sd-card-info-title');
  const cardInfoSub = document.getElementById('sd-card-info-sub');
  if (cardInfoTitle) cardInfoTitle.textContent = service.title;
  if (cardInfoSub) cardInfoSub.textContent = `${service.tag} \u2022 Certified`;

  const bgLayer = document.getElementById('sd-hero-bg-img');
  if (bgLayer) bgLayer.style.backgroundImage = `url('${service.image}')`;
  
  if (window.lucide) window.lucide.createIcons();
}

function populateBenefits(service) {
  const grid = document.getElementById('sd-benefits-grid');
  const intro = document.getElementById('sd-benefits-intro');

  if (intro) intro.textContent = service.benefitsIntro;

  if (!grid) return;
  grid.innerHTML = '';

  service.benefits.forEach((benefit) => {
    const card = document.createElement('div');
    card.className = 'sd-benefit-card';
    card.innerHTML = `
      <div class="sd-benefit-icon">
        <i data-lucide="${benefit.icon}" aria-hidden="true"></i>
      </div>
      <h3 class="sd-benefit-title">${benefit.title}</h3>
      <p class="sd-benefit-desc">${benefit.desc}</p>
    `;
    grid.appendChild(card);
  });
}

function populateStory(service) {
  const img1 = document.getElementById('sd-story-img-1');
  const img2 = document.getElementById('sd-story-img-2');

  if (img1) { img1.src = service.storyImg1 || 'assets/science-plant-actives.jpg'; img1.alt = 'Crafted from Earth\'s Finest Plant Actives'; }
  if (img2) { img2.src = service.storyImg2 || 'assets/body-butter.jpg'; img2.alt = service.title + ' ritual application'; }
}

function populatePricing(service) {
  const essentialPrice = document.getElementById('sd-plan-price-essential');
  const signaturePrice = document.getElementById('sd-plan-price-signature');
  const luxuryPrice = document.getElementById('sd-plan-price-luxury');

  if (essentialPrice) essentialPrice.textContent = service.pricing.essential;
  if (signaturePrice) signaturePrice.textContent = service.pricing.signature;
  if (luxuryPrice) luxuryPrice.textContent = service.pricing.luxury;

  const bookBtns = ['sd-book-essential', 'sd-book-signature', 'sd-book-luxury'];
  bookBtns.forEach((id) => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', () => {
        window.location.href = `contact.html?service=${encodeURIComponent(service.title)}`;
      });
    }
  });
}

function populateSkinTypes(service) {
  const grid = document.getElementById('sd-skintype-grid');
  if (!grid) return;
  grid.innerHTML = '';

  service.skinTypes.forEach((skin) => {
    const card = document.createElement('div');
    card.className = `sd-skin-card sd-match-${skin.match}${skin.recommended ? ' sd-skin-recommended' : ''}`;

    card.innerHTML = `
      ${skin.recommended ? '<span class="sd-skin-recommended-badge">✓ Best Match</span>' : ''}
      <div class="sd-skin-icon" aria-hidden="true"><i data-lucide="${skin.icon || 'sparkles'}" aria-hidden="true"></i></div>
      <h3 class="sd-skin-name">${skin.name}</h3>
      <p class="sd-skin-desc">${skin.desc}</p>
      <div class="sd-skin-match">
        <span class="sd-skin-match-dot"></span>
        <span>${skin.match === 'high' ? 'Excellent Match' : skin.match === 'medium' ? 'Good Match' : 'Works Well'}</span>
      </div>
    `;
    grid.appendChild(card);
  });
  if (window.lucide) window.lucide.createIcons();
}

function populateRelated(service) {
  const grid = document.getElementById('sd-related-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const relatedIds = (service.related || []).slice(0, 3);
  relatedIds.forEach((id) => {
    const related = SERVICES_DB[id];
    if (!related) return;

    const card = document.createElement('article');
    card.className = 'sd-related-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `View ${related.title}`);
    card.innerHTML = `
      <div class="sd-related-img-wrap">
        <img src="${related.image}" alt="${related.title}" class="sd-related-img" loading="lazy" />
        <div class="sd-related-overlay"></div>
        <span class="sd-related-badge-tag"><i data-lucide="sparkles" aria-hidden="true"></i> ${related.tag}</span>
      </div>
      <div class="sd-related-body">
        <div class="sd-related-meta">
          <span class="sd-related-rating">&#9733; ${related.rating || '4.9'}</span>
          <span class="sd-related-price">${related.price}</span>
        </div>
        <h3 class="sd-related-title">${related.title}</h3>
        <p class="sd-related-desc">${related.shortDesc ? related.shortDesc.slice(0, 85) + '...' : 'A luxury organic ritual crafted for deep skin transformation.'}</p>
        <span class="sd-related-btn">
          <span>View Service</span> <i data-lucide="arrow-right" aria-hidden="true"></i>
        </span>
      </div>
    `;

    card.addEventListener('click', () => {
      sessionStorage.setItem('selectedService', JSON.stringify(related));
      sessionStorage.setItem('selectedServiceId', related.id);
      window.location.href = `servicedetail.html?id=${related.id}&service=${related.slug}`;
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') card.click();
    });

    grid.appendChild(card);
  });
}

function initBookButton(service) {
  const bookBtn = document.getElementById('sd-book-btn');
  if (bookBtn) {
    bookBtn.addEventListener('click', () => {
      window.location.href = `contact.html?service=${encodeURIComponent(service.title)}`;
    });
  }

  const quizBtn = document.getElementById('sd-quiz-btn');
  if (quizBtn) {
    quizBtn.addEventListener('click', () => {
      window.location.href = 'contact.html';
    });
  }
}

function initScrollAnimations() {
  const animatable = document.querySelectorAll(
    '.sd-benefit-card, .sd-story-block, .sd-pricing-card, .sd-skin-card, .sd-related-card, .sd-skintype-cta'
  );

  animatable.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = 'opacity 0.55s cubic-bezier(0.4, 0, 0.2, 1), transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)';
  });

  document.querySelectorAll('.sd-benefit-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.07}s`;
  });

  document.querySelectorAll('.sd-pricing-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.1}s`;
  });

  document.querySelectorAll('.sd-skin-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.07}s`;
  });

  document.querySelectorAll('.sd-related-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.08}s`;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  animatable.forEach((el) => observer.observe(el));
}

function initHeroAnimation() {
  const heroInfo = document.querySelector('.sd-hero-info');
  const heroImgWrap = document.querySelector('.sd-hero-img-wrap');

  if (heroInfo) {
    heroInfo.style.opacity = '0';
    heroInfo.style.transform = 'translateX(-30px)';
    heroInfo.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    setTimeout(() => {
      heroInfo.style.opacity = '1';
      heroInfo.style.transform = 'translateX(0)';
    }, 200);
  }

  if (heroImgWrap) {
    heroImgWrap.style.opacity = '0';
    heroImgWrap.style.transform = 'translateX(30px) scale(0.96)';
    heroImgWrap.style.transition = 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s';
    setTimeout(() => {
      heroImgWrap.style.opacity = '1';
      heroImgWrap.style.transform = 'translateX(0) scale(1)';
    }, 100);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const serviceId = getServiceIdFromURL();
  const service = SERVICES_DB[serviceId];

  if (!service) {
    console.error('Service not found, redirecting...');
    window.location.href = 'services.html';
    return;
  }

  populateHero(service);
  populateBenefits(service);
  populateStory(service);
  populatePricing(service);
  populateSkinTypes(service);
  populateRelated(service);
  initBookButton(service);

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  setTimeout(() => {
    initHeroAnimation();
    initScrollAnimations();
    initActiveNavLinks();
  }, 100);
});

function initActiveNavLinks() {
  const rawPath = window.location.pathname.split('/').pop().toLowerCase();
  const currentPath = (rawPath === '' || rawPath === 'index.html') ? 'index.html' : rawPath;

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const hrefBase = href.split('/').pop().toLowerCase();

    if (hrefBase === currentPath) {
      link.classList.add('active');
    } else if (currentPath === 'servicedetail.html' && hrefBase === 'services.html') {
      link.classList.add('active');
    } else if (currentPath === 'journals detail.html' && hrefBase === 'journals.html') {
      link.classList.add('active');
    } else if ((currentPath === 'index.html' || currentPath === 'home2.html') && link.id === 'nav-home') {
      link.classList.add('active');
    } else if (href.includes('.html') && hrefBase !== currentPath) {
      link.classList.remove('active');
    }
  });

  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-sublink');
  mobileLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const hrefBase = href.split('/').pop().toLowerCase();

    if (hrefBase === currentPath) {
      link.classList.add('active');
    } else if (currentPath === 'servicedetail.html' && hrefBase === 'services.html') {
      link.classList.add('active');
    } else if (currentPath === 'journals detail.html' && hrefBase === 'journals.html') {
      link.classList.add('active');
    }
  });
}
