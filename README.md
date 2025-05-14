# FilmFavoritku

Aplikasi web untuk mencatat film favorit menggunakan Node.js dan Express.js.

## Cara Menjalankan

1. Jalankan `npm install`
2. Jalankan `node index.js` atau `nodemon index.js`
3. Buka browser dan akses `http://localhost:3001`

## Daftar Rute

- `GET /` – Halaman utama
- `GET /movies` – Tampilkan semua film
- `GET /movies/:id` – Detail film tertentu
- `POST /movies` – Tambahkan film baru
- `PUT /movies/:id` – Ubah data film
- `DELETE /movies/:id` – Hapus film

## Contoh Payload POST/PUT

```json
{
	"title": "Inception",
	"description": "Mimpi dalam mimpi",
	"genre": "Sci-Fi"
}
```

## Dokumentasi API

### Menampilkan Laman Utama

- `URL: http://localhost:3001/`
- `METHOD: GET`
- `Query: -`
- `Body: `

### Mendapatkan Data Semua Film

- `URL: http://localhost:3001/movies`
- `METHOD: GET`
- `Query Params: `
- `URL Params: `
- `Body Type: application/json`
- `Body: `

### Mendapatkan Data Film Berdasarkan Id Data

- `URL: http://localhost:3001/movies/:id`
- `METHOD: GET`
- `Query Params: `
- `URL Params: id: number`
- `Body Type: application/json`
- `Body: `

### Membuat / Mencatat Data Film Baru

- `URL: http://localhost:3001/movies`
- `METHOD: POST`
- `Query Params: `
- `URL Params: `
- `Body Type: application/json`
- `Body: {title: string, description: string, genre: string}`

### Memperbarui Data Film Berdasarkan Id Data

- `URL: http://localhost:3001/movies/:id`
- `METHOD: PUT`
- `Query Params: `
- `URL Params: id: number`
- `Body Type: application/json`
- `Body: {title: string, description: string, genre: string}`

### Menghapus Data Film Berdasarkan Id Data

- `URL: http://localhost:3001/movies/:id`
- `METHOD: DELETE`
- `Query Params: `
- `URL Params: id: number`
- `Body Type: application/json`
- `Body: `
