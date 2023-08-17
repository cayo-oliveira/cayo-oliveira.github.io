---
sidebar_position: 10
---

# Python and Statistical Summary


:::info Book
MACIEL, Paulo. Operational Analysis. In: Performance, Reliability and Availability of Computational Systems Volume I. 1. ed. New York: Springer, 2018. p. 169-190.
:::

Quais as principais estatísticas eu tenho que fazer para fazer um summary  ? Em relação a simetria, variabilidade, achatamento ou não, tendencia central
Para fazer um resumo estatístico, é comum incluir as seguintes medidas descritivas:

Tendência central: inclui medidas que indicam onde está localizada a maior parte dos dados, como a média, mediana e moda.

Variabilidade: inclui medidas que indicam o quanto os dados estão espalhados, como o desvio padrão, variância, amplitude, coeficiente de variação, intervalo interquartil, entre outros.

Simetria: refere-se à forma da distribuição dos dados em torno da tendência central. A simetria pode ser avaliada usando medidas como a assimetria de Pearson e a assimetria de Fisher.

Achatamento: refere-se à forma da distribuição dos dados em relação à curtose. A curtose pode ser avaliada usando medidas como o coeficiente de curtose e o excesso de curtose.

Algumas outras estatísticas que podem ser relevantes dependendo dos dados incluem:

Frequência: inclui medidas que indicam a frequência com que cada valor aparece nos dados, como tabelas de frequência e gráficos de barras.

Correlação: refere-se à relação entre duas variáveis. A correlação pode ser avaliada usando medidas como o coeficiente de correlação de Pearson ou o coeficiente de correlação de Spearman.

Regressão: inclui modelos que descrevem a relação entre duas ou mais variáveis, como regressão linear simples ou múltipla.

Essas são apenas algumas das principais estatísticas que podem ser usadas para fazer um resumo estatístico. A seleção específica de estatísticas dependerá dos dados e das perguntas que você está tentando responder.

Para realizar análise estatística em Python, é necessário primeiro carregar os dados em uma estrutura de dados apropriada. Neste exemplo, suponha que você tenha os tempos de demanda (D_i) armazenados em uma lista chamada "tempos_de_demanda".

Para calcular as medidas descritivas mencionadas anteriormente, você pode usar as seguintes bibliotecas Python:

Para tendência central:
python
Copy code
import numpy as np

# Média
media = np.mean(tempos_de_demanda)

# Mediana
mediana = np.median(tempos_de_demanda)

# Moda
from statistics import mode
moda = mode(tempos_de_demanda)
Para variabilidade:
python
Copy code
# Desvio padrão
desvio_padrao = np.std(tempos_de_demanda)

# Variância
variancia = np.var(tempos_de_demanda)

# Amplitude
amplitude = max(tempos_de_demanda) - min(tempos_de_demanda)

# Coeficiente de variação
coeficiente_variacao = desvio_padrao / media

# Intervalo interquartil (IQR)
from scipy.stats import iqr
iqr = iqr(tempos_de_demanda)
Para simetria:
python
Copy code
# Assimetria de Pearson
from scipy.stats import skew
assimetria_pearson = skew(tempos_de_demanda)

# Assimetria de Fisher
from scipy.stats import kurtosis
assimetria_fisher = kurtosis(tempos_de_demanda, fisher=True)
Para achatamento:
python
Copy code
# Coeficiente de curtose
curtose = kurtosis(tempos_de_demanda)

# Excesso de curtose
excesso_curtose = kurtosis(tempos_de_demanda, fisher=True)
Essas são apenas algumas das funções disponíveis nas bibliotecas Python mencionadas acima. Para realizar análises mais avançadas, você pode precisar usar outras funções ou pacotes. Para plotar gráficos, você pode usar o pacote "matplotlib". Por exemplo, para plotar um histograma dos tempos de demanda, você pode usar:

python
Copy code
import matplotlib.pyplot as plt

plt.hist(tempos_de_demanda)
plt.xlabel('Tempo de demanda')
plt.ylabel('Frequência')
plt.show()
Espero que isso ajude você a começar a realizar análises estatísticas em Python. Lembre-se de que as análises específicas e as bibliotecas usadas dependerão dos seus dados e do que você está tentando descobrir.




Cayo Felipe
Entendi os códigos, agora me dê um código que me tenha o tempo D_i, tempo que um recurso demanda de um dos itens do sistema S3_Entrada > EMR > S3_Saída. Me fale como capturar esse tempo através do Python, conectando na AWS e gerando uma amostra de um processamento nesse sistema.
Para capturar o tempo que um recurso demanda de um item no sistema S3_Entrada > EMR > S3_Saída, você precisará medir o tempo que leva para o recurso processar cada item. Para isso, você pode usar a biblioteca "time" do Python para medir o tempo antes e depois do processamento do item. Aqui está um exemplo de como capturar o tempo de processamento para um único item:

python
Copy code
import boto3
import time

# Conecte-se ao serviço S3 na AWS
s3 = boto3.resource('s3')

# Selecione um arquivo para processar
bucket = 'nome_do_bucket'
key = 'caminho/para/o/arquivo'
objeto = s3.Object(bucket, key)

# Leia o conteúdo do arquivo
conteudo = objeto.get()['Body'].read()

# Inicie a medição do tempo
inicio = time.time()

# Faça o processamento do item
# Substitua esta linha pelo código real de processamento
processamento(item)

# Encerre a medição do tempo
fim = time.time()

# Calcule o tempo de processamento
tempo_de_processamento = fim - inicio

