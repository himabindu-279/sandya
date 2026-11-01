# 🌸 SANDYA — A WORLD OF HER OWN 🌸
### A Premium Interactive Multi-Page 20th Birthday Experience

Created especially for **Sandya**, born **02 November 2006**, celebrating her milestone **20th Birthday on 02 November 2026**.

---

## 🌟 Core Philosophy & Design Rules
- **100% Genuine Friendship Focus**: Celebrates mutual admiration, encouragement, shared laughter, unforgettable memories, and loyal support. Strictly no sister, akka, or romantic relationship language.
- **Addressed Directly to Sandya**: All visitor-facing text uses **YOU, YOUR, and YOU ARE**.
- **Already a Complete Gift**: No editing instructions, configuration prompts, or customization banners shown to Sandya.
- **85% Visual & Interactive, 15% Text**: Rich in large photographs, clotheslines with wooden pegs, scrapbook collages with pearl pins and torn paper, 3D animated cakes with 20 candles, 3 unboxing gift boxes, and full-screen lightboxes.

---

## 🗺️ Multi-Page Architecture (React Router)

| Route | Page | Experience |
| :--- | :--- | :--- |
| `/` | **Page 1: The Entrance** | Cinematic full-screen opening with *"SANDYA"*, *"CHAPTER 20"*, *"02.11.2026"*, *"A little universe created to celebrate you."*, and an animated ENTER button. |
| `/world` | **World Navigation Hub** | Central exploration screen presenting all rooms in her universe with visual portal cards. |
| `/family` | **Page 2: The Family World** | Dedicated family photo experience: large family hero photograph, scrapbook collage with pearl pushpins, torn paper quote note (*"Being part of a family means smiling for photos."*), and full-screen lightbox. |
| `/portraits` | **Page 3: Just Sandya** | Solo portrait gallery: vintage polaroids hanging on a clothesline with wooden pegs, editorial masonry layout, and full-screen photo viewer. |
| `/memories` | **Page 4: Our Little Memories** | Friendship scrapbook with Sandya and me (*"Friends Through The Years"*), polaroids, dates, short captions, and lightbox. |
| `/celebration` | **Page 5: The Birthday Room** | Interactive mini-game: animated cake with **20 candles**, individual lighting, *"BLOW THE 20 CANDLES & MAKE A WISH!"* button with rising smoke, confetti explosion, and celebration blessing card. |
| `/gifts` | **Page 6: The Mystery Gift Room** | Three distinct animated 3D gift boxes: **Gift 1** = Friendship Letter, **Gift 2** = Photo Keepsake, **Gift 3** = Secret Passes (*Emergency Chai/Coffee, Spontaneous Day Trip, Dessert Feast, Hype Talk*). |
| `/future` | **Page 7: Her Next Chapter** | Visual future & dreams experience: destination photography (*Kyoto, Amalfi, Alps, Northern Lights*), career pillars, and an interactive **20s Bucket List with toggleable checkboxes and live progress bar**. |
| `/finale` | **Page 8: Grand Finale** | Full-screen celebration: *"HAPPY 20TH BIRTHDAY, SANDYA!"*, *"Your next chapter starts now."*, illuminated best photo, confetti, and a *"REPLAY HER LITTLE UNIVERSE ↺"* button. |

---

## 📸 Photograph Management (`public/images/`)
All images are centrally mapped in `src/data/sandyaData.js` (`imageMap`).
Simply drop her real photos into `birthday-site/public/images/` with these exact filenames:
- `sandya-hero.jpg` — Main entrance hero portrait (Page 1)
- `sandya-portrait-1.jpg` — Solo clothesline portrait (Page 3)
- `sandya-portrait-2.jpg` — Solo golden hour portrait (Page 3)
- `family-main.jpg` — Large family hero photograph (Page 2)
- `family-memory-1.jpg` — Family celebration moment (Page 2)
- `family-memory-2.jpg` — Everyday family warmth (Page 2)
- `friendship-1.jpg` — Friendship scrapbook photo 1 (Page 4)
- `friendship-2.jpg` — Friendship scrapbook photo 2 (Page 4)
- `birthday-photo.jpg` — Milestone celebration photo (Page 5 & Page 8)
- `gift-surprise.jpg` — Secret gift box surprise photo (Page 6)

---

## 🛠️ Editing Texts, Memories & Quotes
All text is neatly stored in one centralized file:
[`src/data/sandyaData.js`](file:///c:/Users/welcome/OneDrive/Desktop/sandy/birthday-site/src/data/sandyaData.js)

---

## 🚀 Running the Website Locally
```bash
cd birthday-site
npm install
npm run dev
```
Open **[http://localhost:5173/](http://localhost:5173/)** in your browser.
