(function () {
  "use strict";

  function createElement(tagName, className, text) {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
  }

  function renderWork(work) {
    const mount = document.querySelector("[data-work-content]");
    if (!mount || !Array.isArray(work.filters) || !Array.isArray(work.projects)) return;

    const featuredWorkHeader = createElement("div", "featured-work-header");
    const container = createElement("div", "container");
    const filterList = document.createElement("ul");

    work.filters.forEach(function (filter, index) {
      const item = createElement(
        "li",
        "list-unstyled uppercase hvr-grow" + (index === 0 ? " active" : ""),
        filter.label
      );
      item.dataset.category = filter.category;
      item.setAttribute("role", "button");
      item.setAttribute("tabindex", "0");
      item.setAttribute("aria-pressed", index === 0 ? "true" : "false");
      filterList.appendChild(item);
    });

    container.appendChild(filterList);
    featuredWorkHeader.appendChild(container);

    const items = createElement("div", "featured-work-items");
    work.projects.filter(function (project) {
      return project.published !== false;
    }).forEach(function (project) {
      const card = createElement("div", "shuffel item-" + project.id);
      card.dataset.category = project.category;
      const image = document.createElement("img");
      image.className = project.category + " img-responsive";
      image.src = project.image;
      image.alt = project.alt;
      card.appendChild(image);

      const overlay = createElement("div", "overlay");
      const title = createElement("div", "title uppercase");
      title.appendChild(createElement("h3", "", project.name));
      if (project.status) title.appendChild(createElement("h3", "", "(" + project.status + ")"));

      const links = project.links || [];
      const linkWrapper = links.length > 1 ? document.createElement("div") : title;
      links.forEach(function (link, index) {
        if (index > 0) linkWrapper.appendChild(createElement("span", "ml-2 mr-2", "|"));
        const anchor = createElement("a", "", link.label);
        anchor.href = link.url;
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
        anchor.setAttribute("aria-label", link.ariaLabel || link.label);
        linkWrapper.appendChild(anchor);
      });
      if (linkWrapper !== title) title.appendChild(linkWrapper);

      overlay.appendChild(title);
      card.appendChild(overlay);
      items.appendChild(card);
    });

    function filterProjects(category) {
      filterList.querySelectorAll("li").forEach(function (filter) {
        const isActive = filter.dataset.category === category;
        filter.classList.toggle("active", isActive);
        filter.setAttribute("aria-pressed", String(isActive));
      });
      items.querySelectorAll(".shuffel").forEach(function (card) {
        card.style.display = category === "all" || card.dataset.category === category ? "" : "none";
      });
    }

    filterList.addEventListener("click", function (event) {
      const filter = event.target.closest("li[data-category]");
      if (filter) filterProjects(filter.dataset.category);
    });
    filterList.addEventListener("keydown", function (event) {
      if (event.key !== "Enter" && event.key !== " ") return;
      const filter = event.target.closest("li[data-category]");
      if (!filter) return;
      event.preventDefault();
      filterProjects(filter.dataset.category);
    });

    mount.replaceChildren(featuredWorkHeader, items);
  }

  function renderSkills(skills) {
    const mount = document.querySelector("[data-skills-content]");
    if (!mount || !Array.isArray(skills.skills)) return;

    const container = createElement("div", "container");
    skills.skills.filter(function (skill) {
      return skill.published !== false;
    }).forEach(function (skill) {
      const box = createElement("div", "skill-box");
      box.appendChild(createElement("div", "skill-name", skill.name));
      const progress = createElement("div", "skill-progress");
      const indicator = document.createElement("span");
      indicator.dataset.progress = skill.progress;
      progress.appendChild(indicator);
      box.appendChild(progress);
      container.appendChild(box);
    });
    mount.replaceChildren(container);
  }

  function renderContent(data) {
    renderWork(data.work);
    renderSkills(data.skills);
    window.dispatchEvent(new Event("portfolio:data-loaded"));
  }

  if (window.location.protocol === "file:") {
    renderContent(window.portfolioContentFallback);
  } else {
    Promise.all([
      fetch("data/work.json").then(function (response) {
        if (!response.ok) throw new Error("Unable to load work data");
        return response.json();
      }),
      fetch("data/skills.json").then(function (response) {
        if (!response.ok) throw new Error("Unable to load skills data");
        return response.json();
      }),
    ])
      .then(function (data) {
        renderContent({ work: data[0], skills: data[1] });
      })
      .catch(function (error) {
        console.error("Unable to render portfolio content:", error);
        renderContent(window.portfolioContentFallback);
      });
  }
})();
