(() => {
  const STORE_KEY = "troro-site-content-v1";
  const ENQUIRY_KEY = "troro-site-enquiries-v1";
  const AUTH_KEY = "troro-admin-auth-v1";
  const ADMIN_PASSWORD = "troro-admin";

  const defaultData = {
    site: {
      brand: "TRORO",
      legalName: "TRORO INTERNATIONAL",
      description: "Premium surface protection products installed through authorised partners.",
      phone: "+91 98765 43210",
      email: "hello@trorointernational.com",
      address: "TRORO INTERNATIONAL, New Delhi, India",
      instagram: "https://www.instagram.com/",
      facebook: "https://www.facebook.com/",
      linkedin: "https://www.linkedin.com/",
      youtube: "https://www.youtube.com/"
    },
    seo: {
      title: "TRORO INTERNATIONAL | Paint Protection Film, Ceramic Coating, Window Film",
      description: "TRORO INTERNATIONAL supplies premium paint protection film, ceramic coating, window film, and authorised detailing studio products through certified partners.",
      keywords: "TRORO INTERNATIONAL, paint protection film, PPF, ceramic coating, automotive window film, authorised dealer, detailing studio, franchise, distributor",
      canonical: "https://www.trorointernational.com/",
      socialImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
      geoRegion: "IN-DL",
      geoPlacename: "New Delhi, India",
      latitude: "28.6139",
      longitude: "77.2090"
    },
    hero: [
      {
        eyebrow: "Protection without compromise",
        title: "TRORO protects the finish people notice first",
        copy: "Premium paint protection film, ceramic coating, and heat rejection films installed by authorised specialists.",
        buttonText: "Explore Products",
        buttonLink: "#products",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=85"
      },
      {
        eyebrow: "Authorised network",
        title: "Find certified TRORO partners near you",
        copy: "Dealers, distributors, franchise studios, and detailing studios can be managed directly from the admin dashboard.",
        buttonText: "Find Partners",
        buttonLink: "#locator",
        image: "https://images.unsplash.com/photo-1619767886558-efdc259b6e09?auto=format&fit=crop&w=1800&q=85"
      },
      {
        eyebrow: "Built for business",
        title: "Grow with exclusive TRORO products",
        copy: "Apply to become an authorised dealer, distributor, franchise partner, or exclusive detailing studio.",
        buttonText: "Apply Now",
        buttonLink: "#business",
        image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&w=1800&q=85"
      }
    ],
    coverage: [
      {
        title: "Automotive",
        copy: "Paint protection film, window film, ceramic coating, windshield film, and interiors.",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85",
        link: "#products"
      },
      {
        title: "Marine",
        copy: "Protection for marine glass, gelcoat, hull surfaces, and high UV environments.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
        link: "#products"
      },
      {
        title: "Architecture",
        copy: "Solar control, privacy, safety, and decorative window film for homes and offices.",
        image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=85",
        link: "#products"
      },
      {
        title: "Motorsport",
        copy: "Track-focused protection packages for high impact panels, glass, and interiors.",
        image: "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&w=1200&q=85",
        link: "#products"
      }
    ],
    products: [
      {
        title: "Paint Protection Film",
        category: "Protection Film",
        copy: "Self-healing clear film engineered to defend paint against chips, stains, swirls, and daily road impact.",
        image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=85",
        link: "#enquiry"
      },
      {
        title: "Automotive Window Film",
        category: "Window Film",
        copy: "Heat rejection and UV protection with a premium cabin look and clear outward visibility.",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=85",
        link: "#enquiry"
      },
      {
        title: "Ceramic Coating",
        category: "Surface Coating",
        copy: "Hydrophobic gloss protection that helps paint stay cleaner and easier to maintain.",
        image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=85",
        link: "#enquiry"
      },
      {
        title: "Windshield Protection",
        category: "Glass Film",
        copy: "Durable windshield film designed to reduce glass damage risk from debris and highway driving.",
        image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1200&q=85",
        link: "#enquiry"
      },
      {
        title: "Interior Protection",
        category: "Interior Film",
        copy: "Clear film for touchscreens, piano black trims, door sills, and high-contact interior surfaces.",
        image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=85",
        link: "#enquiry"
      }
    ],
    shop: [
      {
        name: "TRORO Ceramic Boost",
        price: "Catalogue on request",
        tag: "Maintenance",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=900&q=85"
      },
      {
        name: "TRORO PPF Cleaner",
        price: "Catalogue on request",
        tag: "Care",
        image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=900&q=85"
      },
      {
        name: "Installer Squeegee Kit",
        price: "Dealer supply",
        tag: "Installer",
        image: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=900&q=85"
      },
      {
        name: "Window Film Sample Book",
        price: "Partner kit",
        tag: "Sales",
        image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=900&q=85"
      }
    ],
    partners: [
      {
        id: "ptr-delhi",
        type: "Dealer",
        name: "TRORO Auto Shield Delhi",
        city: "New Delhi",
        state: "Delhi",
        country: "India",
        address: "South Delhi, New Delhi",
        phone: "+91 90000 11111",
        email: "delhi@troropartner.com",
        coverage: "PPF, ceramic coating, window film",
        authorizedSince: "2025",
        status: "Active"
      },
      {
        id: "ptr-mumbai",
        type: "Distributor",
        name: "TRORO West Distribution",
        city: "Mumbai",
        state: "Maharashtra",
        country: "India",
        address: "Andheri East, Mumbai",
        phone: "+91 90000 22222",
        email: "west@troropartner.com",
        coverage: "Regional stock and dealer supply",
        authorizedSince: "2025",
        status: "Active"
      },
      {
        id: "ptr-bengaluru",
        type: "Franchise",
        name: "TRORO Protection Studio Bengaluru",
        city: "Bengaluru",
        state: "Karnataka",
        country: "India",
        address: "Indiranagar, Bengaluru",
        phone: "+91 90000 33333",
        email: "blr@troropartner.com",
        coverage: "Premium installation studio",
        authorizedSince: "2026",
        status: "Active"
      },
      {
        id: "ptr-kochi",
        type: "Detailing Studio",
        name: "Precision Detail Works Kochi",
        city: "Kochi",
        state: "Kerala",
        country: "India",
        address: "Vyttila, Kochi",
        phone: "+91 90000 44444",
        email: "kochi@troropartner.com",
        coverage: "Exclusive TRORO detailing packages",
        authorizedSince: "2026",
        status: "Active"
      }
    ],
    articles: [
      {
        title: "How paint protection film protects daily driven cars",
        category: "Guide",
        copy: "A clear, direct explanation of PPF benefits, install zones, care, and expected maintenance.",
        image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=1200&q=85"
      },
      {
        title: "Choosing a ceramic coating package for Indian roads",
        category: "Care",
        copy: "What customers should know before selecting gloss, hydrophobic, and maintenance packages.",
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=85"
      },
      {
        title: "What makes a detailing studio authorised by TRORO",
        category: "Business",
        copy: "Training, product exclusivity, installation standards, and customer support expectations.",
        image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    faqs: [
      {
        question: "What does TRORO INTERNATIONAL provide?",
        answer: "TRORO INTERNATIONAL provides paint protection film, ceramic coating, automotive window film, windshield protection, interior film, and installer support through authorised partners."
      },
      {
        question: "How do I find an authorised TRORO dealer?",
        answer: "Use the Partner Locator section to filter authorised dealers, distributors, franchises, and detailing studios by type or city."
      },
      {
        question: "Can my studio become an authorised TRORO partner?",
        answer: "Yes. Submit the business application form and the admin team can review your territory, installation capability, training needs, and exclusive product commitment."
      },
      {
        question: "Do enquiries from the website appear in the admin dashboard?",
        answer: "Yes. Customer enquiries and business applications are saved in the Enquiries area of the admin panel for review, status updates, deletion, and export."
      },
      {
        question: "Can website images and text be edited without code?",
        answer: "Yes. The admin panel includes text fields and image upload controls for hero slides, products, partners, SEO fields, and content sections."
      }
    ]
  };

  let data = loadData();
  let enquiries = loadEnquiries();
  let activeSlide = 0;
  let activeAdminTab = "dashboard";
  let heroTimer = null;

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function loadData() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORE_KEY));
      return mergeDeep(clone(defaultData), saved || {});
    } catch (error) {
      return clone(defaultData);
    }
  }

  function loadEnquiries() {
    try {
      return JSON.parse(localStorage.getItem(ENQUIRY_KEY)) || [];
    } catch (error) {
      return [];
    }
  }

  function mergeDeep(base, incoming) {
    Object.keys(incoming || {}).forEach((key) => {
      if (Array.isArray(incoming[key])) {
        base[key] = incoming[key];
      } else if (incoming[key] && typeof incoming[key] === "object" && base[key]) {
        base[key] = mergeDeep(base[key], incoming[key]);
      } else if (incoming[key] !== undefined) {
        base[key] = incoming[key];
      }
    });
    return base;
  }

  function persistData() {
    localStorage.setItem(STORE_KEY, JSON.stringify(data));
  }

  function persistEnquiries() {
    localStorage.setItem(ENQUIRY_KEY, JSON.stringify(enquiries));
  }

  function uid(prefix = "id") {
    return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
  }

  function escapeHtml(value = "") {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function escapeAttr(value = "") {
    return escapeHtml(value).replaceAll("`", "&#096;");
  }

  function safeUrl(value = "#") {
    const url = String(value || "#").trim();
    if (/^(https?:|mailto:|tel:|#|\/)/i.test(url)) return url;
    return "#";
  }

  function cssUrl(value = "") {
    return `url("${String(value || "").replaceAll('"', "%22")}")`;
  }

  function getByPath(source, path) {
    return String(path).split(".").reduce((current, key) => current && current[key], source);
  }

  function setByPath(source, path, value) {
    const keys = String(path).split(".");
    const last = keys.pop();
    const target = keys.reduce((current, key) => current[key], source);
    target[last] = value;
  }

  function setMeta(selector, value, attribute = "content") {
    const node = $(selector);
    if (node) node.setAttribute(attribute, value || "");
  }

  function updateMetaAndSchema() {
    document.title = data.seo.title || defaultData.seo.title;
    setMeta('meta[name="description"]', data.seo.description);
    setMeta('meta[name="keywords"]', data.seo.keywords);
    setMeta('meta[name="author"]', data.site.legalName);
    setMeta('meta[name="geo.region"]', data.seo.geoRegion);
    setMeta('meta[name="geo.placename"]', data.seo.geoPlacename);
    setMeta('meta[name="ICBM"]', `${data.seo.latitude}, ${data.seo.longitude}`);
    setMeta('link[rel="canonical"]', safeUrl(data.seo.canonical), "href");
    setMeta('meta[property="og:title"]', data.seo.title);
    setMeta('meta[property="og:description"]', data.seo.description);
    setMeta('meta[property="og:url"]', safeUrl(data.seo.canonical));
    setMeta('meta[property="og:image"]', safeUrl(data.seo.socialImage));
    setMeta('meta[name="twitter:title"]', data.seo.title);
    setMeta('meta[name="twitter:description"]', data.seo.description);
    setMeta('meta[name="twitter:image"]', safeUrl(data.seo.socialImage));

    const activePartners = data.partners.filter((partner) => partner.status !== "Inactive");
    const schema = [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: data.site.legalName,
        alternateName: data.site.brand,
        url: safeUrl(data.seo.canonical),
        logo: safeUrl(data.seo.socialImage),
        email: data.site.email,
        telephone: data.site.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: data.site.address,
          addressLocality: data.seo.geoPlacename,
          addressCountry: "IN"
        },
        sameAs: [data.site.instagram, data.site.facebook, data.site.linkedin, data.site.youtube].filter(Boolean).map(safeUrl)
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: data.site.legalName,
        url: safeUrl(data.seo.canonical),
        potentialAction: {
          "@type": "SearchAction",
          target: `${safeUrl(data.seo.canonical)}?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      },
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "TRORO products",
        itemListElement: data.products.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Product",
            name: product.title,
            category: product.category,
            description: product.copy,
            image: safeUrl(product.image),
            brand: {
              "@type": "Brand",
              name: data.site.brand
            },
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceCurrency: "INR",
              price: "0",
              url: safeUrl(data.seo.canonical)
            }
          }
        }))
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: safeUrl(data.seo.canonical) },
          { "@type": "ListItem", position: 2, name: "Products", item: `${safeUrl(data.seo.canonical)}#products` },
          { "@type": "ListItem", position: 3, name: "Authorised Partners", item: `${safeUrl(data.seo.canonical)}#locator` }
        ]
      },
      ...activePartners.map((partner) => ({
        "@context": "https://schema.org",
        "@type": "AutomotiveBusiness",
        name: partner.name,
        branchOf: { "@type": "Organization", name: data.site.legalName },
        address: {
          "@type": "PostalAddress",
          streetAddress: partner.address,
          addressLocality: partner.city,
          addressRegion: partner.state,
          addressCountry: partner.country
        },
        telephone: partner.phone,
        email: partner.email,
        areaServed: `${partner.city}, ${partner.state}`,
        makesOffer: partner.coverage
      }))
    ];

    $("#structured-data").textContent = JSON.stringify(schema, null, 2);
  }

  function renderHero() {
    if (!data.hero.length) data.hero = clone(defaultData.hero);
    const slide = data.hero[activeSlide % data.hero.length];
    const media = $("[data-hero-media]");
    media.style.setProperty("--hero-image", cssUrl(slide.image));
    $("[data-hero-eyebrow]").textContent = slide.eyebrow || "";
    $("[data-hero-title]").textContent = slide.title || "";
    $("[data-hero-copy]").textContent = slide.copy || "";
    const button = $("[data-hero-button]");
    button.textContent = slide.buttonText || "Learn More";
    button.href = safeUrl(slide.buttonLink);
    $("[data-hero-controls]").innerHTML = data.hero.map((_, index) => (
      `<button class="hero-dot${index === activeSlide ? " active" : ""}" type="button" aria-label="Go to slide ${index + 1}" data-slide="${index}"></button>`
    )).join("");
  }

  function renderPublic() {
    $("[data-brand-name]").textContent = data.site.brand;
    $("[data-footer-brand]").textContent = data.site.brand;
    $("[data-footer-description]").textContent = data.site.description;
    $("[data-social-instagram]").href = safeUrl(data.site.instagram);
    $("[data-social-facebook]").href = safeUrl(data.site.facebook);
    $("[data-social-linkedin]").href = safeUrl(data.site.linkedin);
    $("[data-social-youtube]").href = safeUrl(data.site.youtube);

    renderHero();
    renderCoverage();
    renderProducts();
    renderShop();
    renderPartners();
    renderArticles();
    renderFaqs();
    updateMetaAndSchema();
  }

  function renderCoverage() {
    $("[data-coverage-grid]").innerHTML = data.coverage.map((item) => `
      <a class="category-card" href="${escapeAttr(safeUrl(item.link))}" data-bg="${escapeAttr(item.image)}">
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.copy)}</p>
      </a>
    `).join("");
    applyBackgrounds();
  }

  function renderProducts() {
    $("[data-products-grid]").innerHTML = data.products.map((product) => `
      <a class="product-card" href="${escapeAttr(safeUrl(product.link))}">
        <div class="card-media" data-bg="${escapeAttr(product.image)}"></div>
        <div class="card-body">
          <span class="tag">${escapeHtml(product.category)}</span>
          <h3>${escapeHtml(product.title)}</h3>
          <p>${escapeHtml(product.copy)}</p>
        </div>
      </a>
    `).join("");
    applyBackgrounds();
  }

  function renderShop() {
    $("[data-shop-grid]").innerHTML = data.shop.map((item) => `
      <article class="shop-card">
        <div class="card-media" data-bg="${escapeAttr(item.image)}"></div>
        <div class="card-body">
          <span class="tag">${escapeHtml(item.tag)}</span>
          <h3>${escapeHtml(item.name)}</h3>
          <p class="price">${escapeHtml(item.price)}</p>
        </div>
      </article>
    `).join("");
    applyBackgrounds();
  }

  function renderPartners() {
    const form = $("[data-locator-filters]");
    const type = form ? form.elements.type.value.toLowerCase() : "";
    const city = form ? form.elements.city.value.toLowerCase() : "";
    const partners = data.partners.filter((partner) => {
      const typeMatch = !type || partner.type.toLowerCase() === type;
      const cityHaystack = `${partner.city} ${partner.state} ${partner.country} ${partner.name}`.toLowerCase();
      const cityMatch = !city || cityHaystack.includes(city);
      return typeMatch && cityMatch && partner.status !== "Inactive";
    });
    $("[data-partner-list]").innerHTML = partners.length ? partners.map((partner) => `
      <article class="partner-card">
        <span class="tag">${escapeHtml(partner.type)}</span>
        <h3>${escapeHtml(partner.name)}</h3>
        <div class="partner-meta">
          <span>${escapeHtml(partner.city)}, ${escapeHtml(partner.state)}</span>
          <span>Since ${escapeHtml(partner.authorizedSince)}</span>
        </div>
        <p>${escapeHtml(partner.coverage)}</p>
        <p>${escapeHtml(partner.address)}</p>
        <a class="text-link" href="mailto:${escapeAttr(partner.email)}">${escapeHtml(partner.email)}</a>
      </article>
    `).join("") : `<div class="empty-state">No authorised partner matches this filter yet.</div>`;
  }

  function renderArticles() {
    $("[data-article-grid]").innerHTML = data.articles.map((article) => `
      <article class="article-card">
        <div class="card-media" data-bg="${escapeAttr(article.image)}"></div>
        <div class="card-body">
          <span class="tag">${escapeHtml(article.category)}</span>
          <h3>${escapeHtml(article.title)}</h3>
          <p>${escapeHtml(article.copy)}</p>
        </div>
      </article>
    `).join("");
    applyBackgrounds();
  }

  function renderFaqs() {
    $("[data-faq-list]").innerHTML = data.faqs.map((faq, index) => `
      <details ${index === 0 ? "open" : ""}>
        <summary>${escapeHtml(faq.question)}</summary>
        <p>${escapeHtml(faq.answer)}</p>
      </details>
    `).join("");
  }

  function applyBackgrounds() {
    $$("[data-bg]").forEach((node) => {
      node.style.setProperty("--image", cssUrl(node.dataset.bg));
    });
  }

  function renderSearch(term = "") {
    const query = term.trim().toLowerCase();
    const resultsBox = $("[data-search-results]");
    if (!query) {
      resultsBox.innerHTML = `<div class="empty-state">Type to search products, partners, articles, and FAQs.</div>`;
      return;
    }
    const results = [
      ...data.products.map((item) => ({ title: item.title, body: item.copy, href: "#products", type: "Product" })),
      ...data.partners.map((item) => ({ title: item.name, body: `${item.type} in ${item.city}`, href: "#locator", type: "Partner" })),
      ...data.articles.map((item) => ({ title: item.title, body: item.copy, href: "#stories", type: "Article" })),
      ...data.faqs.map((item) => ({ title: item.question, body: item.answer, href: "#resources", type: "FAQ" }))
    ].filter((item) => `${item.title} ${item.body} ${item.type}`.toLowerCase().includes(query)).slice(0, 10);

    resultsBox.innerHTML = results.length ? results.map((item) => `
      <a href="${escapeAttr(item.href)}" data-search-result>
        <span class="tag">${escapeHtml(item.type)}</span>
        <strong>${escapeHtml(item.title)}</strong>
        <p>${escapeHtml(item.body)}</p>
      </a>
    `).join("") : `<div class="empty-state">No result found for "${escapeHtml(term)}".</div>`;
  }

  function addEnquiry(kind, fields) {
    enquiries.unshift({
      id: uid("enq"),
      kind,
      status: "New",
      createdAt: new Date().toISOString(),
      ...fields
    });
    persistEnquiries();
    if (location.hash === "#admin") renderAdmin();
  }

  function route() {
    const adminMode = location.hash === "#admin";
    $("[data-public-site]").hidden = adminMode;
    $("[data-admin-shell]").hidden = !adminMode;
    $(".site-footer").hidden = adminMode;
    $("[data-masthead]").classList.toggle("admin-mode", adminMode);
    if (adminMode) renderAdmin();
    closeSearch();
  }

  function renderAdmin() {
    const loggedIn = localStorage.getItem(AUTH_KEY) === "1";
    $("[data-admin-login]").hidden = loggedIn;
    $("[data-admin-app]").hidden = !loggedIn;
    if (!loggedIn) return;
    $$("[data-admin-tab]").forEach((button) => button.classList.toggle("active", button.dataset.adminTab === activeAdminTab));
    const main = $("[data-admin-main]");
    const sections = {
      dashboard: renderDashboard,
      content: renderContentAdmin,
      partners: renderPartnersAdmin,
      enquiries: renderEnquiriesAdmin,
      products: renderProductsAdmin,
      seo: renderSeoAdmin
    };
    main.innerHTML = sections[activeAdminTab]();
  }

  function adminHeading(title, action = "") {
    return `
      <div class="admin-heading">
        <div>
          <p class="eyebrow">Admin Panel</p>
          <h1>${escapeHtml(title)}</h1>
        </div>
        ${action}
      </div>
    `;
  }

  function renderDashboard() {
    const newCount = enquiries.filter((item) => item.status === "New").length;
    const applicants = enquiries.filter((item) => item.kind === "Business Application").length;
    return `
      ${adminHeading("Dashboard", `<a class="ghost-button" href="#home">Preview Website</a>`)}
      <div class="admin-grid">
        <article class="admin-card"><strong>${data.partners.length}</strong><span>Authorised partners</span></article>
        <article class="admin-card"><strong>${enquiries.length}</strong><span>Total enquiries</span></article>
        <article class="admin-card"><strong>${newCount}</strong><span>New enquiries</span></article>
        <article class="admin-card"><strong>${applicants}</strong><span>Business applications</span></article>
      </div>
      <div class="admin-panel">
        <h2>Recent enquiries</h2>
        ${renderEnquiryTable(enquiries.slice(0, 5))}
      </div>
      <div class="admin-panel">
        <h2>Optimization checklist included</h2>
        <div class="schema-list">
          <article><strong>SEO</strong><p>Editable title, meta description, keywords, canonical, robots, clean headings, and responsive layout.</p></article>
          <article><strong>GEO</strong><p>Entity-first content, structured answers, service areas, partner entities, and location metadata.</p></article>
          <article><strong>AEO</strong><p>FAQ schema, direct answer sections, product summaries, and search-ready content blocks.</p></article>
          <article><strong>Social</strong><p>Open Graph and Twitter card fields with editable social image.</p></article>
          <article><strong>Schema</strong><p>Organization, WebSite, FAQPage, BreadcrumbList, ItemList, Product, and AutomotiveBusiness schemas.</p></article>
          <article><strong>Admin</strong><p>No-code text edits, image uploads, partner management, enquiry review, and CSV export.</p></article>
        </div>
      </div>
    `;
  }

  function renderContentAdmin() {
    return `
      ${adminHeading("Content")}
      <div class="admin-panel">
        <h2>Brand and contact</h2>
        <form class="admin-form" data-save-form>
          ${inputField("Brand name", "site.brand", data.site.brand)}
          ${inputField("Legal name", "site.legalName", data.site.legalName)}
          ${inputField("Phone", "site.phone", data.site.phone)}
          ${inputField("Email", "site.email", data.site.email)}
          ${textareaField("Footer description", "site.description", data.site.description, "full")}
          ${textareaField("Address", "site.address", data.site.address, "full")}
          ${inputField("Instagram URL", "site.instagram", data.site.instagram)}
          ${inputField("Facebook URL", "site.facebook", data.site.facebook)}
          ${inputField("LinkedIn URL", "site.linkedin", data.site.linkedin)}
          ${inputField("YouTube URL", "site.youtube", data.site.youtube)}
          <button class="primary-button full" type="submit">Save Content</button>
        </form>
      </div>
      <div class="admin-panel">
        <h2>Hero slides</h2>
        <div class="admin-list">
          ${data.hero.map((slide, index) => editableHero(slide, index)).join("")}
        </div>
        <button class="ghost-button" type="button" data-add-hero>Add Hero Slide</button>
      </div>
    `;
  }

  function renderPartnersAdmin() {
    return `
      ${adminHeading("Partners")}
      <div class="admin-panel">
        <h2>Add authorised partner</h2>
        <form class="admin-form" data-add-partner>
          <label>Type${selectHtml("type", ["Dealer", "Distributor", "Franchise", "Detailing Studio"])}</label>
          <label>Name<input name="name" required></label>
          <label>City<input name="city" required></label>
          <label>State<input name="state" required></label>
          <label>Country<input name="country" value="India"></label>
          <label>Phone<input name="phone"></label>
          <label>Email<input name="email" type="email"></label>
          <label>Authorised since<input name="authorizedSince" value="${new Date().getFullYear()}"></label>
          <label class="full">Address<textarea name="address" rows="2"></textarea></label>
          <label class="full">Coverage<textarea name="coverage" rows="2" placeholder="PPF, coating, window film"></textarea></label>
          <button class="primary-button full" type="submit">Add Partner</button>
        </form>
      </div>
      <div class="admin-panel">
        <h2>Manage authorised partners</h2>
        <div class="admin-list">
          ${data.partners.map((partner, index) => editablePartner(partner, index)).join("")}
        </div>
      </div>
    `;
  }

  function renderEnquiriesAdmin() {
    return `
      ${adminHeading("Enquiries", `<button class="ghost-button" type="button" data-export-enquiries>Export CSV</button>`)}
      <div class="admin-panel">
        <h2>Website enquiries and applications</h2>
        ${renderEnquiryTable(enquiries)}
      </div>
    `;
  }

  function renderProductsAdmin() {
    return `
      ${adminHeading("Products")}
      <div class="admin-panel">
        <h2>Add product</h2>
        <form class="admin-form" data-add-product>
          <label>Product name<input name="title" required></label>
          <label>Category<input name="category" required></label>
          <label>Link<input name="link" value="#enquiry"></label>
          <label>Image URL<input name="image"></label>
          <label class="full">Description<textarea name="copy" rows="3" required></textarea></label>
          <button class="primary-button full" type="submit">Add Product</button>
        </form>
      </div>
      <div class="admin-panel">
        <h2>Product cards</h2>
        <div class="admin-list">${data.products.map((product, index) => editableProduct(product, index)).join("")}</div>
      </div>
      <div class="admin-panel">
        <h2>Coverage cards</h2>
        <div class="admin-list">${data.coverage.map((item, index) => editableCoverage(item, index)).join("")}</div>
        <button class="ghost-button" type="button" data-add-coverage>Add Coverage Card</button>
      </div>
      <div class="admin-panel">
        <h2>Shop items</h2>
        <div class="admin-list">${data.shop.map((item, index) => editableShop(item, index)).join("")}</div>
        <button class="ghost-button" type="button" data-add-shop>Add Shop Item</button>
      </div>
    `;
  }

  function renderSeoAdmin() {
    return `
      ${adminHeading("SEO + Schema")}
      <div class="admin-panel">
        <h2>Search and social fields</h2>
        <form class="admin-form" data-save-form>
          ${inputField("SEO title", "seo.title", data.seo.title, "full")}
          ${textareaField("Meta description", "seo.description", data.seo.description, "full")}
          ${textareaField("Keywords", "seo.keywords", data.seo.keywords, "full")}
          ${inputField("Canonical URL", "seo.canonical", data.seo.canonical)}
          ${inputField("Social share image URL", "seo.socialImage", data.seo.socialImage)}
          ${fileField("Upload social image", "seo.socialImage")}
          ${inputField("Geo region", "seo.geoRegion", data.seo.geoRegion)}
          ${inputField("Geo place name", "seo.geoPlacename", data.seo.geoPlacename)}
          ${inputField("Latitude", "seo.latitude", data.seo.latitude)}
          ${inputField("Longitude", "seo.longitude", data.seo.longitude)}
          <button class="primary-button full" type="submit">Save SEO Fields</button>
        </form>
      </div>
      <div class="admin-panel">
        <h2>Structured data active on the website</h2>
        <div class="schema-list">
          <article><strong>Organization</strong><p>Brand entity, contact details, logo, address, and social profiles.</p></article>
          <article><strong>WebSite</strong><p>SearchAction schema for website search discovery.</p></article>
          <article><strong>FAQPage</strong><p>Answer-engine friendly questions and answers.</p></article>
          <article><strong>Product</strong><p>Products rendered from the editable products list.</p></article>
          <article><strong>AutomotiveBusiness</strong><p>Authorised partner entities rendered from the partner directory.</p></article>
          <article><strong>BreadcrumbList</strong><p>Clear page hierarchy for search systems.</p></article>
        </div>
      </div>
      <div class="admin-panel">
        <h2>FAQ answers</h2>
        <div class="admin-list">${data.faqs.map((faq, index) => editableFaq(faq, index)).join("")}</div>
        <button class="ghost-button" type="button" data-add-faq>Add FAQ</button>
      </div>
      <div class="admin-panel">
        <h2>Article cards</h2>
        <div class="admin-list">${data.articles.map((article, index) => editableArticle(article, index)).join("")}</div>
        <button class="ghost-button" type="button" data-add-article>Add Article</button>
      </div>
    `;
  }

  function inputField(label, path, value, extraClass = "") {
    return `<label class="${extraClass}">${escapeHtml(label)}<input data-path="${escapeAttr(path)}" value="${escapeAttr(value)}"></label>`;
  }

  function textareaField(label, path, value, extraClass = "") {
    return `<label class="${extraClass}">${escapeHtml(label)}<textarea data-path="${escapeAttr(path)}" rows="3">${escapeHtml(value)}</textarea></label>`;
  }

  function fileField(label, path, extraClass = "") {
    return `<label class="${extraClass}">${escapeHtml(label)}<input type="file" accept="image/*" data-image-path="${escapeAttr(path)}"></label>`;
  }

  function selectHtml(name, options, selected = "") {
    return `<select name="${escapeAttr(name)}">${options.map((option) => `<option ${option === selected ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}</select>`;
  }

  function editableHero(slide, index) {
    return `
      <article class="editable-row">
        <div class="editable-fields">
          ${inputField("Eyebrow", `hero.${index}.eyebrow`, slide.eyebrow)}
          ${inputField("Button text", `hero.${index}.buttonText`, slide.buttonText)}
          ${inputField("Title", `hero.${index}.title`, slide.title, "full")}
          ${textareaField("Copy", `hero.${index}.copy`, slide.copy, "full")}
          ${inputField("Button link", `hero.${index}.buttonLink`, slide.buttonLink)}
          ${inputField("Image URL", `hero.${index}.image`, slide.image)}
          ${fileField("Upload image", `hero.${index}.image`, "full")}
        </div>
        <button class="danger-button" type="button" data-delete-hero="${index}">Delete</button>
      </article>
    `;
  }

  function editablePartner(partner, index) {
    return `
      <article class="editable-row">
        <div class="editable-fields">
          <label>Type${selectInline(`partners.${index}.type`, ["Dealer", "Distributor", "Franchise", "Detailing Studio"], partner.type)}</label>
          ${inputField("Name", `partners.${index}.name`, partner.name)}
          ${inputField("City", `partners.${index}.city`, partner.city)}
          ${inputField("State", `partners.${index}.state`, partner.state)}
          ${inputField("Country", `partners.${index}.country`, partner.country)}
          ${inputField("Phone", `partners.${index}.phone`, partner.phone)}
          ${inputField("Email", `partners.${index}.email`, partner.email)}
          ${inputField("Authorised since", `partners.${index}.authorizedSince`, partner.authorizedSince)}
          <label>Status${selectInline(`partners.${index}.status`, ["Active", "Inactive"], partner.status)}</label>
          ${textareaField("Address", `partners.${index}.address`, partner.address, "full")}
          ${textareaField("Coverage", `partners.${index}.coverage`, partner.coverage, "full")}
        </div>
        <button class="danger-button" type="button" data-delete-partner="${index}">Delete</button>
      </article>
    `;
  }

  function editableProduct(product, index) {
    return `
      <article class="editable-row">
        <div class="editable-fields">
          ${inputField("Title", `products.${index}.title`, product.title)}
          ${inputField("Category", `products.${index}.category`, product.category)}
          ${inputField("Link", `products.${index}.link`, product.link)}
          ${inputField("Image URL", `products.${index}.image`, product.image)}
          ${fileField("Upload image", `products.${index}.image`, "full")}
          ${textareaField("Description", `products.${index}.copy`, product.copy, "full")}
        </div>
        <button class="danger-button" type="button" data-delete-product="${index}">Delete</button>
      </article>
    `;
  }

  function editableCoverage(item, index) {
    return `
      <article class="editable-row">
        <div class="editable-fields">
          ${inputField("Title", `coverage.${index}.title`, item.title)}
          ${inputField("Link", `coverage.${index}.link`, item.link)}
          ${inputField("Image URL", `coverage.${index}.image`, item.image)}
          ${fileField("Upload image", `coverage.${index}.image`)}
          ${textareaField("Copy", `coverage.${index}.copy`, item.copy, "full")}
        </div>
        <button class="danger-button" type="button" data-delete-coverage="${index}">Delete</button>
      </article>
    `;
  }

  function editableShop(item, index) {
    return `
      <article class="editable-row">
        <div class="editable-fields">
          ${inputField("Name", `shop.${index}.name`, item.name)}
          ${inputField("Price", `shop.${index}.price`, item.price)}
          ${inputField("Tag", `shop.${index}.tag`, item.tag)}
          ${inputField("Image URL", `shop.${index}.image`, item.image)}
          ${fileField("Upload image", `shop.${index}.image`, "full")}
        </div>
        <button class="danger-button" type="button" data-delete-shop="${index}">Delete</button>
      </article>
    `;
  }

  function editableFaq(faq, index) {
    return `
      <article class="editable-row">
        <div class="editable-fields">
          ${inputField("Question", `faqs.${index}.question`, faq.question, "full")}
          ${textareaField("Answer", `faqs.${index}.answer`, faq.answer, "full")}
        </div>
        <button class="danger-button" type="button" data-delete-faq="${index}">Delete</button>
      </article>
    `;
  }

  function editableArticle(article, index) {
    return `
      <article class="editable-row">
        <div class="editable-fields">
          ${inputField("Title", `articles.${index}.title`, article.title)}
          ${inputField("Category", `articles.${index}.category`, article.category)}
          ${inputField("Image URL", `articles.${index}.image`, article.image)}
          ${fileField("Upload image", `articles.${index}.image`)}
          ${textareaField("Copy", `articles.${index}.copy`, article.copy, "full")}
        </div>
        <button class="danger-button" type="button" data-delete-article="${index}">Delete</button>
      </article>
    `;
  }

  function selectInline(path, options, selected) {
    return `<select data-path="${escapeAttr(path)}">${options.map((option) => `<option ${option === selected ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}</select>`;
  }

  function renderEnquiryTable(items) {
    if (!items.length) return `<div class="empty-state">No enquiries yet. Submissions from the public forms will appear here.</div>`;
    return `
      <table class="admin-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Message</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${items.map((item) => `
            <tr>
              <td>${escapeHtml(new Date(item.createdAt).toLocaleString())}</td>
              <td>${escapeHtml(item.kind)}${item.applicantType ? `<br><span class="tag">${escapeHtml(item.applicantType)}</span>` : ""}</td>
              <td>${escapeHtml(item.name || item.businessName || "")}<br>${escapeHtml(item.city || "")}</td>
              <td>${escapeHtml(item.email || "")}<br>${escapeHtml(item.phone || "")}</td>
              <td>${escapeHtml(item.message || item.interest || "")}</td>
              <td>${selectEnquiryStatus(item.id, item.status)}</td>
              <td><button class="danger-button" type="button" data-delete-enquiry="${escapeAttr(item.id)}">Delete</button></td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `;
  }

  function selectEnquiryStatus(id, status) {
    return `<select data-enquiry-status="${escapeAttr(id)}">${["New", "Contacted", "Qualified", "Closed"].map((option) => `<option ${option === status ? "selected" : ""}>${option}</option>`).join("")}</select>`;
  }

  function serializeForm(form) {
    return Object.fromEntries(new FormData(form).entries());
  }

  function closeSearch() {
    const panel = $("[data-search-panel]");
    panel.hidden = true;
    document.body.classList.remove("no-scroll");
  }

  function exportEnquiries() {
    const headers = ["Date", "Type", "Status", "Name", "Business", "Email", "Phone", "City", "Interest", "Message"];
    const rows = enquiries.map((item) => [
      item.createdAt,
      item.kind,
      item.status,
      item.name || "",
      item.businessName || "",
      item.email || "",
      item.phone || "",
      item.city || "",
      item.interest || item.applicantType || "",
      item.message || ""
    ]);
    const csv = [headers, ...rows].map((row) => row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `troro-enquiries-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  }

  function startHeroTimer() {
    clearInterval(heroTimer);
    heroTimer = setInterval(() => {
      if (location.hash === "#admin" || document.hidden) return;
      activeSlide = (activeSlide + 1) % data.hero.length;
      renderHero();
    }, 6500);
  }

  document.addEventListener("click", (event) => {
    const slideButton = event.target.closest("[data-slide]");
    if (slideButton) {
      activeSlide = Number(slideButton.dataset.slide);
      renderHero();
      startHeroTimer();
      return;
    }

    if (event.target.closest("[data-search-open]")) {
      $("[data-search-panel]").hidden = false;
      document.body.classList.add("no-scroll");
      renderSearch();
      setTimeout(() => $("[data-search-input]").focus(), 20);
      return;
    }

    if (event.target.closest("[data-search-close]") || event.target.closest("[data-search-result]")) {
      closeSearch();
      return;
    }

    const tabButton = event.target.closest("[data-admin-tab]");
    if (tabButton) {
      activeAdminTab = tabButton.dataset.adminTab;
      renderAdmin();
      return;
    }

    if (event.target.closest("[data-admin-logout]")) {
      localStorage.removeItem(AUTH_KEY);
      renderAdmin();
      return;
    }

    if (event.target.closest("[data-export-enquiries]")) {
      exportEnquiries();
      return;
    }

    handleArrayActions(event);
  });

  document.addEventListener("input", (event) => {
    if (event.target.matches("[data-search-input]")) renderSearch(event.target.value);
  });

  document.addEventListener("change", (event) => {
    const pathInput = event.target.closest("[data-path]");
    if (pathInput) {
      setByPath(data, pathInput.dataset.path, pathInput.value);
      persistData();
      renderPublic();
      return;
    }

    const statusInput = event.target.closest("[data-enquiry-status]");
    if (statusInput) {
      const item = enquiries.find((entry) => entry.id === statusInput.dataset.enquiryStatus);
      if (item) {
        item.status = statusInput.value;
        persistEnquiries();
      }
      return;
    }

    const imageInput = event.target.closest("[data-image-path]");
    if (imageInput && imageInput.files && imageInput.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setByPath(data, imageInput.dataset.imagePath, reader.result);
        persistData();
        renderPublic();
        renderAdmin();
      };
      reader.readAsDataURL(imageInput.files[0]);
    }
  });

  document.addEventListener("submit", (event) => {
    const form = event.target;

    if (form.matches("[data-login-form]")) {
      event.preventDefault();
      const password = new FormData(form).get("password");
      if (password === ADMIN_PASSWORD) {
        localStorage.setItem(AUTH_KEY, "1");
        form.reset();
        renderAdmin();
      } else {
        $("[data-login-status]").textContent = "Incorrect password.";
      }
      return;
    }

    if (form.matches("[data-enquiry-form]")) {
      event.preventDefault();
      addEnquiry("Customer Enquiry", serializeForm(form));
      form.reset();
      $("[data-customer-status]").textContent = "Enquiry saved. TRORO will contact you soon.";
      return;
    }

    if (form.matches("[data-application-form]")) {
      event.preventDefault();
      addEnquiry("Business Application", serializeForm(form));
      form.reset();
      $("[data-application-status]").textContent = "Application saved for admin review.";
      return;
    }

    if (form.matches("[data-save-form]")) {
      event.preventDefault();
      persistData();
      renderPublic();
      renderAdmin();
      return;
    }

    if (form.matches("[data-add-partner]")) {
      event.preventDefault();
      data.partners.push({ id: uid("ptr"), status: "Active", ...serializeForm(form) });
      persistData();
      form.reset();
      renderPublic();
      renderAdmin();
      return;
    }

    if (form.matches("[data-add-product]")) {
      event.preventDefault();
      data.products.push(serializeForm(form));
      persistData();
      form.reset();
      renderPublic();
      renderAdmin();
    }
  });

  $("[data-locator-filters]").addEventListener("input", renderPartners);
  $("[data-locator-filters]").addEventListener("change", renderPartners);

  $("[data-menu-toggle]").addEventListener("click", () => {
    const nav = $("#primary-nav");
    const open = !nav.classList.contains("open");
    nav.classList.toggle("open", open);
    $("[data-menu-toggle]").setAttribute("aria-expanded", String(open));
  });

  window.addEventListener("scroll", () => {
    $("[data-masthead]").classList.toggle("scrolled", window.scrollY > 30);
  }, { passive: true });

  window.addEventListener("hashchange", route);

  function handleArrayActions(event) {
    const actionMap = [
      ["data-delete-hero", () => data.hero, (arr, index) => arr.splice(index, 1)],
      ["data-delete-partner", () => data.partners, (arr, index) => arr.splice(index, 1)],
      ["data-delete-product", () => data.products, (arr, index) => arr.splice(index, 1)],
      ["data-delete-coverage", () => data.coverage, (arr, index) => arr.splice(index, 1)],
      ["data-delete-shop", () => data.shop, (arr, index) => arr.splice(index, 1)],
      ["data-delete-faq", () => data.faqs, (arr, index) => arr.splice(index, 1)],
      ["data-delete-article", () => data.articles, (arr, index) => arr.splice(index, 1)]
    ];

    for (const [attribute, getArray, action] of actionMap) {
      const node = event.target.closest(`[${attribute}]`);
      if (node) {
        action(getArray(), Number(node.getAttribute(attribute)));
        if (!data.hero.length) data.hero.push(clone(defaultData.hero[0]));
        activeSlide = Math.min(activeSlide, data.hero.length - 1);
        persistData();
        renderPublic();
        renderAdmin();
        return;
      }
    }

    const deleteEnquiry = event.target.closest("[data-delete-enquiry]");
    if (deleteEnquiry) {
      enquiries = enquiries.filter((item) => item.id !== deleteEnquiry.dataset.deleteEnquiry);
      persistEnquiries();
      renderAdmin();
      return;
    }

    if (event.target.closest("[data-add-hero]")) {
      data.hero.push({
        eyebrow: "New TRORO story",
        title: "Add your headline",
        copy: "Add supporting copy for this hero slide.",
        buttonText: "Learn More",
        buttonLink: "#enquiry",
        image: data.seo.socialImage
      });
      persistData();
      renderPublic();
      renderAdmin();
      return;
    }

    if (event.target.closest("[data-add-coverage]")) {
      data.coverage.push({
        title: "New Coverage",
        copy: "Describe this coverage area.",
        image: data.seo.socialImage,
        link: "#products"
      });
      persistData();
      renderPublic();
      renderAdmin();
      return;
    }

    if (event.target.closest("[data-add-shop]")) {
      data.shop.push({
        name: "New Product",
        price: "Catalogue on request",
        tag: "New",
        image: data.seo.socialImage
      });
      persistData();
      renderPublic();
      renderAdmin();
      return;
    }

    if (event.target.closest("[data-add-faq]")) {
      data.faqs.push({
        question: "Add a customer question",
        answer: "Add a clear, direct answer."
      });
      persistData();
      renderPublic();
      renderAdmin();
      return;
    }

    if (event.target.closest("[data-add-article]")) {
      data.articles.push({
        title: "New article",
        category: "Guide",
        copy: "Add article summary copy.",
        image: data.seo.socialImage
      });
      persistData();
      renderPublic();
      renderAdmin();
    }
  }

  renderPublic();
  route();
  startHeroTimer();
})();
