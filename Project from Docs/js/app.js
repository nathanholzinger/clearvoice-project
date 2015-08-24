$(document).ready(function() {

var images = [{}];
for (var i=0; i<31; i++) {
  images[i] = {id : i};
}

function buildData() {
  var data = sampleTwitterData.statuses;
  var temp = [];
  var words = [];
  var wordFrequency = [];
  var exclude = stopWords;

  for (var i=0; i<data.length; i++) {
    temp = data[i].text.split(" ");
    for (var j=0; j<temp.length; j++) {
      words.push(temp[j]);
    }
  }
  
  temp = words;
  for (var i=0; i<words.length; i++) {
    if (temp[i].toString() !== "") {
      wordFrequency.push({word: temp[i], freq: 1})
    }
    for (var j=i+1; j<words.length; j++) {
      if (temp[i].toString().toLowerCase() === temp[j].toString().toLowerCase()) {
        wordFrequency[wordFrequency.length-1].freq++
        temp[j] = "";
      }
    }
  }



  for (var i=0; i<wordFrequency.length; i++) {
    
    for (var j=0; j<exclude.length; j++) {
      if (wordFrequency[i].word.toString().toLowerCase() === exclude[j].toString().toLowerCase() ) {
        wordFrequency.splice(i,1);
        i--;
        j=exclude.length;
      }
    }
  }

  for (var i=0; i<wordFrequency.length; i++) {
    for (var j=0; j<wordFrequency.length; j++) {
      if (wordFrequency[i].freq > wordFrequency[j].freq) {
        temp[0] = wordFrequency[i];
        wordFrequency[i] = wordFrequency[j];
        wordFrequency[j] = temp[0];
      }
    }
  }

  console.log(wordFrequency)

  
}



// function buildData() {
//   var data = commonWords;
//   var exclude = stopWords;

//   for (var i=0; i<data.length; i++) {
//     for (var j=0; j<exclude.length; j++) {
//       if ( data[i][0].toString().toLowerCase() === exclude[j].toString().toLowerCase() ) {
//         data.splice(i,1);
//         i--;
//         j=exclude.length;
//       }
//     }
//   }

//   return data;
// }

//FUNCTION : BUILD QUERY TAGS
//A request is a list of 3 tags that are sent to Flickr.
//The 3 tags sent are the top 3 keywords from the user's twitter account
//After each request is built the value of the 3 keywords is reduced so that other keywords can surface to the top and be used in the collage
function buildQueryTags(data) {
  var qT = new Array();
  var depreciation = .5;
  var temp;

  for (var i=0; i<images.length; i++) {
    qT = [data[0][0], data[1][0]];
    qS = [data[0][1], data[1][1]];
    images[i].queryTags = qT;
    images[i].queryStrength = (qS[0] + qS[1]) / 2;

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

//FUNCTION : QUERY FLICKR
function queryFlickr(){
  var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  var flickrQuery = {format: "json"};
  var c = 0;
  var gridSize = Math.round(($("#collage").width()-15)/10);
  var temp;


  for (var i=0; i<images.length; i++) {
    flickrQuery.tags = images[i].queryTags.toString();

    $.getJSON(flickrAPI, flickrQuery, function(data){
      images[c].data = data;

      if (data.items.length > 0) {
        images[c].url = data.items[0].link.toString();
        images[c].source = data.items[0].media.m;
        images[c].img = new Image();
        images[c].img.src = images[c].source;
      } else {
        images[c].url = "";
        images[c].source = ""
      }

      $('#image'+c).css('background-image', 'url(' + images[c].source + ')');
      $('#image'+c).css('background-size', images[c].imageSize*gridSize + 'px ' + images[c].imageSize*gridSize + 'px');
      
      c++;
    });
  }
}

//FUNCTION : BUILD COLLAGE GRID
//defines the size of each image and the place that the image will go in the collage
//Currently there is only one collage shape hardcoded
//Eventually, the intention is for the grid to be procedurally generated so each shape is different
function buildCollageGrid() {
  var gridSize = Math.floor(($("#collage").width()-30)/10);
  var rngR = 0;
  var rngG = 0;
  var rngB = 0;
  var width = 0;
  var height = 0;

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

  var collageHTML = '';
  for (var i=0; i<images.length; i++) {
    collageHTML += '<canvas id="image' + i + '" ';
    collageHTML += 'width="' + gridSize*imageSizes[i] + '" height="' + gridSize*imageSizes[i] + '" style="background-color: #cccccc;"';
    collageHTML += '></canvas>';
  }
  $("#collage").html(collageHTML);

  for (var i=0; i<images.length; i++) {
    rngR = Math.floor((Math.random()*128))+128;
    rngG = Math.floor((Math.random()*128))+128;
    rngB = Math.floor((Math.random()*128))+128;
    $('#image'+i).css('background-color', 'rgb(' + rngR + ',' + rngG + ',' + rngB + ')');
    $('#image'+i).css('box-shadow', 'inset 2px 2px #ffffff');
    $('#image'+i).css('background-position', 'center center');
    $('#image'+i).css('background-size', gridSize*imageSizes[i] + 'px ' + gridSize*imageSizes[i] + 'px');
    $('#image'+i).css('position', 'absolute');
    $('#image'+i).offset({left: 8+gridSize*gridPlacements[i][0], top: 88+gridSize*gridPlacements[i][1]})
  }

}

buildCollageGrid();

//ON CLICK FUNCTION
$('#get-data').click(function() {
  var keywordData = buildData();
  buildQueryTags(keywordData);
  queryFlickr();
});

}); //end document.ready function
  