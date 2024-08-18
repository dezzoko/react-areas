import { ReactNode } from 'react';
import cls from './WithoutHeader.module.scss';
interface WithoutHeaderLayoutProps {
    content: ReactNode;
    sidebar: ReactNode;
}

export function WithoutHeaderLayout(props: WithoutHeaderLayoutProps) {
    const { content, sidebar } = props;

    return (
        <div className={cls.AppLayout}>
            <div className={cls.sidebar}>{sidebar}</div>
            <div className={cls.content}>{content}</div>
        </div>
    );
}
