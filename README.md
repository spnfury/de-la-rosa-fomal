<!--
Pasos para configurar las redirecciones en Netlify para una SPA:

1. En aplicaciones de una sola página los enlaces se manejan en el cliente, por lo que al acceder directamente a una ruta (por ejemplo /servicio/centralita-virtual-con-ia) el servidor buscará un archivo físico y devolverá 404.
2. Para solucionarlo, se crea un archivo llamado _redirects en la carpeta "public" (o en la raíz del deploy) con la siguiente regla:
   /*    /index.html    200
   Esto redirecciona cualquier ruta a index.html, permitiendo que React gestione la navegación.
3. Una vez agregado el archivo, al desplegar en Netlify se aplicará la regla y se evitarán los errores 404.
-->
