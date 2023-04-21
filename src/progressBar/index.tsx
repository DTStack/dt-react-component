import './style.scss';

class ProgressBar {
    // 定时器
    _timer: any;
    // 计数，小于等于 0 时表示需要清除进度条
    _count: number;
    // 进度条
    img: HTMLDivElement;
    // loading 图片
    bar: HTMLDivElement;

    constructor() {
        this._timer = null;
        this._count = 0;

        this.bar = document.createElement('div');
        this.bar.className = 'dtc-progress-bar';

        this.img = document.createElement('div');
        this.img.className = 'dtc-progress-img';
        this.img.innerHTML = `<svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         width="30px" height="30px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                        <path fill="#2491F7" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
                        <animateTransform attributeType="xml"
                          attributeName="transform"
                          type="rotate"
                          from="0 25 25"
                          to="360 25 25"
                          dur="0.6s"
                          repeatCount="indefinite"/>
                        </path>
                      </svg>`;
    }

    show() {
        this._count++;
        if (!this.hasAdded() && !this._timer) {
            this._timer = setTimeout(() => {
                document.body.appendChild(this.bar);
                document.body.appendChild(this.img);
            }, 200);
        }
    }

    hide() {
        this._count--;
        if (this._count <= 0) {
            if (this._timer) {
                clearTimeout(this._timer);
                this._timer = null;
            }
            if (this.hasAdded()) {
                this.bar.remove();
                this.img.remove();
            }
        }
    }

    hasAdded() {
        return document.getElementsByClassName('dtc-progress-bar').length > 0;
    }
}

export default new ProgressBar();
