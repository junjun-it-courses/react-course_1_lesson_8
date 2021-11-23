import assert from 'power-assert';

// Весь код остаётся тем же самым
const user = {
    name: 'Madonna',
    friends: ['Kate', 'Michel'],
    email: 'madonna@example.com',
};

// Интерфейс библиотеки power-assert на 100% совместим со встроенным модулем assert.
assert(user.name === 'Michel');