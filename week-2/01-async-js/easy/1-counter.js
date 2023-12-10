// counter in javascript that goes in intervals of 1 sec

function printTime()
{
    const now = new Date();

    // Get hours and minutes
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    console.log(`Current time: ${hours}:${formattedMinutes}:${seconds}`);
}

setInterval(printTime,1000);