document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#loader').style.display = 'none';
});


function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
}
/*
//better dark mode

let darkmode = localStorage.getItem ('darkmode' )
const themeSwitch = document.getElementById('theme-switch')
const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}
const disableDarkmode = () => {
  document.body.classList.remove ('darkmode')
  localStorage.setItem ('darkmode', 'null')
}
if(darkmode === "active") enableDarkmode ()
  themeSwitch.addEventListener ("click", () => {
  darkmode = localStorage.getItem( 'darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})
*/

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("darkModeToggle");
  const elementsToStyle = {
    sidebar: document.getElementById("sidebar"),
    loader: document.getElementById("loader"),
    sidebarLinks: document.querySelectorAll(".sidebar-link"),
    closeButtons: document.querySelectorAll(".sidebar-close"),
    cards: document.querySelectorAll(".card"),
    collectionItem: document.querySelectorAll(".collection-item"),
    contentSections: document.querySelectorAll(".content"),
    bottomNavs: document.querySelectorAll(".bottom-nav"),
    bottomNavItems: document.querySelectorAll(".nav-item"),
    bottomNavIcons: document.querySelectorAll(".bottom-nav-icon"),
    ctaButtons: document.querySelectorAll(".cta-btn"),
    navbars: document.querySelectorAll(".navbar"),
    unicodeContainers: document.querySelectorAll(".container"),
    unicodeSections: document.querySelectorAll(".section"),
    sellerLists: document.querySelectorAll(".seller-list"),
    sellerCards: document.querySelectorAll(".seller-card"),
    sellerCardsInactive: document.querySelectorAll(".seller-card-inactive"),
    tables: document.querySelectorAll("table"),
    tableHeaders: document.querySelectorAll("table th"),
    tableCells: document.querySelectorAll("table td"),
  };

  let isDarkMode = localStorage.getItem("darkMode") === "true";

  const removeHoverEffects = () => {
    elementsToStyle.tables.forEach(table => {
      table.querySelectorAll("tr").forEach(row => {
        row.onmouseenter = null;
        row.onmouseleave = null;
      });
    });
  };

  const applyTheme = () => {
    document.body.classList.toggle("dark-mode", isDarkMode);

    if (isDarkMode) {
      document.body.style.backgroundColor = "#1e1e2e";
      document.body.style.color = "white";

      elementsToStyle.sidebar.style.backgroundColor = "#111111";
      elementsToStyle.loader.style.backgroundColor = "#333333";

      elementsToStyle.cards.forEach(card => (card.style.backgroundColor = "#222222"));
      elementsToStyle.contentSections.forEach(section => (section.style.backgroundColor = "#222222"));
      elementsToStyle.collectionItem.forEach(collectionItem => (collectionItem.style.backgroundColor = "#1e1e3e"));
      elementsToStyle.bottomNavs.forEach(nav => (nav.style.backgroundColor = "#111111"));
      elementsToStyle.sellerLists.forEach(list => (list.style.backgroundColor = "#111111"));
      elementsToStyle.sidebarLinks.forEach(link => (link.style.color = "#fff"));
      elementsToStyle.closeButtons.forEach(button => (button.style.color = "white"));
      elementsToStyle.bottomNavItems.forEach(item => (item.style.color = "white"));
      elementsToStyle.bottomNavIcons.forEach(icon => (icon.style.color = "white"));
      elementsToStyle.ctaButtons.forEach(btn => (btn.style.backgroundColor = "#111111"));
      elementsToStyle.navbars.forEach(nav => (nav.style.backgroundColor = "#111111"));
      elementsToStyle.unicodeContainers.forEach(container => (container.style.backgroundColor = "rgb(17, 17, 28)", container.style.backdropFilter = "blur(15px)"));
      elementsToStyle.unicodeSections.forEach(section => (section.style.backgroundColor = "#222222"));
      elementsToStyle.sellerCards.forEach(card => (card.style.backgroundColor = "#45454547"));
      elementsToStyle.sellerCardsInactive.forEach(card => (card.style.backgroundColor = "#dd22221f"));

      elementsToStyle.tables.forEach(table => {
        table.style.backgroundColor = "#282838";
        table.style.color = "white";
        table.style.border = "1px solid #444";
      });

      elementsToStyle.tableHeaders.forEach(header => {
        header.style.backgroundColor = "#33334d";
        header.style.color = "white";
      });

      elementsToStyle.tableCells.forEach(cell => {
        cell.style.border = "1px solid #444";
      });

      removeHoverEffects();

      elementsToStyle.tables.forEach(table => {
        table.querySelectorAll("tr").forEach(row => {
          row.addEventListener("mouseenter", () => {
            row.style.backgroundColor = "#3a3a4a";
          });

          row.addEventListener("mouseleave", () => {
            row.style.backgroundColor = "#282838";
          });
        });
      });

      toggleButton.textContent = "light_mode";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";

      elementsToStyle.sidebar.style.backgroundColor = "white";
      elementsToStyle.loader.style.backgroundColor = "white";

      elementsToStyle.cards.forEach(card => (card.style.backgroundColor = "white"));
      elementsToStyle.contentSections.forEach(section => (section.style.backgroundColor = "#f9f9f9"));
      elementsToStyle.bottomNavs.forEach(nav => (nav.style.backgroundColor = "white"));
      elementsToStyle.sellerLists.forEach(list => (list.style.backgroundColor = "white"));
      elementsToStyle.sidebarLinks.forEach(link => (link.style.color = "#000"));
      elementsToStyle.closeButtons.forEach(button => (button.style.color = "black"));
      elementsToStyle.bottomNavItems.forEach(item => (item.style.color = "#333333"));
      elementsToStyle.bottomNavIcons.forEach(icon => (icon.style.color = "#333333"));
      elementsToStyle.ctaButtons.forEach(btn => (btn.style.backgroundColor = "#007bff"));
      elementsToStyle.navbars.forEach(nav => (nav.style.backgroundColor = "#007bff"));
      elementsToStyle.unicodeContainers.forEach(container => (container.style.backgroundColor = "#f1f1f1"));
      elementsToStyle.unicodeSections.forEach(section => (section.style.backgroundColor = "#f1f1f1"));
      elementsToStyle.sellerCards.forEach(card => (card.style.backgroundColor = "#f1f1f1"));
      elementsToStyle.sellerCardsInactive.forEach(card => {
        card.style.border = "2px solid rgb(221, 34, 34)";
        card.style.backgroundColor = "white";
      });

      elementsToStyle.tables.forEach(table => {
        table.style.backgroundColor = "white";
        table.style.color = "black";
        table.style.border = "1px solid #ccc";
      });

      elementsToStyle.tableHeaders.forEach(header => {
        header.style.backgroundColor = "#007bff";
        header.style.color = "black";
      });

      elementsToStyle.tableCells.forEach(cell => {
        cell.style.border = "1px solid #ccc";
      });

      removeHoverEffects();

      elementsToStyle.tables.forEach(table => {
        table.querySelectorAll("tr").forEach(row => {
          row.addEventListener("mouseenter", () => {
            row.style.backgroundColor = "#f0f0f0";
          });

          row.addEventListener("mouseleave", () => {
            row.style.backgroundColor = "white";
          });
        });
      });

      toggleButton.textContent = "dark_mode";
    }
  };

  applyTheme();

  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      isDarkMode = !isDarkMode;
      localStorage.setItem("darkMode", isDarkMode);
      location.reload();
      applyTheme();
    });
  }
});


