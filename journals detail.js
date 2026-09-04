const ARTICLES_DATA = {
  'the-lavender-diaries': {
    title: 'The Lavender Diaries: From Field to Flask',
    excerpt: 'How we source, distill, and bottle the purest lavender essence in the French Alps — a journey of scent, science, and soul.',
    category: 'Ingredients',
    author: 'Aria Fontaine',
    authorRole: 'Head Herbal Curator',
    authorImg: 'assets/founder1.jpg',
    image: 'assets/skin-rosehip-face.jpg',
    date: 'Aug 15, 2026',
    readTime: '8 min read',
    views: '2.4k',
    gradient: 'linear-gradient(135deg, #6B4F8A 0%, #B9A7D6 35%, #DCD0E8 65%, #F3EBDD 100%)',
    featured: true,
    caption: 'High-altitude wild lavender undergoing copper steam distillation in Haute-Provence, France.',
    toc: [
      { id: 'section-origin', label: 'The Origin of Lavender' },
      { id: 'section-harvest', label: 'How We Harvest' },
      { id: 'section-distillation', label: 'The Distillation Process' },
      { id: 'section-skin-benefits', label: 'Benefits for Your Skin' },
      { id: 'section-ritual', label: 'Your Lavender Ritual' }
    ],
    product: {
      title: 'Lavender Glow Facial',
      price: '$89',
      image: 'assets/soap-lavender-oat.jpg',
      rating: '5.0 (142 Reviews)',
      link: 'services.html'
    },
    relatedSlugs: ['rosehip-the-vitamin-c-powerhouse', 'the-5-minute-morning-ritual', 'shea-butter-ancient-wisdom'],
    lead: 'Nestled in the sun-drenched hills of Haute-Provence, at an elevation of 800 to 1,800 meters, grows one of the world\'s most chemically complex natural treasures. Lavandula angustifolia — true lavender — has been cultivated in this region since the 14th century, its violet blooms swaying in the summer mistral wind.',
    contentHtml: `
      <div class="jnd-content-section" id="section-origin">
        <h2 class="jnd-content-h2">The Origin of Lavender</h2>
        <p class="jnd-content-p">
          Unlike its hybrid cousin lavandin (Lavandula × intermedia), which dominates commercial markets for its higher yield, true lavender produces a more delicate, nuanced essential oil. It is richer in linalool and linalyl acetate — the two compounds responsible for its legendary calming, anti-inflammatory, and skin-healing properties.
        </p>
        <blockquote class="jnd-blockquote">
          <p>"True lavender is not simply a fragrance — it is a complete botanical pharmacy distilled into one blue-purple flower."</p>
          <cite>— Professeur Henri Dubois, École de Parfumerie de Grasse</cite>
        </blockquote>
        <p class="jnd-content-p">
          We partner with a fourth-generation family farm north of Manosque. Our contract ensures zero synthetic inputs: no herbicides, no synthetic fertilizers, and harvesting is done only by hand during peak bloom in late July.
        </p>
      </div>

      <div class="jnd-stats-strip">
        <div class="jnd-strip-stat"><span class="jnd-strip-num">800m</span><span class="jnd-strip-label">Altitude Sourced</span></div>
        <div class="jnd-strip-divider"></div>
        <div class="jnd-strip-stat"><span class="jnd-strip-num">40+</span><span class="jnd-strip-label">Active Compounds</span></div>
        <div class="jnd-strip-divider"></div>
        <div class="jnd-strip-stat"><span class="jnd-strip-num">100%</span><span class="jnd-strip-label">Organic Harvest</span></div>
        <div class="jnd-strip-divider"></div>
        <div class="jnd-strip-stat"><span class="jnd-strip-num">4th Gen</span><span class="jnd-strip-label">Family Estate</span></div>
      </div>

      <div class="jnd-content-section" id="section-harvest">
        <h2 class="jnd-content-h2">How We Harvest</h2>
        <p class="jnd-content-p">
          The harvest window lasts no more than two to three weeks. Our master harvester reads the morning dew and sun position before deciding which rows to cut by hand with traditional sickles.
        </p>
        <div class="jnd-info-cards">
          <div class="jnd-info-card">
            <h4>Dawn Harvest</h4>
            <p>Cut before 9am when essential oil concentration peaks in the flower heads.</p>
          </div>
          <div class="jnd-info-card">
            <h4>Hand-Cut Only</h4>
            <p>Machine cutting bruises stems, releasing grassy notes that dilute floral purity.</p>
          </div>
          <div class="jnd-info-card">
            <h4>Same-Day Distill</h4>
            <p>Bundles reach our copper alembic still within 4 hours of harvest for maximum potency.</p>
          </div>
        </div>
      </div>

      <div class="jnd-content-section" id="section-distillation">
        <h2 class="jnd-content-h2">The Distillation Process</h2>
        <p class="jnd-content-p">
          Steam distillation separates plant material into volatile aromatic compounds. Steam passes through fresh lavender blooms, carrying micro-droplets of oil through cooling coils into copper collection vessels.
        </p>
      </div>

      <div class="jnd-content-section" id="section-skin-benefits">
        <h2 class="jnd-content-h2">Benefits for Your Skin</h2>
        <p class="jnd-content-p">
          True lavender oil calms redness, balances sebum production, and repairs damaged skin barriers while soothing stressed minds.
        </p>
      </div>

      <div class="jnd-content-section" id="section-ritual">
        <h2 class="jnd-content-h2">Your Lavender Ritual</h2>
        <p class="jnd-content-p">
          Apply 3 drops to clean fingertips, inhale deeply, and gently press into damp facial skin every night before sleep for restored, radiant skin.
        </p>
      </div>
    `
  },
  'rosehip-the-vitamin-c-powerhouse': {
    title: 'Rosehip: The Vitamin C Powerhouse Your Skin Needs',
    excerpt: 'Unpacking the science behind rosehip seed oil — why its fatty acid profile makes it nature\'s most effective anti-aging ingredient.',
    category: 'Skin Science',
    author: 'Dr. Mara Elise',
    authorRole: 'Skin Biochemist',
    authorImg: 'assets/founder2.jpg',
    image: 'assets/rosehip-elixir.jpg',
    date: 'Aug 10, 2026',
    readTime: '6 min read',
    views: '1.8k',
    gradient: 'linear-gradient(135deg, #6B4F8A 0%, #A8C5A0 50%, #F3EBDD 100%)',
    featured: false,
    caption: 'Cold-pressed wild Chilean rosehip seed oil rich in natural trans-retinoic acid.',
    toc: [
      { id: 'section-unique', label: 'What Makes Rosehip Unique' },
      { id: 'section-vitc', label: 'Vitamin C & Fatty Acids' },
      { id: 'section-sun', label: 'Repairing Sun Damage' },
      { id: 'section-apply', label: 'How to Apply Rosehip Elixir' },
      { id: 'section-synergy', label: 'Combining with Serums' }
    ],
    product: {
      title: 'Organic Rosehip Facial Elixir',
      price: '$65',
      image: 'assets/rosehip-elixir.jpg',
      rating: '4.9 (98 Reviews)',
      link: 'servicedetail.html'
    },
    relatedSlugs: ['the-lavender-diaries', 'the-5-minute-morning-ritual', 'shea-butter-ancient-wisdom'],
    lead: 'Harvested from wild Rosa rubiginosa bushes in the high Andes mountains, cold-pressed rosehip seed oil is revered by dermatologists and herbalists alike for its natural bio-available vitamins and essential omegas.',
    contentHtml: `
      <div class="jnd-content-section" id="section-unique">
        <h2 class="jnd-content-h2">What Makes Rosehip Unique</h2>
        <p class="jnd-content-p">
          Rosehip seed oil is one of the only plant oils that naturally contains provitamin A (mostly t-retinoic acid). This unique composition promotes cell turnover and stimulates collagen synthesis without causing chemical peeling or irritation.
        </p>
        <blockquote class="jnd-blockquote">
          <p>"Rosehip oil delivers natural retinoid benefits with zero redness, restoring skin elasticity and fading hyperpigmentation organically."</p>
          <cite>— Dr. Mara Elise, Skin Biochemist</cite>
        </blockquote>
      </div>

      <div class="jnd-stats-strip">
        <div class="jnd-strip-stat"><span class="jnd-strip-num">77%</span><span class="jnd-strip-label">Essential Fatty Acids</span></div>
        <div class="jnd-strip-divider"></div>
        <div class="jnd-strip-stat"><span class="jnd-strip-num">Omega 3,6,9</span><span class="jnd-strip-label">Barrier Support</span></div>
        <div class="jnd-strip-divider"></div>
        <div class="jnd-strip-stat"><span class="jnd-strip-num">Cold-Pressed</span><span class="jnd-strip-label">Unrefined Quality</span></div>
      </div>

      <div class="jnd-content-section" id="section-vitc">
        <h2 class="jnd-content-h2">Vitamin C & Essential Fatty Acids</h2>
        <p class="jnd-content-p">
          High concentrations of linoleic and linolenic fatty acids reinforce the lipid barrier, preventing transepidermal water loss and keeping skin plump and hydrated.
        </p>
      </div>

      <div class="jnd-content-section" id="section-sun">
        <h2 class="jnd-content-h2">Repairing Sun Damage</h2>
        <p class="jnd-content-p">
          Antioxidants like lycopene and beta-carotene combat free radicals generated by UV exposure, reducing fine lines and evening skin tone.
        </p>
      </div>

      <div class="jnd-content-section" id="section-apply">
        <h2 class="jnd-content-h2">How to Apply Rosehip Elixir</h2>
        <p class="jnd-content-p">
          Warm 3 to 4 drops in your palms and press into cleansed, moist skin morning and evening for optimum absorption and a golden glow.
        </p>
      </div>

      <div class="jnd-content-section" id="section-synergy">
        <h2 class="jnd-content-h2">Combining with Serums</h2>
        <p class="jnd-content-p">
          Pair with our Hyaluronic Hydrating Mist to lock in hydration and seal active botanical nutrients into the dermis.
        </p>
      </div>
    `
  },
  'the-5-minute-morning-ritual': {
    title: 'The 5-Minute Morning Ritual That Changed Everything',
    excerpt: 'A simple organic skincare routine that has helped thousands feel grounded, glowing, and ready to face the day.',
    category: 'Rituals',
    author: 'Sage Williams',
    authorRole: 'Wellness Ritual Curator',
    authorImg: 'assets/founder3.jpg',
    image: 'assets/skin-mist-face.jpg',
    date: 'Aug 5, 2026',
    readTime: '4 min read',
    views: '3.2k',
    gradient: 'linear-gradient(135deg, #A8C5A0 0%, #7FB07A 40%, #D5E8D4 70%, #F3EBDD 100%)',
    featured: false,
    caption: 'Refreshing morning botanical mist infusion.',
    toc: [
      { id: 'section-why5', label: 'Why 5 Minutes is Enough' },
      { id: 'section-mist', label: 'Step 1: Herbal Cleansing Mist' },
      { id: 'section-press', label: 'Step 2: Botanical Elixir Press' },
      { id: 'section-massage', label: 'Step 3: Mindful Facial Massage' },
      { id: 'section-glow', label: 'Sustaining Your Glow' }
    ],
    product: {
      title: 'Botanical Hydrating Serum',
      price: '$58',
      image: 'assets/skin-mist-face.jpg',
      rating: '4.9 (115 Reviews)',
      link: 'servicedetail.html'
    },
    relatedSlugs: ['the-lavender-diaries', 'rosehip-the-vitamin-c-powerhouse', 'slow-beauty-movement'],
    lead: 'In a world that encourages frantic morning rushes, taking five intentional minutes to care for your skin changes your relationship with the day ahead.',
    contentHtml: `
      <div class="jnd-content-section" id="section-why5">
        <h2 class="jnd-content-h2">Why 5 Minutes is Enough</h2>
        <p class="jnd-content-p">
          You do not need a complicated 12-step routine to achieve clear, healthy skin. Consistent, high-quality plant actives applied mindfully produce far superior results.
        </p>
      </div>

      <div class="jnd-content-section" id="section-mist">
        <h2 class="jnd-content-h2">Step 1: Herbal Cleansing Mist</h2>
        <p class="jnd-content-p">
          Spritz organic floral hydrosol over your face to awaken your senses and balance your skin pH after overnight renewal.
        </p>
      </div>

      <div class="jnd-content-section" id="section-press">
        <h2 class="jnd-content-h2">Step 2: Botanical Elixir Press</h2>
        <p class="jnd-content-p">
          Press 3 drops of nutrient-rich plant oil into your skin using upward palms rather than harsh rubbing.
        </p>
      </div>

      <div class="jnd-content-section" id="section-massage">
        <h2 class="jnd-content-h2">Step 3: Mindful Facial Massage</h2>
        <p class="jnd-content-p">
          Spend 60 seconds massaging along your jawline and cheekbones to drain lymphatic fluid and stimulate blood circulation.
        </p>
      </div>

      <div class="jnd-content-section" id="section-glow">
        <h2 class="jnd-content-h2">Sustaining Your Glow</h2>
        <p class="jnd-content-p">
          Finish with a gentle swipe of organic lip balm and step out with hydrated, luminous skin that radiates health all day.
        </p>
      </div>
    `
  },
  'cold-process-soap-making': {
    title: "Cold-Process Soap Making: A Beginner's Artisan Guide",
    excerpt: 'From lye to lather — everything you need to craft your first handcrafted bar at home with herbs, clays, and essential oils.',
    category: 'DIY & Craft',
    author: 'Luna Cassidy',
    authorRole: 'Master Soap Artisan',
    authorImg: 'assets/founder1.jpg',
    image: 'assets/soap-lavender-oat.jpg',
    date: 'Jul 28, 2026',
    readTime: '10 min read',
    views: '1.5k',
    gradient: 'linear-gradient(135deg, #C9B8D8 0%, #B9A7D6 40%, #E8E0F0 70%, #FAF8F2 100%)',
    featured: false,
    caption: 'Hand-cut artisan cold-process lavender and oat soap bars curing in our studio.',
    toc: [
      { id: 'section-saponification', label: 'The Art of Saponification' },
      { id: 'section-oils', label: 'Selecting Oils & Clays' },
      { id: 'section-ratios', label: 'Lye & Oil Ratios' },
      { id: 'section-curing', label: 'Curing & Cutting Bars' },
      { id: 'section-care', label: 'Caring for Artisan Soap' }
    ],
    product: {
      title: 'Artisan Honey Lavender Soap',
      price: '$24',
      image: 'assets/soap-lavender-oat.jpg',
      rating: '5.0 (210 Reviews)',
      link: 'servicedetail.html'
    },
    relatedSlugs: ['the-lavender-diaries', 'slow-beauty-movement', 'shea-butter-ancient-wisdom'],
    lead: 'Cold-process soap making is equal parts ancient chemistry and botanical alchemy. By combining natural plant oils with sodium hydroxide and water, saponification transforms raw ingredients into a creamy, moisturizing bar.',
    contentHtml: `
      <div class="jnd-content-section" id="section-saponification">
        <h2 class="jnd-content-h2">The Art of Saponification</h2>
        <p class="jnd-content-p">
          Unlike melt-and-pour or commercial detergent bars, cold-process soap retains 100% of its natural glycerin — a humectant that draws moisture into skin.
        </p>
      </div>

      <div class="jnd-content-section" id="section-oils">
        <h2 class="jnd-content-h2">Selecting Oils & Clays</h2>
        <p class="jnd-content-p">
          We blend extra virgin olive oil for softness, coconut oil for rich bubbles, shea butter for creaminess, and French pink clay for gentle detoxing.
        </p>
      </div>

      <div class="jnd-content-section" id="section-ratios">
        <h2 class="jnd-content-h2">Lye & Oil Ratios</h2>
        <p class="jnd-content-p">
          Superfatting your recipe by 5% to 7% ensures that unreacted plant oils remain in the finished soap, delivering deep nourishment with every wash.
        </p>
      </div>

      <div class="jnd-content-section" id="section-curing">
        <h2 class="jnd-content-h2">Curing & Cutting Bars</h2>
        <p class="jnd-content-p">
          After pouring into wooden molds and insulating for 24 hours, cut bars are left on wooden racks for 4 to 6 weeks to cure and harden properly.
        </p>
      </div>

      <div class="jnd-content-section" id="section-care">
        <h2 class="jnd-content-h2">Caring for Artisan Soap</h2>
        <p class="jnd-content-p">
          Keep your bar on a draining soap dish between uses to extend its life and preserve its fragrant botanical lather.
        </p>
      </div>
    `
  },
  'slow-beauty-movement': {
    title: 'The Slow Beauty Movement: Less Products, More Ritual',
    excerpt: 'Why minimalist skincare with intentional, high-quality plant actives outperforms any 10-step routine packed with synthetic fillers.',
    category: 'Lifestyle',
    author: 'Aria Fontaine',
    authorRole: 'Head Herbal Curator',
    authorImg: 'assets/founder1.jpg',
    image: 'assets/hero2-cream.jpg',
    date: 'Jul 22, 2026',
    readTime: '5 min read',
    views: '2.1k',
    gradient: 'linear-gradient(135deg, #443E4C 0%, #766F80 40%, #C9B8D8 70%, #F3EBDD 100%)',
    featured: false,
    caption: 'Minimalist glass-packaged organic skincare formulas.',
    toc: [
      { id: 'section-slowdef', label: 'Defining Slow Beauty' },
      { id: 'section-fillers', label: 'Stripping Away Fillers' },
      { id: 'section-plantpotency', label: 'Whole-Plant Active Potency' },
      { id: 'section-bathing', label: 'Sacred Bathing Rituals' },
      { id: 'section-longterm', label: 'Long-Term Skin Transformation' }
    ],
    product: {
      title: 'Herbal Body Butter',
      price: '$45',
      image: 'assets/haridra-rituals-body-butter.jpg',
      rating: '4.9 (88 Reviews)',
      link: 'servicedetail.html'
    },
    relatedSlugs: ['the-5-minute-morning-ritual', 'the-lavender-diaries', 'cold-process-soap-making'],
    lead: 'The Slow Beauty movement is a conscious rebellion against fast skincare trends. It advocates for sustainable sourcing, non-toxic formulations, and mindful self-care.',
    contentHtml: `
      <div class="jnd-content-section" id="section-slowdef">
        <h2 class="jnd-content-h2">Defining Slow Beauty</h2>
        <p class="jnd-content-p">
          Slow beauty invites you to trade rushed multi-step routines for purposeful, soothing rituals that nourish both skin and spirit.
        </p>
      </div>

      <div class="jnd-content-section" id="section-fillers">
        <h2 class="jnd-content-h2">Stripping Away Fillers</h2>
        <p class="jnd-content-p">
          By eliminating silicones, microplastics, and synthetic fragrances, your skin barrier can breathe and heal naturally.
        </p>
      </div>

      <div class="jnd-content-section" id="section-plantpotency">
        <h2 class="jnd-content-h2">Whole-Plant Active Potency</h2>
        <p class="jnd-content-p">
          Whole plant extracts contain synergistically balanced compounds that deliver vitamins directly to skin cells without synthetic irritation.
        </p>
      </div>

      <div class="jnd-content-section" id="section-bathing">
        <h2 class="jnd-content-h2">Sacred Bathing Rituals</h2>
        <p class="jnd-content-p">
          Transform your daily bath into an evening sanctuary using botanical bath salts, candle light, and slow breathing.
        </p>
      </div>

      <div class="jnd-content-section" id="section-longterm">
        <h2 class="jnd-content-h2">Long-Term Skin Transformation</h2>
        <p class="jnd-content-p">
          Skin responds to consistency, gentleness, and organic nutrition. Over time, slow beauty builds resilient, naturally glowing skin.
        </p>
      </div>
    `
  },
  'shea-butter-ancient-wisdom': {
    title: 'Shea Butter: Ancient African Wisdom for Modern Skin',
    excerpt: 'Tracing the 3,000-year journey of shea — from the Vitellaria paradoxa tree in West Africa to your daily moisturizer.',
    category: 'Ingredients',
    author: 'Dr. Mara Elise',
    authorRole: 'Skin Biochemist',
    authorImg: 'assets/founder2.jpg',
    image: 'assets/shea-body-butter.jpg',
    date: 'Jul 15, 2026',
    readTime: '7 min read',
    views: '1.9k',
    gradient: 'linear-gradient(135deg, #8B6914 0%, #C9A227 40%, #E8D48B 70%, #F9F3DC 100%)',
    featured: false,
    caption: 'Hand-milled raw unrefined shea butter sourced from women cooperatives in Ghana.',
    toc: [
      { id: 'section-roots', label: 'Ancient Roots in West Africa' },
      { id: 'section-rawvsref', label: 'Raw Unrefined vs. Refined' },
      { id: 'section-barrier', label: 'Deep Moisture & Barrier Repair' },
      { id: 'section-healing', label: 'Healing Eczema & Dryness' },
      { id: 'section-dailyuse', label: 'Daily Shea Skincare' }
    ],
    product: {
      title: 'Raw Botanical Shea Balm',
      price: '$52',
      image: 'assets/shea-body-butter.jpg',
      rating: '5.0 (175 Reviews)',
      link: 'servicedetail.html'
    },
    relatedSlugs: ['the-lavender-diaries', 'rosehip-the-vitamin-c-powerhouse', 'cold-process-soap-making'],
    lead: 'For millennia, West African women have extracted raw shea butter from the nuts of the sacred karité tree. Known as "Women\'s Gold", shea butter remains nature\'s ultimate skin restorer.',
    contentHtml: `
      <div class="jnd-content-section" id="section-roots">
        <h2 class="jnd-content-h2">Ancient Roots in West Africa</h2>
        <p class="jnd-content-p">
          Historical records trace shea butter back to Cleopatra\'s Egypt, where jars of raw golden shea were carried across the desert to protect skin against harsh sun and winds.
        </p>
      </div>

      <div class="jnd-content-section" id="section-rawvsref">
        <h2 class="jnd-content-h2">Raw Unrefined vs. Refined</h2>
        <p class="jnd-content-p">
          Unrefined shea retains its characteristic ivory color, subtle nutty aroma, and high concentration of vitamins A, E, and F. Chemical refining strips these vital phytonutrients away.
        </p>
      </div>

      <div class="jnd-content-section" id="section-barrier">
        <h2 class="jnd-content-h2">Deep Moisture & Barrier Repair</h2>
        <p class="jnd-content-p">
          Packed with cinnamic acid and triterpene alcohols, raw shea reduces inflammation and seals micro-cracks in severely dry skin.
        </p>
      </div>

      <div class="jnd-content-section" id="section-healing">
        <h2 class="jnd-content-h2">Healing Eczema & Dryness</h2>
        <p class="jnd-content-p">
          Its non-comedogenic melting point (body temperature) allows shea to melt into irritated skin, relieving itchiness and soothing eczema flare-ups naturally.
        </p>
      </div>

      <div class="jnd-content-section" id="section-dailyuse">
        <h2 class="jnd-content-h2">Daily Shea Skincare</h2>
        <p class="jnd-content-p">
          Warm a small dab between your fingertips and smooth over dry elbows, knees, heels, or parched lips for instant 24-hour hydration.
        </p>
      </div>
    `
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('article') || 'the-lavender-diaries';
  const article = ARTICLES_DATA[slug] || ARTICLES_DATA['the-lavender-diaries'];

  if (document.getElementById('jnd-page-title')) {
    document.getElementById('jnd-page-title').textContent = `${article.title} — Haridra Rituals Journal`;
  }

  const heroHeading = document.getElementById('jnd-hero-heading');
  if (heroHeading) heroHeading.textContent = article.title;

  const heroExcerpt = document.getElementById('jnd-hero-excerpt');
  if (heroExcerpt) heroExcerpt.textContent = article.excerpt;

  const categoryBadge = document.getElementById('jnd-category-badge');
  if (categoryBadge) categoryBadge.textContent = article.category;

  const authorName = document.getElementById('jnd-author-name');
  if (authorName) authorName.textContent = article.author;

  const dateEl = document.getElementById('jnd-date');
  if (dateEl) dateEl.textContent = article.date;

  const readTimeEl = document.getElementById('jnd-read-time');
  if (readTimeEl) readTimeEl.textContent = article.readTime;

  const heroBg = document.getElementById('jnd-hero-bg');
  if (heroBg) {
    const heroGradient = heroBg.querySelector('.jnd-hero-gradient');
    if (heroGradient) heroGradient.style.background = article.gradient;
  }

  const authorAvatarEl = document.getElementById('jnd-author-avatar');
  if (authorAvatarEl) authorAvatarEl.src = article.authorImg;

  const authorCardAvatarEl = document.getElementById('jnd-author-card-avatar');
  if (authorCardAvatarEl) authorCardAvatarEl.src = article.authorImg;

  const authorCardNameEl = document.getElementById('jnd-author-card-name');
  if (authorCardNameEl) authorCardNameEl.textContent = article.author;

  const authorCardRoleEl = document.getElementById('jnd-author-card-role');
  if (authorCardRoleEl) authorCardRoleEl.textContent = article.authorRole;

  const featuredBadge = document.getElementById('jnd-featured-badge');
  if (featuredBadge) {
    featuredBadge.style.display = article.featured ? 'inline-flex' : 'none';
  }

  const tocReadTime = document.getElementById('jnd-toc-read-time');
  if (tocReadTime) tocReadTime.textContent = article.readTime;

  renderTOC(article.toc);
  renderProductCard(article.product);
  renderArticleBody(article);
  renderRelatedArticles(article.relatedSlugs);
  initReadingProgress();
  initTOCHighlight(article.toc);

  if (typeof lucide !== 'undefined') lucide.createIcons();

  initScrollAnimations();
  initActiveNavLinks();
});

