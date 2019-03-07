const alias =(path)=>({
    Menu : `${path}/src/components/Menu/Menu.js`,
    callApi:`${path}/src/utils/apiCaller.js`,
    HomePage : `${path}/src/pages/HomePage/HomePage.js`,
    NotFoundPage : `${path}/src/pages/NotFoundPage/NotFoundPage.js`,
    ProductListPage : `${path}/src/pages/ProductListPage/ProductListPage.js`,
    ProductActionPage : `${path}/src/pages/ProductActionPage/ProductActionPage.js`,


});

module.exports ={
    alias
};