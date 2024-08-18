export interface User {
    username: string;
}

export interface UserSchema {
    user?: User;
    isAuth: boolean;
    _inited: boolean;
}
