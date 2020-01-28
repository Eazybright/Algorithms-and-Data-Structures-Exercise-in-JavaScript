var tracker = 0;
var callMe = function() {
    tracker++;
    if (tracker === 3) {
        return 'no more loops';
    }
    return callMe('anytime');
}

// callMe();

var loopNtimes = function(n) {
    console.log('n equals', n);
    if (n <= 1) {
        return 'complete';
    }
    return loopNtimes(n - 1);
}
loopNtimes(3);