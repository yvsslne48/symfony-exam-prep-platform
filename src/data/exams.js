// ══════════════════════════════════════════════════════════════
//  SYMFONY EXAMS DATA
// ══════════════════════════════════════════════════════════════

// ── MODE QCM : questions à choix multiple (auto-correction) ──
export const SYMFONY_QCM = [
  // Routing & Contrôleurs
  { section: 'Contrôleurs & Routing', q: 'Quel dossier Symfony contient les templates Twig ?', opts: ['src/', 'templates/', 'views/', 'public/twig/'], ans: 1 },
  { section: 'Contrôleurs & Routing', q: 'L\'attribut #[Route] doit obligatoirement avoir un name ?', opts: ['Oui, obligatoire', 'Non, optionnel mais recommandé', 'Oui, sinon erreur 500', 'Non, inutile'], ans: 1 },
  { section: 'Contrôleurs & Routing', q: 'Quelle méthode de AbstractController retourne du JSON ?', opts: ['render()', 'jsonResponse()', 'json()', 'apiResponse()'], ans: 2 },
  { section: 'Contrôleurs & Routing', q: 'Comment vérifier si la requête est AJAX ?', opts: ['$request->isAjax()', '$request->isXmlHttpRequest()', '$request->ajax()', '$request->checkAjax()'], ans: 1 },
  { section: 'Contrôleurs & Routing', q: 'Quelle commande liste toutes les routes ?', opts: ['php bin/console routes:list', 'php bin/console debug:router', 'php bin/console show:routes', 'php bin/console route:debug'], ans: 1 },
  { section: 'Contrôleurs & Routing', q: 'Comment récupérer le paramètre GET "page" dans une URL ?', opts: ['$request->get("page")', '$request->query->get("page")', '$request->params->get("page")', '$request->request->get("page")'], ans: 1 },
  { section: 'Contrôleurs & Routing', q: 'Quelle commande crée un contrôleur PageController ?', opts: ['php bin/console create:controller PageController', 'php bin/console make:controller PageController', 'php bin/console generate:controller PageController', 'php bin/console controller:make PageController'], ans: 1 },
  { section: 'Contrôleurs & Routing', q: 'Comment déclencher une erreur 404 dans un contrôleur ?', opts: ['return new Response(404)', 'throw $this->createNotFoundException()', 'return $this->notFound()', 'throw new Exception(404)'], ans: 1 },
  // Twig
  { section: 'Twig', q: 'Comment afficher une variable en Twig ?', opts: ['<? echo $var ?>', '{% var %}', '{{ var }}', '[[ var ]]'], ans: 2 },
  { section: 'Twig', q: 'Quelle fonction génère une URL absolue en Twig ?', opts: ['url()', 'path()', 'absolute_url()', 'full_url()'], ans: 2 },
  { section: 'Twig', q: 'Quelle fonction intègre les ressources CSS/JS/images en Twig ?', opts: ['resource()', 'include()', 'asset()', 'src()'], ans: 2 },
  { section: 'Twig', q: 'Comment récupérer l\'utilisateur connecté en Twig ?', opts: ['app.current_user', 'app.user', 'app.security.user', 'getUser()'], ans: 1 },
  { section: 'Twig', q: 'Quelle fonction génère l\'URL d\'une route nommée en Twig ?', opts: ['url()', 'path()', 'route()', 'link()'], ans: 1 },
  { section: 'Twig', q: 'Comment hériter d\'un template parent en Twig ?', opts: ['{% include "base" %}', '{% extends "base.html.twig" %}', '{% inherit "base" %}', '{% parent "base" %}'], ans: 1 },
  // Doctrine
  { section: 'Doctrine & BDD', q: 'Quelle commande crée une entité Doctrine ?', opts: ['php bin/console make:entity', 'php bin/console create:entity', 'php bin/console doctrine:entity', 'php bin/console generate:entity'], ans: 0 },
  { section: 'Doctrine & BDD', q: 'Quelle commande génère une migration ?', opts: ['php bin/console doctrine:migrate', 'php bin/console make:migration', 'php bin/console migration:create', 'php bin/console db:migrate'], ans: 1 },
  { section: 'Doctrine & BDD', q: 'Pour un UPDATE, faut-il appeler persist() ?', opts: ['Oui, toujours', 'Non, seulement flush() si déjà managée', 'Oui, puis flush()', 'Non, automatique'], ans: 1 },
  { section: 'Doctrine & BDD', q: 'Il n\'est pas possible d\'écrire des requêtes SQL natives avec Doctrine ?', opts: ['Vrai', 'Faux'], ans: 1 },
  { section: 'Doctrine & BDD', q: 'Où placer la logique des requêtes SQL complexes avec Doctrine ?', opts: ['Dans le Contrôleur', 'Dans l\'Entité', 'Dans le Repository', 'Dans services.yaml'], ans: 2 },
  { section: 'Doctrine & BDD', q: 'Quel type de champ Symfony pour charger une liste depuis la BDD ?', opts: ['ChoiceType', 'SelectType', 'EntityType', 'DatabaseType'], ans: 2 },
  // Formulaires
  { section: 'Formulaires', q: 'De quelle classe héritent tous les FormType Symfony ?', opts: ['AbstractFormType', 'BaseFormType', 'AbstractType', 'FormBuilder'], ans: 2 },
  { section: 'Formulaires', q: 'Quelle méthode crée un formulaire dans un contrôleur ?', opts: ['buildForm()', 'createForm()', 'makeForm()', 'newForm()'], ans: 1 },
  { section: 'Formulaires', q: 'Parmi ces fonctions Twig, laquelle N\'EXISTE PAS pour les formulaires ?', opts: ['form_row()', 'form_show_field()', 'form_widget()', 'form_errors()'], ans: 1 },
  { section: 'Formulaires', q: 'Comment valider un formulaire Symfony ? (bonne réponse)', opts: ['Seulement dans le FormType', 'Seulement dans l\'entité', 'Dans FormType OU dans l\'entité', 'Via form_validate() en Twig'], ans: 2 },
  // Sécurité
  { section: 'Sécurité', q: 'Quels sont les axes de la sécurité Symfony ?', opts: ['Login, Logout, Roles', 'User Providers, Firewalls, Access Control', 'Authentication, Session, CSRF', 'Voters, Guards, Policies'], ans: 1 },
  { section: 'Sécurité', q: 'Quelle commande crée l\'entité User ?', opts: ['make:entity User', 'make:user', 'security:create-user', 'make:security'], ans: 1 },
  { section: 'Sécurité', q: 'Pour implémenter un Voter, quelles méthodes sont requises ?', opts: ['supports() et voteOnAttribute()', 'hasRole() et check()', 'supports() et hasRole()', 'vote() et check()'], ans: 0 },
  { section: 'Sécurité', q: 'Comment récupérer l\'utilisateur connecté dans AbstractController ?', opts: ['$this->security->getUser()', '$this->getUser()', '$this->user', 'Security::getUser()'], ans: 1 },
  // Services & DI
  { section: 'Services & DI', q: 'Qui instancie et manipule les services en Symfony ?', opts: ['Le Kernel', 'Le Service Container (IoC)', 'L\'EntityManager', 'Le Router'], ans: 1 },
  { section: 'Services & DI', q: 'Que fait autowire: true dans services.yaml ?', opts: ['Active le cache', 'Injection automatique via type hints', 'Active la sécurité', 'Optimise les routes'], ans: 1 },
  { section: 'Services & DI', q: 'Pourquoi utiliser #[Autowire] ?', opts: ['Pour définir un alias de service', 'Pour injecter une valeur scalaire ou un service précis quand l\'autowiring ne suffit pas', 'Pour activer l\'autowiring globalement', 'Pour créer un nouveau service'], ans: 1 },
]

