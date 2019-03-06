import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        return (
            <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h3 className="panel-title">Danh sách sản phẩm</h3>
                    </div>
                    <div className="panel-body">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr >
                                    <th className="text-center">STT</th>
                                    <th className="text-center">Mã</th>
                                    <th className="text-center">Tên</th>
                                    <th className="text-center">Giá</th>
                                    <th className="text-center">Trạng Thái</th>
                                    <th className="text-center">Hành Động</th>
                                </tr>
                            </thead>
                            <tbody>
                             {this.props.children}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default ProductList;

















