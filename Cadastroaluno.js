
class Aluno {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
}
class CadastroAluno {

    validar(aluno) {
        if (aluno.nome.length < 3) {
            throw new Error("Nome deve ter pelo menos 3 caracteres.");
        }
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(aluno.email)) {
            throw new Error("E-mail inválido.");
        }

        const regexSenha = /^(?=.*\d).{8,}$/;
        if (!regexSenha.test(aluno.senha)) {
            throw new Error("Senha inválida. Deve ter ao menos 8 caracteres e 1 número.");
        }
    }

    salvar(aluno) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Aluno cadastrado com sucesso!");
            }, 3000);
        });
    }
}
const aluno = new Aluno("João", "joao@gmail.com", "abc12345");
const cadastro = new CadastroAluno();

async function executar() {
    console.log("Iniciando processo..."); 
    try {
        cadastro.validar(aluno);
        
        console.log("Dados válidos! Salvando no banco...");
        const resposta = await cadastro.salvar(aluno);
        console.log(resposta); 
        
    } catch (erro) {
        console.log("Erro no cadastro: " + erro.message);
        
    } finally {
        console.log("Processo de cadastro finalizado.");
    }
}

executar();