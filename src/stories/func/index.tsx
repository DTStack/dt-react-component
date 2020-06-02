
/**
 * 屏蔽多余组件的 props
 * @param props 数组
 * @param disable 是否禁用 info addon
 * info addon 配置项参考 https://github.com/storybookjs/storybook/tree/master/addons/info#options-and-defaults
 */
export function notShowProps (disable: boolean, props?: any[]) {
    if (disable) {
        return {
            info: {
                disable: true
            }
        }
    } else {
        return {
            info: {
                inline: true,
                source: false,
                propTablesExclude: props
            }
        }
    }
}
