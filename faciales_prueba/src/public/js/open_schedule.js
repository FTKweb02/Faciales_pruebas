function openSchedule(scheduleName) {
    var i;
    var x = document.getElementsByClassName("schedule");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(scheduleName).style.display = "block";
  }