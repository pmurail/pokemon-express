# Pokémon API

Bienvenue dans la documentation de l'API Pokémon ! Cette API vous permet de gérer des données de Pokémons avec les fonctionnalités CRUD (Create, Read, Update, Delete). Elle utilise Express.js comme framework web et Sequelize comme ORM pour interagir avec une base de données SQLite.

## Récupérer tous les Pokémons

- **URL**: `/pokemons`
- **Méthode**: `GET`
- **Réponse réussie** (200 OK):
  ```json
  {
    "pokemon": [
        {
          "id": 1,
          "name": "Chimchar",
          "pokemon_type": "Fire",
          "level": 1,
          "evolution": "Monferno"
        },
        {
          "id": 2,
          "name": "Giratina",
          "pokemon_type": "Ghost, Dragon",
          "level": 47,
          "evolution": null
        }
    ]
  }
  
- **Réponse d'erreur** (500 Erreur Interne du Serveur):
  ```json
  {
    "error": "Erreur lors de la récupération des pokemons."
  }

## Récupérer un Pokémon par ID

- **URL**: `/pokemons/:id`
- **Méthode**: `GET`
- **Réponse réussie** (200 OK):
  ```json
  {
    "pokemon": {
      "id": 1,
      "name": "Chimchar",
      "pokemon_type": "Fire",
      "level": 1,
      "evolution": "Monferno"
    }
  }

- **Réponse d'erreur** (404 Non Trouvé):
  ```json
  {
    "error": "Pokemon non trouvé."
  }
- **Réponse d'erreur** (500 Erreur Interne du Serveur):
  ```json
  {
    "error": "Erreur lors de la récupération du pokemon."
  }

## Créer un nouveau Pokémon
- **URL**: `/pokemons`
- **Méthode**: `POST`
- **Corps de la requête** (JSON):
  ```json
  {
    "name": "Giratina",
    "pokemon_type": "Ghost, Dragon",
    "level": 47,
    "evolution": null
  }

- **Réponse réussie** (201 Créé):
  ```json
  {
    "pokemon": {
      "id": 2,
      "name": "Giratina",
      "pokemon_type": "Ghost, Dragon",
      "level": 47,
      "evolution": null
    }
  }

- **Réponse d'erreur** (500 Erreur Interne du Serveur):
  ```json
  {
    "error": "Erreur lors de la création du pokemon."
  }

## Mettre à jour un Pokémon par ID
- **URL**: /pokemons/:id
- **Méthode**: PUT
- **Corps de la requête** (JSON):
  ```json
  {
    "name": "Monferno",
    "pokemon_type": "Fire, Fight",
    "level": 14,
    "evolution": "Infernape"
  }

- **Réponse réussie** (200 OK):
  ```json
  {
    "message": "Modification du pokemon 1"
  }

- **Réponse d'erreur** (404 Non Trouvé):
  ```json
  {
    "error": "Pokemon non trouvé."
  }

- **Réponse d'erreur** (500 Erreur Interne du Serveur):
  ```json
  {
    "error": "Erreur lors de la modification du pokemon."
  }

## Supprimer un Pokémon par ID
- **URL**: /pokemons/:id
- **Méthode**: DELETE
- **Réponse réussie** (200 OK):
  ```json
  {
    "message": "Suppression du pokemon 2"
  }

- **Réponse d'erreur** (404 Non Trouvé):
  ```json
  {
    "error": "Pokemon non trouvé."
  }

- **Réponse d'erreur** (500 Erreur Interne du Serveur):
  ```json
  {
    "error": "Erreur lors de la suppression du pokemon."
  }