function renderTOC(tocItems) {
  const tocList = document.getElementById('jnd-toc-list');
  if (!tocList || !tocItems) return;

  tocList.innerHTML = tocItems.map((item, idx) => `
    <li>
      <a href="#${item.id}" class="jnd-toc-link ${idx === 0 ? 'jnd-toc-active' : ''}" onclick="scrollToSection(event, '${item.id}')">
        ${item.label}
      </a>
    </li>
  `).join('');
}

function renderProductCard(prod) {
  const card = document.querySelector('.jnd-toc-product-cta-card');
  if (!card || !prod) return;

  card.innerHTML = `
    <span class="jnd-toc-cta-tag"><i data-lucide="sparkles" aria-hidden="true"></i> FEATURED RITUAL</span>
    <div class="jnd-toc-cta-img-wrap">
      <img src="${prod.image}" alt="${prod.title}" class="jnd-toc-cta-img" />
      ${prod.price ? `<span class="jnd-toc-cta-price">${prod.price}</span>` : ''}
    </div>
    <div class="jnd-toc-cta-info">
      <h4 class="jnd-toc-cta-title">${prod.title}</h4>
      <p class="jnd-toc-cta-rating"><i data-lucide="star" aria-hidden="true"></i> <span>${prod.rating}</span></p>
      <a href="${prod.link || 'services.html'}" class="jnd-toc-cta-btn">
        <span>Explore Ritual</span>
        <i data-lucide="arrow-right" aria-hidden="true"></i>
      </a>
    </div>
  `;
}

