import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";

import { api } from "../../../config";

export const PedidosCliente = (props) => {
    // console.log (props.match.params.id);

    const [data, setData] = useState([]);

    const [id, setId] = useState(props.match.params.id)

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getpedidos = async () => {
        await axios.get(api + "/cliente/" + id + "/pedidos")
            .then((response) => {
                console.log(response.data.pedidos);
                setData(response.data.pedidos);
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
        getpedidos();
    }, [id]);


    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1> Pedidos do Cliente</h1>
                    </div>
                    <div className="m-auto p-2">
                        <Link to="/visualizar-cliente"
                            className="btn btn-outline-dark btn-sm">Clientes</Link>
                    </div>
                </div>
                <hr className="m-1" />
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ''}
                {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ''}

                <Table striped>
                    <thead>
                        <tr>
                            <th> Pedido </th>
                            <th> Data </th>
                            <th className="text-center"> Ação </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.data}</td>
                                <td className="text-center">
                                    <Link to={"/visualizar-pedido/" + item.PedidoId}
                                        className="btn btn-outline-primary btn-sm">
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