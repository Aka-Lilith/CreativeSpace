// ─── GÉNÉRATEUR LOCAL — Lilith's Creative Studio ─────────────────────────────
// Fichier séparé du code principal pour ne pas alourdir Babel
// Toutes les variables sont globales (var) pour être accessibles depuis index.html

// ─── Fonction utilitaire ──────────────────────────────────────────────────────
var pick = function(arr) {
  if (!arr || arr.length === 0) return null;
  return arr[Math.floor(Math.random() * arr.length)];
};

// ─── BANQUE DE DONNÉES ────────────────────────────────────────────────────────
var GEN_BANK = {

  // ── Exercices par compétence ─────────────────────────────────────────────────
  parCompetence: {

    "Anatomie": [
      {name:"Étude de mains — 5 positions", desc:"Dessine la même main ouverte, fermée, qui pointe, de profil et de dos. Commence par les formes géométriques simples avant d'affiner les doigts."},
      {name:"Portraits de 3/4 — construction", desc:"Trace la sphère du crâne, le plan de la mâchoire, puis place les traits avec les lignes de construction. Fais-en 3 consécutifs pour gagner en fluidité."},
      {name:"Poses dynamiques — ligne d'action", desc:"Trace d'abord une seule courbe d'action, puis construis le personnage autour. L'objectif c'est que la pose soit lisible même réduite à 5cm."},
      {name:"Étude de pieds sous 3 angles", desc:"Pied de face, de côté, de dos. Commence par un bloc rectangulaire avant d'arrondir. Beaucoup évitent les pieds — c'est le moment de s'y coller."},
      {name:"Expressions faciales x6", desc:"Joie, tristesse, colère, dégoût, surprise, peur. Garde le même visage de base et change uniquement les sourcils, les yeux et la bouche."},
      {name:"Corps en 7 têtes — proportions", desc:"Empile 7 rectangles de la hauteur d'une tête. Place les articulations aux bons niveaux : épaules à 1.5, coudes à 3, hanches à 4, genoux à 5.5."},
      {name:"Torse masculin/féminin — différences", desc:"Dessine les deux faces du même torse en comparatif. Focus sur la largeur des épaules vs hanches, la cage thoracique et la taille."},
      {name:"Étude de dos — colonne et omoplates", desc:"Le dos est souvent négligé. Dessine-le de dos, de 3/4 avec le bras levé pour voir les omoplates en mouvement."},
      {name:"Oreilles sous 3 angles", desc:"Frontale, de profil, légèrement de dessous. Commence par la forme en C avant d'ajouter le tragus, l'hélix et l'anthélix."},
      {name:"Mâchoire et crâne — structure simplifiée", desc:"Schématise le crâne en sphère + boîte pour la mâchoire. Fais 5 variations de forme : carré, ovale, triangulaire, rond, en losange."},
    ],

    "Théorie des couleurs": [
      {name:"Palette monochrome — 5 valeurs", desc:"Prends une seule teinte et crée 5 variations : deux foncées, une neutre, deux claires. Utilise-les pour faire une sphère ou un cube avec ombres et lumières."},
      {name:"Couleurs chaudes vs froides — même scène", desc:"Dessine une scène simple deux fois. Une version avec dominante chaude (oranges, rouges), une avec dominante froide (bleus, verts). Compare l'ambiance."},
      {name:"Couleurs complémentaires — tension visuelle", desc:"Choisis deux complémentaires (bleu/orange, violet/jaune, rouge/vert). Utilise l'une pour le sujet, l'autre pour le fond. Joue avec les proportions."},
      {name:"Température de la lumière", desc:"Dessine le même objet éclairé par une lumière chaude (soleil, bougie) et une froide (lune, LED). Les ombres portées changent aussi de température."},
      {name:"Palette limitée à 3 couleurs", desc:"Choisis 3 couleurs non-consécutives sur la roue chromatique. Tu n'as le droit qu'à ces 3 couleurs + blanc et noir pour toute l'illustration."},
      {name:"Valeurs en niveaux de gris", desc:"Construis une composition en 5 valeurs de gris uniquement (pas de traits). L'objectif est que l'image soit lisible et contrastée sans couleur."},
      {name:"Ambiance jour vs nuit — même lieu", desc:"Dessine la même pièce en version jour et nuit. La palette change complètement — ombres plus longues, sources de lumière différentes."},
      {name:"Couleurs sales vs pures", desc:"Dessine deux versions du même sujet. Une avec des couleurs vives et saturées, une avec des couleurs désaturées mélangées à du gris. Compare l'effet."},
    ],

    "Composition": [
      {name:"Règle des tiers — placement du sujet", desc:"Divise ton format en 9 cases. Place ton sujet sur l'une des 4 intersections. Évite de centrer. Fais 3 miniatures avec 3 placements différents."},
      {name:"Format vertical vs horizontal", desc:"Dessine le même sujet en portrait et en paysage. Observe comment l'espace négatif change l'ambiance et l'équilibre visuel."},
      {name:"Lignes directrices", desc:"Crée une image où les éléments (routes, bras, regards, ombres) guident l'œil vers un point focal. Teste avec des flèches d'abord."},
      {name:"Espace négatif actif", desc:"L'espace vide autour de ton sujet doit avoir une forme intéressante. Dessine d'abord la silhouette, puis remplis le fond."},
      {name:"Composition en triangle", desc:"Place tes 3 éléments principaux sur les sommets d'un triangle imaginaire. Ça stabilise la composition et guide l'œil naturellement."},
      {name:"Premier plan, milieu, arrière-plan", desc:"Crée une scène avec 3 plans distincts. Le premier plan est foncé et détaillé, le milieu est le sujet principal, l'arrière-plan est clair et simplifié."},
      {name:"Miniatures de composition x6", desc:"Fais 6 miniatures en 5 minutes chacune pour la même scène. Explore 6 cadres différents. Aucun détail — juste les masses et l'équilibre."},
    ],

    "Lumière et Ombres": [
      {name:"Source de lumière unique — sphère et cube", desc:"Place ta source en haut à gauche. Dessine une sphère et un cube avec ombre propre, ombre portée et lumière réfléchie (la petite lueur en bas de la sphère)."},
      {name:"Contre-jour", desc:"Le sujet est devant la source de lumière. Résultat : silhouette sombre avec un halo lumineux sur les bords. Essaie avec un personnage devant une fenêtre."},
      {name:"Lumière artificielle colorée", desc:"Dessine un visage éclairé par une bougie (orange, chaud) et par un écran (bleu, froid). Les ombres changent aussi de couleur."},
      {name:"3 sources de lumière — complexité", desc:"Principale (forte, directionnelle), secondaire (douce, côté opposé), ambiante (partout, très douce). Applique les 3 sur un objet simple."},
      {name:"Valeurs sans contours", desc:"Dessine uniquement avec des valeurs, pas de traits. Commence par le fond, puis les zones sombres, puis les zones claires."},
      {name:"Ombres portées — formes complexes", desc:"Une sphère sur un cube, un cube sur un cylindre. Les ombres portées suivent la forme de la surface sur laquelle elles tombent."},
      {name:"Éclairage dramatique — clair-obscur", desc:"80% de l'image dans l'ombre, 20% très éclairé. Un seul point lumineux fort. Inspire-toi de Caravage. Idéal pour un visage ou une main tendue."},
    ],

    "Aquarelle/Peinture": [
      {name:"Lavis progressif — humide sur humide", desc:"Mouille entièrement ta feuille. Pose une couleur diluée et laisse-la se répandre. Ajoute une deuxième couleur avant que la première sèche."},
      {name:"Réserves blanches", desc:"En aquarelle le blanc c'est le papier. Planifie tes zones de lumière avant de commencer et protège-les. Travaille du clair vers le foncé."},
      {name:"Textures au sel", desc:"Après avoir posé un lavis humide, saupoudre du sel de cuisine. Observe le résultat en séchant. Parfait pour simuler des textures organiques."},
      {name:"Dégradé de couleur — 3 passages", desc:"Premier passage léger et pâle. Deuxième quand le premier est sec, sur 2/3 de la zone. Troisième uniquement sur 1/3 pour les zones sombres."},
      {name:"Encre + aquarelle — résistance", desc:"Fais d'abord ton dessin à l'encre imperméable. Laisse sécher. Puis applique des lavis d'aquarelle par-dessus."},
      {name:"Monochrome — toute une image en une couleur", desc:"Choisis une seule couleur et dilue-la à différentes concentrations pour créer toutes tes valeurs."},
      {name:"Feuillage et végétation — aplats et détails", desc:"D'abord des aplats larges pour les masses de verdure. Quand c'est sec, ajoute les détails uniquement là où l'œil accroche."},
    ],

    "Character Design": [
      {name:"Silhouette lisible — test à 5cm", desc:"Dessine ton personnage en silhouette noire. Réduis-le à 5cm. Il doit encore être reconnaissable et son attitude doit être claire."},
      {name:"3 designs pour un même perso", desc:"Prends un archétype (sorcière, guerrier, voleur). Crée 3 versions très différentes en gardant le même concept. Joue sur proportions, formes, silhouettes."},
      {name:"Design de tenue — fonctionnalité et style", desc:"La tenue doit avoir du sens pour le personnage. Dessine-la complète avec accessoires et explique leur utilité."},
      {name:"Expressions pour un même perso x5", desc:"Garde exactement les mêmes proportions de visage mais change les expressions : neutre, joyeux, en colère, triste, dédaigneux."},
      {name:"Fiche de personnage complète", desc:"Silhouette frontale et de dos, gros plan sur le visage, détails des accessoires clés, palette de couleurs officielle (max 5 couleurs). Tout sur une page."},
      {name:"Personnage dans son environnement", desc:"Place ton personnage dans un décor qui lui correspond. Il doit interagir avec quelque chose. L'environnement doit en dire autant que son design."},
      {name:"Redesign d'un archétype connu", desc:"Prends un archétype ultra-classique (elfe, vampire, robot) et casse les codes visuels habituels. Garde le concept, change tout le reste."},
    ],

    "Lineart / Encrage": [
      {name:"20 lignes longues confiantes", desc:"Trace 20 lignes longues d'un seul mouvement de poignet. L'objectif c'est la fluidité, pas la perfection. Un trait confiant imparfait vaut mieux qu'un trait hésitant."},
      {name:"Hachures — 3 techniques de valeurs", desc:"Hachures parallèles, hachures croisées, hachures circulaires. Crée 3 zones de valeur différente avec chaque technique sur le même objet."},
      {name:"Ligne claire vs ligne expressive", desc:"Dessine le même sujet en ligne claire (épaisseur uniforme, propre) et en ligne expressive (variation de pression, énergie visible). Compare l'effet."},
      {name:"Encrage d'un croquis — garder l'énergie", desc:"Prends un croquis léger et encre-le sans repasser partout. L'enjeu c'est de garder la vivacité du croquis original."},
      {name:"Variation d'épaisseur de trait", desc:"Trait fin pour les détails et l'intérieur, trait épais pour les contours et le premier plan. Applique cette règle sur un personnage simple."},
      {name:"Ombre uniquement par hachures", desc:"Pas de remplissage noir plein. Toutes les ombres sont créées uniquement par hachures de densité variable. Exercice de patience et de contrôle."},
    ],

    "Narration visuelle": [
      {name:"Storyboard 3 cases — micro-histoire", desc:"Début, tension, résolution. 3 cases suffisent pour raconter quelque chose. Pas de texte autorisé — tout passe par l'image."},
      {name:"3 plans pour une même scène", desc:"Plan large (contexte), plan américain (relation), gros plan (émotion). Dessine la même scène en 3 cadrages et observe comment le sens change."},
      {name:"Page muette — émotion sans texte", desc:"Raconte une émotion complexe (attente, peur, soulagement) uniquement par le dessin. Pas de bulles, pas d'onomatopées."},
      {name:"Transition cut vs fondu — 2 versions", desc:"Raconte le même passage de temps en cut brutal et en transition douce. Dessine les deux versions et compare le rythme."},
      {name:"Découpage comique — timing visuel", desc:"Une chute en 4 cases. L'humour en BD c'est entièrement une question de timing et de placement des éléments dans la case."},
      {name:"Regard et direction du regard", desc:"Dans 3 cases consécutives, guide l'œil du lecteur uniquement par les regards et les directions des personnages. Sans flèches ni texte."},
    ],

    "Animation": [
      {name:"Bouncing ball — squash & stretch", desc:"Anime une balle qui tombe et rebondit en 12 frames. Étire-la pendant la chute (stretch), écrase-la à l'impact (squash), laisse-la rebondir moins haut à chaque fois."},
      {name:"Walk cycle — 4 poses clés", desc:"Contact, bas, passage, haut. Dessine les 4 poses clés d'un personnage qui marche. La tête doit légèrement monter et descendre à chaque pas."},
      {name:"Anticipation avant un saut", desc:"Avant le saut il y a un mouvement opposé (l'anticipation). Dessine 3 frames : préparation (agenouillé), anticipation (accroupi au max), envol."},
      {name:"Smear frame sur un coup de poing", desc:"Le smear c'est cette frame floue et déformée qui montre la vitesse. Dessine un coup de poing en 5 frames avec un smear exagéré au milieu."},
      {name:"Blink en 5 frames", desc:"Ouvert, mi-fermé, fermé, mi-ouvert, ouvert. Le clignement ne dure qu'un instant — la fermeture est plus rapide que l'ouverture."},
      {name:"Pendule — follow through", desc:"Anime un pendule qui se balance. La tête suit le corps (follow through) et il y a un léger dépassement avant de revenir (overshoot)."},
    ],

    "Pixel Art": [
      {name:"Sprite 16x16 — objet simple", desc:"Choisis un objet (épée, potion, fleur) et dessine-le en 16x16 pixels. Commence par la silhouette en noir, puis ajoute les couleurs (4 max)."},
      {name:"Portrait 32x32 — palette limitée", desc:"Dessine un visage en 32x32. Pas plus de 8 couleurs. La contrainte de résolution force à trouver des solutions créatives pour chaque détail."},
      {name:"Animation marche — 4 frames", desc:"4 frames suffisent pour un walk cycle en pixel art. Contact gauche, milieu, contact droit, milieu. Loop parfait."},
      {name:"Tile de sol répétable", desc:"Crée un tile de 16x16 ou 32x32 qui se répète sans couture visible. Teste en copiant 4 fois le même tile côte à côte."},
      {name:"Dithering — simuler une couleur intermédiaire", desc:"Alterne 2 couleurs en damier pour créer l'illusion d'une troisième couleur. Applique ça pour créer un dégradé entre 2 teintes."},
      {name:"Décor isométrique — un bloc", desc:"Dessine un cube isométrique avec les 3 faces visibles dans 3 valeurs différentes. C'est la base de tous les décors isométriques."},
    ],

    "Digital Art": [
      {name:"50 lignes confiantes sans stabilizer", desc:"Coupe le stabilizer et trace 50 lignes droites d'un seul mouvement. L'objectif c'est de retrouver le contrôle de la tablette sans béquille."},
      {name:"Étude de 3 textures — 3 brushes", desc:"Bois, pierre, tissu. Utilise un brush différent pour chacune. L'enjeu c'est de trouver le bon outil, pas juste la bonne technique."},
      {name:"Portrait en 3 layers seulement", desc:"Layer 1 : fond. Layer 2 : ombres (mode multiply). Layer 3 : lumières (mode screen ou add). Pas de layer de lineart — tout en peinture directe."},
      {name:"Blending mode multiply pour les ombres", desc:"Dessine un personnage ou objet en flat colors, puis ajoute un layer en mode Multiply au-dessus. Peins tes ombres en couleur complémentaire."},
      {name:"Sélection et masque — sujet complexe", desc:"Sélectionne un sujet aux contours complexes (cheveux, feuillage). Utilise un masque de calque pour le découper proprement. Teste 2 méthodes différentes."},
      {name:"Color rough — ambiance avant les détails", desc:"Pose ton illustration en aplats grossiers de couleur en 10 minutes. L'ambiance doit être lisible avant d'ajouter le moindre détail."},
    ],

    "Traditionnel Art": [
      {name:"5 valeurs de gris — sphère au crayon", desc:"Blanc (papier), gris clair, gris moyen, gris foncé, noir. Crée ces 5 valeurs uniquement avec la pression de ton crayon sur une sphère simple."},
      {name:"Estompage progressif", desc:"Trace un dégradé au crayon puis estompe avec le doigt, un tortillon ou une gomme. Observe comment chaque outil donne un résultat différent."},
      {name:"Dessin sur papier teinté", desc:"Prends une feuille de papier coloré. Dessine avec un crayon foncé pour les ombres et un crayon blanc ou pastel pour les lumières."},
      {name:"Encre de Chine + lavis léger", desc:"Fais ton dessin à l'encre. Laisse sécher complètement. Puis applique un lavis très dilué d'aquarelle ou d'encre colorée par-dessus."},
      {name:"Étude de textures — 3 techniques", desc:"Hachures / estompage / pointillé. Applique chacune sur la même zone pour simuler une texture (tissu, écorce, peau). Compare les résultats."},
      {name:"Dessin en aveugle — sans regarder la feuille", desc:"Regarde uniquement ton sujet, pas ta feuille. Trace le contour sans lever le crayon. Ce n'est pas censé être joli — c'est un exercice de connexion œil-main."},
    ],

    "Perspective": [
      {name:"Couloir en perspective 1 point", desc:"Place ton point de fuite au centre. Trace les lignes du sol, du plafond et des murs vers ce point. Ajoute des portes et fenêtres en respectant la convergence."},
      {name:"Coin de rue en perspective 2 points", desc:"2 points de fuite sur la ligne d'horizon. Tous les bords horizontaux convergent vers l'un ou l'autre. Dessine un coin d'immeuble simple."},
      {name:"Vue plongeante — perspective 3 points", desc:"Un 3e point de fuite en bas de la page (ou très haut pour une vue en contre-plongée). Dessine un bâtiment vu de très haut."},
      {name:"Ellipses en perspective", desc:"Les cercles en perspective deviennent des ellipses. Dessine 5 cylindres vus sous différents angles. L'axe de l'ellipse est toujours perpendiculaire à l'axe du cylindre."},
      {name:"Intérieur de pièce — perspective isométrique", desc:"Pas de point de fuite — les lignes parallèles restent parallèles. Dessine une pièce vue en isométrique avec quelques meubles simples."},
      {name:"Objets à différentes hauteurs — même scène", desc:"Dans une scène en perspective 2 points, place 3 objets à des hauteurs différentes. Les lignes horizontales de chaque objet convergent quand même vers les mêmes points."},
    ],

    "Backgrounds": [
      {name:"Décor en masses de couleur — pas de traits", desc:"Commence par les grandes zones de couleur sans aucun trait de contour. Le fond, les volumes, les ombres. La lisibilité doit venir des valeurs."},
      {name:"Façade d'un bâtiment simple", desc:"Un bâtiment de face avec des fenêtres régulières. Focus sur les proportions et la symétrie. Ajoute de la profondeur avec des ombres portées."},
      {name:"Forêt en 3 plans distincts", desc:"Premier plan : arbres sombres et détaillés. Milieu : les sujets principaux. Arrière-plan : silhouettes claires et simplifiées. La brume aide pour la séparation."},
      {name:"Ciel avec nuages — 3 types", desc:"Cumulus (gonflés, blancs), stratus (couches horizontales), cirrus (fins, en altitude). Dessine chaque type en respectant sa logique de forme."},
      {name:"Ville de nuit en silhouette", desc:"Uniquement des silhouettes noires sur un ciel coloré. 2 sources de lumière (réverbères, enseignes). L'important c'est la composition des masses."},
      {name:"Intérieur cozy — lumière et ambiance", desc:"Une pièce avec une source de lumière chaude (lampe, cheminée). La lumière éclaire inégalement — certaines zones sont dans l'ombre. Travaille l'ambiance avant les détails."},
    ],

    "Style personnel": [
      {name:"Copie consciente — analyse et imitation", desc:"Choisis une illustration d'un artiste que tu admires. Copie-la en analysant chaque décision : composition, couleurs, trait, simplifications. Prends des notes."},
      {name:"Même sujet — 3 styles différents", desc:"Dessine exactement le même sujet dans 3 styles consécutifs (réaliste, cartoon, abstrait par exemple). Observe ce que chaque style te demande de sacrifier."},
      {name:"Contrainte créative — 1 forme seulement", desc:"Toute l'illustration est construite à partir d'une seule forme géométrique répétée (cercles uniquement, triangles uniquement). Trouve comment rendre ça cohérent."},
      {name:"5 couleurs max, 30 min max", desc:"Sujet libre, mais uniquement 5 couleurs et 30 minutes. La contrainte de temps et de palette force des décisions rapides et souvent plus intuitives."},
      {name:"Redessine un ancien travail", desc:"Choisis un dessin que tu avais fait il y a au moins 6 mois. Refais-le avec tes compétences actuelles. L'évolution visible est la meilleure motivation."},
    ],

    "Narration visuelle": [
      {name:"Storyboard 3 cases — micro-histoire", desc:"Début, tension, résolution. 3 cases suffisent pour raconter quelque chose. Pas de texte autorisé — tout passe par l'image."},
      {name:"3 plans pour une même scène", desc:"Plan large (contexte), plan américain (relation), gros plan (émotion). Dessine la même scène en 3 cadrages et observe comment le sens change."},
      {name:"Page muette — émotion sans texte", desc:"Raconte une émotion complexe (attente, peur, soulagement) uniquement par le dessin. Pas de bulles, pas d'onomatopées."},
      {name:"Transition cut vs fondu", desc:"Raconte le même passage de temps en cut brutal et en transition douce. Dessine les deux versions et compare le rythme."},
      {name:"Découpage comique — timing visuel", desc:"Une chute en 4 cases. L'humour en BD c'est une question de timing et de placement des éléments dans la case."},
      {name:"Regard et direction — guider l'œil", desc:"Dans 3 cases consécutives, guide l'œil du lecteur uniquement par les regards des personnages. Sans flèches ni texte."},
    ],

    "Illustration vectorielle": [
      {name:"Icône en 3 versions", desc:"Crée l'icône d'un objet en 3 versions : monochrome (1 couleur), deux couleurs, full color. Chaque version doit être lisible à 32x32px."},
      {name:"Personnage flat — 5 formes max", desc:"Construis un personnage complet en utilisant au maximum 5 formes géométriques. Pas de dégradés, pas d'ombres — juste des aplats."},
      {name:"Pattern répétable", desc:"Crée un motif simple qui se répète sans couture visible. Teste en le dupliquant 4 fois. Un bon pattern fonctionne même à petite taille."},
      {name:"Portrait en aplats — aucun dégradé", desc:"Dessine un visage uniquement avec des aplats de couleur plats. L'ombre est une autre couleur, pas un dégradé de la même couleur. Max 6 couleurs."},
      {name:"Reconstruction d'une affiche simple", desc:"Prends une affiche minimaliste que tu admires et recrée-la en formes géométriques pures. L'exercice c'est de comprendre comment elle est construite."},
    ],

    "3D Modeling": [
      {name:"Blocking d'une chaise — 5 primitives", desc:"Utilise uniquement des cubes et cylindres pour bloquer la forme générale d'une chaise. Pas de détails — juste les volumes et les proportions correctes."},
      {name:"Boolean — creuser une fenêtre", desc:"Crée un mur plein puis utilise un boolean soustractif pour y creuser une fenêtre aux bords nets. Vérifie la topologie résultante."},
      {name:"UV unwrap d'un cube texturé", desc:"Unwrap un cube simple, crée une texture avec des couleurs différentes par face, applique-la. C'est la base de tout texturing."},
      {name:"Setup éclairage 3 points", desc:"Lumière principale (key light), lumière de remplissage (fill light, moins intense), lumière de contour (rim light, derrière le sujet). Applique sur un buste simple."},
      {name:"Low poly vs subdivisions", desc:"Modélise un objet simple (pomme, tête) en low poly. Duplique-le et ajoute des subdivisions. Compare les deux rendus pour comprendre le trade-off."},
      {name:"Modélisation depuis une référence", desc:"Prends une photo d'un objet simple (tasse, bouteille). Modélise-le en essayant de respecter les proportions. Pose la référence à côté du viewport."},
    ],
  },

  // ── Exercices de révision par difficulté ─────────────────────────────────────
  revision: {
    Facile: [
      {name:"Formes géométriques en série", desc:"20 cercles, 20 carrés, 20 triangles. Concentre-toi sur la régularité et la fluidité du trait. Simple mais révèle beaucoup sur le contrôle du tracé."},
      {name:"Lignes droites et courbes libres", desc:"50 lignes droites d'un seul trait, 50 courbes. Sans règle. La main doit décider, pas l'outil. C'est la base du contrôle graphique."},
      {name:"Dégradé 5 valeurs au crayon", desc:"Du blanc au noir en 5 étapes distinctes. Utilise uniquement la pression du crayon. Pas de superposition de traits — une seule couche."},
      {name:"Copie d'un objet simple devant toi", desc:"Pose un objet sur ta table (tasse, stylo, livre). Dessine-le en observant vraiment — formes, proportions, ombres. 15 minutes maximum."},
      {name:"Boîte en perspective basique", desc:"Une boîte vue en 3/4 avec 2 points de fuite sur la ligne d'horizon. La base de la perspective. Fais-en 5 de tailles différentes."},
      {name:"Sphère avec ombres simples", desc:"Une sphère avec une source de lumière unique. Ombre propre, ombre portée. Garde ça simple — c'est l'exercice de base des valeurs."},
    ],
    Moyen: [
      {name:"Construction d'un visage en formes", desc:"Crâne = sphère. Mâchoire = boîte arrondie. Place les traits avec des lignes de construction horizontales et verticales. Fais-en 3 de suite."},
      {name:"Perspective 1 point — couloir simple", desc:"Un seul point de fuite au centre. Trace les lignes directrices, puis construis un couloir avec sol, plafond et murs. Ajoute 2 portes."},
      {name:"Palette 3 couleurs sur une sphère", desc:"Choisis 3 couleurs. Utilise la plus foncée pour les ombres, la plus claire pour les lumières, la troisième pour la lumière réfléchie. Pas de noir ni blanc."},
      {name:"Texture au crayon — 3 techniques", desc:"Hachures parallèles, hachures croisées, estompage. Applique les 3 sur le même objet pour créer des textures différentes. Compare les effets."},
      {name:"Étude d'une main en 3 positions", desc:"Main ouverte, poing fermé, doigts qui pointent. Commence par les formes géométriques de base avant d'affiner. Observe ta propre main."},
      {name:"Silhouette de personnage lisible", desc:"Dessine 5 silhouettes de personnages différents (guerrier, mage, voleur, paysan, enfant). Elles doivent être reconnaissables sans aucun détail."},
    ],
    Difficile: [
      {name:"Dessin de mémoire", desc:"Observe une image pendant 30 secondes. Cache-la. Reproduis-la de mémoire. Puis compare. C'est un exercice difficile qui révèle ce que ton cerveau retient vraiment."},
      {name:"Construction anatomique sans référence", desc:"Dessine un torse de face et de 3/4 de mémoire, sans référence. Applique les règles de proportions (7 têtes, articulations aux bons niveaux)."},
      {name:"Perspective 2 points — coin de rue", desc:"Deux points de fuite sur la ligne d'horizon, de chaque côté de la page. Dessine un angle de bâtiment avec des fenêtres sur chaque face."},
      {name:"Illustration complète en 45 minutes", desc:"Sujet libre, palette de 4 couleurs max, 45 minutes chrono. L'objectif c'est de finir — une illustration complète même imparfaite."},
      {name:"Redessin d'un ancien travail", desc:"Choisis un dessin de plus de 6 mois. Refais-le sans regarder l'original jusqu'à la fin. Compare ensuite les deux versions côte à côte."},
      {name:"Portrait sans esquisse — direct à l'encre", desc:"Un portrait directement à l'encre, sans crayon en dessous. Pas de correction possible. L'exercice c'est d'assumer chaque trait."},
    ],
  },

  // ── Sujets par style ─────────────────────────────────────────────────────────
  parStyle: {

    "Dark Fairycore": {
      sujets: ["vieille horloge abandonnée", "poupée de porcelaine fissurée", "miroir qui montre autre chose", "jardin secret la nuit", "maison dans un arbre mort", "chandelier qui pleure de la cire", "bibliothèque envahie de lierre", "cage à oiseaux vide", "carillon de fenêtre sous la lune", "fleurs noires dans un vase brisé", "escalier de bois qui s'enfonce dans les racines", "lanterne posée sur une tombe oubliée"],
      ambiances: ["brume violette qui traîne au sol", "clair de lune bleuté", "lumière de bougie tremblante", "lucioles dans l'obscurité", "pluie fine sur du vieux bois", "crépuscule rose et noir"],
      details: ["toiles d'araignée perlées de rosée", "cristaux qui poussent sur du bois mort", "fleurs noires aux pétales tombants", "papillons de nuit aux ailes peintes", "mousse sur de la pierre humide", "clés rouillées", "plumes sombres"],
    },

    "Nature / Botanique": {
      sujets: ["coupe transversale d'un fruit", "fougère qui se déroule", "branche après la pluie", "champignon de sous-bois", "racines d'un vieux chêne", "étang avec nénuphars", "graine qui s'envole", "nid abandonné", "mousse sur une pierre", "fleur sauvage en macro", "coquillage d'escargot", "lichen sur une écorce"],
      ambiances: ["lumière tamisée en sous-bois", "rosée du matin qui brille", "après l'orage — tout est mouillé", "dorure automnale", "brume matinale sur l'eau", "lumière de fin d'après-midi dorée"],
      details: ["gouttelettes sur les feuilles", "nervures visibles en transparence", "insecte minuscule", "spirales naturelles", "spores ou pollens qui flottent", "tiges cassées qui repoussent"],
    },

    "Steampunk": {
      sujets: ["machine volante bricolée", "horloge mécanique géante", "lunettes à engrenages", "ville sur des rails", "bras mécanique articulé", "sous-marin à hublots", "bibliothèque avec des livres-machines", "personnage mi-humain mi-mécanique"],
      ambiances: ["vapeur dorée qui monte", "cuivre patiné et rouille orange", "coucher de soleil industriel brun-orange", "intérieur d'un atelier encombré", "ciel chargé de dirigeables"],
      details: ["rivets en rangs réguliers", "tuyaux de toutes tailles", "jauges de pression", "courroies et poulies", "roues dentées imbriquées", "manomètres et cadrans"],
    },

    "Fantasy": {
      sujets: ["tour de mage abandonnée", "dragon endormi sur un trésor", "portail vers un autre monde", "arme légendaire plantée dans une roche", "carte d'un royaume imaginaire", "créature gardienne d'un pont", "forêt enchantée avec des yeux lumineux", "palais de glace dans les nuages"],
      ambiances: ["orage magique avec éclairs colorés", "aurore dorée et divine", "ténèbres menaçantes percées de lumière", "forêt enchantée et brumeuse", "coucher de soleil sur un champ de bataille"],
      details: ["runes gravées dans la pierre", "cristaux d'énergie colorés", "capes qui flottent dans le vent", "cicatrices de magie encore fumantes", "champignons géants lumineux", "armures gravées de symboles"],
    },

    "Sci-fi / Cyberpunk": {
      sujets: ["ville la nuit sous la pluie", "androïde qui regarde ses mains", "marché souterrain bondé", "vaisseau abandonné dans l'espace", "interface holographique", "quartier pauvre dans une mégalopole futuriste", "salle de serveurs avec des câbles partout"],
      ambiances: ["néons qui se reflètent dans le sol mouillé", "froid métallique et silence", "lumière de réacteur bleu-blanc", "brouillard artificiel et vapeur", "saturation visuelle d'écrans et de publicités"],
      details: ["câbles apparents et mal rangés", "implants cybernétiques visibles", "publicités géantes en hologramme", "vapeur qui sort des bouches d'égout", "reflets sur le bitume mouillé"],
    },

    "Cozy / Slice of life": {
      sujets: ["coin lecture sous une lampe", "cuisine avec une tasse fumante", "fenêtre avec pluie dehors", "chat sur un rebord de fenêtre", "table avec livres et thé", "escalier d'une vieille maison", "jardin en désordre par une matinée calme", "bibliothèque personnelle bien remplie"],
      ambiances: ["lumière chaude d'une lampe de bureau", "soir d'automne qui tombe tôt", "matin paisible avant que le monde se réveille", "après-midi pluvieux", "douce lumière de fin d'été"],
      details: ["plantes en pot qui débordent", "bougies à moitié consumées", "couvertures entassées en vrac", "livres empilés avec des marque-pages", "tasses ébréchées avec des marques d'usage"],
    },

    "Horreur douce": {
      sujets: ["maison dont les fenêtres ressemblent à des yeux", "forêt qui observe en silence", "objet familier légèrement faux", "porte qui ne devrait pas être là", "reflet qui ne correspond pas", "couloir avec une ombre au bout", "jouet d'enfant dans un endroit étrange"],
      ambiances: ["silence pesant et total", "lumière qui vacille sans raison", "ombres qui ne correspondent pas à leur source", "normalité troublée par un détail impossible"],
      details: ["sourires légèrement trop larges", "trop de dents", "portes entrouvertes sur le noir", "brume qui rampe au sol", "angles qui semblent impossibles", "quelque chose dans le miroir"],
    },

    "Cottagecore": {
      sujets: ["panier de baies sauvages", "robe qui sèche sur un fil entre deux arbres", "abeille sur une fleur sauvage", "four à pain extérieur", "jardin potager en désordre organisé", "bocaux de conserve alignés", "bouquet de fleurs des champs", "piquenique dans l'herbe haute"],
      ambiances: ["lumière dorée de fin d'après-midi", "matin brumeux au bord d'un pré", "chaleur douce de l'été", "fraîcheur du printemps"],
      details: ["lin et coton froissés", "fleurs séchées accrochées", "ficelle de jute et paille", "herbes folles qui poussent entre les pierres", "petits fruits rouges", "abeilles et papillons"],
    },

    "Witchcore": {
      sujets: ["grimoire ouvert avec herbes séchées pressées dedans", "chaudron fumant sur un feu de bois", "chat noir sur une étagère de potions", "cercle de sel dans une forêt", "cristaux et bougies sur une table de travail", "sorcière qui lit des augures dans les nuages"],
      ambiances: ["nuit de pleine lune claire", "crépuscule violet et orange", "intérieur chargé à la lumière de bougies", "forêt nocturne avec quelques étoiles"],
      details: ["plumes noires et os polis", "herbes suspendues à sécher", "cire qui coule sur des bougies", "symboles tracés à la craie", "poudres et pierres dans des bocaux", "encens qui brûle"],
    },

    "Goblincore": {
      sujets: ["collection de cailloux brillants soigneusement rangés", "terrier confortable sous une racine", "champignon géant comme maison", "pile d'objets trouvés", "escargot géant comme monture", "marché de nuit dans les sous-bois", "grenouille avec un chapeau"],
      ambiances: ["sous-bois humide après la pluie", "caverne éclairée de champignons bioluminescents", "marché de nuit chaotique et bruyant"],
      details: ["mousse partout sur tout", "objets rouillés trouvés et chéris", "grenouilles et tritons", "vers dans la bonne terre", "feuilles déchiquetées et trouées", "cailloux brillants triés par couleur"],
    },

    "Mushroomcore": {
      sujets: ["cercle de champignons la nuit", "maison dans un champignon géant", "réseau de mycélium lumineux sous la surface", "personnage qui dort sous un chapeau de champignon", "forêt de champignons géants brumeux"],
      ambiances: ["bioluminescence verte-bleue dans le noir", "brume matinale basse", "sous-bois magique et silencieux"],
      details: ["spores qui flottent dans l'air", "lamelles sous le chapeau", "chapeaux variés en forme et couleur", "mousse verte humide", "insectes nocturnes attirés par la lumière"],
    },

    "Forestpunk": {
      sujets: ["ordinateur envahi par les racines et le lierre", "ville abandonnée reprise par la forêt", "véhicule transformé en serre", "écran brisé avec de la mousse dessus", "câbles devenus des lianes", "technologie et végétation imbriquées"],
      ambiances: ["lumière filtrée par une canopée dense", "verdure qui envahit tout doucement", "humidité et ombre"],
      details: ["câbles qui deviennent des lianes", "métal rouillé couvert de végétation", "écrans cassés avec de la mousse", "racines qui poussent à travers les murs", "circuits imprimés et feuilles mélangés"],
    },

    "Solarpunk": {
      sujets: ["ville jardin avec panneaux solaires intégrés dans les toits", "marché communautaire coloré", "architecture organique couverte de plantes grimpantes", "éolienne fleurie au milieu d'un champ", "serre urbaine sur un toit"],
      ambiances: ["lumière solaire chaude et optimiste", "couleurs vives et naturelles mélangées", "chaleur et vie"],
      details: ["panneaux solaires intégrés élégamment", "ruches urbaines sur les balcons", "jardins suspendus partout", "matériaux naturels et recyclés", "eau qui circule visiblement"],
    },

    "Biopunk": {
      sujets: ["organisme artificiel dans un bocal de verre", "ville mi-organique mi-métallique", "créature hybride technologie et chair", "laboratoire avec des cultures organiques", "bâtiment qui respire"],
      ambiances: ["lumière verte de laboratoire", "humide et vivant de partout", "inquiétant mais fascinant"],
      details: ["tubes organiques translucides", "pulsations visibles dans les structures", "membranes translucides", "bioluminescence rose-verte", "fluides qui circulent dans des conduits"],
    },

    "Ukiyo-e": {
      sujets: ["vague déferlante monumentale", "mont Fuji sous la neige", "geisha sous un parapluie dans la pluie", "carpe koï dans un étang", "branche de cerisier en fleurs", "guerrier en armure dans une posture forte"],
      ambiances: ["estampe traditionnelle aux aplats nets", "composition verticale japonaise", "harmonie et sobriété"],
      details: ["motifs de vagues stylisées", "nuages en formes décoratives", "kimonos à motifs géométriques", "contours noirs épais et nets", "couleurs plates sans dégradé"],
    },

    "Art Nouveau": {
      sujets: ["femme entourée de fleurs qui se transforment en cheveux", "façade d'immeuble avec ornements végétaux", "affiche de spectacle ornementée", "lampe dont le pied est une tige de plante", "bijou composé d'insectes"],
      ambiances: ["élégance organique et florale", "lignes courbes qui ne finissent jamais", "ornement dans chaque espace vide"],
      details: ["lis, iris et tournesols", "libellules aux ailes détaillées", "cheveux qui deviennent des lianes", "cadres ornementaux complexes", "dorure sur fond sombre"],
    },

    "Comics / BD": {
      sujets: ["scène d'action avec onomatopées", "découpage d'une course poursuite", "duo héros et villain face à face", "splash page épique sur une seule image", "case muette très émotionnelle"],
      ambiances: ["dynamisme et énergie", "tension dramatique", "humour décalé", "drame intense"],
      details: ["bulles de dialogue bien placées", "cases à l'oblique pour l'action", "lignes de vitesse", "onomatopées intégrées au dessin", "trames de points pour les demi-teintes"],
    },

    "Storybook": {
      sujets: ["enfant qui découvre une porte secrète dans un jardin", "animal parlant dans une clairière", "sorcière gentille dans sa tour pleine de plantes", "géant endormi dont les cheveux sont une forêt", "maison de pain d'épices dans les bois"],
      ambiances: ["chaleureux et merveilleux", "légèrement mystérieux mais jamais effrayant", "sécurisant et doux"],
      details: ["textures douces et rondes", "couleurs pastel saturées", "petits détails cachés partout dans le décor", "animaux avec des expressions humaines", "plantes et fleurs fantaisistes"],
    },

    "Sketch urbain": {
      sujets: ["café de quartier avec terrasse", "arrêt de bus sous la pluie", "marché en plein air du matin", "façade d'immeuble haussmannien", "pont sur une rivière en ville", "terrasse animée le soir", "rue commerçante avec des enseignes"],
      ambiances: ["lumière naturelle et changeante", "vie quotidienne qui continue", "instantané d'un moment ordinaire"],
      details: ["passants esquissés rapidement", "enseignes et noms de rues", "mobilier urbain usé", "reflets sur les pavés mouillés", "balcons avec des plantes", "ombres longues en fin de journée"],
    },

    "Dreamcore": {
      sujets: ["escalier qui mène nulle part dans les nuages", "chambre d'enfant avec des étoiles vivantes", "animal géant paisible qui traverse une ville endormie", "ciel à l'envers avec des poissons qui nagent", "maison qui flotte sur l'eau"],
      ambiances: ["doux et étrange sans être inquiétant", "pastel surréaliste et calme", "familier mais impossible"],
      details: ["couleurs qui ne devraient pas être là", "objets qui flottent doucement", "perspectives qui ne fonctionnent pas tout à fait", "lumière sans source apparente", "silence visuel"],
    },

    "Liminal spaces": {
      sujets: ["couloir d'hôtel qui n'en finit pas", "piscine intérieure la nuit sans personne", "salle d'attente sans fenêtres", "parking souterrain sous la pluie", "supermarché à 3h du matin", "gymnase d'école vide", "couloir de bureau fluorescent"],
      ambiances: ["vide pesant et silencieux", "lumière fluorescente légèrement verdâtre", "sentiment d'être entre deux moments", "normalité sans âme"],
      details: ["moquette à motifs géométriques usée", "néons qui bourdonnent", "portes au bout de chaque couloir", "silence total rendu visible", "surfaces brillantes et propres mais vieilles"],
    },

    "Mythologie": {
      sujets: ["titan enchaîné à une montagne sous l'orage", "dieu de la mer dans une tempête déchaînée", "labyrinthe avec une présence qu'on ne voit pas", "nymphe qui se transforme en arbre", "barque des morts sur un fleuve noir et calme"],
      ambiances: ["épique et intemporel", "lumière divine aveuglante ou obscurité absolue", "grandeur écrasante"],
      details: ["colonnes de marbre", "couronnes de laurier", "éclairs sculptés", "armures et casques antiques", "symboles divins gravés", "flammes éternelles"],
    },

    "default": {
      sujets: ["une créature fantastique", "un environnement mystérieux", "une plante impossible", "un personnage avec une émotion forte", "un objet magique", "une scène de nuit", "une texture naturelle", "un animal stylisé"],
      ambiances: ["lumière dorée et chaude", "atmosphère mystérieuse", "ambiance sereine"],
      details: ["un détail inattendu", "une source de lumière intéressante", "une texture contrastée"],
    },
  },

  // ── Contraintes par difficulté ────────────────────────────────────────────────
  contraintes: {
    Facile: [
      "en noir et blanc — aucune couleur",
      "en moins de 20 minutes",
      "avec uniquement 3 couleurs",
      "en format carré uniquement",
      "avec un seul outil du début à la fin",
    ],
    Moyen: [
      "en 20 minutes — planifie 5 min, dessine 15 min",
      "avec une palette de 2 couleurs complémentaires uniquement",
      "sans aucune ligne de contour — uniquement des valeurs et des couleurs",
      "en utilisant uniquement ta main non-dominante",
      "en format très allongé (ratio 1:3 minimum)",
      "en commençant par le fond et en allant vers le sujet",
    ],
    Difficile: [
      "en 30 minutes — pas plus, pas moins",
      "avec une seule couleur + le noir + le blanc uniquement",
      "sans esquisse préalable — directement à l'encre ou à la couleur",
      "en format miniature (pas plus grand que 5x5cm)",
      "en travaillant du plus foncé au plus clair uniquement",
      "avec un seul outil — aucun changement de brosse autorisé",
    ],
  },

  // ── Twists créatifs ───────────────────────────────────────────────────────────
  twists: [
    "mais vu de l'intérieur",
    "mais à une échelle incongrue",
    "mais en train de se transformer en autre chose",
    "mais dans 100 ans",
    "mais vu par un insecte",
    "mais sous l'eau",
    "mais en automne avancé",
    "mais la nuit avec une seule source de lumière",
    "mais cassé ou incomplet",
    "mais en train d'être construit",
    "mais recouvert de végétation",
    "mais gélifié ou transparent",
    "mais miniature dans une main",
    "mais reflété dans l'eau",
    "mais vu de très haut",
    "mais comme s'il était vivant",
    "mais en version miniature dans un terrarium",
    "mais vu à travers un verre dépoli",
    "mais à l'aube — couleurs froides et lumière rasante",
    "mais en cours d'abandon — poussière et silence",
    "mais avec une seule source de lumière colorée",
    "mais comme une page de livre illustré ancien",
    "mais vu en coupe transversale",
    "mais représenté uniquement par son ombre",
    "mais en version fantôme — translucide et flottant",
    "mais sous une pluie battante",
    "mais en version géante qui dépasse le cadre",
    "mais composé uniquement de lignes parallèles",
    "mais dans le reflet d'une flaque",
    "mais en train de disparaître progressivement",
  ],

  // ── Conseils par compétence ───────────────────────────────────────────────────
  conseils: {
    "Anatomie": [
      "commence par la ligne d'action avant de construire le corps",
      "dessine les formes géométriques de base avant d'affiner",
      "les mains font 2/3 de la hauteur du visage",
      "la tête tient dans la paume de la main",
      "les yeux sont à mi-hauteur du crâne, pas au sommet",
      "les épaules font 2 têtes de largeur chez l'adulte",
    ],
    "Théorie des couleurs": [
      "teste ta palette en niveaux de gris avant d'appliquer les couleurs",
      "les couleurs chaudes avancent, les froides reculent",
      "une couleur isolée n'a pas de sens — c'est toujours une relation",
      "sature moins que ce que tu crois nécessaire",
      "le blanc et le noir modifient la teinte, pas seulement la valeur",
    ],
    "Composition": [
      "fais 3 miniatures en 5 minutes avant de commencer",
      "le format dicte la composition — adapte-toi ou choisis-le consciemment",
      "l'espace vide est un élément actif, pas un vide",
      "crée de la tension en plaçant ton sujet légèrement hors-centre",
      "varie la taille des éléments pour créer de la hiérarchie",
    ],
    "Lumière et Ombres": [
      "décide d'une seule source de lumière et reste cohérent",
      "les ombres portées sont plus foncées que les ombres propres",
      "la lumière réfléchie est légère — ne pas la surcharger",
      "transitions douces = lumière diffuse, transitions dures = lumière directe",
      "peins d'abord toutes les ombres, puis toutes les lumières",
    ],
    "Aquarelle/Peinture": [
      "mouille le papier pour des fondus, laisse-le sec pour des contours nets",
      "travaille toujours du clair vers le foncé",
      "laisse sécher complètement avant d'ajouter une couche",
      "les erreurs en aquarelle sont souvent des heureux accidents",
      "ne cherche pas à tout contrôler — laisse le médium travailler",
    ],
    "Character Design": [
      "la silhouette doit être lisible à 5cm de hauteur",
      "chaque accessoire doit avoir une raison d'être",
      "la tenue en dit autant sur le personnage que son visage",
      "varie les formes : personnages ronds vs anguleux, grands vs petits",
      "un personnage mémorable a une caractéristique distinctive forte",
    ],
    "Lineart / Encrage": [
      "varie l'épaisseur du trait pour créer de la profondeur",
      "les lignes du premier plan sont plus épaisses",
      "les traits confiants sont plus beaux que les traits hésitants",
      "les erreurs d'encrage peuvent devenir des éléments de composition",
      "laisse respirer — tout n'a pas besoin d'être encré",
    ],
    "Narration visuelle": [
      "la silhouette des personnages doit être lisible même très petite",
      "chaque case doit faire avancer l'histoire — coupe les cases inutiles",
      "le blanc entre les cases est aussi important que les cases elles-mêmes",
      "varie la taille des cases pour créer du rythme",
      "un regard suffit à indiquer la direction que doit suivre l'œil du lecteur",
    ],
    "Animation": [
      "les 12 principes d'animation sont des guides, pas des règles absolues",
      "le timing c'est tout — une bonne action mal timée ne fonctionne pas",
      "dessine les poses clés d'abord, remplis les intermédiaires ensuite",
      "exagère plus que tu ne le crois nécessaire — ça réduit à l'animation",
      "teste toujours ton animation en boucle pour voir les raccords",
    ],
    "Pixel Art": [
      "commence toujours par la silhouette en noir",
      "limite ta palette — 4 à 8 couleurs max pour débuter",
      "un pixel mal placé se voit immédiatement — zoom souvent",
      "la lisibilité prime sur les détails à petite résolution",
      "teste ton sprite sur fond blanc et fond noir",
    ],
    "Digital Art": [
      "coupe le stabilizer régulièrement pour garder le contrôle du trait",
      "les layers sont tes amis — sépare les éléments logiquement",
      "zoom out souvent pour garder une vue d'ensemble",
      "le color picking de vraies photos est une compétence à développer",
      "n'ajoute pas plus de textures que nécessaire — la simplicité gagne",
    ],
    "Traditionnel Art": [
      "le support change tout — teste différents papiers et grains",
      "laisse sécher entre chaque couche pour éviter les mélanges non voulus",
      "une gomme-mie de pain est plus douce et précise qu'une gomme dure",
      "l'encrage final peut s'appliquer sur un léger croquis au crayon bleu",
      "conserve tes vieux travaux — l'évolution visible est motivante",
    ],
    "Perspective": [
      "l'horizon = hauteur des yeux du spectateur",
      "tous les points de fuite sont sur la ligne d'horizon",
      "la perspective atmosphérique : plus c'est loin, plus c'est pâle et flou",
      "commence par les grandes lignes de construction avant les détails",
      "les cercles en perspective deviennent des ellipses",
    ],
    "Backgrounds": [
      "commence par les grandes masses de couleur, pas les détails",
      "moins de détails au loin, plus près du spectateur",
      "la végétation se dessine en masses, pas feuille par feuille",
      "une bonne architecture a des proportions cohérentes",
      "l'ambiance lumineuse prime sur les détails architecturaux",
    ],
    "Style personnel": [
      "copier consciemment des artistes que tu admires est une étape normale",
      "ton style émerge de la répétition, pas d'un effort conscieux",
      "les limitations créent le style — pas l'inverse",
      "documente ton évolution avec des dates",
      "essaie de finir plus de choses plutôt que de parfaire",
    ],
    "Illustration vectorielle": [
      "pense en formes géométriques, pas en contours",
      "la cohérence visuelle prime sur l'originalité de chaque élément",
      "teste ta composition en noir et blanc avant d'ajouter les couleurs",
      "moins de couleurs = plus d'impact",
      "les espacements réguliers créent de la cohérence",
    ],
    "3D Modeling": [
      "commence toujours par une référence photo ou un croquis",
      "en low poly la silhouette compte plus que les détails",
      "un bon éclairage peut sauver une modélisation simple",
      "teste ton modèle sous plusieurs angles avant de le considérer terminé",
      "la topologie suit les lignes de mouvement de l'objet",
    ],
    "default": [
      "commence par les grandes formes avant les détails",
      "travaille du général au particulier",
      "fais des pauses et reviens avec un œil neuf",
      "compare ton travail à ta référence toutes les 10 minutes",
      "l'important c'est de finir, même imparfait",
    ],
  },
};

