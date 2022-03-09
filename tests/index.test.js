const { test, expect, describe, it } = require("@jest/globals");
const Add = require("..");


describe('add', ()=>{
    it('should return 0 for an empty string', ()=>{
        expect(Add('')).toBe(0)
    })
})