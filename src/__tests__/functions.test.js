import { add } from '../utils/functions'


test('add 3 + 2 to equal 5', () => {
    expect(add(3,2)).toBe(5)
})

test('add 4 + 5 to equal with string', () => {
    expect(add('4',5)).toBe(9)
})

test('add "hello" + "world" to equal NaN', () => {
    expect(add('hello', 'world')).toBeNaN()
})

