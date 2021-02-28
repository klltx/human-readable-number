module.exports = function toReadable (number) {
    let arr = String(number).split('').reverse();
    let res = [];

    let textUnits = [
        '',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine'
    ];

    let textFirstTen = [
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ];

    let textTens = [
        '',
        '',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'
    ];

    if(arr.length === 1 && arr[0] === '0') return 'zero';

    for(let i = 0; i < arr.length; i++){

        if(arr[i] === '0') continue;

        if(i === 0) {
            //единицы
            res.push(textUnits[Number(arr[i])]);

        } else if(i === 1) {
            //десятки
            if(arr[i] === '1') {
                res.push(textFirstTen[Number(arr[0])]);
                res.shift();

                if(arr[0] === '0') res.push('ten');
            } else {
                res.push(textTens[Number(arr[i])]);
            }

        } else if(i === 2) {
            //сотни
            res.push(textUnits[Number(arr[i])] + ' hundred');
        }
    }

    res = res.reverse().join(' ');

    return res;
}
