module.exports = function toReadable (number) {
    if (number === 0) return "zero";
    let thousand = Math.floor(number / 1000);
    let hundreds = Math.floor(number / 100);
    let tens = Math.floor((number - hundreds * 100) / 10);
    let ones = number - hundreds * 100 - tens * 10;

    if (tens === 1) {
        tens = 0;
        ones = number - hundreds *100;
    }
    if(number.toString().length === 4){
        hundreds = (number / 100)[1]
    }
    let onesArr = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let tensArr = [
        "",
        "",
        "twenty ",
        "thirty ",
        "forty ",
        "fifty ",
        "sixty ",
        "seventy ",
        "eighty ",
        "ninety ",
    ];

    let hundredsText = hundreds ? onesArr[hundreds] + " hundred " : "";
    let thousandsText = thousand ? onesArr[thousand] + " thousand " : ""
    return thousandsText + hundredsText + tensArr[tens] + onesArr[ones];
  
}
