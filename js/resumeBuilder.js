var bio = {
	"name" : HTMLheaderName.replace("%data%","Kinan Turjman"),
	"role" : HTMLheaderRole.replace("%data%","Web Developer")
};

bio.contact = {
	"phone" : HTMLmobile.replace("%data%","111-111-1111"),
	"email" : HTMLemail.replace("%data%","kinan.t@gmail.com"),
	"github" : HTMLgithub.replace("%data%","kinant"),
	"location" : HTMLlocation.replace("%data%","Guatemala")
};

bio.bioPicURL = HTMLbioPic.replace("%data%","images/fry.jpg")
bio.welcome = HTMLWelcomeMsg.replace("%data%","Welcome to my online resume!");

bio.skills = ["web developer", "pilot", "programmer"];

for(var i = 0; i < bio["skills"].length; i++)
{
	console.log(bio.skills[i]);
	bio.skills[i] = HTMLskills.replace("%data%",bio.skills[i]);
	console.log(bio.skills[i]);
}


$("#header").prepend(bio.role);
$("#header").prepend(bio.name);

$("#topContacts").append(bio.contact.phone);
$("#topContacts").append(bio.contact.email);
$("#topContacts").append(bio.contact.github);
$("#topContacts").append(bio.contact.location);

$("#header").append(bio.bioPicURL);
$("#header").append(bio.welcome);
$("#header").append(HTMLskillsStart);


for(var i = 0; i < bio["skills"].length; i++)
{
	$("#header").append(bio.skills[i]);
}