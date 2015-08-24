$(document).ready(function() {

  //Global variable images, array of objects that include information such as the url to grab the image from 
  // and the position and size of the image when it is placed into the collage
  var images = [{}];
  for (var i=0; i<31; i++) {
    images[i] = {id : i};
  }

  //--------------------------------------------------------------------------------
  //FUNCTION : BUILD DATA
  //takes text from tweets, parses it, and builds a list of the most frequently used words
  function buildData() {
    var data = sampleTwitterData.statuses;
    var temp = [];
    var words = [];
    var wordFrequency = [];
    var exclude = stopWords;

    //takes the all of the tweets pulled from the Twitter Query and breaks them down into an array of individual words
    for (var i=0; i<data.length; i++) {
      temp = data[i].text.split(" ");
      for (var j=0; j<temp.length; j++) {
        words.push(temp[j]);
      }
    }
    
    //creates an array of unique words and their frequency. 
    //each array element is an object with a unique ord and the number of times it occurs in the tweets
    words;
    for (var i=0; i<words.length; i++) {temp[i] = true}
    for (var i=0; i<words.length; i++) {
      if (temp[i]) {
        wordFrequency.push({word: words[i], freq: 1})
        for (var j=i+1; j<words.length; j++) {
          if (words[i].toString().toLowerCase() === words[j].toString().toLowerCase()) {
            wordFrequency[wordFrequency.length-1].freq++
            temp[j] = false;
          }
        }
      }
    }

    //removes stop words from the list
    for (var i=0; i<wordFrequency.length; i++) {
      for (var j=0; j<exclude.length; j++) {
        if (wordFrequency[i].word.toString().toLowerCase() === exclude[j].toString().toLowerCase() ) {
          wordFrequency.splice(i,1);
          i--;
          j=exclude.length;
        }
      }
    }

    //orders the word list from most frequently used to least frequently used
    for (var i=0; i<wordFrequency.length; i++) {
      for (var j=0; j<wordFrequency.length; j++) {
        if (wordFrequency[i].freq > wordFrequency[j].freq) {
          temp[0] = wordFrequency[i];
          wordFrequency[i] = wordFrequency[j];
          wordFrequency[j] = temp[0];
        }
      }
    }

    return wordFrequency;
  }

  //--------------------------------------------------------------------------------
  //FUNCTION : BUILD QUERY TAGS
  //builds 31 queries to send to Flickr, a query is 2 tag words taken from the frequent words array
  function buildQueryTags(data) {
    var qT = new Array();
    var depreciation = .5;
    var temp;

    for (var i=0; i<images.length; i++) {
      //takes the top 2 key words to build a query
      qT = [data[0].word, data[1].word];
      qS = [data[0].freq, data[1].freq];
      images[i].queryTags = qT;
      images[i].queryStrength = (qS[0] + qS[1]) / 2;
      console.log("query #" + (i+1) + " : '" + qT[0] + "'(" + qS[0] + ") & '" + qT[1] + "'(" + qS[1] + ")");

      //depricates the value of the key words so that other words can surface to the top and be used in a query
      data[0].freq = data[0].freq * depreciation;
      data[1].freq = data[1].freq * depreciation;

      //reorders the key words from highest to lowest after the top words were depricated
      for (var j=0; j<images.length; j++) {
        for (var k=0; k<images.length; k++) {
          if (data[j].freq > data[k].freq) {
            temp = data[j];
            data[j] = data[k];
            data[k] = temp;
          }
        }
      }

    }
  }

  //--------------------------------------------------------------------------------
  //FUNCTION : QUERY FLICKR
  //takes the tag words and makes the query to Flickr.
  //builds relavent data into the images array objects when the response comes back
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

  //--------------------------------------------------------------------------------
  //FUNCTION : BUILD COLLAGE GRID
  //defines the size of each image and the place that the image will go in the collage
  //Currently there is only one collage shape hardcoded
  function buildCollageGrid() {
    var gridSize = Math.floor(($("#collage").width()-30)/10);
    var rngR = 0;
    var rngG = 0;
    var rngB = 0;
    var width = 0;
    var height = 0;

    //idicates the size of each image, images are all square so a '4' takes up 4x4 spaces in the grid
    var imageSizes = [
      4, 4, 4, 
      2, 2, 2, 2, 2, 2, 2, 2, 
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ];
    //indicates the position to postion in the grid [0]=column and [1]=row, position is aligned to the top left corner
    var gridPlacements = [
      [0,2], [4,0], [2,6],
      [4,4], [0,6], [6,4], [6,6], [8,4], [6,8], [0,0], [8,0],
      [3,1], [8,3], [8,6], [2,1], [3,0], [8,2], [9,3], [9,6], [8,7], [2,0], [9,2], [9,7], [8,8], [1,8], [9,8], [8,9], [1,9], [0,8], [9,9], [0,9]
    ]
    //places size and positon information into the image array
    for (var i=0; i<images.length; i++) {
      images[i].imageSize = imageSizes[i];
      images[i].gridPlace = gridPlacements[i];
    }

    //builds the HTML required to create the collage grid
    var collageHTML = '';
    for (var i=0; i<images.length; i++) {
      collageHTML += '<canvas id="image' + i + '" ';
      collageHTML += 'width="' + gridSize*imageSizes[i] + '" height="' + gridSize*imageSizes[i] + '" style="background-color: #cccccc;"';
      collageHTML += '></canvas>';
    }
    $("#collage").html(collageHTML);

    //creates some css to format the collage grid
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



  //call to build the collage grid. this can be done as soon as the page loads so it is outside the #get-data on click function
  buildCollageGrid();

  //--------------------------------------------------------------------------------
  //FUNCTION : #get-data ON CLICK
  $('#get-data').click(function() {
    var keywordData = buildData();
    buildQueryTags(keywordData);
    queryFlickr();
  });

}); //end document.ready function
  