import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";

import { api } from "../../../config";

export const ItensCompra = (props) => {
    // console.log (props.match.params.id);

    const [data, setData] = useState([]);

    const [id, setId] = useState(props.match.params.id)

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getItensCompra = async () => {
        await axios.get(api + "/compra/" + id + "/listaritemcompra")
            .then((response) => {
                console.log(response.data.compra);
                setData(response.data.compra);
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: sem conexão com a API!'
                })
                // console.log("Erro: sem conexão com a API")
            })
    }

    const apagarItem = async (idCompra, idProduto) => {

        const headers = {
            'Content-type': 'application/json'
        }

        await axios.get(api + "/compra/" + idCompra + "/excluiritem/" + idProduto,
            { headers })
            .then((response) => {
                console.log(response.data.error);
                getItensCompra();
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Não foi possível conetar-se a API.'
                });
            });
    }

    useEffect(() => {
        getItensCompra();
    }, [id]);


    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1> Itens da Compra</h1>
                    </div>
                    <div className="m-auto p-2">
                        <Link to="/visualizar-compra"
                            className="btn btn-outline-dark btn-sm ">Compras</Link>
                    </div>
                </div>
                <hr className="m-1" />
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ''}
                {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ''}

                <Table striped>
                    <thead>
                        <tr>
                            <th> ID do Produto </th>
                            <th> Quantidade </th>
                            <th> Valor </th>
                            <th className="text-center"> Ação </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.ProdutoId}>
                                <td>{item.ProdutoId}</td>
                                <td>{item.quantidade}</td>
                                <td>{item.valor}</td>
                                <td className="text-center">

                                    <Link to={"/itemcompra/"+ id + "/editaritem/" + item.ProdutoId}
                                        className="btn btn-outline-success btn-sm mx-2">
                                        Editar
                                    </Link>
                                    <span className="btn btn-outline-danger btn-sm"
                                        onClick={() => apagarItem(id, item.ProdutoId)}>
                                        Excluir
                                    </span>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </Table>
                <div className= "mx-auto">
                    <Link to={"/itemcompra/" + id + "/adicionaritem"}
                        className="btn btn-outline-secondary btn-sm mx-2">
                        Adicionar Item
                    </Link>
                </div>
            </Container>

        </div>

    );
};