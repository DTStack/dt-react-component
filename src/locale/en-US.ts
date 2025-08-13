import { Locale } from './useLocale';

const localeValues: Locale = {
    locale: 'en-US',
    BlockHeader: {
        expand: 'Expand',
        collapse: 'Collapse',
    },
    Catalogue: {
        searchPlaceholder: 'Search catalog name',
        inputPlaceholder: `Please enter`,
    },
    Chat: {
        stoped: 'Answer stopped',
        stop: 'Stop answering',
        regenerate: 'Regenerate',
        conversationEmpty: 'No conversation',
        createConversation: 'Start new conversation',
        rename: 'Rename',
        delete: 'Delete',
        renameError: 'Please enter conversation name',
        today: 'Today',
        yesterday: 'Yesterday',
        recent7Days: 'Recent 7 days',
        recent15Days: 'Recent 15 days',
        recent30Days: 'Recent 30 days',
        other: 'Other',
    },
    Copy: {
        copied: 'Copied',
        copy: 'Copy',
    },
    ErrorBoundary: {
        please: 'A new version has been found. Please',
        get: 'to get the new version.',
        refresh: ' refresh ',
        title: 'If this prompt persists for a long time, please contact the administrator.',
    },
    FilterRules: {
        message: 'Must have one data item',
    },
    Fullscreen: {
        exitFull: 'Exit Full Screen',
        full: 'Full Screen',
    },
    GlobalLoading: {
        loading: 'The application is loading, please wait~',
    },
    Dropdown: {
        resetText: 'Cancel',
        okText: 'Ok',
        selectAll: 'Select All',
    },
    Input: {
        case: 'Case-sensitive match',
        precise: 'Exact match',
        front: 'Head match',
        tail: 'Tail match',
    },
    NotFound: {
        description: 'Sorry, the page you visited does not exist',
    },
    SpreadSheet: {
        description: 'No Data',
        copy: 'Copy values',
        copyCol: 'Copy column names',
        copyAll: 'Copy values ​​and column names',
    },
};

export default localeValues;
