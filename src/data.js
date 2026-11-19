// Every class of the curriculum, with free extra resources.
// To add a video: add a line in `res` → [creator, youtubeId, English label, French label].
// status: 'done' (Nabil finished it), 'here' (Nabil is on it), 'ahead' (Nabil isn't there yet)

export const TERMS = [
  {
    n: 1, weeks: 8, status: 'done',
    classes: [
      {
        id: 'figure-1',
        title: { en: 'Figure Drawing', fr: 'Dessin de figure' },
        note: {
          en: "Gesture first, details later. If your figures look like stiff action figures, welcome to the club. These helped me loosen up.",
          fr: "D'abord le geste, les détails après. Si tes personnages ressemblent à des figurines toutes raides, bienvenue au club. Ces vidéos m'ont aidé à me détendre.",
        },
        res: [
          ['Proko', '2fl5LYouyoY', 'This improves your gesture drawing', 'Ce qui améliore ton dessin gestuel'],
          ['Proko × Michael Hampton', 'tSyGOZjTs5A', 'The 16 line gesture method', 'La méthode du geste en 16 traits'],
          ['Michael Hampton', 'l3gV2vniKhA', 'Gesture drawing, step by step', 'Le dessin gestuel, étape par étape'],
          ['Proko', '_JHt6lOGfRs', 'How to draw balanced poses', 'Dessiner des poses équilibrées'],
        ],
        tryThis: {
          en: '10 minutes a day of 30-second gestures. Ugly is allowed. Ugly is encouraged.',
          fr: "10 minutes par jour de gestes de 30 secondes. Le moche est autorisé. Le moche est même encouragé.",
        },
      },
      {
        id: 'perspective-1',
        title: { en: 'Perspective 1', fr: 'Perspective 1' },
        note: {
          en: "Perspective broke my brain the first time. Watching it explained by 3 different people is what made it click.",
          fr: "La perspective m'a cassé le cerveau la première fois. C'est en la voyant expliquée par 3 personnes différentes que ça a fait tilt.",
        },
        res: [
          ['Proko', 'BYlW8XC0MlI', 'Perspective for beginners', 'La perspective pour débutants'],
          ['Marc Brunet', '_ym83Cvi3wQ', 'Master basic perspective in 10 min', 'Maîtriser les bases de la perspective en 10 min'],
          ['SamDoesArts', 'g9ge4XBNRwA', 'How to draw perspective for beginners', 'Dessiner en perspective quand on débute'],
          ['Proko', 'oUIkswy_sXo', 'Thinking in 3D', 'Penser en 3D'],
        ],
        tryThis: {
          en: 'Draw 20 boxes floating around a horizon line. Then 20 more. Boxes are life now.',
          fr: "Dessine 20 boîtes qui flottent autour d'une ligne d'horizon. Puis 20 de plus. Les boîtes, c'est ta vie maintenant.",
        },
      },
      {
        id: 'photoshop-1',
        title: { en: 'Photoshop for Digital Production 1', fr: 'Photoshop pour la prod numérique 1' },
        note: {
          en: "The software is just a tool. Learn layers, brushes and shortcuts, then get back to drawing.",
          fr: "Le logiciel, c'est juste un outil. Apprends les calques, les pinceaux et les raccourcis, puis retourne dessiner.",
        },
        res: [
          ['Trent Kaniuga', 'ZOQ0A46IAGI', 'Complete beginner guide to drawing in Photoshop', 'Le guide complet pour débuter le dessin dans Photoshop'],
          ['SamDoesArts', 'OzemCeywKOM', 'Digital art essentials for beginners', "L'essentiel de l'art numérique pour débuter"],
          ['Proko', 'szxDoCHvERI', 'How to use layers for digital painting', 'Bien utiliser les calques'],
          ['Ahmed Aldoori', 'ZfgVAdKaXuU', 'Photoshop shortcuts for painting', 'Les raccourcis Photoshop pour peindre'],
          ['Marc Brunet', '8LjpkHVjoQo', 'Free brushes and how to use them', 'Des pinceaux gratuits et comment les utiliser'],
        ],
        tryThis: {
          en: 'Learn 5 shortcuts this week (brush size, undo, flip canvas, eyedropper, new layer). Flip canvas will humble you.',
          fr: "Apprends 5 raccourcis cette semaine (taille du pinceau, annuler, retourner le canevas, pipette, nouveau calque). Retourner le canevas va te rendre humble.",
        },
      },
      {
        id: 'viscom-1',
        title: { en: 'Visual Communication 1', fr: 'Communication visuelle 1' },
        note: {
          en: "This one is all about learning to observe. Sounds easy, it's not. Your brain loves drawing what it thinks it sees instead of what's really there.",
          fr: "Ici, tout tourne autour de l'observation. Ça a l'air facile, ça ne l'est pas. Ton cerveau adore dessiner ce qu'il croit voir au lieu de ce qui est vraiment là.",
        },
        res: [
          ['Marc Brunet', '3LY7Idx_c6g', 'The most important art skill everyone ignores', 'La compétence la plus importante que tout le monde ignore'],
          ['pikat', '7ntOvwLzRtg', 'The first thing every artist should learn', 'La première chose que tout artiste devrait apprendre'],
          ["Excal's Art Tips", 'hC9vZwFS5eU', 'Observation tips for beginners', "Conseils d'observation pour débutants"],
          ['Proko', '1J7RQvKnWf4', 'How to draw accurate proportions', 'Dessiner des proportions justes'],
          ['Proko', 'hvrbyeMBgyw', 'That measuring thing artists do with their pencil', 'Le truc du crayon tendu pour mesurer'],
          ['David Finch', 'BT7F3aUG5Z4', 'Drawing with negative space', "Dessiner avec l'espace négatif"],
        ],
        tryThis: {
          en: "Pick a mug. Look at it for 1 minute without drawing. Then draw it. Then compare. Then look again. That loop is the whole class.",
          fr: "Prends une tasse. Regarde-la 1 minute sans dessiner. Puis dessine-la. Puis compare. Puis regarde encore. Cette boucle, c'est tout le cours.",
        },
      },
    ],
  },
  {
    n: 2, weeks: 8, status: 'done',
    classes: [
      {
        id: 'viscom-2',
        title: { en: 'Visual Communication 2', fr: 'Communication visuelle 2' },
        note: {
          en: "The elements of art: line, shape, form, value, color, texture, space... The building blocks every image is made of. Kind of like the alphabet, but for drawing.",
          fr: "Les éléments de l'art : la ligne, la forme, le volume, la valeur, la couleur, la texture, l'espace... Les briques de base de toute image. Un peu comme l'alphabet, mais pour le dessin.",
        },
        res: [
          ['Jescia Hopper', 'wQhuN1iR_9Q', 'Understanding the elements of art', "Comprendre les éléments de l'art"],
          ['Melissa Allshouse', 'nbXLcUkae9k', 'Elements of art', "Les éléments de l'art"],
          ['KQED Art School', 'BDePyEFT1gQ', 'Elements of art: line', "Éléments de l'art : la ligne"],
          ['KQED Art School', 'bJzGkZwkHt4', 'Elements of art: shape', "Éléments de l'art : la forme"],
          ['Proko', 'RFQtsXktc9g', 'Train your eyes to see values', 'Entraîner tes yeux à voir les valeurs'],
          ['Melissa Allshouse', 'vYNa7L0f_go', 'Principles of design (bonus)', 'Les principes du design (bonus)'],
        ],
        tryThis: {
          en: 'Draw the same apple 4 times: only lines, only flat shapes, only values, only texture. Same apple, 4 personalities.',
          fr: "Dessine la même pomme 4 fois : que des lignes, que des formes plates, que des valeurs, que de la texture. Même pomme, 4 personnalités.",
        },
      },
      {
        id: 'photoshop-2',
        title: { en: 'Photoshop for Digital Production 2', fr: 'Photoshop pour la prod numérique 2' },
        note: {
          en: "Still about handling the tool, no color yet. Selections, masks, transform, brush settings... The stuff that makes you faster and lets you fix a drawing without redoing it.",
          fr: "Toujours la prise en main de l'outil, pas encore de couleur. Sélections, masques, transformation, réglages des pinceaux... Ce qui te rend plus rapide et te permet de corriger un dessin sans tout refaire.",
        },
        res: [
          ['Winged Canvas', 'b9pnEfsjWUg', 'Use layers to your advantage (clipping masks, alpha lock, blend modes)', "Utiliser les calques à ton avantage (masques d'écrêtage, verrouillage alpha, modes de fusion)"],
          ['Jesus Conde Art', '5eWnQ4xZKVo', 'Photoshop selection tools explained', 'Les outils de sélection expliqués'],
          ['Daniel Ang Art', 'jIKsQckc5eo', 'How to paint with the lasso tool', 'Peindre avec le lasso'],
          ['Daniel Ang Art', 'KnvsoJCnJWY', 'Every custom brush setting explained', 'Chaque réglage de pinceau expliqué'],
          ['Peter Mohrbacher', 'CKs-OeZgxFo', "You're using the wrong brush settings", 'Tu utilises les mauvais réglages de pinceau'],
          ["Yes I'm a Designer", 'hlCm7b373b0', 'Puppet warp vs liquify', 'Déformation de la marionnette vs Fluidité'],
          ['Daniel Ang Art', 'Ovl820PVv_E', '20 Photoshop tips for digital artists', '20 astuces Photoshop pour artistes numériques'],
        ],
        tryThis: {
          en: 'Take an old sketch and fix it only with tools: lasso + transform to move an eye, liquify to fix a jaw. No redrawing allowed.',
          fr: "Prends un vieux croquis et corrige-le seulement avec les outils : lasso + transformation pour déplacer un œil, fluidité pour corriger une mâchoire. Interdit de redessiner.",
        },
      },
      {
        id: 'perspective-2',
        title: { en: 'Perspective 2', fr: 'Perspective 2' },
        note: {
          en: "Two-point perspective and foreshortening. Things coming at the camera are scary. Less scary after these.",
          fr: "Perspective à deux points et raccourcis. Les choses qui viennent vers la caméra font peur. Un peu moins après ces vidéos.",
        },
        res: [
          ['Proko', '9-Y4K4hqZwo', 'Two-point perspective made simple', 'La perspective à deux points, en simple'],
          ['Marc Brunet', 'DxWbvzHHeZo', 'Master basic perspective in 10 min (part 2)', 'Maîtriser les bases de la perspective en 10 min (partie 2)'],
          ['Marc Brunet', 'aAmB06cjOYk', 'How to actually draw foreshortening', 'Comment vraiment dessiner les raccourcis'],
        ],
        tryThis: {
          en: 'Draw a cylinder pointing straight at you, 10 times. Then make it an arm. Then cry a little. Then do 10 more.',
          fr: "Dessine un cylindre pointé droit vers toi, 10 fois. Puis transforme-le en bras. Puis pleure un peu. Puis refais-en 10.",
        },
      },
      {
        id: 'anatomy-1',
        title: { en: 'Anatomy 1 (the head)', fr: 'Anatomie 1 (la tête)' },
        note: {
          en: "Only the head here. Chommang is gold if you like the anime style, Loomis if you want the classic way. Do both.",
          fr: "Seulement la tête ici. Chommang c'est de l'or si tu aimes le style anime, Loomis si tu veux la méthode classique. Fais les deux.",
        },
        res: [
          ['Proko', 'wAOldLWIDSM', 'Quickly draw heads with the Loomis method', 'Dessiner des têtes rapidement avec la méthode Loomis'],
          ['Proko', '1EPNYWeEf1U', 'How to draw the head from any angle', 'Dessiner la tête sous tous les angles'],
          ['Proko × Michael Hampton', 'FUeIcLR8iM0', 'Step by step portrait construction', 'Construire un portrait étape par étape'],
          ['Chommang', 'GjiCQfCMXow', 'How to draw a basic face shape', 'Dessiner la forme de base d\'un visage'],
          ['Chommang', 'sIHxjUZ61z0', 'I knew the Loomis method but couldn\'t draw faces', 'Je connaissais Loomis mais je n\'arrivais pas à dessiner des visages'],
          ['Sinix Design', '_HDyk4dy7kc', 'Anatomy quick tips: noses', "Astuces d'anatomie : le nez"],
          ['Sinix Design', 'EdLBGJ4wjFA', 'Anatomy quick tips: mouths', "Astuces d'anatomie : la bouche"],
          ['Ahmed Aldoori', '0A_kQsxeeTE', 'The 100 heads challenge', 'Le défi des 100 têtes'],
        ],
        tryThis: {
          en: '25 heads, 25 different angles. Just the ball and the jaw. No eyelashes. Put the eyelashes down.',
          fr: "25 têtes, 25 angles différents. Juste la boule et la mâchoire. Pas de cils. Lâche les cils.",
        },
      },
    ],
  },
  {
    n: 3, weeks: 6, status: 'here',
    classes: [
      {
        id: 'zbrush',
        skipped: true,
        title: { en: 'ZBrush for Digital Production', fr: 'ZBrush pour la prod numérique' },
        res: [],
      },
      {
        id: 'clothed-figure',
        title: { en: 'Clothed Figure Drawing', fr: 'Dessin de figure habillée' },
        note: {
          en: "Folds look random until someone shows you the 7 types. Then they're everywhere. Your hoodie is a lesson now.",
          fr: "Les plis ont l'air aléatoires jusqu'à ce qu'on te montre les 7 types. Après, tu les vois partout. Ton sweat est devenu un cours.",
        },
        res: [
          ['Marc Brunet', 'EkQRcGFMZL0', 'How to draw every type of fold (the 7 laws)', 'Dessiner tous les types de plis (les 7 lois)'],
          ['Marc Brunet', 'uqo2h8fsMAM', 'How to draw clothing folds every time', 'Dessiner les plis des vêtements à chaque fois'],
          ['Marco Bucci', 'd07NanfYT8U', 'Understanding every type of clothing fold', 'Comprendre chaque type de pli'],
          ['Proko × Michael Hampton', 'VbeYtJ4bUu4', 'The first steps to drawing clothes right', 'Les premières étapes pour bien dessiner les vêtements'],
          ['Proko × Michael Hampton', 'mFxOAO7yW14', 'The easy way to shade folds and clothing', 'La façon simple d\'ombrer les plis'],
        ],
        tryThis: {
          en: 'Throw a t-shirt on a chair and draw it 5 times from 5 sides. Free model, never complains.',
          fr: "Jette un t-shirt sur une chaise et dessine-le 5 fois sous 5 angles. Modèle gratuit, ne se plaint jamais.",
        },
      },
      {
        id: 'anatomy-2',
        title: { en: 'Anatomy 2 (the torso)', fr: 'Anatomie 2 (le buste)' },
        note: {
          en: "Ribcage, chest, shoulders, abs: the whole torso. Artwod's video on construction is literally what unblocked me here. Big thanks to him.",
          fr: "Cage thoracique, pecs, épaules, abdos : tout le buste. La vidéo d'Artwod sur la construction, c'est littéralement ce qui m'a débloqué ici. Merci à lui.",
        },
        res: [
          ['Artwod', 'BX_OyNa9wQw', '2 techniques that fixed my figure drawing', 'Les 2 techniques qui ont réglé mon dessin de figure'],
          ['Proko', '0psVxFg0t1A', 'How to draw the rib cage', 'Dessiner la cage thoracique'],
          ['Proko', 'PRM7pT-Yric', 'How to draw pecs', 'Dessiner les pectoraux'],
          ['Proko', 'xGf8jcTZu2w', 'How to draw deltoids (shoulders)', 'Dessiner les deltoïdes (épaules)'],
          ['Proko', 'KD0qkW1mexI', 'How to draw abs', 'Dessiner les abdos'],
          ['Proko', 'SUHjijIsvgg', 'How to draw obliques', 'Dessiner les obliques'],
          ['Proko', '-uze2IRAc1k', 'The neck: forms you should know', 'Le cou : les formes à connaître'],
          ['Marc Brunet', 'VUKd7BF8yC0', 'Drawing the male body (construction explained)', 'Dessiner le corps masculin (construction expliquée)'],
          ['Chommang', 'cUswUc_ofd4', 'How to draw bodies with boxes', 'Dessiner le corps avec des boîtes'],
        ],
        tryThis: {
          en: 'Draw 20 torsos as a simple ribcage egg + pelvis box first. Twist them. Bend them. Only then add the muscles.',
          fr: "Dessine 20 bustes avec juste l'œuf de la cage thoracique et la boîte du bassin. Tords-les. Penche-les. Ensuite seulement, ajoute les muscles.",
        },
      },
    ],
  },
  {
    n: 4, weeks: 7, status: 'ahead',
    classes: [
      {
        id: 'color-light-1',
        title: { en: 'Color & Light Theory 1', fr: 'Théorie de la couleur et de la lumière 1' },
        note: {
          en: "Marco Bucci is the person everyone points to for light, and after watching these out of curiosity, I get why.",
          fr: "Marco Bucci, c'est la personne que tout le monde recommande pour la lumière, et après avoir regardé ces vidéos par curiosité, je comprends pourquoi.",
        },
        res: [
          ['Marco Bucci', 'xcCJ2CU-bFw', 'Light and shadow (10 minutes to better painting)', 'Lumière et ombre (10 minutes pour mieux peindre)'],
          ['Marco Bucci', 'DQ5QF0q4QqQ', 'The shading lesson that made my career possible', 'La leçon d\'ombrage qui a lancé sa carrière'],
          ['Sinix Design', 'ZJkIaMECW6c', 'Improve your art with better shadows', 'Améliore ton art avec de meilleures ombres'],
          ['SamDoesArts', '0JJur-9g1wY', 'Do you have flat rendering syndrome?', 'Tu souffres du syndrome du rendu plat ?'],
        ],
        tryThis: {
          en: 'Put an egg under a desk lamp. Paint it in grayscale. The humble egg teaches everything.',
          fr: "Mets un œuf sous une lampe de bureau. Peins-le en niveaux de gris. L'humble œuf enseigne tout.",
        },
      },
      {
        id: 'anatomy-3',
        title: { en: 'Anatomy 3 (upper & lower body)', fr: 'Anatomie 3 (haut et bas du corps)' },
        note: {
          en: "Arms, legs, and the final boss: hands. Proko breaks it down muscle by muscle, Chommang makes hands less terrifying.",
          fr: "Les bras, les jambes, et le boss final : les mains. Proko décortique muscle par muscle, Chommang rend les mains moins terrifiantes.",
        },
        res: [
          ['Proko', 'Ai0s4KHi_js', 'Drawing arm bones', 'Dessiner les os du bras'],
          ['Proko', 'E_7tSCm3FzE', 'How to draw biceps', 'Dessiner les biceps'],
          ['Proko', 'VFTA4vFQVpM', 'How to draw legs: bone anatomy', 'Dessiner les jambes : les os'],
          ['Proko', '14yBwKaBY48', 'The secret to drawing better arms and legs', 'Le secret pour mieux dessiner bras et jambes'],
          ['Chommang', 'eAhHgPZASYQ', 'How to draw hands: useful tips', 'Dessiner les mains : astuces utiles'],
          ['Proko', '6-U41n1678I', 'What everyone gets wrong drawing hands', 'Ce que tout le monde rate en dessinant les mains'],
        ],
        tryThis: {
          en: 'Draw your own non-drawing hand 20 times. It\'s right there. No excuses.',
          fr: "Dessine ta main qui ne dessine pas, 20 fois. Elle est juste là. Aucune excuse.",
        },
      },
      {
        id: 'perspective-3',
        title: { en: 'Perspective 3', fr: 'Perspective 3' },
        note: {
          en: "Putting bodies and objects in perspective from imagination. Big step. Take it slow.",
          fr: "Mettre des corps et des objets en perspective, de tête. Grosse étape. Vas-y doucement.",
        },
        res: [
          ['Marc Brunet', 'OpwQA7709j8', 'Drawing anatomy in perspective', 'Dessiner l\'anatomie en perspective'],
          ['Proko', 'f2oGv1Hf7-k', 'Drawing hands in perspective', 'Dessiner les mains en perspective'],
          ['Proko', '-Ww0BXehQ5E', 'Learning to sketch from imagination', 'Apprendre à dessiner de tête'],
        ],
        tryThis: {
          en: 'Draw a simple room in 2-point perspective, then put a box-person sitting in it.',
          fr: "Dessine une pièce simple en perspective à deux points, puis assieds-y un personnage fait de boîtes.",
        },
      },
    ],
  },
  {
    n: 5, weeks: 8, status: 'ahead',
    classes: [
      {
        id: 'animals',
        title: { en: 'Animal & Creature Drawing', fr: 'Dessin d\'animaux et de créatures' },
        note: {
          en: "Animals are just humans that made different life choices. Same construction ideas, different proportions.",
          fr: "Les animaux, ce sont juste des humains qui ont fait d'autres choix de vie. Même construction, autres proportions.",
        },
        res: [
          ['Proko × Aaron Blaise', 'dX4LbI_5kmQ', 'Zoo sketching: lions, tigers and bonobos', 'Croquis au zoo : lions, tigres et bonobos'],
          ['Michael Hampton', 'ekOxguITkH8', 'How to draw any animal', 'Dessiner n\'importe quel animal'],
          ['Michael Mattesi', 'xSI4vRBQ0KA', 'What I wish I knew about drawing animals', 'Ce qu\'il aurait aimé savoir sur le dessin d\'animaux'],
        ],
        tryThis: {
          en: 'Pause a nature documentary every 10 seconds and do a 1-minute gesture. Free zoo.',
          fr: "Mets pause sur un documentaire animalier toutes les 10 secondes et fais un geste d'une minute. Zoo gratuit.",
        },
      },
      {
        id: 'sculpting',
        skipped: true,
        title: { en: 'Figure Sculpting (ZBrush)', fr: 'Sculpture de figure (ZBrush)' },
        res: [],
      },
      {
        id: 'character-design',
        title: { en: 'Character Design', fr: 'Character design' },
        note: {
          en: "The fun part. Shapes tell the personality before the face does.",
          fr: "La partie fun. Les formes racontent la personnalité avant même le visage.",
        },
        res: [
          ['Marc Brunet', 'j_M7cjf0jC0', 'How to design unforgettable characters', 'Créer des personnages inoubliables'],
          ['Marc Brunet', '6KCN7i229JM', 'Character artist starter pack', 'Le kit de départ du character artist'],
          ['Artwod', '4Gw6BDNPnmM', 'Master these 4 rules and you can draw characters', 'Maîtrise ces 4 règles et tu sauras dessiner des personnages'],
          ['SamDoesArts', 'dL40ig1JEJw', 'Sam rates your character designs', 'Sam note vos character designs'],
        ],
        tryThis: {
          en: 'Design the same character 3 times: one with circles, one with squares, one with triangles.',
          fr: "Dessine le même personnage 3 fois : un en ronds, un en carrés, un en triangles.",
        },
      },
    ],
  },
  {
    n: 6, weeks: 6, status: 'ahead',
    classes: [
      {
        id: 'color-light-2',
        title: { en: 'Color & Light Theory 2', fr: 'Théorie de la couleur et de la lumière 2' },
        note: {
          en: "Color harmony and mood. The point where paintings start to feel like a place.",
          fr: "L'harmonie des couleurs et l'ambiance. Le moment où une peinture commence à ressembler à un vrai lieu.",
        },
        res: [
          ['Marco Bucci', '4LhcNbFMkTw', 'Colour harmony', 'L\'harmonie des couleurs'],
          ['Marco Bucci', 'gwLQ0cDb4cE', 'Understanding shadow colors', 'Comprendre la couleur des ombres'],
          ['SamDoesArts', 'awasMxRmi50', 'How I paint mood and atmosphere', 'Comment il peint l\'ambiance et l\'atmosphère'],
          ['Marc Brunet', 'hZqkbvA2Lek', 'Once you understand this about colors...', 'Une fois que tu comprends ça sur les couleurs...'],
        ],
        tryThis: {
          en: 'Paint the same tiny scene 3 times: morning, sunset, night.',
          fr: "Peins la même petite scène 3 fois : le matin, au coucher du soleil, la nuit.",
        },
      },
      {
        id: 'composition',
        title: { en: 'Composition & Storytelling', fr: 'Composition et narration' },
        note: {
          en: "Where you put things matters as much as how well you draw them.",
          fr: "Où tu places les choses compte autant que la qualité de ton dessin.",
        },
        res: [
          ['Marc Brunet', 'Zbi_XUtb1Mk', 'Better composition, better art', 'Meilleure compo, meilleur art'],
          ['Sinix Design', 'aovyWGBj-nc', 'Design theory: composition', 'Théorie du design : la composition'],
          ['Feng Zhu (FZD)', 'fsQ7eTmR27U', 'Environmental composition', 'La composition des environnements'],
          ['Proko', 'usvintIWaFs', 'How to invent scenes from imagination', 'Inventer des scènes de tête'],
        ],
        tryThis: {
          en: 'Pause your favorite movie 10 times and sketch the shot in 2 minutes each. Directors are free teachers.',
          fr: "Mets pause 10 fois sur ton film préféré et croque le plan en 2 minutes. Les réalisateurs sont des profs gratuits.",
        },
      },
      {
        id: 'mech-design',
        title: { en: 'Mech Design', fr: 'Mech design' },
        note: {
          en: "Robots and machines. Your perspective boxes finally get to be cool.",
          fr: "Robots et machines. Tes boîtes en perspective ont enfin le droit d'être stylées.",
        },
        res: [
          ['Feng Zhu (FZD)', 'oSVFil_2TV0', 'Design Cinema: mech design part 1', 'Design Cinema : mech design partie 1'],
        ],
        tryThis: {
          en: 'Turn a kitchen appliance into a robot. Toasters make great robots.',
          fr: "Transforme un appareil de cuisine en robot. Les grille-pain font d'excellents robots.",
        },
      },
      {
        id: 'materials',
        title: { en: 'Physics of Materials', fr: 'Physique des matériaux' },
        note: {
          en: "Metal, skin, cloth... why they all react to light differently.",
          fr: "Le métal, la peau, le tissu... pourquoi ils réagissent tous différemment à la lumière.",
        },
        res: [
          ['SamDoesArts', 'ybR6Kn62wl0', 'You too can draw armor', 'Toi aussi tu peux dessiner une armure'],
          ['SamDoesArts', 'fliJ_lttI0c', 'The best way to render skin', 'La meilleure façon de rendre la peau'],
          ['Artwod', 'nsVr5hY-Jhw', 'How to become scary good at rendering', 'Devenir très fort en rendu'],
        ],
        tryThis: {
          en: 'Paint 3 spheres: one metal, one rubber, one glass. Same light for all three.',
          fr: "Peins 3 sphères : une en métal, une en caoutchouc, une en verre. Même lumière pour les trois.",
        },
      },
    ],
  },
  {
    n: 7, weeks: 6, status: 'ahead',
    classes: [
      {
        id: 'enhanced-learning',
        title: { en: 'Enhanced Learning', fr: 'Apprendre mieux' },
        note: {
          en: "How to learn, not just what to learn. Honestly, watch these whatever term you're in.",
          fr: "Comment apprendre, pas seulement quoi apprendre. Franchement, regarde-les peu importe ton terme.",
        },
        res: [
          ['Artwod', 'hKBmOAisTNA', 'How to draw for infinite progress', 'Dessiner pour progresser à l\'infini'],
          ['Artwod', 'JOkAfQ2Wwqw', 'How to grow your art in record time (using science)', 'Progresser en un temps record (avec la science)'],
          ['Marc Brunet', 'plmEAu8BwPw', 'This learning method changed my life', 'Cette méthode d\'apprentissage a changé sa vie'],
          ['Marc Brunet', 'BzPLTcHtw0Y', 'Drawing practice that makes you worse', 'La pratique qui te fait régresser'],
        ],
        tryThis: {
          en: 'Write down the one thing you\'re bad at right now. Spend 20 minutes on only that.',
          fr: "Note la chose sur laquelle tu es le plus nul en ce moment. Passe 20 minutes uniquement dessus.",
        },
      },
      {
        id: 'personal-1',
        title: { en: 'Personal Project 1', fr: 'Projet perso 1' },
        note: {
          en: "Your first project of your own. Keep it small enough to finish.",
          fr: "Ton premier projet à toi. Garde-le assez petit pour le finir.",
        },
        res: [
          ['Artwod', 'RoIw4WZ9f8k', '3 ways to undo art block', '3 façons de sortir du blocage artistique'],
          ['Marc Brunet', 'FORP4yz2UOY', 'Daily drawing routine', 'Une routine de dessin quotidienne'],
        ],
        tryThis: {
          en: 'One character, one prop, one background. That\'s a project.',
          fr: "Un personnage, un objet, un décor. Ça, c'est un projet.",
        },
      },
      {
        id: 'prop-design',
        title: { en: 'Prop Design', fr: 'Prop design' },
        note: {
          en: "Swords, bags, lamps... objects that tell a story about who owns them.",
          fr: "Épées, sacs, lampes... des objets qui racontent qui les possède.",
        },
        res: [
          ['Ctrl+Paint', 'ZcOCA7UOHjg', 'Concept art playbook: prop options', 'Concept art : des variations d\'objets'],
          ['Tyler Edlin', '5GFxIJFb0oU', 'Design props like a pro', 'Designer des objets comme un pro'],
          ['Artwod', 'Uh_2drydk7Y', '5 minutes to become a better concept artist', '5 minutes pour devenir un meilleur concept artist'],
        ],
        tryThis: {
          en: 'Design 10 versions of the same cup for 10 different owners.',
          fr: "Dessine 10 versions de la même tasse pour 10 propriétaires différents.",
        },
      },
    ],
  },
  {
    n: 8, weeks: 6, status: 'ahead',
    classes: [
      {
        id: 'environment',
        title: { en: 'Environment Design', fr: 'Environment design' },
        note: {
          en: "Places instead of people. Feng Zhu has hundreds of free episodes, these are a good start.",
          fr: "Des lieux au lieu des personnages. Feng Zhu a des centaines d'épisodes gratuits, ceux-là sont un bon début.",
        },
        res: [
          ['Feng Zhu (FZD)', 'P-l9kNXAeGQ', 'Environment thumbnails', 'Les vignettes d\'environnement'],
          ['Feng Zhu (FZD)', 'gsHD5GQ01og', 'The importance of thumbnails', 'L\'importance des vignettes'],
          ['Feng Zhu (FZD)', 'xp5ifMnW3fY', 'Design breakdown', 'Analyse de design'],
        ],
        tryThis: {
          en: '20 tiny environment thumbnails, 2 minutes each. Pick your favorite and push it.',
          fr: "20 mini-vignettes d'environnement, 2 minutes chacune. Choisis ta préférée et pousse-la.",
        },
      },
      {
        id: 'personal-2',
        title: { en: 'Personal Project 2', fr: 'Projet perso 2' },
        note: {
          en: "Second project. Remember: it takes longer than you think, and that's normal.",
          fr: "Deuxième projet. Rappel : ça prend plus de temps que prévu, et c'est normal.",
        },
        res: [
          ['Marc Brunet', 'TA9PYkqvib4', 'How long it really takes to get good at drawing', 'Combien de temps il faut vraiment pour devenir bon'],
          ['Artwod', 'C328-r56cnU', "If you're a struggling artist, please watch this", 'Si tu galères en tant qu\'artiste, regarde ça'],
        ],
        tryThis: {
          en: 'Redo something from Term 1 with everything you know now. Enjoy the glow-up.',
          fr: "Refais un dessin du terme 1 avec tout ce que tu sais maintenant. Savoure le glow-up.",
        },
      },
    ],
  },
  {
    n: 9, weeks: 8, status: 'ahead',
    classes: [
      {
        id: 'matte-painting',
        title: { en: 'Matte Painting', fr: 'Matte painting' },
        note: {
          en: "Mixing photos and paint to build huge scenes.",
          fr: "Mélanger photos et peinture pour créer des scènes immenses.",
        },
        res: [
          ['Marc Brunet', 'dvW16y2IaA0', 'Matte painting in 10 minutes', 'Le matte painting en 10 minutes'],
          ['Envato', '5UnXwzOh71A', 'What is matte painting?', 'C\'est quoi le matte painting ?'],
        ],
        tryThis: {
          en: 'Take a photo of your street and turn it into a fantasy city.',
          fr: "Prends ta rue en photo et transforme-la en ville fantastique.",
        },
      },
      {
        id: 'graphic-design',
        title: { en: 'Intro to Graphic Design', fr: 'Intro au graphisme' },
        note: {
          en: "Fonts, layouts, logos. Useful for your portfolio and covers.",
          fr: "Polices, mises en page, logos. Utile pour ton portfolio et tes couvertures.",
        },
        res: [
          ['LearnFree', 'YqQx75OPRa0', 'Beginning graphic design: fundamentals', 'Débuter en graphisme : les bases'],
          ['Canva', 'UmHMVU6dceA', 'Understanding the principles of design', 'Comprendre les principes du design'],
          ['Envato', '9EPTM91TBDU', 'The principles of design (free course)', 'Les principes du design (cours gratuit)'],
        ],
        tryThis: {
          en: 'Make a fake book cover for one of your drawings.',
          fr: "Fais une fausse couverture de livre pour un de tes dessins.",
        },
      },
      {
        id: 'personal-3',
        title: { en: 'Personal Project 3', fr: 'Projet perso 3' },
        note: {
          en: "Third project. Time to draw what YOU want to draw, from your own head.",
          fr: "Troisième projet. Le moment de dessiner ce que TOI tu veux, sorti de ta tête.",
        },
        res: [
          ['Proko', 'xiyPyrjz7K0', '"Drawing from imagination is too hard"', '« Dessiner de tête, c\'est trop dur »'],
          ['Artwod', 'sub-_xDU8MU', '6 artists fix beginner drawings', '6 artistes corrigent des dessins de débutants'],
        ],
        tryThis: {
          en: 'Draw a scene from your favorite book that never got an illustration.',
          fr: "Dessine une scène de ton livre préféré qui n'a jamais été illustrée.",
        },
      },
    ],
  },
  {
    n: 10, weeks: 4, status: 'ahead',
    classes: [
      {
        id: 'illustration',
        title: { en: 'Digital Illustration (final project)', fr: 'Illustration numérique (projet final)' },
        note: {
          en: "The big final piece with several characters. The dream. One day.",
          fr: "La grosse illustration finale avec plusieurs personnages. Le rêve. Un jour.",
        },
        res: [
          ['Marc Brunet', '7QIsOoAU0YQ', 'My anime drawing process explained', 'Son process de dessin anime expliqué'],
          ['Marc Brunet', 'XTwELmi7sBw', 'This coloring method will change your life', 'Cette méthode de mise en couleur va changer ta vie'],
          ['SamDoesArts', '2LxJOYXcszI', 'Revealing my art secrets', 'Il révèle ses secrets artistiques'],
        ],
        tryThis: {
          en: 'Look at how far you came. Seriously. Then start the thumbnails.',
          fr: "Regarde le chemin parcouru. Sérieusement. Puis commence les vignettes.",
        },
      },
    ],
  },
];
