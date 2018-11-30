import { zero } from './EvaluationM.js';

describe('zero', function() {

    it('should return "Salut" if x == 5', function () {
        expect(zero("5")).toBe("Salut");
    });

    it('should return true if x is defined', function () {
        expect(zero("anything")).toBe(true)
    });

    it('should return 45 if x <= 60', function () {
        expect(zero(60)).toBe(45);
    });

});