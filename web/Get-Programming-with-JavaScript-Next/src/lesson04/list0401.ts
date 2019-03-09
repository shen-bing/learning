var testabc = {};
(function (namespace) {

    let DEFAULT_START = 0;
    let DEFAULT_STEP = 1;
    let range = function (start, stop, step) {
        let arr = [];

        if (!step) {
            step = DEFAULT_STEP;
        }

        if (!stop) {
            stop = start;
            start = DEFAULT_START;
        }

        if (stop < start) {
            // reverse values
            let tmp = start;
            start = stop;
            stop = tmp;
        }

        for (let i = start; i < stop; i += step) {
            arr.push(i);
        }

        return arr;
    }

    namespace['range'] = range;

}(testabc));

console.log(JSON.stringify(testabc['range'](3, 10, 1)));
console.log(JSON.stringify(testabc['range'](3, 10, 2)));