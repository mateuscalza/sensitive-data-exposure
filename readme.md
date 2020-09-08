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

## Outros problemas possíveis

Outros problemas podem 

 - Falta de firewall
 - Falta de rate limit
 - Senhas fracas, especialmente administrativas
 - Uso de IDs sequenciais
 - Permissões de sistema ou de banco de dados mal organizados
 - CORS mal configurado
 - Cabeçalho X-Frame-Options mal configurado
 - SSL não configurado para o banco de dados
 - Injeção de script (XSS)
 - CDN mal configurado
 - Servidores e datacenters mal administrados
 - Sistemas operacionais não atualizados
