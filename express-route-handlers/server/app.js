// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();


app.use(express.json())

app.use((req,res,next)=>{
  console.log("Request Body:", req.body)
  next()
})

app.post("/", (req,res)=>{
  res.send("Received Request")
})

app.get("/artists", (req,res)=>{
  res.status(200).send(getAllArtists())
})

app.post("/artists", (req,res)=>{
  data = req.body
  res.status(201).send(addArtist(data))
})

app.get("/artists/latest", (req,res)=>{
  res.status(200).send(getLatestArtist())
})

app.get("/artists/latest/albums", (req,res)=>{
  res.status(200).send(getAlbumsForLatestArtist())
})

// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}
