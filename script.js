const mapSpace =document.getElementById('map-container');
 
getApi2()

function getApi(){  
preventDefault();  
requestUrl =  'https://api.musixmatch.com/ws/1.1/chart.artists.gethttps://api.musixmatch.com/ws/1.1/chart.artists.get?page=1&page_size=3&country=itapikey=14780e106eef4c8cc8559fc275070950'
fetch(requestUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
            console.log(data)
    });}

function getApi2(){
    
requestUrl =  'https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672&format=png&zoom=12&size=400x400&key=AIzaSyB3UbSsi87BYPQG_akKhzUbuUIpc5xWhZs'
        
  fetch(requestUrl)
      .then(function (response) {
          console.log(response)
           map= document.createElement('img')
           map.setAttribute('src',response.url)
           console.log(map)
           mapSpace.append(map)
          })
  ;}