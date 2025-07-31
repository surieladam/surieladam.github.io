# Snake Játék Fejlesztési Dokumentáció

## Projekt Áttekintés
- **Projekt neve:** Snake (Kígyós játék)
- **Technológiák:** HTML, CSS, JavaScript
- **Fejlesztő:** [A Te neved]
- **Fejlesztés kezdete:** 2025. július 31.
- **Referencia:** Get Coding 2! Build Five Computer Games

## Fejlesztési Terv

### 1. Játék Alapkoncepció
- Kígyó irányítása a játéktéren
- Folyamatos mozgás
- Alma/pont gyűjtés
- Növekvő kígyóhossz
- Ütközés = játék vége

### 2. Technikai Elemek
- HTML `<canvas>` játéktér
- JavaScript játéklogika
- Billentyűzet kezelés
- Pontrendszer

### 3. Fejlesztési Lépések
1. ✅ Játéktér létrehozása (canvas)
2. ⬜ Kígyó megjelenítése
3. ⬜ Kígyó mozgatása
4. ⬜ Billentyűzet kezelés
5. ⬜ Alma megjelenítése
6. ⬜ Ütközés detektálás
7. ⬜ Pontszám számolás
8. ⬜ Játék vége állapot

## Jelenlegi Állapot

### Elkészült elemek:
1. Alap HTML struktúra
2. Canvas játéktér (400x400 pixel)
3. Egyszerű CSS stílus
4. Pontszámláló megjelenítése

### HTML Struktúra
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Snake Game</title>
    <!-- Reszponzív design és stílusok -->
</head>
<body>
    <h1>Snake Game</h1>
    <canvas id="gameCanvas" width="400" height="400"></canvas>
    <p>Score: <span id="score">0</span></p>
</body>
</html>
```

## Következő Lépések
- JavaScript játéklogika implementálása
- Kígyó rajzolása a canvasra
- Mozgás kezelése

## Jegyzetek
- A játéktér háttérszíne: #f0f0f0
- Canvas méret: 400x400 pixel
- A játék mobilbarát kialakítású lesz