document.getElementById('year').textContent = new Date().getFullYear();

const grid = document.getElementById('project-grid');

function renderProjects() {
  grid.innerHTML = '';
  PROJECTS.forEach((p) => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.innerHTML = `
      <img class="project-image" src="${p.image}" alt="${p.title}" loading="lazy">
      <div class="project-titleblock">
        <span class="project-name">${p.title}</span>
        <span class="project-software">${p.software}</span>
        <span class="project-sheet">${p.sheet}</span>
      </div>
    `;
    card.addEventListener('click', () => openLightbox(p));
    grid.appendChild(card);
  });
}

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.getElementById('lightbox-close');

function openLightbox(p) {
  lightboxImg.src = p.image;
  lightboxImg.alt = p.title;
  lightboxCaption.textContent = `${p.sheet} — ${p.title} · ${p.software} — ${p.description}`;
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImg.src = '';
  document.body.style.overflow = '';
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

renderProjects();
