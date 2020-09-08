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

Outros problemas 

 - Falta de firewall
 - Falta de rate limit para prevenir Brute Force
 - Senhas fracas, especialmente administrativas
 - Uso de IDs sequenciais
 - Permissões de sistema ou de banco de dados mal organizados
 - CORS mal configurado
 - Cabeçalho X-Frame-Options mal configurado
 - SSL não configurado para o banco de dados
 - Injeção de script (XSS)
 - Serviços, como a Cloudflare, que estejam mal configurados
 - Servidores e datacenters mal administrados
 - Sistemas operacionais não atualizados
 - Exposição de variáveis sensíveis em um bundle
 - Portas abertas no servidor
 - Ambiente de desenvolvimento exposto na rede
 - Não expirar tokens e cookies
 - Manter senhas padrão
 - Banco de dados com binding público
 - Keys, tokens e secrets que ficam em meio à código-fonte público

## Ferramentas úteis

 - Chrome DevTools
 - Wireshark
 - Cain and Abel Software
 - NMAP
 - Cloudflare (firewall + ssl + rate limiter)
 
 ## Bibliotecas e extensões
 
 - pgcrypto (para PostgreSQL) - https://www.postgresql.fastware.com/blog/further-protect-your-data-with-pgcrypto
 - helmet (para NodeJS) - https://www.npmjs.com/package/helmet
 - bcryptjs (para NodeJS) - https://www.npmjs.com/package/bcryptjs
 - zxcvbn (para NodeJS) - https://github.com/dropbox/zxcvbn
