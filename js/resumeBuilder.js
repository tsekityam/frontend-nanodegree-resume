var work = {
  "jobs": [
    {
      "employer": "Navicat",
      "url": "https://www.navicat.com",
      "title": "Junior Programmer",
      "location": "Hong Kong",
      "dates": "2014 - in progress",
      "description": "Work on Navicat for Mac, a database management tools. I focus on the UI elements and the logic behide them, such as the query builder and query editor."
    }
  ],
  display: function() {
    this.jobs.forEach(function(job) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployerTitle = HTMLworkEmployer.replace("%data%", job.employer).replace("%url%", job.url) + HTMLworkTitle.replace("%data%", job.title);
      $(".work-entry:last").append(formattedEmployerTitle);
      $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
      $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
      $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
    });
  }
};

var projects = {
  "projects": [
    {
      "title": "Cangjie Helper for Android",
      "url": "https://github.com/tsekityam/Cangjie-Helper-for-Android",
      "dates": "2016",
      "description": "Cangjie is one of the most common Chinese input methods in Hong Kong. It is not based on romanization system but the graphological aspect of the characters. Eash Chinese characterscan be repersented in 5 input tokens. This referencing tool is created for those who do not familiar with Cangjie. They can use it to get the input code of any Chinese character. By the way, this app should be the first Cangjie input code finder following material design guideline.",
      "images": [
        "images/cangjie-helper-feature-graphic.png",
        "images/cangjie-helper-logo.png"
      ]
    },
    {
      "title": "Aria2 remote for Android",
      "url": "https://github.com/tsekityam/Aria2-Remote-for-Android",
      "dates": "2016",
      "description": "Aria2 is a download tool that supports multiple protocol. The goal of this project is create an app that allows users manage download tasks on-the-go. Although the app only supports a few function calls, the app is well enough to fulfil it's goal. User can start, stop or pause the task, which should fit most of the needs.",
      "images": [
        "images/aria2-remote-feature-graphic.png",
        "images/aria2-remote-logo.png"
      ]
    },
    {
      "title": "LoveLive! School idol festival Helper",
      "url": "https://github.com/sifhelper/sifhelper.github.io",
      "dates": "2016",
      "description": "LoveLive! School idol festival is one of the most popular rythmn action game in Japan. In order to get the event only item, spending of lovecas is a must. This helper tool is used to estimate the number of loveca needs to be used during event in order to rearch a specified goal. Now the tool only supports one of the four event types and is under development.",
      "images": [
        "images/sif-helper-screenshot-osx.png",
        "images/sif-helper-screenshot-ios.png"
      ]
    }
  ],
  display: function() {
    this.projects.forEach(function(project) {
      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title).replace("%url%", project.url));
      $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
      $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));
      project.images.forEach(function(image) {
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", image));
      });
    });
  }
};

var bio = {
  "name": "Tse Kit Yam",
  "role": "Software Developer, Pokemon Trainer",
  "welcomeMessage": "Hello World!",
  "biopic": "images/profile.jpg",
  "contacts": {
    "mobile": "N/A",
    "email": "me@kytse.com",
    "twitter": "@tsekityam",
    "github": "tsekityam",
    "location": "Hong Kong"
  },
  "skills": ["Java", "Objective-C", "JavaScript", "HTML5", "CSS", "Pokemon GO"],
  display: function() {
    if (this.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      this.skills.forEach(function(skill) {
        $("#skills").append(HTMLskills.replace("%data%", skill));
      });
    }

    $("#header").prepend(HTMLheaderRole.replace("%data%", this.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", this.name));
    $("#header").prepend(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));
    $("#header").prepend(HTMLbioPic.replace("%data%", this.biopic));

    $("#topContacts").append(HTMLemail.replace(/%data%/g, this.contacts.email));
    $("#topContacts").append(HTMLtwitter.replace(/%data%/g, this.contacts.twitter));
    $("#topContacts").append(HTMLgithub.replace(/%data%/g, this.contacts.github));
    $("#topContacts").append(HTMLmobile.replace("%data%", this.contacts.mobile));
    $("#topContacts").append(HTMLlocation.replace("%data%", this.contacts.location));

    $("#footerContacts").append(HTMLemail.replace(/%data%/g, this.contacts.email));
    $("#footerContacts").append(HTMLtwitter.replace(/%data%/g, this.contacts.twitter));
    $("#footerContacts").append(HTMLgithub.replace(/%data%/g, this.contacts.github));
    $("#footerContacts").append(HTMLmobile.replace("%data%", this.contacts.mobile));
    $("#footerContacts").append(HTMLlocation.replace("%data%", this.contacts.location));
  }
};

var education = {
  "schools": [
    {
      "name": "HKUST",
      "location": "Hong Kong",
      "degree": "BEng",
      "dates": "2011 - 2014",
      "majors": ["Computer Science"],
      "url": "https://www.ust.hk"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End Web Developer Nanodegree",
      "school": "Udacity",
      "schoolUrl": "https://www.udacity.com",
      "dates": "2016 - in progress",
      "courseUrl": "https://classroom.udacity.com/nanodegrees/nd001/syllabus"
    }
  ],
  display: function() {
    this.schools.forEach(function(school) {
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(HTMLschoolName.replace("%data%", school.name).replace("%url%", school.url) + HTMLschoolDegree.replace("%data%", school.degree));
      $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
      $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
      school.majors.forEach(function(major) {
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", major));
      });
    });
    this.onlineCourses.forEach(function(onlineCourse) {
      $("#education").append(HTMLonlineClasses);
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", onlineCourse.title).replace("%url%", onlineCourse.schoolUrl) + HTMLonlineSchool.replace("%data%", onlineCourse.school));
      $(".education-entry:last").append(HTMLonlineDates.replace("%data%", onlineCourse.dates));
      $(".education-entry:last").append(HTMLonlineURL.replace(/%data%/g, onlineCourse.courseUrl));
    });
  }
};

work.display();
bio.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);

$(function() {
  $(".profile-link").hover(function() {
    $(this).css("color", "#1199c3");
  }, function() {
    $(this).css("color", "white");
  });
});
