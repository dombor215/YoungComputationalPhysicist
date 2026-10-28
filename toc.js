const bookConfig = {
  settings: {
    keepPagesAlive: true,   // one persistent iframe per opened page
    maxLivePages: 0,        // 0 = unlimited; e.g. 8 = drop least-recently-used pages
    injectMathJax: true,
    mathJaxUrl: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml-full.js"
  },

  // ORDER MATTERS: first language = default, same order in the dropdown.
  languages: [
    {
      code: "sk",
      label: "Slovenčina",
      title: "Mladý počítačový fyzik",
      homePage: "pages/SK/ch00_Intro.html",
      ui: { language: "Jazyk", hideToc: "Skryť obsah", showToc: "Zobraziť obsah", resizeToc: "Zmeniť šírku panela" },
      sections: [
        {
          name: "Základy SageMath",
          items: [
            // id is optional; if the same id exists in another language,
            // switching language keeps the reader on that chapter.
            { id: "intro",       name: "Kapitola 0: Vitajte v SageMath!",      path: "pages/SK/ch00_Intro.html" },
            { id: "calculator",  name: "Kapitola 1: Kameň v studni",           path: "pages/SK/ch01_sage_as_a_calculator.html" },
            { id: "symbolics",   name: "Kapitola 2: Najdlhší kop",            path: "pages/SK/ch02_symbolics.html" },
            { id: "plots",       name: "Kapitola 3: Obrazy trajektórií",       path: "pages/SK/ch03_plots.html" },
            { id: "energy",      name: "Kapitola 4: Horská dráha",            path: "pages/SK/ch04_energy.html" },
            { id: "data",        name: "Kapitola 5: Tuhosť pružiny",           path: "pages/SK/ch05_data.html" },
            { id: "cheat-sheet", name: "Kapitola 6: Ťahák",                    path: "pages/SK/ch06_cheat_sheet.html" }
          ]
        }
      ]
    },
    {
      code: "en",
      label: "English",
      title: "Young Computational Physicist",
      homePage: "pages/EN/ch00_Intro.html",
      ui: { language: "Language", hideToc: "Hide contents", showToc: "Show contents", resizeToc: "Resize panel" },
      sections: [
        {
          name: "SageMath Basics",
          items: [
            { id: "intro",       name: "Chapter 0: Welcome to SageMath!",        path: "pages/EN/ch00_Intro.html" },
            { id: "calculator",  name: "Chapter 1: The Stone in the Well",       path: "pages/EN/ch01_sage_as_a_calculator.html" },
            { id: "symbolics",   name: "Chapter 2: The Longest Kick",           path: "pages/EN/ch02_symbolics.html" },
            { id: "plots",       name: "Chapter 3: Pictures of Trajectories",  path: "pages/EN/ch03_plots.html" },
            { id: "energy",      name: "Chapter 4: The Rollercoaster",          path: "pages/EN/ch04_energy.html" },
            { id: "data",        name: "Chapter 5: The Spring Constant",        path: "pages/EN/ch05_data.html" },
            { id: "cheat-sheet", name: "Chapter 6: The Cheat Sheet",             path: "pages/EN/ch06_cheat_sheet.html" }
          ]
        }
      ]
    }
    // add { code: "de", ... } etc. here
  ]
};