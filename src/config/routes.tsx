import IRoute from '../interfaces/IRoute'
import HomePage from '../pages/home'
import ProductsPage from '../pages/product'
import BasketPage from '../pages/basket'

const routes : IRoute[] = [
    {
        path : '/',
        name: 'Home',
        component:HomePage,
        exact: true
    },
    {
        path : '/products',
        name: 'Products',
        component:ProductsPage,
        exact: false,
    },
    {
        path : '/basket',
        name: 'Basket',
        component:BasketPage,
        exact: false,
    }
]

export default routes


