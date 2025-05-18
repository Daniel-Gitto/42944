// Generated from c://Programacion//Analizador Lexico//ssl-antlr-calculator//Login.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LoginListener from './LoginListener.js';
import LoginVisitor from './LoginVisitor.js';

const serializedATN = [4,1,24,73,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,5,0,16,8,0,10,0,12,0,19,9,0,1,1,1,1,1,1,1,1,5,1,25,8,
1,10,1,12,1,28,9,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,5,2,38,8,2,10,2,12,2,
41,9,2,1,2,1,2,1,3,1,3,1,3,5,3,48,8,3,10,3,12,3,51,9,3,1,4,1,4,1,5,1,5,1,
5,1,5,1,5,3,5,60,8,5,1,6,1,6,1,6,1,6,5,6,66,8,6,10,6,12,6,69,9,6,1,6,1,6,
1,6,0,0,7,0,2,4,6,8,10,12,0,2,1,0,7,9,3,0,2,2,11,11,13,15,74,0,17,1,0,0,
0,2,20,1,0,0,0,4,31,1,0,0,0,6,44,1,0,0,0,8,52,1,0,0,0,10,59,1,0,0,0,12,61,
1,0,0,0,14,16,3,2,1,0,15,14,1,0,0,0,16,19,1,0,0,0,17,15,1,0,0,0,17,18,1,
0,0,0,18,1,1,0,0,0,19,17,1,0,0,0,20,21,5,6,0,0,21,22,5,18,0,0,22,26,5,16,
0,0,23,25,3,4,2,0,24,23,1,0,0,0,25,28,1,0,0,0,26,24,1,0,0,0,26,27,1,0,0,
0,27,29,1,0,0,0,28,26,1,0,0,0,29,30,5,17,0,0,30,3,1,0,0,0,31,32,7,0,0,0,
32,33,3,6,3,0,33,34,3,8,4,0,34,39,3,10,5,0,35,36,5,10,0,0,36,38,3,10,5,0,
37,35,1,0,0,0,38,41,1,0,0,0,39,37,1,0,0,0,39,40,1,0,0,0,40,42,1,0,0,0,41,
39,1,0,0,0,42,43,5,23,0,0,43,5,1,0,0,0,44,49,5,22,0,0,45,46,5,1,0,0,46,48,
5,22,0,0,47,45,1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,50,7,1,
0,0,0,51,49,1,0,0,0,52,53,7,1,0,0,53,9,1,0,0,0,54,60,5,18,0,0,55,60,5,19,
0,0,56,60,5,20,0,0,57,60,5,21,0,0,58,60,3,12,6,0,59,54,1,0,0,0,59,55,1,0,
0,0,59,56,1,0,0,0,59,57,1,0,0,0,59,58,1,0,0,0,60,11,1,0,0,0,61,62,5,3,0,
0,62,67,3,10,5,0,63,64,5,4,0,0,64,66,3,10,5,0,65,63,1,0,0,0,66,69,1,0,0,
0,67,65,1,0,0,0,67,68,1,0,0,0,68,70,1,0,0,0,69,67,1,0,0,0,70,71,5,5,0,0,
71,13,1,0,0,0,6,17,26,39,49,59,67];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LoginParser extends antlr4.Parser {

    static grammarFileName = "Login.g4";
    static literalNames = [ null, "'.'", "'no es'", "'['", "','", "']'", 
                            "'prueba'", "'dado'", "'cuando'", "'entonces'", 
                            "'y'", "'es'", "'noes'", "'contiene'", "'existe'", 
                            "'debe'", "'{'", "'}'" ];
    static symbolicNames = [ null, null, null, null, null, null, "PRUEBA", 
                             "DADO", "CUANDO", "ENTONCES", "Y", "ES", "NOES", 
                             "CONTIENE", "EXISTE", "DEBE", "LLAVE_ABRE", 
                             "LLAVE_CIERRA", "TEXTO", "NUMERO", "BOOLEANO", 
                             "VARIABLE", "IDENTIFICADOR", "NEWLINE", "WS" ];
    static ruleNames = [ "testSuite", "prueba", "paso", "objeto", "estado", 
                         "valor", "lista" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LoginParser.ruleNames;
        this.literalNames = LoginParser.literalNames;
        this.symbolicNames = LoginParser.symbolicNames;
    }



	testSuite() {
	    let localctx = new TestSuiteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LoginParser.RULE_testSuite);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 14;
	            this.prueba();
	            this.state = 19;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	prueba() {
	    let localctx = new PruebaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LoginParser.RULE_prueba);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.match(LoginParser.PRUEBA);
	        this.state = 21;
	        this.match(LoginParser.TEXTO);
	        this.state = 22;
	        this.match(LoginParser.LLAVE_ABRE);
	        this.state = 26;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 896) !== 0)) {
	            this.state = 23;
	            this.paso();
	            this.state = 28;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 29;
	        this.match(LoginParser.LLAVE_CIERRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	paso() {
	    let localctx = new PasoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LoginParser.RULE_paso);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 896) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 32;
	        this.objeto();
	        this.state = 33;
	        this.estado();
	        this.state = 34;
	        this.valor();
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===10) {
	            this.state = 35;
	            this.match(LoginParser.Y);
	            this.state = 36;
	            this.valor();
	            this.state = 41;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 42;
	        this.match(LoginParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	objeto() {
	    let localctx = new ObjetoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LoginParser.RULE_objeto);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(LoginParser.IDENTIFICADOR);
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 45;
	            this.match(LoginParser.T__0);
	            this.state = 46;
	            this.match(LoginParser.IDENTIFICADOR);
	            this.state = 51;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	estado() {
	    let localctx = new EstadoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LoginParser.RULE_estado);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 59396) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LoginParser.RULE_valor);
	    try {
	        this.state = 59;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 54;
	            this.match(LoginParser.TEXTO);
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 55;
	            this.match(LoginParser.NUMERO);
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 56;
	            this.match(LoginParser.BOOLEANO);
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 57;
	            this.match(LoginParser.VARIABLE);
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 58;
	            this.lista();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lista() {
	    let localctx = new ListaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LoginParser.RULE_lista);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(LoginParser.T__2);
	        this.state = 62;
	        this.valor();
	        this.state = 67;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 63;
	            this.match(LoginParser.T__3);
	            this.state = 64;
	            this.valor();
	            this.state = 69;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 70;
	        this.match(LoginParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

LoginParser.EOF = antlr4.Token.EOF;
LoginParser.T__0 = 1;
LoginParser.T__1 = 2;
LoginParser.T__2 = 3;
LoginParser.T__3 = 4;
LoginParser.T__4 = 5;
LoginParser.PRUEBA = 6;
LoginParser.DADO = 7;
LoginParser.CUANDO = 8;
LoginParser.ENTONCES = 9;
LoginParser.Y = 10;
LoginParser.ES = 11;
LoginParser.NOES = 12;
LoginParser.CONTIENE = 13;
LoginParser.EXISTE = 14;
LoginParser.DEBE = 15;
LoginParser.LLAVE_ABRE = 16;
LoginParser.LLAVE_CIERRA = 17;
LoginParser.TEXTO = 18;
LoginParser.NUMERO = 19;
LoginParser.BOOLEANO = 20;
LoginParser.VARIABLE = 21;
LoginParser.IDENTIFICADOR = 22;
LoginParser.NEWLINE = 23;
LoginParser.WS = 24;

LoginParser.RULE_testSuite = 0;
LoginParser.RULE_prueba = 1;
LoginParser.RULE_paso = 2;
LoginParser.RULE_objeto = 3;
LoginParser.RULE_estado = 4;
LoginParser.RULE_valor = 5;
LoginParser.RULE_lista = 6;

class TestSuiteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LoginParser.RULE_testSuite;
    }

	prueba = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PruebaContext);
	    } else {
	        return this.getTypedRuleContext(PruebaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LoginListener ) {
	        listener.enterTestSuite(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LoginListener ) {
	        listener.exitTestSuite(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LoginVisitor ) {
	        return visitor.visitTestSuite(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PruebaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LoginParser.RULE_prueba;
    }

	PRUEBA() {
	    return this.getToken(LoginParser.PRUEBA, 0);
	};

	TEXTO() {
	    return this.getToken(LoginParser.TEXTO, 0);
	};

	LLAVE_ABRE() {
	    return this.getToken(LoginParser.LLAVE_ABRE, 0);
	};

	LLAVE_CIERRA() {
	    return this.getToken(LoginParser.LLAVE_CIERRA, 0);
	};

	paso = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PasoContext);
	    } else {
	        return this.getTypedRuleContext(PasoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LoginListener ) {
	        listener.enterPrueba(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LoginListener ) {
	        listener.exitPrueba(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LoginVisitor ) {
	        return visitor.visitPrueba(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PasoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LoginParser.RULE_paso;
    }

	objeto() {
	    return this.getTypedRuleContext(ObjetoContext,0);
	};

	estado() {
	    return this.getTypedRuleContext(EstadoContext,0);
	};

	valor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValorContext);
	    } else {
	        return this.getTypedRuleContext(ValorContext,i);
	    }
	};

	NEWLINE() {
	    return this.getToken(LoginParser.NEWLINE, 0);
	};

	DADO() {
	    return this.getToken(LoginParser.DADO, 0);
	};

	CUANDO() {
	    return this.getToken(LoginParser.CUANDO, 0);
	};

	ENTONCES() {
	    return this.getToken(LoginParser.ENTONCES, 0);
	};

	Y = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LoginParser.Y);
	    } else {
	        return this.getToken(LoginParser.Y, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LoginListener ) {
	        listener.enterPaso(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LoginListener ) {
	        listener.exitPaso(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LoginVisitor ) {
	        return visitor.visitPaso(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ObjetoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LoginParser.RULE_objeto;
    }

	IDENTIFICADOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LoginParser.IDENTIFICADOR);
	    } else {
	        return this.getToken(LoginParser.IDENTIFICADOR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LoginListener ) {
	        listener.enterObjeto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LoginListener ) {
	        listener.exitObjeto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LoginVisitor ) {
	        return visitor.visitObjeto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EstadoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LoginParser.RULE_estado;
    }

	ES() {
	    return this.getToken(LoginParser.ES, 0);
	};

	CONTIENE() {
	    return this.getToken(LoginParser.CONTIENE, 0);
	};

	EXISTE() {
	    return this.getToken(LoginParser.EXISTE, 0);
	};

	DEBE() {
	    return this.getToken(LoginParser.DEBE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LoginListener ) {
	        listener.enterEstado(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LoginListener ) {
	        listener.exitEstado(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LoginVisitor ) {
	        return visitor.visitEstado(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LoginParser.RULE_valor;
    }

	TEXTO() {
	    return this.getToken(LoginParser.TEXTO, 0);
	};

	NUMERO() {
	    return this.getToken(LoginParser.NUMERO, 0);
	};

	BOOLEANO() {
	    return this.getToken(LoginParser.BOOLEANO, 0);
	};

	VARIABLE() {
	    return this.getToken(LoginParser.VARIABLE, 0);
	};

	lista() {
	    return this.getTypedRuleContext(ListaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LoginListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LoginListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LoginVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LoginParser.RULE_lista;
    }

	valor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValorContext);
	    } else {
	        return this.getTypedRuleContext(ValorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LoginListener ) {
	        listener.enterLista(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LoginListener ) {
	        listener.exitLista(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LoginVisitor ) {
	        return visitor.visitLista(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




LoginParser.TestSuiteContext = TestSuiteContext; 
LoginParser.PruebaContext = PruebaContext; 
LoginParser.PasoContext = PasoContext; 
LoginParser.ObjetoContext = ObjetoContext; 
LoginParser.EstadoContext = EstadoContext; 
LoginParser.ValorContext = ValorContext; 
LoginParser.ListaContext = ListaContext; 
