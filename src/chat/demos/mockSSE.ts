type SSEProps = {
    message: string;
    onopen?: () => void;
    onmessage?: (str: string) => void;
    onstop?: () => void;
};

const str = [
    `### 将进酒
君不见黄河之水天上来，奔流到海不复回。

君不见高堂明镜悲白发，朝如青丝暮成雪。

人生得意须尽欢，莫使金樽空对月。

天生我材必有用，千金散尽还复来。

烹羊宰牛且为乐，会须一饮三百杯。

岑夫子，丹丘生，将进酒，杯莫停。

与君歌一曲，请君为我倾耳听。

钟鼓馔玉不足贵，但愿长醉不愿醒。

古来圣贤皆寂寞，惟有饮者留其名。

陈王昔时宴平乐，斗酒十千恣欢谑。

主人何为言少钱，径须沽取对君酌。

五花马、千金裘，呼儿将出换美酒，与尔同销万古愁。
`,
];

function getRandomLength() {
    return Math.floor(Math.random() * 10);
}

export function mockSSE({ message, onopen, onmessage, onstop }: SSEProps) {
    onopen?.();

    if (message.includes('诗')) {
        const text = str[0];
        let point = 0;
        const interval = window.setInterval(() => {
            const length = getRandomLength();
            let end = point + length;
            if (end >= text.length) {
                end = text.length;
                window.clearInterval(interval);
                onmessage?.(text.slice(point, point + length));
                onstop?.();
                return;
            }
            onmessage?.(text.slice(point, point + length));
            point += length;
        }, 100);
    } else {
        onmessage?.('根据你的描述暂未检索相关诗词。');
        onstop?.();
    }
}
