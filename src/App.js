import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage'; 
import UserMetrics from './pages/UserMetrics';
import MusicPage from './pages/MusicPage'; // Importe o componente da página de músicas
import ArtistsPage from './pages/ArtistsPage'; // Importe o componente da página de artistas
import GenresPage from './pages/GenresPage'; // Importe o componente da página de gêneros

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/usermetrics" element={<Layout><UserMetrics /></Layout>} />
        <Route path="/musicas" element={<Layout><MusicPage /></Layout>} /> 
        <Route path="/artistas" element={<Layout><ArtistsPage /></Layout>} />  // Rota para a página de artistas
        <Route path="/generos" element={<Layout><GenresPage /></Layout>} />  // Rota para a página de gêneros
      </Routes>
    </Router>
  );
}

export default App;


/* function App() {

  const [first, setfirst] = useState({
    totalPLays: playsTotal(),
    musicasDiferentes: musicasDiferentes(), 
    estacaoMaisOuve: estacaoMaisOuve(),
    horaMaisOuve: horaMaisOuve(),
    mediaDiaria:mediaDiaria(),
    miliMinutosTocados:miliMinutosTocados(),
    numeroPlaysArtista:numeroPlaysArtista("Kendrick Lamar"),
    percentagemPlaysArtista:percentagemPlaysArtista("Kendrick Lamar"),
    estacaoMaisOuveArtista:estacaoMaisOuveArtista("Kendrick Lamar"),
    albumMaisOuvido: albumMaisOuvido(),
    calcularStrikeDeEscuta: calcularStrikeDeEscuta(),
    calcularStrikeAtual: calcularStrikeAtual(),
    encontrarPosicaoArtistaNoTop100: encontrarPosicaoArtistaNoTop100("Kendrick Lamar"),
    gerarTop100Artistas: gerarTop100Artistas(),
    calcularTop100ArtistasPorIntervalo: calcularTop100ArtistasPorIntervalo('ultimas4Semanas'),
    calcularTop100MusicasPorMilissegundosEIntervalo: calcularTop100MusicasPorMilissegundosEIntervalo('ultimas4Semanas'),
    calcularTop20MusicasPorMilissegundosEIntervalo: calcularTop20MusicasPorMilissegundosEIntervalo('ultimas4Semanas'),
    calcularTop20MusicasArtistaPorIntervalo: calcularTop20MusicasArtistaPorIntervalo('TOOL' , 'ultimas4Semanas')
   
    })

   return (
  <div className="App">
    <div>Plays totais gerais: {first.totalPLays}</div>
    <div>musicas Diferentes: {first.musicasDiferentes}</div>
    <div>MinutosTocados: {first.miliMinutosTocados}</div>
    <div>Media Diaria: {first.mediaDiaria}</div>
    <div>Periodo hora mais ouve: {first.horaMaisOuve}</div>
    <div>Estação mais ouve: {first.estacaoMaisOuve}</div>
    <div>NumeroPlaysArtista: {first.numeroPlaysArtista}</div>
    <div>PercentagemPlaysArtista: {first.percentagemPlaysArtista}</div>
    <div>Estação mais ouvida pelo Artista: {first.estacaoMaisOuveArtista}</div>
    <div>Álbum mais ouvido: {first.albumMaisOuvido}</div>
    <div>Calcular Strike De Escuta: {first.calcularStrikeDeEscuta}</div>
    <div>Calcular Strike Atual: {first.calcularStrikeAtual}</div>
    <div>Posição do Artista no Top 100: {first.encontrarPosicaoArtistaNoTop100}</div>
    <div>
      Gerar Top 100 Artistas: 
      <ul>
        {first.gerarTop100Artistas.map((artista, index) => (
          <li key={index}>{artista}</li>
        ))}
      </ul>
    </div>
    <div>
      Calcular Top 100 Artistas Por Intervalo Plays (últimas 4 semanas): 
      <ul>
        {first.calcularTop100ArtistasPorIntervalo.map(({ nome, plays }, index) => (
          <li key={index}>
            <span>Nome: {nome} - Plays: {plays}</span>
          </li>
        ))}
      </ul>
    </div>
    <div>
        Top 100 Músicas por Milissegundos (últimas 4 semanas):
        <ul>
          {first.calcularTop100MusicasPorMilissegundosEIntervalo.map((musica, index) => (
            <li key={index}>
              {musica.nome} - {musica.artista} ({musica.album}): {musica.totalMsPlayed} ms
            </li>
          ))}
        </ul>
      </div>
      <div>
        Top 20 Músicas por Milissegundos (últimas 4 semanas):
        <ul>
          {first.calcularTop20MusicasPorMilissegundosEIntervalo.map((musica, index) => (
            <li key={index}>
              {musica.nome} - {musica.artista} ({musica.album}): {musica.totalMsPlayed} ms
            </li>
          ))}
        </ul>
      </div>
      <div>
      Top 20 Músicas de por Milissegundos (últimas 4 semanas):
      <ul>
        {first.calcularTop20MusicasArtistaPorIntervalo.map((musica, index) => (
          <li key={index}>
            {musica.nome}: {musica.totalMsPlayed} ms
          </li>
        ))}
      </ul>
    </div> 
  </div>
);
}

export default App;
 */