const { expect } = require("chai");
const herdTheBabies = require("../herd-the-babies");

describe("heardTheBabies", () => {
    it("When passed an empty string, returns an empty string", () => {
        expect(herdTheBabies("")).to.eql(""); 
    })
    it("When passed an already sorted string, returns original string", () => {
        expect(herdTheBabies("abc")).to.eql("abc"); 
        expect(herdTheBabies("ABC")).to.eql("ABC"); 
    })
    it("When passed a string, returns the string in alphabetical order", () => {
        expect(herdTheBabies("bac")).to.eql("abc");
        expect(herdTheBabies("BAC")).to.eql("ABC");
    })
    it("When passed an upper and lower case, returns the upper case first", () => {
        expect(herdTheBabies("aA")).to.eql("Aa"); 
        expect(herdTheBabies("aBA")).to.eql("AaB");
        expect(herdTheBabies("bbaBccAC")).to.eql("AaBbbCcc");
    })
});
