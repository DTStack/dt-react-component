module.exports = {
    extends: ['@commitlint/config-angular'],
    'rules': {
        'type-case': [2, 'always', 'lower-case'],
        'scope-case': [0, 'always'],
        'type-enum': [2, 'always', [
            'feat', 'fix', 'improvement', 'refactor', 'docs', 'chore', 'style', 'revert',
            'pref', 'test', 'build', 'ci'
        ]]
    }
};
