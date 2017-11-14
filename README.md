# Création d'une API

Prérequis :
- NodeJS
- Npm

Installation :

```bash
git clone https://github.com/MarieLBernard44/just_api.git
cd just_api
npm i
```

Démarrage :

```bash
npm start
```

Accès à l'API sur l'url : `http://localhost:3000`

# Urls de l'API

Préfixer l'api de l'uri suivante : /api/v1

| VERBES | URI        | 
|--------|------------|
| GET    |    



# Application conteneurisée

Construction de l'image à partir du dockerfile (racine de l'application)

```docker build -t <mytag> .``` 

Lancement du conteneur

```docker run -p 31337:3000 -d <mytag>``` 

Tester 

```curl -i localhost:31337```
