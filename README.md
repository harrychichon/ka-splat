# Ka-Splat!

**Ka-Splat** is a comic book tracking app built with Next.js, TypeScript, Zustand, and SASS. It integrates the ComicVine API to let users search, collect, and favourite comics and characters — all in a clean, responsive UI.

---

## 🚀 Features

- 🔎 **Live Search** – Search the ComicVine API in real time with dropdown suggestions and full results on submit.
- 📁 **My Collection** – Track the comics you own and favourite.
- ❤️ **Favourite Characters** – Mark characters as favourites and see their latest appearances on the homepage.
- 📊 **Dashboard** – View stats like total issues owned, average rating, and more.
- 👤 **Character Search** – Search for and favourite characters using a dedicated search interface.
- 🖼️ **Card-Based UI** – Comics and characters are displayed using responsive, image-driven cards.
- 📱 **Mobile Friendly** – Designed to work seamlessly on all screen sizes.
- 🧾 **Issue Reviews** – Rate and comment on issues via a modal popup.
- 🧠 **Persistent Local State** – Zustand + Immer store data locally — no account or login needed.
- ⚡ **Feedback UI** – Loading spinners, visual button states, and smooth interactions.

---

## 🧭 Project Structure

Feature-first folder structure:

- `components/issues/` – Issue cards, grids, modals
- `components/characters/` – Character cards and search
- `components/search/` – Live search bar and results
- `components/layout/` – Header, footer, layout wrappers
- `stores/` – Zustand stores
- `styles/` – Global SCSS variables, mixins, base styles
- `app/` – Pages and routes, structured per Next.js App Router

---

## 📦 Status

✅ Final version submitted for coursework.  
🔜 Future improvements may include backend support, filtering, and user accounts.

---

## 🛠 Tech Stack

- **Next.js** (App Router, client-side only)
- **TypeScript**
- **Zustand + Immer**
- **SCSS Modules**
- **ComicVine API**

---

## 🧪 Getting Started

```bash
npm install
npm run dev

```
