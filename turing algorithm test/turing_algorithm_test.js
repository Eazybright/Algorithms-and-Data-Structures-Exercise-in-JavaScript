//JavaScript Nodejs v10.x

/**
 * @param {int[]} trip_durations
 * @param {int} total_hours
 * @return {int = min_purchases}
 */

var minPurchases = function(trip_durations, total_hours) {
    let min_purchases = -1;
    let sum_of_trip_durations = 0;
    // Put your code here to calculate min_purchases
    for (var i = 0; i < trip_durations.length; i++) {
        sum_of_trip_durations += trip_durations[i];
    }

    if (sum_of_trip_durations == total_hours) {
        min_purchases = -1;
    } else {
        // min_purchases = total_hours - sum_of_trip_durations;
        // min_purchases = Math.min(...trip_durations);
        min_purchases = trip_durations.length;
    }
    // Return the result, do not change the structure
    return min_purchases;
};

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let trip_durations = [];
let total_hours;
let components;
let i = 0;
rl.on('line', (line) => {
    i === 0 ? trip_durations = line.split(' ').map(x => +x) : total_hours = parseInt(line);
    i++;
});

rl.on('close', () => {
    const min_purchases = minPurchases(trip_durations, total_hours);
    console.log(min_purchases);
});