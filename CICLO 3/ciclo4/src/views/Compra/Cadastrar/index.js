import { Link } from "react-router-dom"
import { useState } from "react"
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap"
import axios from "axios";
import { api } from "../../../config";

export const CadastrarCompra = () => {

    const [compra, setCompra] = useState({        
        ClienteId: '',
        data: ''
    });

    const [status, setStatus] = useState({
        type: '',
        message: ''
    })

    const valorInput = e => setCompra({
        ...compra, [e.target.name]: e.target.value
    });

    const cadCompra = async e => {
        e.preventDefault();
        console.log(compra);

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.post(api + "/novacompra", compra, { headers })
            .then((response) => {
                // console.log(response.data.message);
                if (response.data.error) {
                    setStatus({
                        type: 'error',
                        message: response.data.message
                    })
                } else {
                    setStatus({
                        type: 'success',
                        message: response.data.message
                    })
                }
            })
            .catch(() => {
                console.log("Não foi possível conectar a API")
            })
    }

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Cadastrar Compra</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/visualizar-compra"
                            className="btn btn-outline-primary btn-sm">Compras</Link>
                    </div>
                </div>
                
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ''}
                {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ''}

                <Form className="p-2" onSubmit={cadCompra}>
                    <FormGroup className="p-2">
                        <Label for="ClienteId">ID do Cliente</Label>
                        <Input
                            id="ClienteId"
                            name="ClienteId"
                            placeholder="Inserir ID do Cliente"
                            type="text"
                            onChange={valorInput}
                            required
                        />
                    </FormGroup>                
                    
                    <FormGroup className="p-2">
                        <Label for="data">
                            Data da Compra
                        </Label>
                        <Input
                            id="data"
                            name="data"                            
                            type="date"
                            onChange={valorInput}
                            required

                        />
                    </FormGroup>

                    <Button type="submit" outline color="success" className="mx-2">
                        Cadastrar
                    </Button>

                    <Button type="reset" outline color="danger">
                        Limpar
                    </Button>

                </Form>
            </Container>
        </div>
    )
}