// ---- Fill in static text/links from SITE ----
document.getElementById("nav-brand").textContent = SITE.name;
document.getElementById("hero-name").textContent = SITE.name;
document.getElementById("hero-tagline").textContent = SITE.tagline;
document.getElementById("about-text").textContent = SITE.about;
document.getElementById("footer-name").textContent = SITE.name;
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("profile-photo").src = SITE.photo;

["resume-link", "hero-resume"].forEach((id) => {
  document.getElementById(id).href = SITE.resumeFile;
});
["hero-linkedin", "contact-linkedin"].forEach((id) => {
  document.getElementById(id).href = SITE.linkedin;
});
document.getElementById("contact-github").href = SITE.github;
["hero-email", "contact-email"].forEach((id) => {
  document.getElementById(id).href = `mailto:${SITE.email}`;
});
document.getElementById("contact-university-email").href = `mailto:${SITE.universityEmail}`;
document.getElementById("contact-phone").href = `tel:${SITE.phone.replace(/[^\d+]/g, "")}`;
document.getElementById("contact-phone").textContent = SITE.phone;

// ---- Experience ----
const experienceList = document.getElementById("experience-list");
EXPERIENCE.forEach((item) => {
  const el = document.createElement("div");
  el.className = "timeline-item reveal";
  el.innerHTML = `
    <h3>${item.role} — ${item.org}</h3>
    <p class="meta">${item.period}</p>
    <ul>${item.points.map((p) => `<li>${p}</li>`).join("")}</ul>
  `;
  experienceList.appendChild(el);
});

// ---- Projects ----
const projectsList = document.getElementById("projects-list");
PROJECTS.forEach((p) => {
  const el = document.createElement("div");
  el.className = "card reveal";
  el.innerHTML = `
    <h3>${p.title}</h3>
    <p>${p.description}</p>
    <div class="tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
    <a href="${p.link}" target="_blank" rel="noopener">View project →</a>
  `;
  projectsList.appendChild(el);
});

// ---- Education ----
const educationList = document.getElementById("education-list");
EDUCATION.forEach((e) => {
  const el = document.createElement("div");
  el.className = "timeline-item reveal";
  el.innerHTML = `
    <h3>${e.degree}</h3>
    <p class="meta">${e.school} · ${e.period}</p>
    <p>${e.detail}</p>
  `;
  educationList.appendChild(el);
});

// ---- Publications ----
document.getElementById("scholar-link").href = SITE.github;
const publicationsList = document.getElementById("publications-list");
PUBLICATIONS.forEach((pub) => {
  const el = document.createElement("li");
  const titleHtml = pub.link
    ? `<a href="${pub.link}" target="_blank" rel="noopener">${pub.title}</a>`
    : `<span class="pub-title-noLink">${pub.title}</span>`;
  el.innerHTML = `
    ${titleHtml}
    <span class="pub-venue">${pub.venue}${pub.authors ? ` · ${pub.authors}` : ""}</span>
    ${pub.summary ? `<p class="pub-summary">${pub.summary}</p>` : ""}
  `;
  publicationsList.appendChild(el);
});

// ---- Peer Review Service ----
const reviewList = document.getElementById("review-list");
if (reviewList) {
  REVIEW_SERVICE.forEach((r) => {
    const el = document.createElement("li");
    el.innerHTML = `${r.role} <span class="pub-venue">${r.detail}</span>`;
    reviewList.appendChild(el);
  });
}

// ---- Skills ----
const skillsList = document.getElementById("skills-list");
Object.entries(SKILLS).forEach(([group, items]) => {
  const el = document.createElement("div");
  el.className = "skills-group reveal";
  el.innerHTML = `
    <h3>${group}</h3>
    <div class="skills-badges">${items.map((s) => `<span class="skill-badge">${s}</span>`).join("")}</div>
  `;
  skillsList.appendChild(el);
});

// ---- Activities ----
const activitiesList = document.getElementById("activities-list");
ACTIVITIES.forEach((a) => {
  const el = document.createElement("div");
  el.className = "timeline-item reveal";
  el.innerHTML = `
    <h3>${a.title}</h3>
    <p class="meta">${a.period}</p>
    <p>${a.detail}</p>
  `;
  activitiesList.appendChild(el);
});

// ---- Gallery + Lightbox ----
const galleryList = document.getElementById("gallery-list");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");

GALLERY.forEach((g) => {
  const img = document.createElement("img");
  img.src = g.src;
  img.alt = g.caption;
  img.loading = "lazy";
  img.className = "reveal";
  img.addEventListener("click", () => {
    lightboxImg.src = g.src;
    lightboxCaption.textContent = g.caption;
    lightbox.classList.add("open");
  });
  galleryList.appendChild(img);
});

document.getElementById("lightbox-close").addEventListener("click", () => {
  lightbox.classList.remove("open");
});
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.classList.remove("open");
});

// ---- Theme toggle (defaults to dark) ----
const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");
if (savedTheme !== "light") {
  document.documentElement.setAttribute("data-theme", "dark");
  themeToggle.textContent = "☀️";
}
themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  if (isDark) {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌙";
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀️";
  }
});

// ---- Mobile nav ----
const nav = document.getElementById("nav");
document.getElementById("nav-burger").addEventListener("click", () => {
  nav.classList.toggle("open");
});
nav.querySelectorAll(".nav-links a").forEach((a) =>
  a.addEventListener("click", () => nav.classList.remove("open"))
);

// ---- Scroll reveal ----
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
