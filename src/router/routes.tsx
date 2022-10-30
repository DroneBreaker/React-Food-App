import { AppRoutes } from '../Constants'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Menu from '../pages/Menu'
type route = {
    path: string
    component: JSX.Element
}

export const routes: route[]= [
    //user routes
    {path: AppRoutes.HOME, component: <Home/>},

    //user routes
    {path: AppRoutes.MENU, component: <Menu/>},
    
    //user routes
    // {path: AppRoutes.SHOP, component: <Shop/>},

    //user routes
    {path: AppRoutes.CONTACT, component: <Contact/>}
]