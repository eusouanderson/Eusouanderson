# Define a imagem base
FROM python:3.9

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Copia o arquivo requirements.txt para o contêiner
COPY requirements.txt .

# Instala as dependências
RUN pip install --no-cache-dir -r requirements.txt

# Copia todo o conteúdo do diretório atual para o contêiner
COPY . .

# Define a porta em que o aplicativo Flask estará ouvindo dentro do contêiner
EXPOSE 5000

# Define o comando padrão para ser executado quando o contêiner for iniciado
CMD ["python", "app.py"]
