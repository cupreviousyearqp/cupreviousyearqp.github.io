function changeSemesterGuide(){
  var semester = {};
  semester["BA"] = ["Semester 1", "Semester 2", "Semester 3", "Semester 4", "Semester 5", "Semester 6"];
  semester["BBA"] = ["Semester 1", "Semester 2", "Semester 3", "Semester 4", "Semester 5", "Semester 6"];
  semester["BCA"] = ["Semester 1", "Semester 2", "Semester 3", "Semester 4", "Semester 5", "Semester 6"];
  semester["BSC"] = ["Semester 1", "Semester 2", "Semester 3", "Semester 4", "Semester 5", "Semester 6"];
  semester["BCOM"] = ["Semester 1", "Semester 2", "Semester 3", "Semester 4", "Semester 5", "Semester 6"];
  semester["MCOM"] = ["Semester 1", "Semester 2", "Semester 3", "Semester 4"];
  semester["MA"] = ["Semester 1", "Semester 2", "Semester 3", "Semester 4"];

  var course = document.getElementById("courseSelectBox");
  var sem = document.getElementById("semesterSelectBox");
  var courseIndex = course.options[course.selectedIndex].value;

  document.getElementById("dropdown").style.paddingBottom = "50px";
  document.getElementById("semester").style.opacity = "1";

  while (sem.options.length) {
    sem.remove(0);
  }

  var semesterBoxObj = semester[courseIndex];
  if (semesterBoxObj) {
    var i;
    for (i = 0; i < semesterBoxObj.length; i++) {
      var option = new Option(semesterBoxObj[i], i);
      sem.options.add(option);
    }
  }
}

function changeSubjectGuide(){
  var subject = {};


  var sem = document.getElementById("semesterSelectBox");
  var sub = document.getElementById("subjectSelectBox");
  var semIndex = sem.options[sem.selectedIndex].value;

  document.getElementById("semester").style.paddingBottom = "50px";
  document.getElementById("subject").style.opacity = "1";

  while (sub.options.length) {
    sub.remove(0);
  }

  var subjectBoxObj = subject[semIndex];
  if (subjectBoxObj) {
    var i;
    for (i = 0; i < subjectBoxObj.length; i++) {
      var option = new Option(subjectBoxObj[i], i);
      sub.options.add(option);
    }
  }
}
