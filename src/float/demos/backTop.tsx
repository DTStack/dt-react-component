import React, { HTMLAttributes, useState } from 'react';
import { Float, Resize } from 'dt-react-component';

export default function () {
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    return (
        <Resize onResize={() => setSize({ width: window.innerWidth, height: window.innerHeight })}>
            <section>
                {Array.from({ length: 1000 }).map((_, idx) => (
                    <div key={idx}>{idx}. This is the segment</div>
                ))}
            </section>
            <Float draggable={false} position={{ y: size.height - 64, x: size.width - 64 }}>
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(0,0,0,.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <UpToLineIcon style={{ fontSize: 24, lineHeight: 0, color: '#fff' }} />
                </div>
            </Float>
        </Resize>
    );
}

function UpToLineIcon(props: HTMLAttributes<HTMLSpanElement>) {
    return (
        <span {...props}>
            <svg
                className="icon"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 3.88672C4 4.30093 4.34112 4.63672 4.7619 4.63672H19.2381C19.6589 4.63672 20 4.30093 20 3.88672C20 3.47251 19.6589 3.13672 19.2381 3.13672H4.7619C4.34112 3.13672 4 3.47251 4 3.88672Z"
                        fill="currentColor"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.0026 7.82525L7.18185 13.5648H10.6324V20.1141H13.3752V13.5648H16.8233L12.0026 7.82525ZM11.1411 6.51864C11.5907 5.98337 12.4144 5.98337 12.864 6.51864L18.4894 13.2162C19.1042 13.9481 18.5838 15.0648 17.628 15.0648H14.8752V20.1141C14.8752 20.9426 14.2036 21.6141 13.3752 21.6141H10.6324C9.80398 21.6141 9.13241 20.9426 9.13241 20.1141V15.0648H6.37715C5.42129 15.0648 4.90094 13.9481 5.5157 13.2162L11.1411 6.51864Z"
                        fill="currentColor"
                    />
                </g>
            </svg>
        </span>
    );
}