# Imprima o tempo de processamento
print("O tempo de processamento do item foi de", tempo_de_processamento, "segundos.")
Para gerar uma amostra de processamento no sistema S3_Entrada > EMR > S3_Saída, você precisará criar um script que execute o processamento em vários itens. Você pode gerar uma amostra aleatória dos itens disponíveis no seu bucket do S3, ou selecionar itens específicos para processamento. Aqui está um exemplo de como criar uma amostra aleatória de 100 itens:

python
Copy code
import random

# Crie uma lista de objetos no bucket
lista_de_objetos = list(s3.Bucket(bucket).objects.all())

# Selecione uma amostra aleatória de objetos
amostra_de_objetos = random.sample(lista_de_objetos, k=100)

# Para cada objeto na amostra, execute o processamento e capture o tempo
tempos_de_processamento = []
for objeto in amostra_de_objetos:
    conteudo = objeto.get()['Body'].read()
    inicio = time.time()
    processamento(item)
    fim = time.time()
    tempo_de_processamento = fim - inicio
    tempos_de_processamento.append(tempo_de_processamento)

# Calcule as medidas descritivas para a amostra de tempos de processamento
media = np.mean(tempos_de_processamento)
desvio_padrao = np.std(tempos_de_processamento)
variancia = np.var(tempos_de_processamento)
amplitude = max(tempos_de_processamento) - min(tempos_de_processamento)
coeficiente_variacao = desvio_padrao / media
iqr = iqr(tempos_de_processamento)
assimetria_pearson = skew(tempos_de_processamento)
assimetria_fisher = kurtosis(tempos_de_processamento, fisher=True)
curtose = kurtosis(tempos_de_processamento)
excesso_curtose = kurtosis(tempos_de_processamento, fisher=True)
Este código captura o tempo de processamento para cada objeto na amostra e armazena em uma lista chamada "tempos_de_processamento". Em seguida, ele calcula as medidas descritivas para os tempos de processamento da amostra.

Lembre-se de




Cayo Felipe
Continue
Lembre-se de que para se conectar ao serviço S3 na AWS, você precisará fornecer suas credenciais da AWS. Você pode fornecer essas credenciais diretamente no código, ou configurá-las em um arquivo de configuração separado e carregá-las no seu script. Aqui está um exemplo de como carregar as credenciais da AWS de um arquivo de configuração:

python
Copy code
import configparser

# Carregue as credenciais da AWS a partir do arquivo de configuração
config = configparser.ConfigParser()
config.read('aws.cfg')
aws_access_key_id = config.get('aws', 'aws_access_key_id')
aws_secret_access_key = config.get('aws', 'aws_secret_access_key')

# Conecte-se ao serviço S3 na AWS usando as credenciais carregadas
s3 = boto3.resource('s3',
                    aws_access_key_id=aws_access_key_id,
                    aws_secret_access_key=aws_secret_access_key)
Certifique-se de substituir "aws.cfg" pelo nome do arquivo de configuração que você está usando e "aws" pelo nome da seção do arquivo que contém as suas credenciais da AWS.

Espero que isso ajude você a capturar o tempo de processamento para um único item e gerar uma amostra de processamento no sistema S3_Entrada > EMR > S3_Saída usando Python e AWS. Lembre-se de que esses exemplos são apenas para fins ilustrativos e podem precisar ser adaptados para o seu caso específico.




Cayo Felipe
Me de um exemplo da parte de 

# Faça o processamento do item
# Substitua esta linha pelo código real de processamento
processamento(item)
Claro! Aqui está um exemplo simples de processamento que você pode substituir na linha "processamento(item)" no código anterior:

python
Copy code
import pandas as pd

# Faça o processamento do item
# Substitua esta linha pelo código real de processamento
def processamento(item):
    # Converta o conteúdo do item em um dataframe usando pandas
    df = pd.read_csv(item)
    
    # Realize alguma análise no dataframe
    media = df.mean()
    desvio_padrao = df.std()
    
    # Salve os resultados da análise em um arquivo
    resultados = {'media': media, 'desvio_padrao': desvio_padrao}
    nome_do_arquivo = 'resultados.csv'
    with open(nome_do_arquivo, 'w') as arquivo:
        for key, value in resultados.items():
            arquivo.write('%s,%s\n' % (key, value))
Neste exemplo, a função de processamento lê um arquivo CSV (que foi armazenado como o conteúdo do objeto no S3) em um dataframe usando a biblioteca pandas. Em seguida, ela realiza uma análise simples no dataframe, calculando a média e o desvio padrão. Por fim, ela salva os resultados da análise em um arquivo CSV.

Você precisará adaptar este código de processamento para o seu caso específico, dependendo dos dados que você está processando e da análise que você deseja realizar.



Neste chat, discutimos várias coisas relacionadas à análise de dados e ao uso do Python para trabalhar com dados:

Vimos que é possível usar o Python para realizar muitas das mesmas análises e gráficos que o software Minitab oferece, usando bibliotecas como pandas, scipy, matplotlib, statsmodels e seaborn.

Discutimos as principais medidas descritivas usadas em um resumo estatístico, incluindo tendência central, variabilidade, simetria e achatamento.

Exploramos vários exemplos de códigos Python para calcular as medidas descritivas, conectar-se ao serviço S3 na AWS e capturar o tempo de processamento para um único item e para uma amostra de processamento no sistema S3_Entrada > EMR > S3_Saída.

Por fim, demos um exemplo simples de código para o processamento de dados.

Resumindo, neste chat, você aprendeu a usar o Python para trabalhar com dados, realizar análises estatísticas e capturar tempos de processamento em um ambiente de computação em nuvem. Espero que essas informações sejam úteis para você em seus projetos de análise de dados futuros.