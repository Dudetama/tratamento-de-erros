
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

      