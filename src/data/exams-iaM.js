// ══════════════════════════════════════════════════════════════
//  INTELLIGENCE ARTIFICIELLE — EXAMS DATA
//  Enseignant : Mouhib Imad — EHEI Oujda GI4
// ══════════════════════════════════════════════════════════════

// ── MODE QCM ─────────────────────────────────────────────────
export const IA_QCM = []

// ── EXAMEN RÉEL — PDF officiel EHEI ─────────────────────────────
export const IA_REAL = [
  // ===== PARTIE THÉORIQUE =====
  {
    section: '📚 Partie Théorique — Algorithmes',
    type: 'open',
    q: 'Expliquez minutieusement le principe de l\'algorithme KNN.',
    ans: 'KNN (K-Nearest Neighbors) est un algorithme de classification supervisée. Pour classer un nouveau point :\n1. Calculer la distance euclidienne entre ce point et TOUS les points du dataset d\'entraînement\n2. Trier les distances par ordre croissant\n3. Sélectionner les K plus proches voisins\n4. Assigner la classe majoritaire parmi ces K voisins\n\nLa distance euclidienne : d = √(Σ(xi−yi)²)\n\nAvantages : simple, bon sur petits datasets.\nInconvénients : lent sur grands datasets, sensible au choix de K et au scaling.',
    hint: 'Distances → K voisins les plus proches → vote majoritaire'
  },
  {
    section: '📚 Partie Théorique — Algorithmes',
    type: 'open',
    q: 'Expliquez minutieusement le principe de l\'algorithme SVM.',
    ans: 'SVM (Support Vector Machine) est un algorithme de classification supervisée qui cherche l\'hyperplan de séparation avec la marge maximale entre les classes.\n\nHyperplan = frontière de décision (droite en 2D, plan en 3D, hyperplan en N dimensions).\nVecteurs de support = points les plus proches de l\'hyperplan, qui définissent la marge.\n\nSi les données ne sont pas linéairement séparables → le kernel (rbf, poly...) transforme les données dans un espace de dimension supérieure où elles deviennent séparables.\n\nParamètre C : régularisation (C petit = marge large, C grand = marge étroite).',
    hint: 'Hyperplan à marge maximale. Vecteurs de support. Kernel pour données non-linéaires.'
  },
  {
    section: '📚 Partie Théorique — Algorithmes',
    type: 'open',
    q: 'Expliquez minutieusement le principe de la Régression Logistique.',
    ans: 'La Régression Logistique est un algorithme de classification supervisée binaire (malgré son nom). Elle prédit la probabilité qu\'un exemple appartienne à une classe via la fonction sigmoïde :\n\nP(y=1) = 1 / (1 + e^(-z))    où z = w₀ + w₁x₁ + ... + wₙxₙ\n\nLa courbe sigmoïde est en S, produisant des valeurs entre 0 et 1.\nSi P ≥ 0.5 → classe 1, sinon → classe 0.\n\nLa fonction sigmoïde s\'appelle aussi la fonction logistique.',
    hint: 'Sigmoïde : P = 1/(1+e^(-z)). Prédit probabilité. Si ≥0.5 → classe 1.'
  },
  {
    section: '📚 Partie Théorique — Algorithmes',
    type: 'open',
    q: 'Expliquez minutieusement le principe de l\'algorithme DBSCAN.',
    ans: 'DBSCAN (Density-Based Spatial Clustering of Applications with Noise) est un algorithme de clustering non supervisé basé sur la densité.\n\nParamètres : eps (rayon du voisinage), min_samples (densité minimale)\n\n3 types de points :\n- Core point : a ≥ min_samples voisins dans le rayon eps\n- Border point : dans le voisinage d\'un core point, mais pas assez de voisins lui-même\n- Noise point : ni core, ni border → label = -1\n\nAvantages : découvre K automatiquement, gère formes complexes, robuste au bruit.\nInconvénient : eps et min_samples difficiles à choisir.',
    hint: 'eps + min_samples. Core/Border/Noise. K automatique. Label -1 = bruit.'
  },
  {
    section: '📚 Partie Théorique — Algorithmes',
    type: 'open',
    q: 'Expliquez minutieusement le principe de l\'algorithme K-Means.',
    ans: 'K-Means est un algorithme de clustering non supervisé qui minimise le WCSS.\n\nÉtapes :\n1. Fixer K (nombre de clusters à l\'avance)\n2. Initialiser K centroïdes aléatoirement\n3. Assigner chaque point au centroïde le plus proche\n4. Recalculer les centroïdes (moyenne des points assignés)\n5. Répéter 3-4 jusqu\'à convergence (centroïdes stables)\n\nWCSS = Within-Cluster Sum of Squares = Σ(distance² point-centroïde)\nMéthode du coude pour trouver K optimal.',
    hint: 'K fixé → centroïdes → assignment → repositionner → convergence. WCSS minimisé.'
  },
  // ===== Notions =====
  {
    section: '📚 Partie Théorique — Notions',
    type: 'open',
    q: 'Expliquez les notions : cross_val_score, StandardScaler, stratify=y, random_state=42.',
    ans: 'cross_val_score : évalue le modèle par validation croisée (K sous-ensembles). Plus robuste qu\'un simple split train/test. Donne une estimation fiable de la performance réelle.\n\nStandardScaler : normalise les données (moyenne≈0, écart-type≈1). Obligatoire pour KNN, SVM et Régression Logistique (algorithmes sensibles à l\'échelle).\n\nstratify=y : conserve les mêmes proportions de classes dans train et test lors du split. Indispensable avec des classes déséquilibrées.\n\nrandom_state=42 : fixe la graine du générateur aléatoire pour garantir la reproductibilité des résultats (les mêmes résultats à chaque exécution).',
    hint: 'cross_val=robustesse, Scaler=normalisation, stratify=proportions, random_state=reproductibilité'
  },
  {
    section: '📚 Partie Théorique — Notions',
    type: 'open',
    q: 'Expliquez les notions : Oversampling, Class weights, méthode de silhouette.',
    ans: 'Oversampling : technique pour équilibrer des classes déséquilibrées en dupliquant (ou synthétisant avec SMOTE) les exemples de la classe minoritaire. Évite que le modèle ignore la classe minoritaire.\n\nClass weights : paramètre sklearn (class_weight="balanced") qui donne plus d\'importance à la classe minoritaire pendant l\'entraînement, sans modifier les données.\n\nMéthode de silhouette : évalue la qualité du clustering. Score = (b-a)/max(a,b) où a = cohésion intra-cluster, b = séparation inter-cluster. Score proche de +1 = bon clustering, proche de -1 = mauvais.',
    hint: 'Oversampling=dupliquer minorité, ClassWeights=pondérer, Silhouette=(b-a)/max(a,b)'
  },
  // ===== Questions spécifiques =====
  {
    section: '📚 Partie Théorique — Questions',
    type: 'open',
    q: 'Comment appelle-t-on la fonction de la Régression Logistique ? Décrire sa forme.',
    ans: 'La fonction de la Régression Logistique s\'appelle la fonction Sigmoïde (ou fonction logistique).\n\nFormule : σ(z) = 1 / (1 + e^(-z))\n\nForme : courbe en S (sigmoïde)\n- Valeurs toujours entre 0 et 1\n- σ(0) = 0.5 (point milieu)\n- z → +∞ : σ(z) → 1\n- z → -∞ : σ(z) → 0\n- Seuil de décision à 0.5 : si σ(z) ≥ 0.5 → classe 1',
    hint: 'Fonction Sigmoïde σ(z)=1/(1+e^(-z)). Courbe en S, valeurs entre 0 et 1.'
  },
  {
    section: '📚 Partie Théorique — Questions',
    type: 'open',
    q: '1. Dans SVM, expliquez le rôle des vecteurs de support.\n2. Quelle est la différence entre SVM linéaire et SVM non linéaire ?',
    ans: '1. Les vecteurs de support sont les points du dataset les plus proches de l\'hyperplan de décision. Ce sont eux qui définissent la marge. SVM cherche l\'hyperplan qui maximise la distance à ces vecteurs de support. Si on supprime les autres points (non vecteurs de support), l\'hyperplan ne change pas.\n\n2. SVM linéaire : utilise un hyperplan linéaire (droite/plan) pour séparer les classes. Ne fonctionne que si les données sont linéairement séparables.\nSVM non linéaire : utilise un kernel (rbf, poly...) pour transformer les données dans un espace de dimension supérieure où elles deviennent séparables. Adapté quand les données ne sont PAS séparables linéairement.',
    hint: '1. Vecteurs support = points les plus proches, définissent la marge. 2. Linéaire=droite, Non-linéaire=kernel RBF pour données complexes.'
  },
  {
    section: '📚 Partie Théorique — Questions',
    type: 'open',
    q: 'Définissez les notions suivantes dans DBSCAN : Point cœur (core point), Point frontière (border point), Point bruit (noise point).',
    ans: 'Core point (point cœur) : point qui a au moins min_samples voisins dans un rayon eps. Il est au centre d\'une zone dense et peut créer ou étendre un cluster.\n\nBorder point (point frontière) : point qui est dans le voisinage d\'un core point (rayon eps) mais qui ne possède pas lui-même assez de voisins pour être core. Il est en bordure du cluster.\n\nNoise point (point bruit) : point qui n\'est ni core ni border — il est isolé, pas dans une zone dense. DBSCAN lui assigne le label -1. Il représente un outlier ou une donnée bruitée.',
    hint: 'Core = ≥min_samples voisins. Border = dans voisinage core mais pas assez voisins. Noise = label -1, isolé.'
  },
  {
    section: '📚 Partie Théorique — Questions',
    type: 'open',
    q: 'Quelle est la différence entre un algorithme de Classification et un algorithme de Régression ?',
    ans: 'Classification : prédit une catégorie discrète (classe). La sortie est une étiquette parmi un ensemble fini de classes.\nEx : prédit si un email est SPAM ou NON SPAM, si une tumeur est BÉNIGNE ou MALIGNE, si un client va PARTIR ou RESTER.\nAlgorithmes : KNN, SVM, Régression Logistique, Arbre de décision.\n\nRégression : prédit une valeur numérique continue. La sortie est un nombre réel.\nEx : prédire le prix d\'une maison, la température demain, le revenu d\'un client.\nAlgorithmes : Régression Linéaire, Random Forest Regression, SVR.',
    hint: 'Classification → catégorie/classe discrète. Régression → valeur numérique continue.'
  },

  // ===== PARTIE PRATIQUE =====
  {
    section: '💼 Partie Pratique — Dataset Télécom',
    type: 'open',
    q: '1. L\'objectif est de prédire si un client va quitter l\'entreprise (churn) ET de segmenter les clients selon leurs comportements. Quels algorithmes choisiriez-vous ? Justifiez.',
    ans: 'Prédire le churn (départ du client) = problème de classification SUPERVISÉE car on dispose d\'exemples étiquetés (partis ou restés).\n→ Algorithmes : Régression Logistique (interprétable, rapide) ou SVM (si données non-linéaires). Possiblement KNN mais problématique sur 5M d\'exemples.\n\nSegmenter les clients = problème de clustering NON SUPERVISÉ car on n\'a pas de groupes prédéfinis.\n→ Algorithmes : K-Means (si clusters sphériques) ou DBSCAN (si formes complexes et données bruitées).',
    hint: 'Churn=supervisé→Régression Log/SVM. Segmentation=non supervisé→K-Means/DBSCAN.'
  },
  {
    section: '💼 Partie Pratique — Dataset Télécom',
    type: 'open',
    q: '2. Les données contiennent beaucoup de bruit et des valeurs aberrantes. Quel algorithme est le plus robuste parmi : KNN – DBSCAN – Régression Logistique ?',
    ans: 'DBSCAN est le plus robuste face au bruit et aux valeurs aberrantes.\n\nExplication :\n- KNN : les outliers influencent directement les distances et peuvent fausser la classification (s\'ils se retrouvent parmi les K voisins).\n- Régression Logistique : les valeurs aberrantes peuvent biaiser les coefficients du modèle.\n- DBSCAN : identifie nativement les points bruités/aberrants avec le label -1 (noise point) et ne les intègre pas dans les clusters. Les outliers n\'affectent pas les résultats du clustering.',
    hint: 'DBSCAN — assigne label -1 aux outliers sans les forcer dans un cluster.'
  },
  {
    section: '💼 Partie Pratique — Dataset Télécom',
    type: 'open',
    q: '3. Le Dataset contient 5 millions de clients. Pourquoi KNN peut-il devenir problématique ?',
    ans: 'KNN est un algorithme "lazy learner" (paresseux) : il ne crée pas de modèle lors de l\'entraînement. À chaque prédiction, il doit calculer la distance euclidienne entre le nouveau point et TOUS les points du dataset d\'entraînement (5 millions ici).\n\nProblèmes :\n1. Lenteur : 5 millions de calculs de distance par prédiction\n2. Mémoire : tout le dataset doit rester en mémoire\n3. Coût total : avec N prédictions × 5M calculs = gigantesque\n\nSolution : utiliser des algorithmes plus adaptés aux grands datasets (Random Forest, Gradient Boosting, SVM avec noyau linéaire).',
    hint: 'KNN calcule la distance aux 5M points à chaque prédiction → lent + mémoire excessive.'
  },
  {
    section: '💼 Partie Pratique — Dataset Télécom',
    type: 'open',
    q: '4. Les données ne sont pas linéairement séparables. Quel type de SVM recommanderiez-vous ?',
    ans: 'SVM non linéaire avec kernel RBF (Radial Basis Function) : kernel=\'rbf\'.\n\nExplication : quand les données ne sont pas séparables par une droite/plan, un SVM linéaire (kernel=\'linear\') échoue. Le kernel RBF transforme les données dans un espace de dimension supérieure où elles deviennent séparables. C\'est le kernel le plus polyvalent et le plus utilisé en pratique.',
    hint: 'SVM avec kernel=\'rbf\' — transforme dans un espace de dimension supérieure.'
  },
  {
    section: '💼 Partie Pratique — Dataset Télécom',
    type: 'open',
    q: '5. Accuracy=95%, Précision=40%, Recall=35%. Pourquoi ce modèle peut-il être mauvais malgré une accuracy élevée ?',
    ans: 'Ce modèle souffre du problème des classes déséquilibrées (class imbalance).\n\nSi 95% des clients restent et seulement 5% partent, un modèle qui prédit systématiquement "restera" aurait 95% d\'accuracy MAIS n\'identifie aucun client qui va vraiment partir.\n\nPreuves dans les métriques :\n- Recall=35% → le modèle rate 65% des clients qui vont réellement partir\n- Précision=40% → seulement 40% de ses alertes churn sont correctes\n\nSolution : utiliser F1 Score, Recall, et appliquer Oversampling ou class_weight="balanced".',
    hint: 'Classes déséquilibrées : 95% négatifs → accuracy trompeuse. Recall=35% = rate 65% des churns.'
  },
  {
    section: '💼 Partie Pratique — Dataset Télécom',
    type: 'open',
    q: '6. Expliquez l\'utilité de la matrice de corrélation (sns.heatmap) en mettant en évidence les couleurs et les chiffres.',
    ans: 'La matrice de corrélation mesure la relation linéaire entre chaque paire de variables.\n\nInterprétation des valeurs :\n- Valeur = 1 (rouge vif / diagonal) : corrélation parfaite — une variable avec elle-même\n- Valeur proche de +1 (ex: 0.79) : forte corrélation POSITIVE — les deux variables augmentent ensemble\n- Valeur proche de -1 (ex: -0.8) : forte corrélation NÉGATIVE — quand l\'une augmente, l\'autre diminue\n- Valeur proche de 0 (ex: 0.044) : pas de corrélation linéaire\n\nInterprétation des couleurs (coolwarm) :\n- Rouge = corrélation positive forte\n- Bleu foncé = corrélation négative forte\n- Blanc/neutre = pas de corrélation\n\nUtilité : détecter la multicolinéarité (variables redondantes) et sélectionner les variables importantes.',
    hint: '+1=rouge=corrélation positive, -1=bleu=corrélation négative, 0=neutre=pas de relation.'
  },
  {
    section: '💼 Partie Pratique — Dataset Télécom',
    type: 'open',
    q: '7. Méthode du coude — ΔK : K=3→4:41.28%, K=4→5:24.22%, K=5→6:14.39%, K=6→7:6.20%. Quel K est meilleur ? Expliquez pourquoi.',
    ans: 'K=4 est le meilleur choix.\n\nExplication :\nΔK=3→4 = 41.28% → encore une grande diminution du WCSS, K=3 n\'est pas encore optimal\nΔK=4→5 = 24.22% → encore significatif mais commence à ralentir\nΔK=5→6 = 14.39% → diminution notable\nΔK=6→7 = 6.20% → la diminution devient faible\n\nLe "coude" se trouve à K=4 : c\'est là où la variation relative commence à chuter significativement. Après K=4, ajouter un cluster supplémentaire n\'apporte plus un gain suffisant par rapport à la complexité ajoutée.\n\nSur le graphe, le WCSS passe de ~600 (K=4) à ~175 (K=5) mais la pente s\'aplatit ensuite → K=4 ou K=5 selon l\'interprétation du graphique.',
    hint: 'K=4 — coude visible sur le graphe, ΔK chute significativement après K=4.'
  },
]

export const IA_PLUS = []