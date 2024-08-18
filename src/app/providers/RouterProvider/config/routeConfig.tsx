import { AiPage } from '@/pages/AiPage';
import { HomePage } from '@/pages/HomePage';
import { SearchDataPage } from '@/pages/SearchDataPage';
import { SignInPage } from '@/pages/SignInPage';
import { AppRoutes, RoutePath } from '@/shared/constants/router';
import { AppRoutesProps } from '@/shared/types/router';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.SING_IN]: {
        path: RoutePath[AppRoutes.SING_IN],
        element: <SignInPage />,
        outsideLayout: true,
    },
    [AppRoutes.HOME]: {
        path: RoutePath[AppRoutes.HOME],
        element: <HomePage />,
        authOnly: true,
    },
    [AppRoutes.SEARCH_DATA]: {
        path: RoutePath[AppRoutes.SEARCH_DATA],
        element: <SearchDataPage />,
        authOnly: true,
    },
    [AppRoutes.AI]: {
        path: RoutePath[AppRoutes.AI],
        element: <AiPage />,
        withoutHeader: true,
        authOnly: true,
    },
};
