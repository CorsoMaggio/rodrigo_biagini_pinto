from datetime import datetime

def verificar_maioridade():
    # Solicitar nome do usuário
    nome = input("Digite seu nome: ")
    
    # Solicitar ano de nascimento
    while True:
        try:
            ano_nascimento = int(input("Digite seu ano de nascimento (YYYY): "))
            ano_atual = datetime.now().year
            idade = ano_atual - ano_nascimento
            
            if idade < 0:
                print("Ano de nascimento não pode ser maior que o ano atual. Tente novamente.")
            else:
                break
        except ValueError:
            print("Por favor, digite um ano válido (número inteiro).")
    
    # Verificar se é maior de 18 anos
    if idade >= 18:
        print(f"{nome}, você tem {idade} anos e é maior de idade.")
    else:
        print(f"{nome}, você tem {idade} anos e é menor de idade.")

# Chamar a função
verificar_maioridade()