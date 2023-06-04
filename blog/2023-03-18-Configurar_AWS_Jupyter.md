---
slug: Como configurar o Jupyter para Processos Amazon AWS
title: Como configurar o Jupyter para Processos Amazon AWS
authors: cayofel
tags: [mestrado,Pesquisa,acadêmica,Fontes_confiáveis,Artigos_científicos,Publicações]
---

# Como configurar o Jupyter para Processos Amazon AWS

### Passo 1: Instale as bibliotecas necessárias.

```python title="Passo 1"
pip install boto3
```

Lembre-se de substituir "seu_bucket_s3" pelo nome real do seu bucket S3.

### Passo 2: Configure suas credenciais da AWS. Você pode seguir este guia para configurar suas credenciais corretamente.

https://boto3.amazonaws.com/v1/documentation/api/latest/guide/quickstart.html#configuration

### Passo 3: Crie um arquivo CSV com um exemplo de dados, como segue:

```python title="Passo 3"
dados_csv = """nome,idade,sexo,profissao,salario
João,25,M,Engenheiro,6000
Maria,32,F,Advogada,7500
Ana,28,F,Médica,8500
Pedro,30,M,Programador,7000
"""

with open("dados.csv", "w") as f:
    f.write(dados_csv)

```

### Passo 4: Utilize o Boto3 para carregar o arquivo CSV no bucket S3.

```python title="Passo 4"
import boto3

s3 = boto3.resource("s3")
nome_do_bucket = "seu_bucket_s3"
nome_do_objeto = "dados.csv"

# Substitua 'seu_bucket_s3' pelo nome do seu bucket S3.
s3.meta.client.upload_file("dados.csv", nome_do_bucket, nome_do_objeto)
```

### Passo 5: Configure e inicie um cluster EMR usando o Boto3.

```python title="Passo 5"
emr = boto3.client("emr")

response = emr.run_job_flow(
    Name="MeuClusterEMR",
    ReleaseLabel="emr-6.4.0",
    Instances={
        "MasterInstanceType": "m5.xlarge",
        "SlaveInstanceType": "m5.xlarge",
        "InstanceCount": 3,
        "KeepJobFlowAliveWhenNoSteps": True,
        "TerminationProtected": False,
    },
    Applications=[
        {"Name": "Spark"},
    ],
    JobFlowRole="EMR_EC2_DefaultRole",
    ServiceRole="EMR_DefaultRole",
    VisibleToAllUsers=True,
)

cluster_id = response["JobFlowId"]
print(f"Cluster EMR criado com ID: {cluster_id}")
```

### Passo 6: Crie um script PySpark para processar os dados no EMR e salve-o como "processa_dados.py".

```python title="Passo 6"
from pyspark.sql import SparkSession

spark = SparkSession.builder.appName("ProcessaDados").getOrCreate()

# Carrega os dados do arquivo CSV no bucket S3
df = spark.read.csv("s3://seu_bucket_s3/dados.csv", header=True, inferSchema=True)

# Realiza algumas transformações nos dados (por exemplo, calcular a média de salário por sexo)
media_salario_por_sexo = df.groupBy("sexo").mean("salario")

# Salva os resultados processados de volta no bucket S3
media_salario_por_sexo.write.csv("s3://seu_bucket_s3/resultado", mode="overwrite")

spark.stop()
```

### Passo 7: Carregue o script "processa_dados.py" no bucket S3.

```python title="Passo 7"
s3.meta.client.upload_file("processa_dados.py", nome_do_bucket, "processa_dados.py")
```

### Passo 8: Adicione um passo ao cluster EMR para executar o script PySpark.

```python title="Passo 8"
emr.add_job_flow_steps(
    JobFlowId=cluster_id,
    Steps=[
        {
            "Name": "ProcessaDados",
            "ActionOnFailure": "TERMINATE_CLUSTER",
            "HadoopJarStep": {
                "Jar": "command-runner.jar",
                "Args": [
                    "spark-submit",
                    "--deploy-mode",
                    "cluster",
                    "s3://seu_bucket_s3/processa_dados.py",
                ],
            },
        }
    ],
)
```

