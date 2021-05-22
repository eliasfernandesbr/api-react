import React from "react";
import logoImg from "../../assets/github-logo.svg";
import { Title, Form } from "./styles";

const Dashboard: React.FunctionComponent = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form>
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>
        </>
    );
};

export default Dashboard;
