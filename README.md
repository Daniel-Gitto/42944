Paso 1 Trasladarse por comando de la Terminal CMD a la carpeta creada para clonar el repositorio, Por Ejemplo    cd C:\Users\PC\Desktop\Analizador 

Paso 2 Clonar el repositorio en la carpeta seleccionada con el comando     git clone https://github.com/Daniel-Gitto/42944.git

Paso 3 Importante para que funciene todo correctamente es trasladarse a la carpeta clonada del repositorio 42944 con el comando     cd C:\Users\PC\Desktop\Analizador\42944

Paso 4 Estando en la carpeta 42944 Abrir el Visual Estudio Code con el comando     code .

Paso 5 Realizar las pruebas copiando el codigo de los archivos EjemplosValidos.txt o EjemplosInvalidos.txt (2 ejemplos de cada uno) reemplazando el contenido del input.txt con el ejemplo copiado!

Paso 6 Una vez copiadp el codigo ejemplo ejecutar el programa con  run o F5 y generará el Arbol 

Paso 7 En la terminal cmd estando en la carpeta 42944 escribir el comando  npm star y ejecutarlo, si es correcto generara la entrada valida mostrando la tabla de Tokens y Lexemas y el arbol de derivación, si la entrada no es valida mostrara un mensaje de error correspondiente.

El archivo de la gramatica creada para el analizador se llama "Login.g4". Es la Gramatica principal del Codigo pasado a lenguaje ANTLR4!

El archivo con el nombre de "Gramatica Asignada" es la transcripción del codigo proporcionado a realizar. No se hace nada con ello!

El archivo donde se realizan las pruebas del codigo de validación o error se llama "input.txt"

El archivo donde hay dos ejemplos de aceptación se llama "EjemplosValidos.txt" y dos ejemplos de error se llama "EjemplosInvalidos.txt" donde van a copiar cada ejemplo y reemplazarlo en el codigo "input.txt"

Opcional hay un archivo con el nombre PruebasRealizadas.txt donde hay varios ejemplos para realizar y verificar la gramatica en el archivo input.txt 

Los archivos creados por el ANTLR4 estan en la carpeta generated y se llaman:
Login.tokens 
Login.Lexer.js
LoginListener.js
LoginParser.js

