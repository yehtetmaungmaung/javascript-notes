const search = function(array, item, start=0, end=array.length-1) {
    console.log('start: '+start+', end: '+end)

    if (start > end) {
        console.log('Not Found')
        return -1
    }

    const middle = Math.floor((start + end) /2)

    if (item == array[middle]) {
        console.log('Found it at index ' + middle)
        return middle
    }

    if (item < array[middle]) {
        return search(array, item, start, middle-1)
    }

    if (item > array[middle]) {
        return search(array, item, middle+1, end)
    }
}

const arr1 = [1, 3, 4, 6, 7, 8, 9, 10, 22, 23, 34, 44, 55]
search(arr1, 44)