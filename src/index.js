module.exports = function check(str, bracketsConfig) {
    let startKeys = []
    let endKeys = []
    for (let j = 0; j < bracketsConfig.length; j++) {
        startKeys.push(bracketsConfig[j][0])
        endKeys.push(bracketsConfig[j][1])
    }
    let masItem = str.split('')
    let start = 0
    for (let i = 0; i < masItem.length; i++) {

        start = startKeys.indexOf(masItem[i])
        if (start != -1) {
            if (endKeys[start] == masItem[i + 1]) {
                masItem.splice(i, 2)
                i = i - 2
            }
        }

    }

    return masItem.length == 0 ? true : false

}