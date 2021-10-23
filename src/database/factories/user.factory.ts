import { define } from 'typeorm-seeding';

import { UserEntity } from '../../modules/user/user.entity';

define(UserEntity, (faker) => {
    const gender = faker.random.number(1);
    const firstName = faker.name.firstName(gender);
    const lastName = faker.name.lastName(gender);
    const email = faker.internet.email(firstName, lastName);
    // const email = "junctionx@gmail.com"

    const user = new UserEntity();
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.password = '123456';

    return user;
});
