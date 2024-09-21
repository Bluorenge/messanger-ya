const logEnabledKey = 'loggerEnabled';
let isEnabled = typeof window !== 'undefined' && localStorage.getItem(logEnabledKey) === 'true';

type ConsoleMethod = 'log' | 'info' | 'warn' | 'error' | 'debug';

const scope: { [key in ConsoleMethod]: (...args: any[]) => void } & {
    enableLogs: () => void;
    disableLogs: () => void;
} = {
    enableLogs() {
        isEnabled = true;
        localStorage.setItem('loggerEnabled', 'true');
        console.log('logger is On.');
    },
    disableLogs() {
        isEnabled = false;
        localStorage.removeItem(logEnabledKey);
        console.log('logger is Off.');
    },
    log: () => {},
    info: () => {},
    warn: () => {},
    error: () => {},
    debug: () => {},
};

(['log', 'info', 'warn', 'error', 'debug'] as ConsoleMethod[]).forEach((method) => {
    scope[method] = createConsoleMethod(method);
});

function createConsoleMethod(method: ConsoleMethod) {
    return function (...args: any[]) {
        if (isEnabled) {
            console[method](...args);
        }
    };
}

export default scope;
