var bio = {
	"name" : "Kinan Turjman",
	"role" : "Web Developer",
	"contacts" :
	{
		"mobile" : "111-111-1111",
		"email" : "kinan.t@gmail.com",
		"github" : "kinant",
		"twitter" : "@kinant87",
		"blog" : "kinant.com/blog",
		"location" : "Guatemala"
	},
	"welcomeMsg" : "Welcome to my resume!",
	"skills" : ["pilot","programmer","web developer"],
	"bioPic" : "images/fry.jpg",
	"display" : function() {

		// object to hold all formatted text
		var formattedBio = {};

		// step 1: format & append role and name
		formattedBio.name = HTMLheaderName.replace("%data%", bio.name);
		formattedBio.role = HTMLheaderRole.replace("%data%", bio.role);
		// $("#header").prepend(formattedBio.name + formattedBio.role );

		 // step 2: format & append contacts
		formattedBio.contacts = {
			"mobile" : HTMLmobile.replace("%data%", bio.contacts.mobile),
			"email" : HTMLemail.replace("%data%", bio.contacts.email),
			"twitter" : HTMLtwitter.replace("%data%", bio.contacts.twitter),
			"github" : HTMLgithub.replace("%data%", bio.contacts.github),
			"blog" : HTMLblog.replace("%data%", bio.contacts.blog),
			"location" : HTMLlocation.replace("%data%", bio.contacts.location)
		};
		
		// iterate over each contact element in contacts and .append()
		for (contact in formattedBio.contacts)
		{
			$("#topContacts").append(formattedBio.contacts[contact]);
			$("#footerContacts").append(formattedBio.contacts[contact]);
		}

		// step 3: format & append Picture
		formattedBio.bioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#bio").append(formattedBio.bioPic);

		// step 4: format & append welcome message
		formattedBio.msg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
		$("#bio").append(formattedBio.msg);

		// step 5: format & display Skills
		$("#bio").append(HTMLskillsStart);

		formattedBio.skills = [];
		for (skill in bio.skills)
		{
			formattedBio.skills[skill] = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedBio.skills[skill]);
		}
	}
};

var work = {
	"jobs" : [
		{
			"employer" : "Random Company",
			"title" : "Developer",
			"location" : "Guatemala",
			"dates" : "2009-2011",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
		},
		{
			"employer" : "Total Random Comany",
			"title" : "Programmer",
			"location" : "Venezuela",
			"dates" : "2011-present",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
		}
	],
	"display" : function(){

		// iterate over each job
		for(job in work.jobs)
		{
			var formattedJob = {
				"employer" : HTMLworkEmployer.replace("%data%", work.jobs[job].employer),
				"title" : HTMLworkTitle.replace("%data%", work.jobs[job].title),
				"location" : HTMLworkLocation.replace("%data%", work.jobs[job].location),
				"dates" : HTMLworkDates.replace("%data%", work.jobs[job].dates),
				"description" : HTMLworkDescription.replace("%data%", work.jobs[job].description)
			}

			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(formattedJob["employer"] + formattedJob["title"]);

			for(detail in formattedJob)
			{
				if(detail !== "title" && detail !== "employer")
				{
					$(".work-entry:last").append(formattedJob[detail]);
				}
			}
		}
	}
};

var education = {
	"schools" : [
		{
			"name" : "University Of Michigan",
			"location" : "MI, USA",
			"degree" : "N/A",
			"majors" : ["Chemical Engineering","Computer Engineering"],
			"dates" : "2006-2009",
			"url" : "www.umich.edu"
		},
		{
			"name" : "ESI School Of Business",
			"location" : "Guatemala",
			"degree" : "BBA",
			"majors" : ["Business Administration"],
			"dates" : "2014",
			"url" : "esieduc.org/en/esi-guatemala/"
		}
	],
	"onlineCourses" : [
		{
			"title" : "CS50",
			"school" : "Harvard Extension School",
			"dates" : "2014",
			"url" : "www.cs50.net"
		}
	],
	"display" : function()
	{
		// step 1: display schools
		for(school in education.schools)
		{
			$("#education").append(HTMLschoolStart);

			var formattedSchool = {
				"name" : HTMLschoolName.replace("%data%", education.schools[school].name),
				"location" : HTMLschoolLocation.replace("%data%", education.schools[school].location),
				"degree" : HTMLschoolDegree.replace("%data%", education.schools[school].degree),
				"dates" : HTMLschoolDates.replace("%data%", education.schools[school].dates)
			};

			$(".education-entry:last").append(formattedSchool["name"] + formattedSchool["degree"] + formattedSchool.dates + formattedSchool.location);

			for(major in education.schools[school].majors)
			{
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
				$(".education-entry:last").append(formattedMajor);
			}
		}

		// step 2: display online courses
		for(course in education.onlineCourses)
		{
			$("#education").append(HTMLonlineClasses);
			$("#education").append(HTMLschoolStart);

			var formattedCourse = {
				"title" : HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title),
				"school" : HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school),
				"dates" : HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates),
				"url" : HTMLonlineURL.replace("%data%", education.onlineCourses[course].url)
			};
			
			$(".education-entry:last").append(formattedCourse.title + formattedCourse.school + formattedCourse.dates + formattedCourse.url);
		}
	}
};

var projects = {
	"project" : [
		{
			"title" : "Project 1: Mock-Up Website",
			"dates" : "2014-2015",
			"description" : "Udacity Nanodegree Project 1",
			"images" : ["http://placehold.it/150x150","http://placehold.it/150x150"]
		},
		{
			"title" : "Project 2: Resume Page",
			"dates" : "2015",
			"description" : "Udacity Nanodegree Project 2",
			"images" : ["http://placehold.it/150x150","http://placehold.it/150x150"]
		}
	],
	"display" : function(){

		for(project in projects.project){
			
			var formattedProject = {
				"title" : HTMLprojectTitle.replace("%data%", projects.project[project].title),
				"dates" : HTMLprojectDates.replace("%data%", projects.project[project].dates),
				"description" : HTMLprojectDescription.replace("%data%", projects.project[project].description),
			};


			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(formattedProject.title + formattedProject.dates + formattedProject.description);

			// append images
			for(image in projects.project[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.project[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

// APPEND INformatION
// Skills
if(bio.skills.length!== 0)
{

}

function displayWork()
{
	if(work.jobs.length!== 0)
	{
		var formattedJob = [];

		for (job in work.jobs)
		{
			$("#workExperience").append(HTMLworkStart);
			formattedJob[job] = {};
			
			formattedJob[job].title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			formattedJob[job].employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			formattedJob[job].location = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			formattedJob[job].dates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			formattedJob[job].description = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			
			$(".work-entry:last").append(formattedJob[job].employer + formattedJob[job].title + formattedJob[job].dates + formattedJob[job].description );
		}
	}
}

function inName(oldName) {
    var finalName = oldName;
    // Your code goes here!

    finalName = finalName.split(" ");
    finalName[1] = finalName[1].toUpperCase();
    finalName[0] = finalName[0].toLowerCase();
    finalName[0] = finalName[0].replace(finalName[0].charAt(0), finalName[0].charAt(0).toUpperCase());
    // Don't delete this line!
    return finalName[0] +" "+ finalName[1];
}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);

$(document).click(function(loc) {  
	logClicks(loc.pageX, loc.pageY);
});