import { RolePermission } from "./models/role";
import { AdminUser } from "./models/user";
import { CrudRolePermission, CrudType } from "./types";
export declare class PermissionGuard {
    permissionCheck: {
        [key: string]: boolean;
    };
    private user;
    private currentNamespace;
    private clientId;
    private subscriber;
    constructor(props?: {
        user?: AdminUser | null;
        currentNamespace?: string;
        clientId?: string;
    });
    hasPermission: (permission: CrudRolePermission) => boolean;
    getCrudTypeByCrudBit: (action: number) => CrudType[];
    hasPermissionByCrudBit: (permission: RolePermission, action: CrudType) => boolean;
    reset: () => void;
    setUser: (user: AdminUser | null) => void;
    setCurrentNamespace: (currentNamespace: string) => void;
    setClientId: (clientId: string) => void;
    listen(listener: () => unknown): void;
    unlisten(listener: () => unknown): void;
    private notifySubscribers;
    private checkHasPermission;
    private isResourceIncluded;
    private isActionIncluded;
    private isVariableCovered;
    private replaceResourceVal;
}
