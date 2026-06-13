export const spring = {
  id: 'spring',
  title: 'Spring Boot',
  subtitle: 'Java Framework',
  version: '3.x',
  color: 'emerald',
  accent: '#10b981',
  icon: '☕',
  description: 'Maîtrisez Spring Boot : IoC, beans, scopes, JDBC, JPA et REST API.',
  modules: [
    {
      id: 'oop',
      title: 'OOP & Couplage',
      icon: '🔗',
      color: 'emerald',
      lessons: [
        {
          title: 'Relations entre classes en UML',
          body: `<p>En Java/UML, il existe plusieurs types de relations entre classes. Comprendre ces relations est fondamental pour concevoir une bonne architecture.</p>`,
          code: `// 1. HÉRITAGE (IS-A) → A ─────▷ B
class Animal {}
class Dog extends Animal {} // Dog IS-A Animal

// 2. IMPLÉMENTATION → A - - -▷ I
interface Runnable { void run(); }
class Thread implements Runnable { public void run() {} }

// 3. ASSOCIATION → A --------> B
class Order { Customer customer; }

// 4. AGRÉGATION (lien faible ◇) — B peut exister sans A
class Team { List<Player> players; }
// Les joueurs peuvent exister sans l'équipe

// 5. COMPOSITION (lien fort ◆) — B ne peut pas exister sans A
class House { Room room; }
// La chambre n'existe pas sans la maison

// RÈGLE : Si on supprime A, est-ce que B survit ?
// OUI → Agrégation   NON → Composition`,
          language: 'java',
          tips: [
            'IS-A → Héritage (extends)',
            'Has-A faible → Agrégation (B survit sans A)',
            'Has-A fort → Composition (B disparaît avec A)',
            'Implements → Réalisation d\'interface',
          ]
        },
        {
          title: 'Couplage Fort vs Couplage Faible',
          body: `<p>Le couplage mesure la dépendance entre classes. Un couplage fort rend le code rigide et difficile à tester.</p><p><strong>2 symptômes du couplage fort :</strong></p><ul><li>Changer la signature d'une méthode dans B fait planter A</li><li>Remplacer B par B' force des modifications dans A</li></ul>`,
          code: `// ❌ COUPLAGE FORT — A utilise new (connaît B directement)
class Order {
    void write() {
        OrderStateXMLWriter writer = new OrderStateXMLWriter(); // new = couplage fort !
        writer.write(this.getState());
    }
}
// Si on veut passer à JSON, on doit modifier Order !

// ✅ COUPLAGE FAIBLE — A dépend d'une interface (contrat)
interface OrderStateWriter {
    void write(String state);
}

class OrderStateXMLWriter implements OrderStateWriter {
    public void write(String state) { /* XML */ }
}

class OrderStateDBWriter implements OrderStateWriter {
    public void write(String state) { /* DB */ }
}

class Order {
    private OrderStateWriter writer; // dépend du CONTRAT !

    Order(OrderStateWriter writer) { // injection
        this.writer = writer;
    }

    void write() {
        writer.write(this.getState()); // fonctionne avec XML, DB, JSON...
    }
}`,
          language: 'java',
          tips: [
            'Le mot-clé new = couplage fort (à éviter)',
            'Dépendre d\'une interface = couplage faible',
            'L\'interface = contrat entre A et ses dépendances',
            'Spring résout les dépendances automatiquement',
          ]
        },
        {
          title: 'Architecture 3-Tiers',
          body: `<p>L'architecture 3-tiers est le standard en Spring Boot. Chaque couche a une responsabilité précise.</p>`,
          code: `// COUCHE 1 : CONTROLLER (@RestController)
// → Expose les fonctionnalités via HTTP
// → NE contient PAS de logique métier
@RestController
@RequestMapping("/api/orders")
class OrderController {
    private final IOrderService orderService; // injecte le SERVICE

    OrderController(IOrderService orderService) {
        this.orderService = orderService;
    }
}

// COUCHE 2 : SERVICE (@Service)
// → Contient la LOGIQUE MÉTIER (règles fonctionnelles)
// → NE manipule PAS la BDD directement
@Service
class OrderServiceImpl implements IOrderService {
    private final IOrderRepository orderRepo; // injecte le REPO

    void createOrder(Order o) {
        // Logique métier ici...
        orderRepo.save(o);
    }
}

// COUCHE 3 : REPOSITORY (@Repository)
// → Accède à la source de données (BDD)
// → NE contient PAS de logique métier
@Repository
class OrderRepositoryImpl implements IOrderRepository {
    void save(Order o) { /* SQL ici */ }
}

// RÈGLE : Controller → Service → Repository (sens unique !)`,
          language: 'java',
          tips: [
            'Controller → expose, délègue au Service',
            'Service → logique métier, délègue au Repository',
            'Repository → accès BDD seulement',
            'Toujours injecter une INTERFACE, pas la classe concrète !',
          ]
        }
      ],
      quiz: [
        { q: 'Quelle relation UML quand A hérite de B ?', opts: ['Composition', 'Association', 'Héritage (extends)', 'Implémentation'], ans: 2 },
        { q: 'Quel est le symptôme du couplage fort ?', opts: ['Code plus rapide', 'Changer B force des modifications dans A', 'Code plus lisible', 'Tests plus faciles'], ans: 1 },
        { q: 'Quel mot-clé Java est signe de couplage fort ?', opts: ['interface', 'extends', 'new', 'implements'], ans: 2 },
        { q: 'Quelle couche contient la logique métier ?', opts: ['Controller', 'Repository', 'View', 'Service'], ans: 3 },
        { q: 'Le Controller peut-il appeler directement le Repository ?', opts: ['Oui, toujours', 'Non, passer par le Service', 'Oui, si Service indispo', 'Non, jamais'], ans: 1 },
      ],
      exam: [
        { type: 'open', q: 'Expliquer la différence entre Agrégation et Composition avec un exemple.', ans: 'Agrégation (lien faible ◇) : B peut exister sans A. Ex: Team a des Players, les joueurs peuvent exister sans l\'équipe.\nComposition (lien fort ◆) : B ne peut PAS exister sans A. Ex: House a des Rooms, la chambre n\'existe pas sans la maison.\nRègle : si on supprime A, est-ce que B survit ? Oui = Agrégation, Non = Composition.', hint: 'Agrégation ◇ = faible. Composition ◆ = fort.' },
        { type: 'dropdown', q: 'Le mot-clé "new" dans le code d\'une classe signifie systématiquement un couplage fort', opts: ['Vrai', 'Faux'], ans: 0, hint: 'Vrai. new = instanciation directe d\'une classe concrète = couplage fort.' },
        { type: 'open', q: 'Comment peut-on rompre un couplage fort entre A et B ? Expliquer.', ans: 'Introduire une interface I entre A et B :\n1. Créer une interface I avec les méthodes dont A a besoin\n2. A dépend de I (pas de B directement)\n3. B implémente I\n4. Spring injecte B dans A via @Autowired\n\nRésultat : A ne connaît plus B, seulement le contrat I.', hint: 'Introduire interface I → A dépend de I → B implémente I → Spring DI injecte B.' },
      ]
    },
    {
      id: 'beans',
      title: 'Spring Core — Beans & IoC',
      icon: '🌱',
      color: 'emerald',
      lessons: [
        {
          title: 'Beans et Application Context',
          body: `<p>Un <strong>Bean</strong> Spring est une instance gérée par Spring (création, injection, destruction). Les beans vivent dans un <strong>Application Context</strong>.</p>`,
          code: `// @Component → déclarer une classe comme bean
@Component
public class OrderService {
    // Spring instancie et gère cette classe
}

// Stéréotypes (= @Component + rôle sémantique)
@Service     // couche logique métier
@Repository  // couche accès données (+ conversion exceptions SQL)
@Controller  // contrôleur MVC web
@RestController // = @Controller + @ResponseBody (JSON auto)

// Configuration de l'Application Context :
@Configuration
@ComponentScan(basePackages = "com.myapp")
public class AppConfig {}

// Démarrage du contexte :
ApplicationContext context =
    new AnnotationConfigApplicationContext(AppConfig.class);

// ⚠️ Spring Boot (@SpringBootApplication) fait tout cela automatiquement !

// Un bean est reconnu SI ET SEULEMENT SI :
// 1. La classe est annotée @Component (ou stéréotype)
// 2. La classe est dans un package scanné par @ComponentScan

// Erreur classique :
// NoSuchBeanDefinitionException → bean non trouvé
// NoUniqueBeanDefinitionException → plusieurs candidats (ambiguïté)`,
          language: 'java',
          tips: [
            'Bean = objet géré par Spring (pas avec new !)',
            '@SpringBootApplication inclut @ComponentScan du package racine',
            'NoSuchBeanDefinitionException = bean non trouvé',
            '98% des erreurs Spring sont des RuntimeException',
          ]
        },
        {
          title: '@Component, @Autowired, @Qualifier, @Primary',
          body: `<p>Ces annotations sont la base de Spring DI. Quand plusieurs beans implémentent la même interface, <code>@Qualifier</code> ou <code>@Primary</code> résolvent l'ambiguïté.</p>`,
          code: `// Interface (contrat)
public interface IWriter { void write(String message); }

// Bean 1
@Component
public class XMLWriter implements IWriter {
    public void write(String message) { System.out.println("XML: " + message); }
}

// Bean 2
@Component
@Primary // ← prioritaire si ambiguïté
public class JSONWriter implements IWriter {
    public void write(String message) { System.out.println("JSON: " + message); }
}

// Utilisation
@Component
public class OrderService {
    private final IWriter writer;

    // @Autowired optionnel depuis Spring 4.3 (1 seul constructeur)
    public OrderService(@Qualifier("xMLWriter") IWriter writer) {
        this.writer = writer;
    }
}

// Identifiant de bean par défaut = nom classe en camelCase
// OrderService → orderService
// XMLWriter → xMLWriter

// Identifiant personnalisé :
@Component("myWriter")
class CustomWriter implements IWriter { ... }
// → @Qualifier("myWriter")`,
          language: 'java',
          tips: [
            '@Autowired → optionnel sur constructeur unique (Spring 4.3+)',
            '@Qualifier("nom") → spécifie quel bean injecter',
            '@Primary → priorité quand plusieurs candidats',
            'Nom par défaut = nom classe en camelCase',
            'Utiliser private final + constructeur = meilleure pratique',
          ]
        },
        {
          title: 'Scopes & Cycle de vie',
          body: `<p>Le <strong>scope</strong> définit combien d'instances sont créées. <code>@PostConstruct</code> et <code>@PreDestroy</code> permettent d'ajouter du code dans le cycle de vie.</p>`,
          code: `// SINGLETON (défaut) — 1 seule instance partagée
@Component
@Scope("singleton")  // optionnel, c'est le défaut
class ServiceA { private int count = 0; }
// ⚠️ Si ServiceA a un état, A et B voient les mêmes modifications !

// PROTOTYPE — nouvelle instance à chaque injection
@Component
@Scope("prototype")
class ServiceB { private int count = 0; }
// A et B ont chacun LEUR propre instance

// Autres scopes (web) :
// @Scope("request")  → une instance par requête HTTP
// @Scope("session")  → une instance par session HTTP

// CYCLE DE VIE
import jakarta.annotation.PostConstruct;  // ← Jakarta, PAS Spring !

@Component
public class DatabaseInitializer {

    @PostConstruct  // exécuté après création + injection
    public void init() {
        System.out.println("Bean prêt à l'emploi !");
    }

    @PreDestroy  // exécuté avant destruction (PAS garanti !)
    public void cleanup() {
        System.out.println("Fermeture des ressources...");
    }
}

// ⚠️ PIÈGE D'EXAMEN : le nom de la méthode n'a PAS d'importance !
@PostConstruct
public void destroy() { // ← @PostConstruct = initialisation !
    System.out.println("Ceci s'exécute à l'INIT, pas à la destruction !");
}`,
          language: 'java',
          tips: [
            'Singleton = partagé → problème si le bean a un état',
            'Prototype = 1 instance par injection → utiliser si état',
            '@PostConstruct = après création (annotation JAKARTA)',
            '@PreDestroy = avant destruction (pas garanti en cas de crash)',
            '⚠️ Piège : le nom de la méthode n\'a aucune importance !',
          ]
        },
        {
          title: 'Configuration & Propriétés',
          body: `<p>Les valeurs qui varient selon l'environnement doivent être externalisées dans <code>application.properties</code>.</p>`,
          code: `# src/main/resources/application.properties
app.name=MyApp
app.version=1.0.0
app.discount=0.15
database.url=jdbc:mysql://localhost:3306/mydb

# ============================================
# Lire avec @Value
@Component
public class AppInfo {

    @Value("\${app.name}")
    private String name;

    @Value("\${app.version}")
    private String version;

    @Value("\${app.timeout:30}")  // valeur par défaut = 30
    private int timeout;
}

# ============================================
# @ConfigurationProperties — grouper les propriétés
@Component
@ConfigurationProperties(prefix = "app")
public class AppProperties {
    private String name;
    private double discount;
    private String version;
    // Getters/Setters OBLIGATOIRES

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    // ...
}

# ============================================
# Profiles
@Component
@Profile("dev")
class FixedDiscount implements IDiscount { ... }

@Component
@Profile("prod")
class VariableDiscount implements IDiscount { ... }

# Activer : spring.profiles.active=dev`,
          language: 'java',
          tips: [
            '@Value("${cle}") → injecte une valeur du fichier',
            '@Value("${cle:defaut}") → avec valeur par défaut',
            '@ConfigurationProperties → groupe de propriétés app.*',
            '@Profile("dev") → bean actif seulement en profil dev',
            'Ne JAMAIS hardcoder les valeurs qui changent selon l\'environnement',
          ]
        }
      ],
      quiz: [
        { q: 'Que signifie Bean dans Spring ?', opts: ['Un fichier de config', 'Un objet géré par Spring', 'Une base de données', 'Une interface Java'], ans: 1 },
        { q: '@Component peut être placé sur une interface ?', opts: ['Oui, recommandé', 'Non, seulement classes instanciables', 'Oui, pas les abstraites', 'Oui, toujours'], ans: 1 },
        { q: 'Quel scope crée une instance par injection ?', opts: ['Singleton', 'Request', 'Prototype', 'Session'], ans: 2 },
        { q: '@PostConstruct est une annotation de quel package ?', opts: ['org.springframework', 'jakarta.annotation', 'java.lang', 'javax.inject'], ans: 1 },
        { q: 'Quelle exception si 2 beans candidats pour une interface ?', opts: ['BeanAmbiguityException', 'NoUniqueBeanDefinitionException', 'AmbiguousBeanException', 'MultipleBeanException'], ans: 1 },
        { q: '@Value("${app.timeout:30}") — quelle est la valeur par défaut ?', opts: ['app.timeout', '${30}', '30', 'aucune'], ans: 2 },
      ],
      exam: [
        { type: 'open', q: 'Quelle est la différence entre @Component, @Service et @Repository ?', ans: '@Component = déclaration générique de bean Spring\n@Service = @Component avec rôle sémantique "couche logique métier"\n@Repository = @Component + conversion des exceptions SQL en DataAccessException (unchecked)', hint: 'Tous = @Component. @Repository ajoute la conversion des exceptions SQL.' },
        { type: 'dropdown', q: 'Les annotations Spring peuvent causer des erreurs à la compilation', opts: ['Vrai', 'Faux'], ans: 1, hint: 'Faux. Les annotations Spring sont évaluées SEULEMENT à l\'exécution (runtime). 98% des erreurs sont des RuntimeException.' },
        { type: 'open', q: 'On a B et C qui implémentent I, et A qui a besoin de I. Que se passe-t-il ? Comment résoudre ?', ans: 'Spring lève une NoUniqueBeanDefinitionException au démarrage car il trouve 2 beans candidats et ne peut pas choisir.\n\nSolutions :\n1. @Qualifier("nomBean") sur le paramètre du constructeur\n2. @Primary sur B ou C pour indiquer la priorité', hint: 'NoUniqueBeanDefinitionException. Solutions : @Qualifier ou @Primary.' },
        { type: 'open', q: 'Qu\'est-ce que le scope Singleton en Spring ? Quel problème peut-il poser ?', ans: 'Singleton = une seule instance créée dans tout le contexte. Tous les beans qui injectent ce bean partagent la MÊME instance.\n\nProblème : Si le bean a des attributs (état), les modifications faites par A sont visibles par B et C → corruption de l\'état partagé.\n\nSolution : Utiliser Prototype si le bean a un état.', hint: 'Singleton = partagé = problème si le bean a un état (attributs modifiables).' },
      ]
    },
    {
      id: 'jdbc',
      title: 'JDBC & Base de données',
      icon: '🗃️',
      color: 'blue',
      lessons: [
        {
          title: 'JdbcTemplate — La solution Spring',
          body: `<p>JdbcTemplate simplifie l'accès JDBC en gérant automatiquement la connexion, la fermeture des ressources et les exceptions.</p>`,
          code: `// ❌ RAW JDBC — trop verbeux et error-prone
public User findById(Long id) {
    Connection conn = null; PreparedStatement stmt = null; ResultSet rs = null;
    try {
        conn = dataSource.getConnection();
        stmt = conn.prepareStatement("SELECT * FROM users WHERE id = ?");
        stmt.setLong(1, id);
        rs = stmt.executeQuery();
        if (rs.next()) { /* mapper */ }
    } catch (SQLException e) { e.printStackTrace(); }
    finally { /* fermer conn, stmt, rs */ }
    return null;
}

// ✅ AVEC JdbcTemplate — propre et concis !
@Repository
public class UserDAO {
    private final JdbcTemplate jdbcTemplate;

    public UserDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // UN seul scalaire
    public int countUsers() {
        return jdbcTemplate.queryForObject("SELECT COUNT(*) FROM users", Integer.class);
    }

    // UN seul objet
    public User findById(Long id) {
        return jdbcTemplate.queryForObject(
            "SELECT * FROM users WHERE id = ?",
            new UserRowMapper(), id
        );
    }

    // LISTE d'objets
    public List<User> findAll() {
        return jdbcTemplate.query("SELECT * FROM users", new UserRowMapper());
    }

    // INSERT / UPDATE / DELETE
    public int save(User user) {
        return jdbcTemplate.update(
            "INSERT INTO users (name, email) VALUES (?, ?)",
            user.getName(), user.getEmail()
        );
    }
}`,
          language: 'java',
          tips: [
            'JdbcTemplate gère automatiquement connexion, fermeture, exceptions',
            'queryForObject() → un seul résultat',
            'query() → liste de résultats',
            'update() → INSERT, UPDATE, DELETE',
            'Spring Boot configure JdbcTemplate automatiquement',
          ]
        },
        {
          title: 'RowMapper & Spring Data JPA',
          body: `<p>Un <code>RowMapper</code> transforme une ligne ResultSet en objet Java. Spring Data JPA va encore plus loin avec des méthodes pré-implémentées.</p>`,
          code: `// RowMapper — transformer ResultSet → Object Java
public class UserRowMapper implements RowMapper<User> {
    @Override
    public User mapRow(ResultSet rs, int rowNum) throws SQLException {
        User user = new User();
        user.setId(rs.getLong("id"));
        user.setFirstName(rs.getString("first_name"));
        user.setLastName(rs.getString("last_name"));
        return user;
    }
}

// Lambda (concis pour cas simples)
List<User> users = jdbcTemplate.query(
    "SELECT * FROM users",
    (rs, rowNum) -> new User(rs.getLong("id"), rs.getString("first_name"))
);

// BeanPropertyRowMapper (automatique si noms correspondent)
List<User> users = jdbcTemplate.query(
    "SELECT * FROM users",
    new BeanPropertyRowMapper<>(User.class)
);

// ====================================================
// SPRING DATA JPA — encore plus simple !

@Entity
@Table(name = "users")
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name")
    private String firstName;
}

// Repository avec méthodes GRATUITES
public interface UserRepository extends JpaRepository<User, Long> {
    // Héritées : save(), findById(), findAll(), deleteById(), count()...

    // Méthodes par convention de nommage (générées automatiquement !)
    List<User> findByLastName(String lastName);
    Optional<User> findByEmail(String email);
    List<User> findByAgeGreaterThan(int age);

    // Requête JPQL personnalisée
    @Query("SELECT u FROM User u WHERE u.email LIKE %:domain")
    List<User> findByEmailDomain(@Param("domain") String domain);
}`,
          language: 'java',
          tips: [
            'RowMapper = transformer ResultSet → Object Java',
            'BeanPropertyRowMapper = automatique si noms correspondent',
            'DataAccessException = exceptions Spring unchecked',
            'JpaRepository → findAll(), save(), deleteById() gratuits',
            'Nommage des méthodes → Spring génère la requête automatiquement',
          ]
        }
      ],
      quiz: [
        { q: 'Avantage principal de JdbcTemplate vs Raw JDBC ?', opts: ['Plus rapide', 'Moins de boilerplate, gestion auto ressources', 'Plus compatible', 'Meilleure sécurité'], ans: 1 },
        { q: 'Quelle méthode pour UN seul résultat ?', opts: ['query()', 'queryForList()', 'queryForObject()', 'queryForMap()'], ans: 2 },
        { q: 'Quelle méthode pour INSERT/UPDATE/DELETE ?', opts: ['execute()', 'modify()', 'update()', 'write()'], ans: 2 },
        { q: 'Un RowMapper sert à ?', opts: ['Créer des tables SQL', 'Transformer ResultSet en objet Java', 'Gérer les transactions', 'Valider les données'], ans: 1 },
        { q: 'Quelle interface Spring Data JPA pour CRUD complet ?', opts: ['CrudRepository', 'SimpleRepository', 'JpaRepository', 'BaseRepository'], ans: 2 },
      ],
      exam: [
        { type: 'open', q: 'Quelles sont les méthodes principales de JdbcTemplate et leurs usages ?', ans: 'queryForObject(sql, Type.class) → UN seul scalaire\nqueryForObject(sql, rowMapper, params) → UN seul objet\nquery(sql, rowMapper) → LISTE d\'objets\nupdate(sql, params) → INSERT, UPDATE, DELETE\nbatchUpdate(sql, batchArgs) → plusieurs INSERTs en lot', hint: 'queryForObject=1 résultat, query=liste, update=écriture.' },
        { type: 'dropdown', q: 'JdbcTemplate gère automatiquement la fermeture de la connexion JDBC', opts: ['Vrai', 'Faux'], ans: 0, hint: 'Vrai. JdbcTemplate gère automatiquement connexion, fermeture et exceptions.' },
      ]
    },
    {
      id: 'rest',
      title: 'REST API Spring Boot',
      icon: '🌐',
      color: 'violet',
      lessons: [
        {
          title: 'HTTP & Méthodes REST',
          body: `<p>REST utilise les méthodes HTTP de façon sémantique. Chaque méthode a une signification précise.</p>`,
          code: `// MÉTHODES HTTP REST
// GET    → Lire (idempotent, pas de body)
// POST   → Créer (NON idempotent, avec body)
// PUT    → Remplacer entièrement (idempotent, avec body)
// PATCH  → Modifier partiellement (idempotent, avec body)
// DELETE → Supprimer (idempotent, pas de body)

// IDEMPOTENCE : même résultat si appelé plusieurs fois
// DELETE /users/5 → 1er appel : supprime. 2ème : 404. Même état final ✅
// POST /users → crée un NOUVEAU user à chaque appel ❌

// CODES HTTP IMPORTANTS
// 200 OK            → succès
// 201 Created       → ressource créée (POST)
// 204 No Content    → succès sans corps (DELETE)
// 400 Bad Request   → données invalides
// 401 Unauthorized  → non authentifié
// 403 Forbidden     → authentifié mais sans droits
// 404 Not Found     → ressource inexistante
// 500 Internal Error → erreur serveur

// URLs REST — BONNES PRATIQUES
// ❌ Mauvais (verbes) :
// POST /createUser
// GET /getUserById?id=5
// DELETE /removeUser

// ✅ Bon (noms pluriels, minuscules, versionné) :
// POST /api/v1/users
// GET /api/v1/users/5
// DELETE /api/v1/users/5
// GET /api/v1/users?page=0&size=20
// GET /api/v1/users/5/orders`,
          language: 'java',
          tips: [
            'GET = lire, POST = créer, PUT = remplacer, DELETE = supprimer',
            'POST est le seul non-idempotent',
            '201 pour création, 204 pour suppression',
            'URLs = noms pluriels en minuscules, jamais de verbes',
            'Toujours versionner : /api/v1/...',
          ]
        },
        {
          title: '@RestController — API complète',
          body: `<p><code>@RestController</code> combine @Controller et @ResponseBody. Il sérialise automatiquement les retours en JSON.</p>`,
          code: `@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    private final UserService userService;
    public UserController(UserService userService) { this.userService = userService; }

    // GET /api/v1/users
    @GetMapping
    public ResponseEntity<List<User>> getAll() {
        return ResponseEntity.ok(userService.findAll()); // 200
    }

    // GET /api/v1/users/42
    @GetMapping("/{id}")
    public ResponseEntity<User> getById(@PathVariable Long id) {
        return userService.findById(id)
            .map(ResponseEntity::ok)            // 200
            .orElse(ResponseEntity.notFound().build()); // 404
    }

    // POST /api/v1/users
    @PostMapping
    public ResponseEntity<User> create(@Valid @RequestBody UserDTO dto) {
        User saved = userService.save(dto);
        URI location = URI.create("/api/v1/users/" + saved.getId());
        return ResponseEntity.created(location).body(saved); // 201
    }

    // PUT /api/v1/users/42
    @PutMapping("/{id}")
    public ResponseEntity<User> update(@PathVariable Long id, @RequestBody UserDTO dto) {
        return ResponseEntity.ok(userService.update(id, dto)); // 200
    }

    // DELETE /api/v1/users/42
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        userService.delete(id);
        return ResponseEntity.noContent().build(); // 204
    }
}

// GESTION GLOBALE DES EXCEPTIONS
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(ResourceNotFoundException ex) {
        return ResponseEntity.status(404).body(new ErrorResponse(404, ex.getMessage()));
    }
}`,
          language: 'java',
          tips: [
            '@RestController = @Controller + @ResponseBody',
            '@PathVariable = segment d\'URL (/users/{id})',
            '@RequestParam = query parameter (/users?name=xxx)',
            '@RequestBody = corps JSON de la requête',
            '@Valid = valider le DTO',
            '@RestControllerAdvice = gestion globale des exceptions',
          ]
        }
      ],
      quiz: [
        { q: 'Code HTTP pour créer une ressource (POST) ?', opts: ['200 OK', '201 Created', '202 Accepted', '204 No Content'], ans: 1 },
        { q: 'Code HTTP pour DELETE réussi sans corps ?', opts: ['200 OK', '201 Created', '204 No Content', '404 Not Found'], ans: 2 },
        { q: '@PathVariable est pour ?', opts: ['Paramètres GET (?key=val)', 'Corps JSON', 'Segment d\'URL (/users/{id})', 'Headers HTTP'], ans: 2 },
        { q: 'POST est idempotent ?', opts: ['Oui, comme DELETE', 'Non, crée une nouvelle ressource à chaque appel', 'Oui, comme GET', 'Oui, si données identiques'], ans: 1 },
        { q: '@RestControllerAdvice sert à ?', opts: ['Configurer les routes', 'Gérer les exceptions globalement', 'Créer des beans', 'Accéder à la BDD'], ans: 1 },
      ],
      exam: [
        { type: 'open', q: 'Quelles sont les bonnes pratiques des URLs REST ?', ans: '1. Noms (ressources) pas verbes : POST /users vs ❌ POST /createUser\n2. Pluriel et minuscules : /users vs ❌ /User\n3. Versionner : /api/v1/users\n4. Ressources imbriquées : /users/5/orders\n5. Query params pour filtres : /users?name=Yassine&page=0', hint: 'Noms pluriels, pas de verbes, versionner /api/v1/...' },
        { type: 'dropdown', q: 'POST est une opération idempotente', opts: ['Vrai', 'Faux'], ans: 1, hint: 'Faux. POST crée une nouvelle ressource à chaque appel → NON idempotent.' },
        { type: 'open', q: 'À quoi sert @RestControllerAdvice ? Donner un exemple.', ans: '@RestControllerAdvice centralise la gestion des exceptions pour toute l\'API. Avantages : pas de try/catch dans les contrôleurs, réponses d\'erreur uniformes.\n\n@RestControllerAdvice\npublic class GlobalExceptionHandler {\n    @ExceptionHandler(ResourceNotFoundException.class)\n    public ResponseEntity<ErrorResponse> handleNotFound(ResourceNotFoundException ex) {\n        return ResponseEntity.status(404).body(new ErrorResponse(404, ex.getMessage()));\n    }\n}', hint: '@RestControllerAdvice + @ExceptionHandler(Type.class) = gestion centralisée.' },
      ]
    }
  ]
}
