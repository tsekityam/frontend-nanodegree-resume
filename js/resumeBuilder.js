var profile = {
  work: {
    "jobs": [
      {
        "employer": "Navicat",
        "url": "https://www.navicat.com",
        "title": "Junior Programmer",
        "location": "Hong Kong",
        "dates": "2014 - in progress",
        "description": "Work on Navicat for Mac, a database management tools. I focus on the UI elements and the logic behide them, such as the query builder and query editor."
      }
    ]
  },
  projects: {
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
    ]
  },
  bio: {
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
    }
  },
  education: {
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
    ]
  }
};

view = {
  init: function() {
    $("#mapDiv").append(googleMap());
  },
  display: function(profile) {
    this.displayBio(profile.bio);
    this.displayWork(profile.work);
    this.displayProjects(profile.projects);
    this.displayEducation(profile.education);
  },
  // MARK: display bio
  $header: $("#header"),
  $skill: undefined,
  $topContacts: $("#topContacts"),
  $footerContacts: $("#footerContacts"),
  displayBio: function(bio) {
    this.displayHeader(bio);
    this.displaySkills(bio.skills);
    this.displayTopContacts(bio.contacts);
    this.displayFooterContacts(bio.contacts);
  },
  displayHeader: function(bio) {
    this.$header.prepend(HTMLheaderRole(bio.role));
    this.$header.prepend(HTMLheaderName(bio.name));
    this.$header.prepend(HTMLwelcomeMsg(bio.welcomeMessage));
    this.$header.prepend(HTMLbioPic(bio.biopic));
  },
  displaySkills: function(skills) {
    if (skills.length > 0) {
      this.$header.append(HTMLskillsStart);
      this.$skill = $("#skills");
      skills.forEach(function(skill) {
        view.displaySkill(skill);
      });
    }
  },
  displaySkill: function(skill) {
    this.$skill.append(HTMLskills(skill));
  },
  displayTopContacts: function(contacts) {
    this.$topContacts.append(HTMLemail(contacts.email));
    this.$topContacts.append(HTMLtwitter(contacts.twitter));
    this.$topContacts.append(HTMLgithub(contacts.github));
    this.$topContacts.append(HTMLmobile(contacts.mobile));
    this.$topContacts.append(HTMLlocation(contacts.location));
  },
  displayFooterContacts: function(contacts) {
    this.$footerContacts.append(HTMLemail(contacts.email));
    this.$footerContacts.append(HTMLtwitter(contacts.twitter));
    this.$footerContacts.append(HTMLgithub(contacts.github));
    this.$footerContacts.append(HTMLmobile(contacts.mobile));
    this.$footerContacts.append(HTMLlocation(contacts.location));
  },
  // MARK: displayWork
  $workExperience: $("#workExperience"),
  $lastWorkEntry: undefined,
  displayWork: function(work) {
    work.jobs.forEach(function(job) {
      view.displayJob(job);
    });
  },
  displayJob: function(job) {
    this.$workExperience.append(HTMLworkStart());
    this.$lastWorkEntry = $(".work-entry:last");

    this.$lastWorkEntry.append(HTMLworkEmployer(job.employer).replace("%url%", job.url) + HTMLworkTitle(job.title));
    this.$lastWorkEntry.append(HTMLworkDates(job.dates));
    this.$lastWorkEntry.append(HTMLworkLocation(job.location));
    this.$lastWorkEntry.append(HTMLworkDescription(job.description));
  },
  // MARK: display project
  $project: $("#projects"),
  $lastProjectEntry: undefined,
  displayProjects: function(projects) {
    projects.projects.forEach(function(project) {
      view.displayProject(project);
    });
  },
  displayProject: function(project) {
    this.$project.append(HTMLprojectStart());
    this.$lastProjectEntry = $(".project-entry:last");

    this.$lastProjectEntry.append(HTMLprojectTitle(project.title).replace("%url%", project.url));
    this.$lastProjectEntry.append(HTMLprojectDates(project.dates));
    this.$lastProjectEntry.append(HTMLprojectDescription(project.description));
    project.images.forEach(function(image) {
      view.displayProjectImage(image);
    });
  },
  displayProjectImage: function(image) {
    this.$lastProjectEntry.append(HTMLprojectImage(image));
  },
  // MARK: display Education
  $education: $("#education"),
  $lastEducationEntry: undefined,
  displayEducation: function(education) {
    this.$lastEducationEntry = $(".education-entry:last");
    education.schools.forEach(function(school) {
      view.displaySchool(school);
    });
    education.onlineCourses.forEach(function(onlineCourse) {
      view.displayOnlineCourse(onlineCourse);
    });
  },
  displaySchool: function(school) {
    this.$education.append(HTMLschoolStart());

    this.$lastEducationEntry.append(HTMLschoolName(school.name, school.url) + HTMLschoolDegree(school.degree));
    this.$lastEducationEntry.append(HTMLschoolDates(school.dates));
    this.$lastEducationEntry.append(HTMLschoolLocation(school.location));
    school.majors.forEach(function(major) {
      view.displayMajor(major);
    });
  },
  displayMajor: function(major) {
    this.$lastEducationEntry.append(HTMLschoolMajor(major));
  },
  displayOnlineCourse: function (onlineCourse) {
    this.$education.append(HTMLonlineClasses());
    this.$education.append(HTMLschoolStart());
    this.$lastEducationEntry = $(".education-entry:last");

    this.$lastEducationEntry.append(HTMLonlineTitle(onlineCourse.title, onlineCourse.schoolUrl) + HTMLonlineSchool(onlineCourse.school));
    this.$lastEducationEntry.append(HTMLonlineDates(onlineCourse.dates));
    this.$lastEducationEntry.append(HTMLonlineURL(onlineCourse.courseUrl));

  }
}

view.init();
view.display(profile);
