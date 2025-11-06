# Dunkelmodus Schalter

## Beschreibung
Dieses Projekt bietet ein einfach zu bedienendes JavaScript-Plugin, das es Webseiten ermöglicht, einen Dunkelmodus zu aktivieren. Benutzer können ganz einfach zwischen dem Hell- und Dunkelmodus umschalten, wodurch die Lesbarkeit und Benutzererfahrung bei schlechten Lichtverhältnissen verbessert wird.

## Funktionen
- Einfache Integration in bestehende Projekte
- Anpassbare Farbschemata
- Unterstützt sowohl CSS-Variablen als auch feste Farben
- Benutzerfreundlicher Schalter zur Aktivierung/Deaktivierung des Dunkelmodus
- Speicherung der Benutzereinstellungen im lokalen Speicher

## Installation
1. Füge das Plugin zu deinem Projekt hinzu:
   ```bash
   npm install dunkelmodus-schalter
   ```
2. Importiere das Plugin in deine JavaScript-Datei:
   ```javascript
   import Dunkelmodus from 'dunkelmodus-schalter';
   ```
3. Initialisiere das Plugin:
   ```javascript
   const schalter = new Dunkelmodus();
   ```

## Verwendung
- Füge dem HTML-Code einen Schalter hinzu:
   ```html
   <button id="dunkelmodus-schalters">Schalter umschalten</button>
   ```
- Verknüpfe den Schalter mit der Plugin-Funktionalität:
   ```javascript
   document.getElementById('dunkelmodus-schalters').addEventListener('click', () => {
       schalter.toggle();
   });
   ```

## Beitragen
Wenn du an diesem Projekt mitarbeiten möchtest, fühle dich frei, ein Issue zu erstellen oder einen Pull-Request einzureichen.

## Lizenz
Dieses Projekt ist unter der MIT-Lizenz lizenziert. Siehe die LICENSE-Datei für Details.