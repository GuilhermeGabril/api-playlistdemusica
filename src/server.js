const express = require('express')
const playlistsRouter = require('./routes')
const app = express()

app.use(express.json())

app.use('/api/playlists', playlistsRouter)

const PORT = 5500
app.listen(PORT, () => console.log('Servidor iniciado!'))