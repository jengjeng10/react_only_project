import { Table } from "react-bootstrap";

import './../css/Display.css';

function App({ product }) {

    return (
        <div className="mytable">
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                    
                                </tr>
                                <tr>
                                    <td className="myleft">아이디</td>
                                    <td className="mymiddle">{product.id}</td>
                                </tr>
                                <tr>
                                    <td>이름</td>
                                    <td>{product.name}</td>
                                </tr>
                                <tr>
                                    <td>단가</td>
                                    <td>{Number(product.price).toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>카테고리</td>
                                    <td>{product.category === 'bread' ? '빵' : '음료수'}</td>
                                </tr>
                                <tr>
                                    <td>재고</td>
                                    <td>{Number(product.stock).toLocaleString()}</td>
                                </tr>
                            </tbody>
                        </Table>
                        <td>
                            <img className="myimg" src={`/images/${product.image}`} alt={product.name} />
                        </td>
                        <td>
                            <p className="mydescription">
                            {product.description}
                            </p>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default App;