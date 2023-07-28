const btnSave = document.querySelector(".save-file button")
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
    class: "teste-eliaquin",
    handle: 'adicional'
    // acceptWidgets: function(el) { 
    //     console.log(el)
    //     return true
    // }
}

const docEngine = new DocumentEngine()

//insert custom functions into prototype GridStack
GridStack.prototype.printCount = function() {
    this.el.addEventListener('click', (e) => {
        // this.engine.nodes.filter()
        console.log(this)
    })
    // console.log('O documento possui ' + this.engine.nodes.length + ' elemento(s)')
}

const gs = GridStack.init(options)
gs.load(body)

GridStack.setupDragIn('.tools .grid-stack-item', { appendTo: 'body', helper: 'clone' })

gs.printCount()

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

pdfMake.fonts = {
    Poppins: {
        normal: "Regular.ttf",
        bold: 'SemiBold.ttf',
        italics: 'Italic.ttf'
    }
  }

var docDefinitions = {
	content: [
		{
		    style: 'tableExample',
    		table: {
				widths: [100, '*'],
				body: [
					[
					    {
                            image: 'logo.png',
                            width: 80,
                            height: 80
                        },
					    {
                            text: 'FARMER UNION HARD TRUCK APOCALIPSE',
                            style: 'header'
                        }
					]
				]
			},
			layout: 'noBorders'
		}
	],
    defaultStyle: {
        font: 'Poppins'
    },
	styles: {
	    tableExample: {
			margin: [0, 0, 0, 0]
		},
        header: {
            fontSize: 18,
            alignment: 'center',
            margin: [ 5, 2, 10, 20 ]
        }
	}
}

btnSave.addEventListener("click", () => {
    // pdfMake.createPdf(docDefinitions).download('document.pdf');
    pdfMake.createPdf(docDefinitions).download('document.pdf')
})