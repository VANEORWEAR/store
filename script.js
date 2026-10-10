/* ==========================================
   VANEOR WEAR - High Converting Store Script
   ========================================== */

const currencies = {
    USD: { symbol: '$', rate: 1, name: 'US Dollar' },
    EGP: { symbol: 'EGP ', rate: 50, name: 'Egyptian Pound' },
    EUR: { symbol: '€', rate: 0.92, name: 'Euro' },
    SAR: { symbol: 'SAR ', rate: 3.75, name: 'Saudi Riyal' },
    AED: { symbol: 'AED ', rate: 3.67, name: 'UAE Dirham' }
};

const flags = { en: 'fi-gb', ar: 'fi-eg', de: 'fi-de', fr: 'fi-fr', es: 'fi-es' };

const translations = {
    en: {
        "change-language": "Change language", "change-currency": "Change currency",
        "nav-home": "Home", "nav-collection": "Legacy Collection", "nav-heritage": "The Heritage",
        "hero-subtitle": "Autumn / Winter Legacy", "hero-title": "Timeless Elegance. Winter Legacy.",
        "hero-desc": "Immaculate heavy wool coats, structured turtlenecks, and refined tailored trousers.",
        "hero-btn-explore": "Explore Winter Legacy", "hero-btn-philosophy": "Our Philosophy",
        "catalog-subtitle": "The Catalog", "catalog-title": "Winter Legacy Collection",
        "catalog-desc": "Curated heavy winter layers designed in deep navy, charcoal gray, forest green, and rich camel.",
        "filter-all": "All Pieces", "filter-outerwear": "Outerwear & Coats", "filter-knitwear": "Knitwear & Turtlenecks", "filter-trousers": "Tailored Trousers",
        "cart-title": "Your Selection", "cart-subtotal": "Subtotal", "cart-checkout": "Proceed to Secure Checkout",
        "checkout-title": "Secure Order Completion", "checkout-desc": "Complete your billing and shipping details below.",
        "total-due": "Total Due:", "quick-view": "Select Size & Details", "add-bag": "Add to Bag", "select-size": "Select Size Required", "size-warning": "Please select a size before adding to bag."
    },
    ar: {
        "change-language": "تغيير اللغة", "change-currency": "تغيير العملة",
        "nav-home": "الرئيسية", "nav-collection": "المجموعة الشتوية", "nav-heritage": "عن الفخامة",
        "hero-subtitle": "إرث الخريف والشتاء", "hero-title": "أناقة خالدة. إرث شتوي.",
        "hero-desc": "معاطف صوف ثقيلة، بلوفرات هاي كول فاخرة، وبنطلونات كلاسيكية مفصلة صُممت للرجل الأنيق.",
        "hero-btn-explore": "اكتشف المجموعة الشتوية", "hero-btn-philosophy": "فلسفتنا",
        "catalog-subtitle": "الكتالوج", "catalog-title": "تشكيلة الشتاء الملكية",
        "catalog-desc": "قطع كلاسيكية فاخرة بألوان الشتاء الجادة.",
        "filter-all": "جميع القطع", "filter-outerwear": "معاطف وجواكت", "filter-knitwear": "تريكو وهاي كول", "filter-trousers": "بنطلونات كلاسيك",
        "cart-title": "حقيبة التسوق", "cart-subtotal": "المجموع الفرعي", "cart-checkout": "إتمام الطلب الفاخر",
        "checkout-title": "تأكيد الطلب الفاخر", "checkout-desc": "قم بإدخال بيانات الشحن والدفع الخاصة بك أدناه.",
        "total-due": "المجموع الكلي:", "quick-view": "اختر المقاس والتفاصيل", "add-bag": "إضافة للحقيبة", "select-size": "اختر المقاس المطلوب", "size-warning": "يرجى اختيار المقاس المناسب قبل الإضافة للحقيّبة."
    }
};

