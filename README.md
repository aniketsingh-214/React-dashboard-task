# React COVID‑19 Global Dashboard

> A modern, responsive dashboard that presents live global metrics and charts for COVID‑19, built with React, Tailwind CSS, and Recharts.

---

## Overview

This project fetches up-to-date COVID‑19 data from the [disease.sh API](https://disease.sh/) and visualizes it with sleek metric cards and interactive charts, including line, bar, and area charts. Designed for clarity, rapid updates, and a high‑contrast, modern UI using Tailwind CSS.

---

## ⚙️ Features

- **Live global summary**: Cases, deaths, recoveries in large, readable cards
- **Interactive charts**: Line, Bar, and Area charts powered by Recharts
- **Responsive design**: Looks stunning across mobile, tablet, and desktop
- **Glassmorphism‑style UI**: Frosted‑glass cards with hover animations
- **Zero backend**: Just a front‑end SPA consuming a public REST API

---

## 🚀 Getting Started

### Installation & Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/aniketsingh-214/React-dashboard-task.git
cd React-dashboard-task

# 2. Install dependencies
npm install
# or
yarn

# 3. Start the dev server
npm start
# or
yarn start
````

### Build for Production

Create an optimized production build:

```bash
npm run build
# or
yarn build
```

Outputs to the `build/` directory, ready for static hosting on services like Netlify, Vercel, or GitHub Pages.

---

## 🧩 Project Structure

```
.
├── public/
│   └── index.html
└── src/
    ├── components/
    │   ├── Dashboard.jsx
    │   ├── MetricCard.jsx
    │   ├── DataCard.jsx  
    ├── styles/
    │   └── tailwind.css
    ├── index.jsx
    └── App.jsx
```

## 🧪 Tech Stack & Libraries

* **React**: Front-end UI library for component architecture
* **Tailwind CSS**: Utility-first CSS framework for styling and theming
* **Recharts**: For rendering interactive charts (e.g., LineChart, Tooltip, CartesianGrid)
* **Fetch API**: To retrieve live data from [disease.sh](https://disease.sh/)
* Icons and transitions use inline SVGs and Tailwind classes—no dependency on icon libraries.

> *Language stats for this codebase: JavaScript (91.5%), CSS (5.4%), HTML (3.1%)* ([github.com][1])

---

## ⚙️ Configuration (Optional)

Currently, this dashboard requires **no API key or `.env` file**—it fetches data anonymously.

If, in the future, the API requires authentication, you can optionally add a `.env.local` file like:

```env
REACT_APP_API_BASE_URL=https://disease.sh/v3/covid-19
```

Then modify `src/App.jsx` to use `process.env.REACT_APP_API_BASE_URL`.

---


## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "Add feature"`)
4. Push (`git push origin feature/your-feature`)
5. Open a pull request.

Please maintain coding standards and run tests (if configured) before submitting.

---

## 👍 Why Use This Dashboard?

This project is a lightweight, practical example of how to build an analytics dashboard in React using only open APIs and modern front-end tools—ideal for learning, hackathons, or production-ready admin interfaces.

---

## ✅ Summary

* Minimal setup
* Real‑time data via public API
* Modern UI built with Tailwind
* Rich, responsive data visualization
* Fully front-end: Clone, install, and you’re live!

