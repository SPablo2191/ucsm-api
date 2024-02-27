export enum RoleTypes {
  ADMIN = 'ADMIN@ROLE',
  STUDENT = 'STUDENT@ROLE',
}

export interface Role {
  type: RoleTypes;
  priority?: number;
}

function createRoleSymbol(roleObject: Role | RoleTypes): Role {
  if (typeof roleObject === 'string') return { type: roleObject };
  return roleObject;
}

export const ADMIN_ROLE = createRoleSymbol(RoleTypes.ADMIN);
export const STUDENT_ROLE = createRoleSymbol(RoleTypes.STUDENT);
