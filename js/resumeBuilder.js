var bio = {
    "name" : "Euclides Moreno",           // HTMLheaderName
    "role" : "Software developer",        // HTMLheaderRole
    "contactInfo" : {
        "cellphone" : "+49 176 57808422", // HTMLmobile
        "email" : "evclides@gmail.com",   // HTMLemail
        "twitter" : "@evclides",          // HTMLtwitter
        "gitHub" : "evclides",            // HTMLgithub
        "address" : "Krefeld"    // HTMLlocation
    },
    "message" : "Venezuelan, computer engineer, IMB i & JS Software developer, amateur tennis player & Aikido practitioner, citizen of this world", // HTMLwelcomeMsg
    "skills" : ["IBM i", "DB2", "CL", "RPG", "SQL", "COBOL"], // HTMLskillsStart, HTMLskills
    "bioPic" : "images/perfil_linkedin.jpg" // HTMLbioPic
};

// In JavaScript Object Notation (JSON)
var education = {
    "schools": [
        {
            "name": "Universidad de Oriente",
            "city": "Puerto la Cruz",
            "degree": "B.Sc. in Systems Engineering",
            "majors": ["IS", "SPI"],
            "dates": "2001-2007",
            "url": "http://www.anz.udo.edu.ve/"
        },
        {
            "name": "Universidad Carlos III de Madrid",
            "city": "Leganes",
            "degree": "M.Eng. in Computer Engineering",
            "majors": ["IS", "DSS"],
            "dates": "2011-2013",
            "url": "http://www.uc3m.es/Inicio"
        },
        {
            "name": "Universidad Carlos III de Madrid",
            "city": "Leganes",
            "degree": "M.Sc. in Science and Computer Technology",
            "majors": ["SPI"],
            "dates": "2013-2015",
            "url": "http://www.uc3m.es/Inicio"
        }
    ],
    "onlineCourses": [
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": "2016",
            "url": "https://www.udacity.com/"
        },
        {
            "title": "Linux Command Line Basics",
            "school": "Udacity",
            "dates": "2016",
            "url": "https://www.udacity.com/"
        },
        {
            "title": "How to Use Git and GitHub",
            "school": "Udacity",
            "dates": "2016",
            "url": "https://www.udacity.com/"
        }
    ]
}; // Pasar por jsonlint.com para validar

// In JavaScript Object Notation (JSON)
var work = {
    "jobs": [
        {
            "employer": "Bucher Reisen GmbH",
            "title": "Software developer",
            "dates": "2014-Present",
            "location": "Meerbusch",
            "description": "Analysis, Design, Development and Maintenance of applications for a Tour Operator, leader in central Europe, on IBM i and JavaScript environments"
        },
        {
            "employer": "Consorcio Credicard C.A.",
            "title": "Analyst Programmer",
            "dates": "2008-2011",
            "location": "Caracas",
            "description": "Analysis, Design, Development and Maintenance of applications for a firm responsible for processing electronic payment means on the IBM i environment (former part of the Grupo Santander)"
        }
    ]
}; // Pasar por jsonlint.com para validar

var project = {
    "projects": [
        {
            "title": "Booking engine enhancements",
            "dates": "2016",
            "description": "General frontend and presentation enhancements on the booking engine belonging the Phoenix Booking System",
            "images": ["https://placekitten.com/197/148", "https://placekitten.com/197/148"]
        },
        {
            "title": "Hotel service enhancements",
            "dates": "2016",
            "description": "General frontend and presentation enhancements on the booking engine belonging the Phoenix Booking System",
            "images": ["https://placekitten.com/197/148"]
        }
    ]
}; // Pasar por jsonlint.com para validar

// #header
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

// #topContacts
var formattedCellphone = HTMLmobile.replace("%data%", bio.contactInfo.cellphone);
$("#topContacts").append(formattedCellphone);
var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
$("#topContacts").append(formattedEmail);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contactInfo.twitter);
$("#topContacts").append(formattedTwitter);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contactInfo.gitHub);
$("#topContacts").append(formattedGitHub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.address);
$("#topContacts").append(formattedLocation);

// #header
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.message);
$("#header").append(formattedMessage);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

// #skills
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkills);

    formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkills);

    formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkills);

    formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkills);

    formattedSkills = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedSkills);

    formattedSkills = HTMLskills.replace("%data%", bio.skills[5]);
    $("#skills").append(formattedSkills);
};

// #workExperience
work.display = function() { // Estoy agregando una función al objeto "work"
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedWorkDates);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedWorkLocation);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedWorkDescription);
    };
};

work.display();

// #projects
project.display = function() { // Estoy agregando una función al objeto "project"
    for (pi in project.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.projects[pi].title);
        $(".project-entry:last").append(formattedProjectTitle);

        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.projects[pi].dates);
        $(".project-entry:last").append(formattedProjectDates);

        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.projects[pi].description);
        $(".project-entry:last").append(formattedProjectDescription);

        if (project.projects[pi].images.length > 0) {
            for (image in project.projects[pi].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", project.projects[pi].images[image]);
                $(".project-entry:last").append(formattedProjectImage);
            };
        };
    };
};

project.display();

// #education
education.displaySchool = function() { // Estoy agregando una función al objeto "education"
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedNameDegree = formattedSchoolName + formattedSchoolDegree;
        $(".education-entry:last").append(formattedNameDegree);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
        $(".education-entry:last").append(formattedSchoolLocation);

            for (var i = 0; i < education.schools[school].majors.length; i++) {
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[i]);
                $(".education-entry:last").append(formattedSchoolMajor);
            };
    };
};

education.displaySchool();

// #education
education.displayMoocs = function() {
    $(".education-entry:last").append(HTMLonlineClasses);
    for (mooc in education.onlineCourses) {

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[mooc].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[mooc].school);
        var formattedTitleOnlineSchool = formattedOnlineTitle + formattedOnlineSchool;
        $(".education-entry:last").append(formattedTitleOnlineSchool);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[mooc].dates);
        $(".education-entry:last").append(formattedOnlineDates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[mooc].url);
        $(".education-entry:last").append(formattedOnlineURL);
    };
};

education.displayMoocs();

function inName(name) {
  name = name.trim().split(" "); // Separo el nombre y el apellido a través de " "
  console.log(name); // Muestro en consola nombre y apellido separados
  name[1] = name[1].toUpperCase(); // convierto a mayúsculas el apellido
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  //        convierte 1ra letra a mayúsc.      convierte el resto del nombre a minús
  //        de pos 0 a 1 sin incluir 1         de posición 1 en adelante
  return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);