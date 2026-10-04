/**
 * Europesnus Multi-Tier Coupon Engine & Interactive Handler
 * Varied discount distribution: 55%, 50%, 44%, 40%, 35%, 30%, 25%, 20%, 16%, 15%, 10%, €0.99
 */

document.addEventListener('DOMContentLoaded', () => {
  const couponData = [
    {
      id: 1,
      code: "SNUSDEAL40",
      discount: "55%",
      discountValue: 55,
      target: "SITE-WIDE",
      title: "55% Off Your Entire Order",
      desc: "Save 55% across all product lines at Europesnus.com with fast tracked EU delivery.",
      type: "Top Coupon",
      category: "sitewide",
      badge: "Verified",
      expires: "Dec 30, 2026",
      checked: "Today",
      url: "https://europesnus.com/?ref=lrtwknyx",
      terms: "Valid on all brands including VELO, Killa, and Pablo. No minimum order required. 18+ only.",
      featured: true
    },
    {
      id: 2,
      code: "EUROPESNUSVIP50",
      discount: "50%",
      discountValue: 50,
      target: "VIP EXCLUSIVE",
      title: "50% Off VIP Exclusive Storewide",
      desc: "Exclusive VIP customer discount code valid across the entire pouch and snus catalog.",
      type: "VIP Deal",
      category: "vip",
      badge: "Verified",
      expires: "Apr 2, 2027",
      checked: "Today",
      url: "https://europesnus.com/?ref=lrtwknyx",
      terms: "Exclusive VIP code for 50% off all nicotine pouches and caffeine pouches.",
      featured: true
    },
    {
      id: 3,
      code: "THOR44",
      discount: "44%",
      discountValue: 44,
      target: "FLASH SALE",
      title: "44% Off Limited Time Flash Sale",
      desc: "Limited-time promotional discount code giving 44% off your shopping cart.",
      type: "Flash Deal",
      category: "sitewide",
      badge: "Verified",
      expires: "Oct 30, 2026",
      checked: "Today",
      url: "https://europesnus.com/?ref=lrtwknyx",
      terms: "Valid on regular priced catalog items. 18+ only.",
      featured: false
    },
    {
      id: 4,
      code: "ICEBERG40",
      discount: "40%",
      discountValue: 40,
      target: "ICEBERG BRAND",
      title: "40% Off Iceberg Nicotine Pouches",
      desc: "Instant 40% discount across all Iceberg flavor lines and extreme strengths.",
      type: "Brand Deal",
      category: "iceberg",
      badge: "Verified",
      expires: "Nov 30, 2026",
      checked: "Today",
      url: "https://europesnus.com/?ref=lrtwknyx",
      terms: "Valid for 40% off on Emerald, Watermelon, and Dragon Fruit Iceberg pouches.",
      featured: false
    },
    {
      id: 5,
      code: "EXTRA44",
      discount: "35%",
      discountValue: 35,
      target: "BOGO OFFER",
      title: "35% Off Nicotine Pouches BOGO",
      desc: "Special buy-one-get-discount savings on all nicotine pouch products storewide.",
      type: "BOGO Sale",
      category: "deals",
      badge: "Verified",
      expires: "Oct 30, 2026",
      checked: "Today",
      url: "https://europesnus.com/?ref=lrtwknyx",
      terms: "Applies to selected pouch bundles. 18+ only.",
      featured: false
    },
    {
      id: 6,
      code: "europesnus30",
      discount: "30%",
      discountValue: 30,
      target: "STOREWIDE",
      title: "30% Off Storewide Discount Code",
      desc: "Take an instant 30% discount off your order at Europesnus.com.",
      type: "Promo Code",
      category: "sitewide",
      badge: "Verified",
      expires: "Oct 30, 2026",
      checked: "Today",
      url: "https://europesnus.com/?ref=save40",
      terms: "Valid site-wide on all brands with tracked European delivery.",
      featured: false
    },
    {
      id: 7,
      code: "SAVE25",
      discount: "25%",
      discountValue: 25,
      target: "ALL POUCHES",
      title: "25% Off All Brands & Strengths",
      desc: "Popular 25% discount voucher for all nicotine and energy pouch collections.",
      type: "Special Offer",
      category: "deals",
      badge: "Verified",
      expires: "May 15, 2027",
      checked: "Today",
      url: "https://europesnus.com/?ref=lrtwknyx",
      terms: "Applies to all brands including VELO Freeze and Pablo Ice Cold.",
      featured: false
    },
    {
      id: 8,
      code: "KILLASNUS10",
      discount: "20%",
      discountValue: 20,
      target: "KILLA BRAND",
      title: "20% Off Killa Nicotine Pouches",
      desc: "Instant 20% savings on the entire Killa product line at Europesnus.com.",
      type: "Brand Deal",
      category: "killa",
      badge: "Verified",
      expires: "Apr 28, 2027",
      checked: "Today",
      url: "https://europesnus.com/?ref=lrtwknyx",
      terms: "Includes Killa Cold Mint, Blueberry, Watermelon, and Spearmint.",
      featured: false
    },
    {
      id: 9,
      code: "BULK16",
      discount: "16%",
      discountValue: 16,
      target: "10+ CANS BULK",
      title: "16% Bulk Volume Discount (Automatic)",
      desc: "Automatic 16% volume discount when ordering 10 or more cans of any pouch brand.",
      type: "Bulk Saving",
      category: "deals",
      badge: "Verified",
      expires: "Dec 31, 2027",
      checked: "Today",
      url: "https://europesnus.com/?ref=lrtwknyx",
      terms: "Automatically calculated in your shopping cart when quantity reaches 10 cans.",
      featured: false
    },
    {
      id: 10,
      code: "snus453",
      discount: "15%",
      discountValue: 15,
      target: "SECRET CODE",
      title: "15% Off Secret Insider Code",
      desc: "Exclusive insider voucher code for 15% off regular priced pouches and snus.",
      type: "Promo Code",
      category: "sitewide",
      badge: "Verified",
      expires: "Oct 30, 2026",
      checked: "Today",
      url: "https://europesnus.com/?ref=lrtwknyx",
      terms: "Valid on all regular catalog products.",
      featured: false
    },
    {
      id: 11,
      code: "KILLAPOUCH10",
      discount: "10%",
      discountValue: 10,
      target: "KILLA BRAND",
      title: "10% Off All Killa Nicotine Pouches",
      desc: "Get 10% off the entire Killa pouch catalog with no minimum spend.",
      type: "Brand Deal",
      category: "killa",
      badge: "Verified",
      expires: "Oct 30, 2026",
      checked: "Today",
      url: "https://europesnus.com/?ref=save40",
      terms: "Valid on all Killa varieties. 18+ only.",
      featured: false
    },
    {
      id: 12,
      code: "N3HATEA",
      discount: "10%",
      discountValue: 10,
      target: "FLASH VOUCHER",
      title: "10% Off Flash Promo Code",
      desc: "Extra 10% flash discount coupon applicable on checkout carts.",
      type: "Promo Code",
      category: "sitewide",
      badge: "Verified",
      expires: "Oct 11, 2026",
      checked: "Today",
      url: "https://europesnus.com/?ref=lrtwknyx",
      terms: "Valid site-wide at Europesnus.com.",
      featured: false
    },
    {
      id: 13,
      code: "TRIAL99",
      discount: "€0.99",
      discountValue: 70,
      target: "FIRST CAN DEAL",
      title: "€0.99 Sample & Trial Can Deal",
      desc: "Try selected new nicotine pouch flavors from just €0.99 per can.",
      type: "Sample Deal",
      category: "deals",
      badge: "Verified",
      expires: "Dec 31, 2026",
      checked: "Today",
      url: "https://europesnus.com/?ref=lrtwknyx",
      terms: "Valid for 1 sample can per order on participating new releases.",
      featured: false
    },
    {
      id: 14,
      code: "EUROSNUS50",
      discount: "50%",
      discountValue: 50,
      target: "SPECIAL PROMO",
      title: "Special 50% Off Promo Code",
      desc: "Instant 50% off promo voucher applicable at checkout on eligible nicotine pouches.",
      type: "Promo Code",
      category: "sitewide",
      badge: "Verified",
      expires: "Oct 30, 2026",
      checked: "Today",
      url: "https://europesnus.com/?ref=lrtwknyx",
      terms: "Valid on all pouches site-wide. 18+ only.",
      featured: false
    },
    {
      id: 15,
      code: "DISCOUNT50",
      discount: "50%",
      discountValue: 50,
      target: "CART SUBTOTAL",
      title: "50% Off Cart Subtotal Voucher",
      desc: "Take half off your shopping cart total with this verified voucher code.",
      type: "Promo Code",
      category: "sitewide",
      badge: "Verified",
      expires: "Oct 31, 2026",
      checked: "Today",
      url: "https://europesnus.com/?ref=lrtwknyx",
      terms: "Applies to cart subtotal before shipping.",
      featured: false
    },
    {
      id: 16,
      code: "Europesnus50",
      discount: "50%",
      discountValue: 50,
      target: "SITE-WIDE",
      title: "50% Off Verified Brand Code",
      desc: "Official brand promotion for 50% off all nicotine pouches and alternative oral products.",
      type: "Promo Code",
      category: "sitewide",
      badge: "Verified",
      expires: "Oct 17, 2026",
      checked: "Today",
      url: "https://europesnus.com/?ref=lrtwknyx",
      terms: "Exclusive code valid on all nicotine and caffeine pouches at Europesnus.com.",
      featured: false
    }
  ];

  const couponsGrid = document.getElementById('coupons-grid');
  const activeCountEl = document.getElementById('active-coupons-count');
  const searchInput = document.getElementById('coupon-search-input');
  const sortSelect = document.getElementById('coupon-sort-select');
  const filterTabs = document.querySelectorAll('.filter-tab-btn');
  const modalOverlay = document.getElementById('coupon-modal-overlay');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-coupon-title');
  const modalDesc = document.getElementById('modal-coupon-desc');
  const modalCode = document.getElementById('modal-code-text');
  const modalCopyBtn = document.getElementById('modal-copy-action-btn');
  const modalRedirectBtn = document.getElementById('modal-redirect-link');
  const toastContainer = document.getElementById('toast-container');

  let currentCategory = 'all';
  let currentSearch = '';
  let currentSort = 'highest';

  function renderCoupons() {
    if (!couponsGrid) return;

    let filtered = couponData.filter(item => {
      const matchesCat = (currentCategory === 'all') ||
        (currentCategory === 'sitewide' && item.category === 'sitewide') ||
        (currentCategory === 'killa' && item.category === 'killa') ||
        (currentCategory === 'iceberg' && item.category === 'iceberg') ||
        (currentCategory === 'vip' && (item.category === 'vip' || item.discountValue >= 50)) ||
        (currentCategory === 'deals' && (item.type.includes('Sale') || item.type.includes('BOGO') || item.type.includes('Bulk') || item.type.includes('Sample') || item.category === 'deals'));

      const query = currentSearch.toLowerCase().trim();
      const matchesSearch = !query ||
        item.title.toLowerCase().includes(query) ||
        item.code.toLowerCase().includes(query) ||
        item.desc.toLowerCase().includes(query) ||
        item.target.toLowerCase().includes(query);

      return matchesCat && matchesSearch;
    });

    filtered.sort((a, b) => {
      if (currentSort === 'highest') return b.discountValue - a.discountValue;
      if (currentSort === 'verified') return (b.badge === 'Verified' ? 1 : 0) - (a.badge === 'Verified' ? 1 : 0);
      if (currentSort === 'latest') return b.id - a.id;
      return 0;
    });

    if (activeCountEl) {
      activeCountEl.textContent = `Showing ${filtered.length} of ${couponData.length} offers`;
    }

    couponsGrid.innerHTML = filtered.map(coupon => `
      <article class="coupon-card ${coupon.featured ? 'featured' : ''}" id="coupon-${coupon.id}">
        <div>
          <div class="card-top-row">
            <div class="badge-group">
              <span class="card-badge verified">✓ ${coupon.badge}</span>
              ${coupon.category === 'vip' ? '<span class="card-badge exclusive">VIP</span>' : ''}
              ${coupon.type.includes('BOGO') ? '<span class="card-badge bogo">BOGO</span>' : ''}
              ${coupon.type.includes('Bulk') ? '<span class="card-badge bulk">BULK</span>' : ''}
            </div>
            <span class="offer-type-label">${coupon.type}</span>
          </div>

          <div class="card-main-content">
            <div class="discount-callout">
              <span class="discount-big">${coupon.discount} OFF</span>
              <span class="discount-target">• ${coupon.target}</span>
            </div>
            <h3 class="coupon-card-title">${coupon.title}</h3>
            <p class="coupon-card-desc">${coupon.desc}</p>
            <div class="card-meta-list">
              <span class="meta-item">🕒 Valid until ${coupon.expires}</span>
              <span class="meta-item">🔍 Checked ${coupon.checked}</span>
            </div>
          </div>
        </div>

        <div class="card-action-box">
          <button class="coupon-action-btn" 
                  data-code="${coupon.code}" 
                  data-url="${coupon.url}"
                  data-title="${coupon.title}"
                  data-desc="${coupon.desc}">
            <span class="btn-code-mask">${coupon.code.slice(0, 3)}••••</span>
            <span class="btn-action-label">
              <span>Show Code & Shop</span>
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </span>
          </button>
          
          <button class="card-terms-toggle" aria-expanded="false">
            <span>Terms & Details</span>
            <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div class="card-terms-drawer">
            ${coupon.terms}
          </div>
        </div>
      </article>
    `).join('');

    attachListeners();
  }

  function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      return new Promise((res, rej) => {
        document.execCommand('copy') ? res() : rej();
        textArea.remove();
      });
    }
  }

  function showToast(message) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
      <span>${message}</span>
    `;
    toastContainer.appendChild(toast);
    setTimeout(() => toast.remove(), 3500);
  }

  function openModal(code, title, desc, url) {
    if (!modalOverlay) return;
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modalCode.textContent = code;
    modalRedirectBtn.href = url;
    modalCopyBtn.textContent = 'Copy Code';

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    copyToClipboard(code).then(() => {
      modalCopyBtn.textContent = 'Copied! ✓';
      showToast(`Copied code "${code}" to clipboard!`);
    });
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  function attachListeners() {
    if (!couponsGrid) return;
    const btns = couponsGrid.querySelectorAll('.coupon-action-btn');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const code = btn.dataset.code;
        const url = btn.dataset.url;
        const title = btn.dataset.title;
        const desc = btn.dataset.desc;
        window.open(url, '_blank', 'noopener,noreferrer');
        openModal(code, title, desc, url);
      });
    });

    const toggles = couponsGrid.querySelectorAll('.card-terms-toggle');
    toggles.forEach(t => {
      t.addEventListener('click', () => {
        const drawer = t.nextElementSibling;
        const isOpen = drawer.classList.contains('open');
        drawer.classList.toggle('open', !isOpen);
      });
    });
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }
  if (modalCopyBtn) {
    modalCopyBtn.addEventListener('click', () => {
      const code = modalCode.textContent.trim();
      copyToClipboard(code).then(() => {
        modalCopyBtn.textContent = 'Copied! ✓';
        showToast(`Code "${code}" copied!`);
      });
    });
  }

  const heroBtn = document.getElementById('hero-reveal-code-btn');
  if (heroBtn) {
    heroBtn.addEventListener('click', () => {
      const code = heroBtn.dataset.code || "SNUSDEAL40";
      const url = heroBtn.dataset.url || "https://europesnus.com/?ref=lrtwknyx";
      window.open(url, '_blank', 'noopener,noreferrer');
      openModal(code, "55% Off Your Entire Order", "Save 55% across all brands with fast tracked EU delivery.", url);
    });
  }

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.dataset.filter;
      renderCoupons();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      renderCoupons();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderCoupons();
    });
  }

  const faqTriggers = document.querySelectorAll('.faq-trigger');
  faqTriggers.forEach(t => {
    t.addEventListener('click', () => {
      const item = t.closest('.faq-item');
      item.classList.toggle('active');
    });
  });

  renderCoupons();
});
