function changeSemesterGuide(){
  var selectBoxValue = document.getElementById("selectBox").value;

  var semester = document.getElementById("semester");

  var item7 = document.getElementById("sem-item-7th");
  var item8 = document.getElementById("sem-item-8th");

  if(selectBoxValue == "BA")
  {
      console.log("BA");
      item7.style.opacity = "0";
      item8.style.opacity = "0";
      semester.style.marginBottom = "-700px";
  }

  else if(selectBoxValue == "BBA")
  {
      console.log("BBA");
      item7.style.opacity = "0";
      item8.style.opacity = "0";
      semester.style.marginBottom = "-700px";
  }

  else if(selectBoxValue == "BCA")
  {
    console.log("BCA");
    item7.style.opacity = "1";
    item8.style.opacity = "1";
    semester.style.marginBottom = "-350px";
  }

  else if(selectBoxValue == "BSC")
  {
    console.log("BSC");
    item7.style.opacity = "1";
    item8.style.opacity = "1";
    semester.style.marginBottom = "-350px";
  }

  else if(selectBoxValue == "BCOM")
  {
      console.log("BCOM");
      item7.style.opacity = "0";
      item8.style.opacity = "0";
      semester.style.marginBottom = "-700px";
  }

  else if(selectBoxValue == "MCOM")
  {
    console.log("MCOM");
    item7.style.opacity = "0";
    item8.style.opacity = "0";
    semester.style.marginBottom = "-700px";
  }

  else
  {
      console.log("MA");
      item7.style.opacity = "0";
      item8.style.opacity = "0";
      semester.style.marginBottom = "-700px";
  }
}
