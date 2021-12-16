# jwt Middleware

1. Ejecutar Proyecto: `npm run dev`.
2. Postman Ejemplo: `npm jwtExample.postman_collection.json`.

# index.js

```diff
const express = require("express");
- const jwt = require("jwt-simple");

const app = express();
const port = 3000;

- const secretKey = "my_secret_key";

const jwtMiddleware = function (req, res, next) {
  try {
    console.log(req.headers);
-   let tokenValidado = jwt.decode(req.headers.authorization, secretKey);
    console.log(tokenValidado);
    next();
  } catch (err) {
    res.status(400).send("token invalidado");
  }
};

app.get("/generateJwt", (req, res) => {
  const data = {};
 let tokenGenerado = jwt.encode(data, secretKey);
  res.send(tokenGenerado);
});

+ app.get("/validateJwt", jwtMiddleware, (req, res) => {
+  res.send("token validado");
+ });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

```

**Descripción**

Se genera ejemplo basico de como implementar en un proyecto nodejs la validacion de jwt creado y validado de forma autonoma
en el banco se utilizan librerias especializadas para esta validacion y creacion de jwts ya que el "key_secret" vive por ambiente.
