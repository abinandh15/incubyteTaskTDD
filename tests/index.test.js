const { test, expect, describe, it } = require("@jest/globals");
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