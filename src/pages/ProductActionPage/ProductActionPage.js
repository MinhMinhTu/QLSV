import React, { Component } from 'react';
//import callApi from './../../utils/apiCaller';
import callApi from 'callApi'
import {Link} from 'react-router-dom'
class ProductActionPage extends Component {

    constructor(props){
        super(props);
        this.state={
            id:null,
            txtname:'',
            txtprice:'',
            chkbStatus:''
        }
    }
    componentDidMount(){
        let {match} =this.props
        if(match){
            let  id = match.params.id
           callApi(`products/${id}`,'GET',null).then(res=>{
               let data = res.data
               this.setState({
                    id:data.id,
                    txtname: data.name,
                    txtprice:data.price,
                    chkbStatus:data.status
               })
           });
        }
        
    }

    onChange=(e)=>{
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        }) 
    }

    onSave=(e)=>{
        let {history} =this.props;
        let {id,txtname,txtprice,chkbStatus} =this.state;
        e.preventDefault();
        if(id !== null){
            callApi(`products/${id}`,'PUT',{
                name: txtname,
                price : txtprice,
                status:chkbStatus
            }).then(res=>{
                history.goBack();
            });
        }
        else{
            callApi("products",'POST',{
                name: txtname,
                price : txtprice,
                status:chkbStatus
            }).then(res=>{
                 history.goBack(); //quay về trang trước đó
              //history.push("/product-list") //-> về nơi cần về
            });
        }
       
    }
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <form onSubmit={this.onSave}>
                        <div className="form-group">
                            <label>Tên Sản Phẩm:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="txtname"
                                value={this.state.txtname}
                                onChange={this.onChange}
                             />
                        </div>
                        <div className="form-group">
                            <label>Giá:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="txtprice"
                                value={this.state.txtprice}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group" >
                            <label>Trạng Thái:</label>
                        </div>
                        <div className="checkbox">
                            <label>
                                <input 
                                type="checkbox" 
                                name="chkbStatus"
                                value={this.state.chkbStatus}
                                onChange={this.onChange}
                                checked={this.state.chkbStatus}
                                />
                                Còn Hàng
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">Lưu Lại</button>&nbsp;
                        <Link to="/products-list" className="btn btn-danger">
                            Trở Lại
                        </Link>
                    </form>

                </div>
            </div>
        );
    }

}
export default ProductActionPage;



