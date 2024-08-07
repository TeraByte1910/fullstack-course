# 0.5: Diagrama de aplicación de una sola página

Crea un diagrama que describa la situación en la que el usuario accede a la versión de aplicación de una sola página de la aplicación de notas en https://studies.cs.helsinki.fi/exampleapp/spa.

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