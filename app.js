function exam([arg1, arg2, arg3, arg4]){
  let examStartHour = Number(arg1);
  let examStartMinute = Number(arg2);
  let examArriveHour = Number(arg3);
  let examArriveMinute = Number(arg4);
  let examTime = (examStartHour * 60) + examStartMinute;
  let examArrive = (examArriveHour * 60) + examArriveMinute;
  let timeDifference = examArrive - examTime;
  let late = "Late";
  let onTime = "On Time";
  let early = "Early";
  let studentArrive = late;
  let result = "";
  let hoursDifference;
  let minutesDiffernece;

  if(timeDifference < -30){
    studentArrive = early;
  } else if(timeDifference <= 0){
    studentArrive = onTime;
  }

  if(timeDifference != 0){
    hoursDifference = Math.abs(~~(timeDifference / 60));
    minutesDiffernece = Math.abs(~~(timeDifference % 60));
  }

  if(hoursDifference > 0){
    result = hoursDifference + ":" + (minutesDiffernece > 9? minutesDiffernece : "0" + minutesDiffernece) + " hours";
  } else {
    result = minutesDiffernece + " minutes";
  }

  if(timeDifference < 0){
    result += " before the start";
  } else{
    result += " after the start";
  }

  console.log(studentArrive);
  
  if(result){
    console.log(result);
  }
  
}

exam([9,30,9,50]);
