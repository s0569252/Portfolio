---
layout: default
title: Home
---

<!-- ABOUT -->
<section id="about" class="fade">
  <div class="about-container" style="display:flex; flex-wrap:wrap; align-items:center; gap:40px;">
    <div class="about-text" style="flex:1; min-width:280px;">
      <h2>Über mich</h2>
      <p>Masterstudent der Betrieblichen Umweltinformatik an der HTW Berlin. Fokus auf Data Analytics, nachhaltige IT und Softwareentwicklung.</p>
    </div>

    <div class="about-image" style="flex:1; text-align:right; min-width:280px;">
      <img src="{{ '/images/foto.jpeg' | relative_url }}" alt="Imdi Melvana" style="max-width:100%; border-radius:6px;">
    </div>
  </div>
</section>


<section id="projects" class="fade">
  <h2>Projects</h2>

  <div class="project-grid">

    <div class="project-card" onclick="openModal(1)">
      <h3>Market Segmentation</h3>
      <p>Machine Learning & Green Coding</p>
    </div>

    <div class="project-card" onclick="openModal(2)">
      <h3>Kühlschrank App</h3>
      <p>React & Ionic</p>
    </div>

    <div class="project-card" onclick="openModal(3)">
      <h3>Logistik Analyse</h3>
      <p>Python & Power BI</p>
    </div>

  </div>
</section>

<section id="contact" class="section fade">
  <h2>Contact</h2>
  <p>Email: <a href="mailto:imdimelvana@gmail.com">imdimelvana@gmail.com</a></p>
  <p>Berlin, Deutschland</p>
</section>

<!-- Modal -->
<div id="projectModal" class="modal">
  <div class="modal-content">
    <span class="close" onclick="closeModal()">&times;</span>
    <div id="modal-body"></div>
  </div>
</div>
