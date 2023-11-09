const utils = {
    /**
     * 根据 arrays 过滤当前的 attr，结果会根据 arrays 中的顺序进行排序，最后一个为未命中的集合
     * @param attr  \{ a: 123, b: 321, onCancel: () => {}, disabled: true }
     * @param arrays [MODAL_PROPS, FORM_PROPS]
     * @returns {attr[]} [{ onCancel: () => {} }, { disabled: true }, { a: 123, b: 321 }]
     */
    filterAttrByArrays(attr: { [key: string]: any }, arrays: string[][] = []) {
        const result = new Array(arrays.length + 1); // 多出来一个用来存放 restProps
        for (let index = 0; index < result.length; index++) {
            result[index] = {};
        }

        Object.keys(attr).forEach((key: string) => {
            const isFind = arrays.find((array, index) => {
                if (array.includes(key)) {
                    result[index][key] = attr[key];
                    return true;
                }
                return false;
            });

            if (!isFind) {
                result[arrays.length][key] = attr[key];
            }
        });
        return result;
    },
};

export default utils;
