const fs = require('fs')

const input = fs.readFileSync('./days/1/input.txt', 'utf-8').split('\n\n').map(x=>x.split('\n').map(x=>parseInt(x)))
let elves = []

input.forEach((x, ii) => {
  elves[ii] = 0;
  for (let i = 0; i < x.length; i++) {
    elves[ii] += x[i]
  }
})

elves=elves.sort((a,b)=>b-a)

const Part1_Answer = elves[0];

const Part2_Answer = elves[0]+elves[1]+elves[2]

console.log(Part1_Answer, '|', Part2_Answer)