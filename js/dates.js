// JavaScript Document

function dates()
{
var b = "<br>"
var x = new Date();
var day = x.getDay();
var date = x.getDate();
var month = x.getMonth()
var diff = (5-day)           //The difference between the current day and Friday
var fri = (date + diff)      //Friday's date
var ss = ""                  //SuperScript (st, nd, rd, th)
var weekday = ""             //The weekday typed out
var longmonth = ""           //The month typed out
var friss = ""               //Friday's SuperScript as it may be different from the current day's
var totaldays = ""			 //Find total days in the current month

//Find and set current weekday
if(day==0){weekday="Sunday"}else if(day==1){weekday="Monday"}else if(day==2){weekday="Tuesday"}else if(day==3){weekday="Wednesday"}else if(day==4){weekday="Thursday"}else if(day==5){weekday="Friday"}else if(day==6){weekday="Saturday"}
// Find total number of days in current month
if(month==0){totaldays="31"}else if(month==1){totaldays="28"}else if(month==2){totaldays="31"}else if(month==3){totaldays="30"}else if(month==4){totaldays="31"}else if(month==5){totaldays="30"}else if(month==6){totaldays="31"}else if(month==7){totaldays="31"}else if(month==8){totaldays="30"}else if(month==9){totaldays="31"}else if(month==10){totaldays="30"}else if(month==11){totaldays="31"}
//Find out if Friday is next month
if(fri>totaldays){month=month+1}
//Find and set current month
if(month==0){longmonth="January"}else if(month==1){longmonth="February"}else if(month==2){longmonth="March"}else if(month==3){longmonth="April"}else if(month==4){longmonth="May"}else if(month==5){longmonth="June"}else if(month==6){longmonth="July"}else if(month==7){longmonth="August"}else if(month==8){longmonth="September"}else if(month==9){longmonth="October"}else if(month==10){longmonth="November"}else if(month==11){longmonth="December"}
//Figure out if Friday is next month
if(fri>totaldays){fri=(totaldays-fri)*-1;}
//Figure out the superscript for the current day
if(date==1||date==21||date==31){ss="st"}else if(date==2||date==22){ss="nd"}else if(date==3||date==23){ss="rd"}else{ss="th"}
//Figure out the superscript for Friday
if(fri==1||fri==21||fri==31){friss="st"}else if(fri==2||fri==22){friss="nd"}else if(fri==3||fri==23){friss="rd"}else{friss="th"}



document.getElementById('intro').innerHTML=(
										   "Today is " + weekday + " the " + date + ss +".  "
										   +
										   "That means today is " + weekday + ".  "
										   +
										   "That also means that Friday should be the " + fri + friss + ".  "
										   +
										   "The month is " + longmonth + ".  "
										   +
										   "That means there are a total of " + totaldays + " days in this month. "
										   +
										   "Therefore, our target date is Friday, " + longmonth + " " + fri + friss + ".  "
										   +
										   "Let's display that, shall we?"
										   
										  
										   )
document.getElementById('date').innerHTML=("<b>Friday, " + longmonth + " " + fri + friss + "</b>")
    
	 }