### Passo 9: Monitore o progresso do cluster EMR.

```python title="Passo 9"
import time

while True:
    cluster_status = emr.describe_cluster(ClusterId=cluster_id)["Cluster"]["Status"]
    print("Cluster status:", cluster_status["State"])

    if cluster_status["State"] in ["TERMINATED", "TERMINATED_WITH_ERRORS"]:
        break

    time.sleep(60)  # Aguarde 60 segundos antes de verificar novamente
```

## Calcular Análise Operacional

Depois de executar todos esses passos, você terá carregado seus dados no Amazon S3, configurado e iniciado um cluster EMR, executado um script PySpark para processar seus dados e armazenado os resultados de volta no S3. Você pode verificar os resultados processados no bucket S3.

Ao utilizar o Jupyter Notebook, certifique-se de executar cada bloco de código individualmente em células separadas. Isso facilitará o rastreamento do progresso e a correção de quaisquer problemas que possam ocorrer durante a execução.

Lembre-se de substituir "seu_bucket_s3" pelo nome real do seu bucket S3.

A partir dos conceitos de análise operacional, podemos monitorar a utilização (Ui) de cada recurso do modelo, considerando que Ui = Bi/T, onde Bi é o tempo em serviço de cada recurso e T é o período observado.

Para isso, você pode seguir as etapas abaixo:

Passo 1: Identifique os recursos que deseja monitorar, como Amazon S3, Amazon EMR e Amazon Athena, e defina o período de observação (T).

Passo 2: Utilize métricas operacionais disponíveis no serviço de monitoramento da AWS, o Amazon CloudWatch. Esse serviço permite medir e monitorar métricas de desempenho e utilização dos recursos da AWS.

Passo 3: Configure o Amazon CloudWatch para coletar as métricas de cada recurso que você deseja monitorar. Alguns exemplos de métricas relevantes são:

Para Amazon S3: NumberOfObjects e BucketSizeBytes.
Para Amazon EMR: IsIdle, AppsRunning, AppsPending, ContainerAllocated, ContainerPending e YARNMemoryAvailablePercentage.
Para Amazon Athena: QueryExecutionTime e EngineExecutionTime.
Passo 4: Calcule o tempo em serviço (Bi) de cada recurso com base nas métricas coletadas pelo CloudWatch. Por exemplo, para calcular o tempo em serviço do EMR, você pode considerar o tempo em que o cluster não está ocioso (ou seja, quando IsIdle é 0) como tempo em serviço.

Passo 5: Calcule a utilização (Ui) de cada recurso dividindo o tempo em serviço (Bi) pelo período de observação (T).

Passo 6: Monitore as métricas de utilização (Ui) e ajuste a configuração dos recursos conforme necessário para otimizar o desempenho e os custos do sistema.

Com essas etapas, você pode monitorar a utilização dos recursos do seu modelo usando conceitos de análise operacional e métricas operacionais. Utilize o Amazon CloudWatch para coletar e analisar essas métricas e tomar decisões informadas para melhorar o desempenho e a eficiência do seu sistema.

## Como Configurar CloudWatch

### Passo 1: Instale a biblioteca Boto3, caso ainda não tenha feito:

```python title="Passo 1"
!pip install boto3
```

### Passo 2: Importe as bibliotecas necessárias e configure o cliente do CloudWatch:

```python title="Passo 2"
import boto3
import datetime
import time

cloudwatch = boto3.client("cloudwatch")
```

### Passo 3: Defina uma função para obter as métricas do CloudWatch:

