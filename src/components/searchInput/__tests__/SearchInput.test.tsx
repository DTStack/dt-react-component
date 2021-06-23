import React from 'react';
import SearchInput from '../index';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { Button } from 'antd';

describe('test SearchInput', () => {
  afterEach(() => {
    cleanup();
  });

  it('should get search input component', () => {
    let { queryByTestId } = render(
      <SearchInput
        placeholder="请输入数据源名称或描述"
        onSearch={(value) => {
          console.log('value:', value);
        }}
      />
    );
    expect(queryByTestId('input')).not.toBeNull();
  });

  it('should get defaultValue', () => {
    let { getByTestId } = render(
        <SearchInput
          defaultValue="hhh"
          onSearch={(value) => {
            console.log('value:', value);
          }}
        />
      );
      const id: any = getByTestId('input')
      expect(id.value).toBe('hhh');
  });

  it('should get placeholder property', () => {
    let { getByPlaceholderText } = render(
      <SearchInput
        placeholder="请输入数据源名称或描述"
        onSearch={(value) => {
          console.log('value:', value);
        }}
      />
    );
    expect(getByPlaceholderText('请输入数据源名称或描述')).toBeTruthy();
  });

  it('should get change value', () => {
    const { getByTestId } = render(
      <SearchInput
        onSearch={(value) => {
          console.log('value-search:', value);
        }}
      />
    );
    fireEvent.change(getByTestId('input'), {
      target: { value: 'description' },
    });
    const id: any = getByTestId('input');
    expect(id.value).toBe('description');
  });

  it('should get search event', () => {
    const myMockSearch = jest.fn((value: any) => {
      return { value };
    });
    const { getByTestId } = render(<SearchInput onSearch={myMockSearch} />);

    fireEvent.change(getByTestId('input'), {
      target: { value: '123456789' },
    });
    fireEvent.click(getByTestId('search-icon'));
    expect(myMockSearch.mock.calls.length).toBe(1);
  });

  it('should get search event with enterButton', () => {
    const myMockSearch = jest.fn((value: any) => {
      return { value };
    });
    const { getByTestId } = render(<SearchInput onSearch={myMockSearch} enterButton={<Button>搜索</Button>} />);

    fireEvent.change(getByTestId('input'), {
      target: { value: '123456789' },
    });
    fireEvent.click(getByTestId('search-btn'));
    expect(myMockSearch.mock.calls.length).toBe(1);
  });
});

