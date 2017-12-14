import calculator from './calculator'

describe('Calculator tests', () => {
    
    describe('add function', () => {

        it('should add numbers correctly', () => {
            const result = calculator.add(3, 6)
            expect(result).toBe(9)
        })
    })
})