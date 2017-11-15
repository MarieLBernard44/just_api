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

Le port ouvert sur la machine hôte est le port 3000 et le port du serveur node JS exposé sur le conteneur est le 3000 

``` docker-compose build ```

Lancement de l'application en mode démon 

``` docker-compose up  -d ```

Accès via le navigateur

``` http://http://localhost:3000/ ```
