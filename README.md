# The Other Angle

Free extra resources for every class of Marc Brunet's ARTSchool, term by term (EN/FR).

## Lancer en local
    npm install
    npm run dev

## Ajouter une vidéo
Dans `src/data.js`, trouve le cours et ajoute une ligne dans `res` :

    ['Nom du créateur', 'ID_YOUTUBE', 'Titre en anglais', 'Titre en français'],

L'ID YouTube, c'est la partie après `watch?v=` dans le lien.

## Changer ton avancement
Dans `src/data.js`, chaque terme a un `status` : `'done'` (fait), `'here'` (j'en suis là), `'ahead'` (pas encore).

## Textes du site
Tous les textes (EN et FR) sont dans `src/i18n.js`.

## Mettre en ligne
    npx --yes vercel deploy --prod --yes
