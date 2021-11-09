import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";

import { api } from "../../../config";

export const ComprasCliente = (props) => {
    // console.log (props.match.params.id);

    const [data, setData] = useState([]);

    const [id, setId] = useState(props.match.params.id)

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getcompras = async () => {
        await axios.get(api + "/cliente/" + id + "/compras")
            .then((response) => {
                console.log(response.data.compras);
                setData(response.data.compras);
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
        getcompras();
    }, [id]);


    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1> Compras do Cliente</h1>
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
                            <th> ID da Compra </th>
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
                                    <Link to={"/compra/" + item.id}
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