```python title="Passo 3"
def get_metric_value(namespace, metric_name, dimensions, start_time, end_time):
    response = cloudwatch.get_metric_data(
        MetricDataQueries=[
            {
                "Id": "metric1",
                "MetricStat": {
                    "Metric": {
                        "Namespace": namespace,
                        "MetricName": metric_name,
                        "Dimensions": dimensions,
                    },
                    "Period": 300,
                    "Stat": "SampleCount",
                },
                "ReturnData": True,
            },
        ],
        StartTime=start_time,
        EndTime=end_time,
    )
    if response["MetricDataResults"]:
        return response["MetricDataResults"][0]["Values"]
    else:
        return None
```

### Passo 4: Configure as métricas que você deseja monitorar:

```python title="Passo 4"
monitoring_metrics = {
    "Amazon S3": {
        "namespace": "AWS/S3",
        "metrics": ["NumberOfObjects", "BucketSizeBytes"],
    },
    "Amazon EMR": {
        "namespace": "AWS/EMR",
        "metrics": [
            "IsIdle",
            "AppsRunning",
            "AppsPending",
            "ContainerAllocated",
            "ContainerPending",
            "YARNMemoryAvailablePercentage",
        ],
    },
    "Amazon Athena": {
        "namespace": "AWS/Athena",
        "metrics": ["QueryExecutionTime", "EngineExecutionTime"],
    },
}
```

### Passo 5: Defina os recursos que você deseja monitorar. Você deve substituir os nomes dos recursos pelos nomes reais dos recursos em sua conta da AWS:

```python title="Passo 5"
resources = {
    "Amazon S3": {
        "dimensions": [{"Name": "BucketName", "Value": "your_s3_bucket_name"}],
    },
    "Amazon EMR": {
        "dimensions": [{"Name": "JobFlowId", "Value": "your_emr_job_flow_id"}],
    },
    "Amazon Athena": {
        "dimensions": [{"Name": "QueryId", "Value": "your_athena_query_id"}],
    },
}
```

### Passo 6: Obtenha e imprima as métricas do CloudWatch para os recursos selecionados:

```python title="Passo 6"
start_time = datetime.datetime.utcnow() - datetime.timedelta(minutes=60)
end_time = datetime.datetime.utcnow()

for resource_name, resource_data in resources.items():
    print(f"== {resource_name} ==")
    for metric_name in monitoring_metrics[resource_name]["metrics"]:
        metric_value = get_metric_value(
            monitoring_metrics[resource_name]["namespace"],
            metric_name,
            resource_data["dimensions"],
            start_time,
            end_time,
        )
        print(f"{metric_name}: {metric_value}")
    print()
```

Ao executar este código no Jupyter Notebook, ele irá obter e imprimir as métricas do CloudWatch para os recursos selecionados. Certifique-se de substituir os nomes dos recursos (bucket S3, jobFlowId do EMR e QueryId do Athena) pelos nomes reais dos recursos em sua conta da AWS.

Lembre-se de que as métricas podem demorar alguns minutos para serem coletadas pelo CloudWatch, então pode ser necessário ajustar o start_time para um período maior se você não estiver vendo dados.

Depois de configurar e ativar o Amazon CloudWatch, você pode usar as métricas coletadas para monitorar a utilização dos recursos com base nos parâmetros mencionados anteriormente. Use esses dados para tomar decisões informadas sobre como otimizar o desempenho e a eficiência do seu sistema, ajustando a configuração dos recursos conforme necessário.

Você também pode configurar alarmes no Amazon CloudWatch para notificá-lo automaticamente quando as métricas ultrapassarem limites predefinidos, permitindo que você tome ações rápidas para resolver quaisquer problemas de desempenho ou disponibilidade antes que eles afetem seus usuários finais.

Para mais informações sobre como trabalhar com métricas do CloudWatch e alarmes, consulte a documentação oficial da AWS:

