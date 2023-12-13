import fs from "fs";
import path from "path";

const input = fs.readFileSync(path.join(__dirname, "part1.txt"), "utf-8").split("\n");

const elfCube = new Map([
    ["red", 12],
    ["green", 13],
    ["blue", 14] 
])

const test = input.map((line) => {
    if (line === "") {
        return undefined;
    }
    const content = line.split(":");
    const gameId = +content[0].split(" ")[1];
    const dice = content[1].split(";").map(part => {
        const ret =  part.split(",").map(dice => {
            const color = dice.split(" ")[2];
            const count = +dice.split(" ")[1];
            return count <= elfCube.get(color)!
        });

        if (ret.includes(false)) {
            return false;
        }
    });

    if (dice.includes(false)) {
        return undefined;
    }

    return dice ? gameId : undefined;
})

console.log(test.filter(game => game !== undefined).reduce((a, b) => a! + b!, 0));
