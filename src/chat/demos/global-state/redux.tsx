import React, { useEffect, useState } from 'react';
import { Conversation } from 'dt-react-component/chat/entity';

export type Store = {
    data: Conversation | undefined;
};
const store: Store = {
    data: undefined,
};

const context = React.createContext<Store>(store);
const listeners: Function[] = [];

/**
 * 简单实现一个 redux
 */
export function connect(Comp: React.FunctionComponent<Store>) {
    return () => {
        const [state, setState] = useState<Store>(store);

        useEffect(() => {
            listeners.push(setState);
        }, []);

        return (
            <context.Provider value={state}>
                <Comp {...state} />
            </context.Provider>
        );
    };
}

export function dispatch(type: string, data: Store) {
    switch (type) {
        case 'update':
            store.data = Object.assign({}, data.data);
            break;
        default:
            break;
    }

    listeners.forEach((l) => l({ ...store }));
}
