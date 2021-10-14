const Product = require('../model/product.class')
const divMessagesUI = document.getElementById('messages');

class View{
    renderNewProduct(product) {
        const div = document.getElementById('almacen').getElementsByTagName('tbody')[0]
        const tr = document.createElement('tr')
        tr.innerHTML = `<td>${product.id}</td>
                       <td>${product.name}</td>
                       <td>${product.units}</td>
                       <td>${product.price}</td>
                       <td>${product.productImport()}</td>`
        div.appendChild(tr)
    }

    renderEditProduct(product) {
        const numNodos = document.getElementById('almacen').getElementsByTagName('tbody')[0].childElementCount
        const div = document.getElementById('almacen').getElementsByTagName('tbody')[0]
        for (let index = 0; index < numNodos; index++) {
            let trAntiguo = div.children[index]
            if(trAntiguo.firstElementChild.textContent == product.id){   
            const tr = document.createElement('tr')
            tr.innerHTML = `<td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.units}</td>
            <td>${product.price}</td>
            <td>${product.productImport()+' €'}</td>`
            div.replaceChild(tr,trAntiguo)
            }
        }
    }

    renderDelProduct(id) {
        const numNodos = document.getElementById('almacen').getElementsByTagName('tbody')[0].childElementCount
        const div = document.getElementById('almacen').getElementsByTagName('tbody')[0]
        for (let index = 0; index < numNodos; index++) {
            let trAntiguo = div.children[index]
            if(trAntiguo.firstElementChild.textContent == id){   
            div.removeChild(trAntiguo)
            }
        }
    

    }

    renderStoreImport(total) {
        const tfoot = document.getElementById('total')
        tfoot.textContent = total + ' €'
    }

    renderErrorMessage(message) {
        const newMessageDiv = document.createElement('div')
        newMessageDiv.className = "col-sm-12 alert alert-danger alert-dismissible fade show"
        newMessageDiv.innerHTML = `
            <span><strong>ATENCIÓN: </strong>${message}</span>
            <button type="button" class="btn-close" data-bs-dismiss="alert" onclick="this.parentElement.remove()"></button>`
        
        divMessagesUI.appendChild(newMessageDiv)
    }
}

module.exports = View;
