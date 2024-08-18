import { Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from './RequireAuth';
import { routeConfig } from '../config/routeConfig';
import { AppRoutesProps } from '@/shared/types/router';
import { AppLayout, WithoutHeaderLayout } from '@/shared/layouts';
import { Sidebar } from '@/widgets/Sidebar';
import { Header } from '@/widgets/Header';

export const AppRouter = memo(() => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        let element = (
            <AppLayout
                content={
                    <Suspense fallback={<div>Loading...</div>}>
                        {route.element}
                    </Suspense>
                }
                header={<Header />}
                sidebar={<Sidebar />}
            />
        );
        switch (true) {
            case route.withoutHeader:
                element = (
                    <WithoutHeaderLayout
                        content={
                            <Suspense fallback={<div>Loading...</div>}>
                                {route.element}
                            </Suspense>
                        }
                        sidebar={<Sidebar />}
                    />
                );
                break;
            case route.outsideLayout:
                element = (
                    <Suspense fallback={<div>Loading...</div>}>
                        {route.element}
                    </Suspense>
                );
                break;
        }
        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth>{element}</RequireAuth>
                    ) : (
                        element
                    )
                }
            />
        );
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
});

AppRouter.displayName = 'AppRouter';
