# Buzzvel Frontend Developer Test 2025

**HELLO**
This project is a submission for the Buzzvel Frontend Developer Test 2025. Thank you kindly for the opportunity
to showcase my skills.

You can access the live version of the project here on vercel: [https://buzzvel-test-eta.vercel.app/](https://buzzvel-test-eta.vercel.app/)

As specified, I created a page that is:

- Fully responsive and displays nicely on different screen sizes, mobile, and desktop.

- Follows the Figma designs closely, making using of CSS variables for colors and use of templates
  to ensure consistent stylings.

- Animated, using a mixture of Framer Motion and CSS animations. The animations are smoothly integrated into
  the flow of the page without overloading the user.

- Leverages the features of **Next.js**, such MetaData API, App routing, and Image and Link components for lazy loading and reducing
  cumulative layout shift.

- Performant, scoring above 90 on all Lighthouse parameters on Mobile and Desktop.

- Optimized for SEO, using OpenGraph and Twitter Card tags, JSON-LD, and using a sitemap and robots.txt generator in
  next-sitemap.

- Accessibility in mind, using semantic HTML tags where appropriate and use of aria-labels.

---

## Tech Stack / Features

- **Framework**: Next.js.

* Next.js offers a useful developer suite for using common tools such as TypeScript,Webpack, optimized Image elements,
  and page routing, which make the developer experience much smoother and faster.

- **Language**: TypeScript.

* Combined with JSDocs, TypeScript is my preferred language to keep type consistency across the app.

- **Styling**: CSS Modules.

* Scoped to each component for project structure clarity.

- **Animations**: Framer-Motion and CSS animations.

* Use of fade-in and fade-out transitions, orchestrated animations with variants and scroll progress mapping.
* Use of canvas to animate dynamic image sizes, to create a sparkling/bubbling effect.
* Use of CSS keyframes to animate svg components to create sparkling effect.
* Automatic and draggable carousels with IntersectionObserver and Framer-Motion. 

- **SEO**: Meta tags with `next/head`, semantic HTML tags, and next-sitemap.

- **Deployment**: Vercel

---

## Getting Started

### Prerequisites

- Node.js `>=18.x`
- npm or yarn

### Installation

```bash
# Clone this repository
git clone https://github.com/your-username/buzzvel-fe-test.git
cd buzzvel-fe-test

# Install dependencies
npm install
# or
yarn install
```

### Development Build

```bash
# Start the dev server
npm run dev
# or
yarn dev
```

### Production Build

```bash
npm run build
npm run start


```

---

## Project Structure

<pre>
root
├── public/                             # Static images
|  └── images/
|    ├── collage/                       # Meet international students slide
|    ├── feature/                       # Features slide
|    ├── join_cta/                      # Join call-to-action slide
|    └── profiles/                      # Testimonials
|
├── src/
| ├── animations/ 
| |  └── animations.tsx                 # Reusable Framer-Motion variants          
| |  
| ├── app/
| | ├── layout.tsx                      # Root layout, entry point to page. Exports metadata.
| | ├── page.tsx                        # Components imports and set here. Child of layout.
| | ├── globals.css                     # Global CSS stylings
| | ├── page.module.css                 # Top level page styles
| | ├── icon.png                        # Browser icon
| | ├── opengraph-image.png             # Next.js uses this for opengraph image header
| | ├── opengraph-image.alt.txt         # Next.js uses this for opengraph alternative text header
| | ├── twitter-image.png               # Next.js uses this for twitter card image header
| | └── twitter-image.alt.txt           # Next.js uses this for twitter card alternative text header
| |
| ├── components/                       # Reusable UI components (buttons, canvas, cards.) 
| |
| ├── hooks/                            # Custom hooks
| |
| ├── slides/                           # Pages are split into "slides", or logically separate parts of the page (often by <section>)
| | ├── footer/                         # Page footer
| | ├── header/                         # Page header
| | ├── home/                           # Landing or home page at "/""
| | ├── pricing/                        # Page at "/pricing" (not implemented)
| | ├── products/                       # Page at "/products" (not implemented)
| | ├── resources/                      # Page at "/resources" (not implemented)
| | └── slides_styles.module.css        # Common slide styles (e.g. padding, gap, flex-direction)
| | 
| └── types/                            # TypeScript type definitions
|
├── lighthouse/                         # Lighthouse reports for the live page
| 
├── next.config.js                      # Next.js configuration 
├── next-sitemap.config.js              # next-sitemap sitemap and robots.txt config
├── tsconfig.json                       # TypeScript config 
└── README.md                           # Project documentation 

</pre>

--- 

## Lighthouse Scores

| Category       | Mobile | Desktop |
|----------------|--------|---------|
| Performance    | 91     | 98      |
| Accessibility  | 92     | 92      |
| Best Practices | 100    | 93      |
| SEO            | 92     | 92      |

*Tested using Google Lighthouse on Vercel deployment.*

---

## License

This project is for demonstration and evaluation purposes only.

## Contact

Created by Sam Bowditch · [zctlsab@gmail.com] · [LinkedIn](https://www.linkedin.com/in/sam-bowditch-b777032bb/)



