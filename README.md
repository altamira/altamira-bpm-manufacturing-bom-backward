Altamira BPM Manufacturing Bill of Material
===========================================

To run this code, you need to do: 

1. Install [neo4j](http://neo4j.com/artifact.php?name=neo4j-community_windows_2_1_3.exe) database.

2. Copy the all jar files in /db/plugin directory to /NEO4J_HOME/plugins and restart the server.

3. Load data can be doing:

a) Install gremlin console, connect to neo4j running instance and run fabrica-db.groovy script:

```
$ cd db
$ gremlin.bat
$ gremlin> \l fabrica-db.groovy
```

b) Using POSTMAN Rest Client Chrome Plugin (db/fabrica-db.postman) or other rest client, send a script to load the data (needs [Neo4J Gremlin Extension Plugin](http://neo4j-contrib.github.io/gremlin-plugin) done in step 2):

4. Run the app:

```
$ cd app
$ npm install
$ bower install
$ grunt serve
```

Graph Data Model
================

To work with graph vertex and edges see a view of the data:

![Alt text](/master/docs/Processo%20de%20Fabricação.png?raw=true "Fabrica")
