# Weather App

## Introduction

Cette application web permet de consulter les données météorologiques d'une ville. Vous pouvez visualiser les prévisions météo pour les 7 prochains jours et les détails heure par heure pour une journée spécifique. L'application est développée en utilisant React, TypeScript et Tailwind CSS pour une expérience utilisateur moderne et réactive.

## Technologies Utilisées

### Outils

- **ESLint**: Utilisé pour le linting du code afin d'assurer la qualité et la cohérence du code.
- **Prettier**: Utilisé pour le formatage automatique du code.
- **Vite**: Utilisé pour le buil.

### Bibliothèques

- **Recharts**: Bibliothèque pour la création de graphiques réactifs.
- **Axios**: Bibliothèque pour effectuer des requêtes HTTP.
- **Tailwind CSS**: Utilisé pour la gestion des styles de l'application.

## Architecture du Projet

### Description des Composants

- **CitySelector.tsx**: Composant pour sélectionner la ville pour laquelle afficher les prévisions météo.
- **DayDetail.tsx**: Composant pour afficher les détails heure par heure des prévisions météo d'une journée spécifique.
- **UnitToggle.tsx**: Composant pour changer l'unité de mesure des températures (Celsius ou Fahrenheit).
- **WeatherForecast.tsx**: Composant pour afficher les prévisions météo sur 7 jours.

### Gestion des Appels API

**useFetchWeatherData.ts**: Hook personnalisé pour gérer les appels API et l'état de chargement et d'erreur.

**api.ts**: Fichier contenant les fonctions pour effectuer les requêtes API vers l'API Open-Meteo.

### Typage

**types.ts**: Fichier contenant les définitions des types TypeScript utilisés dans l'application.

## Axes d'Amélioration

- **Recherche de Ville** :

Permettre aux utilisateurs de taper le nom d'une ville dans un champ de recherche et d'obtenir automatiquement les prévisions météo pour cette ville.

- **Gestion des Erreurs et des États de Chargement**

Ajouter des spinners ou des indicateurs de chargement pendant que les données sont récupérées.

Afficher des messages d'erreur spécifiques pour différents types d'erreurs (par exemple, problème de réseau, ville non trouvée, etc.).

- **Tests Unitaires et Tests d'Intégration**

Écrire des tests unitaires pour chaque composant avec `Jest`.
