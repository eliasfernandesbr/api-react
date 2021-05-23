import React, { useState, FormEvent } from "react";
import api from "../../services/api";
import logoImg from "../../assets/github-logo.svg";
import arrowImg from "../../assets/arrow.svg";
import { Title, Form, Repositories, ArrowIcon } from "./styles";

//TIPAGEM PARA O TYPESCRIPT \/
interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    };
}

const Dashboard: React.FunctionComponent = () => {
    const [newRepo, setNewRepo] = useState("");
    const [repositories, setRepositories] = useState<Repository[]>([]);

    async function handleAddRepository(
        event: FormEvent<HTMLFormElement>
    ): Promise<void> {
        event.preventDefault();

        const response = await api.get(`repos/${newRepo}`);
        const repository = response.data;

        setRepositories([...repositories, repository]);
        setNewRepo('');
        // Adição de um novo repositório
        // Consumir API do github e depois salvar o novo repositória no estado de rep;
    }
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form onSubmit={handleAddRepository}>
                <input
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)}
                    placeholder="Digite o nome do repositório"
                />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                {repositories.map((repository) => (
                    <a key={repository.full_name} href="teste">
                        <img
                            className="imgAvatar"
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                        <ArrowIcon src={arrowImg} />
                    </a>
                ))}
            </Repositories>
        </>
    );
};

export default Dashboard;
