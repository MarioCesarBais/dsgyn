//Url do arquivo pdf
const url = '../src/data/documents/ataEleicao.pdf'

// Carrega via <script> tag, cria endereço para acesso ao PDF.js exports.
const pdfjsLib = window['pdfjs-dist/build/pdf']

// Local do pdf.worker.js
pdfjsLib.GlobalWorkerOptions.workerSrc = 'pdfjs-dist/build/pdf.worker.js'
// Asynchronus download do PDF
const loadingTask = pdfjsLib.getDocument(url)

function renderizaPagina(pageNumber) {
    loadingTask.promise.then(function(pdf) {
        console.log('PDF loaded')

        // Primeira página
        pdf.getPage(pageNumber).then(function(page) {
            console.log(`Page loaded: ${pageNumber}`)

            const scale = 1.5
            const viewport = page.getViewport({scale: scale})

            // Prepara canvas usando as dimensões da página PDF
            const canvas = document.getElementById('the-canvas')
            const context = canvas.getContext('2d')
            canvas.height = viewport.height
            canvas.width = viewport.width

            // Renderiza página PDF para canvas
            const renderContext = {
                canvasContext: context,
                viewport: viewport
            }
            const renderTask = page.render(renderContext)
                renderTask.promise.then(function () {
                    console.log('Página renderizada!')
                })
        })
    }, function(reason) {
        // Mostra erro
        console.error(reason)
    })
}

let pageNumber = 1
// mostra a primeira página do arquivo pdf
pdfjsLib.getDocument(url).promise.then(function(pdfDoc_) {
    pdfDoc = pdfDoc_
    document.getElementById('page_count').textContent = pdfDoc.numPages
    document.getElementById('page_num').textContent = pageNumber

    // Chamando a renderização da página 1
    renderizaPagina(pageNumber)
})