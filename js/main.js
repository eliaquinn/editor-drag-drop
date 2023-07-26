const body = [
    {
        x: 0, 
        y: 0, 
        w: 2, 
        h: 3,
        // noResize: true, 
        content: '<div class="elem-img"><img src="assets/logo.png" alt="" /></div>'
    },
    {
        x: 2,
        y: 1, 
        w: 6, 
        h: 1, 
        // minW: 3, 
        // noResize: true, 
        content: '<div class="title-h4"><h4>FARMER UNION HARD TRUCK APOCALIPSE</h4></div>'
    },
    {
        x: 8,
        y: 1,
        w: 2, 
        h: 1,
    placeholderText: "teste",

        // noMove: true, 
        // noResize: true, 
        // locked: true, +
        content: '<div class="content-sp"><span>Item 1</span></div>'
    }
]

const options = {
    column: 10,
    row: 26,
    cellHeight: 40,
    disableOneColumnMode: true,
    acceptWidgets: true,
    float: true,
    margin: 2,
    removable: '#trash',
    class: "teste-eliaquin"
    // acceptWidgets: function(el) { 
    //     console.log(el)
    //     return true
    // }
}

const gs = GridStack.init(options)
gs.load(body)

GridStack.setupDragIn('.tools .grid-stack-item', { appendTo: 'body', helper: 'clone' })

//event listener
// gs.on("enable", (event, el) => {
//     console.log(el)
// })


//conta os elementos na tela
// extend gridstack with our own custom method
// GridStack.prototype.printCount = function() {
//     console.log('grid has ' + this.engine.nodes.length + ' items')
// };
// let grid = GridStack.init()
//   // you can now call
// grid.printCount()