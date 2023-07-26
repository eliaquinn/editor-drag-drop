class GridStackBuilder extends GridStackEngine {
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

    moveNode(GridStackNode, GridStackMoveOpts) {
        o.x = node.x;
        o.w = node.w;
        return super.moveNode(node, o);
    }
}