# API - procédure d'installation simple (sans Docker)

Prérequis :
- NodeJS
- Npm

Installation :

```bash
git clone https://github.com/MarieLBernard44/just_api.git
cd just_api
npm i
```
Mise en place de la base de données:
Importer le fichier ```dump.sql``` dans votre Système de Gestion de Base de Données MySQL

Démarrage :

```bash
npm start
```

Accès à l'API sur l'url : `http://localhost:3000`


# Application conteneurisée avec docker - procédure d'installation

Prérequis :
- docker 
- docker-compose

Clonage du repository 

```bash
git clone https://github.com/MarieLBernard44/just_api.git
cd just_api
npm i
```
Configuration de la base de données (db-config.js)
``` const db  = mysql.createPool({
  ...
  host     : 'database',
  ...
});
```
Copier le fichier ```dump.sql``` fourni dans le répertoire ```just_api/docker-config/DB```.
Ce dossier est destiné aux futures migrations de la base de données.

Le port ouvert sur la machine hôte est le port 3000 et le port du serveur node JS exposé sur le conteneur est le 3000 

```bash
docker-compose build 
```

Lancement de l'application en mode démon 

```bash
docker-compose up  -d 
```

Accès via le navigateur

Accès à l'API sur l'url : ``` http://localhost:3000/ ```

# Urls de l'API

Préfixer l'api de l'uri suivante : /api/v1

| VERBES | URI        | 
|--------|------------|
| GET    |    

# Déploiement

Pour protéger l'application des attaques cross-domain type CSRF (Cross-Site Request Forgery), il est nécessaire de renseigner
le paramètre ```Access-Control-Allow-Origin``` dans les headers de la requête HTTP. Pour des raisons de sécurité, évitez d'utiliser le wildcard ```*``` et renseignez le nom de domaine de votre site.
