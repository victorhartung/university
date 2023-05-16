class Conta {
  constructor(nome, cpf, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.saldo = saldo;
  }

  getNome() {
    return this.nome;
  }

  setNome(nome) {
    this.nome = nome;
  }

  getCpf() {
    return this.cpf;
  }

  setCpf(cpf) {
    this.cpf = cpf;
  }

  getSaldo() {
    return this.saldo;
  }

  setSaldo(saldo) {
    this.saldo = saldo;
  }

  deposita(valor) {
    this.saldo += valor;
    return this.saldo;
  }

  saca(valor) {
    if (valor > this.saldo) {
      console.log('Saldo insuficiente');
      return this.saldo;
    }
    this.saldo -= valor;
    return this.saldo;
  }

  atualiza(taxa) {
    this.saldo += this.saldo * taxa;
    return this.saldo;
  }
}

class Poupanca extends Conta {
  constructor(nome, cpf, saldo, numeroPoupanca) {
    super(nome, cpf, saldo);
    this.numeroPoupanca = numeroPoupanca;
  }

  atualiza(taxa) {
    this.saldo += this.saldo * taxa;
    return this.saldo;
  }
}


const conta = new Conta('Victor', '1581432183', 1000.0);

console.log('Nome: ' + conta.getNome());
console.log('Saldo: ' + conta.getSaldo());

const novoSaldoDeposito = conta.deposita(1000.0);
console.log('Novo saldo após depósito: ' + novoSaldoDeposito);


const novoSaldoSaque = conta.saca(500.0);
console.log('Novo saldo após saque: ' + novoSaldoSaque);


const novoSaldoAtualizado = conta.atualiza(0.1);
console.log('Novo saldo após atualização: ' + novoSaldoAtualizado);


const poupanca = new Poupanca('Hugo', '1581432183', 2500.0, '453');

console.log('Nome: ' + poupanca.getNome());
console.log('Saldo: ' + poupanca.getSaldo());


const novoSaldoPoupanca = poupanca.atualiza(0.2);
console.log('Novo saldo da poupança após atualização: ' + novoSaldoPoupanca);
