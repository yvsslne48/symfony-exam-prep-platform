export const dotnet = {
  id: 'dotnet',
  title: '.NET / ASP.NET Core',
  subtitle: 'C# & ASP.NET Core MVC',
  version: '.NET 9',
  color: 'purple',
  accent: '#7c3aed',
  icon: '🔷',
  description: 'Maîtrisez ASP.NET Core MVC, Web API, Entity Framework Core et les Microservices — EHEI GI4.',
  semesters: ['S1', 'S2'],
  modules: [
    // ═══════════════════════════════════════════════
    //  SEMESTRE 1
    // ═══════════════════════════════════════════════
    {
      id: 'dotnet-intro',
      semester: 'S1',
      title: 'Nouveautés .NET et C#',
      icon: '⚡',
      color: 'purple',
      lessons: [
        {
          title: '.NET vs C# — Différences fondamentales',
          body: `<p><strong>.NET</strong> est un framework de développement — un environnement complet dans lequel on crée des applications. <strong>C#</strong> est un langage de programmation avec lequel on développe. Dans un seul projet .NET, on peut mélanger C#, VB, F# et même Java grâce au <strong>CLR (Common Language Runtime)</strong>.</p>`,
          code: `// .NET = Framework (l'environnement)
// C# = Langage (l'outil)

// Compilation C# → Code IL (Intermediate Language)
// CLR (Common Language Runtime) → JIT → Code Natif exécutable

// Plan de formation complet :
// 1. C# et .NET (nouveautés)
// 2. ASP Core MVC
// 3. ADO.NET — Mode connecté
// 4. Entity Framework Core
// 5. LINQ to Entities
// 6. Web RESTful API
// 7. Microservices (JWT + API Gateway)`,
          language: 'csharp',
          tips: [
            '.NET = framework complet, C# = langage de programmation',
            'CLR = Common Language Runtime (exécution du code)',
            'Le code C# est d\'abord transformé en code IL, puis en code natif par le JIT',
            '.NET 5+ fusionne .NET Framework et .NET Core (cross-platform)',
          ]
        },
        {
          title: '.NET Framework vs .NET Core vs .NET',
          body: `<p>Microsoft a fait évoluer sa plateforme en 3 générations majeures. Comprendre ces différences est essentiel pour les QCMs.</p>`,
          code: `// .NET Framework (ancien)
// → Windows uniquement
// → Versions 1.0 à 4.8

// .NET Core (intermédiaire)
// → Cross-platform (Windows, Linux, macOS)
// → Versions 1.0 à 3.1

// .NET 5+ (actuel — fusion)
// → Unified platform — remplace les deux
// → Cross-platform
// → Versions 5, 6, 7, 8, 9...

// .NET Standard
// → PAS un framework à exécuter
// → Une NORME de compatibilité
// → Garantit qu'une bibliothèque fonctionne sur .NET Framework ET .NET Core

// En résumé pour les QCMs :
// .NET Core est : Cross-platform
// À partir de : .NET 5 → fusion des deux plateformes
// .NET Standard est : Une norme de compatibilité`,
          language: 'csharp',
          tips: [
            '.NET Core = cross-platform (Linux, macOS, Windows)',
            '.NET 5+ = fusion de .NET Framework et .NET Core',
            '.NET Standard = norme de compatibilité (pas un framework à exécuter)',
            'Pour nouveaux projets : toujours utiliser .NET 8 ou 9',
          ]
        }
      ],
      quiz: [
        { q: '.NET est :', opts: ['Un langage de programmation', 'Un framework de développement', 'Un système d\'exploitation', 'Un compilateur'], ans: 1 },
        { q: 'Quel composant permet l\'exécution du code .NET ?', opts: ['JIT', 'CLR', 'IL', 'NuGet'], ans: 1 },
        { q: 'Le code C# est d\'abord transformé en :', opts: ['Code natif', 'Code IL', 'Code assembleur', 'Code Java'], ans: 1 },
        { q: '.NET Core est :', opts: ['Windows uniquement', 'Cross-platform', 'Linux uniquement', 'Une norme'], ans: 1 },
        { q: 'À partir de quelle version Microsoft a fusionné .NET Framework et .NET Core ?', opts: ['.NET 3', '.NET 4', '.NET 5', '.NET 6'], ans: 2 },
        { q: '.NET Standard est :', opts: ['Un framework à exécuter', 'Un système d\'exploitation', 'Une norme de compatibilité', 'Un langage'], ans: 2 },
      ],
      exam: [
        { type: 'open', q: 'Quelle est la différence entre .NET et C# ?', ans: '.NET est un framework de développement (environnement complet). C# est un langage de programmation. On programme AVEC C#, on crée des applications DANS .NET.', hint: '.NET = environnement, C# = langage' },
        { type: 'dropdown', q: '.NET Core est cross-platform (fonctionne sur Windows, Linux et macOS)', opts: ['Vrai', 'Faux'], ans: 0, hint: 'Vrai. .NET Core a été conçu cross-platform contrairement à .NET Framework.' },
        { type: 'open', q: 'Quel est le rôle du JIT dans .NET ?', ans: 'Le JIT (Just-In-Time compiler) transforme le Code IL (Intermediate Language) en code natif exécutable par la machine, au moment de l\'exécution.', hint: 'JIT = transforme Code IL → Code natif' },
        { type: 'open', q: 'Qu\'est-ce que .NET Standard ?', ans: '.NET Standard est une norme de compatibilité. Elle garantit qu\'une bibliothèque développée pour .NET Standard peut fonctionner à la fois sur .NET Framework et .NET Core, sans modification.', hint: 'Norme de compatibilité — pas un framework à exécuter' },
      ]
    },
    {
      id: 'aspcore-mvc',
      semester: 'S1',
      title: 'ASP.NET Core MVC',
      icon: '🏗️',
      color: 'blue',
      lessons: [
        {
          title: 'Architecture MVC et Razor',
          body: `<p>ASP.NET Core MVC sépare l'application en 3 groupes : <strong>Model</strong> (données), <strong>View</strong> (présentation), <strong>Controller</strong> (logique). <strong>Razor</strong> est le moteur de template d'ASP.NET Core — l'équivalent de Twig pour Symfony.</p>`,
          code: `// Razor = Moteur de Template ASP.NET Core
// Extension : .cshtml
// Symbole pour du code C# : @

// Exemple de vue Razor (Views/Home/Index.cshtml)
@model List<Produit>

<h1>Liste des produits</h1>
@foreach (var p in Model) {
    <div>@p.Nom — @p.Prix €</div>
}

// Comparaison des moteurs de template :
// ASP MVC Core → Razor (.cshtml)   → @
// Symfony      → Twig (.twig)      → {{ }}
// Spring       → Thymeleaf
// Laravel      → Blade

// Routage ASP.NET Core (convention par défaut)
// /Home → HomeController → Index()
// /Home/Privacy → HomeController → Privacy()
// /Products/Details/5 → ProductsController → Details(5)`,
          language: 'csharp',
          tips: [
            'Razor utilise @ pour écrire du code C# dans les vues',
            'Extension des vues Razor : .cshtml',
            'View = présentation, Controller = logique, Model = données',
            'Route par défaut : /Contrôleur/Action/Id',
          ]
        },
        {
          title: 'Middleware et Pipeline',
          body: `<p>Un <strong>middleware</strong> est un composant qui s'exécute avant ou après chaque requête HTTP. Ils forment un pipeline (tuyau) dans lequel chaque requête transite. L'ordre est crucial.</p>`,
          code: `// Program.cs — configuration du pipeline
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllersWithViews();
builder.Services.AddSession(); // Ajoute le SERVICE session

var app = builder.Build();

// ORDRE DU PIPELINE (à mémoriser pour l'examen !)
app.UseHttpsRedirection();   // 1. Redirection HTTPS
app.UseStaticFiles();         // 2. Fichiers statiques (CSS, JS, images)
app.UseRouting();             // 3. Routage
app.UseSession();             // 4. Middleware session (APRÈS UseRouting)
app.UseAuthorization();       // 5. Autorisation
app.MapControllerRoute(       // 6. Routes MVC
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");
app.Run();

// Différence AddSession / UseSession :
// AddSession → ajoute le SERVICE (dans builder.Services)
// UseSession → active le MIDDLEWARE (dans app pipeline)`,
          language: 'csharp',
          tips: [
            'Middleware = composant du pipeline HTTP',
            'UseStaticFiles = sert les fichiers CSS/JS/images',
            'UseSession = active le middleware de session',
            'L\'ordre est important : certains dépendent des précédents',
            'AddSession dans Services, UseSession dans le pipeline',
          ]
        },
        {
          title: 'ModelState et ViewBag/ViewData',
          body: `<p><strong>ModelState</strong> contient l'état de validation du formulaire. <strong>ViewBag</strong> et <strong>ViewData</strong> permettent de passer des données du Controller vers la View pour une seule requête.</p>`,
          code: `// Controller — envoi de données vers la View
public IActionResult Index() {
    ViewBag.Titre = "Liste des produits";      // Dynamic — 1 requête
    ViewData["Sous-titre"] = "Tous les produits"; // Dictionary — 1 requête
    return View();
}

// Validation de formulaire avec ModelState
[HttpPost]
public IActionResult Create(ProduitVM model) {
    if (!ModelState.IsValid) {
        // Formulaire invalide → réafficher avec erreurs
        return View(model);
    }
    // Formulaire valide → traitement
    _db.Produits.Add(new Produit { Nom = model.Nom, Prix = model.Prix });
    _db.SaveChanges();
    return RedirectToAction("Index"); // PRG Pattern — évite la resoumission
}

// ViewModel pour la validation
public class ProduitVM {
    [Required(ErrorMessage = "Nom obligatoire")]
    [StringLength(100)]
    public string Nom { get; set; }

    [Range(0, 99999)]
    public decimal Prix { get; set; }
}`,
          language: 'csharp',
          tips: [
            'ModelState.IsValid = vérifier la validité des données du formulaire',
            'ViewBag = ViewData dynamique, durée = 1 requête HTTP',
            'TempData = persiste 2 requêtes HTTP (utile après redirect)',
            'RedirectToAction évite la resoumission (PRG Pattern)',
            'ViewModel = classe dédiée à la validation du formulaire',
          ]
        }
      ],
      quiz: [
        { q: 'Quel composant ASP.NET Core gère la logique métier ?', opts: ['Model', 'View', 'Controller', 'Razor'], ans: 2 },
        { q: 'Les fichiers Razor ont l\'extension :', opts: ['.razor', '.html', '.cshtml', '.aspx'], ans: 2 },
        { q: 'Le symbole pour écrire du code C# dans Razor est :', opts: ['#', '$', '%', '@'], ans: 3 },
        { q: 'Où se configure les middlewares en ASP.NET Core ?', opts: ['appsettings.json', 'Startup.cs', 'Program.cs', 'Web.config'], ans: 2 },
        { q: 'ModelState.IsValid permet de :', opts: ['Ouvrir la BDD', 'Vérifier la validité des données du formulaire', 'Créer un modèle', 'Configurer les routes'], ans: 1 },
        { q: 'La validation principale d\'un formulaire ASP.NET Core passe par :', opts: ['ViewBag', 'ViewModel', 'TempData', 'Session'], ans: 1 },
        { q: 'Quelle URL appelle HomeController → Index par défaut ?', opts: ['/Index', '/HomeIndex', '/Home', '/Default'], ans: 2 },
        { q: 'Différence AddSession / UseSession ?', opts: ['Aucune différence', 'AddSession=service, UseSession=middleware', 'AddSession=middleware, UseSession=service', 'UseSession est déprécié'], ans: 1 },
      ],
      exam: [
        { type: 'open', q: 'Qu\'est-ce que Razor dans ASP.NET Core ?', ans: 'Razor est le moteur de template (d\'affichage) d\'ASP.NET Core. Il permet de mélanger du code C# avec du HTML dans les vues (.cshtml). Le symbole @ est utilisé pour insérer du code C# dans le HTML.', hint: 'Moteur de template, extension .cshtml, symbole @' },
        { type: 'open', q: 'Qu\'est-ce qu\'un middleware ?', ans: 'Un middleware est un composant du pipeline HTTP d\'ASP.NET Core. Il s\'exécute avant ou après chaque requête. Les middlewares sont chainés dans Program.cs et l\'ordre est important car certains dépendent des précédents.', hint: 'Composant du pipeline HTTP, configuré dans Program.cs' },
        { type: 'open', q: 'Pourquoi l\'ordre des middlewares est-il important ?', ans: 'Certains middlewares dépendent d\'autres middlewares qui doivent avoir été exécutés avant eux. Par exemple, UseSession doit être placé après UseRouting pour fonctionner correctement.', hint: 'Certains dépendent des précédents.' },
        { type: 'open', q: 'Combien d\'actions minimum pour gérer un formulaire MVC ? Expliquer.', ans: '2 actions minimum :\n1. Action GET → afficher le formulaire vide\n2. Action POST → récupérer et traiter les données soumises\nLa même route, avec [HttpGet] et [HttpPost] sur deux méthodes séparées.', hint: 'GET = afficher, POST = traiter' },
        { type: 'dropdown', q: 'RedirectToAction évite la resoumission du formulaire (PRG Pattern)', opts: ['Vrai', 'Faux'], ans: 0, hint: 'Vrai. Post-Redirect-Get évite que l\'utilisateur resoumette le formulaire en actualisant la page.' },
      ]
    },
    {
      id: 'state-management',
      semester: 'S1',
      title: 'State Management',
      icon: '💾',
      color: 'teal',
      lessons: [
        {
          title: 'Pourquoi gérer l\'état ?',
          body: `<p>HTTP est <strong>sans état (stateless)</strong> : chaque requête est indépendante. Sans state management, l'application ne se souviendrait de rien entre les requêtes (panier vide à chaque clic, déconnexion à chaque page).</p>`,
          code: `// Tableau des méthodes par durée de vie :
/*
┌─────────────────────────────────────────────────┬──────────────────────────┐
│ Durée de vie                                    │ Méthodes                 │
├─────────────────────────────────────────────────┼──────────────────────────┤
│ 1 requête HTTP                                  │ ViewBag, ViewData        │
│ 2 requêtes HTTP                                 │ TempData                 │
│ Plusieurs requêtes (sans partage entre users)   │ Session, Cookies, JWT    │
│ Plusieurs requêtes (avec partage entre users)   │ Text File, Database,Cache│
└─────────────────────────────────────────────────┴──────────────────────────┘
*/

// Méthodes dépréciées (à connaitre pour QCM) :
// QueryString & Hidden Fields

// Cas d'utilisation courants :
// - Panier d'achat → Session ou Cookie
// - Authentification → Session, Cookie ou JWT
// - Formulaires multi-étapes → TempData ou Session
// - Préférences utilisateur → Cookie (persistant)`,
          language: 'csharp',
          tips: [
            'HTTP est stateless → chaque requête est indépendante',
            'ViewBag/ViewData = 1 requête, TempData = 2 requêtes',
            'Session = côté serveur, Cookie = côté client (navigateur)',
            'JWT = token crypté, idéal pour microservices (Stateless)',
          ]
        },
        {
          title: 'Session, Cookies et JWT',
          body: `<p>Trois méthodes principales pour persister des données entre requêtes, chacune avec ses avantages et inconvénients.</p>`,
          code: `// ===== SESSION =====
// Stockage : Côté SERVEUR
// Par défaut accepte : string et int seulement
// Pour stocker un objet → sérialiser en JSON d'abord

// Dans Program.cs :
builder.Services.AddSession(options => {
    options.IdleTimeout = TimeSpan.FromMinutes(30); // Sliding = se renouvelle
});
app.UseSession(); // Middleware session

// Dans le contrôleur :
HttpContext.Session.SetString("Nom", "Yassine");
HttpContext.Session.SetInt32("Age", 22);
string nom = HttpContext.Session.GetString("Nom");

// ===== COOKIES =====
// Stockage : Côté CLIENT (navigateur)
// Taille limitée : 4KB par cookie (≈ 2000 caractères UTF-8)

// Créer un cookie :
Response.Cookies.Append("Prenom", "Yassine", new CookieOptions {
    Expires = DateTime.Now.AddDays(7)
});
// Lire un cookie :
string prenom = Request.Cookies["Prenom"];

// ===== JWT =====
// Stockage : Côté client MAIS crypté et signé
// Avantage : Stateless, idéal pour microservices
// Crypté avec une clé secrète → intégrité garantie
// Même si on voit le contenu, on ne peut pas le modifier`,
          language: 'csharp',
          tips: [
            'Session = Stateful, côté serveur, types primitifs (string/int)',
            'Cookie = Stateful, côté client, limité à 4KB',
            'JWT = Stateless, crypté, idéal microservices',
            'IdleTimeout = Sliding (se renouvelle à chaque requête)',
            'Pourquoi sérialiser avant session ? La session n\'accepte pas les objets',
          ]
        }
      ],
      quiz: [
        { q: 'Quel type de données accepte la session par défaut ?', opts: ['Tous les types', 'Objets seulement', 'String et int', 'JSON uniquement'], ans: 2 },
        { q: 'Une session est stockée :', opts: ['Côté client', 'Côté serveur', 'Dans un cookie', 'Dans JWT'], ans: 1 },
        { q: 'Comment créer un cookie en ASP.NET Core ?', opts: ['Session.SetCookie()', 'Cookie.Create()', 'Response.Cookies.Append()', 'Request.Cookies.Add()'], ans: 2 },
        { q: 'Comment lire un cookie ?', opts: ['Session.GetCookie()', 'Response.Cookies[]', 'Request.Cookies[]', 'Cookie.Get()'], ans: 2 },
        { q: 'Quelle est la taille maximale d\'un cookie ?', opts: ['1KB', '4KB', '10KB', 'Illimité'], ans: 1 },
        { q: 'Quel type d\'expiration est IdleTimeout ?', opts: ['Absolute', 'Sliding', 'Fixed', 'Permanent'], ans: 1 },
      ],
      exam: [
        { type: 'open', q: 'Pourquoi utiliser JWT plutôt que Session dans une architecture microservices ?', ans: 'JWT est Stateless : chaque microservice peut vérifier le token lui-même sans contacter un serveur central de session. Les sessions sont liées au serveur qui les a créées, ce qui pose problème quand plusieurs microservices doivent vérifier l\'identité. JWT est crypté et signé → l\'utilisateur ne peut pas modifier son contenu.', hint: 'Stateless + crypté + compatible microservices' },
        { type: 'open', q: 'Pourquoi sérialiser un objet avant de le stocker en session ?', ans: 'La session ASP.NET Core n\'accepte par défaut que les types primitifs (string et int). Pour stocker un objet complexe, il faut le convertir en JSON (string) avec JsonSerializer.Serialize(), puis le désérialiser à la lecture.', hint: 'La session n\'accepte pas les objets directement' },
        { type: 'dropdown', q: 'AddSession ajoute le service de session, UseSession active le middleware de session', opts: ['Vrai', 'Faux'], ans: 0, hint: 'Vrai. Les deux sont nécessaires : AddSession dans Services, UseSession dans le pipeline.' },
        { type: 'checkbox', q: 'Sélectionner les méthodes de State Management pour plusieurs requêtes sans partage entre utilisateurs', opts: ['ViewBag', 'Session', 'TempData', 'Cookies', 'JWT', 'Database'], ans: [1, 3, 4], hint: 'Session, Cookies, JWT — durée multiple sans partage entre utilisateurs' },
      ]
    },
    {
      id: 'filters',
      semester: 'S1',
      title: 'Les Filtres ASP.NET Core',
      icon: '🔍',
      color: 'orange',
      lessons: [
        {
          title: 'Problématique et solution',
          body: `<p>Les filtres permettent d'exécuter du code <strong>avant ou après</strong> des actions, sans répéter le même code dans chaque méthode. Objectif : <strong>centralisation du code</strong>.</p>`,
          code: `// PROBLÈME : Vérification d'authentification répétée partout
public class TodoController : Controller {
    public IActionResult Index() {
        if (HttpContext.Session.GetString("user") == null)
            return RedirectToAction("Login", "Auth");
        // code...
    }
    public IActionResult Create() {
        if (HttpContext.Session.GetString("user") == null) // répété !
            return RedirectToAction("Login", "Auth");
        // code...
    }
    // ... répété dans 6 méthodes !
}

// SOLUTION : Filtre personnalisé
public class AuthFilter : ActionFilterAttribute {
    public override void OnActionExecuting(ActionExecutingContext context) {
        var session = context.HttpContext.Session.GetString("user");
        if (session == null) {
            context.Result = new RedirectToActionResult("Login", "Auth", null);
        }
        // Si session existe → l'action s'exécute normalement
    }
}

// Application du filtre (une seule ligne !)
[AuthFilter]
public class TodoController : Controller {
    // Plus besoin de vérification dans chaque méthode
    public IActionResult Index() { return View(); }
    public IActionResult Create() { return View(); }
}`,
          language: 'csharp',
          tips: [
            'Objectif filtres : centralisation du code répétitif',
            'OnActionExecuting : s\'exécute AVANT l\'action',
            'OnActionExecuted : s\'exécute APRÈS l\'action',
            'Un filtre peut être appliqué sur un contrôleur OU une action',
            'Cas d\'usage : authentification, cache, logging, autorisation',
          ]
        }
      ],
      quiz: [
        { q: 'Quel est l\'objectif principal des filtres ?', opts: ['Améliorer les performances', 'Centralisation du code', 'Gérer la BDD', 'Configurer les routes'], ans: 1 },
        { q: 'Un filtre peut être appliqué sur :', opts: ['Un service uniquement', 'Un contrôleur ou une action', 'Une vue uniquement', 'Program.cs uniquement'], ans: 1 },
        { q: 'Quand s\'exécute OnActionExecuting ?', opts: ['Après l\'action', 'Avant et après', 'Avant l\'action', 'Jamais'], ans: 2 },
        { q: 'À quoi sert OnActionExecuting ?', opts: ['Retourner une vue', 'Vérifier ou bloquer l\'accès avant l\'action', 'Créer la BDD', 'Gérer les sessions'], ans: 1 },
      ],
      exam: [
        { type: 'open', q: 'Quelle est la problématique résolue par les filtres dans ASP.NET Core ?', ans: 'Sans filtres, le code commun (vérification d\'authentification, logging...) se répète dans chaque action du contrôleur. Si on veut modifier ce code, on doit le faire partout. Les filtres centralisent ce code en un seul endroit, appliqué automatiquement à toutes les actions concernées.', hint: 'Centraliser le code répétitif — éviter les copier-coller' },
        { type: 'open', q: 'Citer 3 cas d\'utilisation des filtres ASP.NET Core', ans: '1. Authentification — vérifier si l\'utilisateur est connecté\n2. Autorisation — vérifier les rôles\n3. Journalisation (Logging) — traçabilité\n4. Mise en cache\n5. Configuration partagée (ex: thème)', hint: 'Authentification, autorisation, logging, cache, configuration' },
        { type: 'dropdown', q: 'OnActionExecuted s\'exécute avant l\'action du contrôleur', opts: ['Vrai', 'Faux'], ans: 1, hint: 'Faux. OnActionExecuted s\'exécute APRÈS l\'action. OnActionExecuting s\'exécute AVANT.' },
      ]
    },
    {
      id: 'ado-net',
      semester: 'S1',
      title: 'ADO.NET',
      icon: '🗄️',
      color: 'red',
      lessons: [
        {
          title: 'Classes ADO.NET essentielles',
          body: `<p>ADO.NET est la bibliothèque de bas niveau pour communiquer avec les SGBDR. Ce n'est <strong>pas un ORM</strong> — c'est une API bas niveau qui nécessite d'écrire du SQL manuellement.</p>`,
          code: `// Package à installer via NuGet :
// dotnet add package Microsoft.Data.SqlClient

using Microsoft.Data.SqlClient;

string connStr = "Server=.;Database=MaBD;Trusted_Connection=true;";

// SqlConnection → ouvre le canal de communication
using (SqlConnection cn = new SqlConnection(connStr)) {
    cn.Open();

    // SqlCommand → transporte la requête SQL
    SqlCommand cmd = new SqlCommand("SELECT * FROM Produits", cn);

    // ===== LECTURE (SELECT non-scalaire) =====
    // ExecuteReader → retourne SqlDataReader
    SqlDataReader rd = cmd.ExecuteReader();
    while (rd.Read()) {
        Console.WriteLine(rd["Nom"].ToString());
    }
    rd.Close();

    // ===== INSERT / UPDATE / DELETE =====
    // ExecuteNonQuery → retourne nombre de lignes affectées
    SqlCommand insert = new SqlCommand(
        "INSERT INTO Produits(Nom, Prix) VALUES(@nom, @prix)", cn);
    insert.Parameters.AddWithValue("@nom", "iPhone 16");
    insert.Parameters.AddWithValue("@prix", 1099.99);
    int rowsAffected = insert.ExecuteNonQuery();

    // ===== SELECT scalaire (COUNT, MAX, etc.) =====
    // ExecuteScalar → retourne UNE seule valeur
    SqlCommand count = new SqlCommand("SELECT COUNT(*) FROM Produits", cn);
    int total = (int)count.ExecuteScalar();
}
// using → libère automatiquement la connexion (IDisposable)`,
          language: 'csharp',
          tips: [
            'SqlConnection → ouvre le canal vers la BDD',
            'SqlCommand → transporte la requête SQL',
            'ExecuteReader → SELECT (plusieurs lignes) → SqlDataReader',
            'ExecuteNonQuery → INSERT/UPDATE/DELETE → nombre de lignes',
            'ExecuteScalar → COUNT/MAX/MIN → une seule valeur',
            'using → libère automatiquement les ressources (évite les fuites)',
          ]
        }
      ],
      quiz: [
        { q: 'ADO.NET est utilisé pour :', opts: ['Créer des vues Razor', 'Manipuler des bases de données', 'Gérer les sessions', 'Configurer les routes'], ans: 1 },
        { q: 'SqlCommand sert à :', opts: ['Ouvrir la connexion', 'Transporter la requête SQL', 'Lire les résultats', 'Fermer la BDD'], ans: 1 },
        { q: 'ExecuteNonQuery est utilisé pour :', opts: ['SELECT', 'INSERT / UPDATE / DELETE', 'COUNT uniquement', 'Connexion BDD'], ans: 1 },
        { q: 'ExecuteReader retourne :', opts: ['int', 'string', 'SqlDataReader', 'bool'], ans: 2 },
        { q: 'ExecuteScalar retourne :', opts: ['Toutes les lignes', 'Une seule valeur scalaire', 'SqlDataReader', 'void'], ans: 1 },
        { q: 'Pourquoi utiliser using avec SqlConnection ?', opts: ['C\'est obligatoire', 'Libération automatique des ressources', 'Pour la sécurité', 'Pour les performances'], ans: 1 },
        { q: 'ADO.NET est un ORM ?', opts: ['Oui', 'Non, c\'est une API bas niveau'], ans: 1 },
      ],
      exam: [
        { type: 'open', q: 'Quelle est la différence entre ExecuteReader, ExecuteNonQuery et ExecuteScalar ?', ans: 'ExecuteReader → SELECT qui retourne plusieurs lignes (SqlDataReader, lecture ligne par ligne).\nExecuteNonQuery → INSERT/UPDATE/DELETE, retourne le nombre de lignes affectées.\nExecuteScalar → retourne une seule valeur scalaire (COUNT, MAX, SUM...), plus performant qu\'ExecuteReader pour ce cas.', hint: 'Reader=SELECT multi, NonQuery=INSERT/UPDATE/DELETE, Scalar=1 valeur' },
        { type: 'dropdown', q: 'ADO.NET est un ORM (Object Relational Mapping)', opts: ['Vrai', 'Faux'], ans: 1, hint: 'Faux. ADO.NET est une API bas niveau. L\'ORM dans .NET c\'est Entity Framework Core.' },
        { type: 'open', q: 'Pourquoi éviter de laisser une connexion SQL ouverte sans using ?', ans: 'Sans using (ou sans appeler Close()/Dispose()), la connexion reste ouverte et consomme des ressources. Cela peut saturer le pool de connexions du serveur SQL, bloquer d\'autres requêtes et provoquer des erreurs de timeout.', hint: 'Saturation des connexions + blocage des ressources' },
        { type: 'open', q: 'Pourquoi ExecuteScalar() est plus performant qu\'ExecuteReader() pour un COUNT ?', ans: 'ExecuteScalar() retourne directement une seule valeur sans créer un DataReader, sans itérer les résultats. Pour COUNT(*), une seule valeur est attendue — ExecuteReader() créerait un flux de données inutilement plus lourd.', hint: 'Une seule valeur retournée — pas de flux de données complet' },
      ]
    },
    // ═══════════════════════════════════════════════
    //  SEMESTRE 2
    // ═══════════════════════════════════════════════
    {
      id: 'web-api',
      semester: 'S2',
      title: 'Web API REST',
      icon: '🌐',
      color: 'violet',
      lessons: [
        {
          title: 'API, REST et RESTful',
          body: `<p>Une <strong>Web API</strong> fournit des données en JSON/XML au lieu d'afficher des pages HTML. Les concepts REST, RESTful et API simple ont des différences importantes pour les QCMs.</p>`,
          code: `// Différences à connaitre :
// API simple → interface de communication (pas forcément REST)
// API REST → respecte les normes REST, mais pas totalement
// API RESTful → respecte TOTALEMENT les principes REST

// Les 6 contraintes architecturales REST :
// 1. Client-Serveur : séparation FRONT / BACK
// 2. Stateless : pas de session côté serveur
// 3. Cacheable : les réponses peuvent être mises en cache
// 4. Layered System : système en couches
// 5. Interface Uniforme : route unique par ressource
// 6. Code à la demande (optionnel)

// ASP.NET Core API Controller
[ApiController]          // Annotation pour OpenAPI/Swagger
[Route("api/[controller]")]
public class ProduitsController : ControllerBase // PAS Controller !
{
    [HttpGet]
    public IActionResult GetAll() {
        var produits = _db.Produits.ToList();
        if (!produits.Any()) return NotFound();   // 404
        return Ok(produits);                       // 200
    }

    [HttpGet("{id}")]
    public IActionResult GetById(int id) {
        var p = _db.Produits.Find(id);
        if (p == null) return NotFound();          // 404
        return Ok(p);                              // 200
    }

    [HttpPost]
    public IActionResult Add(ProduitDTO dto) {
        if (!ModelState.IsValid) return BadRequest(ModelState); // 400
        // ajouter...
        return CreatedAtAction(nameof(GetById), new { id = p.Id }, p); // 201
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id) {
        // supprimer...
        return NoContent(); // 204
    }
}`,
          language: 'csharp',
          tips: [
            'ControllerBase (pas Controller) pour les APIs — pas de vues',
            '[ApiController] → OpenAPI/Swagger peut détecter le contrôleur',
            'Ok()=200, NotFound()=404, BadRequest()=400, NoContent()=204',
            'MapControllers() pour API, MapControllerRoute() pour MVC',
            'CORS : Cross-Origin Resource Sharing — blocage navigateur',
          ]
        },
        {
          title: 'Codes HTTP, DTO et CORS',
          body: `<p>Les codes HTTP, les DTO (Data Transfer Object) et la gestion de CORS sont des points fréquents aux examens.</p>`,
          code: `// CODES HTTP à connaitre :
// 200 OK          → succès GET
// 201 Created     → création réussie (POST)
// 204 No Content  → mise à jour/suppression sans retour
// 400 Bad Request → données invalides
// 401 Unauthorized → non authentifié
// 403 Forbidden   → authentifié mais pas autorisé
// 404 Not Found   → ressource introuvable
// 405 Method Not Allowed → verbe HTTP incorrect
// 406 Not Acceptable     → format de réponse non accepté
// 409 Conflict    → conflit (doublon...)

// Méthodes HTTP et idempotence :
// GET    → sûre ET idempotente (lecture seule)
// PUT    → idempotente mais non sûre (remplace)
// DELETE → idempotente mais non sûre (même résultat si répété)
// POST   → ni sûre ni idempotente (crée à chaque fois)
// PATCH  → modification PARTIELLE d'une ressource

// DTO — Data Transfer Object
public class ProduitDTO {
    public string Nom { get; set; }
    public decimal Prix { get; set; }
    // Pas de Id, ni de champs internes
}
// Le Mapper convertit : Entity ↔ DTO

// CORS — Cross-Origin Resource Sharing
// Problème : navigateur bloque les requêtes cross-origin
// Pourquoi POSTMAN n'a pas ce problème : il n'applique pas CORS
// AllowAnyOrigin() en production est DANGEREUX

// Configuration CORS dans Program.cs :
builder.Services.AddCors(options => {
    options.AddPolicy("MonPolicy", policy => {
        policy.WithOrigins("https://monfront.com")
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});
app.UseCors("MonPolicy");`,
          language: 'csharp',
          tips: [
            'GET = sûre + idempotente, PUT/DELETE = idempotentes, POST = ni l\'un ni l\'autre',
            'PATCH = modification partielle d\'une ressource',
            'DTO = objet de transfert sans les champs internes sensibles',
            'CORS = navigateur bloque, POSTMAN ne bloque pas',
            'AllowAnyOrigin() en production = dangereux',
          ]
        }
      ],
      quiz: [
        { q: 'Quelle contrainte REST impose l\'absence de session ?', opts: ['Client-Serveur', 'Stateless', 'Cacheable', 'Interface Uniforme'], ans: 1 },
        { q: 'Quelle méthode HTTP est sûre ET idempotente ?', opts: ['POST', 'PUT', 'GET', 'PATCH'], ans: 2 },
        { q: 'Quel code HTTP correspond à une mise à jour réussie sans retour ?', opts: ['200', '201', '204', '400'], ans: 2 },
        { q: 'Le contrôleur API hérite généralement de :', opts: ['Controller', 'ControllerBase', 'ApiController', 'BaseController'], ans: 1 },
        { q: 'CORS signifie :', opts: ['Client-Origin Request Service', 'Cross-Origin Resource Sharing', 'Controller Origin Routing Service', 'Cross-Object REST Service'], ans: 1 },
        { q: 'Pourquoi POSTMAN fonctionne malgré les erreurs CORS ?', opts: ['POSTMAN désactive CORS', 'POSTMAN n\'applique pas les règles CORS du navigateur', 'POSTMAN utilise HTTPS', 'POSTMAN bypasse le serveur'], ans: 1 },
        { q: 'DTO signifie :', opts: ['Data Type Object', 'Data Transfer Object', 'Database Table Object', 'Dynamic Type Object'], ans: 1 },
        { q: 'PATCH sert à :', opts: ['Supprimer une ressource', 'Créer une ressource', 'Modifier partiellement une ressource', 'Lire une ressource'], ans: 2 },
      ],
      exam: [
        { type: 'open', q: 'Quelle est la différence entre API, API REST et API RESTful ?', ans: 'API simple : interface de communication entre applications, sans contraintes REST.\nAPI REST : respecte les normes REST mais pas totalement.\nAPI RESTful : respecte ENTIÈREMENT les 6 contraintes REST (Stateless, Client-Serveur, Interface Uniforme, Cacheable, Layered System, Code on demand).', hint: 'API=communication, REST=normes partielles, RESTful=normes complètes' },
        { type: 'open', q: 'Pourquoi utilise-t-on ControllerBase au lieu de Controller pour les API ?', ans: 'ControllerBase fournit les fonctionnalités nécessaires aux API REST (Ok(), NotFound(), BadRequest()...) sans inclure les éléments MVC inutiles dans une API : ViewBag, ViewData, TempData et View(). Cela allège le contrôleur.', hint: 'Controller a les éléments MVC (ViewBag, View...) inutiles pour une API' },
        { type: 'checkbox', q: 'Sélectionner les méthodes HTTP idempotentes', opts: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], ans: [0, 2, 3], hint: 'GET, PUT, DELETE sont idempotentes. POST et PATCH ne le sont pas.' },
        { type: 'open', q: 'Qu\'est-ce qu\'un DTO et quel est le rôle du Mapper ?', ans: 'DTO (Data Transfer Object) = objet simplifié utilisé pour transférer des données entre le client et le serveur, sans exposer les entités complètes de la BDD. Le Mapper convertit Entity ↔ DTO, en séparant la couche de données de la couche de présentation.', hint: 'DTO = objet de transfert simplifié. Mapper = conversion Entity↔DTO' },
      ]
    },
    {
      id: 'jwt-microservices',
      semester: 'S2',
      title: 'Microservices & JWT',
      icon: '🔐',
      color: 'amber',
      lessons: [
        {
          title: 'Pourquoi JWT dans les microservices ?',
          body: `<p>Dans une architecture microservices, chaque service doit pouvoir vérifier l'identité de l'utilisateur <strong>de façon autonome</strong>, sans appeler un serveur central de session.</p>`,
          code: `// JWT = JSON Web Token — Standard Open-source
// Structure : 3 parties séparées par des points (.)
// P1.P2.P3

// P1 - Header : type de token + algorithme de signature
// { "alg": "HS256", "typ": "JWT" }

// P2 - Payload : informations (claims)
// Claims recommandés par RFC :
// sub  → identifiant de l'utilisateur
// exp  → date d'expiration (obligatoire en pratique)
// iat  → date d'émission
// iss  → émetteur du token
// aud  → destinataire
// role → rôle (personnalisé)

// P3 - Signature : garantit l'authenticité
// HMACSHA256(base64(P1) + "." + base64(P2), clé_secrète)

// Pourquoi JWT plutôt que Session dans les microservices ?
// Session → le MS doit appeler le MS Auth à chaque requête (surcharge réseau)
// Cookie → modifiable par l'utilisateur (non sécurisé)
// JWT → crypté + signé → l'utilisateur ne peut pas le modifier
//      → chaque MS vérifie le token localement (Stateless)

// Où stocker le token côté client ?
// Cookie : envoi automatique MAIS risque CSRF
// LocalStorage : manuel MAIS risque XSS
// SessionStorage : auto-détruit à la fermeture du navigateur`,
          language: 'csharp',
          tips: [
            'JWT = 3 parties : Header.Payload.Signature',
            'Crypté avec une clé secrète → intégrité garantie',
            'Stateless → idéal pour microservices',
            'exp = expiration obligatoire en pratique',
            'Cookie CSRF, LocalStorage XSS, SessionStorage = temporaire',
          ]
        },
        {
          title: 'YARP — API Gateway',
          body: `<p>YARP (Yet Another Reverse Proxy) est une bibliothèque Microsoft pour créer des API Gateway — un point d'entrée unique devant vos microservices.</p>`,
          code: `// YARP = Yet Another Reverse Proxy
// Open-source Microsoft, programmable en C#

// Avantages d'un Reverse Proxy (API Gateway) :
// 1. Sécurité → masque les adresses IP des serveurs réels
// 2. Load Balancing → répartit le trafic
// 3. SSL en un seul point
// 4. Routage centralisé
// 5. Mise en cache

// YARP vs Nginx/HAProxy :
// Nginx/HAProxy → configuration statique (fichiers)
// YARP → programmable en C# (personnalisation totale)

// Installation :
// dotnet add package Yarp.ReverseProxy

// appsettings.json
{
    "ReverseProxy": {
        "Routes": {
            "produits-route": {
                "ClusterId": "produits-cluster",
                "Match": { "Path": "/api/produits/{**catch-all}" }
            }
        },
        "Clusters": {
            "produits-cluster": {
                "Destinations": {
                    "dest1": { "Address": "http://localhost:5001/" }
                }
            }
        }
    }
}`,
          language: 'csharp',
          tips: [
            'YARP = Yet Another Reverse Proxy — bibliothèque Microsoft',
            'Contrairement à Nginx, YARP est programmable en C#',
            'API Gateway = point d\'entrée unique pour tous les microservices',
            'Load Balancing, SSL centralisé, routage, cache',
          ]
        }
      ],
      quiz: [
        { q: 'JWT est composé de combien de parties ?', opts: ['1', '2', '3', '4'], ans: 2 },
        { q: 'Quelle partie du JWT garantit l\'authenticité ?', opts: ['Header', 'Payload', 'Signature', 'Claims'], ans: 2 },
        { q: 'Quel claim JWT représente l\'expiration ?', opts: ['sub', 'iss', 'exp', 'aud'], ans: 2 },
        { q: 'YARP est :', opts: ['Un ORM', 'Une bibliothèque Reverse Proxy Microsoft', 'Un framework frontend', 'Un gestionnaire de BDD'], ans: 1 },
        { q: 'Quelle contrainte REST JWT permet de respecter ?', opts: ['Cacheable', 'Stateless', 'Code on demand', 'Layered'], ans: 1 },
      ],
      exam: [
        { type: 'open', q: 'Expliquer la structure d\'un JWT et le rôle de chaque partie', ans: 'JWT = 3 parties séparées par un point (.) :\nP1 Header : type de token (JWT) + algorithme de signature (HS256)\nP2 Payload : claims (informations) — sub, exp, iat, rôle, email...\nP3 Signature : résultat du chiffrement de P1+P2 avec une clé secrète — garantit que le token n\'a pas été modifié.', hint: 'Header.Payload.Signature — signature = garantie d\'intégrité' },
        { type: 'open', q: 'Pourquoi préfère-t-on JWT aux sessions dans une architecture microservices ?', ans: 'Les sessions sont stockées sur le serveur qui les a créées. Quand un autre microservice reçoit une requête, il doit appeler le MS d\'authentification pour vérifier la session (surcharge réseau). Avec JWT, chaque microservice vérifie le token localement avec la clé secrète partagée — pas de dépendance réseau, respect de Stateless REST.', hint: 'Stateless + vérification locale + pas de surcharge réseau' },
        { type: 'open', q: 'Qu\'est-ce que YARP et pourquoi l\'utiliser ?', ans: 'YARP (Yet Another Reverse Proxy) est une bibliothèque open-source Microsoft pour créer des API Gateway programmables en C#. Contrairement à Nginx qui utilise des fichiers de configuration statiques, YARP est extensible via du code C#. Il offre : routage dynamique, load balancing, transformations, gestion de santé.', hint: 'Reverse Proxy programmable en C# — routing, load balancing, SSL' },
      ]
    },
    {
      id: 'entity-framework',
      semester: 'S2',
      title: 'Entity Framework Core',
      icon: '🏛️',
      color: 'emerald',
      lessons: [
        {
          title: 'Introduction à EFC — ORM vs ADO.NET',
          body: `<p>Entity Framework Core est un <strong>ORM (Object Relational Mapping)</strong> — il permet de travailler avec des objets C# au lieu d'écrire du SQL manuellement. Il supporte 27 types de bases de données.</p>`,
          code: `// ADO.NET (bas niveau) :
SqlCommand cmd = new SqlCommand("SELECT * FROM Produits", cn);
SqlDataReader rd = cmd.ExecuteReader();
while (rd.Read()) {
    Produit p = new Produit(rd[0].ToString(), rd[1].ToString());
    produits.Add(p);
}

// EFC (haut niveau — ORM) :
List<Produit> produits = db.Produits.ToList();

// Comparaison EF vs ADO :
// Performance : ADO > EF
// Productivité : EF > ADO
// Maintenabilité : EF > ADO
// Flexibilité : EF > ADO

// 3 approches EFC :
// Code First → Créer les classes → EFC génère la BDD (recommandé)
// Database First → BDD existante → EFC génère les classes
// Model First → Graphique (OBSOLÈTE avec EFC)

// Packages NuGet nécessaires :
// Microsoft.EntityFrameworkCore.Tools
// Microsoft.EntityFrameworkCore.SqlServer

// Commandes essentielles :
// Add-Migration NomMigration  → génère le script SQL
// Update-Database             → applique en BDD
// Remove-Migration            → annule la dernière migration`,
          language: 'csharp',
          tips: [
            'ORM = Object Relational Mapping — objets C# ↔ tables BDD',
            'EFC supporte 27 types de BDD (SQL Server, MySQL, PostgreSQL...)',
            'Code First = recommandé par Microsoft',
            'Database First = pour une BDD existante',
            'Add-Migration + Update-Database = workflow principal',
          ]
        },
        {
          title: 'Annotations EFC et Relations',
          body: `<p>Les annotations configurent le comportement d'EFC : noms de tables, contraintes, clés primaires/étrangères, relations.</p>`,
          code: `using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("Etudiants")]  // Changer le nom de table
public class Etudiant {
    [Key]                   // Clé primaire
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    [Required]              // not null
    [StringLength(100, MinimumLength = 2)] // longueur max=100, min=2
    [Column("Prenom")]      // Changer le nom de colonne
    public string Nom { get; set; }

    [MaxLength(255)]
    public string Email { get; set; }

    [NotMapped]             // Pas créé en BDD
    public string NomComplet => $"{Nom} {Prenom}";

    [ConcurrencyCheck]      // Gestion concurrence sur ce champ
    public int Version { get; set; }

    [Timestamp]             // Gestion concurrence sur toute la ligne
    public byte[] RowVersion { get; set; }

    // Relation ManyToOne (Etudiant → Niveau)
    [ForeignKey("NiveauId")]
    public int NiveauId { get; set; }
    public Niveau Niveau { get; set; } // Propriété de navigation

    // Relation OneToMany (inverse côté Niveau)
    // → public ICollection<Etudiant> Etudiants { get; set; }
}

// Relations :
// ManyToOne : Client → Commande (un client a plusieurs commandes)
// OneToOne  : Commande → Facture (une commande a une seule facture)
// ManyToMany simple : Produit ↔ Fournisseur
// ManyToMany porteuse : Commande ↔ Produit (avec données supplémentaires)`,
          language: 'csharp',
          tips: [
            '[Table] = changer nom de table, [Column] = changer nom de colonne',
            '[Required] = not null, [StringLength] = longueur min et max',
            '[NotMapped] = champ non créé en BDD',
            '[Timestamp] = gestion concurrence sur toute la ligne',
            'ICollection<T> = relation One-To-Many ou Many-To-Many',
          ]
        },
        {
          title: 'LINQ to Entities',
          body: `<p>LINQ (Language Integrated Query) permet d'interroger la BDD avec la syntaxe C# plutôt qu'en SQL. EFC convertit les requêtes LINQ en SQL automatiquement.</p>`,
          code: `// Contexte DB
public class AppDbContext : DbContext {
    public DbSet<Etudiant> Etudiants { get; set; }
    public DbSet<Niveau> Niveaux { get; set; }
}

// Exemples LINQ to Entities :

// Tous les étudiants
var tous = db.Etudiants.ToList();

// Projection (sélection de champs)
var noms = db.Etudiants.Select(e => e.Nom).ToList();
var recap = db.Etudiants.Select(e => new { e.Id, e.Nom }).ToList();

// Filtre (WHERE)
var etudiant = db.Etudiants.Where(e => e.Id == 1).FirstOrDefault();
// FirstOrDefault() évite InvalidOperationException si vide
// SingleOrDefault() → erreur si plus d'un résultat

// Tri
var tries = db.Etudiants.OrderBy(e => e.Nom)
                          .ThenBy(e => e.Prenom).ToList(); // tri secondaire

// Suppression de doublons
var distincts = db.Etudiants.Distinct().ToList();

// Pagination
var page2 = db.Etudiants.Skip(5).Take(5).ToList(); // Skip=ignorer, Take=prendre

// Chargement des relations
var avec = db.Etudiants.Include(e => e.Niveau).ToList();

// Lecture seule (performance)
var lecture = db.Etudiants.AsNoTracking().ToList();

// SQL natif possible aussi :
var sql = db.Etudiants.FromSqlRaw("SELECT * FROM Etudiants").ToList();`,
          language: 'csharp',
          tips: [
            'FirstOrDefault() → retourne null si vide (évite l\'exception)',
            'Distinct() → supprime les doublons',
            'OrderBy() + ThenBy() → tri principal et secondaire',
            'Skip(5) = ignorer 5 premiers, Take(5) = prendre 5 éléments',
            'AsNoTracking() = lecture seule, meilleures performances',
            'Include() = charger les relations liées',
            'var = inférence de type automatique par le compilateur',
          ]
        }
      ],
      quiz: [
        { q: 'EF Core est :', opts: ['Un SGBD', 'Un ORM pour .NET', 'Un framework frontend', 'Un protocole réseau'], ans: 1 },
        { q: 'ORM signifie :', opts: ['Object Relation Model', 'Object Relational Mapping', 'Online Resource Manager', 'Object Runtime Module'], ans: 1 },
        { q: 'Quelle approche génère la BDD depuis les classes C# ?', opts: ['Database First', 'Model First', 'Code First', 'Schema First'], ans: 2 },
        { q: 'Quelle annotation change le nom de table dans EFC ?', opts: ['[Column]', '[Table]', '[Key]', '[Schema]'], ans: 1 },
        { q: 'Quelle méthode LINQ évite InvalidOperationException ?', opts: ['First()', 'Single()', 'FirstOrDefault()', 'FindOrNull()'], ans: 2 },
        { q: 'Quelle méthode supprime les doublons en LINQ ?', opts: ['Unique()', 'Distinct()', 'NoDuplicate()', 'Filter()'], ans: 1 },
        { q: 'Skip(5) signifie :', opts: ['Prendre 5 éléments', 'Ignorer les 5 premiers', 'Sauter à l\'index 5', 'Tronquer à 5'], ans: 1 },
        { q: 'AsNoTracking() est utile pour :', opts: ['Mettre à jour les données', 'Améliorer les performances en lecture seule', 'Désactiver EFC', 'Gérer les transactions'], ans: 1 },
        { q: 'Include() sert à :', opts: ['Filtrer les données', 'Charger les relations liées', 'Paginer les résultats', 'Compter les éléments'], ans: 1 },
        { q: 'LINQ signifie :', opts: ['Language Integrated Query', 'Linked Index Query', 'Linear Integrated Query', 'Language Interface Query'], ans: 0 },
      ],
      exam: [
        { type: 'open', q: 'Quelle est la différence entre Code First et Database First dans EFC ?', ans: 'Code First : le développeur crée les classes C# (entités) en premier, puis EFC génère la base de données via migrations (Add-Migration + Update-Database). Recommandé par Microsoft pour sa souplesse.\nDatabase First : la base de données existe déjà, EFC génère les classes C# correspondantes. Recommandé pour les BD existantes.', hint: 'Code First=classes→BDD, Database First=BDD→classes' },
        { type: 'open', q: 'Quelle annotation EFC permet de changer le nom de la table et le nom d\'une colonne ?', ans: '[Table("NomTable")] sur la classe → change le nom de la table en BDD.\n[Column("NomColonne")] sur une propriété → change le nom de la colonne en BDD.', hint: '[Table] sur la classe, [Column] sur la propriété' },
        { type: 'open', q: 'Expliquer la différence entre [ConcurrencyCheck] et [Timestamp]', ans: '[ConcurrencyCheck] agit sur des propriétés spécifiques : EFC vérifie que ces champs n\'ont pas changé avant une mise à jour.\n[Timestamp] gère la concurrence sur toute la ligne via un champ rowversion — si un autre utilisateur a modifié la ligne, la mise à jour échoue.', hint: '[ConcurrencyCheck]=champs spécifiques, [Timestamp]=toute la ligne' },
        { type: 'checkbox', q: 'Sélectionner les méthodes LINQ correctes pour la pagination', opts: ['Skip()', 'Take()', 'Page()', 'Limit()', 'Offset()'], ans: [0, 1], hint: 'Skip() et Take() — les autres n\'existent pas en LINQ' },
        { type: 'open', q: 'Qu\'est-ce que ICollection<T> dans le contexte EFC ?', ans: 'ICollection<T> est utilisé dans les entités EFC pour définir des relations One-To-Many ou Many-To-Many. Par exemple, dans la classe Niveau, ICollection<Etudiant> représente la liste de tous les étudiants appartenant à ce niveau.', hint: 'Propriété de navigation pour relation 1-N ou N-N' },
      ]
    },

    // A4 — Fiche autorisée S1 (accessible dans le module mais affiché comme onglet séparé)
    {
      id: 'a4-s1',
      semester: 'S1',
      title: 'Fiche A4 autorisée — S1',
      icon: '📄',
      color: 'gray',
      isA4: true,
      pdfPath: '/A4/A4(S1).pdf',
      lessons: [
        {
          title: 'QCM — Généralités .NET & C#',
          body: `<p>Fiche A4 autorisée à l'examen — Semestre 1. Résumé de tous les points QCM importants du cours.</p>`,
          code: `// ===== A. GÉNÉRALITÉS .NET & C# =====
// .NET est : Un framework de développement
// CLR → exécution du code .NET
// Le code C# est transformé en : Code IL
// Rôle du JIT : Transformer IL en code natif

// ===== B. .NET Framework / Core / Standard =====
// .NET Core est : Cross-platform
// Fusion .NET Framework + Core : à partir de .NET 5
// .NET Standard : Une norme de compatibilité

// ===== C. ASP.NET Core MVC =====
// Logique métier : Controller
// Extension Razor : .cshtml
// Symbole C# dans Razor : @
// Erreurs de validation affichées dans : la vue (asp-validation-for)

// ===== D. Routage & URLs =====
// URL par défaut HomeController → Index : /Home
// Dans /Home/Privacy, Privacy est : L'action
// Validation principale formulaire : ViewModel
// ModelState contient : l'état de validation du modèle

// ===== E. Middleware & Pipeline =====
// Middleware = composant du pipeline http
// UseStaticFiles → fichiers statiques
// UseSession → restaure la session
// Configuration middlewares : Program.cs
// Session stocke dans : HttpContext
// ModelState.IsValid : Vérifier validité formulaire

// ===== F. Formulaires =====
// Vérifier validité formulaire : ModelState
// Pourquoi ViewModel : Validation + simplification
// Nb d'actions minimum pour formulaire MVC : 2

// ===== G. State Management =====
// Session accepte par défaut : String et int
// Package JSON officiel depuis .NET Core 3 : System.Text.Json
// Session stockée : Côté serveur
// Créer cookie : Response.Cookies.Append()
// Lire cookie : Request.Cookies[]
// Sérialiser avant session : La session n'accepte pas les objets

// ===== H. Filtres =====
// Objectif principal filtres : Centralisation du code
// Un filtre peut être appliqué sur : Un contrôleur ou une action
// OnActionExecuting : Avant l'action

// ===== I. ADO.NET =====
// ADO.NET utilisé pour : Manipuler des BDD
// SqlCommand : Exécuter requête SQL
// ExecuteNonQuery : INSERT / UPDATE / DELETE
// ExecuteReader : SELECT – SqlDataReader
// ExecuteScalar : Une seule valeur
// using SqlConnection : Libération automatique des ressources
// ADO.NET est un ORM ? NON — API bas niveau`,
          language: 'csharp',
          tips: [
            'Ordre Pipeline : HttpsRedirection → StaticFiles → Routing → Session → Authorization → MapControllerRoute → Run',
            'Controller par défaut : Home',
            'AddSession = service, UseSession = middleware',
            'RedirectToAction évite la resoumission du formulaire (PRG pattern)',
            'IdleTimeout est de type Sliding (se renouvelle à chaque requête)',
          ]
        },
        {
          title: 'QCM 2 — Points avancés S1',
          body: `<p>Deuxième série de points QCM importants — questions plus avancées du Semestre 1.</p>`,
          code: `// ===== POINTS IMPORTANTS À MÉMORISER =====

// RedirectToAction avantage :
// → Arrêt automatique de l'exécution
// → Évite la resoumission du formulaire (PRG pattern)

// IdleTimeout : type Sliding (se renouvelle à chaque requête)

// Annotations plutôt que code manuel → Validation centralisée

// Ordre du Pipeline (À MÉMORISER) :
// 1. UseHttpsRedirection
// 2. UseStaticFiles
// 3. UseRouting
// 4. UseSession         ← après UseRouting !
// 5. UseAuthorization
// 6. MapControllerRoute
// 7. Run

// Connexion SQL ouverte trop longtemps → Saturation des connexions
// Oublier Close() ou using → Risque de blocage des ressources

// ExecuteScalar() plus performant qu'ExecuteReader() pour COUNT :
// → Une seule valeur retournée (pas de flux de données complet)

// Différence AddSession / UseSession :
// AddSession → ajoute le SERVICE de session
// UseSession → active le MIDDLEWARE de session

// Controller par défaut : Home
// Action par défaut : Index`,
          language: 'csharp',
          tips: [
            'Mémoriser l\'ordre du pipeline — question très fréquente',
            'using = libération automatique (IDisposable)',
            'PRG Pattern = Post-Redirect-Get (évite la double soumission)',
            'ADO.NET n\'est PAS un ORM — c\'est une API bas niveau',
          ]
        }
      ],
      quiz: [],
      exam: []
    },

    {
      id: 'ef-notions',
      semester: 'S2',
      title: 'Notions pour maîtriser EF',
      icon: '🧠',
      color: 'purple',
      lessons: [
        {
          title: 'Délégués — Pointeurs sur fonctions',
          body: `<p>Un <strong>délégué</strong> est un type qui représente une référence (un pointeur) à une méthode avec une signature précise. C'est le fondement de LINQ et de toute la programmation fonctionnelle en C#. Comprendre les délégués explique pourquoi on peut écrire <code>.Where(e => e.Age > 20)</code>.</p>`,
          code: `// Delegate = pointeur sur fonction
// Comme en C/C++ mais orienté objet

// Déclaration d'un délégué
delegate void MonDelegate(string message);

// Assigner une fonction au délégué
static void Afficher(string msg) => Console.WriteLine(msg);
MonDelegate pnt = Afficher; // pnt pointe vers Afficher()
pnt("Bonjour");             // Appel par adresse → Couplage Faible

// ===== FUNC / ACTION / PREDICATE =====
// Évitent de déclarer un délégué personnalisé

// Action → délégué qui ne retourne pas de valeur (procédure)
Action<string> afficher = msg => Console.WriteLine(msg);
Action<string, int> repeter = (msg, n) => { for(int i=0; i<n; i++) Console.WriteLine(msg); };

// Func → délégué qui retourne une valeur
Func<int, int, int> somme = (a, b) => a + b;
int res = somme(3, 5); // 8

// Predicate → délégué qui retourne bool (condition)
Predicate<int> estPair = n => n % 2 == 0;
bool ok = estPair(4); // true

// ===== EXPRESSION LAMBDA =====
// Syntaxe : paramètres => expression
// L'opérateur => se lit "goes to"
// Gauche = paramètres, Droite = expression

// C'est exactement ce qu'on utilise dans LINQ :
var pairs = liste.Where(n => n % 2 == 0);  // Predicate
var noms  = etudiants.Select(e => e.Nom);  // Func`,
          language: 'csharp',
          tips: [
            'Délégué = pointeur sur fonction → couplage faible',
            'Action = procédure (pas de retour)',
            'Func = fonction (retourne une valeur)',
            'Predicate = condition (retourne bool)',
            'Lambda => est exactement ce qu\'on utilise dans LINQ',
            'Délégués = fondation de LINQ et des méthodes d\'extension',
          ]
        },
        {
          title: 'Yield, Méthodes d\'extension et Async/Await',
          body: `<p><strong>yield</strong> retourne les éléments un par un (exécution différée). Les <strong>méthodes d\'extension</strong> ajoutent des méthodes à une classe sans la modifier. <strong>async/await</strong> = programmation asynchrone sans bloquer le thread.</p>`,
          code: `// ===== YIELD =====
// Retourne les éléments un par un — sans créer une liste intermédiaire

// Code traditionnel (crée une liste en mémoire complète)
IEnumerable<int> GetPairesTradi(List<int> nums) {
    var result = new List<int>();
    foreach(var n in nums)
        if(n % 2 == 0) result.Add(n);
    return result;
}

// Avec yield (exécution différée — plus économique)
IEnumerable<int> GetPairesYield(List<int> nums) {
    foreach(var n in nums)
        if(n % 2 == 0) yield return n; // retourne un à un
}

// ===== MÉTHODES D'EXTENSION =====
// Ajouter une méthode à une classe sans y avoir accès
// Mot clé : this devant le premier paramètre

public static class Extensions {
    // Ajouter une méthode à string
    public static string Majuscule(this string s) => s.ToUpper();

    // Ajouter une méthode à List<int>
    public static IEnumerable<int> FiltrerSup(this List<int> liste, Predicate<int> condition) {
        foreach(var n in liste)
            if(condition(n)) yield return n;
    }
}

// Utilisation :
"bonjour".Majuscule(); // "BONJOUR"
liste.FiltrerSup(n => n > 5);

// ===== SYNC VS ASYNC =====
// Sync : les tâches s'exécutent l'une après l'autre
// Async : les tâches peuvent s'exécuter en parallèle

// async = cette méthode peut être suspendue
// await = attendre le résultat sans bloquer le thread

async Task<List<Produit>> GetProduitsAsync() {
    // Requête DB sans bloquer → autres requêtes peuvent s'exécuter
    return await db.Produits.ToListAsync();
}

// Dans le contrôleur API :
[HttpGet]
public async Task<IActionResult> Index() {
    var produits = await _db.Produits.ToListAsync();
    return Ok(produits);
}`,
          language: 'csharp',
          tips: [
            'yield = retour élément par élément, sans liste intermédiaire',
            'Méthode d\'extension : static class + this avant le premier paramètre',
            'Async = méthode suspendue possible, await = attente sans blocage',
            'ToListAsync() = version asynchrone de ToList() avec EFC',
            'Ces 3 concepts sont la base de LINQ to Entities',
          ]
        }
      ],
      quiz: [
        { q: 'Un délégué C# est :', opts: ['Une interface', 'Un pointeur sur fonction', 'Une classe abstraite', 'Un attribut'], ans: 1 },
        { q: 'Action est un délégué qui :', opts: ['Retourne une valeur', 'Ne retourne pas de valeur', 'Retourne un bool', 'Retourne une liste'], ans: 1 },
        { q: 'Func est un délégué qui :', opts: ['Ne retourne rien', 'Retourne toujours bool', 'Retourne une valeur typée', 'Exécute une action'], ans: 2 },
        { q: 'Predicate est un délégué qui retourne :', opts: ['int', 'string', 'void', 'bool'], ans: 3 },
        { q: 'L\'opérateur => dans une lambda se lit :', opts: ['equals', 'returns', 'goes to', 'maps to'], ans: 2 },
        { q: 'yield sert à :', opts: ['Bloquer l\'exécution', 'Retourner une liste complète', 'Retourner les éléments un par un', 'Trier une liste'], ans: 2 },
        { q: 'Pour créer une méthode d\'extension, le premier paramètre doit avoir :', opts: ['ref', 'out', 'this', 'static'], ans: 2 },
        { q: 'async/await sert à :', opts: ['Créer des threads manuellement', 'Exécuter du code sans bloquer le thread principal', 'Synchroniser des listes', 'Gérer les exceptions'], ans: 1 },
      ],
      exam: [
        { type: 'open', q: 'Quelle est la différence entre Action, Func et Predicate ?', ans: 'Action : délégué pré-déclaré qui ne retourne pas de valeur (procédure). Func : délégué qui retourne une valeur typée. Predicate : délégué qui retourne un bool (pour vérifier une condition). Ils évitent de déclarer un délégué personnalisé à chaque fois.', hint: 'Action=void, Func=valeur, Predicate=bool' },
        { type: 'open', q: 'Comment créer une méthode d\'extension en C# ?', ans: 'Créer une classe statique et définir une méthode statique dont le premier paramètre est précédé du mot clé this. Ce mot clé indique le type que la méthode étend. Le principe d\'encapsulation n\'est pas violé car les méthodes d\'extension n\'ont pas accès aux membres privés.', hint: 'static class + méthode static + this devant le premier paramètre' },
        { type: 'dropdown', q: 'Les méthodes d\'extension peuvent accéder aux variables privées de la classe étendue', opts: ['Vrai', 'Faux'], ans: 1, hint: 'Faux. Elles n\'ont accès qu\'aux membres publics — le principe d\'encapsulation est respecté.' },
        { type: 'open', q: 'Quelle est la différence entre programmation synchrone et asynchrone ?', ans: 'Synchrone : les tâches s\'exécutent l\'une après l\'autre, dans l\'ordre. Une tâche doit se terminer avant que la suivante commence.\nAsynchrone (async/await) : une tâche longue (I/O, BDD) peut être suspendue, libérant le thread pour d\'autres requêtes. Plus performant pour les applications web avec beaucoup de requêtes simultanées.', hint: 'Sync=séquentiel, Async=suspend sans bloquer' },
      ]
    },
    {
      id: 'linq-entities',
      semester: 'S2',
      title: 'LINQ to Entities',
      icon: '🔎',
      color: 'blue',
      lessons: [
        {
          title: 'Types de requêtes EFC et exemples LINQ',
          body: `<p>EFC supporte 3 types de requêtes : <strong>LINQ to Entities</strong> (C# pur), <strong>Entity SQL</strong> et <strong>Native SQL</strong>. LINQ to Entities est le plus utilisé car il est typé, sécurisé et lisible.</p>`,
          code: `// ===== TYPES DE REQUÊTES EFC =====
// 1. LINQ to Entities (recommandé)
var filieres = db.Filieres.ToList();

// 2. Entity SQL (SQL EFC spécifique)
// var q = db.Database.ExecuteSqlRaw("...");

// 3. Native SQL (SQL brut)
var data = db.Etudiants.FromSqlRaw("SELECT * FROM Etudiants").ToList();
// ⚠ SQL natif : fonctionne sur SGBDR seulement
// ⚠ La requête doit retourner toutes les propriétés de l'entité
// ⚠ Pas de jointures si on utilise un Model pour la réception

// ===== EXEMPLES LINQ TO ENTITIES =====

// Tous les éléments
var tous = db.Filieres.ToList();

// Projection — sélectionner un champ
var libelles = db.Filieres.Select(f => f.Libelle).ToList();

// Projection — objet anonyme
var recap = db.Filieres.Select(f => new { f.Id, f.Libelle }).ToList();

// Filtre — FirstOrDefault évite InvalidOperationException
var filiereId1 = db.Filieres.Where(f => f.Id == 1).FirstOrDefault();

// Filtre — Contains (LIKE en SQL)
var groupesTS = db.Groupes.Where(g => g.Nom.Contains("TS")).ToList();

// Insensible à la casse
var casse = db.Groupes
    .Where(g => g.Nom.ToUpper().StartsWith("TS"))
    .ToList();

// Filtre sur date
var en2018 = db.Etudiants
    .Where(e => e.DateInscription.Year == 2018).ToList();

// Entre deux dates
var periode = db.Etudiants
    .Where(e => e.DateInscription >= date1 && e.DateInscription <= date2)
    .ToList();

// Chargement des relations (Include)
var avecInfo = db.Etudiants
    .Where(e => e.Age == 20)
    .Include(e => e.Carte)
    .ToList();

// Multi-Include (relations imbriquées)
var complet = db.Filieres
    .Include(f => f.Groupes)
        .ThenInclude(g => g.Etudiants)
            .ThenInclude(e => e.Carte)
    .ToList();`,
          language: 'csharp',
          tips: [
            'ToList() exécute la requête → retourne les résultats',
            'FirstOrDefault() → null si vide (pas d\'exception)',
            'First() → InvalidOperationException si vide',
            'Contains() = LIKE en SQL',
            'Include() + ThenInclude() = charger les relations',
          ]
        },
        {
          title: 'Fonctions d\'agrégat, tri, pagination et AsNoTracking',
          body: `<p>LINQ offre toutes les fonctions d'agrégat SQL (COUNT, AVG, MAX...) plus des fonctions avancées de tri, pagination et lecture optimisée.</p>`,
          code: `// ===== AGRÉGATS =====
int nbEtudiants   = db.Etudiants.Count();
double moyenneAge = db.Etudiants.Average(e => e.Age);
int maxAge        = db.Etudiants.Max(e => e.Age);
int minAge        = db.Etudiants.Min(e => e.Age);

// Plus petit étudiant (nom)
string plusPetit = db.Etudiants
    .OrderBy(e => e.Age).First().Nom;

// Filières sans groupes
var sansGroupes = db.Filieres
    .Where(f => !f.Groupes.Any()).ToList();

// Filière avec le plus de groupes
var plusGroupes = db.Filieres
    .OrderByDescending(f => f.Groupes.Count).First();

// ===== TRI =====
var tries = db.Etudiants.OrderBy(e => e.Nom).ToList();
var triesDesc = db.Etudiants.OrderByDescending(e => e.Age).ToList();

// Tri multiple (principal + secondaire)
var multiTri = db.Etudiants
    .OrderBy(e => e.Nom)
    .ThenBy(e => e.Prenom)
    .ToList();

// ===== PAGINATION =====
// Skip = ignorer N premiers, Take = prendre N éléments
int page = 2; int taille = 5;
var pageData = db.Etudiants
    .Skip((page - 1) * taille)   // Skip(5) pour page 2
    .Take(taille)                  // Take(5)
    .ToList();

// ===== FONCTIONS UTILES =====
var distincts  = db.Etudiants.Distinct().ToList();
var derniers   = db.Etudiants.Last();           // Dernier (exception si vide)
var dernierOu  = db.Etudiants.LastOrDefault();  // null si vide
var seul       = db.Etudiants.Single();         // Erreur si != 1 résultat
var seulOu     = db.Etudiants.SingleOrDefault(); // null si vide

// ===== ASNOTRACKING — Lecture optimisée =====
// Aucun suivi des modifications → plus rapide pour lecture seule
var lecture = db.Etudiants.AsNoTracking().ToList();
// Utiliser quand on n'a pas besoin de modifier les résultats`,
          language: 'csharp',
          tips: [
            'Count(), Average(), Max(), Min(), Sum() = agrégats LINQ',
            'Skip(N) + Take(N) = pagination',
            'OrderBy() + ThenBy() = tri multi-colonnes',
            'Single() = erreur si 0 ou +2 résultats',
            'Last() = exception si vide, LastOrDefault() = null',
            'AsNoTracking() = lecture seule, plus performant',
          ]
        }
      ],
      quiz: [
        { q: 'EFC supporte combien de types de requêtes ?', opts: ['1', '2', '3', '4'], ans: 2 },
        { q: 'Quelle méthode LINQ compte le nombre d\'éléments ?', opts: ['Length()', 'Size()', 'Count()', 'Total()'], ans: 2 },
        { q: 'Pour paginer (page 2, 5 éléments/page), on utilise :', opts: ['Skip(2).Take(5)', 'Skip(5).Take(5)', 'Page(2).Size(5)', 'Limit(5).Offset(5)'], ans: 1 },
        { q: 'SingleOrDefault() retourne une erreur si :', opts: ['La liste est vide', 'Il y a plus d\'un résultat', 'La liste est nulle', 'La condition est fausse'], ans: 1 },
        { q: 'ThenBy() sert à :', opts: ['Tri principal', 'Tri secondaire', 'Inverser le tri', 'Trier en décroissant'], ans: 1 },
        { q: 'Contains() en LINQ est l\'équivalent de quel opérateur SQL ?', opts: ['= ', 'IN', 'LIKE', 'BETWEEN'], ans: 2 },
        { q: 'ToUpper() dans un Where LINQ sert à :', opts: ['Convertir en majuscules pour l\'affichage', 'Rendre la recherche insensible à la casse', 'Optimiser la requête', 'Trier alphabétiquement'], ans: 1 },
        { q: 'ThenInclude() sert à :', opts: ['Charger une relation de premier niveau', 'Charger une relation imbriquée (Include dans Include)', 'Exclure une relation', 'Paginer les relations'], ans: 1 },
      ],
      exam: [
        { type: 'open', q: 'Quels sont les 3 types de requêtes supportés par EFC ?', ans: '1. LINQ to Entities — requêtes en C# converties automatiquement en SQL (recommandé)\n2. Entity SQL — langage de requête spécifique à EFC\n3. Native SQL — requêtes SQL brutes avec FromSqlRaw() (fonctionne sur SGBDR uniquement)', hint: 'LINQ to Entities, Entity SQL, Native SQL' },
        { type: 'open', q: 'Quelles sont les restrictions du SQL natif dans EFC ?', ans: '1. Fonctionne sur SGBDR seulement\n2. La requête doit retourner toutes les propriétés de l\'entité\n3. Si on utilise un Model pour la réception, pas de jointures possibles', hint: 'SGBDR seulement + toutes les propriétés + pas de jointures avec Model' },
        { type: 'open', q: 'Comment réaliser une pagination avec LINQ to Entities ?', ans: 'Utiliser Skip() et Take() :\n- Skip((page - 1) * taille) → ignorer les éléments des pages précédentes\n- Take(taille) → prendre le nombre d\'éléments de la page\nExemple page 2, 5 éléments/page : .Skip(5).Take(5)', hint: 'Skip((page-1)*taille).Take(taille)' },
        { type: 'checkbox', q: 'Sélectionner les méthodes LINQ qui peuvent lancer une exception si la liste est vide', opts: ['First()', 'FirstOrDefault()', 'Single()', 'SingleOrDefault()', 'Last()', 'LastOrDefault()'], ans: [0, 2, 4], hint: 'First(), Single(), Last() lancent une exception si vide. Les versions OrDefault() retournent null.' },
      ]
    },
    {
      id: 'reporting',
      semester: 'S2',
      title: 'Reporting RDLC',
      icon: '📊',
      color: 'teal',
      lessons: [
        {
          title: 'Introduction au Reporting ASP.NET Core',
          body: `<p>La création de rapports imprimables est essentielle dans toute application métier. En ASP.NET Core, la solution gratuite principale est <strong>RDLC</strong> (Report Definition Language Client Side) de Microsoft.</p>`,
          code: `// Solutions Reporting disponibles :
/*
GRATUITES :
- RDLC Microsoft : intégré VS, tableaux + graphes + groupements
- iTextSharp : Open-source, 28M utilisations
- FastReport : Open-source, 700K utilisations
- OpenRPT : Open-source, 500K utilisations

PAYANTES :
- Crystal Reports SAP : très bon mais licence requise
- Telerik Reporting : 1499$/an
- Syncfusion : 695$/mois

RDLC : Report Definition Language Client Side
- Fichier XML en arrière-plan (.rdlc)
- Intégré VS 2013+
- À partir de VS 2019 : ne supporte plus .NET 5+
  → Solution : créer le .rdlc dans un projet .NET Framework
    puis le copier dans le projet .NET Core
*/

// 3 Packages NuGet à installer par projet :
// 1. AspNetCore.Reporting 2.1.0
//    → lecture du rapport XML, remplissage et génération
// 2. System.Security.Permissions 6.0
//    → accès au fichier .rdlc
// 3. System.Text.Encoding.CodePages 6.0
//    → support encodages supplémentaires (Windows-1252 etc.)`,
          language: 'csharp',
          tips: [
            'RDLC = Report Definition Language Client Side',
            'Le fichier .rdlc est un fichier XML en arrière-plan',
            'VS 2019+ : RDLC ne supporte pas .NET 5+ → créer dans .NET Framework, copier',
            '3 packages NuGet nécessaires par projet',
            'iTextSharp = 28M utilisations, très populaire',
          ]
        },
        {
          title: 'Rapports simples, composés et graphes',
          body: `<p>Les 4 types de rapports RDLC : <strong>simple</strong> (liste directe), <strong>paramétré</strong> (filtré), <strong>composé</strong> (jointure → ViewModel), <strong>groupé</strong> et <strong>graphe</strong>.</p>`,
          code: `// ===== ÉTAPES COMMUNES À TOUS LES RAPPORTS =====
public IActionResult Imprimer() {
    // 1. Encodage (obligatoire 1 fois)
    Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);

    // 2. Instancier LocalReport avec le chemin du fichier .rdlc
    string path = Path.Combine(Directory.GetCurrentDirectory(),
        "Reports", "RapportVilles.rdlc");
    LocalReport report = new LocalReport(path);

    // 3. Récupérer les données
    List<Ville> villes = db.Villes.ToList();

    // 4. Passer les données au rapport
    report.AddDataSource("DataSetVilles", villes);

    // 5. Générer le fichier (PDF, Word, Excel)
    var result = report.Execute(RenderType.Pdf);

    // 6. Retourner le fichier
    return File(result.MainStream, "application/pdf");
}

// ===== RAPPORT SIMPLE =====
// Requête : List<Ville> villes = db.Villes.ToList();
// Source RDLC : classe Ville directement

// ===== RAPPORT PARAMÉTRÉ =====
// Requête filtrée : db.Villes.Where(v => v.Libelle.Contains(lettre)).ToList()
// Même structure que simple — juste la requête change

// ===== RAPPORT COMPOSÉ (jointure) =====
// Problème : le rapport ne peut pas afficher des OBJETS imbriqués
// Solution : créer un ViewModel (classe avec attributs primitifs uniquement)
public class LyceeParVille {
    public string NomLycee { get; set; }
    public string NomVille { get; set; }
}
// Requête :
var data = db.Lycees.Include("Ville")
    .Select(l => new LyceeParVille {
        NomLycee = l.Nom,
        NomVille = l.Ville.Libelle
    }).ToList();
// Le RDLC utilise LyceeParVille comme source

// ===== GRAPHE =====
// Même ViewModel → RDLC avec type "Graphique"
// Catégories (axe X) + Valeurs (axe Y)
// Exemple : nombre de Lycées par Ville
public class LyceeCount {
    public string Ville { get; set; }
    public int NbLycees { get; set; }
}`,
          language: 'csharp',
          tips: [
            'Le rapport ne peut pas afficher des objets imbriqués → créer un ViewModel',
            'ViewModel = classe avec attributs primitifs uniquement',
            'Étapes communes : Encoding → LocalReport → données → AddDataSource → Execute → File()',
            'Execute(RenderType.Pdf) → PDF, .Word → Word, .Excel → Excel',
            'Même ViewModel utilisable pour tableau et graphe',
          ]
        }
      ],
      quiz: [
        { q: 'Que signifie RDLC ?', opts: ['Report Data Language Core', 'Report Definition Language Client Side', 'Rapid Data Layout Creator', 'Report Design Layout Control'], ans: 1 },
        { q: 'Le fichier .rdlc est en arrière-plan :', opts: ['Un fichier binaire', 'Un fichier JSON', 'Un fichier XML', 'Un fichier SQL'], ans: 2 },
        { q: 'Combien de packages NuGet faut-il installer par projet pour RDLC ?', opts: ['1', '2', '3', '4'], ans: 2 },
        { q: 'Pourquoi créer un ViewModel pour un rapport composé ?', opts: ['Pour la performance', 'Le rapport ne peut pas afficher des objets imbriqués', 'Pour la sécurité', 'C\'est obligatoire dans EFC'], ans: 1 },
        { q: 'Quelle méthode passe les données au rapport RDLC ?', opts: ['SetData()', 'LoadData()', 'AddDataSource()', 'BindData()'], ans: 2 },
        { q: 'Quelle méthode génère le fichier PDF du rapport ?', opts: ['Generate()', 'Render()', 'Export()', 'Execute(RenderType.Pdf)'], ans: 3 },
      ],
      exam: [
        { type: 'open', q: 'Pourquoi ne peut-on pas créer un rapport RDLC directement dans un projet .NET 9 ?', ans: 'À partir de VS 2019, RDLC ne supporte plus les projets .NET 5+. La solution est de créer le fichier .rdlc dans un projet .NET Framework, puis de le copier dans le projet .NET Core. Le fichier .rdlc étant un fichier XML en arrière-plan, il est compatible après copie.', hint: 'VS 2019+ ne supporte pas .NET 5+ → créer dans .NET Framework puis copier' },
        { type: 'open', q: 'Quelles sont les étapes pour générer un rapport PDF avec RDLC dans ASP.NET Core ?', ans: '1. Encoding.RegisterProvider() — encodage\n2. Instancier LocalReport avec le chemin du .rdlc\n3. Récupérer les données (EFC query)\n4. report.AddDataSource("NomDataset", données)\n5. var result = report.Execute(RenderType.Pdf)\n6. return File(result.MainStream, "application/pdf")', hint: 'Encoding → LocalReport → données → AddDataSource → Execute → File()' },
        { type: 'open', q: 'Qu\'est-ce qu\'un ViewModel dans le contexte du Reporting et pourquoi l\'utiliser ?', ans: 'Un ViewModel est une classe contenant uniquement des attributs de types primitifs (string, int, decimal...). Dans le Reporting RDLC, il est nécessaire pour les rapports composés car le rapport ne peut pas afficher des objets imbriqués (ex: Lycée.Ville.Libelle). Le ViewModel aplati les données en propriétés simples accessibles directement par le rapport.', hint: 'Classe avec attributs primitifs uniquement — RDLC ne gère pas les objets imbriqués' },
        { type: 'checkbox', q: 'Sélectionner les packages NuGet nécessaires pour RDLC dans ASP.NET Core', opts: ['AspNetCore.Reporting', 'System.Security.Permissions', 'Microsoft.EntityFrameworkCore', 'System.Text.Encoding.CodePages', 'Microsoft.AspNetCore.Identity'], ans: [0, 1, 3], hint: 'AspNetCore.Reporting + System.Security.Permissions + System.Text.Encoding.CodePages' },
      ]
    },

    // A4 — Fiche autorisée S2
    {
      id: 'a4-s2',
      semester: 'S2',
      title: 'Fiche A4 autorisée — S2',
      icon: '📄',
      color: 'gray',
      isA4: true,
      pdfPath: '/A4/A4(S2).pdf',
      lessons: [
        {
          title: 'QCM — Web API & EFC (Questions 1-25)',
          body: `<p>Fiche A4 autorisée à l'examen — Semestre 2. Première partie : Web API, REST, CORS et EFC.</p>`,
          code: `// ===== WEB API & REST =====
// Contrainte Stateless : Absence de session
// Méthode HTTP sûre ET idempotente : GET
// Idempotente mais non sûre : PUT et DELETE
// DELETE est idempotente car : même résultat final si répété

// ===== CODES HTTP =====
// 409 Conflict
// 204 No Content → mise à jour réussie sans retour
// 405 Method Not Allowed → problème de verbe HTTP
// 406 Not Acceptable → format non accepté
// 401 Unauthorized
// 403 Forbidden

// ===== ROUTE ET CONTRÔLEUR API =====
// Route API : Claire, simple, basée sur les ressources
// MapControllerRoute() ne fonctionne pas avec API REST :
//   → Destiné au MVC classique
// Contrôleur API hérite de : ControllerBase
// ControllerBase utilisé car : fournit fonctionnalités API sans vues MVC
// [ApiController] → OpenAPI détecte le contrôleur
// OpenAPI/Swagger → génère documentation automatique
// Package Scalar : Scalar.AspNetCore

// ===== MÉTHODES HTTP =====
// POST non idempotente car : chaque appel peut créer une nouvelle ressource
// PATCH sert à : Modifier partiellement une ressource

// ===== CORS =====
// Erreur CORS causée par : blocage cross-origin par le navigateur
// CORS = Cross-Origin Resource Sharing
// POSTMAN fonctionne malgré CORS : n'applique pas les règles CORS du navigateur
// AllowAnyOrigin() en production : Dangereux et déconseillé

// ===== EFC — BASES =====
// EF Core est : Un ORM pour .NET
// ORM = Object Relational Mapping
// Code First → génère la BDD depuis les classes
// Database First → pour BDD existante
// Table EF correspond à : Une classe Entity
// [Table] → change le nom de table
// [StringLength] → longueur min ET max
// Propriété de navigation → définit les relations entre entités
// ICollection<T> → relation One-To-Many ou Many-To-Many`,
          language: 'csharp',
          tips: [
            'GET = sûre + idempotente / POST = ni sûre ni idempotente',
            'ControllerBase (pas Controller) pour API — pas de ViewBag/View()',
            '[ApiController] → nécessaire pour OpenAPI/Swagger',
            'CORS = navigateur bloque, POSTMAN ne bloque pas',
          ]
        },
        {
          title: 'QCM — LINQ, JWT & DTO (Questions 26-50)',
          body: `<p>Deuxième partie de la fiche A4 S2 — LINQ, concurrence EFC, JWT et architecture.</p>`,
          code: `// ===== EFC — CONCURRENCE ET ANNOTATIONS =====
// [Timestamp] → gère la concurrence sur TOUTE la ligne
// [ConcurrencyCheck] → sur des propriétés SPÉCIFIQUES
// [PrimaryKey] → attribut clé composite (récent)

// ===== LINQ =====
// LINQ = Language Integrated Query
// FirstOrDefault() → évite InvalidOperationException (retourne null)
// Distinct() → supprime les doublons
// OrderBy() → tri
// ThenBy() → tri secondaire
// Skip(5) → ignorer les 5 premiers éléments
// Take(5) → prendre les 5 premiers éléments
// AsNoTracking() → performances, lecture seule
// Include() → charger les relations liées
// var → inférence automatique du type

// ===== API REST — DTO & MAPPER =====
// Données API transmises en : JSON
// 403 Forbidden
// 401 Unauthorized
// DTO = Data Transfer Object
// Mapper sert à : Convertir Entity ↔ DTO
// ModelState invalide dans Add() → ReturnBadRequest(ModelState)
// EFC permet de travailler avec : BDD relationnelles via objets .NET

// ===== JWT =====
// JWT = 3 parties : Header.Payload.Signature
// Header : type de token + algorithme de signature
// Payload : claims (sub, exp, iat, iss, aud, role...)
// Signature : garantit authenticité et intégrité
// sub → identifiant utilisateur
// exp → expiration (obligatoire)
// iat → date d'émission
// Stateless → idéal microservices
// Stockage côté client :
//   Cookie → auto mais risque CSRF
//   LocalStorage → manuel mais risque XSS
//   SessionStorage → détruit à fermeture navigateur

// ===== YARP =====
// YARP → bibliothèque Microsoft reverse proxy
// Extensibilité : programmable en C# (vs fichiers config Nginx)
// Fonctionnalités : Routage Dynamique, Load Balancing,
//                   Transformations, Health Checks`,
          language: 'csharp',
          tips: [
            'FirstOrDefault() retourne null, First() lève une exception si vide',
            'Skip() + Take() = pagination en LINQ',
            'DTO = pas d\'entité complète exposée — sécurité + flexibilité',
            'JWT : exp est obligatoire en pratique',
          ]
        }
      ],
      quiz: [],
      exam: []
    }
  ]
}