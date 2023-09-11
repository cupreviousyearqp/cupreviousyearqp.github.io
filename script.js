function changeSemesterGuide(){
  var selectBoxValue = document.getElementById("selectBox").value;

  var semester = document.getElementById("semester");

  var link1 = document.getElementById("link-1");
  var link2 = document.getElementById("link-2");
  var link3 = document.getElementById("link-3");
  var link4 = document.getElementById("link-4");
  var link5 = document.getElementById("link-5");
  var link6 = document.getElementById("link-6");

  var item5 = document.getElementById("sem-item-5th");
  var item6 = document.getElementById("sem-item-6th");

  if(selectBoxValue == "BA")
  {
      link1.href = "semester_pages/ba/sem1.html";
      link2.href = "semester_pages/ba/sem2.html";
      link3.href = "semester_pages/ba/sem3.html";
      link4.href = "semester_pages/ba/sem4.html";
      link5.href = "semester_pages/ba/sem5.html";
      link6.href = "semester_pages/ba/sem6.html";

      console.log("BA");
      item5.style.opacity = "1";
      item6.style.opacity = "1";
      semester.style.marginBottom = "-700px";
  }

  else if(selectBoxValue == "BBA")
  {
      link1.href = "semester_pages/bba/sem1.html";
      link2.href = "semester_pages/bba/sem2.html";
      link3.href = "semester_pages/bba/sem3.html";
      link4.href = "semester_pages/bba/sem4.html";
      link5.href = "semester_pages/bba/sem5.html";
      link6.href = "semester_pages/bba/sem6.html";

      console.log("BBA");
      item5.style.opacity = "1";
      item6.style.opacity = "1";
      semester.style.marginBottom = "-700px";
  }

  else if(selectBoxValue == "BCA")
  {
      link1.href = "semester_pages/bca/sem1.html";
      link2.href = "semester_pages/bca/sem2.html";
      link3.href = "semester_pages/bca/sem3.html";
      link4.href = "semester_pages/bca/sem4.html";
      link5.href = "semester_pages/bca/sem5.html";
      link6.href = "semester_pages/bca/sem6.html";

      console.log("BCA");
      item5.style.opacity = "1";
      item6.style.opacity = "1";
      semester.style.marginBottom = "-700px";
  }

  else if(selectBoxValue == "BSC")
  {
      link1.href = "semester_pages/bsc/sem1.html";
      link2.href = "semester_pages/bsc/sem2.html";
      link3.href = "semester_pages/bsc/sem3.html";
      link4.href = "semester_pages/bsc/sem4.html";
      link5.href = "semester_pages/bsc/sem5.html";
      link6.href = "semester_pages/bsc/sem6.html";

      console.log("BSC");
      item5.style.opacity = "1";
      item6.style.opacity = "1";
      semester.style.marginBottom = "-700px";
  }

  else if(selectBoxValue == "BCOM")
  {
      link1.href = "semester_pages/bcom/sem1.html";
      link2.href = "semester_pages/bcom/sem2.html";
      link3.href = "semester_pages/bcom/sem3.html";
      link4.href = "semester_pages/bcom/sem4.html";
      link5.href = "semester_pages/bcom/sem5.html";
      link6.href = "semester_pages/bcom/sem6.html";

      console.log("BCOM");
      item5.style.opacity = "1";
      item6.style.opacity = "1";
      semester.style.marginBottom = "-700px";
  }

  else if(selectBoxValue == "MCOM")
  {
      link1.href = "semester_pages/mcom/sem1.html";
      link2.href = "semester_pages/mcom/sem2.html";
      link3.href = "semester_pages/mcom/sem3.html";
      link4.href = "semester_pages/mcom/sem4.html";

      console.log("MCOM");
      item5.style.opacity = "0";
      item6.style.opacity = "0";
      semester.style.marginBottom = "-1150px";
  }

  else
  {
      link1.href = "semester_pages/ma/sem1.html";
      link2.href = "semester_pages/ma/sem2.html";
      link3.href = "semester_pages/ma/sem3.html";
      link4.href = "semester_pages/ma/sem4.html";

      console.log("MA");
      item5.style.opacity = "0";
      item6.style.opacity = "0";
      semester.style.marginBottom = "-1150px";
  }
}
