import { faker } from '@faker-js/faker';

export function credencialesFalsas() {
  const email = faker.internet.email();
  const password = faker.internet.password(12, true, /[A-Z0-9]/, '!');

  return { email, password };
}
