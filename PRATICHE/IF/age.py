from datetime import datetime

nome = input('Nome: ')

while True: 
    try:
        ano_nasc = input(int('Ano de nascimento: '))
        ano_hoje = datetime.now().year
        idade = int(ano_hoje - ano_nasc)

    if idade <= 0:
        print('Sua idade tem que ser maior que 0.')
    else:
        break

    except: 
        break

if idade >= 18: 
    print(f"{nome}, você tem {idade} anos e é maior de idade.")

else: 
    print(f"{nome}, você tem {idade} anos e é menor de idade.")