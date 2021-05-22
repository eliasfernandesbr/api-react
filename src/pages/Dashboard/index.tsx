import React from "react";
import { FiChevronRight } from "react-icons/fi";
import logoImg from "../../assets/github-logo.svg";
import arrowImg from "../../assets/arrow.svg";
import { Title, Form, Repositories, ArrowIcon } from "./styles";

const Dashboard: React.FunctionComponent = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form>
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img
                        className="imgAvatar"
                        src="https://avatars.githubusercontent.com/u/41518685?v=4"
                        alt="Elias Fernandes"
                    />
                    <div>
                        <strong>eliasfernandesbr/api-react</strong>
                        <p>react api para pesquisar repositórios no github</p>
                    </div>
                    <ArrowIcon src={arrowImg} />
                </a>
                <a href="teste">
                    <img
                        className="imgAvatar"
                        src="https://avatars.githubusercontent.com/u/41518685?v=4"
                        alt="Elias Fernandes"
                    />
                    <div>
                        <strong>eliasfernandesbr/api-react</strong>
                        <p>react api para pesquisar repositórios no github</p>
                    </div>
                    <ArrowIcon src={arrowImg} />
                </a>
                <a href="teste">
                    <img
                        className="imgAvatar"
                        src="https://avatars.githubusercontent.com/u/41518685?v=4"
                        alt="Elias Fernandes"
                    />
                    <div>
                        <strong>eliasfernandesbr/api-react</strong>
                        <p>react api para pesquisar repositórios no github</p>
                    </div>
                    <ArrowIcon src={arrowImg} />
                </a>
                <a href="teste">
                    <img
                        className="imgAvatar"
                        src="https://avatars.githubusercontent.com/u/41518685?v=4"
                        alt="Elias Fernandes"
                    />
                    <div>
                        <strong>eliasfernandesbr/api-react</strong>
                        <p>react api para pesquisar repositórios no github</p>
                    </div>
                    <ArrowIcon src={arrowImg} />
                </a>
                <a href="teste">
                    <img
                        className="imgAvatar"
                        src="https://avatars.githubusercontent.com/u/41518685?v=4"
                        alt="Elias Fernandes"
                    />
                    <div>
                        <strong>eliasfernandesbr/api-react</strong>
                        <p>react api para pesquisar repositórios no github</p>
                    </div>
                    <ArrowIcon src={arrowImg} />
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;
