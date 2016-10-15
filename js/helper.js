/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
function HTMLheaderName(data) {
  return '<h1 id="name">%data%</h1>'.replace("%data%", data);
}
function HTMLheaderRole(data) {
  return '<span class="role">%data%</span><hr>'.replace("%data%", data);
}

function HTMLcontactGeneric(data) {
  return '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>'.replace("%data%", data);
}
function HTMLmobile(data) {
  return '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>'.replace("%data%", data);
}
function HTMLemail(data) {
  return '<li class="flex-item"><span class="orange-text">email</span><span class="white-text"><a class="profile-link" href="mailto://%data%">%data%</a></span></li>'.replace(/%data%/g, data);
}
function HTMLtwitter(data) {
  return '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text"><a class="profile-link" href="https://www.twitter.com/%data%">%data%</a></span></li>'.replace(/%data%/g, data);
}
function HTMLgithub(data) {
  return '<li class="flex-item"><span class="orange-text">github</span><span class="white-text"><a class="profile-link" href="https://www.github.com/%data%">%data%</a></span></li>'.replace(/%data%/g, data);
}
function HTMLblog(data) {
  return '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>'.replace("%data%", data);
}
function HTMLlocation(data) {
  return '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>'.replace("%data%", data);
}

function HTMLbioPic(data) {
  return '<img src="%data%" class="biopic">'.replace("%data%", data);
}
function HTMLwelcomeMsg(data) {
  return '<span class="welcome-message">%data%</span>'.replace("%data%", data);
}

function HTMLskillsStart(data) {
  return '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>'.replace("%data%", data);
}
function HTMLskills(data) {
  return '<li class="flex-item"><span class="white-text">%data%</span></li>'.replace("%data%", data);
}

function HTMLworkStart(data) {
  return '<div class="work-entry"></div>'.replace("%data%", data);
}
function HTMLworkEmployer(data) {
  return '<a href="%url%">%data%'.replace("%data%", data);
}
function HTMLworkTitle(data) {
  return ' - %data%</a>'.replace("%data%", data);
}
function HTMLworkDates(data) {
  return '<div class="date-text">%data%</div>'.replace("%data%", data);
}
function HTMLworkLocation(data) {
  return '<div class="location-text">%data%</div>'.replace("%data%", data);
}
function HTMLworkDescription(data) {
  return '<p><br>%data%</p>'.replace("%data%", data);
}

function HTMLprojectStart(data) {
  return '<div class="project-entry"></div>'.replace("%data%", data);
}
function HTMLprojectTitle(data) {
  return '<a href="%url%">%data%</a>'.replace("%data%", data);
}
function HTMLprojectDates(data) {
  return '<div class="date-text">%data%</div>'.replace("%data%", data);
}
function HTMLprojectDescription(data) {
  return '<p><br>%data%</p>'.replace("%data%", data);
}
function HTMLprojectImage(data) {
  return '<img class="project-image" src="%data%">'.replace("%data%", data);
}

function HTMLschoolStart(data) {
  return '<div class="education-entry"></div>'.replace("%data%", data);
}
function HTMLschoolName(data, url) {
  return '<a href="%url%">%data%'.replace("%data%", data).replace("%url%", url);
}
function HTMLschoolDegree(data) {
  return ' -- %data%</a>'.replace("%data%", data);
}
function HTMLschoolDates(data) {
  return '<div class="date-text">%data%</div>'.replace("%data%", data);
}
function HTMLschoolLocation(data) {
  return '<div class="location-text">%data%</div>'.replace("%data%", data);
}
function HTMLschoolMajor(data) {
  return '<em><br>Major: %data%</em>'.replace("%data%", data);
}

function HTMLonlineClasses() {
  return '<h3>Online Classes</h3>';
}
function HTMLonlineTitle(data, url) {
  return '<a href="%url%">%data%'.replace("%data%", data).replace("%url%", url);
}
function HTMLonlineSchool(data) {
  return ' - %data%</a>'.replace("%data%", data);
}
function HTMLonlineDates(data) {
  return '<div class="date-text">%data%</div>'.replace("%data%", data);
}
function HTMLonlineURL(data) {
  return '<br><a href="%data%">%data%</a>'.replace(/%data%/g, data);
}

function internationalizeButton() {
  return '<button>Internationalize</button>';
}
function googleMap() {
  return '<div id="map"></div>';
}


/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var $name = $('#name');
    var iName = inName($name.text()) || function(){};
    $name.html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
var clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(profile.bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    profile.education.schools.forEach(function(school){
      locations.push(school.location);
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    profile.work.jobs.forEach(function(job){
      locations.push(job.location);
    });

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
    map.setZoom(Math.min(10, map.getZoom()));
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    locations.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});
