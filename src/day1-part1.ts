import fs from "fs";

const input = fs.readFileSync("../input/input-part1.txt", "utf8").split("\n");

function getDigits(): string[][] {
    return input.map((line) => {
        const lineArray = line.split("");

        let digits: string[] =  [];

        for (let i = 0; i < lineArray.length ; i++) {
            if (lineArray[i].match(/\d+/g)) {
                digits.push(lineArray[i]);
            }
        }

        return digits;
    });
}

function getLastDigits(digits: string[]): string {
    return digits.length > 1 ? digits[digits.length - 1] : digits[0];
}

function getFirstDigits(digits: string[]): string {
    return digits[0];
}


function main() {
    const digits = getDigits();
    let total = 0;

    for (let i = 0; i < digits.length; i++) {
        if (digits[i].length === 0) continue;
        total += parseInt(getFirstDigits(digits[i]) + + getLastDigits(digits[i]));
    }

    console.info(total);
}

main();
