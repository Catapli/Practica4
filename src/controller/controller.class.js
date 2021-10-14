const View = require('../view/view.class')
const Store = require('../model/store.class')
const Product = require('../model/product.class')

class Controller {
    constructor() {
        this.store = new Store(1)
        this.view = new View()
    }

    addProductToStore(formData) {
        // Cambiamos los datos en el modelo
        console.log(formData)
        let product = this.store.addProduct(formData)
        let total = this.store.totalImport()
        if(product){
            this.view.renderNewProduct(product)
            this.view.renderStoreImport(total)
        }else{
            this.view.renderErrorMessage('El producto no se ha podido añadir')
        }
        


        // Si todo ha ido bien mostramos los datos en
        // la página y si no mostramos el error
    }

    deleteProductFromStore(prodId) {
        var producto = this.store.findProduct(Number(prodId))
        console.log(producto)
        if(prodId){
            var conf1 = prompt("Estas Seguro de querer borrar el producto "+prodId+" ? S/N");
            if(conf1 == 'S'){
                if(producto.units > 0){
                    var conf2 = prompt("El producto "+prodId+" tiene " +producto.units+ " unidades quieres borrarlo ? S/N");
                    if(conf2 == 'S'){
                      this.store.delProduct(prodId)
                      this.view.renderDelProduct(prodId)
                    }
                }else{
                    this.store.delProduct(prodId)
                    this.view.renderDelProduct(prodId)
                }
             
            }
          }

        // No olvides pedir confirmación y, si el producto
        // tiene unidades pedir una segunda confirmación
    }

    changeProductInStore(formData) {
    }

    changeProductStock(formData) {
       let product = this.store.changeProductUnits(formData)
       let total = this.store.totalImport()
       if(product){
        this.view.renderEditProduct(product)
        this.view.renderStoreImport(total)
       }
    }
}

module.exports = Controller
