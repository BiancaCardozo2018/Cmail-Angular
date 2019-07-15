export class UserInput {

  name = '';
  username = '';
  phone = '';
  password = '';
  avatar = '';

  constructor({nome, username, avatar, senha, telefone}){
    this.name = nome;
    this.username = username;
    this.phone = telefone;
    this.password = senha;
    this.avatar = avatar;
  }

}
