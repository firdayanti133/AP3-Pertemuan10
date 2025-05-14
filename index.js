const express = require('express');
const app = express();
const port = 3001;

// Data film disimpan dalam array
let movies = [
  { id: 1, title: 'Interstellar', description: 'Perjalanan luar angkasa dan waktu', genre: 'Sci-Fi' },
  { id: 2, title: 'Parasite', description: 'Kritik sosial dengan plot twist', genre: 'Drama' }
];

// Validasi middleware
function validateMovie(req, res, next) {
  const { title, description, genre } = req.body;
  if (!title || !description || !genre) {
    return res.status(400).send('Semua field (title, description, genre) wajib diisi!');
  }

  if (typeof title !== 'string' || typeof description !== 'string' || typeof genre !== 'string') {
    return res.status(400).send('Semua field (title, description, genre) harus berupa string!');
  }

  // Melanjutkan ke middleware selanjutnya
  next();
}

app.use(express.json());

// Middleware logging semua rute
app.all('/movies/*', (req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Selamat datang di Aplikasi Film Favoritku!');
});

// GET semua film
app.get('/movies', (req, res) => {
  res.json(movies);
});

// GET film berdasarkan ID
app.get('/movies/:id', (req, res) => {
  const movie = movies.find(m => m.id == req.params.id);
  if (!movie) return res.sendStatus(404);
  res.status(200).json(movie);
});

// POST film baru
app.post('/movies', validateMovie, (req, res) => {
  const newMovie = {
    id: movies.length + 1,
    ...req.body
  };
  movies.push(newMovie);
  res.status(201).json(movies);
});

// PUT update film
app.put('/movies/:id', validateMovie, (req, res) => {
  //Pendefinisian variabel untuk mengakses objek body
  const { title, description, genre } = req.body;
  const movie = movies.find(m => m.id == req.params.id);
  if (!movie) return res.sendStatus(404);
  movie.title = title;
  movie.description = description;
  movie.genre = genre;
  res.json(movie);
});

// DELETE film
app.delete('/movies/:id', (req, res) => {
  const index = movies.findIndex(m => m.id == req.params.id);
  if (index === -1) return res.sendStatus(404);
  movies.splice(index, 1);
  res.send('Film berhasil dihapus');
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
