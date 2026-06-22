export const iaM = {
  id: 'ia',
  title: 'Intelligence Artificielle 1',
  subtitle: 'Machine Learning',
  version: '2026',
  color: 'coral',
  accent: '#f06060',
  icon: '🤖',
  description: 'Maîtrisez le Machine Learning : NumPy/Pandas, KNN, K-Means, SVM, DBSCAN et Régression Logistique.',
  modules: [
    {
      id: 'numpy-pandas',
      title: 'NumPy, Pandas & Préparation des données',
      icon: '🐼',
      color: 'amber',
      lessons: [
        {
          title: 'NumPy vs Pandas',
          body: `<p><strong>NumPy</strong> et <strong>Pandas</strong> sont les deux bibliothèques fondamentales de la Data Science en Python, mais elles ont des rôles différents.</p>
<p><strong>NumPy</strong> (Numerical Python) manipule des <strong>tableaux numériques</strong> (arrays) à N dimensions — rapide, optimisé pour le calcul matriciel et les opérations mathématiques.</p>
<p><strong>Pandas</strong> est construit au-dessus de NumPy et manipule des <strong>données tabulaires</strong> (lignes/colonnes, comme Excel) via les structures <code>DataFrame</code> et <code>Series</code> — il gère nativement les noms de colonnes, les types hétérogènes et les valeurs manquantes.</p>`,
          code: `import numpy as np
import pandas as pd

# ===== NumPy — tableaux numériques homogènes =====
arr = np.array([1, 2, 3, 4, 5])
matrix = np.array([[1, 2], [3, 4]])

print(arr.shape)      # (5,)
print(matrix.shape)   # (2, 2)
print(arr.mean())     # 3.0
print(arr * 2)        # [2 4 6 8 10] — opération vectorisée

# ===== Pandas — données tabulaires hétérogènes =====
df = pd.DataFrame({
    'nom': ['Ali', 'Sanae', 'Karim'],
    'age': [25, 30, 22],
    'ville': ['Oujda', 'Rabat', 'Fès']
})

print(df)
#      nom  age   ville
# 0    Ali   25   Oujda
# 1  Sanae   30   Rabat
# 2  Karim   22     Fès

# DataFrame = tableau 2D avec colonnes nommées et types mixtes
# Series = une seule colonne (1D) d'un DataFrame
ages = df['age']  # Series`,
          language: 'python',
          tips: [
            'NumPy = tableaux numériques homogènes, calcul rapide vectorisé',
            'Pandas = données tabulaires hétérogènes (texte + nombres + dates)',
            'Pandas est construit AU-DESSUS de NumPy',
            'DataFrame = tableau 2D, Series = une colonne (1D)',
            'NumPy pour le calcul matriciel, Pandas pour l\'analyse de données',
          ]
        },
        {
          title: 'Chargement et inspection des données',
          body: `<p>Avant tout entraînement de modèle, il faut <strong>charger</strong>, <strong>inspecter</strong> et <strong>comprendre</strong> le jeu de données. Pandas fournit des méthodes essentielles pour ça.</p>`,
          code: `import pandas as pd

# Charger un CSV
df = pd.read_csv('iris.csv')

# Charger un Excel
df = pd.read_excel('titanic.xlsx')

# ===== INSPECTION =====

# head() — affiche les premières lignes (5 par défaut)
df.head()
df.head(10)  # 10 premières lignes

# tail() — affiche les dernières lignes
df.tail(5)

# info() — informations générales : colonnes, types, valeurs non-nulles
df.info()
# <class 'pandas.core.frame.DataFrame'>
# RangeIndex: 150 entries, 0 to 149
# Data columns (total 5 columns):
#  #   Column        Non-Null Count  Dtype
# ---  ------        --------------  -----
#  0   sepal.length  150 non-null    float64
#  1   variety       150 non-null    object

# shape — dimensions (lignes, colonnes)
print(df.shape)  # (150, 5)

# columns — liste des noms de colonnes
print(df.columns.tolist())

# describe() — statistiques descriptives (moyenne, écart-type, min, max...)
df.describe()

# dtypes — type de chaque colonne
df.dtypes`,
          language: 'python',
          tips: [
            'head() → premières lignes, tail() → dernières lignes',
            'info() → colonnes, types ET nombre de valeurs non-nulles (détecte les manquantes)',
            'describe() → statistiques (moyenne, std, min, max, quartiles)',
            'shape → (nb_lignes, nb_colonnes)',
            'Toujours inspecter AVANT d\'entraîner un modèle !',
          ]
        },
        {
          title: 'Valeurs manquantes & préparation',
          body: `<p>Les modèles de Machine Learning ne peuvent généralement pas fonctionner avec des valeurs manquantes (<code>NaN</code>). Il faut les détecter et les traiter avant l'entraînement.</p>
<p><strong>Pourquoi traiter les valeurs manquantes ?</strong> Un modèle ne peut pas calculer une distance, une moyenne ou une probabilité avec une valeur absente — cela provoque des erreurs ou fausse les résultats (ex: une distance euclidienne avec un NaN devient NaN).</p>`,
          code: `import pandas as pd

df = pd.read_csv('titanic.csv')

# ===== DÉTECTER LES VALEURS MANQUANTES =====
df.isnull().sum()
# age          177
# cabin        687
# embarked       2

# ===== STRATÉGIE 1 : SUPPRESSION =====
df_clean = df.dropna()              # supprime toutes les lignes avec au moins 1 NaN
df_clean = df.dropna(subset=['age']) # supprime seulement si 'age' est NaN

# ===== STRATÉGIE 2 : REMPLACEMENT (imputation) =====
# Valeurs numériques → remplacer par la moyenne
df['age'].fillna(df['age'].mean(), inplace=True)

# Valeurs catégorielles → remplacer par une valeur par défaut
df['embarked'].fillna('non renseigné', inplace=True)

# ===== ENCODAGE DES VARIABLES CATÉGORIELLES =====
# Les modèles ML ont besoin de NOMBRES, pas de texte
from sklearn.preprocessing import LabelEncoder

le = LabelEncoder()
df['variety_encoded'] = le.fit_transform(df['variety'])
# 'setosa' → 0, 'versicolor' → 1, 'virginica' → 2

# ===== SÉPARATION X / y =====
X = df.drop('variety', axis=1).values  # variables prédictives
y = df['variety'].values                # variable cible (à prédire)

# ===== NORMALISATION (Scaling) =====
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
# Centre les données (moyenne ≈ 0) et réduit (écart-type ≈ 1)`,
          language: 'python',
          tips: [
            'isnull().sum() → compte les valeurs manquantes par colonne',
            'dropna() = supprimer, fillna() = remplacer',
            'Numérique → remplacer par la moyenne. Catégoriel → valeur par défaut',
            'LabelEncoder convertit le texte en nombres (obligatoire pour les modèles ML)',
            'X = variables prédictives, y = variable cible (ce qu\'on veut prédire)',
            'StandardScaler centre-réduit les données (moyenne 0, écart-type 1)',
          ]
        },
        {
          title: 'Supervisé vs Non supervisé, Classification vs Clustering',
          body: `<p>Le Machine Learning se divise en deux grandes familles selon que les données sont <strong>étiquetées</strong> ou non.</p>
<p><strong>Apprentissage supervisé</strong> : le jeu de données contient des exemples avec leur réponse correcte (étiquette/label). Le modèle apprend à reproduire cette association. Ex : KNN, Régression Logistique, SVM.</p>
<p><strong>Apprentissage non supervisé</strong> : aucune étiquette n'est fournie — le modèle doit découvrir des structures ou regroupements cachés dans les données. Ex : K-Means, DBSCAN.</p>`,
          code: `# ===== SUPERVISÉ — CLASSIFICATION =====
# Les données ont une étiquette connue (y)
# Le but : prédire l'étiquette d'une nouvelle observation
#
# Exemple : prédire si un email est SPAM ou NON SPAM
# X = caractéristiques de l'email (mots, longueur...)
# y = SPAM / NON SPAM  ← connu pour l'entraînement

from sklearn.neighbors import KNeighborsClassifier
model = KNeighborsClassifier(n_neighbors=3)
model.fit(X_train, y_train)  # apprend à partir d'exemples étiquetés
predictions = model.predict(X_test)

# ===== NON SUPERVISÉ — CLUSTERING =====
# Pas d'étiquette — le modèle regroupe les données similaires
#
# Exemple : segmenter des clients en groupes (sans savoir à l'avance
# combien de groupes ni quels clients vont ensemble)

from sklearn.cluster import KMeans
model = KMeans(n_clusters=3)
model.fit(X)  # pas de y !
clusters = model.labels_  # groupe assigné à chaque point

# ===== DIFFÉRENCE CLASSIFICATION vs CLUSTERING =====
# Classification : catégories CONNUES à l'avance (supervisé)
# Clustering : groupes DÉCOUVERTS par l'algorithme (non supervisé)`,
          language: 'python',
          tips: [
            'Supervisé = données étiquetées (y connu) → Classification, Régression',
            'Non supervisé = pas d\'étiquette → Clustering',
            'Classification = catégories connues à l\'avance',
            'Clustering = groupes découverts automatiquement, nombre souvent à choisir',
            'KNN, SVM, Régression Logistique = supervisé',
            'K-Means, DBSCAN = non supervisé',
          ]
        }
      ],
      quiz: [
        { q: 'NumPy et Pandas, quelle affirmation est correcte ?', opts: ['Pandas est plus ancien que NumPy', 'Pandas est construit au-dessus de NumPy', 'NumPy gère les données textuelles, pas Pandas', 'Ce sont deux bibliothèques identiques'], ans: 1 },
        { q: 'Quelle méthode Pandas affiche les premières lignes d\'un dataset ?', opts: ['top()', 'first()', 'head()', 'show()'], ans: 2 },
        { q: 'Quelle méthode Pandas donne les types de colonnes ET le nombre de valeurs non-nulles ?', opts: ['describe()', 'info()', 'dtypes()', 'summary()'], ans: 1 },
        { q: 'Pourquoi traiter les valeurs manquantes avant l\'entraînement ?', opts: ['Pour gagner de l\'espace disque', 'Les modèles ne peuvent pas calculer avec des NaN', 'C\'est optionnel', 'Pour accélérer le chargement'], ans: 1 },
        { q: 'Quelle est la différence entre Machine Learning supervisé et non supervisé ?', opts: ['Le supervisé est plus rapide', 'Le supervisé utilise des données étiquetées, le non supervisé non', 'Le non supervisé nécessite plus de données', 'Aucune différence'], ans: 1 },
        { q: 'Quelle est la différence principale entre classification et clustering ?', opts: ['Classification = non supervisé, Clustering = supervisé', 'Classification = catégories connues, Clustering = groupes découverts', 'Aucune différence', 'Le clustering est toujours plus précis'], ans: 1 },
        { q: 'LabelEncoder sert à :', opts: ['Supprimer les valeurs manquantes', 'Normaliser les données', 'Convertir du texte en nombres', 'Diviser train/test'], ans: 2 },
        { q: 'StandardScaler centre les données pour obtenir :', opts: ['Moyenne 1, écart-type 0', 'Moyenne 0, écart-type 1', 'Toutes les valeurs entre 0 et 1', 'Toutes les valeurs positives'], ans: 1 },
      ],
      exam: [
        { type: 'open', q: 'Quelle différence existe entre les bibliothèques NumPy et Pandas ?', ans: 'NumPy manipule des tableaux numériques homogènes à N dimensions (arrays), optimisés pour le calcul matriciel rapide. Pandas est construit au-dessus de NumPy et manipule des données tabulaires hétérogènes (DataFrame/Series) avec noms de colonnes, types mixtes et gestion native des valeurs manquantes.', hint: 'NumPy = tableaux numériques homogènes. Pandas = données tabulaires hétérogènes, construit sur NumPy.' },
        { type: 'open', q: 'Quelle méthode Pandas permet d\'afficher les premières lignes d\'un dataset ? Et d\'obtenir des informations générales sur les colonnes ?', ans: 'head() affiche les premières lignes (5 par défaut, ou head(n) pour n lignes).\ninfo() donne les informations générales : nom des colonnes, type de données (dtype), et nombre de valeurs non-nulles par colonne (utile pour détecter les valeurs manquantes).', hint: 'head() pour les lignes, info() pour colonnes/types/valeurs non-nulles' },
        { type: 'open', q: 'Pourquoi les valeurs manquantes doivent-elles être traitées avant l\'entraînement d\'un modèle de Machine Learning ?', ans: 'Les algorithmes de Machine Learning effectuent des calculs mathématiques (distances, moyennes, produits matriciels) qui échouent ou retournent NaN en présence de valeurs manquantes. Une valeur manquante non traitée peut bloquer l\'entraînement ou fausser silencieusement les résultats du modèle.', hint: 'Les calculs (distances, moyennes...) échouent ou sont faussés avec des NaN' },
        { type: 'open', q: 'Quelle est la différence entre le Machine Learning supervisé et le non supervisé ?', ans: 'Supervisé : le jeu de données d\'entraînement contient des exemples avec leur réponse correcte (étiquette/label) connue à l\'avance. Le modèle apprend l\'association X→y. Ex : KNN, SVM, Régression Logistique.\nNon supervisé : aucune étiquette fournie, le modèle découvre lui-même des structures ou regroupements cachés dans les données. Ex : K-Means, DBSCAN.', hint: 'Supervisé = étiquettes connues. Non supervisé = pas d\'étiquette, structure découverte.' },
        { type: 'dropdown', q: 'La classification et le clustering désignent la même chose en Machine Learning', opts: ['Vrai', 'Faux'], ans: 1, hint: 'Faux. Classification = supervisé avec catégories connues. Clustering = non supervisé, groupes découverts.' },
      ]
    },

    // ── MODULE 2: KNN ──────────────────────────────────────────────
    {
      id: 'knn',
      title: 'K-Nearest Neighbors (KNN)',
      icon: '📍',
      color: 'violet',
      lessons: [
        {
          title: 'Algorithme KNN & Distance Euclidienne',
          body: `<p>KNN (K plus proches voisins) est un algorithme de <strong>classification supervisée</strong> simple mais puissant. Pour classer un nouvel exemple, il trouve ses K voisins les plus proches dans le dataset d'entraînement et retourne la <strong>classe majoritaire</strong>.</p>
<p><strong>Distance Euclidienne</strong> : mesure la "distance en ligne droite" entre deux points dans un espace à N dimensions.</p>
<p><code>d = √( (x₁−y₁)² + (x₂−y₂)² + ... + (xₙ−yₙ)² )</code></p>`,
          code: `# ===== EXEMPLE DU COURS — Fidélité des clients =====
# Dataset : Ali (35, 5, 3, Non), Hassan (22, 20, 2, Oui),
#           Sanae (63, 15, 1, Non), Samir (59, 17, 1, Non),
#           Fadoua (25, 25, 3, Oui)
# Fouad (37, 16, 2) → Fidèle ou Non ?

import numpy as np

def euclidean_distance(x1, x2):
    return np.sqrt(np.sum((x1 - x2) ** 2))

# Dataset d'entraînement
clients = {
    'Ali':    ([35, 5, 3],  'Non'),
    'Hassan': ([22, 20, 2], 'Oui'),
    'Sanae':  ([63, 15, 1], 'Non'),
    'Samir':  ([59, 17, 1], 'Non'),
    'Fadoua': ([25, 25, 3], 'Oui'),
}

fouad = np.array([37, 16, 2])

# Calcul des distances
distances = {}
for nom, (features, label) in clients.items():
    d = euclidean_distance(np.array(features), fouad)
    distances[nom] = (round(d, 1), label)
    print(f"{nom}: distance = {d:.1f}, fidélité = {label}")

# Ali: 11.2, Hassan: 15.5, Fadoua: 15.1, Samir: 22.1, Sanae: 26.1

# k=1 → Ali (11.2, Non) → Fouad = Non
# k=3 → Ali(Non), Hassan(Oui), Fadoua(Oui) → 2 Oui, 1 Non → Fouad = Oui
print("\\nk=1 → Non (voisin Ali)")
print("k=3 → Oui (majorité Hassan + Fadoua)") `,
          language: 'python',
          tips: [
            'KNN = classer par vote majoritaire des K voisins les plus proches',
            'Distance euclidienne = √( Σ(xi - yi)² )',
            'k=1 et k=3 peuvent donner des résultats différents !',
            'KNN ne "s\'entraîne" pas vraiment — il mémorise tout le dataset',
            'Sensible à l\'échelle des données → toujours normaliser avant KNN',
          ]
        },
        {
          title: 'Choix du K & implémentation sklearn',
          body: `<p>Le choix de <strong>K</strong> est crucial pour les performances du modèle. Un K trop petit → bruit, un K trop grand → coût de calcul élevé.</p>
<p><strong>Règle de base</strong> : si le nombre de classes est 2, choisir K <strong>impair</strong> (évite les ex-aequo). Utiliser la <strong>validation croisée</strong> pour trouver le K optimal.</p>`,
          code: `import pandas as pd
import numpy as np
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report

# Charger le dataset
df = pd.read_csv('iris.csv')

# Préparer X et y
X = df.drop('variety', axis=1).values
y = df['variety'].values

le = LabelEncoder()
y_encoded = le.fit_transform(y)

# Diviser train/test
X_train, X_test, y_train, y_test = train_test_split(
    X, y_encoded, test_size=0.2, random_state=42
)

# Normaliser (OBLIGATOIRE pour KNN — sensible à l'échelle !)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)  # transform seulement, PAS fit !

# ===== TROUVER LE K OPTIMAL par validation croisée =====
k_values = range(1, 21)
f1_scores = []

for k in k_values:
    knn = KNeighborsClassifier(n_neighbors=k)
    scores = cross_val_score(knn, X_train_scaled, y_train,
                             cv=5, scoring='f1_weighted')
    f1_scores.append(scores.mean())

best_k = k_values[np.argmax(f1_scores)]
print(f"Meilleur K : {best_k}")

# ===== MODÈLE FINAL =====
knn_final = KNeighborsClassifier(n_neighbors=best_k)
knn_final.fit(X_train_scaled, y_train)

y_pred = knn_final.predict(X_test_scaled)

# Évaluation
print("Accuracy :", accuracy_score(y_test, y_pred))
print("\\nMatrice de confusion :")
print(confusion_matrix(y_test, y_pred))
print("\\nRapport :")
print(classification_report(y_test, y_pred))

# Prédire un nouveau point
nouveau = np.array([[5.1, 3.5, 1.4, 0.2]])
nouveau_scaled = scaler.transform(nouveau)
pred = knn_final.predict(nouveau_scaled)
print("Classe prédite :", le.inverse_transform(pred))`,
          language: 'python',
          tips: [
            'K impair recommandé si 2 classes (évite les ex-aequo)',
            'K trop petit → sensible au bruit. K trop grand → coût élevé',
            'Toujours fit_transform sur train, juste transform sur test',
            'cross_val_score = évaluation robuste sur K sous-ensembles',
            'classification_report = accuracy + precision + recall + F1 en une seule commande',
          ]
        },
        {
          title: 'Métriques de classification',
          body: `<p>La <strong>matrice de confusion</strong> est la base de toutes les métriques. Elle compare les prédictions du modèle aux vraies valeurs.</p>
<p>Matrice : <code>[[VP, FP], [FN, VN]]</code></p>`,
          code: `# ===== MATRICE DE CONFUSION =====
# VP (Vrais Positifs) : prédit Positif, réellement Positif ✅
# VN (Vrais Négatifs) : prédit Négatif, réellement Négatif ✅
# FP (Faux Positifs) : prédit Positif, réellement Négatif ❌ (fausse alarme)
# FN (Faux Négatifs) : prédit Négatif, réellement Positif ❌ (raté)

# Exemple du cours : VP=50, FP=5, FN=10, VN=100
VP, FP, FN, VN = 50, 5, 10, 100

# ===== ACCURACY (Exactitude) =====
# Proportion de prédictions correctes parmi TOUTES les prédictions
accuracy = (VP + VN) / (VP + VN + FP + FN)
print(f"Accuracy = ({VP}+{VN})/({VP}+{VN}+{FP}+{FN}) = {accuracy:.3f}")
# Accuracy = 150/165 = 0.909 → 90.9%

# ===== RECALL (Rappel / Sensibilité) =====
# Proportion de vrais positifs DÉTECTÉS parmi tous les cas réellement positifs
# "Sur tous les malades, combien en a-t-on détectés ?"
recall = VP / (VP + FN)
print(f"Recall = {VP}/({VP}+{FN}) = {recall:.3f}")
# Recall = 50/60 = 0.833 → 83.3%

# ===== PRÉCISION =====
# Proportion de prédictions positives qui sont RÉELLEMENT positives
# "Sur toutes mes alarmes positives, combien sont correctes ?"
precision = VP / (VP + FP)
print(f"Précision = {VP}/({VP}+{FP}) = {precision:.3f}")
# Précision = 50/55 = 0.909 → 90.9%

# ===== F1 SCORE =====
# Moyenne harmonique entre Recall et Précision
# Utile quand les classes sont déséquilibrées
f1 = 2 * (precision * recall) / (precision + recall)
print(f"F1 Score = 2 × ({precision:.3f}×{recall:.3f})/({precision:.3f}+{recall:.3f}) = {f1:.3f}")
# F1 = 2 × (0.909×0.833)/(0.909+0.833) = 0.868 → 86.8%

# Résumé du cours :
# Accuracy = 90.9% | Recall = 83.3% | Précision = 90.9% | F1 = 86.8%`,
          language: 'python',
          tips: [
            'Accuracy = (VP+VN) / Total — prédictions correctes parmi toutes',
            'Recall = VP / (VP+FN) — "sur tous les positifs réels, combien détectés ?"',
            'Précision = VP / (VP+FP) — "sur toutes mes alarmes, combien sont correctes ?"',
            'F1 = 2 × (Précision×Recall) / (Précision+Recall) — équilibre des deux',
            'Valeurs du cours : Accuracy=90.9%, Recall=83.3%, Précision=90.9%, F1=86.8%',
          ]
        }
      ],
      quiz: [
        { q: 'KNN est un algorithme de :', opts: ['Clustering non supervisé', 'Classification supervisée', 'Régression uniquement', 'Réduction de dimension'], ans: 1 },
        { q: 'Dans l\'exemple du cours, la distance entre Fouad et Ali est :', opts: ['15.5', '11.2', '26.1', '22.1'], ans: 1 },
        { q: 'Avec k=1, Fouad (37,16,2) est classé :', opts: ['Fidèle (Oui)', 'Non fidèle (Non)', 'Indéterminé', 'Dépend des données'], ans: 1 },
        { q: 'Avec k=3, Fouad est classé :', opts: ['Non fidèle', 'Fidèle', 'Indéterminé', 'Dépend du scaling'], ans: 1 },
        { q: 'Pourquoi le scaling est-il important pour KNN ?', opts: ['Pour accélérer le calcul', 'KNN est sensible à l\'échelle, une grande variable dominerait les distances', 'Pour encoder le texte', 'Ce n\'est pas important'], ans: 1 },
        { q: 'Que représente le Recall ?', opts: ['Proportion de prédictions correctes parmi toutes', 'Proportion de vrais positifs détectés parmi tous les cas réellement positifs', 'Proportion de prédictions positives correctes', 'Moyenne entre précision et accuracy'], ans: 1 },
        { q: 'Formule du F1 Score :', opts: ['(VP+VN) / Total', 'VP / (VP+FN)', '2 × (Précision×Recall) / (Précision+Recall)', 'VP / (VP+FP)'], ans: 2 },
        { q: 'Dans l\'exemple, avec VP=50, FP=5, FN=10, VN=100 — l\'Accuracy est :', opts: ['83.3%', '86.8%', '90.9%', '95%'], ans: 2 },
        { q: 'Avec 2 classes, K impair est recommandé car :', opts: ['C\'est plus rapide', 'Évite les ex-aequo lors du vote majoritaire', 'Produit plus de VP', 'C\'est arbitraire'], ans: 1 },
        { q: 'Inconvénient principal de KNN sur un grand dataset :', opts: ['Faible accuracy', 'Lent lors de la prédiction (calcule toutes les distances)', 'Ne fonctionne que pour 2 classes', 'Ne fonctionne qu\'avec des données numériques'], ans: 1 },
      ],
      exam: [
        { type: 'open', q: 'Dans quel type de problème utilise-t-on généralement l\'algorithme KNN ?', ans: 'KNN est utilisé principalement en classification supervisée : on dispose d\'un dataset étiqueté (chaque exemple a une classe connue) et on veut prédire la classe d\'un nouvel exemple inconnu. Il peut aussi être utilisé en régression (prédire une valeur numérique à partir des K voisins).', hint: 'Classification supervisée — prédit la classe d\'un nouvel exemple par vote majoritaire' },
        { type: 'open', q: 'Quel est le rôle du paramètre K dans l\'algorithme KNN ?', ans: 'K définit le nombre de voisins les plus proches pris en compte pour décider de la classe d\'un point. Si K est trop petit (K=1), l\'algorithme sera sensible aux bruits et variations aléatoires. Si K est trop grand, le coût de calcul augmente et le modèle peut ignorer des structures locales importantes. Règle : K impair si 2 classes (évite les ex-aequo).', hint: 'K = nombre de voisins. Trop petit → bruit. Trop grand → coût élevé.' },
        { type: 'open', q: 'Pourquoi le scaling des données est-il important pour KNN et SVM ?', ans: 'KNN et SVM utilisent des distances pour mesurer la proximité entre les points. Si une variable a des valeurs très grandes (ex: revenu en milliers) et une autre très petites (ex: âge), la grande variable dominera complètement le calcul de distance, rendant les autres variables sans effet. Le scaling (StandardScaler) centre-réduit les données pour que toutes les variables contribuent équitablement.', hint: 'Les grandes variables dominent le calcul de distance → StandardScaler pour équilibrer' },
        { type: 'open', q: 'Calculer l\'Accuracy, le Recall, la Précision et le F1 Score pour : VP=50, FP=5, FN=10, VN=100', ans: 'Accuracy = (VP+VN)/(VP+VN+FP+FN) = (50+100)/(50+100+5+10) = 150/165 = 90.9%\nRecall = VP/(VP+FN) = 50/(50+10) = 50/60 = 83.3%\nPrécision = VP/(VP+FP) = 50/(50+5) = 50/55 = 90.9%\nF1 = 2×(0.909×0.833)/(0.909+0.833) = 86.8%', hint: 'Accuracy=90.9%, Recall=83.3%, Précision=90.9%, F1=86.8%' },
        { type: 'checkbox', q: 'Sélectionner les inconvénients de l\'algorithme KNN', opts: ['Simple à comprendre', 'Lent lors de la prédiction sur grand dataset', 'Sensible au choix de K', 'Sensible à l\'échelle des données (scaling)', 'Problème de dimensionnalité avec beaucoup de variables'], ans: [1, 2, 3, 4], hint: 'Lent + sensible à K + sensible au scaling + problème de dimensionnalité' },
      ]
    },

    // ── MODULE 3: K-MEANS ──────────────────────────────────────────
    {
      id: 'kmeans',
      title: 'K-Means Clustering',
      icon: '🔵',
      color: 'blue',
      lessons: [
        {
          title: 'Algorithme K-Means & Centroïdes',
          body: `<p>K-Means est un algorithme de <strong>clustering non supervisé</strong> qui regroupe des points similaires en <strong>K clusters</strong>. Il ne nécessite pas de labels — il découvre lui-même la structure des données.</p>
<p>L'objectif de K-Means est de minimiser la <strong>WCSS</strong> (Within-Cluster Sum of Squares) : la somme des distances au carré entre chaque point et le centroïde de son cluster.</p>
<p>Un <strong>centroïde</strong> est le centre géométrique d'un cluster (la moyenne de tous les points qui le composent).</p>`,
          code: `# ===== ALGORITHME K-MEANS — ÉTAPES =====
# 1. Choisir K (nombre de clusters)
# 2. Initialiser K centroïdes aléatoirement
# 3. RÉPÉTER jusqu'à convergence :
#    a. Assigner chaque point au centroïde le plus proche
#    b. Recalculer les centroïdes (moyenne des points assignés)
# 4. Converge quand les centroïdes ne bougent plus

import numpy as np
import pandas as pd
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt

# Dataset TP K-Means (données clients)
# Variables : Age, Revenu_Annuel, Score_Depense, Frequence_Achat, Recence

df = pd.read_excel('Data_clients.xlsx')

# Sélectionner les variables numériques
X = df[['Age', 'Revenu_Annuel', 'Score_Depense', 'Frequence_Achat', 'Recence']]

# Normalisation OBLIGATOIRE (K-Means utilise des distances)
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# ===== APPLIQUER K-MEANS avec K optimal =====
kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
kmeans.fit(X_scaled)

# Labels : cluster assigné à chaque point
df['Cluster'] = kmeans.labels_
print("Distribution par cluster :")
print(df['Cluster'].value_counts())

# Centroïdes dans l'espace normalisé
print("\\nCentroïdes (normalisés) :")
print(kmeans.cluster_centers_)

# Centroïdes dans l'espace ORIGINAL (plus lisible)
centroides_originaux = scaler.inverse_transform(kmeans.cluster_centers_)
print("\\nCentroïdes (valeurs originales) :")
df_centroides = pd.DataFrame(centroides_originaux,
    columns=['Age', 'Revenu_Annuel', 'Score_Depense', 'Frequence_Achat', 'Recence'])
print(df_centroides)`,
          language: 'python',
          tips: [
            'K-Means = minimise WCSS (somme des distances² points-centroïde)',
            'Centroïde = moyenne de tous les points du cluster',
            'Normaliser AVANT K-Means (sensible à l\'échelle comme KNN)',
            'K doit être choisi AVANT l\'entraînement (inconvénient vs DBSCAN)',
            'n_init=10 → lance l\'algorithme 10 fois, garde le meilleur résultat',
          ]
        },
        {
          title: 'Méthode du Coude (Elbow Method)',
          body: `<p>Comment choisir le bon K ? La <strong>méthode du coude</strong> consiste à tracer le WCSS en fonction de K. Le WCSS diminue toujours quand K augmente — mais à partir d'un certain point, la diminution devient moins significative. Ce point de "coude" est le K optimal.</p>`,
          code: `# ===== MÉTHODE DU COUDE — TROUVER K OPTIMAL =====

from sklearn.cluster import KMeans
import matplotlib.pyplot as plt

wcss = []
K_range = range(1, 11)

for k in K_range:
    kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)
    kmeans.fit(X_scaled)
    wcss.append(kmeans.inertia_)  # inertia_ = WCSS

# Tracer la courbe
plt.figure(figsize=(8, 5))
plt.plot(K_range, wcss, 'bo-', linewidth=2, markersize=8)
plt.xlabel('Nombre de clusters K')
plt.ylabel('WCSS')
plt.title('Méthode du Coude')
plt.xticks(K_range)
plt.grid(True, alpha=0.3)
plt.show()
# → Identifier visuellement le coude (point d'inflexion)

# ===== EXERCICE DU COURS — 10 datapoints =====
# P1(1,1), P2(1,2), P3(2,1), P4(2,2)  → groupe 1 (coin bas-gauche)
# P5(8,8), P6(8,9), P7(9,8), P8(9,9)  → groupe 2 (coin haut-droit)
# P9(5,4), P10(6,5)                   → groupe intermédiaire

# Pour K∈{2,3,4,5,6}, calculer WCSS et tracer le graphique
# Axe X = K, Axe Y = WCSS
# Le "coude" indique le K optimal (probablement K=3 ici)

# ===== VARIATION RELATIVE WCSS =====
# ΔK = (WCSS(K) - WCSS(K+1)) / WCSS(K) × 100
# La chute la plus marquée indique le K optimal
for k in range(len(wcss)-1):
    delta = (wcss[k] - wcss[k+1]) / wcss[k] * 100
    print(f"K={k+1}→{k+2}: chute de {delta:.1f}%")`,
          language: 'python',
          tips: [
            'WCSS diminue toujours avec K, mais le coude = K optimal',
            'inertia_ = WCSS dans sklearn',
            'ΔK = variation relative entre WCSS(K) et WCSS(K+1)',
            'Exercice cours : P1-P4 (coin 1-2), P5-P8 (coin 8-9), P9-P10 (milieu)',
            'Confirmer avec Score de Silhouette pour plus de robustesse',
          ]
        }
      ],
      quiz: [
        { q: 'K-Means est un algorithme :', opts: ['Supervisé de classification', 'Non supervisé de clustering', 'Supervisé de régression', 'Non supervisé de classification'], ans: 1 },
        { q: 'Que représente un centroïde dans K-Means ?', opts: ['Le point le plus éloigné du cluster', 'La moyenne de tous les points du cluster (centre géométrique)', 'Le premier point choisi aléatoirement', 'Le point le plus proche du bord'], ans: 1 },
        { q: 'Pourquoi faut-il choisir K avant l\'entraînement de K-Means ?', opts: ['Pour limiter le temps de calcul', 'K-Means requiert de savoir combien de groupes créer — il ne le découvre pas seul', 'Pour normaliser les données', 'Pour éviter les NaN'], ans: 1 },
        { q: 'WCSS signifie :', opts: ['Weighted Cluster Sum Score', 'Within-Cluster Sum of Squares', 'Width of Clustering Statistical System', 'Weighted Center Similarity Score'], ans: 1 },
        { q: 'La méthode du coude consiste à :', opts: ['Tracer WCSS en fonction de K et trouver le point d\'inflexion', 'Choisir K = nombre de classes connues', 'Utiliser la validation croisée pour K', 'Tester toutes les valeurs de K et garder le max'], ans: 0 },
        { q: 'Pourquoi normaliser avant K-Means ?', opts: ['Pour réduire le nombre de variables', 'K-Means est sensible à l\'échelle, une grande variable dominerait les distances', 'Pour éviter les NaN', 'Ce n\'est pas nécessaire'], ans: 1 },
        { q: 'Quel est l\'objectif principal de l\'algorithme K-Means ?', opts: ['Maximiser la distance entre clusters', 'Minimiser le WCSS (distances² entre points et leur centroïde)', 'Trouver le K optimal automatiquement', 'Supprimer les outliers'], ans: 1 },
      ],
      exam: [
        { type: 'open', q: 'Quel est l\'objectif principal de l\'algorithme K-Means ?', ans: 'L\'objectif de K-Means est de partitionner les données en K clusters de manière à minimiser le WCSS (Within-Cluster Sum of Squares) — la somme des distances au carré entre chaque point et le centroïde de son cluster. Il regroupe les points similaires ensemble et sépare les points différents.', hint: 'Minimiser WCSS = minimiser les distances entre points et leur centroïde' },
        { type: 'open', q: 'Que représente un centroïde dans K-Means ?', ans: 'Un centroïde est le centre géométrique d\'un cluster, calculé comme la moyenne de tous les points appartenant à ce cluster. À chaque itération, K-Means recalcule les centroïdes selon les points assignés. L\'algorithme converge quand les centroïdes ne bougent plus entre deux itérations.', hint: 'Centroïde = moyenne de tous les points du cluster, recalculé à chaque itération' },
        { type: 'open', q: 'Pourquoi faut-il choisir le nombre de clusters K dans K-Means avant l\'entraînement ? Quelle méthode permet de trouver le K optimal ?', ans: 'K-Means ne peut pas découvrir seul le nombre de groupes — il a besoin qu\'on lui indique K au départ. Cela nécessite une décision préalable, contrairement à DBSCAN qui découvre automatiquement le nombre de clusters.\n\nPour trouver le K optimal, on utilise la méthode du coude : tracer WCSS en fonction de K (de 1 à N). Le WCSS diminue toujours, mais le "coude" (point d\'inflexion) indique le K optimal où ajouter un cluster supplémentaire n\'apporte plus de gain significatif.', hint: 'K-Means ne découvre pas K seul. Méthode du coude : WCSS=f(K), trouver le coude' },
        { type: 'open', q: 'Décrire les étapes de l\'exercice méthode du coude avec les 10 points du cours (P1(1,1)...P10(6,5), K∈{2,3,4,5,6})', ans: '1. Choisir K centroïdes initiaux pour chaque valeur de K\n2. Calculer la distance euclidienne entre chaque point et chaque centroïde\n3. Assigner chaque point au centroïde le plus proche (former les clusters)\n4. Repositionner les centroïdes (moyenne des points assignés)\n5. Calculer le WCSS pour chaque cluster : somme des distances² points-centroïde\n6. Remplir le tableau K / WCSS pour K∈{2,3,4,5,6}\n7. Tracer le graphique (axe X = K, axe Y = WCSS)\n8. Identifier le coude → K optimal', hint: 'Étapes : centroïdes → distances → assignment → repositionner → WCSS → tableau → graphique → coude' },
      ]
    },

    // ── MODULE 4: SVM ──────────────────────────────────────────────
    {
      id: 'svm',
      title: 'SVM — Support Vector Machine',
      icon: '✂️',
      color: 'emerald',
      lessons: [
        {
          title: 'Hyperplan & Marge Maximale',
          body: `<p>SVM (Support Vector Machine) est un algorithme de <strong>classification supervisée</strong> qui cherche l'<strong>hyperplan</strong> qui sépare au mieux les classes avec la <strong>marge maximale</strong>.</p>
<p>L'<strong>hyperplan</strong> est la frontière de décision. En 2D c'est une droite, en 3D un plan, en N dimensions un hyperplan. SVM cherche celui qui maximise la distance aux points les plus proches de chaque classe (les <strong>vecteurs de support</strong>).</p>`,
          code: `# SVM avec sklearn
from sklearn.svm import SVC
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import classification_report, confusion_matrix

# Données (ex: classification tumeur bénigne/maligne)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Normalisation OBLIGATOIRE pour SVM aussi
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# ===== SVM Linéaire (kernel='linear') =====
svm_linear = SVC(kernel='linear', C=1.0)
svm_linear.fit(X_train_scaled, y_train)
y_pred = svm_linear.predict(X_test_scaled)
print("SVM Linéaire :")
print(classification_report(y_test, y_pred))

# ===== SVM Non-linéaire (kernel RBF) =====
# Quand les données ne sont pas séparables linéairement
# kernel='rbf' → projette dans un espace de dimension supérieure
svm_rbf = SVC(kernel='rbf', C=1.0, gamma='scale')
svm_rbf.fit(X_train_scaled, y_train)
y_pred_rbf = svm_rbf.predict(X_test_scaled)
print("\\nSVM RBF :")
print(classification_report(y_test, y_pred_rbf))

# Paramètre C : régularisation
# C petit → marge large, plus d'erreurs acceptées (underfitting)
# C grand → marge étroite, peu d'erreurs (risque overfitting)`,
          language: 'python',
          tips: [
            'Hyperplan = frontière de décision (droite en 2D, plan en 3D)',
            'SVM maximise la marge entre les classes',
            'Vecteurs de support = points les plus proches de l\'hyperplan',
            'Normaliser AVANT SVM (sensible à l\'échelle)',
            'kernel=\'linear\' pour données linéairement séparables',
            'kernel=\'rbf\' pour données non-linéaires (cas le plus courant)',
          ]
        },
        {
          title: 'Kernel & Cas d\'utilisation de SVM',
          body: `<p>Le <strong>paramètre kernel</strong> est fondamental dans SVM. Quand les données ne sont pas séparables par une droite, le kernel <strong>transforme</strong> les données dans un espace de dimension supérieure où elles deviennent séparables.</p>
<p>SVM est particulièrement efficace dans des cas spécifiques.</p>`,
          code: `# ===== TYPES DE KERNELS SVM =====

# kernel='linear' : frontière linéaire (droite/plan)
# Quand les classes sont presque séparables en ligne droite
svm = SVC(kernel='linear')

# kernel='poly' : frontière polynomiale
# Données avec des frontières courbes douces
svm = SVC(kernel='poly', degree=3)

# kernel='rbf' (Radial Basis Function) : frontière complexe
# Cas le plus général, fonctionne pour la plupart des problèmes
svm = SVC(kernel='rbf', gamma='scale')

# kernel='sigmoid' : similaire au réseau de neurones
svm = SVC(kernel='sigmoid')

# ===== CAS D'UTILISATION DE SVM =====
# SVM est particulièrement efficace quand :
# 1. Les données sont de HAUTE DIMENSIONNALITÉ (beaucoup de variables)
#    ex: reconnaissance de texte (des milliers de mots-features)
# 2. Les classes sont séparables avec une MARGE CLAIRE
# 3. Dataset de taille petite à moyenne (pas les très grands datasets)
# 4. Détection d'anomalies (One-Class SVM)
# 5. Classification d'images (avec kernel RBF)
# 6. Données médicales : cancer bénin/malin

# ===== POURQUOI NORMALISER POUR SVM =====
# SVM calcule la marge en fonction des distances
# Sans normalisation, les grandes variables dominent
# StandardScaler assure que toutes les variables ont le même poids

print("Kernels SVM : linear, poly, rbf, sigmoid")
print("Cas idéaux : haute dimension, petits datasets, marge claire")`,
          language: 'python',
          tips: [
            'Kernel = transforme les données dans un espace de dim supérieure',
            'rbf = kernel par défaut, le plus polyvalent',
            'SVM efficace en haute dimensionnalité (texte, images)',
            'SVM moins adapté aux très grands datasets (coût O(n²) à O(n³))',
            'Normaliser toujours avant SVM',
          ]
        }
      ],
      quiz: [
        { q: 'Que représente le terme hyperplan dans SVM ?', opts: ['Un cluster de données', 'La frontière de décision qui sépare les classes', 'Le vecteur le plus proche', 'La marge entre les classes'], ans: 1 },
        { q: 'Quelle est la fonction du paramètre kernel dans SVM ?', opts: ['Définir le nombre de classes', 'Transformer les données dans un espace de dimension supérieure pour les séparer', 'Normaliser les données', 'Définir le nombre de vecteurs de support'], ans: 1 },
        { q: 'Dans quels cas SVM est-il particulièrement efficace ?', opts: ['Très grands datasets avec peu de variables', 'Données de haute dimensionnalité avec marge claire entre classes', 'Clustering non supervisé', 'Données avec beaucoup de valeurs manquantes'], ans: 1 },
        { q: 'Pourquoi le scaling est-il important pour SVM ?', opts: ['Pour réduire le temps d\'entraînement', 'SVM calcule des marges basées sur des distances — les grandes variables domineraient', 'Pour encoder les variables catégorielles', 'Ce n\'est pas nécessaire pour SVM'], ans: 1 },
        { q: 'Quel kernel utiliser si les données NE sont PAS séparables linéairement ?', opts: ['kernel=\'linear\'', 'kernel=\'rbf\'', 'kernel=\'none\'', 'SVM ne peut pas gérer ce cas'], ans: 1 },
      ],
      exam: [
        { type: 'open', q: 'Dans quels cas l\'algorithme SVM est-il particulièrement efficace ?', ans: 'SVM est particulièrement efficace dans les cas suivants :\n1. Données de haute dimensionnalité (beaucoup de variables) — ex: classification de texte\n2. Classes séparables avec une marge claire entre elles\n3. Dataset de taille petite à moyenne (coût de calcul élevé pour très grands datasets)\n4. Détection d\'anomalies (One-Class SVM)\n5. Classification d\'images et données médicales (bénin/malin)', hint: 'Haute dimension, marge claire, dataset moyen, texte, images' },
        { type: 'open', q: 'Que représente le terme hyperplan dans SVM ?', ans: 'L\'hyperplan est la frontière de décision qui sépare les différentes classes. En 2D, c\'est une droite. En 3D, c\'est un plan. En N dimensions, c\'est un hyperplan à (N-1) dimensions. SVM cherche l\'hyperplan qui maximise la marge (distance) par rapport aux points les plus proches de chaque classe, appelés les vecteurs de support.', hint: 'Frontière de décision qui sépare les classes avec marge maximale' },
        { type: 'open', q: 'Quelle est la fonction du paramètre kernel dans SVM ?', ans: 'Le kernel est une fonction qui transforme les données dans un espace de dimension supérieure. Quand les données ne sont pas séparables linéairement dans leur espace d\'origine, le kernel les projette dans un espace où elles deviennent séparables.\nTypes principaux : linear (frontière droite), poly (frontière polynomiale), rbf (frontière complexe, le plus utilisé), sigmoid.', hint: 'Transformation dans un espace de dimension supérieure pour rendre les données séparables' },
      ]
    },

    // ── MODULE 5: DBSCAN ───────────────────────────────────────────
    {
      id: 'dbscan',
      title: 'DBSCAN',
      icon: '🌀',
      color: 'teal',
      lessons: [
        {
          title: 'DBSCAN vs K-Means',
          body: `<p>DBSCAN (Density-Based Spatial Clustering of Applications with Noise) est un algorithme de clustering <strong>non supervisé basé sur la densité</strong>. Contrairement à K-Means, il n'a pas besoin qu'on fixe K à l'avance et il gère naturellement le <strong>bruit</strong> (données aberrantes).</p>`,
          code: `from sklearn.cluster import DBSCAN
from sklearn.preprocessing import StandardScaler
import numpy as np

# Paramètres DBSCAN
# epsilon (eps) : rayon du voisinage d'un point
# min_samples : nombre minimum de points pour former un cluster dense

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Appliquer DBSCAN
dbscan = DBSCAN(eps=0.5, min_samples=5)
dbscan.fit(X_scaled)

# Labels : -1 = bruit (outlier), 0,1,2... = clusters
labels = dbscan.labels_
print("Labels uniques :", set(labels))
# {-1, 0, 1, 2} → 3 clusters + points bruités

n_clusters = len(set(labels)) - (1 if -1 in labels else 0)
n_noise = list(labels).count(-1)
print(f"Clusters trouvés : {n_clusters}")
print(f"Points bruités (outliers) : {n_noise}")

# ===== COMPARAISON K-MEANS vs DBSCAN =====
# K-Means :
# - Clusters sphériques/convexes seulement
# - K fixé à l'avance
# - Sensible aux outliers (les inclut dans un cluster)
# - Bon pour données propres et bien séparées

# DBSCAN :
# - Clusters de FORME QUELCONQUE (croissant, spirale...)
# - K découvert automatiquement
# - Robuste au bruit (label -1 = outlier)
# - Bon pour données bruitées et formes complexes
# - Paramètres eps et min_samples à régler`,
          language: 'python',
          tips: [
            'DBSCAN découvre K automatiquement (avantage vs K-Means)',
            'Labels -1 = bruit/outlier (DBSCAN les identifie nativement)',
            'DBSCAN gère des formes de clusters complexes (spirales, croissants)',
            'K-Means suppose des clusters sphériques — DBSCAN non',
            'eps = rayon du voisinage, min_samples = densité minimale',
          ]
        },
        {
          title: 'Bruit vs Outliers & Avantages DBSCAN',
          body: `<p>Une distinction importante dans le cours : <strong>donnée bruitée</strong> vs <strong>outlier (valeur aberrante)</strong>.</p>
<p>Un <strong>outlier</strong> est une valeur extrême mais réelle (ex: un client avec un revenu de 10M dh). Une <strong>donnée bruitée</strong> est une erreur ou imprécision dans la mesure (ex: un capteur défaillant).</p>
<p>DBSCAN est robuste aux deux car il ne force pas chaque point dans un cluster.</p>`,
          code: `# ===== DONNÉE BRUITÉE vs OUTLIER =====
# Outlier (valeur aberrante) :
# → Valeur extrême mais RÉELLE et potentiellement informative
# → Ex: un client qui dépense 10x plus que la moyenne
# → K-Means : l'inclut dans un cluster (fausse le centroïde)
# → DBSCAN : label -1 (isolé, pas dans un cluster dense)

# Donnée bruitée :
# → Erreur de mesure ou d'enregistrement
# → Ex: âge = 250 ans (erreur de saisie)
# → Doit être corrigée ou supprimée avant modélisation

# ===== POURQUOI DBSCAN EST ROBUSTE AU BRUIT =====
# DBSCAN classe un point comme "noise" (label=-1)
# si il n'est pas dans une zone dense (< min_samples voisins dans eps)
# Il ne l'intègre pas de force dans un cluster comme K-Means
# → Les outliers/bruit n'affectent PAS les centroïdes des clusters

# ===== AVANTAGE DBSCAN — FORMES COMPLEXES =====
# K-Means suppose des clusters sphériques et de taille comparable
# DBSCAN fonctionne sur des clusters de formes quelconques :
# - Clusters en forme de croissant
# - Clusters en spirale
# - Clusters de densités différentes

# Exemple : données en forme de cercles concentriques
from sklearn.datasets import make_circles, make_moons

X_circles, y_circles = make_circles(n_samples=200, noise=0.05)
dbscan = DBSCAN(eps=0.2, min_samples=5)
labels = dbscan.fit_predict(X_circles)
# K-Means échouerait sur cette forme, DBSCAN réussit !`,
          language: 'python',
          tips: [
            'Outlier = valeur extrême réelle. Donnée bruitée = erreur de mesure',
            'DBSCAN label -1 = point isolé (ni outlier ni bruit n\'est dans un cluster)',
            'DBSCAN robuste car ne force pas les outliers dans des clusters',
            'Formes complexes (cercles, spirales) → DBSCAN, pas K-Means',
            'K-Means = clusters sphériques. DBSCAN = formes quelconques',
          ]
        }
      ],
      quiz: [
        { q: 'Quelle différence entre K-Means et DBSCAN ?', opts: ['K-Means est non supervisé, DBSCAN est supervisé', 'K-Means requiert K fixé, DBSCAN découvre K automatiquement et gère le bruit', 'DBSCAN est plus lent que K-Means', 'K-Means gère mieux les formes complexes'], ans: 1 },
        { q: 'Pourquoi DBSCAN est-il robuste face au bruit (noise) ?', opts: ['Il supprime les outliers avant clustering', 'Il assigne le label -1 aux points isolés sans les forcer dans un cluster', 'Il normalise automatiquement les données', 'Il utilise K=1 par défaut'], ans: 1 },
        { q: 'Quel avantage DBSCAN possède-t-il pour des clusters de formes complexes ?', opts: ['DBSCAN suppose des clusters sphériques', 'DBSCAN gère des clusters de forme quelconque (spirales, croissants)', 'DBSCAN est plus rapide que K-Means', 'DBSCAN ne nécessite pas de normalisation'], ans: 1 },
        { q: 'Dans DBSCAN, un label de -1 signifie :', opts: ['Cluster 1', 'Point non encore assigné', 'Bruit / outlier (point isolé)', 'Erreur d\'algorithme'], ans: 2 },
        { q: 'Différence entre donnée bruitée et outlier :', opts: ['Aucune différence', 'Outlier = valeur extrême réelle. Donnée bruitée = erreur de mesure', 'Outlier = erreur. Donnée bruitée = valeur extrême réelle', 'Les deux sont automatiquement supprimés par DBSCAN'], ans: 1 },
      ],
      exam: [
        { type: 'open', q: 'Quelle différence existe entre K-Means et DBSCAN ?', ans: 'K-Means : requiert de fixer K à l\'avance, suppose des clusters sphériques et de taille comparable, sensible aux outliers (les inclut dans un cluster), bon pour données propres.\nDBSCAN : découvre K automatiquement, gère des clusters de forme quelconque (spirales, croissants), robuste au bruit (label -1 pour les outliers), paramètres eps et min_samples à régler.', hint: 'K-Means=K fixé+clusters sphériques. DBSCAN=K automatique+formes complexes+robuste bruit' },
        { type: 'open', q: 'Pourquoi DBSCAN est-il considéré comme robuste face au bruit ?', ans: 'DBSCAN classe un point comme "bruit" (label -1) s\'il n\'est pas dans une zone dense (moins de min_samples voisins dans un rayon eps). Ces points ne sont pas intégrés de force dans un cluster, ce qui évite qu\'ils faussent les résultats. Contrairement à K-Means qui assigne TOUS les points à un cluster (même les outliers), DBSCAN les isole.', hint: 'Label -1 = isolé. Ne force pas les outliers dans un cluster comme K-Means.' },
        { type: 'open', q: 'Quelle est la différence entre une donnée bruitée et une donnée aberrante (outlier) ?', ans: 'Outlier (valeur aberrante) : valeur extrême mais réelle et potentiellement informative. Ex : un client avec un revenu 10x supérieur à la moyenne — c\'est une vraie observation.\nDonnée bruitée : erreur ou imprécision de mesure. Ex : un âge de 250 ans dû à une faute de saisie — c\'est une erreur qui doit être corrigée ou supprimée.', hint: 'Outlier = extrême mais réel. Bruit = erreur de mesure.' },
        { type: 'dropdown', q: 'DBSCAN peut identifier le nombre optimal de clusters automatiquement sans que l\'utilisateur fixe K à l\'avance', opts: ['Vrai', 'Faux'], ans: 0, hint: 'Vrai. C\'est l\'un des avantages principaux de DBSCAN par rapport à K-Means.' },
      ]
    },

    // ── MODULE 6: RÉGRESSION LOGISTIQUE ───────────────────────────
    {
      id: 'regression-logistique',
      title: 'Régression Logistique',
      icon: '📈',
      color: 'coral',
      lessons: [
        {
          title: 'Régression Logistique — Classification binaire',
          body: `<p>Malgré son nom, la Régression Logistique est un algorithme de <strong>classification supervisée</strong> (pas de régression). Elle prédit la <strong>probabilité</strong> qu'un exemple appartienne à une classe (entre 0 et 1) via la <strong>fonction sigmoïde</strong>.</p>
<p>TP du cours : prédire si une cellule est <strong>bénigne ou maligne</strong> à partir de 2 features (x1, x2).</p>`,
          code: `import pandas as pd
import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report

# Charger les données (TP cellules)
data = pd.read_excel("Data_cellules.xlsx")
print(data.head())

# Séparer X et y
X = data.drop("y", axis=1)  # features x1, x2
y = data["y"]               # label binaire (0/1)

# Diviser train/test (stratifié = garder les proportions de classes)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, stratify=y, random_state=42
)

# Normalisation
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# ===== MODÈLE =====
model = LogisticRegression()
model.fit(X_train_scaled, y_train)

# Prédictions
y_pred = model.predict(X_test_scaled)

# Évaluation
print("Accuracy :", accuracy_score(y_test, y_pred))
print("\\nMatrice de confusion :")
print(confusion_matrix(y_test, y_pred))
print("\\nRapport :")
print(classification_report(y_test, y_pred))

# ===== PRÉDIRE UNE NOUVELLE CELLULE =====
nouvelle_cellule = np.array([[5.7, 12.7]])
nouvelle_scaled = scaler.transform(nouvelle_cellule)
prediction = model.predict(nouvelle_scaled)
probabilite = model.predict_proba(nouvelle_scaled)
print(f"Classe prédite : {prediction[0]}")
print(f"Probabilités : {probabilite}")`,
          language: 'python',
          tips: [
            'Régression Logistique = classification (malgré le nom !)',
            'Prédit une PROBABILITÉ entre 0 et 1 via la fonction sigmoïde',
            'stratify=y → mêmes proportions de classes dans train et test',
            'predict() → classe (0 ou 1), predict_proba() → probabilités',
            'Normaliser avant la régression logistique',
          ]
        },
        {
          title: 'Validation croisée & Pipeline complet',
          body: `<p>La <strong>validation croisée</strong> (cross-validation) divise les données en K sous-ensembles, entraîne sur K-1 et teste sur le dernier — K fois. Elle donne une estimation plus robuste des performances que le simple split train/test.</p>`,
          code: `from sklearn.model_selection import cross_val_score
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler
import numpy as np

# ===== VALIDATION CROISÉE =====
# cv=5 → 5-fold : divise en 5, entraîne 5 fois
model = LogisticRegression()

# ATTENTION : normaliser dans le pipeline !
from sklearn.pipeline import Pipeline
pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('model', LogisticRegression())
])

scores = cross_val_score(pipeline, X, y, cv=5, scoring='accuracy')
print(f"Accuracies par fold : {scores.round(3)}")
print(f"Accuracy moyenne : {scores.mean():.3f} ± {scores.std():.3f}")

# ===== STRATIFICATION =====
# Problème : si 90% positifs et 10% négatifs dans y,
# un split aléatoire pourrait mettre tous les négatifs en test
# Stratification = garder les mêmes proportions dans chaque fold
from sklearn.model_selection import StratifiedKFold

skf = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
scores_strat = cross_val_score(pipeline, X, y, cv=skf, scoring='f1')
print(f"F1 stratifié : {scores_strat.mean():.3f}")

# ===== RÉSUMÉ DU PIPELINE COMPLET ML =====
# 1. Charger les données (pd.read_csv / pd.read_excel)
# 2. Explorer (head, info, describe, isnull)
# 3. Traiter valeurs manquantes (fillna / dropna)
# 4. Encoder variables catégorielles (LabelEncoder)
# 5. Séparer X et y
# 6. Diviser train/test (train_test_split, stratify=y)
# 7. Normaliser (StandardScaler — fit sur train, transform sur test)
# 8. Choisir/entraîner le modèle (KNN, SVM, LogisticRegression...)
# 9. Évaluer (accuracy, matrice de confusion, F1...)
# 10. Prédire de nouveaux exemples`,
          language: 'python',
          tips: [
            'Validation croisée = évaluation plus robuste que simple split',
            'Toujours normaliser DANS le pipeline (pas avant le split !)',
            'Stratification = garder proportions de classes dans chaque fold',
            'Pipeline = normalisation + modèle en une seule étape',
            'fit_transform sur TRAIN seulement, transform sur TEST seulement',
          ]
        }
      ],
      quiz: [
        { q: 'La Régression Logistique est :', opts: ['Un algorithme de régression pour prédire des valeurs continues', 'Un algorithme de classification supervisée qui prédit une probabilité', 'Un algorithme de clustering non supervisé', 'Une variante de K-Means'], ans: 1 },
        { q: 'Que prédit réellement la Régression Logistique ?', opts: ['Une valeur numérique continue', 'La probabilité d\'appartenir à une classe (entre 0 et 1)', 'Le nombre de clusters optimal', 'La distance entre deux points'], ans: 1 },
        { q: 'À quoi sert stratify=y dans train_test_split ?', opts: ['Pour trier les données avant de diviser', 'Pour garder les mêmes proportions de classes dans train et test', 'Pour normaliser les données automatiquement', 'Pour éviter les valeurs manquantes'], ans: 1 },
        { q: 'Quelle méthode sklearn retourne les probabilités (pas la classe) ?', opts: ['predict()', 'predict_proba()', 'score()', 'transform()'], ans: 1 },
        { q: 'Pourquoi normaliser DANS le pipeline et non AVANT le split ?', opts: ['Pas de différence, c\'est la même chose', 'Normaliser avant le split = fuite de données (data leakage) — le test influence les stats du train', 'Le pipeline est plus lent', 'Sklearn ne supporte pas la normalisation avant split'], ans: 1 },
      ],
      exam: [
        { type: 'open', q: 'La régression logistique est-elle vraiment un algorithme de régression ? Expliquer.', ans: 'Non, malgré son nom, la régression logistique est un algorithme de classification supervisée. Elle prédit la probabilité (entre 0 et 1) qu\'un exemple appartienne à une classe via la fonction sigmoïde. Si P ≥ 0.5 → classe 1, sinon → classe 0. Elle est utilisée pour la classification binaire (bénin/malin, spam/non-spam).', hint: 'Non, c\'est de la classification. Elle prédit une probabilité via la fonction sigmoïde.' },
        { type: 'open', q: 'Décrire les étapes complètes d\'un pipeline Machine Learning (du chargement à la prédiction).', ans: '1. Charger les données (pd.read_csv / pd.read_excel)\n2. Explorer (head, info, describe, isnull().sum())\n3. Traiter les valeurs manquantes (fillna / dropna)\n4. Encoder les variables catégorielles (LabelEncoder)\n5. Séparer X (features) et y (cible)\n6. Diviser train/test (train_test_split, stratify=y)\n7. Normaliser (StandardScaler — fit_transform sur train, transform sur test)\n8. Choisir et entraîner le modèle\n9. Évaluer (accuracy, matrice de confusion, F1 score)\n10. Prédire de nouveaux exemples', hint: 'Charger→Explorer→Traiter→Encoder→X/y→Split→Normaliser→Entraîner→Évaluer→Prédire' },
        { type: 'open', q: 'Récapitulatif : classer les algorithmes du cours selon Supervisé/Non Supervisé et Classification/Clustering', ans: 'Supervisé — Classification :\n- KNN (K-Nearest Neighbors)\n- SVM (Support Vector Machine)\n- Régression Logistique\n\nNon Supervisé — Clustering :\n- K-Means\n- DBSCAN\n\nRègle : si les données ont des labels (y connu) → supervisé. Sinon → non supervisé.', hint: 'Supervisé: KNN, SVM, Régression Log. Non supervisé: K-Means, DBSCAN.' },
        { type: 'checkbox', q: 'Sélectionner les algorithmes de Machine Learning NON SUPERVISÉS du cours', opts: ['KNN', 'K-Means', 'SVM', 'DBSCAN', 'Régression Logistique'], ans: [1, 3], hint: 'K-Means et DBSCAN — les deux algorithmes de clustering' },
      ]
    }
  ]
}