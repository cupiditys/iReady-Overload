var csid;
var score = "{\"score\":100}";

//close reading lesson
if (document.getElementsByTagName("iframe")[0].id == "closereading_lesson") {
	csid = closereading_lesson.src.split("?csid=")[1].split("#")[0];

	closereading_lesson.contentDocument.getElementsByClassName("button fa fa-play pulse")[0].click();
} else // normal lesson
{
	csid = html5Iframe.src.split("?csid=")[1].split("&type")[0];
}

// tricks server into thinking specific lesson was completed
fetch("https://cdn.i-ready.com/student/lesson/componentCompleted", {
	"headers": {
		"accept": "*/*",
		"accept-language": "en-US,en;q=0.9",
		"content-type": "application/json;charset=UTF-8",
		"sec-fetch-dest": "empty",
		"sec-fetch-mode": "cors",
		"sec-fetch-site": "same-origin",
		"sec-gpc": "1"
	},
	"referrer": "https://cdn.i-ready.com/student/dashboard/home",
	"referrerPolicy": "strict-origin-when-cross-origin",
	"body": `{\"componentStatusId\":\"${csid}\",\"instructionLessonOutcome\":${score}}`,
	"method": "POST",
	"mode": "cors",
	"credentials": "include"
});
