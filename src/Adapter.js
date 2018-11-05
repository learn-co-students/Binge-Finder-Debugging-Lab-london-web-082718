class Adapter {
  static getShows (){
    return fetch("http://api.tvmaze.com/shows")
    .then(resp => resp.json())
  }

  static getShowEpisodes (showID){
    return fetch(`http://api.tvmaze.com/shows/${showID}/episodes`)
    .then(resp => resp.json)
  }
}

export default Adapter
