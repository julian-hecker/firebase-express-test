import { converter } from '@utils/';
import { db } from '@config/';

interface User {}

export const userCollection = db
  .collection('users')
  .withConverter(converter<User>());

export const createUser = async (data: object) =>
  await userCollection.add(data);

export const deleteUser = async (id: string) =>
  userCollection.doc(id).delete();

export const updateUser = async (id: string, data: object) =>
  userCollection.doc(id).update(data);

export const getUsers = async () =>
  (await userCollection.get()).docs.map((doc) => doc.data());
