import fs from "fs";

const input = fs.readFileSync("./input/input-part2.txt", "utf-8").split("\n");

const digitText = new Map<string, string>([
    ["one", "1"],
    ["two", "2"],
    ["three", "3"],
    ["four", "4"],
    ["five", "5"],
    ["six", "6"],
    ["seven", "7"],
    ["eight", "8"],
    ["nine", "9"],
]);   


let result = 0;

for (const line of input) {
    if (line.length === 0) continue;
    const numbers = [];
    for (const [key, value] of digitText) {
        const text = line.matchAll(new RegExp(key, "g"));
        const digits = line.matchAll(new RegExp(value, "g"));

        numbers.push(...text, ...digits);
    }

    numbers.sort((a, b) => a.index! - b.index!);

    console.log(numbers);

    const ret = numbers.map((value) => {
        return value[0].length > 1 ? digitText.get(value[0]) : value[0];
    });

    result += parseInt(ret[0]! + ret[ret.length - 1]!);
}

console.log(result);
