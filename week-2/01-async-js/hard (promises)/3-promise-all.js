/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

const { time } = require("console");

function wait1(t) {
    return new Promise(function(resolve){
        //console.log('start wait1');
        setTimeout(() => {
            //console.log("end wait1")
            resolve(t*1000)
        }, t*1000);
    })

}

function wait2(t) {
    return new Promise(function(resolve){
        //console.log('start wait2');
        setTimeout(() => {
            //console.log('end wait2');
            resolve(t*1000)
        }, t*1000);
    })

}

function wait3(t) {
    return new Promise(function(resolve){
        //console.log('start wait3');
        setTimeout(() => {
            //console.log('end wait3');
            resolve(t*1000)
        }, t*1000);
    })
}

function calculateTime(t1, t2, t3) {
    return new Promise(async function(resolve){
        let startTime = Date.now()
        const timetaken = await Promise.all([wait1(t1),wait2(t2),wait3(t3)])
        //console.log(timetaken)
        let totalTime = Date.now() - startTime;
        resolve(totalTime)
    })
    };

async function main(){
    const result = await calculateTime(1, 2, 3);
    console.log(result); 
}

main()

module.exports = calculateTime;