// ── MODE PDF : questions exactement comme le vrai examen (ouvert, dropdown, checkbox) ──
export const SYMFONY_PDF = [
  // Section 1 : Contrôleurs & Routing
  {
    section: 'Contrôleurs et Routing',
    type: 'open',
    q: 'Quelle est l\'utilité du fichier bin/console dans Symfony ?',
    ans: 'bin/console est l\'outil en ligne de commande de Symfony. Il permet d\'exécuter des commandes utilitaires comme créer des contrôleurs (make:controller), générer des entités (make:entity), gérer les migrations (make:migration, doctrine:migrations:migrate), vider le cache (cache:clear), déboguer les routes (debug:router), etc.',
    hint: 'Outil CLI Symfony pour générer du code, gérer la BDD, déboguer...'
  },
  {
    section: 'Contrôleurs et Routing',
    type: 'open',
    q: 'Définir les dossiers/fichiers suivants : templates/ | public/index.php | src/ | .env | config/packages | vendor',
    ans: 'templates/ → Contient les fichiers Twig (.html.twig) pour l\'affichage\npublic/index.php → Point d\'entrée unique de l\'application (Front Controller), seul dossier accessible depuis le web\nsrc/ → Contient tout le code PHP de l\'application (Contrôleurs, Entités, Services...)\n.env → Fichier de configuration des variables d\'environnement (BDD, clés API...)\nconfig/packages → Fichiers de configuration des bundles et packages Symfony\nvendor/ → Dépendances installées par Composer (bibliothèques tierces)',
    hint: 'templates=Twig, public=web, src=PHP, .env=config, config=packages, vendor=dépendances'
  },
  {
    section: 'Contrôleurs et Routing',
    type: 'open',
    q: 'Citer la commande Symfony qui permet de créer le contrôleur PageController à partir du terminal',
    ans: 'php bin/console make:controller PageController',
    hint: 'php bin/console make:controller NomController'
  },
  {
    section: 'Contrôleurs et Routing',
    type: 'open',
    q: 'Quelle est l\'importance de l\'objet Request ?',
    ans: 'L\'objet Request encapsule toutes les données de la requête HTTP entrante : méthode HTTP (GET, POST...), données POST ($request->request), paramètres GET ($request->query), headers, fichiers uploadés, cookies, session. Il permet d\'accéder à toutes les informations envoyées par le client de façon orientée objet et sécurisée.',
    hint: 'Encapsule toutes les données HTTP : GET, POST, headers, fichiers, session...'
  },
  {
    section: 'Contrôleurs et Routing',
    type: 'open',
    q: 'URL : http://localhost/products?limit=10&page=1. Comment récupérer le paramètre limit ?',
    ans: '$limit = $request->query->get(\'limit\');\n// ou avec valeur par défaut :\n$limit = $request->query->get(\'limit\', 10);\n// $request->query correspond aux paramètres GET (?key=value)',
    hint: '$request->query->get(\'limit\')'
  },
  {
    section: 'Contrôleurs et Routing',
    type: 'open',
    q: 'Pourquoi est-il pratique d\'hériter la classe contrôleur de AbstractController ?',
    ans: 'AbstractController fournit des méthodes utilitaires prêtes à l\'emploi :\n- render() → retourner une réponse HTML via Twig\n- json() → retourner une JsonResponse\n- redirectToRoute() → rediriger vers une route\n- createNotFoundException() → générer une erreur 404\n- getUser() → récupérer l\'utilisateur connecté\n- denyAccessUnlessGranted() → vérifier les droits\n- addFlash() → messages flash\nSans AbstractController, il faudrait tout coder manuellement.',
    hint: 'render(), json(), redirectToRoute(), createNotFoundException(), getUser()...'
  },
  {
    section: 'Contrôleurs et Routing',
    type: 'open',
    q: 'Compléter le code pour retourner la page /page en utilisant templates/page/index.html.twig',
    ans: 'return $this->render(\'page/index.html.twig\');',
    hint: 'return $this->render(\'page/index.html.twig\');'
  },
  {
    section: 'Contrôleurs et Routing',
    type: 'open',
    q: 'Pourquoi est-il conseillé de définir un name unique (name = "app_page") pour chaque route ?',
    ans: 'Le nom unique permet de générer des URLs de façon découplée du chemin réel :\n- En PHP : $this->generateUrl(\'app_page\')\n- En Twig : {{ path(\'app_page\') }}\nAvantage : si on change le chemin /page en /ma-page, on ne modifie que la route. Tous les liens générés par le nom restent valides automatiquement.',
    hint: 'Génération d\'URL découplée du chemin réel. Si chemin change, les liens restent valides.'
  },
  {
    section: 'Contrôleurs et Routing',
    type: 'open',
    q: 'Compléter le bloc pour retourner une exception 404 selon une condition',
    ans: 'throw $this->createNotFoundException(\'Page non trouvée\');\n// ou :\nthrow new NotFoundHttpException(\'Page non trouvée\');',
    hint: 'throw $this->createNotFoundException(\'Message\');'
  },
  {
    section: 'Contrôleurs et Routing',
    type: 'open',
    q: 'Contrôleur avec routes /page/{page} et /page/{name}. Comportement si accès à /page/hello ?',
    ans: 'Symfony exécute TOUJOURS la PREMIÈRE route qui correspond dans l\'ordre de définition. Pour /page/hello, les deux routes correspondent ({page} et {name} acceptent tous les strings). Symfony exécute someFunction (première route /page/{page}).\n\nSolution : Ajouter des requirements pour différencier :\n- /page/{page} avec requirements: [\'page\' => \'\\d+\'] (seulement chiffres)\n- /page/{name} avec requirements: [\'name\' => \'[a-z]+\'] (seulement lettres)\nOu utiliser priority pour contrôler l\'ordre.',
    hint: 'Symfony prend la PREMIÈRE route qui correspond. Différencier avec requirements ou priority.'
  },
  {
    section: 'Contrôleurs et Routing',
    type: 'open',
    q: 'Routes /page/{page} et /page/all : pourquoi /page/all exécute someFunction ? Solution ?',
    ans: 'Car /page/{page} est définie en PREMIER et "all" correspond au pattern {page} (string). Symfony prend la première route qui matche.\n\nSolution : Utiliser priority sur la route /page/all :\n#[Route(\'/page/all\', name: \'app_page_second\', priority: 10)]\nOu déplacer la route /page/all AVANT la route /page/{page}.\nOu ajouter requirements: [\'page\' => \'\\d+\'] sur /page/{page} pour n\'accepter que les chiffres.',
    hint: 'Ordre des routes. Solution : priority ou requirements ou réordonner les routes.'
  },
  // Twig
  {
    section: 'Twig',
    type: 'open',
    q: 'Quelle est l\'utilité de "extends" dans les templates Twig ?',
    ans: '{% extends "base.html.twig" %} permet d\'hériter d\'un template parent. La template enfant réutilise la structure complète du parent (HTML, head, nav, footer) et ne redéfinit que les blocs ({% block %}) spécifiques. Avantage : éviter la duplication du code HTML commun sur toutes les pages.',
    hint: 'Héritage de template. La page enfant hérite de la structure du parent et redéfinit les blocs.'
  },
  {
    section: 'Twig',
    type: 'open',
    q: 'À quoi servent les "block" dans Twig ?',
    ans: 'Les blocs {% block nom %}...{% endblock %} définissent des zones remplaçables dans le template parent. Les templates enfants peuvent redéfinir ces zones pour personnaliser le contenu (titre, CSS, contenu principal, JS...) tout en conservant la structure parente.',
    hint: 'Zones remplaçables par les templates enfants.'
  },
  {
    section: 'Twig',
    type: 'checkbox',
    q: 'Comment récupérer l\'utilisateur connecté en Twig ?',
    opts: ['En utilisant app.user', 'En utilisant app.current_user', 'En utilisant app.security.user', 'En le passant via un contrôleur à chaque fois'],
    ans: [0],
    hint: 'app.user — variable globale Twig de Symfony.'
  },
  {
    section: 'Twig',
    type: 'open',
    q: 'Écrire le nom de la fonction Twig pour générer l\'URL du contrôleur avec name="app_page"',
    ans: '{{ path(\'app_page\') }}\n// Pour URL absolue : {{ absolute_url(path(\'app_page\')) }}',
    hint: 'path(\'nom_route\')'
  },
  // Doctrine
  {
    section: 'Base de données / Doctrine',
    type: 'open',
    q: 'Écrire la commande permettant de générer l\'entité Page',
    ans: 'php bin/console make:entity Page',
    hint: 'php bin/console make:entity Page'
  },
  {
    section: 'Base de données / Doctrine',
    type: 'checkbox',
    q: 'Sélectionner la ou les commandes correctes pour mettre à jour la structure de la BDD',
    opts: [
      'php bin/console make:migration ensuite php bin/console doctrine:migrations:migrate',
      'php bin/console cache:clear ensuite php bin/console doctrine:migrations:migrate',
      'php bin/console make:doctrine:migration ensuite php bin/console doctrine:migration:run'
    ],
    ans: [0],
    hint: 'make:migration génère le fichier SQL, puis doctrine:migrations:migrate l\'applique.'
  },
  {
    section: 'Base de données / Doctrine',
    type: 'open',
    q: 'Remplacer ④ pour enregistrer une nouvelle entrée en base de données (avec $page = new Page())',
    ans: '$em->persist($page);\n$em->flush();\n// persist() marque l\'objet pour insertion\n// flush() exécute le SQL INSERT',
    hint: '$em->persist($page); puis $em->flush();'
  },
  {
    section: 'Base de données / Doctrine',
    type: 'open',
    q: 'Lorsque vous devez écrire une requête SQL complexe avec Doctrine, dans quel endroit précis placeriez-vous la logique ?',
    ans: 'Dans le Repository de l\'entité concernée (ex: src/Repository/PageRepository.php). Le Repository est la couche dédiée à l\'accès aux données. On y crée des méthodes personnalisées utilisant le QueryBuilder ou DQL.',
    hint: 'Dans le Repository (ex: PageRepository.php) — couche d\'accès aux données.'
  },
  {
    section: 'Base de données / Doctrine',
    type: 'open',
    q: 'Expliquer la différence entre ManyToOne et ManyToMany en Doctrine',
    ans: 'ManyToOne : relation N vers 1. Plusieurs entités A pointent vers une seule entité B.\nExemple : plusieurs Articles appartiennent à une seule Catégorie.\n\nManyToMany : relation N vers N. Plusieurs entités A sont liées à plusieurs entités B.\nExemple : plusieurs Articles peuvent avoir plusieurs Tags, et un Tag peut être sur plusieurs Articles.\nDoctrine crée automatiquement une table intermédiaire pour ManyToMany.',
    hint: 'ManyToOne = N→1 (Article→Catégorie). ManyToMany = N↔N (Article↔Tags).'
  },
  {
    section: 'Base de données / Doctrine',
    type: 'open',
    q: 'Dans un formulaire Symfony, quel type de champ pour charger une liste de choix depuis la BDD ?',
    ans: 'EntityType (Symfony\\Bridge\\Doctrine\\Form\\Type\\EntityType)\nIl charge automatiquement les entités depuis la BDD et les affiche comme liste déroulante ou cases à cocher.',
    hint: 'EntityType — charge directement les entités Doctrine.'
  },
  {
    section: 'Base de données / Doctrine',
    type: 'dropdown',
    q: 'Il n\'est pas possible d\'écrire des requêtes SQL natives avec Doctrine',
    opts: ['Vrai', 'Faux'],
    ans: 1,
    hint: 'Faux. Doctrine permet d\'exécuter des requêtes SQL natives avec $em->getConnection()->executeQuery().'
  },
  // Formulaires
  {
    section: 'Les Formulaires',
    type: 'open',
    q: 'Donner le code nécessaire à mettre dans ⑤ pour créer le formulaire PageType dans le contrôleur',
    ans: '$form = $this->createForm(PageType::class);\n// ou avec une entité :\n$page = new Page();\n$form = $this->createForm(PageType::class, $page);\n$form->handleRequest($request);',
    hint: '$form = $this->createForm(PageType::class); puis $form->handleRequest($request);'
  },
  {
    section: 'Les Formulaires',
    type: 'open',
    q: 'Expliquer le comportement de Symfony quand l\'utilisateur soumet le formulaire (code avec isSubmitted && isValid)',
    ans: '1. handleRequest($request) lie les données POST au formulaire\n2. isSubmitted() vérifie que le formulaire a bien été soumis (méthode POST)\n3. isValid() vérifie que toutes les contraintes de validation sont respectées\n4. Si les deux sont true → exécuter la logique (persist, flush...) puis redirectToRoute(\'app_home_page\')\n5. Sinon (GET ou données invalides) → réafficher le formulaire avec les erreurs via render()',
    hint: 'handleRequest → isSubmitted() && isValid() → persist/flush/redirect, sinon render() avec erreurs.'
  },
  {
    section: 'Les Formulaires',
    type: 'checkbox',
    q: 'Sélectionner les fonctions qui NE SONT PAS des fonctions liées à la personnalisation des formulaires en Twig',
    opts: ['form_row', 'form_show_field', 'form_start', 'form_end', 'form_errors', 'form_csrf', 'form_widget', 'form_submit'],
    ans: [1, 5, 7],
    hint: 'form_show_field, form_csrf et form_submit n\'existent pas. Les vraies : form_row, form_start, form_end, form_errors, form_widget, form_label.'
  },
  {
    section: 'Les Formulaires',
    type: 'checkbox',
    q: 'Sélectionner les différentes manières de valider un formulaire en Symfony',
    opts: [
      'En ajoutant les contraintes au niveau du FormType',
      'En ajoutant les contraintes au niveau de l\'entité',
      'Dans la template, appeler form_validate() en Twig'
    ],
    ans: [0, 1],
    hint: 'FormType OU entité. form_validate() n\'existe pas en Twig.'
  },
  {
    section: 'Les Formulaires',
    type: 'open',
    q: 'Citer 3 contraintes de validation de formulaire Symfony (uniquement leurs noms)',
    ans: 'NotBlank — champ obligatoire non vide\nEmail — format email valide\nLength — longueur min/max\nRegex — format regex\nPositive — nombre positif\nRange — valeur dans une plage\nUnique — valeur unique en BDD\nUrl — format URL valide',
    hint: 'NotBlank, Email, Length, Regex, Range, Positive, Url...'
  },
  // Sécurité
  {
    section: 'Sécurité en Symfony',
    type: 'open',
    q: 'Quels sont les 3 axes principaux de la sécurité en Symfony ?',
    ans: '1. User Providers — comment charger/recharger l\'utilisateur (depuis BDD, LDAP, mémoire...)\n2. Firewalls — zones de sécurité de l\'application, gèrent l\'authentification (qui peut accéder)\n3. Access Control — restriction d\'accès par URL et rôle (qui a le droit de faire quoi)',
    hint: 'User Providers + Firewalls + Access Control'
  },
  {
    section: 'Sécurité en Symfony',
    type: 'open',
    q: 'Expliquer le rôle de chaque section numérotée dans security.yaml : ① providers, ② firewalls, ③ access_control',
    ans: '① providers : Définit comment charger l\'utilisateur. Ici Entity User Provider avec l\'entité App\\Entity\\User, identifiant = email.\n\n② firewalls : Zones de sécurité. "dev" désactive la sécurité pour les outils de dev. "main" gère tout le reste avec lazy: true (session démarrée seulement si nécessaire) et le provider app_user_provider.\n\n③ access_control : Règles de restriction. /admin → ROLE_ADMIN. / → IS_AUTHENTICATED_FULLY. /login → ACCESS_PUBLIC (accessible à tous).',
    hint: '① providers=charger user, ② firewalls=zones sécurité, ③ access_control=restrictions par URL/rôle'
  },
  {
    section: 'Sécurité en Symfony',
    type: 'open',
    q: 'Avec la configuration précédente, que se passe-t-il si un utilisateur souhaite se connecter sur /login ?',
    ans: 'La route /login est définie dans access_control avec ACCESS_PUBLIC, donc elle est accessible à tous sans authentification. L\'utilisateur peut afficher la page de login librement. Si le firewall "main" a un custom_authenticator configuré, Symfony traitera les credentials soumis via le check_path.',
    hint: 'ACCESS_PUBLIC → accessible à tous sans authentification.'
  },
  {
    section: 'Sécurité en Symfony',
    type: 'open',
    q: 'Comment récupérer l\'utilisateur connecté dans un contrôleur héritant de AbstractController ?',
    ans: '$user = $this->getUser();\n// Retourne l\'objet User ou null si non connecté\n// Vérifier si connecté :\nif ($this->getUser()) { /* ... */ }',
    hint: '$this->getUser() — méthode de AbstractController'
  },
  {
    section: 'Sécurité en Symfony',
    type: 'checkbox',
    q: 'Vous devez implémenter une classe Voter. Sélectionner toutes les affirmations correctes',
    opts: [
      'Créer une classe qui hérite de la classe abstraite Voter',
      'Implémenter la méthode voteOnAttribute()',
      'Implémenter la méthode hasRole()',
      'Implémenter la méthode supports()'
    ],
    ans: [0, 1, 3],
    hint: 'Voter requiert : hériter de Voter + implémenter supports() + implémenter voteOnAttribute(). hasRole() n\'existe pas.'
  },
  {
    section: 'Sécurité en Symfony',
    type: 'open',
    q: 'Comment restreindre l\'accès à une page uniquement pour ROLE_ADMIN dans AbstractController ? Citer 2 manières',
    ans: '1. $this->denyAccessUnlessGranted(\'ROLE_ADMIN\');\n   // Lance AccessDeniedException (403) si pas le rôle\n\n2. #[IsGranted(\'ROLE_ADMIN\')]\n   // Attribut PHP avant la méthode ou la classe',
    hint: 'denyAccessUnlessGranted() OU #[IsGranted(\'ROLE_ADMIN\')]'
  },
  // Services & DI
  {
    section: 'Les Services',
    type: 'open',
    q: 'Expliquer la différence entre l\'Injection de Dépendances et l\'Autowiring en Symfony',
    ans: 'Injection de Dépendances (DI) : principe de conception où une classe reçoit ses dépendances de l\'extérieur plutôt que de les créer elle-même (éviter le mot-clé new). Cela permet le découplage, la testabilité et la flexibilité.\n\nAutowiring : mécanisme de Symfony qui automatise l\'injection de dépendances. En analysant les type hints PHP du constructeur, Symfony devine quel service injecter automatiquement. Sans autowiring, il faudrait configurer chaque injection manuellement dans services.yaml.',
    hint: 'DI = principe (recevoir les dépendances). Autowiring = automatisation de la DI via type hints.'
  },
  {
    section: 'Les Services',
    type: 'open',
    q: 'En Symfony, qui se charge d\'instancier et manipuler les services ?',
    ans: 'Le Service Container (ou IoC Container). C\'est le cœur de Symfony qui gère le cycle de vie de tous les services : création, injection des dépendances et destruction.',
    hint: 'Le Service Container (IoC Container)'
  },
  {
    section: 'Les Services',
    type: 'open',
    q: 'Expliquer la configuration ① dans services.yaml : App\\ resource: \'../src/\'',
    ans: 'Cette configuration enregistre automatiquement TOUTES les classes PHP du dossier src/ comme services dans le container. Symfony scanne src/ et crée un service pour chaque classe trouvée, avec l\'FQCN comme identifiant. Cela évite de déclarer manuellement chaque service.',
    hint: 'Enregistre automatiquement toutes les classes src/ comme services.'
  },
  {
    section: 'Les Services',
    type: 'open',
    q: 'Architecture : UserHandlerInterface ← DefaultUserHandler. Contrôleur injecte UserHandlerInterface. Comportement de Symfony ?',
    ans: 'Symfony injecte automatiquement DefaultUserHandler car c\'est la seule classe qui implémente UserHandlerInterface. L\'autowiring résout l\'interface et injecte l\'implémentation concrète.',
    hint: '1 seule implémentation → Symfony l\'injecte automatiquement via l\'interface.'
  },
  {
    section: 'Les Services',
    type: 'open',
    q: 'Architecture : UserHandlerInterface ← ApiUserHandler ET DefaultUserHandler. Pourquoi le code ne fonctionne pas ? Comment le fixer ?',
    ans: 'Problème : Symfony trouve 2 beans candidats (ApiUserHandler et DefaultUserHandler) pour UserHandlerInterface et ne sait pas lequel choisir → exception "Cannot autowire: there are 2 implementations".\n\nSolution : Utiliser un ALIAS dans services.yaml :\nApp\\Handler\\UserHandlerInterface: \'@App\\Handler\\DefaultUserHandler\'\n\nOu utiliser l\'attribut #[Autowire] directement :\npublic function __construct(\n    #[Autowire(service: \'App\\Handler\\DefaultUserHandler\')]\n    private UserHandlerInterface $handler\n) {}\n\nTechnique : Alias de service (ou Binding explicite)',
    hint: 'NoUniqueBeanDefinitionException. Fixer avec alias dans services.yaml ou #[Autowire].'
  },
  {
    section: 'Les Services',
    type: 'open',
    q: 'Pour quelle raison utilise-t-on #[Autowire] ?',
    ans: '#[Autowire] est utilisé quand l\'autowiring automatique ne suffit pas :\n- Injecter une valeur scalaire (string, int) depuis les paramètres : #[Autowire(\'%app.name%\')]\n- Choisir une implémentation précise parmi plusieurs : #[Autowire(service: \'App\\Service\\EmailNotifier\')]\n- Injecter une variable d\'environnement : #[Autowire(env: \'MAILER_DSN\')]',
    hint: 'Quand l\'autowiring ne suffit pas : valeurs scalaires, implémentation précise, env vars.'
  },
  {
    section: 'Les Services',
    type: 'open',
    q: 'Quel est le rôle de "arguments" dans la configuration services.yaml pour App\\Service\\Mailer avec $from: "khadiri.issam@gmail.com" ?',
    ans: '"arguments" permet d\'injecter manuellement des valeurs dans le constructeur du service quand l\'autowiring ne peut pas le faire automatiquement (ex: une chaîne de caractères, un email, une URL).\nIci, $from sera injecté avec la valeur "khadiri.issam@gmail.com" dans le constructeur de la classe Mailer.',
    hint: 'Injecter manuellement des valeurs (scalaires) dans le constructeur quand l\'autowiring ne suffit pas.'
  }
]

