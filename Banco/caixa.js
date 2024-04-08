let nomeUsuario = '';
            let saldoConta = 500.00;

            function inicio() {
                let opcao = parseInt(prompt(`Bem-Vindo, ${nomeUsuario}! Escolha uma opção:\n1. Saldo\n2. Extrato\n3. Saque\n4. Depósito\n5. Transferência\n6. Sair`));

                console.log('Opção selecionada:', opcao);

                switch (opcao) {
                    case 1:
                        acessoSenha();
                        saldo();
                        break;
                    case 2:
                        acessoSenha();
                        extrato();
                        break;
                    case 3:
                        acessoSenha();
                        saque();
                        break;
                    case 4:
                        acessoSenha();
                        deposito();
                        break;
                    case 5:
                        acessoSenha();
                        transferencia();
                        break;
                    case 6:
                        sair();
                        break;
                    default:
                        erro('Opção inválida. Por favor, escolha uma opção válida.');
                }
            }

            function acessoSenha() {
                const senha = '3589';
                let senhaUsuario = prompt('Por favor insira sua senha:');
                console.log('Senha inserida:', senhaUsuario);

                if (senhaUsuario !== senha) {
                    erro('Senha incorreta. Tente novamente.');
                }
            }

            function saldo() {
                mostrarMensagem(`Seu saldo é: R$${saldoConta.toFixed(2)}`);
                operacaoConcluida();
            }

            function extrato() {
                mostrarMensagem('Extrato:\n- Transação1: R$ 100.00\n- Transação2: R$ 250.00\n- Transação3: R$ 50.00', 'success');
                operacaoConcluida();
            }

            function saque() {
                let valor = parseFloat(prompt('Informe o valor a ser sacado:'));
                console.log('Valor a ser sacado:', valor);

                if (isNaN(valor) || valor <= 0) {
                    erro('Operação não autorizada. Valor inválido.');
                    return;
                }

                if (valor > saldoConta) {
                    erro('Saldo insuficiente.');
                    return;
                }

                saldoConta -= valor;
                mostrarMensagem(`Saque efetuado com sucesso! Valor sacado: R$${valor.toFixed(2)}`, 'success');
                operacaoConcluida();
            }

            function deposito() {
                let valor = parseFloat(prompt('Informe o valor a ser depositado:'));
                console.log('Valor a ser depositado:', valor);

                if (isNaN(valor) || valor <= 0) {
                    erro('Operação não autorizada. Valor inválido.');
                    return;
                }

                saldoConta += valor;
                mostrarMensagem(`Depósito efetuado com sucesso! Valor depositado: R$${valor.toFixed(2)}`, 'success');
                operacaoConcluida();
            }

            function transferencia() {
                let valor = parseFloat(prompt('Informe o valor a ser transferido:'));
                console.log('Valor a ser transferido:', valor);

                if (isNaN(valor) || valor <= 0) {
                    erro('Operação não autorizada. Valor inválido.');
                    return;
                }

                if (valor > saldoConta) {
                    erro('Saldo insuficiente.');
                    return;
                }

                saldoConta -= valor;
                mostrarMensagem(`Transferência realizada com sucesso! Valor transferido: R$${valor.toFixed(2)}`, 'success');
                operacaoConcluida();
            }

            function erro(mensagem) {
                mostrarMensagem(mensagem, 'warning');
                inicio();
            }

            function sair() {
                let confirma = confirm('Você deseja sair?');
                console.log('Solicitado para sair:', confirma);

                if (confirma) {
                    mostrarMensagem(`Muito obrigado e até logo, ${nomeUsuario}!`, 'success');
                    setTimeout(() => {
                        window.close();
                    }, 2000);
                } else {
                    inicio();
                }
            }

            function operacaoConcluida() {
                setTimeout(() => {
                    let continuar = confirm('Deseja realizar outra operação?');
                    console.log('Continuar operação:', continuar);

                    if (continuar) {
                        inicio();
                    } else {
                        mostrarMensagem(`Muito obrigado e até logo, ${nomeUsuario}!`, 'success');
                        setTimeout(() => {
                            window.close();
                        }, 2000);
                    }
                }, 2000);
            }

            function mostrarMensagem(mensagem, tipo) {
                let container = document.getElementById('container');
                let msgElement = document.createElement('p');
                msgElement.textContent = mensagem;
                container.appendChild(msgElement);

                console.log('Mensagem exibida:', mensagem);

                if (tipo === 'success') {
                    let successIcon = document.createElement('img');
                    successIcon.src = 'sucesso.svg';
                    successIcon.alt = 'Sucesso';
                    successIcon.classList.add('icon', 'successIcon');
                    container.appendChild(successIcon);

                    console.log('Ícone de sucesso adicionado:', successIcon);
                } else if (tipo === 'warning') {
                    let warningIcon = document.createElement('img');
                    warningIcon.src = 'atencao.svg';
                    warningIcon.alt = 'Atenção';
                    warningIcon.classList.add('icon', 'warningIcon');
                    container.appendChild(warningIcon);

                    console.log('Ícone de aviso adicionado:', warningIcon);
                }
            }

            nomeUsuario = prompt('Olá! Qual o seu nome?');
            console.log('Nome do usuário:', nomeUsuario);
            mostrarMensagem(`Olá ${nomeUsuario}, é um prazer ter você por aqui!`, 'success');
            inicio();