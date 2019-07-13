# オレオレ証明書を作成する場合,もう少し手順を踏まなきゃいけないらしい.
# 乱数を用いた秘密鍵の生成
openssl genrsa 2048 > ca.key 

# CSR(Certificate Signing Request)の作成 
openssl req -new -key ca.key -subj "/C=JP/ST=Tokyo-to/L=Minato-ku/O=Yamazaki System/OU=IT dept./CN=Yamazaki System CA" > ca.csr

# 自己署名を追加してサーバ証明書の作成
openssl x509 -days 2000 -req -signkey ca.key < ca.csr > ca.crt 
