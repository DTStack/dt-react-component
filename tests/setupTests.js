const { TextDecoder, TextEncoder } = require('node:util');
const ResizeObserver = require('resize-observer-polyfill');

global.ResizeObserver = ResizeObserver;

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});
Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    value: jest.fn().mockImplementation(() => ({
        observe: jest.fn(),
        disconnectMock: jest.fn(),
        root: null,
        rootMargin: '',
        thresholds: [],
        takeRecords: jest.fn(),
        unobserve: jest.fn(),
    })),
});

window.ResizeObserver = class ResizeObserver {
    constructor() {}
    observe() {}
    disconnect() {}
};

window.IntersectionObserver = class IntersectionObserver {
    constructor() {}
    observe() {}
    disconnect() {}
};

Object.assign(global, { TextDecoder, TextEncoder });
