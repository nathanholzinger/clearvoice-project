$(document).ready(function() {

var images = [{}];
for (var i=0; i<31; i++) {
  images[i] = {id : i};
}


//FUNCTION : BUILD DATA
//Collect data to build an array of most commonly used words along with the frequency of their use
//Currently the data is just collected from the commonWords array in commonWords.js 
//Eventually, the user will log into Twitter and their data will come from their tweets
function buildData() {
  var data = commonWords;
  var exclude = stopWords;

  for (var i=0; i<data.length; i++) {
    for (var j=0; j<exclude.length; j++) {
      if ( data[i][0].toString().toLowerCase() === exclude[j].toString().toLowerCase() ) {
        data.splice(i,1);
        i--;
        j=exclude.length;
      }
    }
  }

  return data;
}

//FUNCTION : BUILD QUERY TAGS
//A request is a list of 3 tags that are sent to Flickr.
//The 3 tags sent are the top 3 keywords from the user's twitter account
//After each request is built the value of the 3 keywords is reduced so that other keywords can surface to the top and be used in the collage
function buildQueryTags(data) {
  var qT = new Array();
  var depreciation = .5;
  var temp;

  for (var i=0; i<images.length; i++) {
    qT = [data[0][0], data[1][0], data[2][0]];
    qS = [data[0][1], data[1][1], data[2][1]];
    images[i].queryTags = qT;
    images[i].queryStrength = (qS[0] + qS[1] + qS[2]) / 3;

    data[0][1] = data[0][1] * depreciation;
    data[1][1] = data[1][1] * depreciation;
    data[2][1] = data[2][1] * depreciation;

    for (var j=0; j<images.length; j++) {
      for (var k=0; k<images.length; k++) {
        if (data[j][1] > data[k][1]) {
          temp = data[j];
          data[j] = data[k];
          data[k] = temp;
        }
      }
    }

  }
}

//FUNCTION : BUILD COLLAGE GRID
//defines the size of each image and the place that the image will go in the collage
//Currently there is only one collage shape hardcoded
//Eventually, the intention is for the grid to be procedurally generated so each shape is different
function buildCollageGrid() {
  var imageSizes = [
    4, 4, 4, 
    2, 2, 2, 2, 2, 2, 2, 2, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
  ];
  var gridPlacements = [
    [0,2], [4,0], [2,6],
    [4,4], [0,6], [6,4], [6,6], [8,4], [6,8], [0,0], [8,0],
    [3,1], [8,3], [8,6], [2,1], [3,0], [8,2], [9,3], [9,6], [8,7], [2,0], [9,2], [9,7], [8,8], [1,8], [9,8], [8,9], [1,9], [0,8], [9,9], [0,9]
  ]

  for (var i=0; i<images.length; i++) {
    images[i].imageSize = imageSizes[i];
    images[i].gridPlace = gridPlacements[i];
  }
}

//FUNCTION : QUERY FLICKR
function queryFlickr(){
  var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  var flickrQuery = {format: "json"};
  var c = 0;
  var gridSize = Math.round(($("#collage").width()-15)/10);
  
  
  for (var i=0; i<images.length; i++) {
    flickrQuery.tags = images[i].queryTags.toString();

    $.getJSON(flickrAPI, flickrQuery, function(data){
      images[c].data = data;
      console.log(data);

      if (data.items.length > 0) {
        images[c].url = data.items[0].link;
        images[c].source = data.items[0].media.m;
      } else {
        images[c].url = "http://hdwallpapersfit.com/wp-content/uploads/2015/03/wpid-Potato-Wallpaper-3.jpg";
        images[c].source = "http://hdwallpapersfit.com/wp-content/uploads/2015/03/wpid-Potato-Wallpaper-3.jpg"
      }
      
      images[c].HTML = '<img src="' + images[c].source + '" class="collage-image"></img>'
      collageHTML = '';
      for (var j=0; j<c; j++){
        collageHTML += images[j].HTML;
      }
      $('#collage').html(collageHTML);
      
      c++;
    });
  }
}

//ON CLICK FUNCTION
$('#getData').click(function() {
  var keywordData = buildData();
  buildQueryTags(keywordData);
  buildCollageGrid();
  queryFlickr();
});

}); //end document.ready function
  