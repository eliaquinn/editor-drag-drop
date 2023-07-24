// CABEÇALHO
const header = [
    {
        x: 0, 
        y: 0, 
        w: 1, 
        h: 1,
        noResize: true, 
        content: '<div class="elem-img"><img src="assets/logo.png" alt="" /></div>'
    },
    {
        x: 1,
        y: 0, 
        w: 2, 
        h: 1, 
        minW: 2, 
        noResize: true, 
        content: '<div class="title-h4"><h4>FARMER UNION HARD TRUCK APOCALIPSE</h4></div>'
    },
    {
        x: 8, 
        y: 0,
        w: 1, 
        h: 1,
        // noMove: true, 
        noResize: true, 
        // locked: true, 
        content: '<div class="content-sp"><span>Farmer Union Inc.</span><span>Rua: Carvalho Leal</span><span>São Paulo - SP</span></div>'
    }
]

GridStack.init({
    column: 4,
    row: 1,
    cellHeight: 120,
    disableOneColumnMode: true,
    removable: '#trash',
    float: false,
}, '#header-grid')
.load(header)

// RODAPE
const footer = [
    {
        x: 0, 
        y: 0, 
        w: 1, 
        h: 1,
        noResize: true, 
        content: '<div class="elem-img"><img src="assets/logo.png" alt="" /></div>'
    },
    {
        x: 1,
        y: 0, 
        w: 2, 
        h: 1, 
        minW: 2, 
        noResize: true, 
        content: '<div class="title-h4"><h4>FARMER UNION HARD TRUCK APOCALIPSE</h4></div>'
    },
    {
        x: 8, 
        y: 0,
        w: 1, 
        h: 1,
        // noMove: true, 
        noResize: true, 
        // locked: true, 
        content: '<div class="content-sp"><span>24/07/2023</span></div>'
    }
]
/* <div class="ct-img"><img src="assets/logo.png" alt="" /></div> */
GridStack.init({
    column: 4,
    row: 1, // don't collapse when empty
    cellHeight: 120,
    disableOneColumnMode: true,
    float: false,
    removable: '#trash',
    // removable: '.trash', // true or drag-out delete class
    // itemClass: 'with-lines', // test a custom additional class #2110
    // acceptWidgets: function(el) { return true }
}, '#footer-grid')
.load(footer)

// advGrid.compact()

// console.log(advGrid.getFloat())

// GridStack.setupDragIn('.newWidget', { appendTo: 'body', helper: 'clone' });
