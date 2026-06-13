import { symfony } from './courses/symfony'
import { spring } from './courses/spring'

// ─── ADD NEW COURSES HERE ───────────────────────────────────
// import { react } from './react'
// import { docker } from './docker'
// import { typescript } from './typescript'

export const COURSES = [symfony, spring]

export const getCourse = (id) => COURSES.find(c => c.id === id)
export const getModule = (courseId, moduleId) => {
  const course = getCourse(courseId)
  return course?.modules.find(m => m.id === moduleId)
}

// Flashcards globales (partagées entre tous les cours)
export const FLASHCARDS = [
  // Symfony
  { course: 'symfony', q: '#[Route]', a: 'Attribut PHP 8 qui définit l\'URL déclenchant une méthode de contrôleur.' },
  { course: 'symfony', q: 'createNotFoundException()', a: 'Lance une exception HTTP 404 Not Found dans un contrôleur Symfony.' },
  { course: 'symfony', q: 'redirectToRoute()', a: 'Redirige vers une route nommée (retourne RedirectResponse).' },
  { course: 'symfony', q: 'isXmlHttpRequest()', a: 'Vérifie si la requête HTTP courante est de type AJAX.' },
  { course: 'symfony', q: '$request->request->get()', a: 'Récupère les données POST d\'un formulaire HTML.' },
  { course: 'symfony', q: 'debug:router', a: 'Commande CLI qui liste toutes les routes du projet Symfony.' },
  { course: 'symfony', q: '{{ variable }}', a: 'Affiche une variable ou expression en Twig (doubles accolades).' },
  { course: 'symfony', q: '{% extends %}', a: 'Hérite d\'un template parent en Twig.' },
  { course: 'symfony', q: 'asset()', a: 'Génère l\'URL d\'un fichier statique CSS/JS/image dans Twig.' },
  { course: 'symfony', q: 'path()', a: 'Génère une URL relative vers une route nommée dans Twig.' },
  { course: 'symfony', q: 'absolute_url()', a: 'Génère une URL absolue (avec https://domaine.com) dans Twig.' },
  { course: 'symfony', q: 'config/services.yaml', a: 'Fichier de configuration du Service Container Symfony.' },
  { course: 'symfony', q: 'autowire: true', a: 'Active l\'injection automatique des dépendances via les type hints PHP.' },
  { course: 'symfony', q: 'debug:container', a: 'Commande CLI qui liste tous les services enregistrés dans le container.' },
  { course: 'symfony', q: 'AbstractType', a: 'Classe de base dont héritent tous les formulaires Symfony (FormType).' },
  { course: 'symfony', q: 'createForm()', a: 'Méthode du contrôleur qui crée une instance de formulaire.' },
  { course: 'symfony', q: 'handleRequest()', a: 'Traite la requête HTTP et lie les données POST au formulaire Symfony.' },
  { course: 'symfony', q: 'isSubmitted() && isValid()', a: 'Vérifie que le formulaire est soumis ET que les données sont valides.' },
  { course: 'symfony', q: 'form_row()', a: 'Affiche label + input + erreurs d\'un champ de formulaire en Twig.' },
  { course: 'symfony', q: 'persist()', a: 'Marque un objet Doctrine pour insertion/mise à jour (avant flush).' },
  { course: 'symfony', q: 'flush()', a: 'Exécute toutes les opérations Doctrine en attente (INSERT, UPDATE, DELETE).' },
  { course: 'symfony', q: 'remove()', a: 'Marque un objet Doctrine pour suppression (à suivre de flush()).' },
  { course: 'symfony', q: 'make:entity', a: 'Commande qui génère une entité Doctrine avec ses getters et setters.' },
  { course: 'symfony', q: 'make:migration', a: 'Génère un fichier de migration SQL à partir des changements d\'entités.' },
  { course: 'symfony', q: 'UserInterface', a: 'Interface PHP obligatoire pour l\'entité User dans Symfony Security.' },
  // Spring
  { course: 'spring', q: 'Bean Spring', a: 'Objet dont le cycle de vie (création, injection, destruction) est géré par Spring.' },
  { course: 'spring', q: '@Component', a: 'Déclare une classe comme bean Spring. Ne peut pas être sur une interface.' },
  { course: 'spring', q: '@Autowired', a: 'Demande à Spring d\'injecter un bean. Optionnel sur constructeur unique depuis Spring 4.3.' },
  { course: 'spring', q: '@Qualifier', a: 'Spécifie quel bean injecter quand plusieurs candidats : @Qualifier("nomBean").' },
  { course: 'spring', q: '@Primary', a: 'Marque un bean comme prioritaire quand plusieurs candidats existent.' },
  { course: 'spring', q: 'Scope Singleton', a: 'Une seule instance partagée dans tout le contexte (défaut). Problème si état.' },
  { course: 'spring', q: 'Scope Prototype', a: 'Nouvelle instance créée à chaque injection. @Scope("prototype").' },
  { course: 'spring', q: '@PostConstruct', a: 'Code exécuté après création du bean et injection. Annotation JAKARTA, pas Spring.' },
  { course: 'spring', q: '@PreDestroy', a: 'Code exécuté avant destruction du bean. NON garanti en cas de crash.' },
  { course: 'spring', q: '@Value("${key}")', a: 'Injecte la valeur de la propriété "key" depuis application.properties.' },
  { course: 'spring', q: 'JdbcTemplate', a: 'Classe Spring qui simplifie JDBC : gère connexion, ressources et exceptions.' },
  { course: 'spring', q: 'RowMapper', a: 'Interface pour transformer une ligne ResultSet SQL en objet Java.' },
  { course: 'spring', q: '@RestController', a: '= @Controller + @ResponseBody. Sérialise automatiquement les retours en JSON.' },
  { course: 'spring', q: 'ResponseEntity', a: 'Contrôle total sur status HTTP, headers et body de la réponse Spring.' },
  { course: 'spring', q: '@RestControllerAdvice', a: 'Handler global d\'exceptions pour toute l\'API REST Spring Boot.' },
]
