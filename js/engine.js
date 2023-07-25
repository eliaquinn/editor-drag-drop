class GridStackBuilder {
    constructor(arr) {
        this.object = arr
    }

    createElement (arr, element, index) {
        const {column, row, cellHeight, disableOneColumnMode ,float, removable} = this.object[index]
        GridStack.init({
            column,
            row,
            cellHeight,
            disableOneColumnMode,
            float,
            removable,
        }, element)
        .load(arr)
    }
}