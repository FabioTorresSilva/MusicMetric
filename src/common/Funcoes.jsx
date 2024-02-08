import array from "../assets/data/history.json"

export function calcularTempoPorEstacao() {
    const tempoPorEstacao = {
        Primavera: 0,
        Verão: 0,
        Outono: 0,
        Inverno: 0
    };
    
    array.forEach((item) => {
        const data = new Date(item.ts);
        const mes = data.getMonth() + 1;
        const dia = data.getDate();
        let estacao = "";
        if (mes === 4 || mes === 5 || (mes === 3 && dia >= 21) || (mes === 6 && dia <= 20)) {
            estacao = "Primavera";
        } else if (mes === 7 || mes === 8 || (mes === 6 && dia >= 21) || (mes === 9 && dia <= 20)) {
            estacao = "Verão";
        } else if (mes === 10 || mes === 11 || (mes === 9 && dia >= 21) || (mes === 12 && dia <= 20)) {
            estacao = "Outono";
        } else {
            estacao = "Inverno";
        }
        
        const minutosTocados = parseInt(item.ms_played, 10) / 60000; 
        tempoPorEstacao[estacao] += minutosTocados;
    });
    
    return tempoPorEstacao;
}

export function calcularPercentagens(tempoPorEstacao) {
    const totalMinutos = Object.values(tempoPorEstacao).reduce((acc, minutos) => acc + minutos, 0);
    const estacoesEPercentagens = Object.entries(tempoPorEstacao).map(([estacao, minutos]) => ({
        estacao,
        minutos: minutos.toFixed(2), // Arredondando para duas casas decimais
        percentagem: ((minutos / totalMinutos) * 100).toFixed(2) // Calcula a porcentagem
    }));
    
    estacoesEPercentagens.sort((a, b) => b.minutos - a.minutos); // Ordena do mais ao menos tocado
    
    return estacoesEPercentagens;
}

export function estacoesEPercentagens() {
    const tempoPorEstacao = calcularTempoPorEstacao(array);
    return calcularPercentagens(tempoPorEstacao);
}








export function musicasDiferentes(){
    return new Set(array.map((item) => item.master_metadata_track_name)).size
}


export function horaMaisOuve() {
    const tempoPorHora = {};
    array.forEach((item) => {
        const hora = item.ts.split('T')[1].split(':')[0]; // "2017-09-11T" "18" "::00:11Z"
        const minutosTocados = parseInt(item.ms_played) / 60000
        tempoPorHora[hora] = (tempoPorHora[hora] || 0) + minutosTocados // tempoPorDia[18] = 4 + 4 
    })

    const horaMaisTocada = Object.keys(tempoPorHora).reduce((horaMaxima, horaAtual) => {
        if (tempoPorHora[horaAtual] > tempoPorHora[horaMaxima]) {
            return horaAtual
        } else {
            return horaMaxima
        }
    }, Object.keys(tempoPorHora)[0])

    // preciamos de mais do que um campo com a mensagem a vir para fora, logo retornamos um objeto que tem o numero da hora
    return {'msg': `entre as ${Number(horaMaisTocada)}h e as ${(Number(horaMaisTocada) + 1)}h`,
    'hora':Number(horaMaisTocada)}
}



export function mediaDiaria() {
    const tempoPorDia = {};
    const datas = new Set (array.map(item => new Date(item.ts.split('T')[0]).getTime()));
    const primeiraData = new Date(Math.min(...datas));
    const ultimaData = new Date(Math.max(...datas));

    array.forEach((item) => {
        const dataString = item.ts.split('T')[0];
        const milisegundos = item.ms_played;
        tempoPorDia[dataString] = (tempoPorDia[dataString] || 0) + milisegundos;
    });

    const diasTotais = Math.round((ultimaData - primeiraData) / (1000 * 60 * 60 * 24)) + 1;
    const totalMilisegundos = Object.values(tempoPorDia).reduce((total, tempo) => total + tempo, 0);
    const mediaDiariaMinutos = Math.round((totalMilisegundos / 1000 / 60) / diasTotais);

    return `${mediaDiariaMinutos} minutos por dia`;
}



