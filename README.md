# Young Computational Physicist

An interactive educational webpage with a dynamic table of contents for teaching computational physics using SageMath.

## Structure

```
├── index.html          # Main webpage
├── toc.js              # TOC configuration file
└── pages/              # Content pages
    ├── 00_TOC.html     # Home/landing page
    ├── 01_*.html       # Chapter pages
    └── ...
```

## Features

- **Dynamic TOC**: Table of contents generated from `toc.js`
- **Collapsible Sections**: Click section headers to expand/collapse
- **Responsive Design**: Toggle sidebar visibility
- **MathJax Support**: Renders mathematical formulas
- **Active State Tracking**: Highlights current page in TOC

## Usage

1. **Add/Edit Content**: Modify `toc.js` to update the navigation:
   ```javascript
   {
     name: "Section Name",
     items: [
       { name: "Page Title", path: "pages/filename.html"}
     ]
   }
   ```

2. **Add Pages**: Create HTML files in the `pages/` directory

3. **Open**: Simply open `index.html` in a web browser

## Customization

- **Styling**: Edit CSS in `<style>` section of `index.html`
- **TOC Width**: Adjust `.toc` width (default: 250px)
- **Colors**: Modify CSS variables for theming

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge).