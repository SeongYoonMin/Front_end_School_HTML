
// Test Unit 모음
describe('자스만 테스트 입니다.', () => {
    // 테스트 유닛.
    it('덧셈을 하는 함수 입니다.', () =>{
        let num = 10;

        // expect() : 실행한 함수의 결과값을 인수로 전달. (=기대식)
        // toBe() : 내가 기대한 결과가 일치하는지 판단하는 함수.
        expect(plusOne(num)).toBe(11);
    });
});