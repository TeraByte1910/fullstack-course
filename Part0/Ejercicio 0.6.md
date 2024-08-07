# 0.6: Nueva nota en diagrama de aplicación de una sola pagina

Crea un diagrama que represente la situación en la que el usuario crea una nueva nota utilizando la versión de una sola página de la aplicación.

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/notes/new_note
    activate server
    server-->>browser: documento JSON
    deactivate server

    Note right of browser: El buscador ejecuta el documento JavaScript para añadir la nueva nota y la muestra junto al resto 

    

```