const { printHistogram } =  require('../histogram');
const utils =  require('../utils');

jest.mock('../utils'); 

afterEach(() => {
    utils.log.mockClear();
});

test('test1', () => {
    const input = [1, 30, 31, 71, 21, 40, 23, 45]
    const size = 10;
    printHistogram(input, size)
    expect(utils.log).toHaveBeenCalledTimes(8)
});

test('test1', () => {
    const input = [1, 30, 31, 71, 21, 40, 23, 45]
    const size = 15;
    printHistogram(input, size)
    expect(utils.log).toHaveBeenCalledTimes(5)
});



