import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';

const routes = [
    {
        path:"/",
        exact : true,
        component :()=> <HomePage />
    },
    {
        path:"/products-list",
        exact : false,
        component:()=><ProductListPage />
    },
    {
        path:"/products/add",
        exact:false,
        component : ({history}) => <ProductActionPage history={history}/>
    },
    {
        path:"/products/:id/edit",
        exact:false,
        component: ({match,history}) => <ProductActionPage match={match} history={history}/>
    },
    {
        path:"",
        exact : false,
        component : () => <NotFoundPage />
    }
];

export default routes;