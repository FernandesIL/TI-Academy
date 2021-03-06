import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";

import { api } from "../../../config";

export const VisualizarCliente = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getCliente = async () => {
        await axios.get(api + "/listaclientes")
            .then((response) => {
                console.log(response.data.clientes);
                setData(response.data.clientes);
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: sem conexão com a API!'
                })
                // console.log("Erro: sem conexão com a API")
            })
    }
    const apagarCliente = async (idCliente) => {

        const headers = {
            'Content-type': 'application/json'
        }

        await axios.get(api + "/excluircliente/" + idCliente,
            { headers })
            .then((response) => {
                console.log(response.data.error);
                getCliente();
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Não foi possível conetar-se a API.'
                });
            });
    }

    useEffect(() => {
        getCliente();
    }, []);


    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1> Visualizar Informações do Cliente</h1>
                    </div>
                    <div className="m-auto p-2">
                        <Link to="/cadastrar-cliente"
                            className="btn btn-outline-dark btn-sm">Cadastrar</Link>
                    </div>
                    {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                </div>
                <Table striped>
                    <thead>
                        <tr>
                            <th> ID </th>
                            <th> Nome </th>
                            <th> Endereço </th>
                            <th> Nascimento </th>
                            <th className="text-center"> Ação </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.endereco}</td>
                                <td>{item.nascimento}</td>
                                <td className="text-center">
                                    <Link to={"/editar-cliente/" + item.id}
                                        className="btn btn-outline-success btn-sm mx-2">
                                        Editar
                                    </Link>
                                    <Link to={"/cliente/" + item.id + "/pedidos"}
                                        className="btn btn-outline-primary btn-sm mx-2">
                                        Pedidos
                                    </Link>
                                    <Link to={"/cliente/" + item.id + "/compras"}
                                        className="btn btn-outline-primary btn-sm mx-2">
                                         Compras
                                    </Link>
                                    <span className="btn btn-outline-danger btn-sm"
                                        onClick={() => apagarCliente(item.id)}>
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