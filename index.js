import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import fs from 'fs';
import LoginLexer from "./generated/LoginLexer.js";
import LoginParser from "./generated/LoginParser.js";
import CustomVisitor from "./CustomVisitor.js";

async function main() {
    let input;

    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        console.error("❌ Error al leer input.txt:", err);
        return;
    }

    // Validaciones sintácticas básicas antes del análisis completo
    if (!input.trim().startsWith("prueba")) {
        console.error("❌ Error Léxico: la entrada debe comenzar con la palabra clave 'prueba'.");
        return;
    }

    if (!input.includes('{') || !input.includes('}')) {
        console.error("❌ Error Sintáctico: faltan llaves de apertura o cierre en la prueba.");
        return;
    }

    if (!input.trim().endsWith('}')) {
        console.error("❌ Error: la prueba debe finalizar correctamente con '}'.");
        return;
    }

    // Detectar tipo de usuario antes del análisis
    const isAdmin = input.includes('el.usuario es "admin"');
    const isInvitado = input.includes('el.usuario es "invitado"');

    if (!isAdmin && !isInvitado) {
        console.error("❌ Usuario no reconocido. Solo se permiten 'admin'.");
        return;
    }

    if (isInvitado) {
        console.log("\n🚫 Entrada inválida para usuario invitado → console.error('⚠ Usuario Invitado'); ❌");
        return;
    }

    // Validar que cada paso comience con 'dado', 'cuando' o 'entonces'
    const lineas = input.split('\n');
    for (let i = 0; i < lineas.length; i++) {
        const lineaTrim = lineas[i].trim();
        if (
            lineaTrim &&
            !lineaTrim.startsWith("prueba") &&
            !lineaTrim.startsWith("{") &&
            !lineaTrim.startsWith("}") &&
            !lineaTrim.startsWith("dado") &&
            !lineaTrim.startsWith("cuando") &&
            !lineaTrim.startsWith("entonces")
        ) {
            console.error(`❌ Error en línea ${i + 1}: se esperaba que comience con 'dado', 'cuando' o 'entonces'.`);
            console.error(`   Sugerencia: revisa → ${lineas[i]}`);
            return;
        }
    }

    const inputStream = CharStreams.fromString(input);
    const lexer = new LoginLexer(inputStream);

    // Mostrar tabla de tokens
    console.log("\n=== Tabla de Tokens y Lexemas ===");
    lexer.reset();
    let token;
    while ((token = lexer.nextToken()).type !== antlr4.Token.EOF) {
        const tokenName = LoginLexer.symbolicNames[token.type];
        console.log(`${token.text.padEnd(16)}→ ${tokenName}`);
    }

    // Volver a crear lexer y parser para el análisis sintáctico
    const newInput = CharStreams.fromString(input);
    const newLexer = new LoginLexer(newInput);
    const tokenStream = new CommonTokenStream(newLexer);
    const parser = new LoginParser(tokenStream);
    parser.buildParseTrees = true;

    const tree = parser.testSuite();

    if (parser._syntaxErrors > 0) {
        console.error("❌ Errores de sintaxis encontrados.");
        return;
    }

    console.log("\n✅ Entrada válida.");
    console.log("\n=== Árbol de derivación ===\n");
    console.log(tree.toStringTree(parser.ruleNames));

    const visitor = new CustomVisitor();
    visitor.visit(tree);

    console.log("\n=== Salida generada por el Visitor ===\n");
    console.log(visitor.printOutput());

    // Lógica adicional desde el Visitor
    if (visitor.detectaUsuarioInvitado) {
        console.log("\n🚫 Usuario invitado detectado → console.error('⚠ Usuario Invitado'); ❌");
    }
}

main();
