import { Collection, getRepository } from 'fireorm';

@Collection('users')
export class User {
  id: string;
  name: string;

  constructor(id: string = '', name: string = '') {
    this.id = id;
    this.name = name;
  }
}

export const userRepository = getRepository(User);

const user = new User();
