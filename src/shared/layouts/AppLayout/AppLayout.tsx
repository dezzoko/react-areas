import { ReactNode } from 'react';
import cls from './AppLayout.module.scss';
interface AppLayoutProps {
    content: ReactNode;
    sidebar: ReactNode;
    header: ReactNode;
}

export function AppLayout(props: AppLayoutProps) {
    const { content, sidebar, header } = props;

    return (
        <div className={cls.AppLayout}>
            <div className={cls.header}>{header}</div>
            <div className={cls.sidebar}>{sidebar}</div>
            <div className={cls.content}>{content}</div>
        </div>
    );
}