// ─── LOGIQUE DE GÉNÉRATION ────────────────────────────────────────────────────
var generateLocal = function(keyword, theme, difficulty, skillName) {
  var diff = difficulty || "Moyen";

  // ── Mode Révision ─────────────────────────────────────────────────────────────
  if (theme === "Révision") {
    var revPool = GEN_BANK.revision[diff] || GEN_BANK.revision["Moyen"];
    var revExo = pick(revPool);
    var conseilRev = pick(GEN_BANK.conseils["default"]);
    return {
      name: revExo.name,
      description: revExo.desc,
      tips: conseilRev,
      keyword: "révision",
      isSurprise: false,
      isLocal: true,
      hasConstraint: false,
      hasTwist: false,
    };
  }

  // ── Mode Compétence ───────────────────────────────────────────────────────────
  var baseExercice = null;
  if (skillName) {
    var exercices = GEN_BANK.parCompetence[skillName];
    if (exercices && exercices.length > 0) {
      baseExercice = pick(exercices);
    }
  }

  // ── Mode Style / Libre ────────────────────────────────────────────────────────
  var sujet = null;
  var ambiance = null;
  var detail = null;

  if (!baseExercice) {
    var styleKey = theme || "default";
    var styleData = GEN_BANK.parStyle[styleKey] || GEN_BANK.parStyle["default"];

    if (keyword && keyword.trim()) {
      sujet = keyword.trim();
    } else {
      sujet = pick(styleData.sujets || styleData);
    }
    ambiance = pick(styleData.ambiances || []);
    detail   = pick(styleData.details || []);
  }

  // ── Twist créatif (25% de chance) ─────────────────────────────────────────────
  var twist = Math.random() < 0.25 ? pick(GEN_BANK.twists) : null;

  // ── Contrainte (20% Facile, 40% Moyen, 65% Difficile) ────────────────────────
  var contrainteChance = diff === "Difficile" ? 0.65 : diff === "Moyen" ? 0.4 : 0.2;
  var contrainte = Math.random() < contrainteChance
    ? pick(GEN_BANK.contraintes[diff] || GEN_BANK.contraintes["Moyen"])
    : null;

  // ── Conseil adapté ────────────────────────────────────────────────────────────
  var conseilPool = GEN_BANK.conseils[skillName] || GEN_BANK.conseils["default"];
  var conseil = pick(conseilPool);

  // ── Construction du résultat ──────────────────────────────────────────────────
  var name, description;

  if (baseExercice) {
    name = baseExercice.name;
    if (twist) name += " — " + twist;
    description = baseExercice.desc;
    if (twist) description += " Twist : " + twist + ".";
    if (theme && theme !== "Révision") description += " Habille l'exercice dans un univers " + theme + ".";

  } else {
    var sujetFinal = sujet + (twist ? " " + twist : "");
    name = "Dessine : " + sujetFinal.charAt(0).toUpperCase() + sujetFinal.slice(1);
    if (name.length > 60) name = name.substring(0, 57) + "...";

    description = "Dessine " + sujetFinal;

    if (ambiance) description += ". Ambiance : " + ambiance + ".";
    if (detail)   description += " Inclus : " + detail + ".";

    if (!ambiance && !detail) {
      if (diff === "Facile")    description += " Garde-toi de l'espace pour expérimenter sans pression.";
      else if (diff === "Moyen") description += " Soigne la composition et l'ambiance lumineuse.";
      else                      description += " Vise une illustration soignée avec composition réfléchie et palette cohérente.";
    }
  }

  if (contrainte) description += " Contrainte : " + contrainte + ".";

  return {
    name: name,
    description: description,
    tips: conseil,
    keyword: sujet || (baseExercice ? baseExercice.name.split("—")[0].trim() : ""),
    isSurprise: !keyword || !keyword.trim(),
    isLocal: true,
    hasConstraint: !!contrainte,
    hasTwist: !!twist,
  };
};
