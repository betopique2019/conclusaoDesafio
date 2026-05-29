export class ServicoDePagamento {
    constructor() {
        this.pagamentos = [];
    }

    pagar(codigoBarras, empresa, valor) {
        let categoria;
        if (valor > 100) {
            categoria = 'cara';
            } else {
        categoria = 'padrão';
}


        const pagamento = {
            codigoBarras,
            empresa,
            valor,
            categoria
        };

        this.pagamentos.push(pagamento);

        return pagamento;
    }

    consultarUltimoPagamento() {
        if (this.pagamentos.length === 0) {
            return "Nenhum pagamento encontrado";
        }

        return this.pagamentos[this.pagamentos.length - 1];
    }
}
