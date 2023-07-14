const mapSpace =document.getElementById('map-container')
const countrySearch = document.getElementById('cityname')
const searchButton = document.getElementById('search-button')
console.log(countrySearch.value)
getApi2()
let obj ={ 'united Kingdon': 'uk'}

//http://api.musixmatch.com/ws/1.1/track.search?q_artist=justin bieber&page_size=3&page=1&s_track_rating=desc
function getApi(){    
  event.preventDefault()
  let country = countrySearch.value
requestUrl = ('https://api.musixmatch.com/ws/1.1/chart.artists.get?page=1&page_size=10&country='+ country +'&apikey=14780e106eef4c8cc8559fc275070950')
fetch(requestUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
            console.log(data)
            console.log(countrySearch.value)
           
    });}

    function getApi2(){
    
        requestUrl =  'https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672&format=png&zoom=12&size=400x400&key=AIzaSyB3UbSsi87BYPQG_akKhzUbuUIpc5xWhZs'
        
        fetch(requestUrl)
                .then(function (response) {
                  console.log(response)
                  map = document.createElement('img')
                  map.setAttribute('src',response.url)
              
                  console.log(map)
                  mapSpace.append(map)
                })
 
                  ;}
    searchButton.addEventListener('click',getApi)              