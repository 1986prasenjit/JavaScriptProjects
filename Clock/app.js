/**
 * Write your challenge solution here
 */

function updateClock() {
    let hourInClock = document.querySelector(".hand");
    let minutesInClock = document.querySelector(".minute");
    let secondInClock = document.querySelector(".second");
    let digitalClock = document.querySelector(".digital-clock");
    let date = document.querySelector(".date");

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };


    let now = new Date();
    let hour = now.getHours() % 12 || 12;
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let second = now.getSeconds().toString().padStart(2, "0");
    let ampm = hour > 12 ? ("PM") : ("AM");

    let secondsDeg = second * 6;
    let minutesDeg = minutes * 6 + second * 0.1;
    let hourDeg = hour * 30 + minutes * 0.5;

    hourInClock.style.transform = `rotate(${hourDeg}deg)`;
    minutesInClock.style.transform = `rotate(${minutesDeg}deg)`;
    secondInClock.style.transform = `rotate(${secondsDeg}deg)`;

    digitalClock.innerText = `${hour}:${minutes}:${second} ${ampm}`;

    let newDate = now.toLocaleDateString( undefined, options);
    date.innerText = newDate;
}
setInterval(() => updateClock(), 1000);
updateClock();


/*
    !Logic for Second

    let secondDeg = seconds * 6;
    A full circle has 360 degrees.
    The second hand completes a full circle in 60 seconds.
    So, each second, it moves:
    360 / 60 = 6 degrees per second
    Example:
    At 15 seconds, the hand should be at 15 × 6 = 90°.
    At 30 seconds, the hand should be at 30 × 6 = 180°.
    ✅ Formula:
    secondDeg = seconds × 6

    !Logic for Minutes

    let minuteDeg = minutes * 6 + seconds * 0.1;
    A full circle has 360 degrees.
    The minute hand completes a full circle in 60 minutes.
    So, each minute, it moves:
    360 / 60 = 6 degrees per minute
    But the minute hand also moves slightly each second!
    In one minute (60 seconds), the hand moves 6°.
    So, in one second, the hand moves:
    6 / 60 = 0.1 degrees per second
    Example:
    At 15 minutes and 30 seconds, the hand should be at:
    (15×6)+(30×0.1)=90+3=93°
    ✅ Formula:
    minuteDeg = minutes × 6 + seconds × 0.1


    !Logic for hours

    let hourDeg = hours * 30 + minutes * 0.5;
    A full circle has 360 degrees.
    The hour hand completes a full circle in 12 hours.
    So, each hour, it moves: 360 / 12 = 30 degrees per hour;
    But the hour hand also moves slightly each minute!
    In one hour (60 minutes), the hand moves 30°.
    So, in one minute, the hand moves: 30 / 60 = 0.5 degrees per minute;
    At 3:30, the hour hand should be at : (3 × 30) + (30 × 0.5) = 90 + 15 = 105°
    Formula: hourDeg = hours × 30 + minutes × 0.5.
*/
