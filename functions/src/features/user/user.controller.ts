import asyncHandler from 'express-async-handler';

import * as userService from './user.service';

export const getUsers = asyncHandler(async (req, res) => {
  const users = await userService.fetchUsers();
  res.json(users);
});

export const getUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await userService.fetchUser(id);
  res.json(user);
});
