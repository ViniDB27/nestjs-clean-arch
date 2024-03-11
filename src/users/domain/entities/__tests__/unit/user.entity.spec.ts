import { UserEntity, UserProps } from '../../user.entity';
import { faker } from '@faker-js/faker';

describe('UserEntity unit tests', () => {
  let props: UserProps;
  let sut: UserEntity;

  beforeEach(() => {
    props = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    sut = new UserEntity(props);
  });

  it('Construcutor method', () => {
    expect(sut).toBeDefined();
    expect(sut.porps.name).toBe(props.name);
    expect(sut.porps.email).toBe(props.email);
    expect(sut.porps.password).toBe(props.password);
    expect(sut.porps.createdAt).toBeInstanceOf(Date);
  });
});
