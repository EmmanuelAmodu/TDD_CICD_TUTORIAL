function quickSort(arr, start, end) {
    if (start >= end) {
        return arr;
    }
    let index = partition(arr, start, end);
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
    return arr;
}

function partition(arr, start, end) {
    let index = start;
    let pivotValue = arr[end];
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, index);
            index++;
        }
    }
    swap(arr, index, end);
    return index;
}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

module.exports = { quickSort, partition, swap };
