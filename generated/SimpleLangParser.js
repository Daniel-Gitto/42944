// Generated from c://Programacion//Analizador Lexico//ssl-antlr-calculator//SimpleLang.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import SimpleLangListener from './SimpleLangListener.js';
import SimpleLangVisitor from './SimpleLangVisitor.js';

const serializedATN = [4,1,13,56,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,4,0,12,8,0,11,0,12,0,13,1,1,1,1,1,1,1,1,1,1,3,1,21,8,1,1,2,1,2,1,2,1,
2,3,2,27,8,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,
43,8,4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,51,8,4,10,4,12,4,54,9,4,1,4,0,1,8,5,0,
2,4,6,8,0,3,1,0,3,4,1,0,7,8,1,0,9,10,58,0,11,1,0,0,0,2,20,1,0,0,0,4,22,1,
0,0,0,6,30,1,0,0,0,8,42,1,0,0,0,10,12,3,2,1,0,11,10,1,0,0,0,12,13,1,0,0,
0,13,11,1,0,0,0,13,14,1,0,0,0,14,1,1,0,0,0,15,21,3,4,2,0,16,21,3,6,3,0,17,
18,3,8,4,0,18,19,5,5,0,0,19,21,1,0,0,0,20,15,1,0,0,0,20,16,1,0,0,0,20,17,
1,0,0,0,21,3,1,0,0,0,22,23,7,0,0,0,23,26,5,11,0,0,24,25,5,6,0,0,25,27,3,
8,4,0,26,24,1,0,0,0,26,27,1,0,0,0,27,28,1,0,0,0,28,29,5,5,0,0,29,5,1,0,0,
0,30,31,5,11,0,0,31,32,5,6,0,0,32,33,3,8,4,0,33,34,5,5,0,0,34,7,1,0,0,0,
35,36,6,4,-1,0,36,37,5,1,0,0,37,38,3,8,4,0,38,39,5,2,0,0,39,43,1,0,0,0,40,
43,5,11,0,0,41,43,5,12,0,0,42,35,1,0,0,0,42,40,1,0,0,0,42,41,1,0,0,0,43,
52,1,0,0,0,44,45,10,5,0,0,45,46,7,1,0,0,46,51,3,8,4,6,47,48,10,4,0,0,48,
49,7,2,0,0,49,51,3,8,4,5,50,44,1,0,0,0,50,47,1,0,0,0,51,54,1,0,0,0,52,50,
1,0,0,0,52,53,1,0,0,0,53,9,1,0,0,0,54,52,1,0,0,0,6,13,20,26,42,50,52];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SimpleLangParser extends antlr4.Parser {

    static grammarFileName = "SimpleLang.g4";
    static literalNames = [ null, "'('", "')'", "'let'", "'var'", "';'", 
                            "'='", "'*'", "'/'", "'+'", "'-'" ];
    static symbolicNames = [ null, null, null, "LET", "VAR", "SEMI", "ASSIGN", 
                             "MUL", "DIV", "ADD", "SUB", "ID", "NUMBER", 
                             "WS" ];
    static ruleNames = [ "prog", "stat", "decl", "assign", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SimpleLangParser.ruleNames;
        this.literalNames = SimpleLangParser.literalNames;
        this.symbolicNames = SimpleLangParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 4:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 5);
    		case 1:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SimpleLangParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 11; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 10;
	            this.stat();
	            this.state = 13; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 6170) !== 0));
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



	stat() {
	    let localctx = new StatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SimpleLangParser.RULE_stat);
	    try {
	        this.state = 20;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 15;
	            this.decl();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 16;
	            this.assign();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 17;
	            this.expr(0);
	            this.state = 18;
	            this.match(SimpleLangParser.SEMI);
	            break;

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



	decl() {
	    let localctx = new DeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SimpleLangParser.RULE_decl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        _la = this._input.LA(1);
	        if(!(_la===3 || _la===4)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 23;
	        this.match(SimpleLangParser.ID);
	        this.state = 26;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 24;
	            this.match(SimpleLangParser.ASSIGN);
	            this.state = 25;
	            this.expr(0);
	        }

	        this.state = 28;
	        this.match(SimpleLangParser.SEMI);
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



	assign() {
	    let localctx = new AssignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SimpleLangParser.RULE_assign);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.match(SimpleLangParser.ID);
	        this.state = 31;
	        this.match(SimpleLangParser.ASSIGN);
	        this.state = 32;
	        this.expr(0);
	        this.state = 33;
	        this.match(SimpleLangParser.SEMI);
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


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 8;
	    this.enterRecursionRule(localctx, 8, SimpleLangParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            localctx = new ParensContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 36;
	            this.match(SimpleLangParser.T__0);
	            this.state = 37;
	            this.expr(0);
	            this.state = 38;
	            this.match(SimpleLangParser.T__1);
	            break;
	        case 11:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 40;
	            this.match(SimpleLangParser.ID);
	            break;
	        case 12:
	            localctx = new NumberContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 41;
	            this.match(SimpleLangParser.NUMBER);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 52;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 50;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulDivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, SimpleLangParser.RULE_expr);
	                    this.state = 44;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 45;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===7 || _la===8)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 46;
	                    this.expr(6);
	                    break;

	                case 2:
	                    localctx = new AddSubContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, SimpleLangParser.RULE_expr);
	                    this.state = 47;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 48;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===9 || _la===10)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 49;
	                    this.expr(5);
	                    break;

	                } 
	            }
	            this.state = 54;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

