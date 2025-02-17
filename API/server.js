const express = require('express');
const routes = require('./routes');
const app = require('./app');
const multer  = require('multer');
const sequelize = require('./config/database');
const Category = require('./models/category.model');
const userRoutes = require('./routes/user.routes');
const advertisementsRoutes = require('./routes/advertisement.routes');

app.use(express.json());
app.use(routes);
app.use('/uploads', express.static('uploads'));

app.use('/users', userRoutes);
app.use('/advertisements', advertisementsRoutes);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
      const timestamp = Date.now();
      const originalname = file.originalname.replace(' ', '_');
      const name = originalname.substring(0, originalname.lastIndexOf('.'));
      const ext = originalname.substring(originalname.lastIndexOf('.'));
      cb(null, name + '-' + timestamp + ext);
  }
});

const upload = multer({ storage: storage })

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