// ── EXAMEN RÉEL 2026 — Questions exactes du vrai examen EHEI ──
export const SYMFONY_REAL_2026 = [
  {
    section: '📋 Contrôleur et Routing (11pts)',
    type: 'open',
    q: '1. Quelle est l\'utilité du fichier bin/console dans Symfony ? (0.5pt)',
    ans: 'bin/console est l\'outil CLI de Symfony. Il permet d\'exécuter des commandes comme make:controller, make:entity, make:migration, doctrine:migrations:migrate, debug:router, cache:clear...',
    hint: 'Outil en ligne de commande pour générer du code et gérer le projet.'
  },
  {
    section: '📋 Contrôleur et Routing (11pts)',
    type: 'open',
    q: '2. Définir les dossiers/fichiers : templates/ | public/index.php | src/ | .env | config/packages | vendor',
    ans: 'templates/ → Fichiers Twig pour l\'affichage\npublic/index.php → Point d\'entrée web (Front Controller)\nsrc/ → Code PHP de l\'application\n.env → Variables d\'environnement (BDD, API keys)\nconfig/packages → Configuration des bundles\nvendor/ → Dépendances Composer',
    hint: 'templates=Twig, public=web, src=PHP, .env=config, config=packages, vendor=dépendances'
  },
  {
    section: '📋 Contrôleur et Routing (11pts)',
    type: 'open',
    q: '3. Citer la commande Symfony pour créer le contrôleur PageController (1pt)',
    ans: 'php bin/console make:controller PageController',
    hint: 'php bin/console make:controller PageController'
  },
  {
    section: '📋 Contrôleur et Routing (11pts)',
    type: 'open',
    q: '4. Quelle est l\'importance de l\'objet Request ? (1pt)',
    ans: 'Request encapsule toutes les données HTTP entrantes : méthode HTTP, données POST ($request->request), paramètres GET ($request->query), headers, cookies, fichiers uploadés. Il représente la requête du client de façon orientée objet.',
    hint: 'Encapsule toutes les données HTTP : GET, POST, headers, fichiers, session.'
  },
  {
    section: '📋 Contrôleur et Routing (11pts)',
    type: 'open',
    q: '5. URL : /products?limit=10&page=1. Comment récupérer le paramètre limit ? (1pt)',
    ans: '$limit = $request->query->get(\'limit\');\n// $request->query = paramètres GET (?key=value)',
    hint: '$request->query->get(\'limit\')'
  },
  {
    section: '📋 Contrôleur et Routing (11pts)',
    type: 'open',
    q: '6. Pourquoi est-il pratique d\'hériter de AbstractController ? (1pt)',
    ans: 'AbstractController fournit render(), json(), redirectToRoute(), createNotFoundException(), getUser(), denyAccessUnlessGranted(), addFlash()... Ces méthodes utilitaires évitent de tout coder manuellement.',
    hint: 'render(), json(), redirectToRoute(), createNotFoundException(), getUser()...'
  },
  {
    section: '📋 Contrôleur et Routing (11pts)',
    type: 'open',
    q: '7. Compléter ① : retourner la page /page avec templates/page/index.html.twig (1pt)',
    ans: 'return $this->render(\'page/index.html.twig\');',
    hint: 'return $this->render(\'page/index.html.twig\');'
  },
  {
    section: '📋 Contrôleur et Routing (11pts)',
    type: 'open',
    q: '8. Pourquoi définir un name unique (name = "app_page") pour chaque route ? (1pt)',
    ans: 'Pour générer des URLs découplées du chemin réel. Si le chemin change, les liens générés par le nom restent valides. En PHP : $this->generateUrl("app_page"). En Twig : {{ path("app_page") }}.',
    hint: 'Génération d\'URL par nom. Indépendant du chemin réel.'
  },
  {
    section: '📋 Contrôleur et Routing (11pts)',
    type: 'open',
    q: '9. Compléter ③ pour retourner une exception 404 selon une condition (1pt)',
    ans: 'throw $this->createNotFoundException(\'Page non trouvée\');',
    hint: 'throw $this->createNotFoundException(\'message\');'
  },
  {
    section: '📋 Contrôleur et Routing (11pts)',
    type: 'open',
    q: '10. Routes /page/{page} et /page/{name}. Comportement si accès à /page/hello ? (1pt)',
    ans: 'Symfony exécute someFunction (première route /page/{page}) car elle est définie en premier et "hello" correspond à {page}. Symfony matche toujours la PREMIÈRE route compatible.',
    hint: 'Première route compatible = someFunction. Symfony ne continue pas si une route matche.'
  },
  {
    section: '📋 Contrôleur et Routing (11pts)',
    type: 'open',
    q: '11. Routes /page/{page} et /page/all : pourquoi /page/all exécute someFunction ? Solution ? (1.5pt)',
    ans: 'Pourquoi : /page/{page} est définie en premier et "all" matche le paramètre {page}.\n\nSolutions :\n1. Ajouter priority: 10 sur la route /page/all pour la rendre prioritaire\n2. Déplacer la route /page/all AVANT /page/{page}\n3. Ajouter requirements: [\'page\' => \'\\d+\'] sur /page/{page} pour n\'accepter que les chiffres',
    hint: 'Solution : priority, réordonner, ou requirements sur {page}.'
  },
  // Twig
  {
    section: '🌿 Twig (3pts)',
    type: 'open',
    q: '12. Quelle est l\'utilité de extends dans les templates Twig ? (1pt)',
    ans: '{% extends "base.html.twig" %} permet d\'hériter du template parent. La page enfant réutilise toute la structure HTML commune (head, nav, footer) et ne redéfinit que les blocs spécifiques. Évite la duplication de code.',
    hint: 'Héritage template. Évite la duplication de HTML commun.'
  },
  {
    section: '🌿 Twig (3pts)',
    type: 'open',
    q: '13. À quoi servent les "block" dans Twig ? (0.5pt)',
    ans: 'Les blocs {% block nom %}{% endblock %} définissent des zones remplaçables. Les templates enfants redéfinissent ces zones pour personnaliser le contenu sans toucher à la structure commune.',
    hint: 'Zones remplaçables par les templates enfants.'
  },
  {
    section: '🌿 Twig (3pts)',
    type: 'checkbox',
    q: '14. Comment récupérer l\'utilisateur connecté en Twig ? (1pt)',
    opts: ['En utilisant app.user', 'En utilisant app.current_user', 'En utilisant app.security.user', 'En le passant via un contrôleur à chaque fois'],
    ans: [0],
    hint: 'app.user — variable globale Twig de Symfony.'
  },
  {
    section: '🌿 Twig (3pts)',
    type: 'open',
    q: '15. Écrire le nom de la fonction Twig pour générer l\'URL du contrôleur avec name="app_page" (0.5pt)',
    ans: '{{ path(\'app_page\') }}',
    hint: '{{ path(\'app_page\') }}'
  },
  // Doctrine
  {
    section: '🗄️ Base de données / Doctrine (7pts)',
    type: 'open',
    q: '16. Écrire la commande permettant de générer l\'entité Page (1pt)',
    ans: 'php bin/console make:entity Page',
    hint: 'php bin/console make:entity Page'
  },
  {
    section: '🗄️ Base de données / Doctrine (7pts)',
    type: 'checkbox',
    q: '17. Sélectionner la/les commandes correctes pour mettre à jour la structure de la BDD (1pt)',
    opts: [
      'php bin/console make:migration ensuite php bin/console doctrine:migrations:migrate',
      'php bin/console cache:clear ensuite php bin/console doctrine:migrations:migrate',
      'php bin/console make:doctrine:migration ensuite php bin/console doctrine:migration:run'
    ],
    ans: [0],
    hint: 'make:migration génère le SQL, doctrine:migrations:migrate l\'applique.'
  },
  {
    section: '🗄️ Base de données / Doctrine (7pts)',
    type: 'open',
    q: '18. Remplacer ④ pour enregistrer une nouvelle entrée en BDD (avec $page = new Page()) (1pt)',
    ans: '$em->persist($page);\n$em->flush();\n// persist() = marquer pour insertion\n// flush() = exécuter le SQL INSERT',
    hint: '$em->persist($page); puis $em->flush();'
  },
  {
    section: '🗄️ Base de données / Doctrine (7pts)',
    type: 'open',
    q: '19. Pour des requêtes SQL complexes avec Doctrine, où placer la logique ? (1pt)',
    ans: 'Dans le Repository (ex: PageRepository.php). C\'est la couche dédiée à l\'accès aux données.',
    hint: 'Dans le Repository — ex: PageRepository.php'
  },
  {
    section: '🗄️ Base de données / Doctrine (7pts)',
    type: 'open',
    q: '20. Expliquer la différence entre ManyToOne et ManyToMany en Doctrine (1pt)',
    ans: 'ManyToOne : N→1. Plusieurs entités A vers une entité B. Ex: Articles → Catégorie.\nManyToMany : N↔N. Plusieurs A vers plusieurs B. Ex: Articles ↔ Tags. Doctrine crée une table intermédiaire automatiquement.',
    hint: 'ManyToOne = N→1. ManyToMany = N↔N (table intermédiaire auto).'
  },
  {
    section: '🗄️ Base de données / Doctrine (7pts)',
    type: 'open',
    q: '21. Dans un formulaire Symfony, quel type de champ pour charger une liste depuis la BDD ? (1pt)',
    ans: 'EntityType — Symfony\\Bridge\\Doctrine\\Form\\Type\\EntityType',
    hint: 'EntityType'
  },
  {
    section: '🗄️ Base de données / Doctrine (7pts)',
    type: 'dropdown',
    q: '22. Il n\'est pas possible d\'écrire des requêtes SQL natives avec Doctrine (1pt)',
    opts: ['Vrai', 'Faux'],
    ans: 1,
    hint: 'Faux. Doctrine permet les requêtes SQL natives via $em->getConnection().'
  },
  // Formulaires
  {
    section: '📝 Les Formulaires (5pts)',
    type: 'open',
    q: '23. Code nécessaire dans ⑤ pour créer le formulaire PageType dans le contrôleur (0.5pt)',
    ans: '$form = $this->createForm(PageType::class);\n$form->handleRequest($request);',
    hint: '$this->createForm(PageType::class) puis handleRequest($request)'
  },
  {
    section: '📝 Les Formulaires (5pts)',
    type: 'open',
    q: '24. Comportement de Symfony quand l\'utilisateur soumet le formulaire (isSubmitted && isValid) (1.5pt)',
    ans: '1. handleRequest($request) lie les données POST au formulaire\n2. isSubmitted() = true (formulaire soumis en POST)\n3. isValid() vérifie les contraintes de validation\n4. Si valide → logique métier (persist/flush) + redirectToRoute(\'app_home_page\')\n5. Si invalide ou GET → render() avec le formulaire et les erreurs affichées',
    hint: 'handleRequest → isSubmitted && isValid → logique/redirect, sinon render avec erreurs.'
  },
  {
    section: '📝 Les Formulaires (5pts)',
    type: 'checkbox',
    q: '25. Sélectionner les fonctions qui NE SONT PAS des fonctions de formulaires Twig (1pt)',
    opts: ['form_row', 'form_show_field', 'form_start', 'form_end', 'form_errors', 'form_csrf', 'form_widget', 'form_submit'],
    ans: [1, 5, 7],
    hint: 'form_show_field, form_csrf, form_submit n\'existent pas.'
  },
  {
    section: '📝 Les Formulaires (5pts)',
    type: 'checkbox',
    q: '26. Sélectionner les différentes manières de valider un formulaire en Symfony (1pt)',
    opts: [
      'En ajoutant les contraintes au niveau du FormType',
      'En ajoutant les contraintes au niveau de l\'entité',
      'Dans la template, appeler form_validate() en Twig'
    ],
    ans: [0, 1],
    hint: 'FormType OU entité. form_validate() n\'existe pas.'
  },
  {
    section: '📝 Les Formulaires (5pts)',
    type: 'open',
    q: '27. Citer 3 contraintes de validation de formulaire Symfony — Uniquement leurs noms (1pt)',
    ans: 'NotBlank\nEmail\nLength\n(Autres valides : Regex, Positive, Range, Url, UniqueEntity...)',
    hint: 'NotBlank, Email, Length, Regex, Range, Positive...'
  },
  // Sécurité
  {
    section: '🔒 Sécurité en Symfony (6pts)',
    type: 'open',
    q: '28. Quels sont les 3 axes principaux de la sécurité en Symfony ? (1pt)',
    ans: 'a. User Providers — charger l\'utilisateur\nb. Firewalls — zones de sécurité / authentification\nc. Access Control — restrictions par URL et rôle',
    hint: 'User Providers + Firewalls + Access Control'
  },
  {
    section: '🔒 Sécurité en Symfony (6pts)',
    type: 'open',
    q: '29. Expliquer le rôle de chaque section numérotée dans security.yaml ① providers ② firewalls ③ access_control (2pts)',
    ans: '① providers : Définit la source des utilisateurs. Ici Entity User Provider avec App\\Entity\\User, identifié par email.\n\n② firewalls : Zones de sécurité. "dev" = pas de sécurité pour outils dev. "main" = gère l\'appli avec lazy: true (session uniquement si nécessaire) et le provider configuré.\n\n③ access_control : Règles d\'accès. /admin → ROLE_ADMIN. / → IS_AUTHENTICATED_FULLY. /login → ACCESS_PUBLIC (tout le monde).',
    hint: '① providers=source user, ② firewalls=zones auth, ③ access_control=restrictions URL/rôle'
  },
  {
    section: '🔒 Sécurité en Symfony (6pts)',
    type: 'open',
    q: '30. Que se passe-t-il si un utilisateur souhaite se connecter sur /login ? (1pt)',
    ans: '/login est défini avec ACCESS_PUBLIC dans access_control → accessible à tous sans authentification. L\'utilisateur peut voir la page de login. Le firewall traitera les credentials soumis.',
    hint: 'ACCESS_PUBLIC = accessible sans authentification.'
  },
  {
    section: '🔒 Sécurité en Symfony (6pts)',
    type: 'open',
    q: '31. Comment récupérer l\'utilisateur connecté dans un contrôleur héritant de AbstractController ? (1pt)',
    ans: '$user = $this->getUser();\n// Retourne l\'entité User ou null si non connecté',
    hint: '$this->getUser()'
  },
  {
    section: '🔒 Sécurité en Symfony (6pts)',
    type: 'checkbox',
    q: '32. Implémenter un Voter. Sélectionner les affirmations correctes (0.5pt)',
    opts: [
      'Créer une classe qui hérite de la classe abstraite Voter',
      'Implémenter la méthode voteOnAttribute()',
      'Implémenter la méthode hasRole()',
      'Implémenter la méthode supports()'
    ],
    ans: [0, 1, 3],
    hint: 'Voter : hériter de Voter + supports() + voteOnAttribute(). hasRole() n\'existe pas.'
  },
  {
    section: '🔒 Sécurité en Symfony (6pts)',
    type: 'open',
    q: '33. Restreindre l\'accès à ROLE_ADMIN dans AbstractController. Citer 2 manières (0.5pt)',
    ans: '1. $this->denyAccessUnlessGranted(\'ROLE_ADMIN\');\n2. #[IsGranted(\'ROLE_ADMIN\')] sur la méthode ou la classe',
    hint: 'denyAccessUnlessGranted() OU #[IsGranted()]'
  },
  // Services
  {
    section: '⚙️ Les Services (8pts)',
    type: 'open',
    q: '34. Différence entre l\'Injection de Dépendances et l\'Autowiring en Symfony (2pts)',
    ans: 'Injection de Dépendances : principe où une classe reçoit ses dépendances de l\'extérieur (pas de new). Permet le découplage, la testabilité et la flexibilité.\n\nAutowiring : mécanisme de Symfony qui automatise la DI. Il analyse les type hints PHP du constructeur et injecte automatiquement le bon service. Sans autowiring, chaque injection devrait être configurée manuellement dans services.yaml.',
    hint: 'DI = principe (recevoir dépendances). Autowiring = automatisation via type hints.'
  },
  {
    section: '⚙️ Les Services (8pts)',
    type: 'open',
    q: '35. En Symfony, qui se charge d\'instancier et manipuler les services ? (1pt)',
    ans: 'Le Service Container (Conteneur de Services / IoC Container). Il gère le cycle de vie de tous les services.',
    hint: 'Le Service Container'
  },
  {
    section: '⚙️ Les Services (8pts)',
    type: 'open',
    q: '36. Expliquer la configuration ① : App\\ resource: \'../src/\' dans services.yaml (1pt)',
    ans: 'Enregistre automatiquement TOUTES les classes du dossier src/ comme services dans le container. Symfony scanne src/ et crée un service pour chaque classe avec son FQCN comme identifiant. Évite de déclarer chaque service manuellement.',
    hint: 'Auto-enregistrement de toutes les classes src/ comme services.'
  },
  {
    section: '⚙️ Les Services (8pts)',
    type: 'open',
    q: '37. UserHandlerInterface ← DefaultUserHandler (seule implémentation). Comportement de Symfony ? (1pt)',
    ans: 'Symfony injecte automatiquement DefaultUserHandler car c\'est la seule classe implémentant UserHandlerInterface. L\'autowiring résout l\'interface et injecte l\'unique implémentation disponible.',
    hint: '1 implémentation → injection automatique.'
  },
  {
    section: '⚙️ Les Services (8pts)',
    type: 'open',
    q: '38. UserHandlerInterface ← ApiUserHandler ET DefaultUserHandler. Pourquoi ça ne fonctionne pas ? Comment fixer ? (1pt)',
    ans: 'Problème : 2 implémentations pour UserHandlerInterface → Symfony ne sait pas laquelle choisir → exception "Cannot autowire argument".\n\nSolution (Technique : Alias de service) :\nDans services.yaml :\nApp\\Handler\\UserHandlerInterface: \'@App\\Handler\\DefaultUserHandler\'\n\nOu avec #[Autowire(service: \'App\\Handler\\DefaultUserHandler\')] sur le constructeur.',
    hint: 'Ambiguïté → alias dans services.yaml ou #[Autowire]. Technique = Alias de service.'
  },
  {
    section: '⚙️ Les Services (8pts)',
    type: 'open',
    q: '39. Pour quelle raison utilise-t-on #[Autowire] ? (1pt)',
    ans: '#[Autowire] est utilisé quand l\'autowiring automatique ne peut pas résoudre l\'injection :\n- Valeur scalaire : #[Autowire(\'%app.name%\')]\n- Implémentation précise parmi plusieurs : #[Autowire(service: \'App\\Service\\EmailNotifier\')]\n- Variable d\'environnement : #[Autowire(env: \'MAILER_DSN\')]',
    hint: 'Valeurs scalaires, implémentation précise, ou variables d\'environnement.'
  },
  {
    section: '⚙️ Les Services (8pts)',
    type: 'open',
    q: '40. Rôle de "arguments" dans services.yaml pour App\\Service\\Mailer avec $from: "khadiri.issam@gmail.com" ? (1pt)',
    ans: '"arguments" permet d\'injecter manuellement des valeurs scalaires dans le constructeur d\'un service. L\'autowiring ne peut pas deviner une valeur comme un email — il faut la configurer explicitement. Ici $from sera injecté avec "khadiri.issam@gmail.com".',
    hint: 'Injection manuelle de valeurs scalaires non devinables par l\'autowiring.'
  }
]

export const SYMFONY_PLUS = []