function renderArticleBody(article) {
  const articleContent = document.getElementById('jnd-article-content');
  if (!articleContent) return;

  articleContent.innerHTML = `
    <figure class="jnd-content-hero-img-box">
      <img src="${article.image}" alt="${article.title}" class="jnd-content-real-img" id="jnd-article-hero-img" />
      <figcaption class="jnd-img-caption">${article.caption || article.title}</figcaption>
    </figure>

    <p class="jnd-lead-para">${article.lead}</p>

    ${article.contentHtml}
  `;
}

function renderRelatedArticles(relatedSlugs) {
  const grid = document.querySelector('.jnd-related-grid');
  if (!grid || !relatedSlugs) return;

  grid.innerHTML = relatedSlugs.map(slug => {
    const item = ARTICLES_DATA[slug];
    if (!item) return '';
    return `
      <article class="jnd-related-card" onclick="openJournalDetail('${slug}')" tabindex="0" onkeydown="if(event.key==='Enter')openJournalDetail('${slug}')" aria-label="Read ${item.title}">
        <div class="jnd-related-img-wrap">
          <img src="${item.image}" alt="${item.title}" class="jnd-card-real-img" />
        </div>
        <div class="jnd-related-body">
          <span class="jnd-related-category">${item.category}</span>
          <h3 class="jnd-related-title-card">${item.title}</h3>
          <div class="jnd-related-meta">
            <span><i data-lucide="clock" aria-hidden="true"></i> ${item.readTime}</span>
            <span>${item.date}</span>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function openJournalDetail(slug) {
  window.location.href = `journals detail.html?article=${slug}`;
}

function initReadingProgress() {
  const progressFill = document.getElementById('jnd-progress-fill');
  const articleContent = document.getElementById('jnd-article-content');
  const progressBar = document.querySelector('.jnd-progress-bar');

  if (!progressFill || !articleContent) return;

  function updateProgress() {
    const contentTop = articleContent.getBoundingClientRect().top + window.scrollY;
    const contentHeight = articleContent.offsetHeight;
    const scrolled = window.scrollY - contentTop;
    const progress = Math.max(0, Math.min(100, (scrolled / contentHeight) * 100));

    progressFill.style.width = progress + '%';
    progressBar.setAttribute('aria-valuenow', Math.round(progress));
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

function initTOCHighlight(tocItems) {
  if (!tocItems || !tocItems.length) return;
  const sections = tocItems.map(item => item.id);
  const tocLinks = document.querySelectorAll('.jnd-toc-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        tocLinks.forEach(link => {
          link.classList.remove('jnd-toc-active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('jnd-toc-active');
          }
        });
      }
    });
  }, { rootMargin: '-20% 0px -65% 0px', threshold: 0 });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

function scrollToSection(event, sectionId) {
  event.preventDefault();
  const target = document.getElementById(sectionId);
  if (target) {
    const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 84;
    const top = target.getBoundingClientRect().top + window.scrollY - headerH - 20;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

function shareArticle() {
  const title = document.getElementById('jnd-hero-heading') ? document.getElementById('jnd-hero-heading').textContent : 'Haridra Rituals Journal';
  const url = window.location.href;

  if (navigator.share) {
    navigator.share({ title, url }).catch(() => copyArticleLink());
  } else {
    copyArticleLink();
  }
}

function shareToSocial(platform) {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(document.getElementById('jnd-hero-heading') ? document.getElementById('jnd-hero-heading').textContent : 'Haridra Rituals Journal');

  const urls = {
    twitter: `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`
  };

  if (urls[platform]) {
    window.open(urls[platform], '_blank', 'width=600,height=400,noopener');
  }
}

function copyArticleLink() {
  const btn = document.getElementById('jnd-copy-link-btn');
  navigator.clipboard.writeText(window.location.href).then(() => {
    if (btn) {
      const originalHTML = btn.innerHTML;
      btn.innerHTML = '<i data-lucide="check" style="color: var(--sage-green)"></i>';
      if (typeof lucide !== 'undefined') lucide.createIcons();
      setTimeout(() => {
        btn.innerHTML = originalHTML;
        if (typeof lucide !== 'undefined') lucide.createIcons();
      }, 2000);
    }
  }).catch(() => {
    alert('Article URL: ' + window.location.href);
  });
}

function toggleBookmark(btn) {
  const isBookmarked = btn.dataset.bookmarked === 'true';
  btn.dataset.bookmarked = !isBookmarked;

  if (!isBookmarked) {
    btn.innerHTML = '<i data-lucide="bookmark-check" aria-hidden="true"></i><span>Saved!</span>';
    btn.style.background = 'rgba(168,197,160,0.3)';
    btn.style.borderColor = 'rgba(168,197,160,0.5)';
  } else {
    btn.innerHTML = '<i data-lucide="bookmark" aria-hidden="true"></i><span>Save</span>';
    btn.style.background = '';
    btn.style.borderColor = '';
  }

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function handleMiniNewsletter(event) {
  event.preventDefault();
  const emailInput = document.getElementById('jnd-mini-email');
  const submitBtn = document.getElementById('jnd-mini-submit-btn');
  const successEl = document.getElementById('jnd-mini-nl-success');
  const email = emailInput.value.trim();

  if (!email || !email.includes('@')) {
    emailInput.style.borderBottom = '2px solid rgba(231,76,60,0.7)';
    emailInput.focus();
    setTimeout(() => { emailInput.style.borderBottom = ''; }, 2000);
    return;
  }

  submitBtn.disabled = true;
  submitBtn.innerHTML = 'Subscribing…';

  setTimeout(() => {
    if (document.querySelector('.jnd-mini-form-group')) document.querySelector('.jnd-mini-form-group').style.display = 'none';
    if (document.querySelector('.jnd-mini-nl-note')) document.querySelector('.jnd-mini-nl-note').style.display = 'none';
    if (successEl) successEl.hidden = false;
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }, 900);
}

function initScrollAnimations() {
  const observerOpts = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOpts);

  const animEls = document.querySelectorAll(
    '.jnd-content-section, .jnd-stats-strip, .jnd-info-card, .jnd-benefit-item, .jnd-ritual-step, .jnd-related-card'
  );

  animEls.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

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