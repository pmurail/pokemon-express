const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const app = express();
const port = 3000;
app.use(express.json());

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "storage/database.sqlite",
});

const Pokemon = sequelize.define("Pokemon", {
  name: DataTypes.STRING,
  pokemon_type: DataTypes.STRING,
  level: DataTypes.INTEGER,
  evolution: DataTypes.STRING,
});

app.get("/pokemons", async (req, res) => {
  try {
    const pokemons = await Pokemon.findAll();
    res.json({ pokemons });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération des pokemons." });
  }
});

app.get("/pokemons/:id", async (req, res) => {
  try {
    const pokemon = await Pokemon.findByPk(req.params.id);
    if (!pokemon) {
      res.status(404).json({ error: "Pokemon non trouvé." });
      return;
    }
    res.json({ pokemon });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération du pokemon." });
  }
});

app.post("/pokemons", async (req, res) => {
  try {
    const pokemon = await Pokemon.create({
      name: req.body.name,
      pokemon_type: req.body.pokemon_type,
      level: req.body.level,
      evolution: req.body.evolution,
    });
    res.status(201).json({ pokemon });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la création du pokemon." });
  }
});

app.put("/pokemons/:id", async (req, res) => {
  try {
    const result = await Pokemon.update(
      {
        name: req.body.name,
        pokemon_type: req.body.pokemon_type,
        level: req.body.level,
        evolution: req.body.evolution,
      },
      { where: { id: req.params.id } }
    );
    if (result[0] === 0) {
      res.status(404).json({ error: "Pokemon non trouvé." });
      return;
    }
    res.json({ message: "Modification du pokemon " + req.params.id });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la modification du pokemon." });
  }
});

app.delete("/pokemons/:id", async (req, res) => {
  try {
    const result = await Pokemon.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (result === 0) {
      res.status(404).json({ error: "Pokemon non trouvé." });
      return;
    }
    res.json({ message: "Suppression du pokemon " + req.params.id });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la suppression du pokemon." });
  }
});

app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});

sequelize.sync();
