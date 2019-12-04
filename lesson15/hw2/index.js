export function createLogger() {
    let logger = [];

    return {
        warm: function(str) {
            logger.push({
                message: str,
                dateTime: new Date(),
                type: 'warm'
            });
        },
        error: function(str) {
            logger.push({
                message: str,
                dateTime: new Date(),
                type: 'error'
            });
        },
        log: function(str) {
            logger.push({
                message: str,
                dateTime: new Date(),
                type: 'log'
            });
        },
        getRecords: function(str) {
            if (!str) {
                return logger;
            }
            return logger.filter(el => el.type === str).sort((a, b) => a.dateTime.getTime() - b.dateTime.getTime());
        }

    };
}