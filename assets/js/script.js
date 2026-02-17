// Hamburger
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Fade In Animation
const fades = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

fades.forEach(f => observer.observe(f));

// Modal
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
