function reverseString(str) {

    let i = 0;
    let j = str.length - 1;
    let reverse = [...str];

    while(i <= j) {
        [reverse[i], reverse[j]] = [reverse[j], reverse[i]];
        i++;
        j--;
    }

    return reverse.join('');
}

console.log(reverseString("HELLO"));
console.log(reverseString("TEST"));
console.log(reverseString("TWO WORDS"));
