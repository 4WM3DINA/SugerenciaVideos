
class Multimedia {
	constructor(url) {
		this._url = url;
	}
	get url() {
		return this._url;
	}
	setInicio() {
		return `Este método es para realizar un cambio en la URL.`;
	}
}
class Reproductor extends Multimedia {
	constructor(url, id) {
		super(url);
		this._id = id;
	}
	get id() {
		return this._id;
	}
	playMultimedia() {
		urlIdVideoiframe.reproducir(this._url, this._id);
	}
	setInicio(time) {
		let startTime = document.querySelector(`#collapse${this._id} iframe`);
		startTime.setAttribute("src", `${this._url}?start=${time}`);
	}
}

const urlIdVideoiframe = (() => {
	function reproducir(url, id) {
		let startTime = document.querySelector(`#collapse${id} iframe`);
		startTime.setAttribute("src", `${url}`);
	}
	return { reproducir };
})();

const btnSubmit = document.querySelector("#btnSubmit");
btnSubmit.addEventListener("click", (event) => {
	event.preventDefault();
	const setInicio = document.querySelector("#setInicio").value;
	const urlVideo = document.querySelector("#urlVideo").value;
	const idCategory = document.querySelector("#idCategory").value;

	const newVideo = new Reproductor(`${urlVideo}`, `${idCategory}`);
	newVideo.playMultimedia();
	newVideo.setInicio(`${setInicio}`);
});

const startingVideos = (() => {
	const videoMusicURL = "https://www.youtube.com/embed/h1RxhtFYb2w";
	const videoMusicIDCategory = "Music";
	const videoMovieURL = "https://www.youtube.com/embed/Bu00-WZeNlI";
	const videoMovieIDCategory = "Movies";
	const videoSerieURL = "https://www.youtube.com/embed/YITf1X6hNls";
	const videoSerieIDCategory = "Series";
	let initialMultimediaMusic = new Reproductor(`${videoMusicURL}`, `${videoMusicIDCategory}`);
	let initialMultimediaMovie = new Reproductor(`${videoMovieURL}`, `${videoMovieIDCategory}`);
	let initialMultimediaSerie = new Reproductor(`${videoSerieURL}`, `${videoSerieIDCategory}`);
	initialMultimediaMusic.playMultimedia();
	initialMultimediaMovie.playMultimedia();
	initialMultimediaSerie.playMultimedia();
	initialMultimediaMusic.setInicio(0);
})();
