import { lazy } from 'react'
// const  Home  = lazy(() => import ('../pages/home/index'))
// const  NotFoundPage  = lazy(() => import ('../pages/notFoundPage/index'))
// const Sign = lazy(() => import ('../pages/sign/index'))
// const More = lazy(() => import ('../pages/more/index'))

import { Home } from '../pages/home/index.jsx'
import { NotFoundPage } from '../pages/notFoundPage/index.jsx'
import { Sign } from '../pages/sign/index.jsx'
// import { Admin } from '../pages/admin/index.jsx'
import { Admin } from '../pages/more/index.jsx'

export const DataRouter = [
    {
        id : 1,
        path : '/',
        Element : <Home/>
    },
    {
        id : 2,
        path : '/admin',
        Element : <Admin/>
    },
    {
        id : 3,
        path : '/sign',
        Element : <Sign/>
    },
    {
        id : 4,
        path : '/*',
        Element : <NotFoundPage/>
    }
]