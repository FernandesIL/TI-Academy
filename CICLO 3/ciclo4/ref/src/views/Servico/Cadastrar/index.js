import { Link } from "react-router-dom"
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap"

export const CadastrarServico = () => {

    const cadServico = async =>{
        console.log("Cadastrar")
    }


    return (
        <Container>
            <div className="d-flex">
                <div className="m-auto p-2">
                    <h1>Cadastrar Serviço</h1>
                </div>
                <div className="p-2">
                    <Link to="/listar-servicos"
                        className="btn btn-outline-sucess btn-sm">Serviços</Link>
                </div>
            </div>
            <hr className="m-1" />
            <Form className="p-2" onSubmit={cadServico}>
                <FormGroup className="p-2">
                    <Label for="nome">Nome</Label>
                    <Input
                        id="nome"
                        name="nome"
                        placeholder="Nome do Serviço"
                        type="text"
                    />
                </FormGroup>

                <FormGroup className="p-2">
                    <Label for="descricao">
                        Descrição
                    </Label>
                    <Input
                        id="descricao"
                        name="descricao"
                        placeholder="O que tem neste serviço?"
                        type="text"
                    />
                </FormGroup>

                <Button type="submit" outline color="success">
                    Cadastrar
                </Button>

            </Form>
        </Container>
    )
}