function sayAlice() {
    var say = function() {
        console.log(alice);
    }
    var alice = 'Hello ALice';
    return say;
}
sayAlice()();