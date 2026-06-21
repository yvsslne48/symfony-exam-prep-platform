// ══════════════════════════════════════════════════════════════
//  FLASHCARDS — Symfony, Spring, .NET
//  Chaque carte a : course, module (id exact du module), q, a
// ══════════════════════════════════════════════════════════════

export const FLASHCARDS = [
  // ═══════════════════════════════════════════════
  //  SYMFONY
  // ═══════════════════════════════════════════════

  // ── routing ──
  { course: 'symfony', module: 'routing', q: '#[Route]', a: 'Attribut PHP 8 qui définit l\'URL déclenchant une méthode de contrôleur.' },
  { course: 'symfony', module: 'routing', q: 'createNotFoundException()', a: 'Lance une exception HTTP 404 Not Found dans un contrôleur Symfony.' },
  { course: 'symfony', module: 'routing', q: 'redirectToRoute()', a: 'Redirige vers une route nommée (retourne RedirectResponse).' },
  { course: 'symfony', module: 'routing', q: 'isXmlHttpRequest()', a: 'Vérifie si la requête HTTP courante est de type AJAX.' },
  { course: 'symfony', module: 'routing', q: '$request->request->get()', a: 'Récupère les données POST d\'un formulaire HTML.' },
  { course: 'symfony', module: 'routing', q: '$request->query->get()', a: 'Récupère un paramètre GET dans l\'URL (?key=value).' },
  { course: 'symfony', module: 'routing', q: 'debug:router', a: 'Commande CLI qui liste toutes les routes du projet Symfony.' },
  { course: 'symfony', module: 'routing', q: 'priority', a: 'Option de #[Route] qui contrôle l\'ordre d\'évaluation des routes (plus haute = prioritaire).' },
  { course: 'symfony', module: 'routing', q: 'requirements', a: 'Option de #[Route] qui valide un paramètre avec une regex (ex: \\d+).' },
  { course: 'symfony', module: 'routing', q: 'json()', a: 'Méthode de AbstractController qui retourne une JsonResponse.' },
  { course: 'symfony', module: 'routing', q: 'render()', a: 'Méthode de AbstractController qui retourne une réponse HTML via Twig.' },
  { course: 'symfony', module: 'routing', q: 'AbstractController', a: 'Classe de base des contrôleurs Symfony (render, json, redirectToRoute...).' },

  // ── twig ──
  { course: 'symfony', module: 'twig', q: '{{ variable }}', a: 'Affiche une variable ou expression en Twig (doubles accolades).' },
  { course: 'symfony', module: 'twig', q: '{% extends %}', a: 'Hérite d\'un template parent en Twig.' },
  { course: 'symfony', module: 'twig', q: '{% block %}', a: 'Définit une zone remplaçable dans un template Twig.' },
  { course: 'symfony', module: 'twig', q: '{{ parent() }}', a: 'Inclut le contenu du bloc parent dans un bloc enfant Twig.' },
  { course: 'symfony', module: 'twig', q: 'asset()', a: 'Génère l\'URL d\'un fichier statique CSS/JS/image dans Twig.' },
  { course: 'symfony', module: 'twig', q: 'path()', a: 'Génère une URL relative vers une route nommée dans Twig.' },
  { course: 'symfony', module: 'twig', q: 'absolute_url()', a: 'Génère une URL absolue (avec https://domaine.com) dans Twig.' },
  { course: 'symfony', module: 'twig', q: 'include()', a: 'Inclut un template partiel dans un autre template Twig.' },
  { course: 'symfony', module: 'twig', q: 'app.user', a: 'Variable Twig qui retourne l\'utilisateur actuellement connecté.' },
  { course: 'symfony', module: 'twig', q: 'is_granted()', a: 'Fonction Twig qui vérifie si l\'utilisateur a un rôle donné.' },
  { course: 'symfony', module: 'twig', q: '| upper', a: 'Filtre Twig qui convertit une chaîne en MAJUSCULES.' },
  { course: 'symfony', module: 'twig', q: '{# #}', a: 'Commentaire Twig — non visible dans le HTML généré.' },

  // ── di ──
  { course: 'symfony', module: 'di', q: 'config/services.yaml', a: 'Fichier de configuration du Service Container Symfony.' },
  { course: 'symfony', module: 'di', q: 'autowire: true', a: 'Active l\'injection automatique des dépendances via les type hints PHP.' },
  { course: 'symfony', module: 'di', q: 'autoconfigure: true', a: 'Configure automatiquement les tags des services (EventListener, Command...).' },
  { course: 'symfony', module: 'di', q: 'debug:container', a: 'Commande CLI qui liste tous les services enregistrés dans le container.' },
  { course: 'symfony', module: 'di', q: 'Service Container', a: 'Cœur de Symfony qui instancie et injecte automatiquement tous les services.' },
  { course: 'symfony', module: 'di', q: 'App\\: resource: \'../src/\'', a: 'Enregistre automatiquement tous les fichiers src/ comme services.' },
  { course: 'symfony', module: 'di', q: 'Alias de service', a: 'Lie une interface à une implémentation précise dans services.yaml (App\\Interface: \'@App\\Impl\').' },
  { course: 'symfony', module: 'di', q: 'NoUniqueBeanDefinitionException... (équiv Symfony)', a: 'Erreur "Cannot autowire" quand Symfony trouve plusieurs implémentations possibles pour une interface.' },

  // ── forms ──
  { course: 'symfony', module: 'forms', q: 'AbstractType', a: 'Classe de base dont héritent tous les formulaires Symfony (FormType).' },
  { course: 'symfony', module: 'forms', q: 'createForm()', a: 'Méthode du contrôleur qui crée une instance de formulaire.' },
  { course: 'symfony', module: 'forms', q: 'handleRequest()', a: 'Traite la requête HTTP et lie les données POST au formulaire Symfony.' },
  { course: 'symfony', module: 'forms', q: 'isSubmitted() && isValid()', a: 'Vérifie que le formulaire est soumis ET que les données sont valides.' },
  { course: 'symfony', module: 'forms', q: 'form_row()', a: 'Affiche label + input + erreurs d\'un champ de formulaire en Twig.' },
  { course: 'symfony', module: 'forms', q: 'form_start() / form_end()', a: 'Balises <form>...</form> en Twig — form_end() ajoute le token CSRF.' },
  { course: 'symfony', module: 'forms', q: 'mapped: false', a: 'Option de champ de formulaire — non lié à une propriété de l\'entité.' },
  { course: 'symfony', module: 'forms', q: 'data_class', a: 'Option du FormType qui lie le formulaire à une entité (ex: User::class).' },
  { course: 'symfony', module: 'forms', q: '#[Assert\\NotBlank]', a: 'Contrainte de validation Symfony — champ obligatoire non vide.' },
  { course: 'symfony', module: 'forms', q: '#[Assert\\Email]', a: 'Contrainte de validation Symfony — vérifie le format email.' },

  // ── doctrine ──
  { course: 'symfony', module: 'doctrine', q: 'persist()', a: 'Marque un objet Doctrine pour insertion/mise à jour (avant flush).' },
  { course: 'symfony', module: 'doctrine', q: 'flush()', a: 'Exécute toutes les opérations Doctrine en attente (INSERT, UPDATE, DELETE).' },
  { course: 'symfony', module: 'doctrine', q: 'remove()', a: 'Marque un objet Doctrine pour suppression (à suivre de flush()).' },
  { course: 'symfony', module: 'doctrine', q: 'make:entity', a: 'Commande qui génère une entité Doctrine avec ses getters et setters.' },
  { course: 'symfony', module: 'doctrine', q: 'make:migration', a: 'Génère un fichier de migration SQL à partir des changements d\'entités.' },
  { course: 'symfony', module: 'doctrine', q: 'doctrine:migrations:migrate', a: 'Applique le script de migration généré en base de données.' },
  { course: 'symfony', module: 'doctrine', q: 'OneToMany / ManyToOne', a: 'Relation 1 pour N — ex: un Auteur a plusieurs Livres.' },
  { course: 'symfony', module: 'doctrine', q: 'ManyToMany', a: 'Relation N pour N — Doctrine crée automatiquement une table intermédiaire.' },
  { course: 'symfony', module: 'doctrine', q: 'findBy() / findOneBy()', a: 'Méthodes du Repository pour récupérer des entités selon un critère.' },
  { course: 'symfony', module: 'doctrine', q: '#[MapEntity]', a: 'Auto-fetch d\'une entité depuis l\'URL avec 404 automatique si non trouvée.' },

  // ── security ──
  { course: 'symfony', module: 'security', q: 'UserInterface', a: 'Interface PHP obligatoire pour l\'entité User dans Symfony Security.' },
  { course: 'symfony', module: 'security', q: 'getUserIdentifier()', a: 'Méthode de UserInterface qui retourne l\'identifiant unique (email/username).' },
  { course: 'symfony', module: 'security', q: 'getRoles()', a: 'Méthode de UserInterface — doit toujours inclure ROLE_USER par défaut.' },
  { course: 'symfony', module: 'security', q: 'make:user', a: 'Commande qui génère l\'entité User avec UserInterface configurée.' },
  { course: 'symfony', module: 'security', q: 'firewalls', a: 'Zones de sécurité de l\'application définies dans security.yaml.' },
  { course: 'symfony', module: 'security', q: 'access_control', a: 'Section de security.yaml qui restreint l\'accès par URL et rôle.' },
  { course: 'symfony', module: 'security', q: 'denyAccessUnlessGranted()', a: 'Lève une exception 403 si l\'utilisateur n\'a pas le rôle requis.' },
  { course: 'symfony', module: 'security', q: '#[IsGranted]', a: 'Attribut PHP qui restreint l\'accès à une méthode/classe selon un rôle.' },
  { course: 'symfony', module: 'security', q: 'Passport', a: 'Objet qui encapsule les credentials (UserBadge + PasswordCredentials).' },
  { course: 'symfony', module: 'security', q: 'Authenticator', a: 'Classe qui gère le processus complet d\'authentification (supports, authenticate...).' },

  // ═══════════════════════════════════════════════
  //  SPRING BOOT
  // ═══════════════════════════════════════════════

  // ── oop ──
  { course: 'spring', module: 'oop', q: 'Héritage (IS-A)', a: 'Relation UML A extends B — Dog IS-A Animal.' },
  { course: 'spring', module: 'oop', q: 'Agrégation ◇', a: 'Lien faible — B peut exister sans A (ex: Team a des Players).' },
  { course: 'spring', module: 'oop', q: 'Composition ◆', a: 'Lien fort — B ne peut PAS exister sans A (ex: House a des Rooms).' },
  { course: 'spring', module: 'oop', q: 'Couplage fort', a: 'Dépendance directe via "new" — changer B force des modifications dans A.' },
  { course: 'spring', module: 'oop', q: 'Couplage faible', a: 'A dépend d\'une interface (contrat) plutôt que d\'une implémentation concrète.' },
  { course: 'spring', module: 'oop', q: 'Architecture 3-Tiers', a: 'Controller (expose) → Service (logique métier) → Repository (BDD).' },
  { course: 'spring', module: 'oop', q: '@Controller / @RestController', a: 'Couche qui expose les fonctionnalités HTTP, sans logique métier.' },
  { course: 'spring', module: 'oop', q: '@Service', a: 'Couche qui contient la logique métier, délègue au Repository.' },
  { course: 'spring', module: 'oop', q: '@Repository', a: 'Couche d\'accès à la BDD, sans logique métier.' },

  // ── beans ──
  { course: 'spring', module: 'beans', q: 'Bean Spring', a: 'Objet dont le cycle de vie (création, injection, destruction) est géré par Spring.' },
  { course: 'spring', module: 'beans', q: '@Component', a: 'Déclare une classe comme bean Spring. Ne peut pas être sur une interface.' },
  { course: 'spring', module: 'beans', q: '@Autowired', a: 'Demande à Spring d\'injecter un bean. Optionnel sur constructeur unique depuis Spring 4.3.' },
  { course: 'spring', module: 'beans', q: '@Qualifier', a: 'Spécifie quel bean injecter quand plusieurs candidats : @Qualifier("nomBean").' },
  { course: 'spring', module: 'beans', q: '@Primary', a: 'Marque un bean comme prioritaire quand plusieurs candidats existent.' },
  { course: 'spring', module: 'beans', q: 'Scope Singleton', a: 'Une seule instance partagée dans tout le contexte (défaut). Problème si état.' },
  { course: 'spring', module: 'beans', q: 'Scope Prototype', a: 'Nouvelle instance créée à chaque injection. @Scope("prototype").' },
  { course: 'spring', module: 'beans', q: '@PostConstruct', a: 'Code exécuté après création du bean et injection. Annotation JAKARTA, pas Spring.' },
  { course: 'spring', module: 'beans', q: '@PreDestroy', a: 'Code exécuté avant destruction du bean. NON garanti en cas de crash.' },
  { course: 'spring', module: 'beans', q: '@Value("${key}")', a: 'Injecte la valeur de la propriété "key" depuis application.properties.' },
  { course: 'spring', module: 'beans', q: '@ConfigurationProperties', a: 'Groupe un ensemble de propriétés app.* dans une classe avec getters/setters.' },
  { course: 'spring', module: 'beans', q: '@Profile("dev")', a: 'Active un bean seulement quand le profil "dev" est actif.' },
  { course: 'spring', module: 'beans', q: 'NoUniqueBeanDefinitionException', a: 'Exception levée quand plusieurs beans candidats existent pour une interface.' },
  { course: 'spring', module: 'beans', q: 'ApplicationContext', a: 'Conteneur Spring qui gère le cycle de vie de tous les beans de l\'application.' },

  // ── jdbc ──
  { course: 'spring', module: 'jdbc', q: 'JdbcTemplate', a: 'Classe Spring qui simplifie JDBC : gère connexion, ressources et exceptions.' },
  { course: 'spring', module: 'jdbc', q: 'RowMapper', a: 'Interface pour transformer une ligne ResultSet SQL en objet Java.' },
  { course: 'spring', module: 'jdbc', q: 'queryForObject()', a: 'Méthode JdbcTemplate qui retourne un seul résultat (scalaire ou objet).' },
  { course: 'spring', module: 'jdbc', q: 'query()', a: 'Méthode JdbcTemplate qui retourne une liste d\'objets.' },
  { course: 'spring', module: 'jdbc', q: 'update()', a: 'Méthode JdbcTemplate pour INSERT, UPDATE, DELETE.' },
  { course: 'spring', module: 'jdbc', q: 'BeanPropertyRowMapper', a: 'RowMapper automatique si les noms de colonnes correspondent aux attributs.' },
  { course: 'spring', module: 'jdbc', q: 'JpaRepository', a: 'Interface Spring Data JPA qui fournit save(), findAll(), deleteById() gratuitement.' },
  { course: 'spring', module: 'jdbc', q: 'Requête par convention de nommage', a: 'Spring Data génère la requête automatiquement depuis le nom de méthode (findByLastName).' },
  { course: 'spring', module: 'jdbc', q: '@Query', a: 'Annotation pour écrire une requête JPQL personnalisée dans un Repository.' },
  { course: 'spring', module: 'jdbc', q: 'DataAccessException', a: 'Exception Spring unchecked qui remplace les SQLException checked du JDBC brut.' },

  // ── rest ──
  { course: 'spring', module: 'rest', q: '@RestController', a: '= @Controller + @ResponseBody. Sérialise automatiquement les retours en JSON.' },
  { course: 'spring', module: 'rest', q: 'ResponseEntity', a: 'Contrôle total sur status HTTP, headers et body de la réponse Spring.' },
  { course: 'spring', module: 'rest', q: '@RestControllerAdvice', a: 'Handler global d\'exceptions pour toute l\'API REST Spring Boot.' },
  { course: 'spring', module: 'rest', q: '@PathVariable', a: 'Capture un segment d\'URL — ex: /users/{id}.' },
  { course: 'spring', module: 'rest', q: '@RequestParam', a: 'Capture un paramètre de query string — ex: /users?name=xxx.' },
  { course: 'spring', module: 'rest', q: '@RequestBody', a: 'Désérialise le corps JSON de la requête en objet Java.' },
  { course: 'spring', module: 'rest', q: '201 Created', a: 'Code HTTP retourné après une création réussie (POST).' },
  { course: 'spring', module: 'rest', q: '204 No Content', a: 'Code HTTP retourné après un succès sans corps de réponse (DELETE).' },
  { course: 'spring', module: 'rest', q: 'Idempotence', a: 'Même résultat final si l\'opération est répétée. GET/PUT/DELETE le sont, POST ne l\'est pas.' },
  { course: 'spring', module: 'rest', q: '@ExceptionHandler', a: 'Annotation qui associe une méthode à un type d\'exception spécifique à gérer.' },

  // ═══════════════════════════════════════════════
  //  .NET / ASP.NET CORE
  // ═══════════════════════════════════════════════

  // ── dotnet-intro ──
  { course: 'dotnet', module: 'dotnet-intro', q: '.NET vs C#', a: '.NET est un framework de développement (environnement). C# est un langage de programmation.' },
  { course: 'dotnet', module: 'dotnet-intro', q: 'CLR', a: 'Common Language Runtime — exécute le code .NET (gère mémoire, sécurité, JIT).' },
  { course: 'dotnet', module: 'dotnet-intro', q: 'JIT', a: 'Just-In-Time compiler — transforme le Code IL en code natif exécutable.' },
  { course: 'dotnet', module: 'dotnet-intro', q: 'Code IL', a: 'Intermediate Language — résultat de la compilation C#, avant exécution par le JIT.' },
  { course: 'dotnet', module: 'dotnet-intro', q: '.NET Core', a: 'Génération cross-platform de .NET (Windows, Linux, macOS).' },
  { course: 'dotnet', module: 'dotnet-intro', q: '.NET 5+', a: 'Fusion de .NET Framework et .NET Core en une plateforme unifiée.' },
  { course: 'dotnet', module: 'dotnet-intro', q: '.NET Standard', a: 'Norme de compatibilité (pas un framework à exécuter) entre .NET Framework et Core.' },

  // ── aspcore-mvc ──
  { course: 'dotnet', module: 'aspcore-mvc', q: 'Razor', a: 'Moteur de template ASP.NET Core, extension .cshtml, symbole @ pour le C#.' },
  { course: 'dotnet', module: 'aspcore-mvc', q: 'Middleware', a: 'Composant du pipeline HTTP qui s\'exécute avant/après chaque requête.' },
  { course: 'dotnet', module: 'aspcore-mvc', q: 'Program.cs', a: 'Fichier où se configurent les middlewares et le pipeline ASP.NET Core.' },
  { course: 'dotnet', module: 'aspcore-mvc', q: 'ModelState.IsValid', a: 'Vérifie la validité des données soumises dans un formulaire.' },
  { course: 'dotnet', module: 'aspcore-mvc', q: 'ViewBag / ViewData', a: 'Passent des données du Controller vers la View, durée = 1 requête HTTP.' },
  { course: 'dotnet', module: 'aspcore-mvc', q: 'TempData', a: 'Persiste les données sur 2 requêtes HTTP — utile après un redirect.' },
  { course: 'dotnet', module: 'aspcore-mvc', q: 'RedirectToAction', a: 'Évite la resoumission du formulaire (PRG Pattern : Post-Redirect-Get).' },
  { course: 'dotnet', module: 'aspcore-mvc', q: 'ViewModel', a: 'Classe dédiée à la validation et au transfert des données d\'un formulaire.' },
  { course: 'dotnet', module: 'aspcore-mvc', q: 'UseStaticFiles', a: 'Middleware qui sert les fichiers CSS/JS/images statiques.' },

  // ── state-management ──
  { course: 'dotnet', module: 'state-management', q: 'Session', a: 'Stockage côté SERVEUR, accepte string et int par défaut (sérialiser pour objets).' },
  { course: 'dotnet', module: 'state-management', q: 'Cookie', a: 'Stockage côté CLIENT, limité à 4KB par cookie.' },
  { course: 'dotnet', module: 'state-management', q: 'JWT', a: 'Token crypté côté client, Stateless — idéal pour microservices.' },
  { course: 'dotnet', module: 'state-management', q: 'HttpContext.Session.SetString()', a: 'Stocke une valeur string dans la session ASP.NET Core.' },
  { course: 'dotnet', module: 'state-management', q: 'Response.Cookies.Append()', a: 'Crée un cookie côté serveur, envoyé au client.' },
  { course: 'dotnet', module: 'state-management', q: 'Request.Cookies[]', a: 'Lit la valeur d\'un cookie envoyé par le client.' },
  { course: 'dotnet', module: 'state-management', q: 'IdleTimeout', a: 'Durée d\'expiration de session, de type Sliding (se renouvelle à chaque requête).' },
  { course: 'dotnet', module: 'state-management', q: 'AddSession / UseSession', a: 'AddSession = ajoute le SERVICE, UseSession = active le MIDDLEWARE.' },

  // ── filters ──
  { course: 'dotnet', module: 'filters', q: 'Filtre ASP.NET Core', a: 'Composant qui exécute du code avant/après une action — centralise le code répétitif.' },
  { course: 'dotnet', module: 'filters', q: 'OnActionExecuting', a: 'Méthode de filtre exécutée AVANT l\'action du contrôleur.' },
  { course: 'dotnet', module: 'filters', q: 'OnActionExecuted', a: 'Méthode de filtre exécutée APRÈS l\'action du contrôleur.' },
  { course: 'dotnet', module: 'filters', q: 'ActionFilterAttribute', a: 'Classe de base pour créer un filtre personnalisé en ASP.NET Core.' },

  // ── ado-net ──
  { course: 'dotnet', module: 'ado-net', q: 'SqlConnection', a: 'Ouvre le canal de communication vers la base de données.' },
  { course: 'dotnet', module: 'ado-net', q: 'SqlCommand', a: 'Transporte la requête SQL à exécuter.' },
  { course: 'dotnet', module: 'ado-net', q: 'ExecuteReader()', a: 'Exécute un SELECT, retourne un SqlDataReader (plusieurs lignes).' },
  { course: 'dotnet', module: 'ado-net', q: 'ExecuteNonQuery()', a: 'Exécute INSERT/UPDATE/DELETE, retourne le nombre de lignes affectées.' },
  { course: 'dotnet', module: 'ado-net', q: 'ExecuteScalar()', a: 'Retourne une seule valeur (COUNT, MAX...), plus performant que ExecuteReader.' },
  { course: 'dotnet', module: 'ado-net', q: 'ADO.NET est un ORM ?', a: 'Non — c\'est une API bas niveau, l\'ORM .NET c\'est Entity Framework Core.' },
  { course: 'dotnet', module: 'ado-net', q: 'using (IDisposable)', a: 'Libère automatiquement les ressources (connexion SQL) à la fin du bloc.' },

  // ── web-api ──
  { course: 'dotnet', module: 'web-api', q: 'ControllerBase', a: 'Classe de base des contrôleurs API — sans les éléments MVC (View, ViewBag).' },
  { course: 'dotnet', module: 'web-api', q: '[ApiController]', a: 'Annotation qui permet à OpenAPI/Swagger de détecter le contrôleur.' },
  { course: 'dotnet', module: 'web-api', q: 'API RESTful', a: 'API qui respecte ENTIÈREMENT les 6 contraintes REST (Stateless, Cacheable...).' },
  { course: 'dotnet', module: 'web-api', q: 'CORS', a: 'Cross-Origin Resource Sharing — restriction du navigateur sur les requêtes cross-origin.' },
  { course: 'dotnet', module: 'web-api', q: 'DTO', a: 'Data Transfer Object — objet simplifié de transfert sans champs internes sensibles.' },
  { course: 'dotnet', module: 'web-api', q: 'GET (méthode HTTP)', a: 'Sûre ET idempotente — lecture seule.' },
  { course: 'dotnet', module: 'web-api', q: 'PATCH (méthode HTTP)', a: 'Modification PARTIELLE d\'une ressource.' },
  { course: 'dotnet', module: 'web-api', q: '405 Method Not Allowed', a: 'Code HTTP retourné quand le verbe HTTP utilisé n\'est pas supporté par la route.' },

  // ── jwt-microservices ──
  { course: 'dotnet', module: 'jwt-microservices', q: 'JWT — structure', a: '3 parties séparées par un point : Header.Payload.Signature.' },
  { course: 'dotnet', module: 'jwt-microservices', q: 'Payload (JWT)', a: 'Contient les claims : sub (id user), exp (expiration), iat (émission), role...' },
  { course: 'dotnet', module: 'jwt-microservices', q: 'Signature (JWT)', a: 'Garantit l\'intégrité — chiffrement de Header+Payload avec une clé secrète.' },
  { course: 'dotnet', module: 'jwt-microservices', q: 'YARP', a: 'Yet Another Reverse Proxy — bibliothèque Microsoft, API Gateway programmable en C#.' },
  { course: 'dotnet', module: 'jwt-microservices', q: 'exp (claim JWT)', a: 'Date d\'expiration du token — obligatoire en pratique.' },

  // ── entity-framework ──
  { course: 'dotnet', module: 'entity-framework', q: 'EF Core', a: 'ORM (Object Relational Mapping) pour .NET — objets C# ↔ tables BDD.' },
  { course: 'dotnet', module: 'entity-framework', q: 'Code First', a: 'Approche EFC où les classes C# génèrent la BDD (recommandé par Microsoft).' },
  { course: 'dotnet', module: 'entity-framework', q: 'Database First', a: 'Approche EFC où la BDD existante génère les classes C#.' },
  { course: 'dotnet', module: 'entity-framework', q: '[Table("Nom")]', a: 'Annotation qui change le nom de la table en base de données.' },
  { course: 'dotnet', module: 'entity-framework', q: '[NotMapped]', a: 'Propriété non créée en base de données.' },
  { course: 'dotnet', module: 'entity-framework', q: '[ConcurrencyCheck]', a: 'Gère la concurrence sur des propriétés SPÉCIFIQUES.' },
  { course: 'dotnet', module: 'entity-framework', q: '[Timestamp]', a: 'Gère la concurrence sur TOUTE la ligne via un champ rowversion.' },
  { course: 'dotnet', module: 'entity-framework', q: 'Add-Migration', a: 'Génère le script SQL de migration depuis les changements d\'entités.' },
  { course: 'dotnet', module: 'entity-framework', q: 'Update-Database', a: 'Applique la migration générée en base de données.' },
  { course: 'dotnet', module: 'entity-framework', q: 'ICollection<T>', a: 'Propriété de navigation pour une relation One-To-Many ou Many-To-Many.' },

  // ── ef-notions ──
  { course: 'dotnet', module: 'ef-notions', q: 'Délégué (delegate)', a: 'Type qui représente un pointeur sur une méthode avec une signature précise.' },
  { course: 'dotnet', module: 'ef-notions', q: 'Action<T>', a: 'Délégué pré-déclaré qui ne retourne pas de valeur (procédure).' },
  { course: 'dotnet', module: 'ef-notions', q: 'Func<T, TResult>', a: 'Délégué pré-déclaré qui retourne une valeur typée.' },
  { course: 'dotnet', module: 'ef-notions', q: 'Predicate<T>', a: 'Délégué pré-déclaré qui retourne un bool (condition).' },
  { course: 'dotnet', module: 'ef-notions', q: 'yield return', a: 'Retourne les éléments un par un, sans créer de liste intermédiaire en mémoire.' },
  { course: 'dotnet', module: 'ef-notions', q: 'Méthode d\'extension', a: 'Méthode statique avec "this" devant le premier paramètre — étend une classe sans la modifier.' },
  { course: 'dotnet', module: 'ef-notions', q: 'async / await', a: 'Permettent l\'exécution de code sans bloquer le thread principal.' },
  { course: 'dotnet', module: 'ef-notions', q: 'Expression lambda =>', a: 'Se lit "goes to" — gauche = paramètres, droite = expression.' },

  // ── linq-entities ──
  { course: 'dotnet', module: 'linq-entities', q: 'LINQ to Entities', a: 'Requêtes C# converties automatiquement en SQL par EFC (recommandé).' },
  { course: 'dotnet', module: 'linq-entities', q: 'FirstOrDefault()', a: 'Retourne null si la liste est vide (pas d\'exception, contrairement à First()).' },
  { course: 'dotnet', module: 'linq-entities', q: 'Skip(N).Take(M)', a: 'Pagination LINQ — ignore les N premiers, prend les M suivants.' },
  { course: 'dotnet', module: 'linq-entities', q: 'Include() / ThenInclude()', a: 'Charge les relations liées (et imbriquées) d\'une entité.' },
  { course: 'dotnet', module: 'linq-entities', q: 'AsNoTracking()', a: 'Lecture optimisée sans suivi des modifications — plus performant.' },
  { course: 'dotnet', module: 'linq-entities', q: 'Contains()', a: 'Équivalent du LIKE SQL en LINQ.' },
  { course: 'dotnet', module: 'linq-entities', q: 'OrderBy() / ThenBy()', a: 'Tri principal puis tri secondaire en LINQ.' },
  { course: 'dotnet', module: 'linq-entities', q: 'Any()', a: 'Vérifie qu\'au moins un élément respecte une condition.' },

  // ── reporting ──
  { course: 'dotnet', module: 'reporting', q: 'RDLC', a: 'Report Definition Language Client Side — solution de reporting Microsoft gratuite.' },
  { course: 'dotnet', module: 'reporting', q: 'LocalReport', a: 'Classe qui charge et exécute un fichier .rdlc pour générer un rapport.' },
  { course: 'dotnet', module: 'reporting', q: 'AddDataSource()', a: 'Méthode qui passe les données au rapport RDLC.' },
  { course: 'dotnet', module: 'reporting', q: 'Execute(RenderType.Pdf)', a: 'Génère le rapport au format PDF.' },
  { course: 'dotnet', module: 'reporting', q: 'ViewModel (Reporting)', a: 'Classe avec attributs primitifs uniquement, nécessaire car RDLC ne gère pas les objets imbriqués.' },
]