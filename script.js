var lunchtime = 7;
var noon = 12;
var studytime = 12;
var dinnertime = studytime + 2;
var schedule;
var evening = 18;

// Getting it to show the current time on the page
var showCurrentTime = function()
{
   
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours,minutes and seconds
	  if (hours >= noon)
	  {
		  meridian = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }
 
    
    	if (minutes < 10)
	{
		minutes = "0" + minutes;
	}
 
    
	if (seconds < 10)
 	{
		seconds = "0" + seconds;
	}
 
    
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() 
{
  var time = new Date().getHours();
  var messageText;
  var image = "time.jpg";

  var timeEventJS = document.getElementById("timeEvent");
  var lolcatImageJS = document.getElementById('lolcatImage');
  
  if (time == schedule)
  {
    image = "time.jpg";
    messageText = "BEST OF LUCK! ...";
  }
  else if (time == lunchtime)
  {
    image = "lunch.jpg";
    messageText = "lets take lunch!";
  }
  else if (time == studytime)
  {
    image = "study.jpg";
    messageText = "START STUDY!";
  }
  else if (time == dinnertime)
  {
    image = "dinner.jpg";
    messageText = "lets have a dinner!";
  }
  else if (time < noon)
  {
    image = "morning.jpg";
    messageText = "Good morning!";
  }
  else if (time >= evening)
  {
    image = "1.jpg";
    messageText = "Good evening!";
  }
  else
  {
    image = "noon.jpg";
    messageText = "Good afternoon!";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  lolcatImage.src = image;
  
  showCurrentTime();
};
updateClock();


var oneSecond = 1000;
setInterval( updateClock, oneSecond);


var timeButton = document.getElementById("TimeButton");

var timeEvent = function()
{
    if (schedule < 0) 
    {
        schedule = new Date().getHours();
        TimeButton.innerText = "SCHEDULE FIXED!";
        TimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        schedule = -1;
        TimeButton.innerText = "SCHEDULE FIXED!";
        TimeButton.style.backgroundColor = "#222";
    }
};

timeButton.addEventListener("click", timeEvent);
timeEvent(); 


// Activates lunch selector
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates study selector
var studyTimeSelector =  document.getElementById("studyTimeSelector");

var studyEvent = function()
{
    studytime = studyTimeSelector.value;
};

studyTimeSelector.addEventListener("change", studyEvent);


// Activates dinner selector
var dinnerTimeSelector =  document.getElementById("dinnerTimeSelector");

var dinnerEvent = function()
{
    dinnertime = dinnerTimeSelector.value;
};

dinnerTimeSelector.addEventListener("change", dinnerEvent);