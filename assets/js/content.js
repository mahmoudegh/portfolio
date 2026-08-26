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
      item.dataset.class = filter.category === "all" ? "all" : "." + filter.category;
      filterList.appendChild(item);
    });

    container.appendChild(filterList);
    featuredWorkHeader.appendChild(container);

    const items = createElement("div", "featured-work-items");
    work.projects.forEach(function (project) {
      const card = createElement("div", "shuffel item-" + project.id);
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

    mount.replaceChildren(featuredWorkHeader, items);
  }

  function renderSkills(skills) {
    const mount = document.querySelector("[data-skills-content]");
    if (!mount || !Array.isArray(skills.skills)) return;

    const container = createElement("div", "container");
    skills.skills.forEach(function (skill) {
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
      renderWork(data[0]);
      renderSkills(data[1]);
      window.dispatchEvent(new Event("portfolio:data-loaded"));
    })
    .catch(function (error) {
      console.error("Unable to render portfolio content:", error);
    });
})();
