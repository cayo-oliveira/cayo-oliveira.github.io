---
sidebar_position: 6
---

# Leis Operacionais

## Utilization Law

Ui: É a taxa média de utilização de um recurso i
Bi: É o tempo médio de utilização do recurso i
T: Período de temp observado

E temos que:

Ui - Bi/T

Se eu multiplicar Ci/Ci

Ci: Número total de serviços finalizados pelo recurso i no período T

Tenho que 

Ui = Bi/T * Ci/Ci

Ui = (Bi/Ci)x(Ci/T)

Como Si = Bi/Ci
Onde Bi:Tempo Médio de serviço por finalização relativa ao recurso i

e Xi = Ci/T
Onde Xi = Throughput ou finalizações por unidade de tempo do recurso i 

Então temos que a **Utilization Law** é:

Ui = Si x Xi = Si x Lambda_i
- **Si**: Tempo Médio de serviço por finalização relativa ao recurso i
- **Xi**: Throughput ou fnializações por unidade de tempo do recurso i 
- **Lambda i**: Taxa de Chegada ou chegadas por unidade de tempo ao recurso i 

## Exemplo I

Se 125 pacotes chegam em um roteador e ele leva em média 2 ms para tratar, calcule o Ui.

Ui = 0,002x125 = 25%

Isso significa que o roteador está operando em 25% de sua capacidade, ou seja, ainda há bastante margem de capacidade disponível para lidar com mais pacotes de dados sem sobrecarregar o sistema.

## Exemplo II

A banda passante de um link de comunicação é 56k bps. PAcotes de 1,5k bytes são transmitidos ao link a uma taxa de 3 pcs (pacotes por segundo). Qual é a utilização do link ?

1 byte = 8 bits

Tamanho do Pacote = 1500 Bytes = 1500 x 8 = 12000 bits

Comprimento da Banda = 56k bps = 56k bps / 8 bits = 7000 Bps
Comprimento da Banda = 7000 Bps / 1500 Bytes (tamanho do pacote) = 4,7 pps (pacotes por segundo)

Si: Tempo Médio de serviço por finalização relativa ao recurso i

Então se eu processo 4,7 pacotes por segundo.
Eu quero saber e quantos segundos eu processo 1 pacote.

1s = 4,7 pacotes
s = 1

4,7s = 1

s = 1/4,7

S = 0,214 s

Pela Utilization Law:

Ui = Si x Xi = Si x Lambda_0

Lambda_0 ou Xi = 3 pps

Ui = 0,214s x 3 pps
Ui = 64%

Isso significa que o link está sendo utilizado em 64,2% de sua capacidade total. É importante monitorar a utilização do link para garantir que ele não fique sobrecarregado e prejudique o desempenho da rede. 

## Forced Flow Law (Lei do Fluxo Forçado)

Xi: Vazão do recurso i

Xi = Ci/T

Multiplicando por C0/C0 do sistema

Xi = (Ci/C0) x (C0/T)

Xi = Vi x X0 = Vi x Lambda_0
- **Vi**: Número médio de visitas ao recurso i por solicitação
- **X0**: throughtput do sistema, ou vazão do sistema
- **Lambda 0**: Taxa de Chegada ou chegadas por unidade de tempo do sistema

## Service Demand Law (Lei da Demanda)

É o tempo médio total que uma transação passa no recurso.

Da Utilization Law:

Ui = Xi x Si = Xi x Lambda_i

Da Forced Flow Law:

Xi = Vi x X0 = Vi x  Lambda_0

O Service Time (S) é o tempo que o recurso ficou ocupado pelo tempo de observação. Si = Bi/Ci

O **Service Demand Law** é diferente. 
Pensando no conceito de transação (conceito abstrato que você precisa definir)

Ui = Vi x X- x Si = Di x X0

Ou Seja

Ui = Di x X0
Onde Di = Vi x Si

Ou 

Di = Ui / X0
Eu quero saber quanto tempo uma transação demandou do recurso. 
Em outros modelos (filas, petri, markov) eu estou procurando o Di. 
É difícil ser obtido diretamente, mas se eu tenho a Utilização do Recurso (Ui) e dividir pela vazão do sistema (X0), eu tenho a demanda.

## Gargalo

Aquele que vai definir a vazão máxima do sistema, é o time demand (Di). Posso também observar a utilização (Ui) para saber qual é o gargalo.

max_i(Di) é o gargalo do sistema

## Exemplo III

Considere que um Web Server foi monitorado por 10min e que CPU dureante esse período teve ocupação média de 90,2348%. O log do Web Server registrou 30.000 soliitações processadas. Qual é a CPU Service Demand (Dcpu) relativa as solicitações ao Web Server ?

T = 10 min = 600s
Ucpu = 0,902348
C0 = 30.000 transações

- **X0**: throughtput do sistema

X0 = C0/T

X0 = 30.000/600 = 50 solicitações por segundo

Dcpu = Ucpu/X0 = 0,902348/50

Dcpu = 0,01847 segundos/solicitacao

Ou seja, cada transação (solicitação) demanda 18ms da CPU

## Example IV (livro 8.3.2.)

:::info Book
Maciel, Paulo Romero Martins. Performance, Reliability, and Availability Evaluation of Computational Systems, Volume I (p. 370). CRC Press. Edição do Kindle. 
:::

### Situação Atual

A system composed of five servers was monitored for four hours  (T = 4×60×60s = 14400s) under operational conditions. In this period, the log registered C0 = 28978 transactions processed. The servers´ utilizations were obtained  over the period every 30s. Hence a sample of 480 utilizations for each server was  recorded. The average utilizations over the four hour period of each server were  Us1 = 0.3996, Us2 = 0.2389, Us3 = 0.2774, Us4 = 0.5253, and Us5 = 0.2598, respectively. The mean time demanded of a typical transaction in each server may be estimated through.

### Previsão Futura (Capacidade para Planejamento)

Therefore, each typical transaction demanded the respective times of each specific  server. Now, assume that a considerable demand increase is forecasted. It is expected  thatC 0  0 = 60000 transactions would be requested in the same four hours period. Thus,  the expected throughput would be X 0  0 = 60000/14400s = 4.1667t ps. The foreseen  utilization of each server may be estimated through  U = Di x X0,  since the maximal utilization is 1. Therefore (see Table 8.2), 

## Exemplo V (Example 8.3.3.)

:::info Book
Maciel, Paulo Romero Martins. Performance, Reliability, and Availability Evaluation of Computational Systems, Volume I (p. 370). CRC Press. Edição do Kindle. 
:::

A server was monitored for T = 2h considering a specific workload.  In this period, the average processor utilization was Ucpu = 0.38, and C0 = 374,356  transactions were processed. Each transaction, on average, reads/writes 18,427.44  bytes from/to the disk. The average time to read or write one sector (512 bytes)  from/to the disk is 0.26 ms. The transaction throughput is 