export function playsTotal() {
    return array.length
}


export function miliMinutosTocados() {
    let totalMilissegundos = 0;
    array.forEach((e) => {
        totalMilissegundos += e.ms_played;
    })
    return Math.round(totalMilissegundos / 60000);
}



// ARTISTA
//Ver % das plays dentro do total (ex: Kendrick Lamar representa 1.7% das minhas plays)
// retorna artista e numero plays
export function numeroPlaysArtista(nome) {
    const artistaPlays = {}
    array.forEach((item) => {
        artistaPlays[item.master_metadata_album_artist_name] = (artistaPlays[item.master_metadata_album_artist_name] || 0) + 1 
    })
    return artistaPlays[nome]
}

// retorna % de artista e numero plays
export function percentagemPlaysArtista(nome) {
    const totalReproducoes = array.length
    const percentagemArtistaPlays = {};

    array.forEach((item) => {
        const artista = item.master_metadata_album_artist_name;
        percentagemArtistaPlays[artista] = (percentagemArtistaPlays[artista] || 0) + 1
    })
  
    Object.keys(percentagemArtistaPlays).forEach((artista) => {
        percentagemArtistaPlays[artista] = (percentagemArtistaPlays[artista] / totalReproducoes) * 100
    })

    let percentagem = percentagemArtistaPlays[nome] > 0 ? percentagemArtistaPlays[nome].toFixed(2)+'%' : percentagemArtistaPlays[nome]
    return percentagem 
}


export function estacaoMaisOuveArtista(nomeArtista) {
    const tempoPorEstacao = {
        Primavera: 0,
        Verão: 0,
        Outono: 0,
        Inverno: 0
    }
    array.forEach((item) => {
        if (item.master_metadata_album_artist_name === nomeArtista) {
            const data = new Date(item.ts)
            const mes = data.getMonth() + 1
            const dia = data.getDate()
            let estacao = ""

            if (mes === 4 || mes === 5 || (mes === 3 && dia >= 21) || (mes === 6 && dia <= 20)) {
                estacao = "Primavera"
            } else if (mes === 7 || mes === 8 || (mes === 6 && dia >= 21) || (mes === 9 && dia <= 22)) {
                estacao = "Verão"
            } else if (mes === 10 || mes === 11 || (mes === 9 && dia >= 23) || (mes === 12 && dia <= 20)) {
                estacao = "Outono"
            } else {
                estacao = "Inverno"
            }

            const minutosTocados = parseInt(item.ms_played) / 60000;
            tempoPorEstacao[estacao] += minutosTocados
        }
    })
    const estacaoMaisOuvida = Object.keys(tempoPorEstacao).reduce((a, b) => tempoPorEstacao[a] > tempoPorEstacao[b] ? a : b)

    return estacaoMaisOuvida
}

export function albumMaisOuvido() {
    const tempoPorAlbum = {}
    array.forEach((item) => {
        const nomeAlbum = item.master_metadata_album_album_name
        if (nomeAlbum) {
            tempoPorAlbum[nomeAlbum] = (tempoPorAlbum[nomeAlbum] || 0) + item.ms_played
        }
    })
    const albumMaisEscutado = Object.keys(tempoPorAlbum).reduce((a, b) => tempoPorAlbum[a] > tempoPorAlbum[b] ? a : b, "")
    const tempoTotalMinutos = Math.round(tempoPorAlbum[albumMaisEscutado] / 60000)

    return `${albumMaisEscutado} com ${tempoTotalMinutos} minutos.`
}


export function calcularStrikeDeEscuta() {
    if (array.length === 0) return 0

    let maiorStrike = 1
    let strikeAtual = 1

    let dataAnterior = new Date(array[0].ts.split('T')[0])

    for (let i = 1; i < array.length; i++) {
        const dataAtual = new Date(array[i].ts.split('T')[0])
        const diferencaEmDias = (dataAtual - dataAnterior) / (1000 * 60 * 60 * 24)

        if (diferencaEmDias === 1) {
            strikeAtual++
        } else if (diferencaEmDias > 1) {

            maiorStrike = Math.max(maiorStrike, strikeAtual)
            strikeAtual = 1
        }

        dataAnterior = dataAtual;
    }
    maiorStrike = Math.max(maiorStrike, strikeAtual)

    return maiorStrike
}


