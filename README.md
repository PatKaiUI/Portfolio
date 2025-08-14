# Portfolio - Patrick Kaiser

Ein modernes, responsives Portfolio für Patrick Kaiser - Webentwickler mit Leidenschaft für Design.

## 🚀 Features

- **Vollständig responsive Design** - Optimiert für alle Bildschirmgrößen
- **Moderne UI/UX** - Glassmorphism-Effekte und sanfte Animationen
- **Interaktive Skill-Bars** - Hover-Effekte mit Fortschrittsanzeigen
- **Projekt-Galerie** - Modal-Ansicht für alle Projektbilder
- **Kontaktformular** - Mit Validierung und Erfolgsmeldungen
- **Hamburger-Navigation** - Optimiert für mobile Geräte
- **Barrierefreiheit** - ARIA-Attribute und Keyboard-Navigation

## 🛠️ Technologien

- **HTML5** - Semantische Struktur
- **CSS3** - Moderne Styling-Techniken
- **JavaScript (ES6+)** - Interaktive Funktionalität
- **Tailwind CSS** - Utility-First CSS Framework
- **Font Awesome** - Icon-Bibliothek
- **Google Fonts** - Typografie (Comforter Brush, Inter)

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Small:** 640px - 1023px
- **Large:** 1024px+
- **Extra Large:** 1280px+

## 🎨 Design-System

### Farben

- **Main 1:** #171718 (Dunkelgrau)
- **Main 2:** #f4f4f4 (Hellgrau)
- **Alt 1:** #a395ae (Lila)
- **Alt 2:** #6e4db2 (Violett)
- **Skill Hover:** #66ff6f (Grün)

### Typografie

- **Titel:** Comforter Brush (Cursive)
- **Body:** Inter (Sans-serif)

### Animationen

- Bounce-In, Fade-In, Slide-Up
- Wiggle-Animation für das Profilbild
- Hover-Effekte für alle interaktiven Elemente
- Smooth Scrolling

## 📁 Projektstruktur

```
Portfolio/
├── index.html          # Hauptseite
├── contact.html        # Kontaktseite
├── styles.css          # Hauptstile
├── index.js            # Hauptfunktionalität
├── contact.js          # Kontaktformular-Logik
├── tailwind.config.js  # Tailwind-Konfiguration
├── pictures/           # Bilddateien
│   ├── hero-bg.jpg
│   ├── PatKaiLogo.webp
│   ├── MeEmoji.webp
│   ├── firstPortfolio.png
│   ├── TetrisGame.png
│   ├── NoticeMe.png
│   └── toDoApp.png
├── README.md           # Diese Datei
├── LICENSE             # MIT-Lizenz
└── .gitignore          # Git-Ignore-Datei
```

## 🚀 Installation & Verwendung

1. **Repository klonen:**

   ```bash
   git clone [repository-url]
   cd Portfolio
   ```

2. **Lokalen Server starten:**

   ```bash
   # Mit Python 3
   python -m http.server 8000

   # Mit Node.js
   npx serve .

   # Mit PHP
   php -S localhost:8000
   ```

3. **Im Browser öffnen:**
   ```
   http://localhost:8000
   ```

## 📱 Responsive Features

### Header

- **Desktop:** Horizontale Navigation
- **Mobile:** Hamburger-Menü mit Slide-in-Animation
- **Logo:** Skaliert von 48x48px auf 32x32px auf kleinen Bildschirmen

### Hero-Section

- **Text:** Zentriert auf mobilen Geräten, linksbündig auf Desktop
- **Button:** Responsive Größen und Abstände

### About Me

- **Layout:** Stapelt vertikal auf mobilen Geräten
- **Bild:** Polygon-Clipping mit Wiggle-Animation
- **Text:** Responsive Schriftgrößen und Abstände

### Skills

- **Grid:** 1 Spalte (Mobile) → 2 Spalten (Small) → 3 Spalten (Large) → 4 Spalten (XL)
- **Cards:** Kompakte Höhe mit Hover-Effekten
- **Icons:** Skalieren von 16px auf 20px

### Projects

- **Grid:** Ähnlich wie Skills-Section
- **Bilder:** Responsive Höhen (192px auf Mobile, 224px auf Desktop)
- **Tags:** Kompakte Darstellung mit flex-shrink

### Footer

- **Layout:** Bleibt immer nebeneinander (flex-row)
- **Icons:** 24x24px auf Mobile, 30x30px auf Desktop
- **Text:** Responsive Schriftgrößen

## 🎯 Besondere Features

### Skill-Bars

- Hover-Effekte zeigen Fortschrittsbalken
- Smooth Transitions (1s duration)
- Verschiedene Skill-Level (5% - 70%)

### Modal-System

- Vollbild-Ansicht für Projektbilder
- ESC-Taste zum Schließen
- Klick außerhalb schließt Modal
- Body-Scroll wird blockiert

### Navigation

- Smooth Scrolling zu Anker-Links
- Mobile-Menü schließt sich automatisch
- ARIA-Attribute für Barrierefreiheit

### Kontaktformular

- Client-seitige Validierung
- Erfolgsmeldungen
- Responsive Design

## 🔧 Anpassungen

### Farben ändern

Bearbeiten Sie die `tailwind.config.js` oder die CSS-Variablen in `styles.css`.

### Neue Skills hinzufügen

Kopieren Sie eine bestehende Skill-Card und passen Sie den Inhalt an.

### Neue Projekte hinzufügen

Fügen Sie eine neue Projekt-Card in der Projects-Section hinzu.

### Bilder ersetzen

Legen Sie neue Bilder im `pictures/`-Ordner ab und aktualisieren Sie die Pfade.

## 📱 Browser-Support

- **Chrome:** 90+
- **Firefox:** 88+
- **Safari:** 14+
- **Edge:** 90+

## 🚀 Performance-Optimierungen

- **Lazy Loading** für Bilder
- **CSS-Transitions** statt JavaScript-Animationen
- **Optimierte Schriftarten** mit `display=swap`
- **Minimierte HTTP-Requests**

## 📄 Lizenz

Dieses Projekt steht unter der MIT-Lizenz. Siehe [LICENSE](LICENSE) für Details.

## 👨‍💻 Autor

**Patrick Kaiser**

- Email: mailbox-patrickkaiser@web.de
- GitHub: [@PatKaiUI](https://github.com/PatKaiUI)
- LinkedIn: [Patrick Kaiser](https://www.linkedin.com/in/patrick-kaiser-053316327)

## 🤝 Beitragen

Beiträge sind willkommen! Bitte erstellen Sie einen Pull Request oder öffnen Sie ein Issue.

## 📞 Support

Bei Fragen oder Problemen kontaktieren Sie mich gerne über:

- Email: mailbox-patrickkaiser@web.de
- GitHub Issues

---

**Viel Spaß mit dem Portfolio! 🎉**
