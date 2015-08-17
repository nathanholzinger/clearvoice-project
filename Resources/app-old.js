$(document).ready(function() {
var images = new Array;

//FUNCTION : BUILD DATA
//Collect data to build an array of most commonly used words along with the frequency of their use
//Eventually, the user will log into Twitter and their data will come from their tweets
//But currently the data is just collected from the commonWords array in commonWords.js  
function buildData() {
  var data = commonWords;
  var exclude = stopWords;

  for (var i=0; i<data.length; i++) {
    for (var j=0; j<exclude.length; j++) {
      if ( data[i][0].toString().toLowerCase() === exclude[j].toString().toLowerCase() ) {
        data.splice(i,1);
        i--;
        j=exclude.length;
      }// end if 
    }// end j loop (each stop word)
  }// end i loop (each common word)

  return data;
}

//FUNCTION : BUILD REQUESTS
//A request is a list of 3 tags that are sent to Flickr.
//The 3 tags sent are the top 3 keywords from the user's twitter account
//After each request is built the value of the 3 keywords is reduced so that other keywords can surface to the top and be used in the collage
function buildQueryTags(data) {
  var collageLength = 31;
  var qT = new Array();
  var depreciation = .5;
  var temp;

  for (var i=0; i<collageLength; i++) {
    qT = [data[0][0], data[1][0], data[2][0]];
    images[i].tags = qT;

    data[0][1] = data[0][1] * depreciation;
    data[1][1] = data[1][1] * depreciation;
    data[2][1] = data[2][1] * depreciation;

    for (var j=0; j<collageLength; j++) {
      for (var k=0; k<collageLength; k++) {
        if (data[j][1] > data[k][1]) {
          temp = data[j];
          data[j] = data[k];
          data[k] = temp;
        }//end if
      }//end k loop
    }//end j loop

  }//end i loop

}

//FUNCTION : BUILD COLLAGE GRID
//The collage grid 
function buildCollageGrid() {
  var gridUnitSize = 360; //in pixels

  var gridHor = 5;
  var gridVert = 5;
  var subHor = 2;
  var subVert = 2;

  var imageSizes = [
    2, 2, 2, 
    1, 1, 1, 1, 1, 1, 1, 1, 
    1/2, 1/2, 1/2, 1/2, 1/2, 1/2, 1/2, 1/2, 1/2, 1/2, 1/2, 1/2, 1/2, 1/2, 1/2, 1/2, 1/2, 1/2, 1/2, 1/2
  ];

  for (i=0; i<imageSizes.length; i++) {
    images[i].size = imageSizes[i];
  }

  return images;
}

//FUNCTION ASSIGN IMAGE URL
function assignHTML(images) {
  for (i=0; i<images.length; i++) {
    images[i].url = 
  }
}

//FUNCTION QUERY FLICKER
//Loops until the collage is built (has 31 images)
//each iteration flickr will be queried by the top 3 keywords (error handling involved if top 3 keywords don't generate a unique image)
//after an iteration all of the used keywords will have their value reduced so that other keywords can surface to the top on the next iteration
function queryFlickr(images){
  var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  var flickrQuery = new Array;
  var flickrCallBack = "assignHTML(images)"
  
  for i
  $.getJSON(flickrAPI, flickrQuery, flickrCallBack);
}



//ON CLICK FUNCTION
$('#getData').click(function() {
  var keywordData = buildData();

  var images = [{}];

  var queryTags = buildQueryTags(keywordData, images);
  queryFlickr(images);
  buildCollage(queryTags, imagePlacement);
});


   //Goes through a loop 31 times:
    //takes the top 3 words in the data array to created a search query in Flickr
    //pulls the first image from query that isn't already in the collage
    reduces the value of the queried words and resorts the data array to allow for other words to get queried
        function queryFlickr(data) {
      var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
      var qTags = [data[0][0],data[1][0],data[2][0]]
      var flickrQuery = {
        tags: qTags.toString(),
        format: "json"
      };
      var flickrData = new Array;
      var collageData = new Array;
      var fillerData = new Array;
      var imageIsFound;
      var imageIsUnique;
      var uniqueIndex;
      
      while (collageData.length < 31) {
        //Set variables to default conditions
        qTags = [data[0][0],data[1][0],data[2][0]];
        flickrQuery.tags = qTags.toString();
        imageIsFound = false;
        imageIsUnique = false;
        uniqueIndex = 0;
        
          //Make sure that the query returns at least 1 result
          console.log(flickrAPI, flickrQuery);
        $.getJSON(flickrAPI, flickrQuery, function(data){
            flickrData = data.items[0].link;
            console.log(data.items)
          });
          console.log(flickrData)
        //console.log(flickrData.responseJSON.items);
        if (flickrData.length === 0) {
          qTags.pop();
          flickrQuery.tags = qTags.toString();
          flickrData = $.getJSON(flickrAPI, flickrQuery, function(){return data});
          if (flickrData.length === 0) {
            qTags.pop();
            flickrQuery.tags = qTags.toString();
            flickrData = $.getJSON(flickrAPI, flickrQuery, function(){return data});
            if (flickrData.length === 0) {
              imageIsFound = false;
            } else {imageIsFound = true}
          } else {imageIsFound = true}
        } else {imageIsFound = true}

        //Make sure that there is at least 1 image in the query that isn't already a part of the collage
        for (var j=0; j<flickrData.length; j++) {
          imageIsUnique = true;
          for (var k=0; k<collageData.length; k++) {
            if (flickrData[j].link == collageData[k].link) {
              imageIsUnique = false;
            } //end if
          } // end k loop (each collage image)
          if (imageIsUnique) {
            uniqueIndex = j;
            break;
          }
        } //end j loop (each flickr image)

        //Put the unique Flickr Image into the Collage collection. Or carry out fail conditions.
        if (imageIsFound && imageIsUnique) { //if image is found and unique then add it to collageData
          if (collageData.length === 0) { //special case if this is the first image added to collageData
            collageData[0] = flickrData.items[uniqueIndex];
          } else { //adding to collageData after first iteration
            collageData.push(flickrData.items[uniqueIndex]);
          }
          for (j=0; j<qTags.length; j++) { //modify the value of the used tags so other tags can surface to the top for use
            data.items[j][1] = data.items[j][1] * .8;
          }
        } else { //if not found and unique then perform fail steps
          if (data.length > 3) { //if there are at least 4 keywords left then remove the top keyword and loop through again
            data.shift();
          } else { //if 3 or less keywords then start using filler images. Reducing keywords further will break the code
            $.getJSON(flickrAPI, {tags:"potato",format:"json"}, function(data){fillerData = data.items});
            for (var j=collageData.length; j<31; j++) {
              rng = Math.floor(Math.random()*flickrData.length);
              collageData.push(fillerData[rng]);
            }
          }
        }

        //Re-sort the Data Array so that new keywords can be used in next search
        for (var j=0; j<data.length; j++) {
          for (var k=0; k<data.length; k++) {
            if (data[j][1] < data[k][1]) {
              temp = data[j][1];
              data[j][1] = data[k][1];
              data[k][1] = temp;
            }
          }
        }
          
    } // end i loop (pull 31 images for collage)

    return collageData;
    }

    var data = buildData();
    var collageData = queryFlickr(data);

}); //end document.ready function
  