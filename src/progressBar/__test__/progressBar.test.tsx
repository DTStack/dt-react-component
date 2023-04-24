import '@testing-library/jest-dom/extend-expect';
import ProgressBar from '..';

describe('test ProgressBar', () => {
    const progressBar = ProgressBar;

    test('show method should add progress bar and loading image to the DOM', () => {
        progressBar.show();
        // show 方法内有延时
        setTimeout(() => {
            expect(progressBar.hasAdded()).toBe(true);
        }, 200);
    });

    test('hide method should remove progress bar and loading image from the DOM', () => {
        progressBar.show();
        progressBar.hide();
        expect(progressBar.hasAdded()).toBe(false);
    });
});
