import express from 'express'
import { userController } from '../controllers/user.controller'
import checkAuth from '../middlewares/checkAuth'
import { USER_ROLE } from '../constants/users.constant'

const router = express.Router()

router.post(
  '/create-admin',
  checkAuth(USER_ROLE.admin, USER_ROLE.superAdmin),
  userController.createAdmin,
)

router.post(
  '/create-user',
  checkAuth(USER_ROLE.admin, USER_ROLE.superAdmin),
  userController.createUser,
)
router.get(
  '/',
  checkAuth(USER_ROLE.admin, USER_ROLE.superAdmin),
  userController.getAllUsers,
)
router.get(
  '/:id',
  checkAuth(USER_ROLE.admin, USER_ROLE.superAdmin, USER_ROLE.user),
  userController.getSingleUser,
)
router.put(
  '/:id',
  checkAuth(USER_ROLE.admin, USER_ROLE.superAdmin, USER_ROLE.user),
  userController.updateUser,
)
router.delete(
  '/:id',
  checkAuth(USER_ROLE.admin, USER_ROLE.superAdmin, USER_ROLE.user),
  userController.deleteUser,
)

export const userRoutes = router
