const findMatching = function (array, drivname) {
    return array.filter(item => {
        return item.toLowerCase() === drivname.toLowerCase();
    });
}

const fuzzyMatch = function (array, string) {
    return array.filter(item =>
        item.toLowerCase().startsWith(string.toLowerCase()))

}

const matchName = function (array, string) {
    return array.filter(item => item.name === string)

}