export function calcularStrikeAtual() {
    if (array.length === 0) return 0

    let strikeAtual = 1;
    let dataAnterior = new Date(array[array.length - 1].ts.split('T')[0])

    for (let i = array.length - 2; i >= 0; i--) {
        const dataAtual = new Date(array[i].ts.split('T')[0])
        const diferencaEmDias = (dataAnterior - dataAtual) / (1000 * 60 * 60 * 24)

        if (diferencaEmDias === 1) {
            strikeAtual++
            dataAnterior = dataAtual
        } else {
            break
        }
    }

    return strikeAtual
}


//POR PLAYS
export function gerarTop100Artistas() {
    const contagemPlays = {};
    array.forEach((item) => {
      const artistName = item.master_metadata_album_artist_name; 
      contagemPlays[artistName] = (contagemPlays[artistName] || 0) + 1;
    });
  
    const topArtistas = Object.entries(contagemPlays)
      .filter(([artistName, _]) => artistName !== "null")
      .sort((a, b) => b[1] - a[1])
      .slice(0, 100)
      .map(entry => entry[0])
      
    return topArtistas;
}


export function encontrarPosicaoArtistaNoTop100(nomeArtista) {
    const top100NomesArtistas = gerarTop100Artistas(array); 
    const posicao = top100NomesArtistas.indexOf(nomeArtista) + 1; 
    if (posicao > 0) {
        return `Posição de ${nomeArtista} no top 100: ${posicao}`;
    } else {
        return `${nomeArtista} não está no top 100 artistas.`;
    }
}





//PLAYS
export function calcularTop100ArtistasPorIntervalo(intervalo) {
    const hoje = new Date();
    let dataInicial;

    switch (intervalo) {
        case 'ultimas4Semanas':
            dataInicial = new Date(new Date().setDate(hoje.getDate() - 28));
            break;
        case 'ultimos6Meses':
            dataInicial = new Date(new Date().setMonth(hoje.getMonth() - 6));
            break;
        case 'ultimoAno':
            dataInicial = new Date(new Date().setFullYear(hoje.getFullYear() - 1));
            break;
        case 'desdeSempre':
            dataInicial = new Date('1970-01-01'); // Representa "desde sempre"
            break;
        default:
            throw new Error('Intervalo de tempo não especificado ou inválido.');
    }

    const contagemPlays = {};

    // Garanta que 'array' está definido e é acessível aqui
    array.filter(item => new Date(item.ts) >= dataInicial).forEach(item => {
        const artista = item.master_metadata_album_artist_name;
        if (artista) {
            contagemPlays[artista] = (contagemPlays[artista] || 0) + 1;
        }
    });

    const top100 = Object.entries(contagemPlays)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 100)
        .map(([nome, plays]) => ({ nome, plays }));

    return top100;
}




/// MILISEGUNDOS

export function calcularTop100MusicasPorMilissegundosEIntervalo(intervalo) {
    const hoje = new Date();
    let dataInicial;
  
    // Determina a data inicial com base no intervalo especificado
    switch (intervalo) {
      case 'ultimas4Semanas':
        dataInicial = new Date(new Date().setDate(hoje.getDate() - 28));
        break;
      case 'ultimos6Meses':
        dataInicial = new Date(new Date().setMonth(hoje.getMonth() - 6));
        break;
      case 'ultimoAno':
        dataInicial = new Date(new Date().setFullYear(hoje.getFullYear() - 1));
        break;
      case 'desdeSempre':
        dataInicial = new Date('1970-01-01'); // Representa "desde sempre"
        break;
      default:
        throw new Error('Intervalo de tempo não especificado ou inválido.');
    }
  
    // Filtra os dados com base no intervalo de datas
    const dadosFiltrados = array.filter(item => new Date(item.ts) >= dataInicial);
  
    // Agrega os dados por música, somando os milissegundos tocados
    const agregadoPorMusica = dadosFiltrados.reduce((acc, item) => {
      const chave = `${item.master_metadata_track_name} - ${item.master_metadata_album_artist_name}`;
      if (!acc[chave]) {
        acc[chave] = {
          nome: item.master_metadata_track_name,
          artista: item.master_metadata_album_artist_name,
          album: item.master_metadata_album_album_name,
          totalMsPlayed: 0
        };
      }
      acc[chave].totalMsPlayed += item.ms_played;
      return acc;
    }, {});
  
    // Ordena as músicas por total de milissegundos tocados e seleciona o top 100
    const top100Musicas = Object.values(agregadoPorMusica)
      .sort((a, b) => b.totalMsPlayed - a.totalMsPlayed)
      .slice(0, 100);
  
    return top100Musicas;
  }



  // TOP 20 MILISEGUNDOS 

  export function calcularTop20MusicasPorMilissegundosEIntervalo(intervalo) {
    const hoje = new Date();
    let dataInicial;

    switch (intervalo) {
        case 'ultimas4Semanas':
            dataInicial = new Date(new Date().setDate(hoje.getDate() - 28));
            break;
        case 'ultimos6Meses':
            dataInicial = new Date(new Date().setMonth(hoje.getMonth() - 6));
            break;
        case 'ultimoAno':
            dataInicial = new Date(new Date().setFullYear(hoje.getFullYear() - 1));
            break;
        case 'desdeSempre':
            dataInicial = new Date('1970-01-01'); // Representa "desde sempre"
            break;
        default:
            throw new Error('Intervalo de tempo não especificado ou inválido.');
    }

    const dadosFiltrados = array.filter(item => new Date(item.ts) >= dataInicial);

    const agregadoPorMusica = dadosFiltrados.reduce((acc, item) => {
        const chave = `${item.master_metadata_track_name} - ${item.master_metadata_album_artist_name}`;
        if (!acc[chave]) {
            acc[chave] = {
                nome: item.master_metadata_track_name,
                artista: item.master_metadata_album_artist_name,
                album: item.master_metadata_album_album_name,
                totalMsPlayed: 0
            };
        }
        acc[chave].totalMsPlayed += item.ms_played;
        return acc;
    }, {});

    const top20Musicas = Object.values(agregadoPorMusica)
        .sort((a, b) => b.totalMsPlayed - a.totalMsPlayed)
        .slice(0, 20);

    return top20Musicas;
}




//TOP 20 musicas artista por milisegundos
export function calcularTop20MusicasArtistaPorIntervalo(nomeArtista, intervalo) {
    const hoje = new Date();
    let dataInicial;
  
    switch (intervalo) {
      case 'ultimas4Semanas':
        dataInicial = new Date(new Date().setDate(hoje.getDate() - 28));
        break;
      case 'ultimos6Meses':
        dataInicial = new Date(new Date().setMonth(hoje.getMonth() - 6));
        break;
      case 'ultimoAno':
        dataInicial = new Date(new Date().setFullYear(hoje.getFullYear() - 1));
        break;
      case 'desdeSempre':
        dataInicial = new Date('1970-01-01'); // Representa "desde sempre"
        break;
      default:
        throw new Error('Intervalo de tempo não especificado ou inválido.');
    }
  
    // Filtra os dados pelo artista e pelo intervalo de datas
    const dadosFiltrados = array.filter(item => 
      item.master_metadata_album_artist_name === nomeArtista && new Date(item.ts) >= dataInicial);
  
    // Agrega os dados por música, somando os milissegundos tocados
    const agregadoPorMusica = dadosFiltrados.reduce((acc, item) => {
      const chave = item.master_metadata_track_name;
      if (!acc[chave]) {
        acc[chave] = {
          nome: item.master_metadata_track_name,
          totalMsPlayed: 0
        };
      }
      acc[chave].totalMsPlayed += item.ms_played;
      return acc;
    }, {});
  
    // Ordena as músicas por total de milissegundos tocados e seleciona o top 20
    const top20Musicas = Object.values(agregadoPorMusica)
      .sort((a, b) => b.totalMsPlayed - a.totalMsPlayed)
      .slice(0, 20);
  
    return top20Musicas;
  }
  