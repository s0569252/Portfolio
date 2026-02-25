---
layout: default
title: Home
---

<!-- ABOUT -->
<section id="about" class="fade">

  <div class="about-wrapper">

    <!-- FOTO -->
    <div class="about-image">
      <img src="{{ '/images/foto.jpeg' | relative_url }}" alt="Imdi Melvana">
    </div>

    <!-- TEXT -->
    <div class="about-text">
      <h2>Über mich</h2>
      <p>
        Masterstudent der Betrieblichen Umweltinformatik an der HTW Berlin.
        Fokus auf Data Analytics, nachhaltige IT und Softwareentwicklung.
      </p>
    </div>

  </div>

  <!-- EXPERIENCE -->
  <div class="experience">
    <h3>Experience & Skills</h3>

    <div class="skills-grid">
      <div class="skill-card">
        <h4>Programming</h4>
        <p>Python · Java · JavaScript · SQL</p>
      </div>

      <div class="skill-card">
        <h4>Data & Analytics</h4>
        <p>Pandas · Power BI · Machine Learning · Data Visualization</p>
      </div>

      <div class="skill-card">
        <h4>Tools</h4>
        <p>Git · Docker · VS Code · Jupyter · Linux</p>
      </div>

      <div class="skill-card">
        <h4>Web</h4>
        <p>HTML · CSS · React · Ionic</p>
      </div>
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


<!-- Modal -->
<div id="projectModal" class="modal">
  <div class="modal-content">
    <span class="close" onclick="closeModal()">&times;</span>
    <div id="modal-body"></div>
  </div>
</div>
