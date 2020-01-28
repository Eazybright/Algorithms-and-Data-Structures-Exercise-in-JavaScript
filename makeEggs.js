var makeEggs = function(style, n) {
    var completedEgg;
    if (style !== 'boiled') {
        var crackedEggs = crackEggs(n);
        if (style !== 'scrambled') {
            completedEgg = fryEgg(crackedEggs, style);
        } else {
            var preppedEggs = whipEggs(crackedEggs);
            completedEgg = fryEgg(preppedEggs);
        }
    }
    return completedEgg;
}

makeEggs('scrambled', 3);
makeBacon('boiled', 2);