SimpleLangParser.EOF = antlr4.Token.EOF;
SimpleLangParser.T__0 = 1;
SimpleLangParser.T__1 = 2;
SimpleLangParser.LET = 3;
SimpleLangParser.VAR = 4;
SimpleLangParser.SEMI = 5;
SimpleLangParser.ASSIGN = 6;
SimpleLangParser.MUL = 7;
SimpleLangParser.DIV = 8;
SimpleLangParser.ADD = 9;
SimpleLangParser.SUB = 10;
SimpleLangParser.ID = 11;
SimpleLangParser.NUMBER = 12;
SimpleLangParser.WS = 13;

SimpleLangParser.RULE_prog = 0;
SimpleLangParser.RULE_stat = 1;
SimpleLangParser.RULE_decl = 2;
SimpleLangParser.RULE_assign = 3;
SimpleLangParser.RULE_expr = 4;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_prog;
    }

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_stat;
    }

	decl() {
	    return this.getTypedRuleContext(DeclContext,0);
	};

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	SEMI() {
	    return this.getToken(SimpleLangParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_decl;
    }

	ID() {
	    return this.getToken(SimpleLangParser.ID, 0);
	};

	SEMI() {
	    return this.getToken(SimpleLangParser.SEMI, 0);
	};

	LET() {
	    return this.getToken(SimpleLangParser.LET, 0);
	};

	VAR() {
	    return this.getToken(SimpleLangParser.VAR, 0);
	};

	ASSIGN() {
	    return this.getToken(SimpleLangParser.ASSIGN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_assign;
    }

	ID() {
	    return this.getToken(SimpleLangParser.ID, 0);
	};

	ASSIGN() {
	    return this.getToken(SimpleLangParser.ASSIGN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	SEMI() {
	    return this.getToken(SimpleLangParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterAssign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitAssign(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class NumberContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(SimpleLangParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitNumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SimpleLangParser.NumberContext = NumberContext;

class MulDivContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	MUL() {
	    return this.getToken(SimpleLangParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(SimpleLangParser.DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterMulDiv(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitMulDiv(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitMulDiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SimpleLangParser.MulDivContext = MulDivContext;

class AddSubContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	ADD() {
	    return this.getToken(SimpleLangParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(SimpleLangParser.SUB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterAddSub(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitAddSub(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitAddSub(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SimpleLangParser.AddSubContext = AddSubContext;

class ParensContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterParens(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitParens(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitParens(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SimpleLangParser.ParensContext = ParensContext;

class IdContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(SimpleLangParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitId(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SimpleLangParser.IdContext = IdContext;


SimpleLangParser.ProgContext = ProgContext; 
SimpleLangParser.StatContext = StatContext; 
SimpleLangParser.DeclContext = DeclContext; 
SimpleLangParser.AssignContext = AssignContext; 
SimpleLangParser.ExprContext = ExprContext; 
