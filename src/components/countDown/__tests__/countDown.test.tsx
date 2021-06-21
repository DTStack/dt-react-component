import React from 'react';
import CountDown from '../';
import { cleanup, render } from '@testing-library/react';

let wrapper;
let ele;
describe('test component CountDown', () => {
  it('initial value:', done => {
    wrapper = render(
      <CountDown />
    );
    ele = wrapper.queryByText('0');
    expect(ele).not.toBeNull();
    setTimeout(() => {
      wrapper.queryByText('3000');
      expect(ele).not.toBeNull();
      done();
    }, 3000);
  });

  it('style and classname', () => {
    const style = {
      color: 'orange',
      fontSize: '30px'
    };
    const className = 'test_classname';
    wrapper = render(
      <CountDown className={className} style={style} />
    );
    ele = wrapper.queryByTestId('count-down');
    expect(ele.classList.contains(className)).toBeTruthy();
    expect(ele.style.color).toBe('orange');
    expect(ele.style['font-size']).toBe('30px');
  });

  it('format', done => {
    const format = v => `${v.toFixed(2)}%`
    wrapper = render(
      <CountDown
        start={0}
        end={100}
        format={format}
      />
    );
    expect(wrapper.queryByText('0.00%')).not.toBeNull();
    // 时间些许误差，一般刷新为60的屏幕误差不超过17ms
    setTimeout(() => {
      ele = wrapper.getByTestId('count-down');
      expect(ele.innerText).toBe('100.00%');
      done();
    }, 3020)
  });

  it('timer interval', done => {
    const timeInterval = 4000;
    wrapper = render(
      <CountDown
        timeInterval={timeInterval}
        start={0}
        end={1000}
      />
    );
    setTimeout(() => {
      expect(wrapper.queryByText('0')).not.toBeNull();
    }, 0);

    setTimeout(() => {
      ele = wrapper.queryByTestId('count-down');
      console.log(ele.innerText);
      expect(ele.innerText).not.toBe('0');
      expect(ele.innerText).not.toBe('1000');
    }, 1000);

    setTimeout(() => {
      ele = wrapper.queryByTestId('count-down');
      expect(ele.innerText).not.toBe('0');
      expect(ele.innerText).not.toBe('1000');
    }, 2000);

    setTimeout(() => {
      ele = wrapper.queryByTestId('count-down');
      expect(ele.innerText).not.toBe('0');
      expect(ele.innerText).not.toBe('1000');
    }, 3000);

    setTimeout(() => {
      ele = wrapper.queryByTestId('count-down');
      expect(ele.innerText).toBe('1000');
      done();
    }, 4017);
  });

  afterEach(cleanup);
})
