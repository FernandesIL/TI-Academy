import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";

import { api } from "../../../config";

export const VisualizarCompra = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getCompras = async () => {
        await axios.get(api + "/listarcompras")
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

    const apagarCompras = async (idCompra) => {

        const headers = {
            'Content-type': 'application/json'
        }

        await axios.get(api + "/excluircompra/" + idCompra,
            { headers })
            .then((response) => {
                console.log(response.data.error);
                getCompras();
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Não foi possível conetar-se a API.'
                });
            });
    }

    useEffect(() => {
        getCompras();
    }, []);


    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1> Visualizar Informações das Compras</h1>
                    </div>
                    <div className="m-auto p-2">
                        <Link to="/cadastrarcompra"
                            className="btn btn-outline-dark btn-sm">Cadastrar</Link>
                    </div>
                    {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                </div>
                <Table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Cliente</th>
                            <th>Data</th>
                            <th className="text-center">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <th>{item.id}</th>
                                <td>{item.ClienteId}</td>
                                <td>{item.data}</td>
                                <td className="text-center">
                                <Link to={"/compra/" + item.id}
                                        className="btn btn-outline-primary btn-sm mx-2">
                                        Consultar
                                    </Link>
                                    <Link to={"/editar-compra/" + item.id}
                                        className="btn btn-outline-success btn-sm mx-2">
                                        Editar
                                    </Link>                                    
                                    <span className="btn btn-outline-danger btn-sm"
                                        onClick={() => apagarCompras(item.id)}>
                                        Excluir
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};