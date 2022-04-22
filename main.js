function $(a) {
  return document.querySelector(a);
}

const months = [31,28,31,30,31,30,31,31,30,31,30,31];


function leapChecker(year){
  if (year%4==0 || (year%100==0 && year%400==0)) {
    months[1] = 29;
  }
  else {
    months[1] = 28;
  }
}

var aggClc = $('.calculateBtn');

aggClc.addEventListener('click', function(){
  let today = new Date();
  let inputDate = new Date($('.date-input').value);
  
  let birthYear, birthMonth, birthDate;
  
  let birthDetails = {
    date : inputDate.getDate(),
    month : inputDate.getMonth()+1,
    year : inputDate.getFullYear()
  };
  
  let currentDate = today.getDate();
  let currentMonth = today.getMonth()+1;
  let currentYear = today.getFullYear();
  
  leapChecker(currentYear);
  
  
  if (birthDetails.year>currentYear || (birthDetails.month>currentMonth && birthDetails.year==currentYear) || (birthDetails.date> currentDate && birthDetails.month== currentMonth && birthDetails.year==currentYear)) {
    alert ('not yet born')
    displayResult('--','--','--')
    return;
  }
  
  birthYear = currentYear - birthDetails.year;
  
  if (currentMonth>= birthDetails.month) {
    birthMonth = currentMonth - birthDetails.month;
  } else {
    birthYear--;
    birthMonth = 12+currentMonth - birthDetails.month;
  }
  
  if (currentDate>=birthDetails.date){
    birthDate = currentDate - birthDetails.date;
  } else {
    birthMonth--;
    let days = months[currentMonth - 2];
    
    birthDate = days + currentDate - birthDetails.date;
    if (birthMonth<0) {
      birthMonth = 11;
      birthYear--;
    }
  }
  
  displayResult(birthDate, birthMonth , birthYear)
})




function displayResult(bDate,bMonth,bYear){
  $('#years').textContent = bYear;
  $('#months').textContent = bMonth;
  $('#days').textContent = bDate;
}

