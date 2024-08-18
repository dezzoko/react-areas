import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    outsideLayout?: boolean;
    withoutHeader?: boolean;
};
