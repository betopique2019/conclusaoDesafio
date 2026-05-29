import assert from 'node:assert';
import { ServicoDePagamento } from '../src/servicoDePagamento.js';

describe('Testes do Serviço de Pagamento', () => {

    describe('Método pagar()', () => {

        it('1) Deve registrar um pagamento com categoria "cara" quando valor > 100', () => {
            const servico = new ServicoDePagamento();

            const resultado = servico.pagar('1111-2222', 'ITEngineer', 150);

            assert.equal(resultado.categoria, 'cara');
            assert.equal(resultado.valor, 150);
            assert.equal(resultado.empresa, 'ITEngineer');
        });

        it('2) Deve registrar um pagamento com categoria "padrão" quando valor <= 100', () => {
            const servico = new ServicoDePagamento();

            const resultado = servico.pagar('3333-4444', 'ITAutomation', 80);

            assert.equal(resultado.categoria, 'padrão');
            assert.equal(resultado.valor, 80);
            assert.equal(resultado.empresa, 'ITAutomation');
        });

    });

    describe('Método consultarUltimoPagamento()', () => {

        it('3) Deve retornar o último pagamento realizado', () => {
            const servico = new ServicoDePagamento();

            servico.pagar('0001', 'Empresa A', 50);
            servico.pagar('0002', 'Empresa B', 200);

            const ultimo = servico.consultarUltimoPagamento();

            assert.equal(ultimo.codigoBarras, '0002');
            assert.equal(ultimo.empresa, 'Empresa B');
            assert.equal(ultimo.valor, 200);
            assert.equal(ultimo.categoria, 'cara');
        });

        it('4) Deve retornar null quando não houver pagamentos', () => {
            const servico = new ServicoDePagamento();

            const resultado = servico.consultarUltimoPagamento();

            assert.equal(resultado, "Nenhum pagamento encontrado");
        });

    });

});
