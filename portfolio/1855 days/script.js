let myBirthday = "28 Feb 2028";


function countdown(){
    const myBirthdayDate = new Date(myBirthday);
    const currentDate = new Date();
    const miliseconds = (myBirthdayDate-currentDate)
    const days = (miliseconds/1000/24/3600)
    const hours = 24*((miliseconds/1000/3600/24)-parseInt(days))
    const minutes = 60*(hours - parseInt(hours))
    const seconds = 60*(minutes - parseInt(minutes))
    // console.log(parseInt(days), parseInt(hours), parseInt(minutes), parseInt(seconds))

    const countdownEl = document.getElementById("countdown")
    countdownEl.innerHTML = `
    <p>Days: <br>${parseInt(days)}</p>
    <p>Hours: <br>${parseInt(hours)}</p> 
    <p>Minutes: <br>${parseInt(minutes)}</p> 
    <p>Seconds: <br>${parseInt(seconds)}</p>`

    if (currentDate === myBirthdayDate){
        myBirthday = "28 Feb 2024"
    }
}

setInterval(countdown, 1000)


