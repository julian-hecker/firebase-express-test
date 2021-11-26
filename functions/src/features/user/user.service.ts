export const fetchUsers = async () => {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9];
};

export const fetchUser = async (id: string) => {
  const users: { [key: string]: any } = {
    '1': 'aaa',
  };
  return users[id];
};
