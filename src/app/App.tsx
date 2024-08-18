import { useEffect } from 'react';
import { AppRouter } from './providers/RouterProvider';
import { userActions } from '@/entities/User';
import { useAppSelector, useAppDispatch } from '@/shared';

function App() {
    const inited = useAppSelector((state) => state.user._inited);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(userActions.initUserData());
    }, [dispatch]);

    if (!inited) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <AppRouter />
        </>
    );
}

export default App;
