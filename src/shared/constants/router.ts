export enum AppRoutes {
    SING_IN = 'sign-in',
    HOME = 'home',
    SEARCH_DATA = 'search-data',
    AI = 'ai',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.SING_IN]: '/sign-in',
    [AppRoutes.HOME]: '/',
    [AppRoutes.SEARCH_DATA]: '/search-data',
    [AppRoutes.AI]: '/ai',
};
