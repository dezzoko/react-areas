import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from '@/shared/constants/router';
import { useAppSelector } from '@/shared/hooks/redux-hooks/redux-hooks';

interface RequireAuthProps {
    children: JSX.Element;
}

export function RequireAuth({ children }: RequireAuthProps) {
    const auth = useAppSelector((state) => state.user.isAuth);
    const location = useLocation();

    if (!auth) {
        return (
            <Navigate
                to={RoutePath['sign-in']}
                state={{ from: location }}
                replace
            />
        );
    }

    return children;
}
