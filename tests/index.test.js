const { test, expect, describe, it } = require("@jest/globals");
const { array } = require("yargs");
const Add = require("..");


describe('Add Task 1', ()=>{
    it('should return 0 for an empty string', ()=>{
        expect(Add('')).toBe(0)
    })
    it('should return 1 for input "1"', ()=>{
        expect(Add("1")).toBe(1)
    })
    it('should return 3 for input "1,2"', ()=>{
        expect(Add("1,2")).toBe(3)
    })
})

describe('Add Task 2 - unknown amount of numbers', ()=>{
    it('should handle unknown amount of numbers',()=>{
        expect(Add("1,5,4,3,8,10,500,650")).toBe(1181);
        expect(Add("2,5,6,4,8,1,2")).toBe(28);
        let input = "1"
        for(let i=2; i<=100; i++){
            input = input + ',' + i;
        }
        expect(Add(input))
        .toBe(5050)
    })
})

describe('Add Task 3 - handle new lines between numbers instead of commas', ()=>{
    it('should handle inputs with newlines instead of commas', ()=>{
        expect(Add('1\n2,3')).toBe(6)
        let input = "1"
        // generate inputs seperated by '\n' or ','
        for(let i=2; i<=100; i++){
            input = input + ['\n',','][Math.floor(Math.random()*2)]  + i;
        }
        expect(Add(input)).toBe(5050)
    })
})
describe('Add Task 4 - handle different delimiters', ()=>{
    it('should handle inputs with different delimiters', ()=>{
        expect(Add('//;\n1;2')).toBe(3)
        expect(Add('//k\n1k2k56')).toBe(59)
    })
})