import {createBrowserRouter} from 'react-router-dom'
import Layout from './feature/Layout'
import Home from './pages/Home'
import RentalList from './pages/RentalList'
import TenancyApplications from './pages/TenancyApplications'
import Summary from './pages/Application Summary'

export const routers = createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/rentList/:rentSlug',
                element:<RentalList/>
            },
            {
                path:'/tenancyapplications',
                element:<TenancyApplications/>
            },
            {
                path:'/summary',
                element:<Summary/>
            }
        ]
    }
])