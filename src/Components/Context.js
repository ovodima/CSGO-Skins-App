import React, { Component } from 'react'

export const DataContext = React.createContext()

export class DataProvider extends Component {
   
    state = {
        products: [
            {
                "id": "1",
                "title": "AK-47 | Revolution neon",
                "src": "https://i.pinimg.com/564x/7b/07/ea/7b07ea752cd0856fab1a0c3d3cd5d37e.jpg",
                "description": "Elle est beaucoup plus meurtrière en tirant de courtes rafales contrôlées.",
                "content": "Révolution néon Testée sur le terrainSecretNormal25.41 €",
                "price": 50,
                "type": [
                    "Factory New",
                    "Minimal Wear",
                    "Field-Tested",
                    "Well-Worn",
                    "Battle-Scarred"
                ],
                "count": 1
            },
            {
                "id": "2",
                "title": "AK-47 | Legion of Anubis",
                "src": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_anubis_light_large.77994b9d6a2f3020c0c5aa8c9c7f70357d460bff.png",
                "description": "Elle est beaucoup plus meurtrière en tirant de courtes rafales contrôlées.",
                "content": "Révolution néon Testée sur le terrainSecretNormal25.41 €",
                "price": 120,
                "type": [
                    "Factory New",
                    "Minimal Wear",
                    "Field-Tested",
                    "Well-Worn",
                    "Battle-Scarred"
                ],
                "count": 1
            },
            {
                "id": "3",
                "title": "AK-47 | Asiimov",
                "src": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_asiimov_light_large.665fc3b83c8046398787a57d2ef7a9d938244820.png",
                "description": "Elle est beaucoup plus meurtrière en tirant de courtes rafales contrôlées.",
                "content": "Révolution néon Testée sur le terrainSecretNormal25.41 €",
                "price": 90,
                "type": [
                    "Factory New",
                    "Minimal Wear",
                    "Field-Tested",
                    "Well-Worn",
                    "Battle-Scarred"
                ],
                "count": 1
            },
            {
                "id": "4",
                "title": "AK-47 | Neon Rider",
                "src": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak_neon_rider_light_large.9209192b514c4ec98146b4747dec8ce407a977c8.png",
                "description": "Elle est beaucoup plus meurtrière en tirant de courtes rafales contrôlées.",
                "content": "Révolution néon Testée sur le terrainSecretNormal25.41 €",
                "price": 100,
                "type": [
                    "Factory New",
                    "Minimal Wear",
                    "Field-Tested",
                    "Well-Worn",
                    "Battle-Scarred"
                ],
                "count": 1
            },
            {
                "id": "5",
                "title": "AK-47 | The Empress",
                "src": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_gs_ak47_empress_light_large.f81d0b07dca381635c89f74bcdb6b64a6da6e81c.png",
                "description": "Elle est beaucoup plus meurtrière en tirant de courtes rafales contrôlées.",
                "content": "Révolution néon Testée sur le terrainSecretNormal25.41 €",
                "price": 40,
                "type": [
                    "Factory New",
                    "Minimal Wear",
                    "Field-Tested",
                    "Well-Worn",
                    "Battle-Scarred"
                ],
                "count": 1
            },
            {
                "id": "6",
                "title": "AK-47 | Bloodsport",
                "src": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_gs_ak47_bloodsport_light_large.40f076f6b92e08acc37860923533aa9768795b2b.png",
                "description": "Elle est beaucoup plus meurtrière en tirant de courtes rafales contrôlées.",
                "content": "Révolution néon Testée sur le terrainSecretNormal25.41 €",
                "price": 200,
                "type": [
                    "Factory New",
                    "Minimal Wear",
                    "Field-Tested",
                    "Well-Worn",
                    "Battle-Scarred"
                ],
                "count": 1
            },
        ],
        cart: []
    }

    addCart = (id) => {
        const {products, cart} = this.state
        const check = cart.every(item => {
            return item.id !== id
        }) 


        if(check){
                const data = products.filter(products => {
                    return products.id === id
                }) 
                this.setState({cart: [...cart, ...data]})
            } else {
                alert('The product has been added to cart! Thank you')
            }
        }

        reduction = id => {
            const {cart} = this.state
            cart.forEach(item => {
                if(item.id === id) {
                    item.count === 1 ? item.count = 1 : item.count -=1
                }
            })
            this.setState({cart: cart})
        }
        
       increase = id => {
           const {cart}= this.state
           cart.forEach(item => {
               if(item.id === id) {
                   item.count += 1
               } 
           })
           this.setState({cart: cart})
       }

       removeProduct = id => {
           if(window.confirm('Do you want delete product?')) {
               const {cart} = this.state
               cart.forEach((item, index) => {
                   if(item.id === id) {
                    cart.splice(index,1)
                   }
               })
               this.setState({cart: cart})
           }
       }
        

    render() {
        const {products, cart} = this.state
        const {addCart, reduction, increase, removeProduct} = this
        return (
            <DataContext.Provider value={{products, addCart, cart, reduction, increase , removeProduct}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