// المنتجات الافتراضية المحدثة لتظهر لجميع الزوار مباشرة
const defaultProducts = [
    {
        id: 1,
        name: "The Kensington Double-Breasted Wool Coat",
        category: "Outerwear",
        price: 27000 / 50,
        oldPrice: 32000 / 50,
        color: "Dark Navy",
        images: [
            "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800"
        ],
        description: "Crafted from heavy virgin wool blend with peak lapels.",
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: 2,
        name: "Milano Cashmere Turtleneck",
        category: "Knitwear",
        price: 8500 / 50,
        oldPrice: 10500 / 50,
        color: "Rich Camel",
        images: [
            "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=800"
        ],
        description: "Luxurious pure cashmere knit designed for uncompromising warmth and sleek silhouette.",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 3,
        name: "Savile Row Tailored Wool Trousers",
        category: "Trousers",
        price: 9500 / 50,
        oldPrice: 12000 / 50,
        color: "Charcoal Gray",
        images: [
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1533867617858-e7d97e0afd8b?auto=format&fit=crop&q=80&w=800"
        ],
        description: "Immaculate pleated wool trousers with classic high-waist old money drape.",
        sizes: ["30", "32", "34", "36", "38"]
    }
];

const defaultContent = {
    brand: "VANEOR WEAR",
    subtitle: "Autumn / Winter Legacy",
    title: "Timeless Elegance. Winter Legacy.",
    heroBg: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&q=80&w=1920",
    desc: "Immaculate heavy wool coats, structured turtlenecks, and refined tailored trousers."
};

const defaultSettings = {
    whatsapp: "201037664877",
    email: "vaneor.wear@gmail.com"
};

let currentLang = localStorage.getItem('vaneor_lang') || 'en';
let currentCurr = localStorage.getItem('vaneor_curr') || 'USD';
let products = JSON.parse(localStorage.getItem('vaneor_products')) || defaultProducts;
let siteContent = JSON.parse(localStorage.getItem('vaneor_content')) || defaultContent;
let siteSettings = JSON.parse(localStorage.getItem('vaneor_settings')) || defaultSettings;
let cart = JSON.parse(localStorage.getItem('vaneor_cart')) || [];
let selectedSizeState = null;
let currentQuantityState = 1;
let pendingActionUrl = null;

const kachingAudio = new Audio('https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3');

const productGrid = document.getElementById('product-grid');
const filterContainer = document.getElementById('filter-container');
const cartBtn = document.getElementById('cart-btn');
const closeCart = document.getElementById('close-cart');
const cartDrawer = document.getElementById('cart-drawer');
const cartPanel = document.getElementById('cart-panel');
const cartBackdrop = document.getElementById('cart-backdrop');
const cartBadge = document.getElementById('cart-badge');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');

