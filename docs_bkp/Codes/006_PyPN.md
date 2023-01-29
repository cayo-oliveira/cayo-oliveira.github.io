---
sidebar_position: 6
---

# Redes de petri - Python

Aqui está um exemplo básico de como modelar uma arquitetura simples de processamento de dados usando o pacote PyPN em Python:

```python title="Drop Missing Data, Drop Duplicate Rows, Replace"
from pyPN.petrinet import Place, Transition, PetriNet

# Criando lugares
data_storage = Place('Data Storage')
data_processing = Place('Data Processing')
data_output = Place('Data Output')

# Criando transições
data_in = Transition('Data In', input_places=[data_storage], output_places=[data_processing])
data_out = Transition('Data Out', input_places=[data_processing], output_places=[data_output])

# Criando a rede de Petri
petri_net = PetriNet(transitions=[data_in, data_out], places=[data_storage, data_processing, data_output])

# Adicionando marcas iniciais
data_storage.add_tokens(1)

# Executando a transição "Data In"
data_in.fire()

# Verificando o estado atual da rede
print(petri_net.get_marking())
# Output: {<Place: Data Processing (1)>}

# Executando a transição "Data Out"
data_out.fire()

# Verificando o estado atual da rede
print(petri_net.get_marking())
# Output: {<Place: Data Output (1)>}
```


Aqui está um exemplo complexo de como modelar uma arquitetura de dados complexa de Machine Learning na AWS usando o pacote PyPN, incluindo a utilização do Apache Airflow para gerenciamento de fluxo de trabalho, Amazon EMR para processamento em cluster, Amazon ECS para implantação de modelos, Amazon S3 para armazenamento de dados, Amazon CloudWatch para monitoramento de métricas e Amazon QuickSight para visualização de dados:

```python title="Drop Missing Data, Drop Duplicate Rows, Replace"

from pyPN.petrinet import Place, Transition, PetriNet

# Criando lugares
data_storage = Place('Data Storage')
data_processing = Place('Data Processing')
job_scheduling = Place('Job Scheduling')
data_analysis = Place('Data Analysis')
model_training = Place('Model Training')
model_deployment = Place('Model Deployment')
metrics_monitoring = Place('Metrics Monitoring')
metrics_visualization = Place('Metrics Visualization')

# Criando transições
data_ingestion = Transition('Data Ingestion', input_places=[data_storage], output_places=[data_processing])
job_scheduling = Transition('Job Scheduling', input_places=[data_processing], output_places=[job_scheduling])
data_preparation = Transition('Data Preparation', input_places=[job_scheduling], output_places=[data_analysis])
model_training = Transition('Model Training', input_places=[data_analysis], output_places=[model_training])
model_deployment = Transition('Model Deployment', input_places=[model_training], output_places=[model_deployment])
metrics_monitoring = Transition('Metrics Monitoring', input_places=[model_deployment], output_places=[metrics_monitoring])
metrics_visualization = Transition('Metrics Visualization', input_places=[metrics_monitoring], output_places=[metrics_visualization])

# Criando a rede de Petri
petri_net = PetriNet(transitions=[data_ingestion, data_preparation, model_training, model_deployment, metrics_monitoring], places=[data_storage, data_processing, model_training, model_deployment, metrics_monitoring, data_visualization])

```

Aqui está um exemplo simples de como modelar uma arquitetura de dados simples de Machine Learning na AWS usando o pacote PyPN, incluindo a utilização de Amazon S3 para armazenamento de dados, Amazon SageMaker para treinamento e validação de modelos e Amazon CloudWatch para monitoramento de métricas:

```python title="Drop Missing Data, Drop Duplicate Rows, Replace"

from pyPN.petrinet import Place, Transition, PetriNet

# Criando lugares
data_storage = Place('Data Storage')
model_training = Place('Model Training')
metrics_monitoring = Place('Metrics Monitoring')

# Criando transições
data_ingestion = Transition('Data Ingestion', input_places=[data_storage], output_places=[model_training])
model_training = Transition('Model Training', input_places=[model_training], output_places=[metrics_monitoring])
metrics_monitoring = Transition('Metrics Monitoring', input_places=[metrics_monitoring])

# Criando a rede de Petri
petri_net = PetriNet(transitions=[data_ingestion, model_training, metrics_monitoring], places=[data_storage, model_training, metrics_monitoring])

# Adicionando marcas iniciais
data_storage.add_tokens(1)

# Executando a transição "Data Ingestion"
data_ingestion.fire()

# Executando a transição "Model Training"
model_training.fire()

# Executando a transição "Metrics Monitoring"
metrics_monitoring.fire()
```
Neste exemplo, os dados são armazenados em um lugar, depois são usados para treinamento em outro lugar e finalmente são monitorados em outro lugar. As transições representam as operações de enviar os dados do armazenamento para o treinamento e depois do treinamento para o monitoramento. Este exemplo é simples e não inclui muitos detalhes, mas o objetivo é demonstrar como é possível usar o PyPN para modelar uma arquitetura de Machine Learning usando os serv


Aqui está um exemplo simples de como modelar uma arquitetura de dados simples na AWS usando o pacote PyPN, incluindo a utilização de Amazon S3 para armazenamento de dados e Amazon EMR para processamento em cluster:
```python title="Drop Missing Data, Drop Duplicate Rows, Replace"

from pyPN.petrinet import Place, Transition, PetriNet

# Criando lugares
data_storage = Place('Data Storage')
data_processing = Place('Data Processing')

# Criando transições
data_ingestion = Transition('Data Ingestion', input_places=[data_storage], output_places=[data_processing])
data_processing = Transition('Data Processing', input_places=[data_processing])

# Criando a rede de Petri
petri_net = PetriNet(transitions=[data_ingestion, data_processing], places=[data_storage, data_processing])

# Adicionando marcas iniciais
data_storage.add_tokens(1)

# Executando a transição "Data Ingestion"
data_ingestion.fire()

# Executando a transição "Data Processing"
data_processing.fire()
```


Neste exemplo, os dados são armazenados em um lugar e depois são processados em outro lugar. As transições representam as operações de enviar os dados do armazenamento para o processamento. Este exemplo é simples e não inclui muitos detalhes, mas o objetivo é demonstrar como é possível usar o PyPN para modelar uma arquitetura de dados usando os serviços da AWS.



Aqui está um exemplo simples de como modelar uma arquitetura de dados simples na AWS usando o pacote PyPN, incluindo a utilização de Amazon S3 para armazenamento de dados, Apache Airflow para gerenciamento de fluxo de trabalho, Amazon EMR para processamento em cluster, e Auto Scaling para escalar automaticamente os recursos de processamento:

```python title="Drop Missing Data, Drop Duplicate Rows, Replace"

from pyPN.petrinet import Place, Transition, PetriNet

# Criando lugares
data_storage = Place('Data Storage')
data_processing = Place('Data Processing')

# Criando transições
data_ingestion = Transition('Data Ingestion', input_places=[data_storage], output_places=[data_processing])
data_processing = Transition('Data Processing', input_places=[data_processing])
data_scaling = Transition('Data Scaling', input_places=[data_processing])

# Criando a rede de Petri
petri_net = PetriNet(transitions=[data_ingestion, data_processing, data_scaling], places=[data_storage, data_processing])

# Adicionando marcas iniciais
data_storage.add_tokens(1)

# Executando a transição "Data Ingestion"
data_ingestion.fire()

# Executando a transição "Data Processing"
data_processing.fire()
```