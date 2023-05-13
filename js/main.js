function updateTime() {
  //creates a new Date object that represents the current
  const now = new Date();
  //These three lines extract the hours, minutes, and seconds from the now object.
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  /*These three lines calculate the angles of the hour, minute,
and second hands based on the current time.
The hourAngle formula takes into account that there are 12 hours on a clock,
and each hour is 30 degrees (360 / 12). The formula calculates the angle of the
hour hand by adding the hour value modulo 12 times 30, which gives the number of degrees
for the hour part, and the minute value divided by 2, which gives the number of degrees
for the minute part. The hour hand moves slightly as the minutes progress between two hour values.
The minuteAngle formula calculates the angle of the minute hand as 6 degrees times
 the current minute value.
The secondAngle formula calculates the angle of the second hand as 6 degrees times
 the current second value.*/
  const hourAngle = 30 * hours + minutes / 2;
  const minuteAngle = 6 * minutes;
  const secondAngle = 6 * seconds;
  //These three lines select the hour, minute, and second hands from the HTML document using the querySelector method.
  const hourHand = document.querySelector(".hour-hand");
  const minuteHand = document.querySelector(".minute-hand");
  const secondHand = document.querySelector(".second-hand");
  //These three lines set the transform property of the hour, minute, and second hands to rotate them based on the calculated angles. The translateX(-3px) part centers the hands on the clock,
  //and the rotate(...deg) part applies the corresponding angle of rotation.
  hourHand.style.transform = `rotate(${hourAngle}deg)`;
  minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
  secondHand.style.transform = `rotate(${secondAngle}deg)`;
}

//This line calls the updateTime function every 1000 milliseconds (i.e., one second)
//using the setInterval method. This causes the clock hands to update every second and
//create the illusion of a ticking clock.

setInterval(updateTime, 1000);
