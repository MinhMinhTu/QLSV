import React from 'react';
import HomePage from 'HomePage';
import NotFoundPage from 'NotFoundPage';
import ProductListPage from 'ProductListPage';
import ProductActionPage from 'ProductActionPage';

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