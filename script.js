const container = document.querySelector(".project-container");

projects.forEach(project => {
  const card = document.createElement("div");
  card.classList.add("project");
  
  card.addEventListener("click", () => {
    window.location.href = project.link;
  });

  const techIcons = project.technologies.map(name => {
    const tech = technologies[name];
    return `<li><i class="${tech.icon}" style="color:${tech.color}; ${tech.bg ? `background-color:${tech.bg};` : ""}"></i></li>`;
  }).join("");

  card.innerHTML = `
    <img src="${project.image}" alt="${project.name}">
    <h3>${project.name}</h3>
    <ul class="tech-list">${techIcons}</ul>
  `;

  container.appendChild(card);
});

const aboutMeBtn = document.querySelector(".more-about");

aboutMeBtn.addEventListener("click", () => {
  window.location.href = "about.html";
})

function hideScrollbar() {
  const style = document.createElement('style');
  style.innerHTML = `
    /* Hide scrollbar for Chrome, Safari, and Opera */
    body::-webkit-scrollbar {
      display: none;
    }
    /* Hide scrollbar for IE and Edge */
    body {
      -ms-overflow-style: none;
    }
    /* Hide scrollbar for Firefox */
    html {
      scrollbar-width: none;
    }
  `;
  document.head.appendChild(style);
}

// Call the function to hide the scrollbar
hideScrollbar();



