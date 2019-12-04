import { createLogger } from './index.js'

it('should return array objects or empty array', () => {
    let logger = createLogger();
    logger.warm('str');
    let result = logger.getRecords('warm')[0].message;
    expect(result).toEqual('str');
});

it('should return array objects or empty array', () => {
    let logger = createLogger();
    logger.warm('str');
    let result = logger.getRecords('log');
    expect(result).toEqual([]);
});