const modal = document.getElementById('quick-view-modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const closeModal = document.getElementById('close-modal');
const modalBody = document.getElementById('modal-body');

const checkoutModal = document.getElementById('checkout-modal');
const checkoutBackdrop = document.getElementById('checkout-backdrop');
const closeCheckout = document.getElementById('close-checkout');
const orderForm = document.getElementById('order-form');
const checkoutTotalPrice = document.getElementById('checkout-total-price');

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

document.addEventListener('DOMContentLoaded', () => {
    initRadioStates();
    applyLanguage(currentLang);
    applyCurrency(currentCurr);
    applySiteContent();
    renderProducts('all');
    updateCartUI();
    setupEventListeners();
    createCustomAlertModal();
});

function initRadioStates() {
    const langRadio = document.querySelector(`input[name="lang-option"][value="${currentLang}"]`);
    if(langRadio) langRadio.checked = true;

    const currRadio = document.querySelector(`input[name="curr-option"][value="${currentCurr}"]`);
    if(currRadio) currRadio.checked = true;
}

function formatPrice(usdAmount) {
    const curr = currencies[currentCurr] || currencies.USD;
    const converted = usdAmount * curr.rate;
    return `${curr.symbol}${converted.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('vaneor_lang', lang);
    applyLanguage(lang);
    renderProducts('all');
    updateCartUI();
}

function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    const flagClass = flags[lang] || 'fi-gb';
    document.getElementById('nav-flag-container').innerHTML = `<span class="fi ${flagClass} text-xs sm:text-sm rounded-sm"></span>`;
    document.getElementById('nav-lang-code').innerText = lang.toUpperCase();

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const langDict = translations[lang] || translations.en;
        if (langDict && langDict[key]) {
            el.innerText = langDict[key];
        }
    });
}

function setCurrency(currCode) {
    currentCurr = currCode;
    localStorage.setItem('vaneor_curr', currCode);
    applyCurrency(currCode);
    renderProducts('all');
    updateCartUI();
}

function applyCurrency(currCode) {
    const curr = currencies[currCode] || currencies.USD;
    document.getElementById('nav-curr-code').innerText = `${curr.symbol.trim()}${currCode}`;
}

function applySiteContent() {
    document.getElementById('brand-logo-text').innerText = siteContent.brand;
    document.getElementById('footer-brand').innerText = siteContent.brand;
    document.getElementById('hero-bg-img').src = siteContent.heroBg;
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
}

function togglePaymentFields(method) {
    const vodafoneContainer = document.getElementById('vodafone-details-container');
    if (method === 'vodafone') {
        vodafoneContainer.classList.remove('hidden');
    } else {
        vodafoneContainer.classList.add('hidden');
    }
}

function handleFileSelect(input) {
    const chosenNameSpan = document.getElementById('file-chosen-name');
    if (input.files && input.files[0]) {
        chosenNameSpan.innerText = ` تم اختيار الملف: ${input.files[0].name}`;
    } else {
        chosenNameSpan.innerText = '';
    }
}

function renderProducts(filterCategory) {
    productGrid.innerHTML = '';
    const filtered = filterCategory === 'all' ? products : products.filter(p => p.category === filterCategory);

    if (filtered.length === 0) {
        productGrid.innerHTML = `<p class="col-span-full text-center text-gray-500 py-12">No pieces found in this category.</p>`;
        return;
    }

    const t = translations[currentLang] || translations.en;

    filtered.forEach(p => {
        const images = (p.images && p.images.length > 0) ? p.images : [p.image || 'https://placehold.co/800x1000'];
        const mainImg = images[0];
        const secondaryImg = images[1] ? images[1] : mainImg;

        let priceHtml = `<span class="font-serif text-base sm:text-lg font-bold text-vaneor-camel">${formatPrice(p.price)}</span>`;
        if (p.oldPrice && p.oldPrice > p.price) {
            priceHtml = `
                <div class="flex items-center gap-2">
                    <span class="font-serif text-base sm:text-lg font-bold text-vaneor-camel">${formatPrice(p.price)}</span>
                    <span class="text-xs text-gray-400 line-through">${formatPrice(p.oldPrice)}</span>
                </div>
            `;
        }

        const card = document.createElement('div');
        card.className = "group glass-card rounded-sm overflow-hidden flex flex-col transition duration-300 animate-fade-in";
        card.innerHTML = `
            <div class="relative aspect-[4/5] overflow-hidden bg-vaneor-navy cursor-pointer" onclick="openQuickView(${p.id})">
                <img src="${mainImg}" alt="${p.name}" class="w-full h-full object-cover object-center transition duration-500 ${images.length > 1 ? 'group-hover:opacity-0' : 'group-hover:scale-105'}" onerror="this.src='https://placehold.co/800x1000/111827/F4F1EA?text=VANEOR'">
                
                ${images.length > 1 ? `
                <img src="${secondaryImg}" alt="${p.name} alternate" class="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 transition duration-500" onerror="this.src='https://placehold.co/800x1000/111827/F4F1EA?text=VANEOR'">
                ` : ''}

                <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-center p-4">
                    <button onclick="event.stopPropagation(); openQuickView(${p.id})" class="w-full py-3 bg-vaneor-dark/95 backdrop-blur text-vaneor-cream text-xs uppercase tracking-widest font-bold hover:bg-vaneor-camel hover:text-vaneor-dark transition duration-300">
                        ${t["quick-view"] || "Quick View"}
                    </button>
                </div>
                <span class="absolute top-3 right-3 bg-vaneor-dark/80 backdrop-blur text-vaneor-camel text-[10px] uppercase tracking-wider px-2.5 py-1 font-bold">
                    ${p.category}
                </span>
            </div>
            <div class="p-4 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                    <span class="text-[10px] sm:text-[11px] uppercase tracking-widest text-gray-400 block mb-1 font-bold">${p.color || 'Winter Palette'}</span>
                    <h3 class="font-serif text-base sm:text-lg font-bold text-vaneor-cream mb-2 group-hover:text-vaneor-camel transition">${p.name}</h3>
                </div>
                <div class="pt-4 flex items-center justify-between border-t border-gray-800 mt-4">
                    ${priceHtml}
                    <button onclick="openQuickView(${p.id})" class="px-3 sm:px-4 py-2 bg-vaneor-navy border border-vaneor-camel/40 text-vaneor-camel hover:bg-vaneor-camel hover:text-vaneor-dark text-[11px] sm:text-xs uppercase tracking-widest font-bold transition duration-300">
                        ${t["add-bag"] || "Add to Bag"}
                    </button>
                </div>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

function setupEventListeners() {
    const langBtn = document.getElementById('lang-menu-btn');
    const dropdown = document.getElementById('lang-currency-dropdown');

    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target) && !langBtn.contains(e.target)) {
            dropdown.classList.add('hidden');
        }
    });

    filterContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.className = "filter-btn whitespace-nowrap px-5 py-2.5 text-xs uppercase tracking-widest font-medium transition duration-300 bg-vaneor-navy/80 text-gray-300 hover:bg-vaneor-camel hover:text-vaneor-dark border border-gray-800 rounded-sm";
            });
            e.target.className = "filter-btn active whitespace-nowrap px-5 py-2.5 text-xs uppercase tracking-widest font-bold transition duration-300 bg-vaneor-camel text-vaneor-dark shadow-md rounded-sm";
            renderProducts(e.target.dataset.filter);
        }
    });

    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    cartBtn.addEventListener('click', openCartDrawer);
    closeCart.addEventListener('click', closeCartDrawer);
    cartBackdrop.addEventListener('click', closeCartDrawer);

    closeModal.addEventListener('click', closeQuickViewModal);
    modalBackdrop.addEventListener('click', closeQuickViewModal);

    checkoutBtn.addEventListener('click', () => {
        if(cart.length === 0) {
            showToast(currentLang === 'ar' ? 'السلة فارغة حالياً' : 'Your cart is currently empty.');
            return;
        }
        closeCartDrawer();
        openCheckoutModal();
    });
    closeCheckout.addEventListener('click', closeCheckoutModal);
    checkoutBackdrop.addEventListener('click', closeCheckoutModal);
}

