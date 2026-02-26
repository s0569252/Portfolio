// ===============================
// HAMBURGER MENU
// ===============================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ===============================
// FADE-IN ANIMATION
// ===============================
const fades = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

fades.forEach(f => observer.observe(f));

// ===============================
// MODAL PROJECT
// ===============================
function openModal(num){
  const modal = document.getElementById("projectModal");
  const body = document.getElementById("modal-body");

  const projects = [
    "<h3>Market Segmentation</h3><p>Clusteranalyse mit Python, scikit-learn und nachhaltiger Optimierung.</p>",
    "<h3>Kühlschrank App</h3><p>Scrum-basiertes DevOps Projekt mit React & Ionic.</p>",
    "<h3>Logistik Analyse</h3><p>Datenanalyse mit Python und Visualisierung in Power BI.</p>"
  ];

  body.innerHTML = projects[num-1];
  modal.style.display = "flex";
}

function closeModal(){
  document.getElementById("projectModal").style.display = "none";
}

window.onclick = function(e){
  const modal = document.getElementById("projectModal");
  if(e.target === modal){
    modal.style.display = "none";
  }
}

// ===============================
// SMOOTH SCROLL UNTUK SEMUA .BTN DENGAN ANCHOR
// ===============================
document.querySelectorAll('.btn[href^="#"]').forEach(btn => {
  btn.addEventListener('click', function(e){
    e.preventDefault();
    const targetId = this.getAttribute('href').replace('#','');
    const targetEl = document.getElementById(targetId);
    if(targetEl){
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Tutup menu hamburger otomatis jika aktif
    if(navLinks && navLinks.classList.contains("active")){
      navLinks.classList.remove("active");
    }
  });
});

// taruh di assets/js/script.js
function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2,'0');
  const minutes = String(now.getMinutes()).padStart(2,'0');
  const seconds = String(now.getSeconds()).padStart(2,'0');
  document.getElementById('current-time').textContent = `${hours}:${minutes}`;
}

// update setiap detik
setInterval(updateTime, 1000);
updateTime(); // langsung tampil saat load
