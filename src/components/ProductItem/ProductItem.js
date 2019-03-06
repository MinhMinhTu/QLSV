import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class ProductItem extends Component {
    onDelete= (id)=>{
       if(confirm('ban chac chan xoa?')){
           this.props.onDelete(id); 
       }
    }
    
    render() {
        const {products,index} = this.props;
        let statusName = products.status ? 'Còn Hàng' : 'Hết Hàng';
        let statusClass = products.status ? 'success' : 'danger';
        return (
            <tr>
            <td className="text-center">{index + 1}</td>
            <td className="text-center">{products.id}</td>
            <td className="text-center">{products.name}</td>
            <td className="text-center">{products.price}</td>
            <td className="text-center">
                <span className={`label label-${statusClass}`}>{statusName}</span>
            </td>
            <td className="text-center">
                <Link 
                    to={`/products/${products.id}/edit`}
                    className="btn btn-warning"     

                >sửa</Link>&nbsp;
                <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={()=> this.onDelete(products.id)}
                >Xóa</button>
            </td>
        </tr>
        )
    }
   
}
export default ProductItem;
