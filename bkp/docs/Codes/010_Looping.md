---
sidebar_position: 10
---
# Looping

## Pandas

## Loop in CSV

### Looping sobre arquivos CSV
Podemos fazer looping sobre um arquivo CSV utilizando o método csv.reader() como mostrado no exemplo acima. Cada iteração do loop irá retornar uma lista correspondente a uma linha do arquivo CSV. Por exemplo, o código a seguir imprime cada linha do arquivo example.csv:

```python title="Loop em Arquivos CSV"
import csv

with open('example.csv', 'r') as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)

```

Além disso, também é possível utilizar o método next() para percorrer as linhas de um arquivo CSV e acessar os valores de cada coluna. Por exemplo, o código a seguir imprime o valor da primeira coluna de cada linha do arquivo example.csv:

```python title="Loop em Arquivos CSV"
import csv

with open('example.csv', 'r') as file:
    reader = csv.reader(file)
    for row in reader:
        print(row[0])
```

Note que o método next() é o mesmo que a primeira iteração do loop "for", então se você usar esse método para percorrer o csv, você precisará chamar ele novamente para começar a percorrer a partir da segunda linha.

## Loop in XLSX

Para ler e escrever arquivos em formato xlsx em Python, você pode usar a biblioteca openpyxl. Primeiro, você precisa instalá-la usando o gerenciador de pacotes pip:

```python title="Loop em Arquivos CSV"
pip install openpyxl
#Para ler um arquivo xlsx existente, você pode usar o seguinte código:

```python title="Loop em Arquivos CSV"
import openpyxl

# Carregando o arquivo xlsx
wb = openpyxl.load_workbook('example.xlsx')

# Selecionando a primeira planilha do arquivo
sheet = wb.active

# Imprimindo o conteúdo de cada célula
for row in sheet.iter_rows():
    for cell in row:
        print(cell.value)
```

Para escrever em um arquivo xlsx, você pode usar o seguinte código:


```python title="Loop em Arquivos CSV"
import openpyxl

# Criando um novo arquivo xlsx
wb = openpyxl.Workbook()
sheet = wb.active

# Escrevendo dados em uma célula específica
sheet['A1'] = 'Hello'
sheet['B1'] = 'World'

# Salvando o arquivo
wb.save('example.xlsx')
```

Para fazer looping em um arquivo xlsx, você pode usar a função iter_rows(), como mostrado no exemplo acima. Isso irá iterar sobre cada linha na planilha, e você pode então iterar sobre as células de cada linha para acessar seus valores.

