import React from 'react';
import { NewChatOutlined } from '@dtinsight/react-icons';
import { act, cleanup, fireEvent, render } from '@testing-library/react';
import { Menu } from 'antd';
import dayjs from 'dayjs';
import '@testing-library/jest-dom/extend-expect';

import Conversations, { ConversationInfo } from '../conversations';
import Chat from '..';

function generateConversation() {
    const conversation = [
        {
            id: 'conversation_1',
            createdAt: 1736479532239,
            updatedAt: dayjs().subtract(1, 'day').toDate().getTime(),
            title: 'this is conversation 1',
            assistantId: 'assistant_1',
        },
        {
            id: 'conversation_2',
            createdAt: 1736479532239,
            updatedAt: dayjs().toDate().getTime(),
            title: 'this is conversation 2',
            assistantId: 'assistant_2',
        },
    ];
    return conversation;
}
jest.mock('../../ellipsisText', () => {
    return (props: any) => <div data-testid="ellipsisText">{props.value}</div>;
});
jest.mock('remark-gfm', () => () => ({}));

describe('Test Chat Conversations', () => {
    beforeEach(() => {
        cleanup();
    });

    it('Match snapshot', () => {
        const conversation = generateConversation();
        const handleCreateChat = jest.fn();
        expect(render(<Conversations conversations={[]} />).asFragment()).toMatchSnapshot();
        expect(render(<Conversations conversations={[]} collapsed />).asFragment()).toMatchSnapshot(
            'collapsed'
        );
        expect(
            render(<Conversations conversations={[]} activeKey={conversation[0].id} />).asFragment()
        ).toMatchSnapshot('select');
        expect(render(<Conversations conversations={[]} loading />).asFragment()).toMatchSnapshot(
            'loading'
        );
        expect(
            render(
                <Conversations
                    conversations={[]}
                    header={
                        <Chat.Button
                            type="secondary"
                            icon={<NewChatOutlined />}
                            onClick={handleCreateChat}
                            className="prompt-float-chat-add"
                            style={{
                                margin: '16px',
                                gap: 4,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            开启新对话
                        </Chat.Button>
                    }
                />
            ).asFragment()
        ).toMatchSnapshot('handleCreateChat');
        expect(render(<Conversations conversations={conversation} />).asFragment()).toMatchSnapshot(
            'normal'
        );
        expect(
            render(<Conversations conversations={conversation} groupable />).asFragment()
        ).toMatchSnapshot('groupable');
    });
    it('Should loading', () => {
        const { container } = render(<Conversations conversations={[]} loading />);

        const ele = container.querySelector('.dtc-conversations-wrapper')?.children[0];
        expect(ele).toBeInTheDocument();
        expect(ele?.className).toContain('dtc-conversations-spin-wrapper');
    });

    it('Should collapsed', () => {
        const { container } = render(<Conversations conversations={[]} collapsed />);

        const ele = container.querySelector('.dtc-conversations-wrapper');
        expect(ele).toBeInTheDocument();
        expect(ele?.className).toContain('dtc-conversations--collapsed');
    });

    it('Should select item', () => {
        const conversation = generateConversation();
        const { container } = render(
            <Conversations conversations={conversation} activeKey={conversation[0].id} />
        );

        const ele = container.querySelector('.dtc-conversations-item');
        expect(ele).toBeInTheDocument();
        expect(ele?.className).toContain('dtc-conversations-item--active');
    });

    it('Should group list title', () => {
        const { container } = render(
            <Conversations conversations={generateConversation()} groupable />
        );

        const ele = container.querySelectorAll('.dtc-conversations-title');
        expect(ele).toHaveLength(2);
    });

    it('Should support add new session', () => {
        const handleCreateChat = jest.fn();
        const { container } = render(
            <Conversations
                conversations={[]}
                header={
                    <Chat.Button
                        type="secondary"
                        icon={<NewChatOutlined />}
                        onClick={handleCreateChat}
                        className="prompt-float-chat-add"
                        style={{
                            margin: '16px',
                            gap: 4,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        开启新对话
                    </Chat.Button>
                }
            />
        );

        const btn = container.querySelector<HTMLDivElement>('.prompt-float-chat-add');
        expect(handleCreateChat).not.toBeCalled();
        expect(btn).not.toBeNull();

        act(() => {
            fireEvent.click(btn!);
        });
        expect(handleCreateChat).toBeCalledWith(
            expect.objectContaining({
                type: 'click',
            })
        );
    });
    it('Should support select item', () => {
        const conversation = generateConversation();
        const onItemClick = jest.fn();
        const { container } = render(
            <Conversations
                conversations={conversation}
                activeKey={conversation[0].id}
                onItemClick={onItemClick}
            />
        );

        const nodeList = container.querySelectorAll<HTMLDivElement>('.dtc-conversations-item');
        const ele = nodeList?.item(nodeList?.length - 1);

        expect(onItemClick).not.toBeCalled();
        expect(ele).not.toBeNull();

        fireEvent.click(ele!);
        expect(onItemClick).toBeCalledWith(conversation[conversation.length - 1]);
    });

    test('Should render delete button', () => {
        const conversation = generateConversation();
        const onDelete = jest.fn();
        const renderMenu = (info: ConversationInfo) => ({
            overlay: (
                <Menu onClick={(e) => e.domEvent.stopPropagation()}>
                    <Menu.Item key="delete" onClick={() => onDelete?.(info)}>
                        删除
                    </Menu.Item>
                </Menu>
            ),
        });
        const { container } = render(
            <Conversations conversations={conversation} dropdown={renderMenu} />
        );

        const icon = container.querySelectorAll('.ant-dropdown-trigger')[0];
        expect(icon).toBeInTheDocument();

        act(() => {
            fireEvent.click(icon);
        });

        const dropdownMenuItems = document.querySelectorAll(
            '.ant-dropdown:not(.ant-dropdown-hidden) .ant-dropdown-menu-item'
        );
        expect(dropdownMenuItems).toHaveLength(1);

        fireEvent.click(dropdownMenuItems[0]);
        expect(onDelete).toBeCalledWith(conversation[0]);
    });
});
