export class Email {
    destinatario = '';
    assunto = '';
    conteudo = '';
    id = '';
    dataEnvio = '';
    remetente = '';

    constructor({destinatario, assunto, conteudo}){
        this.destinatario = destinatario;
        this.assunto = assunto;
        this.conteudo = conteudo;
    }

}