- [Usando métricas do Amazon CloudWatch](https://docs.aws.amazon.com/pt_br/AmazonCloudWatch/latest/monitoring/working_with_metrics.html)
- [Usando alarmes do Amazon CloudWatch](https://docs.aws.amazon.com/pt_br/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html)

## Viz CloudWatch

### Passo 1: Instale as bibliotecas necessárias, caso ainda não tenha feito:

```python title="Passo 1"
!pip install boto3 matplotlib
```

### Passo 2: Importe as bibliotecas necessárias e configure o cliente do CloudWatch:

```python title="Passo 2"
import boto3
import datetime
import time
import matplotlib.pyplot as plt

cloudwatch = boto3.client("cloudwatch")
```

### Passo 3: Utilize a função **get_metric_value** e as configurações de métricas e recursos que forneci anteriormente.

### Passo 4: Crie uma função para plotar um gráfico de linha para cada métrica:

```python title="Passo 4"
def plot_metric_chart(namespace, metric_name, dimensions, start_time, end_time):
    metric_value = get_metric_value(
        namespace, metric_name, dimensions, start_time, end_time
    )
    
    if metric_value is None:
        print(f"Sem dados para a métrica: {metric_name}")
        return

    plt.figure(figsize=(12, 6))
    plt.plot(metric_value)
    plt.title(f"{namespace}: {metric_name}")
    plt.xlabel("Tempo")
    plt.ylabel(metric_name)
    plt.show()
```

### Passo 5: Plote os gráficos de linha para as métricas selecionadas:

```python title="Passo 5"
start_time = datetime.datetime.utcnow() - datetime.timedelta(hours=6)
end_time = datetime.datetime.utcnow()

for resource_name, resource_data in resources.items():
    print(f"== {resource_name} ==")
    for metric_name in monitoring_metrics[resource_name]["metrics"]:
        print(f"Plotando gráfico para {metric_name}")
        plot_metric_chart(
            monitoring_metrics[resource_name]["namespace"],
            metric_name,
            resource_data["dimensions"],
            start_time,
            end_time,
        )
    print()
```

Ao executar este código no Jupyter Notebook, ele irá gerar gráficos de linha para cada métrica coletada pelo CloudWatch. Certifique-se de substituir os nomes dos recursos pelos nomes reais dos recursos em sua conta da AWS e ajustar o start_time e end_time conforme necessário.

Os gráficos gerados podem ser usados para visualizar e analisar as tendências nas métricas ao longo do tempo, ajudando você a identificar padrões de desempenho e potenciais problemas.

Exemplo simulado rápido:
Suponha que as métricas abaixo sejam os dados fictícios para os recursos listados no dicionário resources:

```python title="Simular só para testar rapido :)"
# Amazon S3
NumberOfObjects: 5000
BucketSizeBytes: 1500000000

# Amazon EMR
IsIdle: 0
AppsRunning: 10
AppsPending: 3
ContainerAllocated: 20
ContainerPending: 5
YARNMemoryAvailablePercentage: 70

# Amazon Athena
QueryExecutionTime: 20
EngineExecutionTime: 5
```

Com base nesses dados fictícios, podemos criar uma função get_metric_value que simplesmente retorna os valores das métricas em vez de recuperá-los da AWS. Por exemplo:

```python title="get_metric_value"
def get_metric_value(namespace, metric_name, dimensions, start_time, end_time):
    # Aqui, podemos retornar os valores de métricas fictícios com base nas informações do recurso e nome da métrica.
    if metric_name == "NumberOfObjects":
        return 5000
    elif metric_name == "BucketSizeBytes":
        return 1500000000
    elif metric_name == "IsIdle":
        return 0
    elif metric_name == "AppsRunning":
        return 10
    elif metric_name == "AppsPending":
        return 3
    elif metric_name == "ContainerAllocated":
        return 20
    elif metric_name == "ContainerPending":
        return 5
    elif metric_name == "YARNMemoryAvailablePercentage":
        return 70
    elif metric_name == "QueryExecutionTime":
        return 20
    elif metric_name == "EngineExecutionTime":
        return 5
```

Com essas informações, podemos executar o código do Jupyter Notebook e ver as métricas fictícias sendo impressas no console.