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

		// step 1: format & append role, name and menu
		formattedBio.name = HTMLheaderName.replace("%data%", bio.name);
		formattedBio.role = HTMLheaderRole.replace("%data%", bio.role);
		
		// append name and role
		$(".name").append(formattedBio.name + formattedBio.role );

		// append menu items
		$("#menuBar").append(HTMLmenuGeneric.replace(/%data%/g, "experience"));
		$("#menuBar").append(HTMLmenuGeneric.replace(/%data%/g, "education"));
		
		// append the projects menu item
		var formattedMenuItem = HTMLmenuGeneric.replace("%data%", "tabs");
		$("#menuBar").append(formattedMenuItem.replace("%data%", "projects"));

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

		// iterate through each skill and append
		for (skill in bio.skills)
		{
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
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
			// format each element
			var formattedJob = {
				"employer" : HTMLworkEmployer.replace("%data%", work.jobs[job].employer),
				"title" : HTMLworkTitle.replace("%data%", work.jobs[job].title),
				"location" : HTMLworkLocation.replace("%data%", work.jobs[job].location),
				"dates" : HTMLworkDates.replace("%data%", work.jobs[job].dates),
				"description" : HTMLworkDescription.replace("%data%", work.jobs[job].description)
			}

			// append work start
			$("#experience").append(HTMLworkStart);
			
			// append just the employer and title first
			$(".work-entry:last").append(formattedJob["employer"] + formattedJob["title"]);

			// iterate over each element of a job
			for(detail in formattedJob)
			{
				//check that the element is neither title or employer
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
		// iterate over each school
		for(school in education.schools)
		{
			// append school start
			$("#education").append(HTMLschoolStart);

			// format each element
			var formattedSchool = {
				"name" : HTMLschoolName.replace("%data%", education.schools[school].name),
				"location" : HTMLschoolLocation.replace("%data%", education.schools[school].location),
				"degree" : HTMLschoolDegree.replace("%data%", education.schools[school].degree),
				"dates" : HTMLschoolDates.replace("%data%", education.schools[school].dates)
			};

			// append the name, degree, date and location
			$(".education-entry:last").append(formattedSchool["name"] + formattedSchool["degree"] + formattedSchool.dates + formattedSchool.location);

			// iterate over each major, format it, and append. 
			for(major in education.schools[school].majors)
			{
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
				$(".education-entry:last").append(formattedMajor);
			}
		}

		// step 2: display online courses
		// iterate over each course
		for(course in education.onlineCourses)
		{
			// append the starting html
			$("#education").append(HTMLonlineClasses);
			$("#education").append(HTMLschoolStart);

			// format each element
			var formattedCourse = {
				"title" : HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title),
				"school" : HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school),
				"dates" : HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates),
				"url" : HTMLonlineURL.replace("%data%", education.onlineCourses[course].url)
			};
			
			// append
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

		var counter = 1;
		// iterate over each project
		for(project in projects.project){
			
			$("#tabs > ul").append(HTMLprojectTab.replace(/%num%/g, ""+counter+""));

			// format each element
			var formattedProject = {
				"title" : HTMLprojectTitle.replace("%data%", projects.project[project].title),
				"dates" : HTMLprojectDates.replace("%data%", projects.project[project].dates),
				"description" : HTMLprojectDescription.replace("%data%", projects.project[project].description),
			};

			// append the start
			$("#tabs").append(HTMLprojectTabPanelStart.replace("%data%", ""+counter+""));

			// append title, dates and description
			$("#tabs-" + counter).append(formattedProject.title + formattedProject.dates + formattedProject.description);

			// iterate over each image, format and append
			for(image in projects.project[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.project[project].images[image]);
				$("#tabs-" + counter).append(formattedImage);
			}

			counter++;
		}
	}
};

// call all the functions to display html
bio.display();
work.display();
projects.display();
education.display();

// append map 
$("#mapDiv").append(googleMap);

$(document).click(function(loc) {  
	logClicks(loc.pageX, loc.pageY);
});