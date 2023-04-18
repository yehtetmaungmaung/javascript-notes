function rangeOfNumber(start, end) {
    if (start > end) {
        return "StartNum must not be greater than End";
    } else if (start === end) {
        return [end];
    } else {
        const array = rangeOfNumber(start, end - 1);
        array.push(end);
        return array;
    }
}

console.log(rangeOfNumber(1, 10));