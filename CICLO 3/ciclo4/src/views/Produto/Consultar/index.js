import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";

import { api } from "../../../config";

export const ConsultarProduto = (props) => {
    
    const [data, setData] = useState([]);

    const [id, setId] = useState(props.match.params.id)

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getProdutoCompra = async () => {
        await axios.get(api + "/produto/" + id + "/compras")
            .then((response) => {
                console.log(response.data.itens);
                setData(response.data.itens);
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: sem conexão com a API!'
                })
                // console.log("Erro: sem conexão com a API")
            })
    }

    useEffect(() => {
        getProdutoCompra();
    }, [id]);


    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1> Compras com o Produto</h1>
                    </div>
                    <div className="m-auto p-2">
                        <Link to="/visualizar-produto"
                            className="btn btn-outline-dark btn-sm ">Produtos</Link>                        
                    </div>
                </div>
                <hr className="m-1" />
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ''}
                {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ''}

                <Table striped>
                    <thead>
                        <tr>
                            <th> ID da Compra </th>
                            <th> Quantidade </th>
                            <th> Valor </th>
                            <th className="text-center"> Ação </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.CompraId}>
                                <td>{item.CompraId}</td>
                                <td>{item.quantidade}</td>
                                <td>{item.valor}</td>
                                <td className="text-center">
                                <Link to={"/compra/" + item.CompraId}
                                        className="btn btn-outline-primary btn-sm mx-2">
                                        Consultar
                                    </Link>                               
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </Table>
            </Container>
            
        </div>
        
    );
};