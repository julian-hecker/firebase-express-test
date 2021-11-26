import { db } from '../config';
import { converter } from '.';

export function makeService<Type>() {
  return class Service {
    private collectionReference;
    constructor(collection: string) {
      this.collectionReference = db
        .collection(collection)
        .withConverter(converter<Type>());
    }
    
    public async fetchAll() {
      return (await this.collectionReference.get()).docs.map((doc) =>
        doc.data(),
      );
    }

    public async fetchOne() {}

    public async updateOne() {}

    public async createOne() {}

    public async deleteOne() {}
  };
}

interface User {
  name: string;
}

const UserService = makeService<User>();

const userService = new UserService('users');

const users = userService
  .fetchAll()
  .then((userData) => console.log(userData));
