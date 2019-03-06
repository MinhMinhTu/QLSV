import React, { Component } from 'react';
import {Route, Link } from 'react-router-dom';

const menus = [
    {
        name:"Trang chủ",
        to : "/",
        exact : true,
    },
    {
        name:"Quản Lý Sản Phẩm",
        to : "/products-list",
        exact : false,
    }
];

//custom link
const MenusLink =({label, to, activeOnlyWhenExact}) =>{
    return(
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({match})=>{
                let active = match ? 'active' : '';
                return (
                    <li className={active}>
                        <Link to={to}>
                            {label}
                        </Link>
                    </li>
                )
            }}
        />
    )
}
class Menu extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <nav className="navbar navbar-default">
                        <ul className="nav navbar-nav">
                           {this.showMenus(menus)}
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
    //lấy data từ menus truyền vào MenusLink
    showMenus = (menus) =>{
        let result = null;
        if(menus.length > 0){
            result = menus.map((menu,index)=>{
                return (
                    <MenusLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                )
            })
        }
        return result;
    }
}
export default Menu;
