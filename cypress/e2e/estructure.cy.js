let add= (a,b) => a + b;

let resta= (a,b) => a - b;

let multi= (a,b) => a * b;

let divi= (a,b) => a / b;

// describe, context y it 

describe ('unit test',()=> {
context('math with Positive number', ()=>{
    it('should add Positive number',()=>{
        expect(add(1,2)).to.eq(3);
    });
    it('should resta Positive number',() => {
        expect(resta(5,2)).to.eq(3);
    })
    it('should multi Positive number', () =>{
        expect(multi(5,2)).to.eq(10);
    })
    it('should dive Positive number', () =>{
        expect(divi(1,1)).to.eq(1);
    })
  
})
describe('math with Decimal number',()=>{
    it('should add Decimal number',()=>{
        expect(add(2.2,2.2)).to.eq(4.4)
    });
    it('should resta Decimal number',() => {
        expect(resta(5.0,2.5)).to.eq(2.5)
    })
    it('should multi Decimal number', () =>{
        expect(multi(2.5,2.5)).to.eq(6.25)
    })
    it('should dive Decimal number', () =>{
        expect(divi(5.5,5.5)).to.eq(1)
    })
})
})