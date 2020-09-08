# Sensitive Data Exposure

Apenas para fins didáticos!

## Dados a mais na API

Excesso de dados na API, que não estão sendo utilizados na aplicação final. Neste exemplo, sem dispor de autenticação.

![Chrome DevTools Network](/images/network.png)

## Banco de dados exposto

Se ocorrer do seu banco de dados ser exposto, se não houver o devido tratamento, seus usuários terão suas senhas vazadas.

![Visualizando dados usando DBeaver](/images/database.png)


## Falta de criptografia

Usar HTTPS é o mínimo para que pos pacotes de rede não fiquem expostos. Um problema seríssimo em uma rede local, e muito pior em uma rede pública.

![Inspeção de pacotes de rede com Wireshark](/images/wireshark.png)

