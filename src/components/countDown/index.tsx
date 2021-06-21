import React, { useCallback, useEffect, useRef } from 'react';
type FunctionInterpolateReturn = (number) => number;
interface IPropsCountDown {
  timeInterval: number;
  format: (value: number) => string;
  start: number;
  end: number;
  interpolate: (start, end) => FunctionInterpolateReturn,
  style: React.CSSProperties,
  className: string;
}

const interpolateLinear = (
  start: number,
  end: number
): FunctionInterpolateReturn => {
  return (ratio: number) => {
    if (ratio >= 1) return end;
    return (end - start) * ratio + start;
  }
}

const CountDown = (props: Partial<IPropsCountDown>) => {
  const {
    timeInterval = 3000,
    format = (v: number) => v.toString(),
    start = 0,
    end = 1000,
    interpolate = interpolateLinear,
    className,
    style,
  } = props;

  const animStart = useRef<number>(null);
  const requestId = useRef(null);
  const refContainer = useRef(null);

  const transform = useCallback(interpolate(start, end), [start, end]);

  const update = (elapseMsec: number): boolean => {
    const ratio = elapseMsec / timeInterval;
    if (ratio >= 1) window.cancelAnimationFrame(requestId.current);
    let value = transform(ratio).toString();
    if (typeof format === 'function') {
      value = format(transform(ratio));
    }
    if(refContainer.current)
      refContainer.current.innerText = value;
    return ratio < 1;
  }

  const trigger = () => {
    const now = new Date().valueOf();
    const nextFrame = update(now - animStart.current);
    if (nextFrame)
      requestId.current = requestAnimationFrame(trigger);
  }

  useEffect(() => {
    if(!refContainer.current) return
    if(requestId.current !== null)
      cancelAnimationFrame(requestId.current);
    animStart.current = new Date().valueOf();
    requestAnimationFrame(trigger);
    return () => window.cancelAnimationFrame(requestId.current);
  }, [
    start,
    end,
    timeInterval
  ]);

  return (
    <span
      className={className}
      style={style}
      ref={refContainer}
      data-testid="count-down"
    >
      {
        typeof format === 'function' ? (
          format(start)
        ) : (
          start.toString()
        )
      }
    </span>
  )
}

export default CountDown;
