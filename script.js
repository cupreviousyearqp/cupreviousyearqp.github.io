function changeSemesterGuide(){
  var selectBoxValue = document.getElementById("selectBox").value;

  var semester = document.getElementById("semester");

  var item5 = document.getElementById("sem-item-5th");
  var item6 = document.getElementById("sem-item-6th");

  if(selectBoxValue == "BA")
  {
      console.log("BA");
      item5.style.opacity = "1";
      item6.style.opacity = "1";
      semester.style.marginBottom = "-700px";
  }

  else if(selectBoxValue == "BBA")
  {
      console.log("BBA");
      item5.style.opacity = "1";
      item6.style.opacity = "1";
      semester.style.marginBottom = "-700px";
  }

  else if(selectBoxValue == "BCA")
  {
      console.log("BCA");
      item5.style.opacity = "1";
      item6.style.opacity = "1";
      semester.style.marginBottom = "-700px";
  }

  else if(selectBoxValue == "BSC")
  {
      console.log("BSC");
      item5.style.opacity = "1";
      item6.style.opacity = "1";
      semester.style.marginBottom = "-700px";
  }

  else if(selectBoxValue == "BCOM")
  {
      console.log("BCOM");
      item5.style.opacity = "1";
      item6.style.opacity = "1";
      semester.style.marginBottom = "-700px";
  }

  else if(selectBoxValue == "MCOM")
  {
    console.log("MCOM");
    item5.style.opacity = "0";
    item6.style.opacity = "0";
    semester.style.marginBottom = "-1150px";
  }

  else
  {
      console.log("MA");
      item5.style.opacity = "0";
      item6.style.opacity = "0";
      semester.style.marginBottom = "-1150px";
  }
}
