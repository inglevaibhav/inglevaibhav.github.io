document.getElementById("year").textContent = new Date().getFullYear();

const slug = new URLSearchParams(location.search).get("p");
const project = PROJECTS.find((p) => p.slug === slug);

const titleEl = document.getElementById("project-title");
const descEl = document.getElementById("project-desc");
const tagsEl = document.getElementById("project-tags");
const galleryEl = document.getElementById("project-gallery");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");

if (!project) {
  document.title = "Project not found — Vaibhav Vinod Ingle";
  titleEl.textContent = "Project not found";
  descEl.textContent = "This project page doesn't exist. Head back to the portfolio to see all projects.";
} else {
  document.title = `${project.title} — Vaibhav Vinod Ingle`;
  titleEl.textContent = project.title;
  descEl.textContent = project.description;
  project.tags.forEach((t) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = t;
    tagsEl.appendChild(span);
  });
  if (project.team && project.team.length) {
    const teamEl = document.getElementById("project-team");
    project.team.forEach((m) => {
      const li = document.createElement("li");
      const name = document.createElement("strong");
      name.textContent = m.name + (m.note ? ` (${m.note})` : "");
      li.append(name, document.createTextNode(` — ${m.role}, ${m.org}`));
      teamEl.appendChild(li);
    });
    document.getElementById("project-team-section").hidden = false;
  }
  (project.images || []).forEach((g) => {
    const fig = document.createElement("figure");
    fig.className = "project-figure";
    const img = document.createElement("img");
    img.src = g.src;
    img.alt = g.caption;
    img.loading = "lazy";
    img.addEventListener("click", () => {
      lightboxImg.src = g.src;
      lightboxCaption.textContent = g.caption;
      lightbox.classList.add("open");
    });
    const cap = document.createElement("figcaption");
    cap.textContent = g.caption;
    fig.append(img, cap);
    galleryEl.appendChild(fig);
  });
}

document.getElementById("lightbox-close").addEventListener("click", () => lightbox.classList.remove("open"));
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.classList.remove("open");
});
