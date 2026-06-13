# ShopHub

A React e-commerce app built with Vite, React Router, and React Hook Form.

---

## 📁 Project Structure

```
src/
├── assets/
│   └── css/
│       ├── Checkout.css
│       ├── Form.css
│       ├── Home.css
│       └── Navbar.css
├── components/
│   ├── Navbar.jsx
│   └── ProductCard.jsx
├── context/
│   ├── AuthContext.jsx
│   └── CartContext.jsx
├── data/
│   └── products.js
├── pages/
│   ├── Auth.jsx
│   ├── Checkout.jsx
│   ├── Home.jsx
│   └── productDetails.jsx
├── App.jsx
├── index.css
└── main.jsx
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🛍️ Features

- Product listing with grid layout
- Product detail pages
- Add to cart / update quantity / remove items
- Checkout page with order summary
- Auth (Sign Up / Login) using localStorage
- Persistent login session via localStorage

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| React 19 | UI framework |
| Vite 8 | Build tool / dev server |
| React Router v7 | Client-side routing |
| React Hook Form | Form validation |
| CSS (plain) | Styling |

---

## 📝 CSS Files

| File | Used By |
|---|---|
| `Home.css` | Home page, product grid, cards, hero |
| `Navbar.css` | Navigation bar |
| `Form.css` | Auth / login / signup forms |
| `Checkout.css` | Checkout page layout, item rows, summary card |

---

## 📄 License

MIT