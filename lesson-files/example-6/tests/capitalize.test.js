import { strict as assert } from 'assert';

const user = {
    name: 'Madonna',
    friends: ['Kate', 'Michel'],
    email: 'madonna@example.com',
};

assert(user.name === 'Michel');

// AssertionError [ERR_ASSERTION]: The expression evaluated to a falsy value:
//  assert(user.name === 'Michel')