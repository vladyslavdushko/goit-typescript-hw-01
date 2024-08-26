export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type UserRoleStatus = Record<UserRole, boolean>;

// Замініть наступний код на версію за допомогою Record
const RoleDescription: UserRoleStatus = {
  [UserRole.admin]: true,
  [UserRole.editor]: false,
  [UserRole.guest]: true,
};