function openCartDrawer() {
    cartDrawer.classList.remove('pointer-events-none');
    cartBackdrop.classList.remove('opacity-0', 'pointer-events-none');
    cartPanel.classList.remove('translate-x-full');
}

function closeCartDrawer() {
    cartPanel.classList.add('translate-x-full');
    cartBackdrop.classList.add('opacity-0', 'pointer-events-none');
    setTimeout(() => cartDrawer.classList.add('pointer-events-none'), 300);
}

function openQuickView(productId) {
    const p = products.find(prod => prod.id == productId);
    if(!p) return;
    const t = translations[currentLang] || translations.en;
    const availableSizes = p.sizes || ["S", "M", "L", "XL"];
    selectedSizeState = availableSizes[0]; 
    currentQuantityState = 1;

    const images = (p.images && p.images.length > 0) ? p.images : [p.image || 'https://placehold.co/800x1000'];

    let priceHtml = `<p class="font-serif text-lg sm:text-xl font-bold text-vaneor-camel">${formatPrice(p.price)}</p>`;
    if (p.oldPrice && p.oldPrice > p.price) {
        priceHtml = `
            <div class="flex items-center gap-3">
                <p class="font-serif text-lg sm:text-xl font-bold text-vaneor-camel">${formatPrice(p.price)}</p>
                <p class="text-sm text-gray-400 line-through">${formatPrice(p.oldPrice)}</p>
            </div>
        `;
    }

    modalBody.innerHTML = `
        <div class="space-y-4">
            <div class="aspect-[4/5] overflow-hidden rounded-sm bg-vaneor-dark border border-gray-800">
                <img id="modal-main-img" src="${images[0]}" alt="${p.name}" class="w-full h-full object-cover transition duration-300" onerror="this.src='https://placehold.co/800x1000/111827/F4F1EA?text=VANEOR'">
            </div>
            ${images.length > 1 ? `
            <div class="flex gap-2 overflow-x-auto pb-2">
                ${images.map((img, idx) => `
                    <button onclick="changeModalImage('${img}', this)" class="w-14 h-18 rounded-sm overflow-hidden border-2 ${idx === 0 ? 'border-vaneor-camel' : 'border-transparent opacity-70 hover:opacity-100'} transition flex-shrink-0">
                        <img src="${img}" class="w-full h-full object-cover">
                    </button>
                `).join('')}
            </div>
            ` : ''}
        </div>
        <div class="space-y-4">
            <span class="text-xs uppercase tracking-widest text-vaneor-camel block font-bold">${p.category} • ${p.color || 'Winter Collection'}</span>
            <h3 class="font-serif text-xl sm:text-2xl font-bold text-vaneor-cream">${p.name}</h3>
            ${priceHtml}
            <p class="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">${p.description}</p>
            <div>
                <label class="block text-xs uppercase tracking-wider text-vaneor-camel mb-2 font-bold">${t["select-size"] || "Select Size"}</label>
                <div class="flex gap-2 flex-wrap" id="size-options-container">
                    ${availableSizes.map((size, idx) => `
                        <button type="button" onclick="selectSize('${size}', this)" class="size-btn px-4 py-2 border ${idx === 0 ? 'border-vaneor-camel bg-vaneor-camel text-vaneor-dark font-bold' : 'border-gray-700 text-vaneor-cream hover:border-vaneor-camel'} text-xs uppercase tracking-wider transition">${size}</button>
                    `).join('')}
                </div>
            </div>

            <div>
                <label class="block text-xs uppercase tracking-wider text-vaneor-camel mb-2 font-bold">الكمية (Quantity)</label>
                <div class="flex items-center space-x-3">
                    <button type="button" onclick="changeQuantity(-1)" class="w-10 h-10 bg-vaneor-dark border border-gray-700 text-vaneor-cream font-bold hover:border-vaneor-camel transition rounded-sm flex items-center justify-center">-</button>
                    <span id="modal-quantity-display" class="font-serif text-lg font-bold text-vaneor-camel w-8 text-center">1</span>
                    <button type="button" onclick="changeQuantity(1)" class="w-10 h-10 bg-vaneor-dark border border-gray-700 text-vaneor-cream font-bold hover:border-vaneor-camel transition rounded-sm flex items-center justify-center">+</button>
                </div>
            </div>

            <div class="pt-4">
                <button onclick="addToCartWithSize(${p.id})" class="w-full py-3.5 sm:py-4 bg-vaneor-camel text-vaneor-dark font-bold uppercase tracking-widest text-xs hover:bg-white transition duration-300 shadow-xl">
                    ${t["add-bag"] || "Add to Bag"}
                </button>
            </div>
        </div>
    `;

    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.querySelector('#modal-content-box').classList.remove('scale-95');
}

