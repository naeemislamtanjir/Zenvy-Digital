const navLinks = [
  ["Home", "#"], ["Services", "#services"], ["Portfolio", "#portfolio"],
  ["Impact", "#impact"], ["Reviews", "#reviews"], ["Team", "#team"], ["Contact", "#contact"]
];

const clients = ["VISION PLUS","THE NORD MALL","CHANDARIA IND","OILYSSA","LIMOHAWK","UPFIT GYM","BUTTERFLY PROPERTIES","WESTEEN"];

const projects = [
  { title:"THE NORD MALL", category:"Digital Branding", image:"https://images.unsplash.com/photo-1634942537034-2531766767d7?q=80&w=1000&auto=format&fit=crop" },
  { title:"OILYSSA", category:"Web Engineering", image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" },
  { title:"LIMOHAWK", category:"Visual Identity", image:"https://images.unsplash.com/photo-1600508774444-455b23bb2a12?q=80&w=1000&auto=format&fit=crop" },
  { title:"WESTEEN", category:"Growth Marketing", image:"https://images.unsplash.com/photo-1551288049-bbbda5366a71?q=80&w=1000&auto=format&fit=crop" }
];

const services = [
  ["01","Graphic Design","High-end visual communication that defines your brand identity and aesthetic.","palette",["Logo & Branding","Marketing Assets","Social Media Graphics"]],
  ["02","Video Production","Premium video content that tells your brand story and captures attention instantly.","video",["Ad Creatives","Corporate Films","Motion Graphics"]],
  ["03","Web & App Development","Custom-coded digital solutions designed for speed, security, and conversion.","code-2",["React/Next.js","E-commerce","User Experience"]],
  ["04","Social Media Branding","Building a high-authority presence across Instagram, TikTok, and LinkedIn.","share-2",["Visual Identity","Engagement Strategy","Content Calendar"]],
  ["05","Growth Marketing","High-performance paid ads focused on aggressive scaling and high ROI.","bar-chart-3",["Meta Ads","Google PPC","Sales Funnels"]],
  ["06","SEO Domination","Optimizing your digital footprint to rank #1 on Google and drive organic growth.","search",["Technical SEO","Keyword Research","Authority Backlinks"]],
  ["07","Email Marketing","Automated email sequences that nurture leads and maximize customer lifetime value.","mail-question",["Segmentation","Automation","Copywriting"]],
  ["08","Content Strategy","Strategic content planning to build authority and trust with your target audience.","pen-tool",["Blog Management","PR Strategy","Script Writing"]]
];

const testimonials = [
  {name:"Marcus Thorne",role:"CEO, TechNova Solutions",text:"Zenvy transformed our digital presence. Within 6 months, our conversion rate increased by 300% and lead quality is off the charts.",rating:5,img:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop"},
  {name:"Elena Rodriguez",role:"Founder, Luxe Aesthetics",text:"The branding and design work Zenvy delivered is world-class. They understood our premium vision perfectly. Highly recommended!",rating:5,img:"https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop"},
  {name:"James Chen",role:"Marketing Director, Apex Global",text:"Scale was our biggest challenge. Zenvy didn't just spend our ad budget; they optimized our entire growth engine. Absolute pros.",rating:5,img:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop"}
];

const impactStats = [
  ["250+","Global Projects","Across 15 countries"],["$45M+","Revenue Generated","For our partner brands"],
  ["5k+","Creative Assets","High-end designs"],["99%","Client Satisfaction","Retention rate"]
];

const team = [
  ["Naeem Islam Tanjir","Founder & CEO","file:///C:/Users/Naeem%20Islalm/Downloads/Naeem.html"],
  ["Atikur Rahman","Lead Developer","https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=700&auto=format&fit=crop"],
  ["Sarah Rahman","Creative Director","https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=700&auto=format&fit=crop"],
  ["Maria Hossain","Marketing Strategist","https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=700&auto=format&fit=crop"]
];

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("nav-links").innerHTML = navLinks.map(([name,href]) => `<a href="${href}">${name}</a>`).join("");
  document.getElementById("mobile-links").innerHTML = navLinks.map(([name,href]) => `<a href="${href}">${name}</a>`).join("");

  document.getElementById("client-marquee").innerHTML = [...clients,...clients].map(c =>
    `<div class="client-item"><span>${c}</span><i></i></div>`).join("");

  document.getElementById("impact-stats").innerHTML = impactStats.map(s =>
    `<div class="stat"><strong>${s[0]}</strong><b>${s[1]}</b><small>${s[2]}</small></div>`).join("");

  document.getElementById("services-grid").innerHTML = services.map(s => `
    <article class="service-card">
      <div>
        <div class="service-top"><div class="service-id">${s[0]}</div><div class="service-icon"><i data-lucide="${s[3]}"></i></div></div>
        <h3>${s[1]}</h3><p>${s[2]}</p>
      </div>
      <div class="tags">${s[4].map(t => `<span class="tag">${t}</span>`).join("")}</div>
    </article>`).join("");

  document.getElementById("portfolio-grid").innerHTML = projects.map(p => `
    <article class="project">
      <img src="${p.image}" alt="${p.title}" loading="lazy">
      <div class="project-content">
        <div class="project-category">${p.category}</div>
        <h3>${p.title}</h3>
        <div class="project-footer"><span>View Project Analysis</span><div class="arrow"><i data-lucide="arrow-up-right"></i></div></div>
      </div>
    </article>`).join("");

  document.getElementById("team-grid").innerHTML = team.map(m => `
    <article class="member">
      <img src="${m[2]}" alt="${m[0]}" loading="lazy">
      <div class="member-info">
        <h3>${m[0]}</h3><div class="member-role">${m[1]}</div>
        <div class="socials"><i data-lucide="facebook"></i><i data-lucide="twitter"></i><i data-lucide="instagram"></i></div>
      </div>
    </article>`).join("");

  lucide.createIcons();
  initEvents();
  renderTestimonial(0);
});

function initEvents() {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => navbar.classList.toggle("scrolled", window.scrollY > 50));

  document.querySelectorAll("[data-scroll]").forEach(btn => btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.scroll)?.scrollIntoView({behavior:"smooth"});
  }));

  document.querySelectorAll("#nav-links a, #mobile-links a").forEach(a => a.addEventListener("click", () => {
    document.getElementById("mobile-menu").classList.remove("open");
  }));

  document.getElementById("menu-open").onclick = () => document.getElementById("mobile-menu").classList.add("open");
  document.getElementById("menu-close").onclick = () => document.getElementById("mobile-menu").classList.remove("open");

  const modal = document.getElementById("modal");
  const openModal = () => { modal.classList.add("open"); modal.setAttribute("aria-hidden","false"); document.body.classList.add("modal-open"); };
  const closeModal = () => { modal.classList.remove("open"); modal.setAttribute("aria-hidden","true"); document.body.classList.remove("modal-open"); };
  document.getElementById("watch-reel").onclick = openModal;
  document.getElementById("modal-close").onclick = closeModal;
  modal.addEventListener("click", e => { if(e.target === modal) closeModal(); });
  document.addEventListener("keydown", e => { if(e.key === "Escape") closeModal(); });

  document.getElementById("audit-btn").onclick = () => showToast("Audit request received — connect your form/email here.");
}

function renderTestimonial(index) {
  const t = testimonials[index];
  document.getElementById("testimonial-avatar").innerHTML = `<img src="${t.img}" alt="${t.name}">`;
  document.getElementById("testimonial-stars").innerHTML = Array.from({length:t.rating}, () => `<i data-lucide="star"></i>`).join("");
  document.getElementById("testimonial-text").textContent = `"${t.text}"`;
  document.getElementById("testimonial-name").textContent = t.name;
  document.getElementById("testimonial-role").textContent = t.role;
  document.getElementById("testimonial-dots").innerHTML = testimonials.map((_,i) =>
    `<button class="dot ${i===index?"active":""}" aria-label="Testimonial ${i+1}"></button>`).join("");
  document.querySelectorAll(".dot").forEach((d,i) => d.onclick = () => renderTestimonial(i));
  lucide.createIcons();
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2800);
}
