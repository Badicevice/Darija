# Darija

Site gratuit pour apprendre l’arabe algérien (darija) quand on parle français.

**En ligne : https://dz-eosin.vercel.app**

Il fonctionne sur ordinateur et sur téléphone. On peut l’installer comme une application, et il marche ensuite hors connexion, audio compris.

## Deux cours

Un sélecteur en haut de la page permet de passer d’un cours à l’autre. Chaque cours garde sa propre progression.

### Darija algérien

Le cours principal, basé sur le parler d’Alger. Quand une autre région dit les choses autrement, c’est signalé par « 📍 Variante régionale ».

- 8 chapitres, du niveau débutant à avancé : saluer, compter, la famille, la maison, sortir, la vie quotidienne, etc.
- Chaque leçon contient du vocabulaire, des explications de grammaire et des dialogues.
- Chaque mot est écrit en lettres latines et en arabe, et se prononce avec un bouton 🔊.
- Dans les dialogues, le **mode écho** fait une pause après chaque réplique pour qu’on la répète.
- Exercices à chaque leçon, un mini-bilan par chapitre et un bilan final.
- Outils :
  - un lexique où l’on peut chercher n’importe quel mot du cours ;
  - une page sur les pièges courants ;
  - une révision du jour, qui fait revenir les questions ratées selon la méthode de répétition espacée.

### Lire l’arabe

Un cours pour apprendre à lire l’écriture arabe.

- **Les 28 lettres :** chacune avec ses 4 formes (isolée, début, milieu, fin), le son de son nom et un mot d’exemple. Un entraînement permet de retrouver une lettre à l’écoute.
- **14 leçons progressives :**
  - les lettres sont regroupées par familles de formes ;
  - viennent ensuite les voyelles courtes et longues, le soukoun, la chadda, l’article ال, les fins de mots et la hamza ;
  - la fin du cours entraîne à la lecture sans voyelles, sur des panneaux, des enseignes et du darija écrit.
- **Lecture guidée :** chaque mot propose trois aides qu’on ouvre l’une après l’autre :
  - lettre par lettre ;
  - le début du mot ;
  - la réponse.
- **Exercices :** choix multiples, écoute, lecture à voix haute avec auto-évaluation, lettres à assembler et tri.

## Comment c’est fait

Le site est entièrement statique : du HTML, du CSS et du JavaScript, sans framework et sans serveur. La progression est enregistrée dans le navigateur de chaque visiteur.

| Fichier | Rôle |
|---|---|
| `index.html`, `cours.js`, `moteur.js` | Cours de darija : contenu des leçons et moteur (navigation, exercices, révision) |
| `lire.html`, `lire.js` | Cours « Lire l’arabe » |
| `style.css` | Style commun aux deux cours |
| `sw.js`, `manifest.json`, `icon*` | Application installable et fonctionnement hors ligne |
| `audio/` | Environ 1 000 prononciations en MP3, plus les mêmes regroupées en 16 paquets `.bin` |
| `fonts/` | Police Noto Naskh Arabic, pour afficher correctement les voyelles arabes |

À la première visite, le navigateur télécharge les 16 paquets audio et les range dans son cache. Tout le site devient alors utilisable hors ligne. Les fichiers MP3 un par un servent de secours si un paquet manque.

Le site est hébergé sur Vercel, qui le republie automatiquement à chaque modification de la branche `main`.

## Lancer le site sur son ordinateur

Il suffit d’un petit serveur web à la racine du dépôt, par exemple :

```bash
python3 -m http.server 8000
```

puis d’ouvrir http://localhost:8000.

## Crédits

- Police : [Noto Naskh Arabic](https://github.com/notofonts/arabic), licence SIL Open Font License (`fonts/OFL.txt`).
- Le bouton en bas à droite renvoie vers la page de dons pour la Palestine du Secours Islamique France. Le site n’en tire aucun revenu.
