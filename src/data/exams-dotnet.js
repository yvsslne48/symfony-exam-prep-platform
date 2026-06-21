// ══════════════════════════════════════════════════════════════
//  .NET / ASP.NET CORE — EXAMS DATA
//  Professeur : MANI Mohammed Adil — EHEI Oujda GI4
// ══════════════════════════════════════════════════════════════

// ── MODE QCM — Toutes les questions (cours + ex-PDF + ex-Examen Réel) ──
export const DOTNET_QCM = [
  // ===== .NET & C# =====
  { section: '.NET & C#', q: '.NET est :', opts: ['Un langage de programmation', 'Un framework de développement', 'Un système d\'exploitation', 'Un compilateur'], ans: 1 },
  { section: '.NET & C#', q: 'Quel composant .NET exécute le code IL ?', opts: ['JIT', 'CLR', 'SDK', 'NuGet'], ans: 1 },
  { section: '.NET & C#', q: 'Le code C# est d\'abord transformé en :', opts: ['Code natif', 'Code IL', 'Code assembleur', 'ByteCode Java'], ans: 1 },
  { section: '.NET & C#', q: 'Quel est le rôle exact du JIT ?', opts: ['Compiler le C# en IL', 'Transformer le Code IL en code natif exécutable', 'Gérer la mémoire', 'Compiler le HTML'], ans: 1 },
  { section: '.NET & C#', q: '.NET Core est :', opts: ['Windows uniquement', 'Cross-platform', 'Linux uniquement', 'Une norme'], ans: 1 },
  { section: '.NET & C#', q: 'À partir de quelle version .NET Framework et Core ont fusionné ?', opts: ['.NET 3', '.NET 4', '.NET 5', '.NET 6'], ans: 2 },
  { section: '.NET & C#', q: '.NET Standard est :', opts: ['Un framework à exécuter', 'Un système d\'exploitation', 'Une norme de compatibilité', 'Un langage'], ans: 2 },
  { section: '.NET & C#', q: 'Pourquoi utiliser .NET Standard pour une bibliothèque ?', opts: ['Pour la rendre plus rapide', 'Pour qu\'elle fonctionne sur .NET Framework ET .NET Core', 'Pour la sécuriser', 'Ce n\'est pas utile'], ans: 1 },

  // ===== ASP.NET Core MVC =====
  { section: 'ASP.NET Core MVC', q: 'L\'extension des vues Razor est :', opts: ['.razor', '.html', '.cshtml', '.aspx'], ans: 2 },
  { section: 'ASP.NET Core MVC', q: 'Le symbole pour écrire du code C# dans Razor est :', opts: ['#', '$', '%', '@'], ans: 3 },
  { section: 'ASP.NET Core MVC', q: 'Les middlewares se configurent dans :', opts: ['appsettings.json', 'Web.config', 'Program.cs', 'Startup.cs'], ans: 2 },
  { section: 'ASP.NET Core MVC', q: 'ModelState.IsValid permet de :', opts: ['Ouvrir la BDD', 'Vérifier la validité des données du formulaire', 'Créer un modèle', 'Configurer les routes'], ans: 1 },
  { section: 'ASP.NET Core MVC', q: 'Combien d\'actions minimum pour gérer un formulaire MVC ?', opts: ['1', '2', '3', '4'], ans: 1 },
  { section: 'ASP.NET Core MVC', q: 'RedirectToAction évite :', opts: ['Les erreurs 404', 'La resoumission du formulaire (PRG)', 'La connexion BDD', 'Les erreurs de routage'], ans: 1 },
  { section: 'ASP.NET Core MVC', q: 'L\'URL par défaut pour HomeController → Index est :', opts: ['/Index', '/HomeIndex', '/Home', '/Default'], ans: 2 },
  { section: 'ASP.NET Core MVC', q: 'Dans /Home/Privacy, "Privacy" est :', opts: ['Le contrôleur', 'L\'action', 'Le paramètre', 'La vue uniquement'], ans: 1 },
  { section: 'ASP.NET Core MVC', q: 'La validation principale d\'un formulaire passe par :', opts: ['ViewBag', 'ViewModel', 'TempData', 'Session'], ans: 1 },
  { section: 'ASP.NET Core MVC', q: 'Quel est l\'ordre correct du Pipeline ASP.NET Core ?', opts: ['Routing → HttpsRedirection → Session', 'HttpsRedirection → StaticFiles → Routing → Session', 'Session → Routing → StaticFiles', 'StaticFiles → Session → HttpsRedirection'], ans: 1 },
  { section: 'ASP.NET Core MVC', q: 'UseSession doit être placé :', opts: ['Avant UseRouting', 'Après UseRouting', 'Avant UseStaticFiles', 'À la fin du pipeline uniquement'], ans: 1 },
  { section: 'ASP.NET Core MVC', q: 'Différence entre AddSession et UseSession ?', opts: ['Aucune différence', 'AddSession=service, UseSession=middleware', 'AddSession=middleware, UseSession=service', 'UseSession est obsolète'], ans: 1 },

  // ===== State Management =====
  { section: 'State Management', q: 'La session accepte par défaut :', opts: ['Tous les types', 'Objets seulement', 'String et int', 'JSON uniquement'], ans: 2 },
  { section: 'State Management', q: 'Un cookie est stocké :', opts: ['Côté serveur', 'Côté client (navigateur)', 'En BDD', 'Dans la session'], ans: 1 },
  { section: 'State Management', q: 'Taille maximale d\'un cookie :', opts: ['1KB', '4KB', '10KB', 'Illimité'], ans: 1 },
  { section: 'State Management', q: 'JWT est idéal pour les microservices car il est :', opts: ['Rapide', 'Stateless', 'Petit', 'Gratuit'], ans: 1 },
  { section: 'State Management', q: 'Comment lire un cookie en ASP.NET Core ?', opts: ['Session.GetCookie()', 'Response.Cookies[]', 'Request.Cookies["nom"]', 'Cookie.Read()'], ans: 2 },
  { section: 'State Management', q: 'Comment créer un cookie en ASP.NET Core ?', opts: ['Session.SetCookie()', 'Cookie.Create()', 'Response.Cookies.Append()', 'Request.Cookies.Add()'], ans: 2 },
  { section: 'State Management', q: 'Pourquoi sérialiser un objet avant de le stocker en session ?', opts: ['Pour le crypter', 'La session n\'accepte pas les objets directement', 'Pour le compresser', 'Ce n\'est pas nécessaire'], ans: 1 },
  { section: 'State Management', q: 'Quel type d\'expiration est IdleTimeout ?', opts: ['Absolute', 'Sliding (se renouvelle)', 'Fixed', 'Permanent'], ans: 1 },
  { section: 'State Management', q: 'Le package JSON officiel depuis .NET Core 3 est :', opts: ['Newtonsoft.Json', 'System.Text.Json', 'Json.NET', 'FastJson'], ans: 1 },

  // ===== Filtres =====
  { section: 'Filtres', q: 'L\'objectif principal des filtres est :', opts: ['Améliorer les performances', 'Centralisation du code', 'Gérer la BDD', 'Configurer les routes'], ans: 1 },
  { section: 'Filtres', q: 'OnActionExecuting s\'exécute :', opts: ['Après l\'action', 'Avant l\'action', 'Pendant l\'action', 'Jamais'], ans: 1 },
  { section: 'Filtres', q: 'Un filtre peut s\'appliquer sur :', opts: ['Un service uniquement', 'Un contrôleur ou une action', 'Une vue uniquement', 'Program.cs'], ans: 1 },
  { section: 'Filtres', q: 'OnActionExecuted s\'exécute :', opts: ['Avant l\'action', 'Après l\'action', 'Jamais', 'Au démarrage de l\'app'], ans: 1 },

  // ===== ADO.NET =====
  { section: 'ADO.NET', q: 'ExecuteNonQuery est utilisé pour :', opts: ['SELECT', 'INSERT / UPDATE / DELETE', 'COUNT uniquement', 'Connexion BDD'], ans: 1 },
  { section: 'ADO.NET', q: 'ExecuteReader retourne :', opts: ['int', 'string', 'SqlDataReader', 'bool'], ans: 2 },
  { section: 'ADO.NET', q: 'ExecuteScalar retourne :', opts: ['Toutes les lignes', 'Une seule valeur scalaire', 'SqlDataReader', 'void'], ans: 1 },
  { section: 'ADO.NET', q: 'ADO.NET est un ORM ?', opts: ['Oui', 'Non, c\'est une API bas niveau'], ans: 1 },
  { section: 'ADO.NET', q: 'Pourquoi utiliser using avec SqlConnection ?', opts: ['C\'est obligatoire', 'Libération automatique des ressources', 'Pour la sécurité', 'Pour les performances réseau'], ans: 1 },
  { section: 'ADO.NET', q: 'Une connexion SQL ouverte trop longtemps cause :', opts: ['Aucun problème', 'Saturation des connexions', 'Une amélioration des perfs', 'Une erreur de syntaxe'], ans: 1 },
  { section: 'ADO.NET', q: 'Pourquoi ExecuteScalar() est plus performant qu\'ExecuteReader() pour un COUNT ?', opts: ['Il utilise le cache', 'Une seule valeur retournée, pas de flux complet', 'Il évite la connexion', 'Aucune différence'], ans: 1 },

  // ===== Web API REST =====
  { section: 'Web API REST', q: 'Le contrôleur API hérite de :', opts: ['Controller', 'ControllerBase', 'ApiController', 'BaseController'], ans: 1 },
  { section: 'Web API REST', q: 'Pourquoi ControllerBase plutôt que Controller pour une API ?', opts: ['Plus rapide', 'Fournit les fonctionnalités API sans les éléments MVC inutiles (View, ViewBag)', 'Obligatoire', 'Aucune différence'], ans: 1 },
  { section: 'Web API REST', q: 'Code HTTP pour création réussie :', opts: ['200', '201', '204', '400'], ans: 1 },
  { section: 'Web API REST', q: 'Code HTTP pour mise à jour réussie sans retour :', opts: ['200', '201', '204', '400'], ans: 2 },
  { section: 'Web API REST', q: 'Code HTTP "Method Not Allowed" :', opts: ['403', '404', '405', '409'], ans: 2 },
  { section: 'Web API REST', q: 'Méthode HTTP sûre ET idempotente :', opts: ['POST', 'PUT', 'GET', 'PATCH'], ans: 2 },
  { section: 'Web API REST', q: 'POST n\'est pas idempotente car :', opts: ['Elle est lente', 'Chaque appel peut créer une nouvelle ressource', 'Elle ne retourne rien', 'Elle utilise JSON'], ans: 1 },
  { section: 'Web API REST', q: 'PATCH sert à :', opts: ['Supprimer une ressource', 'Créer une ressource', 'Modifier partiellement une ressource', 'Lire une ressource'], ans: 2 },
  { section: 'Web API REST', q: 'CORS est causé par :', opts: ['Un bug du serveur', 'Un blocage navigateur cross-origin', 'Une erreur de certificat', 'Un problème de port'], ans: 1 },
  { section: 'Web API REST', q: 'Pourquoi POSTMAN fonctionne malgré les erreurs CORS dans le navigateur ?', opts: ['POSTMAN désactive CORS côté serveur', 'POSTMAN n\'applique pas les règles CORS (pas un navigateur)', 'POSTMAN utilise HTTPS', 'Ce n\'est pas vrai'], ans: 1 },
  { section: 'Web API REST', q: 'AllowAnyOrigin() en production est :', opts: ['Recommandé', 'Dangereux et déconseillé', 'Obligatoire', 'Sans effet'], ans: 1 },
  { section: 'Web API REST', q: 'DTO signifie :', opts: ['Data Type Object', 'Data Transfer Object', 'Database Table Object', 'Dynamic Type Object'], ans: 1 },
  { section: 'Web API REST', q: 'Le rôle du Mapper est de :', opts: ['Créer la BDD', 'Convertir Entity ↔ DTO', 'Gérer les routes', 'Sécuriser l\'API'], ans: 1 },
  { section: 'Web API REST', q: 'Quelle contrainte REST impose l\'absence de session côté serveur ?', opts: ['Cacheable', 'Stateless', 'Client-Serveur', 'Layered System'], ans: 1 },

  // ===== Entity Framework Core & LINQ =====
  { section: 'EFC & LINQ', q: 'EF Core est :', opts: ['Un SGBD', 'Un ORM pour .NET', 'Un framework frontend', 'Un protocole réseau'], ans: 1 },
  { section: 'EFC & LINQ', q: 'Quelle approche génère la BDD depuis les classes C# ?', opts: ['Database First', 'Model First', 'Code First', 'Schema First'], ans: 2 },
  { section: 'EFC & LINQ', q: 'Quelle annotation change le nom de la table en BDD ?', opts: ['[Column]', '[Table]', '[Key]', '[Schema]'], ans: 1 },
  { section: 'EFC & LINQ', q: 'Quelle annotation gère la concurrence sur toute la ligne ?', opts: ['[ConcurrencyCheck]', '[Timestamp]', '[Required]', '[Key]'], ans: 1 },
  { section: 'EFC & LINQ', q: '[ConcurrencyCheck] s\'applique sur :', opts: ['Toute la table', 'Des propriétés spécifiques', 'La clé primaire uniquement', 'Rien, ça n\'existe pas'], ans: 1 },
  { section: 'EFC & LINQ', q: 'FirstOrDefault() vs First() :', opts: ['Identiques', 'FirstOrDefault retourne null si vide (pas d\'exception)', 'First est plus rapide', 'FirstOrDefault retourne une liste'], ans: 1 },
  { section: 'EFC & LINQ', q: 'Skip(5).Take(5) retourne :', opts: ['Les 5 premiers', 'Les 5 éléments à partir du 6ème', 'Les 10 premiers', 'Les 5 derniers'], ans: 1 },
  { section: 'EFC & LINQ', q: 'AsNoTracking() est utile pour :', opts: ['Mettre à jour', 'Performances en lecture seule', 'Supprimer', 'Gérer les transactions'], ans: 1 },
  { section: 'EFC & LINQ', q: 'Include() sert à :', opts: ['Filtrer les données', 'Charger les relations liées', 'Paginer', 'Compter les éléments'], ans: 1 },
  { section: 'EFC & LINQ', q: 'ThenInclude() permet de :', opts: ['Inclure une relation de premier niveau', 'Charger une relation imbriquée (Include dans Include)', 'Exclure une relation', 'Trier les relations'], ans: 1 },
  { section: 'EFC & LINQ', q: 'ICollection<T> dans une entité EFC représente :', opts: ['Une clé étrangère simple', 'Une relation One-To-Many ou Many-To-Many', 'Une chaîne de caractères', 'Un index'], ans: 1 },
  { section: 'EFC & LINQ', q: 'Un Auteur a plusieurs Livres. Quel type de relation ?', opts: ['OneToOne', 'ManyToMany', 'OneToMany', 'Aucune annotation nécessaire'], ans: 2 },
  { section: 'EFC & LINQ', q: 'Une relation ManyToMany porteuse (avec attributs supplémentaires) nécessite :', opts: ['Rien de spécial', 'Une table/classe intermédiaire avec FK vers les deux entités', 'Un seul DbSet', 'D\'éviter EFC'], ans: 1 },

  // ===== Délégués, yield & async =====
  { section: 'Délégués & Notions', q: 'Un délégué C# est :', opts: ['Une interface', 'Un pointeur sur fonction', 'Une classe abstraite', 'Un attribut'], ans: 1 },
  { section: 'Délégués & Notions', q: 'Action est un délégué qui :', opts: ['Retourne une valeur', 'Ne retourne pas de valeur', 'Retourne bool', 'Retourne une liste'], ans: 1 },
  { section: 'Délégués & Notions', q: 'Func est un délégué qui :', opts: ['Ne retourne rien', 'Retourne toujours bool', 'Retourne une valeur typée', 'Exécute une action'], ans: 2 },
  { section: 'Délégués & Notions', q: 'Predicate est un délégué qui retourne :', opts: ['int', 'string', 'void', 'bool'], ans: 3 },
  { section: 'Délégués & Notions', q: 'L\'opérateur => dans une lambda se lit :', opts: ['equals', 'returns', 'goes to', 'maps to'], ans: 2 },
  { section: 'Délégués & Notions', q: 'yield sert à :', opts: ['Bloquer l\'exécution', 'Retourner une liste complète', 'Retourner les éléments un par un', 'Trier une liste'], ans: 2 },
  { section: 'Délégués & Notions', q: 'Pour créer une méthode d\'extension, le premier paramètre a :', opts: ['ref', 'out', 'this', 'static'], ans: 2 },
  { section: 'Délégués & Notions', q: 'Les méthodes d\'extension peuvent accéder aux membres privés de la classe étendue ?', opts: ['Oui, toujours', 'Non, seulement les membres publics', 'Seulement en mode debug', 'Oui mais en lecture seule'], ans: 1 },
  { section: 'Délégués & Notions', q: 'async/await sert à :', opts: ['Créer des threads manuellement', 'Exécuter du code sans bloquer le thread principal', 'Synchroniser des listes', 'Gérer les exceptions'], ans: 1 },

  // ===== JWT & Microservices =====
  { section: 'JWT & Microservices', q: 'JWT est composé de :', opts: ['1 partie', '2 parties', '3 parties', '4 parties'], ans: 2 },
  { section: 'JWT & Microservices', q: 'Le claim "exp" dans JWT représente :', opts: ['L\'émetteur', 'L\'expiration', 'L\'identifiant', 'L\'audience'], ans: 1 },
  { section: 'JWT & Microservices', q: 'La signature JWT garantit :', opts: ['La rapidité', 'L\'intégrité et l\'authenticité', 'La compression', 'Le chiffrement total du payload'], ans: 1 },
  { section: 'JWT & Microservices', q: 'YARP est :', opts: ['Un ORM', 'Une bibliothèque Reverse Proxy Microsoft', 'Un framework frontend', 'Un SGBD'], ans: 1 },
  { section: 'JWT & Microservices', q: 'Différence entre YARP et Nginx ?', opts: ['Aucune', 'YARP est programmable en C#, Nginx utilise des fichiers config', 'YARP est payant', 'Nginx est plus récent'], ans: 1 },

  // ===== Reporting =====
  { section: 'Reporting', q: 'RDLC signifie :', opts: ['Report Data Language Core', 'Report Definition Language Client Side', 'Rapid Data Layout Creator', 'Report Design Layout Control'], ans: 1 },
  { section: 'Reporting', q: 'Combien de packages NuGet pour RDLC dans ASP Core ?', opts: ['1', '2', '3', '4'], ans: 2 },
  { section: 'Reporting', q: 'Pourquoi un ViewModel pour rapport composé ?', opts: ['Performance', 'RDLC ne peut pas afficher des objets imbriqués', 'Sécurité', 'Obligatoire dans EFC'], ans: 1 },
  { section: 'Reporting', q: 'Quelle méthode passe les données au rapport RDLC ?', opts: ['SetData()', 'LoadData()', 'AddDataSource()', 'BindData()'], ans: 2 },
  { section: 'Reporting', q: 'Quelle méthode génère le fichier PDF du rapport ?', opts: ['Generate()', 'Render()', 'Export()', 'Execute(RenderType.Pdf)'], ans: 3 },

  // ===== Exercice type examen (converti en QCM) =====
  { section: 'Exercice — EFC & Diagramme UML', q: 'Pour transformer un diagramme UML en code EFC, la longueur maximale d\'un champ se définit avec :', opts: ['[MaxSize(50)]', '[StringLength(50)]', '[Length(50)]', '[Size(50)]'], ans: 1 },
  { section: 'Exercice — EFC & Diagramme UML', q: 'Pour gérer la concurrence sur un seul champ (ex: Montant) d\'une classe Consultation, on utilise :', opts: ['[Timestamp]', '[ConcurrencyCheck]', '[Required]', '[NotMapped]'], ans: 1 },
  { section: 'Exercice — EFC & Diagramme UML', q: 'Une relation Many-To-Many "porteuse" (avec attributs comme DateConsultation, Montant) entre Medecin et Patient nécessite :', opts: ['Une seule clé étrangère', 'Une classe intermédiaire (Consultation) avec 2 clés étrangères', 'Pas de classe intermédiaire, EFC gère automatiquement', 'Un ICollection simple'], ans: 1 },
  { section: 'Exercice — EFC & Diagramme UML', q: 'La classe XxxDbContext doit contenir :', opts: ['Une méthode par entité', 'Un DbSet<T> par entité', 'Un constructeur vide obligatoire', 'Aucune propriété'], ans: 1 },
  { section: 'Exercice — LINQ to Entities', q: 'Pour trier par prénom de manière ascendante en LINQ :', opts: ['.SortBy(m => m.Prenom)', '.OrderBy(m => m.Prenom)', '.ThenBy(m => m.Prenom)', '.Ascending(m => m.Prenom)'], ans: 1 },
  { section: 'Exercice — LINQ to Entities', q: 'Pour filtrer les médecins dont le nom commence par "B" :', opts: ['.Where(m => m.Nom == "B")', '.Where(m => m.Nom.StartsWith("B"))', '.Where(m => m.Nom.Contains("B"))', '.Filter(m => m.Nom[0] == "B")'], ans: 1 },
  { section: 'Exercice — LINQ to Entities', q: 'Pour obtenir le médecin avec le plus de consultations :', opts: ['.OrderBy(m => m.Consultations.Count).First()', '.OrderByDescending(m => m.Consultations.Count).FirstOrDefault()', '.Max(m => m.Consultations)', '.Where(m => m.Consultations.Count == Max)'], ans: 1 },
  { section: 'Exercice — LINQ to Entities', q: 'Pour vérifier qu\'un patient a AU MOINS une consultation respectant une condition, on utilise :', opts: ['.All()', '.Any()', '.Contains()', '.Exists()'], ans: 1 },
  { section: 'Exercice — Delegate & Yield', q: 'Pour qu\'une méthode d\'extension accepte un critère de recherche dynamique, on utilise un paramètre de type :', opts: ['string', 'Predicate<T>', 'int', 'bool[]'], ans: 1 },
  { section: 'Exercice — Delegate & Yield', q: 'Dans une méthode d\'extension utilisant yield, le type de retour doit être :', opts: ['List<T>', 'IEnumerable<T>', 'Array<T>', 'void'], ans: 1 },
  { section: 'Exercice — Web API', q: 'Pour un contrôleur Web API avec GET et PUT sans repository, le DbContext est injecté :', opts: ['Via une variable statique', 'Via le constructeur du contrôleur (injection de dépendances)', 'Via App.config', 'Il ne peut pas être injecté'], ans: 1 },
  { section: 'Exercice — Web API', q: 'Une action PUT qui réussit sans retourner de contenu doit répondre :', opts: ['Ok()', 'NoContent()', 'Created()', 'Accepted()'], ans: 1 },
]

export const DOTNET_PLUS = []

// ── EXAMEN RÉEL — Image scannée ─────────────────────────────────
// Affiché comme une fiche cliquable (comme les A4), pas en questions texte,
// car contient un diagramme UML impossible à retranscrire fidèlement.
export const DOTNET_REAL_IMAGE = '/exams/dotnet-examen-reel.png'