const countrySearch = document.getElementById('countryname')
const searchButton = document.getElementById('search-button')
const artistContainer = document.getElementById('Artist-container')
const clearButton = document.getElementById('clearBtn')
console.log(countrySearch.value)
let map;


//http://api.musixmatch.com/ws/1.1/track.search?q_artist=justin bieber&page_size=3&page=1&s_track_rating=desc
function getApi(country,longName)
{ 
    requestUrl = ('https://api.musixmatch.com/ws/1.1/chart.artists.get?page=1&page_size=10&country='+ country +'&apikey=14780e106eef4c8cc8559fc275070950')
fetch(requestUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (data)
         { 
appendMusic(data, longName)
            console.log(data.message.body.artist_list[0].artist.artist_name)
            console.log(countrySearch.value)
            console.log(data.message.body.artist_list[0].artist.artist_name)
           
    });}

    
    function initMap(){
    let tx = {lat:31.0, lng:-100.0};
    let map = new google.maps.Map(document.getElementById('map'), {zoom: 3, center: tx}
    );
    marker =new google.maps.Marker({position: tx, map: map, draggable: true})
    geocoder = new google.maps.Geocoder();
    lat = marker.getPosition().lat();
    lng = marker.getPosition().lng();
    console.log(lat)
    console.log(lng)
   // marker.addListener('click',markerClick)
   google.maps.event.addListener(marker, 'dragend', function(evt){
    // document.getElementById('current').innerHTML = '<p>Marker dropped: Current Lat: ' + evt.latLng.lat().toFixed(3) + ' Current Lng: ' + evt.latLng.lng().toFixed(3) + '</p>';
    latlng = {lat:marker.getPosition().lat(),lng:marker.getPosition().lng() }
     console.log(latlng)
     geocoder
     .geocode({ location: latlng })
     .then((response) => {
      console.log(response.results[0].address_components)
      for (let i = 0 ; i < response.results[0].address_components.length; i++){
       if(response.results[0].address_components[i].types[0] == 'country'){
        countryCode = response.results[0].address_components[i].short_name
        longName = response.results[0].address_components[i].long_name
        console.log(countryCode) 
        getApi(countryCode, longName)
        }}
      //console.log(response.results[0].address_components[4].short_name.length)
    })
 });}
  
function appendMusic(data,longName){ 
 var countryNameEl = document.createElement('p')
 countryNameEl.innerHTML = longName
  artistContainer.append(countryNameEl)
  for (i =0 ; data.message.body.artist_list.length > i;i++)
  { artistName= data.message.body.artist_list[i].artist.artist_name
  artistNameEl = document.createElement('p')
  artistNameEl.innerHTML = '#'+ (i+1)+'   '+ artistName
  artistContainer.append(artistNameEl)
} 
}

function formSubmitHandler(event){
  event.preventDefault();
  if (countrySearch.value !== '')
    var country = countrySearch.value.trim();
    getCountries(country)
}
 
  

  // function clearContainer(){  
  //    for (i=0; artistContainer.children.length > i; i++)
  //    console.log(artistContainer.children[i])
  //    artistContainer.artistNameEl.innerHTML ='';
  //   }
    
    function getCountries(country,lang = 'en') {
      console.log(country)
      const A = 65
      const Z = 90
      const countryName = new Intl.DisplayNames([lang], { type: 'region' });
      console.log(countryName)
      const countries = {}
      console.log(countries)
      for(let i=A; i<=Z; ++i) {
          for(let j=A; j<=Z; ++j) {
              let code = String.fromCharCode(i) + String.fromCharCode(j)
              let name = countryName.of(code)
              if (name == country) {
                 var longName = name
                 country = code
                getApi(country,longName)
              }
          }
      } 
      return countries
    
  }


searchButton.addEventListener('click', formSubmitHandler);
// clearButton.addEventListener('click', clearContainer);
    

function clearAll() {
  artistContainer.innerHTML = "";
  countrySearch.value = "";

}

clearButton.addEventListener('click', clearAll);