function changeQuantity(amount) {
    currentQuantityState += amount;
    if (currentQuantityState < 1) currentQuantityState = 1;
    document.getElementById('modal-quantity-display').innerText = currentQuantityState;
}

function changeModalImage(imgSrc, btnElement) {
    document.getElementById('modal-main-img').src = imgSrc;
    const parentContainer = btnElement.parentElement;
    parentContainer.querySelectorAll('button').forEach(btn => {
        btn.className = "w-14 h-18 rounded-sm overflow-hidden border-2 border-transparent opacity-70 hover:opacity-100 transition flex-shrink-0";
    });
    btnElement.className = "w-14 h-18 rounded-sm overflow-hidden border-2 border-vaneor-camel transition flex-shrink-0";
}

function selectSize(size, btnElement) {
    selectedSizeState = size;
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.className = "size-btn px-4 py-2 border border-gray-700 text-vaneor-cream hover:border-vaneor-camel text-xs uppercase tracking-wider transition";
    });
    btnElement.className = "size-btn px-4 py-2 border border-vaneor-camel bg-vaneor-camel text-vaneor-dark font-bold text-xs uppercase tracking-wider transition";
}

function addToCartWithSize(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    if (!selectedSizeState) {
        const t = translations[currentLang] || translations.en;
        showToast(t["size-warning"] || "Please select a size.");
        return;
    }

    const cartItemKey = `${productId}_${selectedSizeState}`;
    const existing = cart.find(item => item.cartKey === cartItemKey);
    const images = product.images || [product.image];

    if (existing) {
        existing.quantity += currentQuantityState;
    } else {
        cart.push({
            ...product,
            image: images[0],
            cartKey: cartItemKey,
            selectedSize: selectedSizeState,
            quantity: currentQuantityState
        });
    }

    saveCart();
    updateCartUI();
    closeQuickViewModal();
    showToast(`${currentLang === 'ar' ? 'تمت إضافة' : 'Added'} "${product.name}" (${selectedSizeState}) x${currentQuantityState}`);
    openCartDrawer();
}

