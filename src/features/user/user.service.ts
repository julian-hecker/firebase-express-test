export const getUsers = async () => {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9];
};

export const getUser = async (id: string) => {
  const users = {
    '1': 'aaa',
  };
  return users[id];
};
