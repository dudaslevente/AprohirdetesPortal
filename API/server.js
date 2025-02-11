const app = require('./app');
const sequelize = require('./config/database');
const Category = require('./models/category.model');

const PORT = process.env.PORT || 8080;

sequelize.sync({ force: true }) // Az { force: true } újra létrehozza a táblákat minden indításkor, fejlesztéshez hasznos
  .then(() => {
    console.log('Database connected and synchronized successfully!');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });

    // Kategóriák inicializálása
    const categories = ['Ingatlan', 'Gépjármű', 'Háztartási gép', 'Játék', 'Ruházat', 'Szolgáltatás', 'Elektronika', 'Sport', 'Szabadidő', 'Egyéb'];
    categories.forEach(async (categoryName) => {
      try {
        await Category.findOrCreate({ where: { name: categoryName } });
        console.log(`Category ${categoryName} inserted or already exists.`);
      } catch (error) {
        console.error(`Error inserting category ${categoryName}:`, error);
      }
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });