class Writer {
  constructor(name, birthPlace, age, totalSongWritten){
    this._name = name
    this._birthPlace = birthPlace
    this._age = age
    this._totalSongWritten = totalSongWritten
    this._songs = []
    this._songsSpotify = []
    this._bonusFee = 0
  }

  createSong (titleObj){
    this._songs.push(titleObj)
  }

  releaseSpotify (titleObj){
    let isFound = false;
    for (let i in this._songs){
      if (this._songs[i]._title == titleObj._title){
        isFound = true;
      }
    }

    if (isFound){
      this._songsSpotify.push(titleObj);
      titleObj._onSpotify = true;
      console.log ('Baby Shark launched on spotify !')
    } else {
      console.log ('Song tidak ada.')
    }
  }

  addSinger (singerObj, titleObj){
    let songList = this._songs;
    let isSongFound = false;

    for(let i in songList){
      if (songList[i]._title === titleObj._title){
        isSongFound = true;
      }
    }

    if (isSongFound){
      titleObj.addSinger(singerObj);
      this._bonusFee += 1000  
      return `${singerObj} akan membawakan Baby Shark`
    } else {
      return 'this artist dont have that song'
    }
  }

  removeSinger (singerObj, titleObj){
    let songList = this._songs;
    let isSongFound = false;

    for(let i in songList){
      if (songList[i]._title === titleObj._title){
        isSongFound = true;
      }
    }

    if (isSongFound){
      for (let i in songList){
        for (let j in songList[i]._singers){
          if (songList[i]._singers[j]._name === singerObj._name){
            songList[i]._singers.splice(+j, 1)
            titleObj.removeSinger(singerObj);
            this._bonusFee -= 200  
            return `${singerObj} akan berhenti membawakan Baby Shark`
          }
        }
      }
    } else {
      return 'this artist dont have that song to begin with'
    }
  }

}

class JKash extends Writer {
  constructor(name, birthPlace, age, totalSongWritten){
    super(name, birthPlace, age, totalSongWritten)
  }

}

class MattRobin extends Writer {
  constructor(name, birthPlace, age, totalSongWritten){
    super(name, birthPlace, age, totalSongWritten)
    this._award = 'Denniz Pop Grand Prize'
  }
}

class AshleyGorley extends Writer {
  constructor(name, birthPlace, age, totalSongWritten){
    super(name, birthPlace, age, totalSongWritten)
    this.alumni = 'Belmont University'
  }
}

class Song {
  constructor (title){
    this._title = title;
    this._singers = [];
    this._onSpotify = false;
  }

  addSinger(singer){
    this._singers.push(singer)
  }

  removeSinger(singer){
    for (let i in this._singers){
      if (this._singers[i] === singer._name){
        this._singers.splice(+i, 1)
      }
    }
  }
}


class Singer {
  constructor(name, debutYear){
    this._name = name;
    this._debutYear = debutYear;
  }
}


let jKash = new JKash ('Jacob Kasher', 'Virginia', 35, 64)
let mattR = new MattRobin ('Mattias Larsson and Robin Fredriksson', 'Sweden', 43, 120)
let ashleyG = new AshleyGorley ('Ashley Glenn Gorley', 'Kentucky, US', 41, 73)

let evolve = new Song ('Evolve')
let beautiful = new Song ('Beautiful Trauma')
let heartbeat = new Song ('Heartbeat')
let today = new Song ('Today')
let attention = new Song ('Attention')

let brian = new Singer('brian', 2020)
let kneric = new Singer('kneric', 2000)



jKash.createSong(evolve)
jKash.createSong(beautiful)

jKash.releaseSpotify(evolve)

jKash.addSinger(brian,evolve)

// jKash.addSinger()

console.log()