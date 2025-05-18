// CustomVisitor.js
import LoginVisitor from './generated/LoginVisitor.js';

class CustomVisitor extends LoginVisitor {
  constructor() {
    super();
    this.output = [];
  }

  visitTestSuite(ctx) {
    this.output.push('Visitando testSuite');
    return this.visitChildren(ctx);
  }

  visitPrueba(ctx) {
    const nombre = ctx.TEXTO().getText();
    this.output.push(`\nPrueba: ${nombre}`);
    return this.visitChildren(ctx);
  }

  visitPaso(ctx) {
    const tipoPaso = ctx.children[0].getText(); // 'dado' | 'cuando' | 'entonces'
    const objeto = ctx.objeto().getText(); // IDENTIFICADOR.IDENTIFICADOR
    const estado = ctx.estado()?.getText() ?? ''; // puede ser null (opcional)
    const valores = ctx.valor().map(v => v.getText()); // puede haber varios por 'y'

    this.output.push(`  ${tipoPaso.toUpperCase()} ${objeto} ${estado} ${valores.join(' y ')}`);
    return null;
  }

  printOutput() {
    return this.output.join('\n');
  }

  static validarEntrada(entrada) {
    if (!entrada.includes('{') || !entrada.includes('}')) {
      console.warn("⚠️  Faltan llaves de apertura o cierre en la prueba.");
    }

    if (!entrada.trim().startsWith("prueba")) {
      console.warn("⚠️  La entrada no comienza con la palabra clave 'prueba'.");
    }

    if (!entrada.trim().endsWith('}')) {
      console.warn("⚠️  La prueba debe finalizar correctamente con '}'.");
    }

    if (objeto === 'el.usuario' && valores.includes('"invitado"')) {
    this.detectaUsuarioInvitado = true;
  }
  }
}

export default CustomVisitor;
