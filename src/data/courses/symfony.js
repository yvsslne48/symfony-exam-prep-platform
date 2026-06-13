export const symfony = {
  id: 'symfony',
  title: 'Symfony',
  subtitle: 'PHP Framework',
  version: '7.x',
  color: 'violet',
  accent: '#7c3aed',
  icon: '⚡',
  description: 'Maîtrisez Symfony de A à Z : routing, Twig, DI, formulaires, Doctrine et sécurité.',
  modules: [
    {
      id: 'routing',
      title: 'Contrôleurs & Routing',
      icon: '🔀',
      color: 'violet',
      lessons: [
        {
          title: 'Structure d\'un projet Symfony',
          body: `<p>Un projet Symfony a une structure de dossiers précise. Voici les éléments importants :</p>`,
          code: `symfony_project/
├── bin/          // bin/console — commandes CLI
├── config/       // Configuration (routes, services...)
│   ├── packages/
│   └── services.yaml
├── public/       // Seul dossier web accessible
│   └── index.php
├── src/          // Votre code PHP
│   ├── Controller/
│   ├── Entity/
│   ├── Form/
│   ├── Repository/
│   └── Service/
├── templates/    // Templates Twig (.html.twig)
├── var/          // Cache et logs (auto-généré)
└── vendor/       // Dépendances Composer`,
          language: 'bash',
          tips: [
            'public/ → seul dossier exposé sur le web',
            'var/cache/ → généré automatiquement, ne jamais modifier',
            'infra/ et styles/ → N\'existent PAS dans Symfony par défaut',
          ]
        },
        {
          title: 'L\'attribut #[Route]',
          body: `<p>L'attribut <code>#[Route]</code> définit une URL qui déclenche une méthode de contrôleur. Il remplace les anciens fichiers YAML de routing.</p>`,
          code: `<?php
namespace App\\Controller;

use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;
use Symfony\\Component\\HttpFoundation\\Response;
use Symfony\\Component\\Routing\\Attribute\\Route;

class UserController extends AbstractController
{
    // Route simple
    #[Route('/users', name: 'app_users_list', methods: ['GET'])]
    public function list(): Response
    {
        return $this->render('user/list.html.twig');
    }

    // Route avec paramètre + contrainte
    #[Route('/users/{id}', name: 'app_user_show',
        requirements: ['id' => '\\d+'],
        methods: ['GET'],
        priority: 10
    )]
    public function show(int $id): Response
    {
        return $this->render('user/show.html.twig', ['id' => $id]);
    }
}`,
          language: 'php',
          tips: [
            'name → optionnel mais fortement recommandé',
            'methods → restreint aux méthodes HTTP',
            'requirements → valide le paramètre avec une regex',
            'priority → contrôle l\'ordre d\'évaluation (+ haute = en premier)',
          ]
        },
        {
          title: 'Méthodes de réponse (AbstractController)',
          body: `<p>AbstractController offre plusieurs méthodes pour retourner différents types de réponses HTTP.</p>`,
          code: `<?php
class MyController extends AbstractController
{
    // HTML via Twig
    public function page(): Response
    {
        return $this->render('page.html.twig', ['title' => 'Ma page']);
    }

    // JSON (pour API REST)
    public function api(): JsonResponse
    {
        return $this->json(['success' => true, 'data' => []]);
    }

    // Redirection interne
    public function goHome(): RedirectResponse
    {
        return $this->redirectToRoute('app_home');
    }

    // Redirection URL externe
    public function goExt(): RedirectResponse
    {
        return $this->redirect('https://symfony.com');
    }

    // Erreur 404
    public function notFound(): never
    {
        throw $this->createNotFoundException('Page introuvable');
    }
}`,
          language: 'php',
          tips: [
            'render() → HTML (Twig)',
            'json() → JsonResponse (API)',
            'redirectToRoute() → redirection interne',
            'redirect() → redirection URL externe',
            'createNotFoundException() → erreur 404',
          ]
        },
        {
          title: 'L\'objet Request',
          body: `<p>L'objet <code>Request</code> encapsule toutes les données de la requête HTTP entrante.</p>`,
          code: `<?php
use Symfony\\Component\\HttpFoundation\\Request;

#[Route('/form', name: 'app_form', methods: ['GET', 'POST'])]
public function form(Request $request): Response
{
    // Méthode HTTP
    if ($request->isMethod('POST')) { /* ... */ }
    if ($request->isMethod('DELETE')) { /* ... */ }

    // Vérifier AJAX
    if ($request->isXmlHttpRequest()) {
        return $this->json(['ok' => true]);
    }

    // Données POST
    $name = $request->request->get('name');
    $email = $request->request->get('email', 'default@mail.com');

    // Paramètres GET (?page=2)
    $page = $request->query->get('page', 1);

    // Headers
    $token = $request->headers->get('Authorization');

    return $this->render('form.html.twig');
}`,
          language: 'php',
          tips: [
            '$request->request → données POST',
            '$request->query → paramètres GET',
            '$request->isXmlHttpRequest() → détecte AJAX',
            '$request->isMethod(\'DELETE\') → vérifie la méthode',
          ]
        },
        {
          title: 'Commandes CLI importantes',
          body: `<p>Symfony fournit des commandes <code>bin/console</code> indispensables pour déboguer et gérer le projet.</p>`,
          code: `# Lister toutes les routes
php bin/console debug:router

# Inspecter une route précise
php bin/console debug:router app_user_show

# Tester si une URL matche une route
php bin/console router:match /users/42

# Vider le cache
php bin/console cache:clear

# Lister les services du container
php bin/console debug:container

# Créer un contrôleur
php bin/console make:controller UserController

# Créer une entité
php bin/console make:entity Product`,
          language: 'bash',
          tips: [
            'debug:router → toutes les routes avec leurs propriétés',
            'router:match → tester une URL',
            'debug:container → tous les services disponibles',
            'make:* → générateurs de code (controller, entity, form...)',
          ]
        }
      ],
      quiz: [
        { q: 'Quel dossier Symfony contient les templates Twig ?', opts: ['src/', 'templates/', 'views/', 'public/twig/'], ans: 1 },
        { q: 'Comment déclencher une erreur 404 dans un contrôleur ?', opts: ['return new Response(404)', 'throw $this->createNotFoundException()', 'return $this->notFound()', 'throw new Exception(404)'], ans: 1 },
        { q: 'Quelle méthode retourne du JSON dans AbstractController ?', opts: ['render()', 'jsonResponse()', 'json()', 'apiResponse()'], ans: 2 },
        { q: 'Comment vérifier si la requête est AJAX ?', opts: ['$request->isAjax()', '$request->isXmlHttpRequest()', '$request->ajax()', '$request->checkAjax()'], ans: 1 },
        { q: 'Quelle commande liste toutes les routes ?', opts: ['php bin/console routes:list', 'php bin/console debug:router', 'php bin/console show:routes', 'php bin/console route:debug'], ans: 1 },
        { q: 'L\'attribut #[Route] doit-il obligatoirement avoir un name ?', opts: ['Oui, obligatoire', 'Non, optionnel mais recommandé', 'Oui, sinon erreur 500', 'Non, inutile'], ans: 1 },
      ],
      exam: [
        { type: 'open', q: 'Quels dossiers ne font PAS partie de la structure initiale de Symfony ?', ans: 'infra/ et styles/ ne font pas partie de la structure initiale de Symfony. Les dossiers présents sont : bin/, config/, public/, src/, templates/, var/, vendor/.', hint: 'infra/ et styles/ n\'existent pas par défaut.' },
        { type: 'dropdown', q: 'L\'attribut #[Route] doit impérativement avoir un name configuré explicitement', opts: ['Vrai', 'Faux'], ans: 1, hint: 'Faux. Le name est optionnel mais fortement recommandé.' },
        { type: 'open', q: 'Quelle commande permet de lister l\'ensemble des routes d\'un projet Symfony ?', ans: 'php bin/console debug:router', hint: 'php bin/console debug:router' },
        { type: 'open', q: 'Comment vérifier si la requête HTTP courante est de type Ajax ?', ans: '$request->isXmlHttpRequest() — Retourne true si la requête contient l\'en-tête X-Requested-With: XMLHttpRequest.', hint: '$request->isXmlHttpRequest()' },
        { type: 'open', q: 'Comment récupérer les paramètres envoyés en POST via un formulaire ?', ans: '$request->request->get(\'nom_champ\') — L\'objet $request->request correspond aux données POST.', hint: '$request->request->get(\'champ\')' },
        { type: 'open', q: 'Comment rediriger l\'utilisateur vers une autre route ? (méthode)', ans: 'redirectToRoute(\'nom_route\') — Méthode de AbstractController qui génère une RedirectResponse.', hint: 'redirectToRoute(\'nom_route\')' },
      ]
    },
    {
      id: 'twig',
      title: 'Templates Twig',
      icon: '🌿',
      color: 'emerald',
      lessons: [
        {
          title: 'Syntaxe de base Twig',
          body: `<p>Twig utilise 3 types de balises spéciales pour séparer la logique de l'affichage.</p>`,
          code: `{# 1. AFFICHER une variable ou expression #}
{{ variable }}
{{ 'Bonjour ' ~ user.name ~ ' !' }}
{{ 10 + 5 }}

{# 2. INSTRUCTIONS (boucles, conditions, blocs) #}
{% if user.isAdmin %}
    <a href="/admin">Administration</a>
{% elseif user.isPremium %}
    <span>Premium</span>
{% else %}
    <span>Gratuit</span>
{% endif %}

{% for product in products %}
    <div>{{ product.name }} — {{ product.price }}€</div>
{% else %}
    <p>Aucun produit.</p>
{% endfor %}

{# 3. COMMENTAIRES (non visibles dans le HTML) #}
{# Ce commentaire n'apparaît pas #}

{# FILTRES #}
{{ user.name | upper }}           {# MAJUSCULES #}
{{ price | number_format(2) }}    {# 1 234.56 #}
{{ date | date('d/m/Y') }}       {# 04/06/2026 #}
{{ items | length }}              {# nombre d'éléments #}`,
          language: 'twig',
          tips: [
            '{{ }} → afficher une valeur',
            '{% %} → instructions (if, for, block...)',
            '{# #} → commentaires (invisibles)',
            '| → appliquer un filtre',
          ]
        },
        {
          title: 'Héritage de templates',
          body: `<p>L'héritage permet de définir une mise en page commune et de la réutiliser sur toutes les pages.</p>`,
          code: `{# templates/base.html.twig — LAYOUT PARENT #}
<!DOCTYPE html>
<html>
<head>
    <title>{% block title %}Mon Site{% endblock %}</title>
    {% block stylesheets %}
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    {% endblock %}
</head>
<body>
    <nav><!-- Navigation commune --></nav>
    <main>
        {% block body %}{% endblock %}
    </main>
    {% block javascripts %}
        <script src="{{ asset('js/app.js') }}"></script>
    {% endblock %}
</body>
</html>

{# templates/user/list.html.twig — PAGE ENFANT #}
{% extends 'base.html.twig' %}

{% block title %}Utilisateurs — Mon Site{% endblock %}

{% block body %}
    <h1>Utilisateurs ({{ users | length }})</h1>
    {% for user in users %}
        <p>{{ user.name }} — {{ user.email }}</p>
    {% endfor %}
{% endblock %}

{# Ajouter du CSS spécifique #}
{% block stylesheets %}
    {{ parent() }}
    <link rel="stylesheet" href="{{ asset('css/users.css') }}">
{% endblock %}`,
          language: 'twig',
          tips: [
            'extends → hérite du template parent',
            'block → zone remplaçable par les enfants',
            '{{ parent() }} → inclut le contenu du bloc parent',
            'Intérêt : éviter la duplication du HTML commun',
          ]
        },
        {
          title: 'Fonctions Twig essentielles',
          body: `<p>Twig fournit des fonctions indispensables pour générer des URLs et inclure des ressources.</p>`,
          code: `{# path() — URL relative #}
<a href="{{ path('app_users_list') }}">Utilisateurs</a>
{# → /users #}

<a href="{{ path('app_user_show', {id: user.id}) }}">Voir</a>
{# → /users/42 #}

{# absolute_url() — URL absolue #}
{{ absolute_url(path('app_home')) }}
{# → https://monsite.com/ #}

{# asset() — CSS, JS, Images #}
<link rel="stylesheet" href="{{ asset('css/app.css') }}">
<script src="{{ asset('js/app.js') }}"></script>
<img src="{{ asset('images/logo.png') }}" alt="Logo">

{# include() — Template partielle #}
{{ include('partials/_navbar.html.twig') }}
{{ include('partials/_card.html.twig', {user: user}) }}

{# Utilisateur connecté en Twig (OUI, c'est possible !) #}
{% if app.user %}
    Bonjour {{ app.user.email }} !
{% endif %}

{# Vérifier un rôle #}
{% if is_granted('ROLE_ADMIN') %}
    <a href="/admin">Admin</a>
{% endif %}`,
          language: 'twig',
          tips: [
            'path() → URL relative (/users/42)',
            'absolute_url() → URL complète (https://...)',
            'asset() → fichiers statiques CSS/JS/images',
            'include() → inclure un composant réutilisable',
            'app.user → utilisateur connecté dans Twig',
          ]
        }
      ],
      quiz: [
        { q: 'Comment afficher une variable en Twig ?', opts: ['<? echo $var ?>', '{% var %}', '{{ var }}', '[[ var ]]'], ans: 2 },
        { q: 'Quelle fonction génère une URL absolue (http://...) ?', opts: ['url()', 'path()', 'absolute_url()', 'full_url()'], ans: 2 },
        { q: 'Quelle fonction intègre les ressources CSS/JS/images ?', opts: ['resource()', 'include()', 'asset()', 'src()'], ans: 2 },
        { q: 'Comment hériter d\'un template parent ?', opts: ['{% include \'base\' %}', '{% extends \'base.html.twig\' %}', '{% inherit \'base\' %}', '{% parent \'base\' %}'], ans: 1 },
        { q: 'Est-il possible de récupérer l\'utilisateur connecté en Twig ?', opts: ['Non, seulement en PHP', 'Oui, via app.user', 'Oui, via getUser()', 'Non, jamais'], ans: 1 },
        { q: 'Comment inclure un template partiel ?', opts: ['require()', 'import()', 'include()', 'use()'], ans: 2 },
      ],
      exam: [
        { type: 'open', q: 'Comment peut-on afficher une variable ou un texte en Twig ?', ans: '{{ variable }} — Les doubles accolades permettent d\'afficher n\'importe quelle variable ou expression.', hint: '{{ variable }} ou {{ \'texte\' }}' },
        { type: 'open', q: 'Quel est l\'intérêt de l\'héritage de templates en Twig ?', ans: 'Éviter la duplication du code HTML commun (header, nav, footer). Une template parente (base.html.twig) définit la structure commune avec des blocs. Les enfants héritent avec {% extends %} et remplissent les blocs.', hint: 'Réutiliser la structure commune, éviter la duplication.' },
        { type: 'dropdown', q: 'Il est possible de récupérer l\'utilisateur connecté en Twig et pas seulement en PHP', opts: ['Vrai', 'Faux'], ans: 0, hint: 'Vrai. Via app.user en Twig.' },
        { type: 'open', q: 'Écrire la fonction Twig permettant de générer une URL absolue (http://www.example.com/page)', ans: 'absolute_url(path(\'nom_route\')) — Exemple : {{ absolute_url(path(\'app_home\')) }} génère https://monsite.com/', hint: 'absolute_url(path(\'nom_route\'))' },
        { type: 'open', q: 'Comment peut-on redéfinir des parties d\'un template ?', ans: 'Avec les blocs {% block nom %}...{% endblock %}. Dans la template enfant, on redéfinit avec {% block nom %}nouveau contenu{% endblock %}. {{ parent() }} inclut le contenu parent.', hint: '{% block nom %}contenu{% endblock %} dans la template enfant.' },
      ]
    },
    {
      id: 'di',
      title: 'Injection de Dépendances',
      icon: '⚙️',
      color: 'orange',
      lessons: [
        {
          title: 'Le Service Container',
          body: `<p>Le <strong>Service Container</strong> est le cœur de Symfony. Il instancie et gère tous les services de l'application.</p>`,
          code: `# config/services.yaml

parameters:
    app.admin_email: admin@example.com

services:
    _defaults:
        autowire: true        # Injection automatique
        autoconfigure: true   # Tags automatiques

    # Enregistre TOUS les fichiers src/ comme services
    App\\:
        resource: '../src/'
        exclude:
            - '../src/Entity/'
            - '../src/Kernel.php'

    # Service avec arguments manuels
    App\\Service\\Mailer:
        arguments:
            $apiKey: '%env(MAILER_KEY)%'
            $adminEmail: '%app.admin_email%'

    # Alias pour une interface
    App\\NotifierInterface: '@App\\Service\\EmailNotifier'`,
          language: 'yaml',
          tips: [
            'autowire: true → injection automatique via type hints',
            'autoconfigure: true → tags automatiques',
            'App\\ resource → tous les fichiers src/ deviennent services',
            'Fichier : config/services.yaml',
          ]
        },
        {
          title: 'Autowiring — Injection automatique',
          body: `<p>L'autowiring analyse les types des arguments du constructeur et injecte automatiquement les bons services.</p>`,
          code: `<?php
namespace App\\Service;

use App\\Repository\\ProductRepository;
use Psr\\Log\\LoggerInterface;

class OrderService
{
    // Spring voit les types et injecte automatiquement !
    public function __construct(
        private readonly ProductRepository $productRepo,
        private readonly LoggerInterface $logger,
        private readonly Mailer $mailer
    ) {}

    public function createOrder(int $productId): void
    {
        $product = $this->productRepo->find($productId);
        $this->logger->info('Commande créée: ' . $product->getName());
    }
}

// Dans le contrôleur — aussi de l'autowiring !
class OrderController extends AbstractController
{
    public function __construct(
        private readonly OrderService $orderService
    ) {}
}`,
          language: 'php',
          tips: [
            'Autowiring fonctionne grâce aux type hints PHP',
            'Symfony lit le constructeur et résout les dépendances',
            'php bin/console debug:container → services disponibles',
            'php bin/console debug:autowiring → types autowirables',
          ]
        },
        {
          title: 'Interfaces & Binding',
          body: `<p>Utiliser des interfaces comme type d'argument offre plus de flexibilité. Mais Symfony doit savoir quelle implémentation injecter.</p>`,
          code: `<?php
// Interface (contrat)
interface NotifierInterface {
    public function send(string $to, string $message): void;
}

// Implémentation 1
class EmailNotifier implements NotifierInterface {
    public function send(string $to, string $message): void { /* email */ }
}

// Implémentation 2
class SmsNotifier implements NotifierInterface {
    public function send(string $to, string $message): void { /* SMS */ }
}

// Service qui utilise l'interface
class AlertService {
    public function __construct(
        private NotifierInterface $notifier  // Interface !
    ) {}
}

# ============================================
# config/services.yaml — configurer le binding

services:
    # Option A : alias global
    App\\NotifierInterface: '@App\\Service\\EmailNotifier'

    # Option B : binding spécifique
    App\\Service\\AlertService:
        arguments:
            $notifier: '@App\\Service\\SmsNotifier'`,
          language: 'php',
          note: '❌ ERREUR CLASSIQUE :\n"Cannot autowire argument $notifier... it references interface NotifierInterface but no such service exists. You should maybe alias this interface to one of these existing services."\n\n✅ SOLUTION : Créer un alias dans services.yaml'
        }
      ],
      quiz: [
        { q: 'Quel fichier configure le Service Container ?', opts: ['config/container.yaml', 'config/services.yaml', 'config/di.yaml', 'src/services.yaml'], ans: 1 },
        { q: 'Que signifie "autowire: true" ?', opts: ['Active le cache', 'Injection automatique via type hints', 'Active la sécurité', 'Optimise les routes'], ans: 1 },
        { q: 'Quelle commande liste les services du container ?', opts: ['php bin/console services:list', 'php bin/console debug:container', 'php bin/console show:services', 'php bin/console container:debug'], ans: 1 },
        { q: 'Que se passe-t-il si Symfony ne peut pas résoudre une interface ?', opts: ['Il utilise null', 'RuntimeException est lancée', 'Il crée une implémentation vide', 'Il ignore la dépendance'], ans: 1 },
      ],
      exam: [
        { type: 'open', q: 'Quel est le rôle du Service Container ?', ans: 'Le Service Container est le cœur de Symfony. Il instancie, configure et injecte automatiquement tous les services de l\'application.', hint: 'Gère et injecte automatiquement tous les services.' },
        { type: 'open', q: 'Donner le nom (chemin et nom) du fichier de configuration du Service Container', ans: 'config/services.yaml', hint: 'config/services.yaml' },
        { type: 'open', q: 'C\'est quoi l\'Autowiring ?', ans: 'L\'Autowiring est un mécanisme qui permet à Symfony d\'injecter automatiquement les dépendances en analysant les type hints PHP des arguments du constructeur. Plus besoin de configurer manuellement les injections.', hint: 'Injection automatique via les type hints PHP du constructeur.' },
        { type: 'open', q: 'Quel est l\'intérêt de la configuration App\\ + resource: \'../src/\' dans services.yaml ?', ans: 'Enregistre automatiquement TOUS les fichiers du dossier src/ comme services dans le container. Symfony scanne src/ et crée un service pour chaque classe PHP.', hint: 'Enregistre automatiquement tous les fichiers src/ comme services.' },
      ]
    },
    {
      id: 'doctrine',
      title: 'Doctrine & Base de données',
      icon: '🗄️',
      color: 'blue',
      lessons: [
        {
          title: 'Créer une entité Doctrine',
          body: `<p>Une <strong>entité</strong> est une classe PHP mappée à une table en BDD. Doctrine génère automatiquement le SQL.</p>`,
          code: `# Commandes essentielles
php bin/console make:entity Product
php bin/console doctrine:database:create
php bin/console make:migration
php bin/console doctrine:migrations:migrate

<?php
// src/Entity/Product.php
namespace App\\Entity;

use App\\Repository\\ProductRepository;
use Doctrine\\ORM\\Mapping as ORM;
use Symfony\\Component\\Validator\\Constraints as Assert;

#[ORM\\Entity(repositoryClass: ProductRepository::class)]
#[ORM\\Table(name: 'products')]
class Product
{
    #[ORM\\Id, ORM\\GeneratedValue, ORM\\Column]
    private ?int $id = null;

    #[ORM\\Column(length: 255)]
    #[Assert\\NotBlank]
    private ?string $name = null;

    #[ORM\\Column(type: 'decimal', precision: 10, scale: 2)]
    private ?float $price = null;

    #[ORM\\Column(type: 'text', nullable: true)]
    private ?string $description = null;

    // Getters & Setters générés par make:entity
    public function getId(): ?int { return $this->id; }
    public function getName(): ?string { return $this->name; }
    public function setName(string $name): static {
        $this->name = $name;
        return $this;
    }
}`,
          language: 'php',
          tips: [
            'make:entity génère la classe + getters/setters',
            '#[ORM\\Column] définit le mapping PHP→SQL',
            'make:migration → génère le fichier SQL des changements',
            'doctrine:migrations:migrate → applique en BDD',
          ]
        },
        {
          title: 'CRUD avec EntityManager',
          body: `<p>L'EntityManager gère les opérations d'écriture. Le Repository gère les lectures.</p>`,
          code: `<?php
use Doctrine\\ORM\\EntityManagerInterface;

class ProductController extends AbstractController
{
    public function __construct(
        private EntityManagerInterface $em,
        private ProductRepository $productRepo
    ) {}

    // CREATE (INSERT)
    public function create(): Response
    {
        $product = new Product();
        $product->setName('iPhone 16');
        $product->setPrice(1099.99);

        $this->em->persist($product);  // marquer pour insertion
        $this->em->flush();            // exécuter le SQL INSERT

        return $this->redirectToRoute('products_list');
    }

    // READ (SELECT)
    public function list(): Response
    {
        $all     = $this->productRepo->findAll();
        $one     = $this->productRepo->find(42);
        $by      = $this->productRepo->findBy(['name' => 'iPhone']);
        $ordered = $this->productRepo->findBy([], ['price' => 'DESC']);
        return $this->render('product/list.html.twig', ['products' => $all]);
    }

    // UPDATE
    public function update(Product $product): Response
    {
        $product->setPrice(999.99);
        $this->em->flush(); // pas besoin de persist() pour un UPDATE !
        return $this->redirectToRoute('products_list');
    }

    // DELETE
    public function delete(Product $product): Response
    {
        $this->em->remove($product); // marquer pour suppression
        $this->em->flush();          // exécuter le SQL DELETE
        return $this->redirectToRoute('products_list');
    }
}`,
          language: 'php',
          tips: [
            'persist() + flush() → INSERT',
            'modifier + flush() → UPDATE (pas de persist !)',
            'remove() + flush() → DELETE',
            'flush() exécute TOUTES les opérations en attente',
          ]
        },
        {
          title: 'Relations Doctrine',
          body: `<p>Doctrine gère les relations entre entités : OneToOne, OneToMany, ManyToMany.</p>`,
          code: `<?php
// OneToOne — Un User ↔ Un Profil (1:1)
class User {
    #[ORM\\OneToOne(targetEntity: Profile::class, cascade: ['persist'])]
    #[ORM\\JoinColumn(nullable: false)]
    private Profile $profile;
}

// OneToMany — Un Auteur ↔ Plusieurs Livres (1:N)
class Author {
    #[ORM\\OneToMany(targetEntity: Book::class, mappedBy: 'author')]
    private Collection $books;
}
class Book {
    #[ORM\\ManyToOne(targetEntity: Author::class, inversedBy: 'books')]
    #[ORM\\JoinColumn(nullable: false)]
    private Author $author;
}

// ManyToMany — Produits ↔ Catégories (N:N)
class Product {
    #[ORM\\ManyToMany(targetEntity: Category::class, inversedBy: 'products')]
    #[ORM\\JoinTable(name: 'product_categories')]
    private Collection $categories;
}
class Category {
    #[ORM\\ManyToMany(targetEntity: Product::class, mappedBy: 'categories')]
    private Collection $products;
}`,
          language: 'php',
          tips: [
            'OneToOne → 1 pour 1 (User ↔ Profile)',
            'OneToMany / ManyToOne → 1 pour N (Author → Books)',
            'ManyToMany → N pour N + table intermédiaire auto',
            'cascade: [\'persist\'] → persiste automatiquement les objets liés',
          ]
        }
      ],
      quiz: [
        { q: 'Quelle commande crée une entité Doctrine ?', opts: ['php bin/console make:entity', 'php bin/console create:entity', 'php bin/console doctrine:entity', 'php bin/console generate:entity'], ans: 0 },
        { q: 'Quelle commande génère une migration ?', opts: ['php bin/console doctrine:migrate', 'php bin/console make:migration', 'php bin/console migration:create', 'php bin/console db:migrate'], ans: 1 },
        { q: 'Quelle méthode prépare pour l\'insertion ?', opts: ['save()', 'insert()', 'persist()', 'add()'], ans: 2 },
        { q: 'Pour un UPDATE, faut-il appeler persist() ?', opts: ['Oui, toujours', 'Non, seulement flush() si déjà managée', 'Oui, puis flush()', 'Non, automatique'], ans: 1 },
        { q: 'Un auteur → plusieurs livres. Quelle relation ?', opts: ['OneToOne', 'ManyToMany', 'OneToMany', 'ManyToOne'], ans: 2 },
      ],
      exam: [
        { type: 'open', q: 'Écrire la commande permettant de créer une base de données', ans: 'php bin/console doctrine:database:create', hint: 'php bin/console doctrine:database:create' },
        { type: 'open', q: 'Comment créer une entité Doctrine en Symfony ?', ans: 'php bin/console make:entity NomEntite — Génère la classe entité avec les attributs ORM, les getters et setters automatiquement.', hint: 'php bin/console make:entity NomEntite' },
        { type: 'checkbox', q: 'Sélectionner les bonnes commandes pour mettre à jour la structure de la BDD', opts: ['php bin/console doctrine:migrations:migrate', 'php bin/console doctrine:database:update', 'php bin/console make:migration'], ans: [0, 2], hint: 'make:migration puis doctrine:migrations:migrate. database:update est déconseillé en production.' },
        { type: 'dropdown', q: 'Pour l\'ajout d\'un enregistrement, il suffit d\'appeler flush()', opts: ['Vrai', 'Faux'], ans: 1, hint: 'Faux. Il faut d\'abord persist($entity) puis flush().' },
        { type: 'open', q: 'Nous souhaitons supprimer un enregistrement. Donner les appels nécessaires', ans: '$em->remove($entity);\n$em->flush();\nD\'abord remove() pour marquer, puis flush() pour exécuter le DELETE SQL.', hint: '$em->remove($entity); puis $em->flush();' },
        { type: 'open', q: 'Quelle est la différence entre OneToOne et OneToMany ?', ans: 'OneToOne : relation 1 pour 1 (ex: User ↔ Profile). Chaque entité ne peut être liée qu\'à une seule autre.\nOneToMany : relation 1 pour N (ex: Auteur → Livres). Une entité peut être liée à plusieurs entités de l\'autre côté.', hint: 'OneToOne = 1↔1, OneToMany = 1↔N' },
      ]
    },
    {
      id: 'security',
      title: 'Sécurité Symfony',
      icon: '🔒',
      color: 'red',
      lessons: [
        {
          title: 'Configuration de la sécurité',
          body: `<p>La sécurité Symfony repose sur 2 axes : <strong>Authentification</strong> (Qui es-tu ?) et <strong>Autorisation</strong> (As-tu le droit ?).</p>`,
          code: `# config/packages/security.yaml

security:
    password_hashers:
        App\\Entity\\User:
            algorithm: auto  # bcrypt ou argon2i

    providers:
        app_user_provider:
            entity:
                class: App\\Entity\\User
                property: email  # identifiant = email

    firewalls:
        dev:
            pattern: ^/(_(profiler|wdt)|css|images|js)/
            security: false
        main:
            lazy: true
            provider: app_user_provider
            custom_authenticator: App\\Security\\AppAuthenticator
            form_login:
                login_path: app_login
                check_path: app_login
            logout:
                path: app_logout
                target: app_login

    access_control:
        - { path: ^/admin, roles: ROLE_ADMIN }
        - { path: ^/profile, roles: ROLE_USER }`,
          language: 'yaml',
          tips: [
            'Authentification → vérifier l\'identité (login)',
            'Autorisation → vérifier les droits (rôles)',
            'Firewalls → zones de sécurité de l\'application',
            'access_control → restriction par URL/rôle',
          ]
        },
        {
          title: 'UserInterface & Authenticator',
          body: `<p>L'entité User doit implémenter <code>UserInterface</code>. L'Authenticator gère le processus complet d'authentification.</p>`,
          code: `<?php
// php bin/console make:user

class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    // Identifiant unique
    public function getUserIdentifier(): string {
        return (string) $this->email;
    }

    // Rôles (toujours inclure ROLE_USER !)
    public function getRoles(): array {
        $roles = $this->roles;
        $roles[] = 'ROLE_USER';
        return array_unique($roles);
    }

    public function eraseCredentials(): void { /* effacer données sensibles */ }
    public function getPassword(): ?string { return $this->password; }
}

// Authenticator — méthodes à implémenter :
class AppAuthenticator extends AbstractLoginFormAuthenticator
{
    // 1. Cette requête doit-elle être authentifiée ?
    public function supports(Request $request): bool { ... }

    // 2. Créer le Passport (credentials)
    public function authenticate(Request $request): Passport
    {
        return new Passport(
            new UserBadge($email),
            new PasswordCredentials($password),
            [new CsrfTokenBadge('authenticate', $csrf)]
        );
    }

    // 3. Après succès
    public function onAuthenticationSuccess(...): Response { ... }

    // 4. Après échec
    public function onAuthenticationFailure(...): Response { ... }
}`,
          language: 'php',
          tips: [
            'UserInterface = contrat obligatoire pour Symfony Security',
            'getRoles() doit TOUJOURS inclure ROLE_USER par défaut',
            '4 méthodes Authenticator : supports, authenticate, onSuccess, onFailure',
            'php bin/console make:user génère tout automatiquement',
          ]
        },
        {
          title: 'Vérifier les rôles — 5 façons',
          body: `<p>Il existe plusieurs façons de vérifier les droits d'un utilisateur selon le contexte.</p>`,
          code: `<?php
// 1. Exception 403 si pas le rôle
$this->denyAccessUnlessGranted('ROLE_ADMIN');

// 2. Boolean
if ($this->isGranted('ROLE_ADMIN')) { ... }

// 3. Attribut PHP sur la méthode (recommandé)
#[IsGranted('ROLE_ADMIN')]
public function adminPanel(): Response { ... }

// 4. Attribut PHP sur la classe entière
#[IsGranted('ROLE_USER')]
class UserController extends AbstractController { ... }

// 5. YAML — access_control dans security.yaml
// access_control:
//     - { path: ^/admin, roles: ROLE_ADMIN }

// ====================================
// En Twig :
// {% if is_granted('ROLE_ADMIN') %}
//     <a href="/admin">Admin</a>
// {% endif %}

// ====================================
// Récupérer l'utilisateur — 3 façons :
// PHP (contrôleur) :
$user = $this->getUser();

// Via Security :
$user = $security->getUser(); // injecter Security $security

// Twig :
// {{ app.user.email }}`,
          language: 'php',
          tips: [
            'denyAccessUnlessGranted() → lève exception 403',
            'isGranted() → retourne true/false',
            '#[IsGranted] → attribut PHP (recommandé)',
            'is_granted() → dans Twig',
            'access_control → dans security.yaml',
          ]
        }
      ],
      quiz: [
        { q: 'Quels sont les 2 axes de la sécurité Symfony ?', opts: ['Login et Logout', 'Authentification et Autorisation', 'UserInterface et UserProvider', 'Firewall et AccessControl'], ans: 1 },
        { q: 'Quelle commande crée l\'entité User Symfony ?', opts: ['make:entity User', 'make:user', 'security:create-user', 'make:security'], ans: 1 },
        { q: 'getRoles() doit toujours inclure ?', opts: ['ROLE_ADMIN', 'ROLE_USER', 'ROLE_BASE', 'ROLE_DEFAULT'], ans: 1 },
        { q: 'Quelle méthode de l\'Authenticator crée le Passport ?', opts: ['supports()', 'login()', 'authenticate()', 'check()'], ans: 2 },
        { q: 'Comment restreindre /admin aux admins en YAML ?', opts: ['{ path: ^/admin, role: ADMIN }', '{ path: ^/admin, roles: ROLE_ADMIN }', '{ url: /admin, auth: ROLE_ADMIN }', '{ route: admin, roles: [ADMIN] }'], ans: 1 },
      ],
      exam: [
        { type: 'open', q: 'Quels sont les grands axes de la sécurité en Symfony ?', ans: '1. Authentification : vérifier l\'identité de l\'utilisateur (Qui es-tu ?)\n2. Autorisation : vérifier si l\'utilisateur a le droit d\'accéder à une ressource (As-tu le droit ?)', hint: 'Authentification (qui ?) + Autorisation (le droit ?)' },
        { type: 'open', q: 'Donner la commande permettant de créer un utilisateur Symfony', ans: 'php bin/console make:user — Génère l\'entité User avec UserInterface, les propriétés email/password/roles et le UserProvider configuré.', hint: 'php bin/console make:user' },
        { type: 'checkbox', q: 'Sélectionner les méthodes à implémenter pour un Authenticator', opts: ['supports()', 'connect()', 'logout()', 'authenticate()', 'onAuthenticationSuccess()', 'redirectOnFailure()', 'onAuthenticationFailure()'], ans: [0, 3, 4, 6], hint: 'supports(), authenticate(), onAuthenticationSuccess(), onAuthenticationFailure()' },
        { type: 'open', q: 'Comment vérifier si un utilisateur a un certain Role ? Donner toutes les façons', ans: '1. $this->denyAccessUnlessGranted(\'ROLE_ADMIN\') → exception 403\n2. $this->isGranted(\'ROLE_ADMIN\') → boolean\n3. #[IsGranted(\'ROLE_ADMIN\')] → attribut PHP\n4. {% if is_granted(\'ROLE_ADMIN\') %} → Twig\n5. access_control dans security.yaml', hint: '5 façons : denyAccessUnlessGranted, isGranted, #[IsGranted], is_granted() Twig, access_control YAML.' },
        { type: 'open', q: 'Comment restreindre l\'accès par rôle en YAML', ans: 'Dans security.yaml :\naccess_control:\n    - { path: ^/admin, roles: ROLE_ADMIN }\n    - { path: ^/profile, roles: ROLE_USER }', hint: 'access_control: - { path: ^/admin, roles: ROLE_ADMIN }' },
      ]
    }
  ]
}
