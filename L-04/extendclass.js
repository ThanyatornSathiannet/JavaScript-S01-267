class Media {
    constructor(info) {
        this.publishDate = info.publishDate;
        this.name = info.name;
    }
}

class Song extends Media {
    constructor(songData) {
        super(songData);
        this.artist = songData.artist;
    }
}

const mySong = new Song({
    artist: "Queen",
    name: "Bohemien R",
    publishDate: 1975,
});
console.log(mySong);