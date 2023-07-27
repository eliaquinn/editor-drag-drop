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

// pdfMake.fonts = {
//    Roboto: {
//      normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
//      bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
//      italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
//      bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf'
//    }
// }

pdfMake.fonts = {
    Poppins: {
        normal: "Regular.ttf",
        bold: 'SemiBold.ttf',
        italics: 'Italic.ttf'
    }
  }

// {
//     image: 'https://static.wixstatic.com/media/0784b1_476fd2c5d17f46db826984d3947acdad~mv2.jpg/v1/fill/w_270,h_262,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bo_wix_com_user-manager_users_byGuid_378b07fd-d52a-49e9-a802-db6d5b2d70c7.jpg',
//     width: 80,
//     height: 80
// },

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