function updateCartItemQuantity(cartKey, amount) {
    const item = cart.find(i => i.cartKey === cartKey);
    if (item) {
        item.quantity += amount;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.cartKey !== cartKey);
        }
        saveCart();
        updateCartUI();
    }
}

function removeFromCart(cartKey) {
    cart = cart.filter(item => item.cartKey !== cartKey);
    saveCart();
    updateCartUI();
}

function updateCartUI() {
    cartItemsContainer.innerHTML = '';
    let total = 0;
    let totalCount = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p class="text-xs text-gray-500 text-center py-8">${currentLang === 'ar' ? 'الحقيبة فارغة حالياً' : 'Your selection is currently empty.'}</p>`;
        cartTotal.innerText = formatPrice(0);
        cartBadge.classList.add('scale-0');
        cartBadge.innerText = '0';
        return;
    }

    cart.forEach(item => {
        total += item.price * item.quantity;
        totalCount += item.quantity;

        const div = document.createElement('div');
        div.className = "flex items-center gap-4 pt-4 first:pt-0";
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="w-14 h-18 sm:w-16 sm:h-20 object-cover rounded-sm border border-gray-800">
            <div class="flex-1">
                <h4 class="font-serif text-xs sm:text-sm font-bold text-vaneor-cream mb-1">${item.name}</h4>
                <p class="text-[11px] text-vaneor-camel mb-1 font-bold">Size: ${item.selectedSize}</p>
                <p class="text-xs text-vaneor-camel mb-2 font-bold">${formatPrice(item.price)}</p>
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-2 border border-gray-700 rounded-sm px-2 py-1">
                        <button onclick="updateCartItemQuantity('${item.cartKey}', -1)" class="text-gray-400 hover:text-vaneor-cream font-bold px-1">-</button>
                        <span class="text-xs font-bold text-vaneor-camel">${item.quantity}</span>
                        <button onclick="updateCartItemQuantity('${item.cartKey}', 1)" class="text-gray-400 hover:text-vaneor-cream font-bold px-1">+</button>
                    </div>
                    <button onclick="removeFromCart('${item.cartKey}')" class="text-[11px] uppercase tracking-wider text-red-400 hover:text-red-300 font-bold transition">${currentLang === 'ar' ? 'حذف' : 'Remove'}</button>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(div);
    });

    cartTotal.innerText = formatPrice(total);
    cartBadge.innerText = totalCount;
    cartBadge.classList.remove('scale-0');
}

function saveCart() {
    localStorage.setItem('vaneor_cart', JSON.stringify(cart));
}

function closeQuickViewModal() {
    modal.classList.add('opacity-0', 'pointer-events-none');
    modal.querySelector('#modal-content-box').classList.add('scale-95');
}

function openCheckoutModal() {
    let total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    checkoutTotalPrice.innerText = formatPrice(total);
    checkoutModal.classList.remove('opacity-0', 'pointer-events-none');
    checkoutModal.querySelector('.relative').classList.remove('scale-95');
}

function closeCheckoutModal() {
    checkoutModal.classList.add('opacity-0', 'pointer-events-none');
    checkoutModal.querySelector('.relative').classList.add('scale-95');
}

async function dispatchOrder(channel = 'gmail') {
    if (!orderForm.checkValidity()) {
        orderForm.reportValidity();
        return;
    }

    kachingAudio.play().catch(() => {});

    const name = document.getElementById('cust-name').value;
    const phone = document.getElementById('cust-phone').value;
    const email = document.getElementById('cust-email').value;
    const gov = document.getElementById('cust-gov').value;
    const city = document.getElementById('cust-city').value;
    const street = document.getElementById('cust-street').value;
    const building = document.getElementById('cust-building').value;
    const landmark = document.getElementById('cust-landmark').value || 'لا توجد';
    const paymentMethod = document.getElementById('cust-payment-method').value;

    let paymentText = (paymentMethod === 'cod') 
        ? 'الدفع نقداً عند الاستلام ومعاينة الطلب (Cash on Delivery)' 
        : `فودافون كاش (تم التحويل إلى محفظة المتجر: 01037668477 من رقم العميل: ${phone})`;

    let receiptNote = '';
    if (paymentMethod === 'vodafone') {
        const fileInput = document.getElementById('vodafone-receipt-file');
        if (fileInput && fileInput.files && fileInput.files[0]) {
            receiptNote = `📸 *إيصال التحويل:* قام العميل بإرفاق صورة الإيصال باسم (${fileInput.files[0].name})\n`;
        } else {
            receiptNote = `⚠️ *إيصال التحويل:* لم يرفق العميل صورة الإيصال.\n`;
        }
    }

    let text = `👑 *VANEOR WEAR - NEW OFFICIAL ORDER* 👑\n\n`;
    text += `👤 *الاسم بالكامل:* ${name}\n`;
    text += `📞 *رقم الهاتف:* ${phone}\n`;
    text += `📧 *البريد الإلكتروني:* ${email}\n`;
    text += `🏙️ *المحافظة:* ${gov}\n`;
    text += `🌆 *المدينة:* ${city}\n`;
    text += `🛣️ *اسم الشارع:* ${street}\n`;
    text += `🏠 *رقم المبنى والمنزل والشقة:* ${building}\n`;
    text += `📍 *علامة مميزة:* ${landmark}\n`;
    text += `💳 *طريقة الدفع:* ${paymentText}\n`;
    if (paymentMethod === 'vodafone') {
        text += `${receiptNote}`;
    }
    text += `🔤 *لغة المتجر:* ${currentLang.toUpperCase()}\n`;
    text += `🪪 *العملة المختارة:* ${currentCurr}\n\n`;
    text += `🛍️ *تفاصيل المنتجات المطلوبة:*\n`;

    let total = 0;
    cart.forEach((item, index) => {
        text += `\n📌 *المنتج رقم ${index + 1}:*\n`;
        text += `• *اسم المنتج:* ${item.name} (${item.category})\n`;
        text += `• *المقاس:* ${item.selectedSize}\n`;
        text += `• *الكمية:* ${item.quantity}\n`;
        text += `• *السعر:* ${formatPrice(item.price)} × ${item.quantity}\n`;
        total += item.price * item.quantity;
    });

    text += `\n💰 *المجموع الكلي:* ${formatPrice(total)}`;

    const activeSettings = JSON.parse(localStorage.getItem('vaneor_settings')) || defaultSettings;
    const targetEmail = activeSettings.email || "vaneor.wear@gmail.com";
    const targetWhatsapp = activeSettings.whatsapp || "201037664877";

    if (channel === 'whatsapp') {
        const waText = encodeURIComponent(text);
        pendingActionUrl = `https://wa.me/${targetWhatsapp}?text=${waText}`;
    } else {
        const subject = encodeURIComponent(`New Order from ${name} - VANEOR WEAR`);
        const body = encodeURIComponent(text);
        pendingActionUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${subject}&body=${body}`;
    }

    closeCheckoutModal();
    showCustomAlertModal(channel, paymentMethod === 'vodafone');
}

function createCustomAlertModal() {
    if (document.getElementById('custom-alert-modal')) return;

    const modalHtml = `
        <div id="custom-alert-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md opacity-0 pointer-events-none transition-opacity duration-300">
            <div class="bg-vaneor-navy border border-vaneor-camel/40 rounded-sm max-w-md w-full p-6 shadow-2xl text-center space-y-4" dir="rtl">
                <div class="text-vaneor-camel text-3xl"><i class="fa-solid fa-circle-check"></i></div>
                <h3 class="font-serif text-lg font-bold text-vaneor-cream">تأكيد توجيه الطلب</h3>
                <p id="custom-alert-text" class="text-xs text-gray-300 leading-relaxed font-light"></p>
                <button onclick="confirmCustomAlert()" class="w-full py-3 bg-vaneor-camel text-vaneor-dark font-bold uppercase tracking-widest text-xs hover:bg-white transition duration-300 shadow-xl">
                    موافق - إرسال الطلب الآن
                </button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function showCustomAlertModal(channel, hasVodafone) {
    const alertModal = document.getElementById('custom-alert-modal');
    const alertText = document.getElementById('custom-alert-text');

    let channelName = channel === 'whatsapp' ? 'WhatsApp' : 'Gmail';

    if (hasVodafone) {
        alertText.innerHTML = `تم تجهيز طلبك بنجاح! سيتم توجيهك الآن إلى <span dir="ltr">${channelName}</span>. <strong>يرجى التأكد من إرفاق صورة إيصال فودافون كاش في المحادثة</strong> لإتمام التأكيد.`;
    } else {
        alertText.innerHTML = `تم تجهيز تفاصيل طلبك بنجاح! سيتم فتح <span dir="ltr">${channelName}</span> الآن لإرسال الطلب فوراً.`;
    }

    alertModal.classList.remove('opacity-0', 'pointer-events-none');
}

function confirmCustomAlert() {
    const alertModal = document.getElementById('custom-alert-modal');
    alertModal.classList.add('opacity-0', 'pointer-events-none');

    if (pendingActionUrl) {
        window.open(pendingActionUrl, '_blank');
        pendingActionUrl = null;
    }

    orderForm.reset();
    document.getElementById('file-chosen-name').innerText = '';
    cart = [];
    saveCart();
    updateCartUI();
    showToast('تم إرسال الطلب بنجاح!');
}

function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = "bg-vaneor-navy border-l-4 border-vaneor-camel text-vaneor-cream px-6 py-4 shadow-2xl text-xs uppercase tracking-wider font-bold flex items-center justify-between animate-fade-in pointer-events-auto";
    toast.innerHTML = `<span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
