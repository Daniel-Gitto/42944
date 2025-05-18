grammar Login;


//Gramatica

testSuite
    : prueba* 
    ;

prueba
    : 'prueba' TEXTO LLAVE_ABRE paso* LLAVE_CIERRA
    ;

paso
    : ('dado' | 'cuando' | 'entonces') objeto estado valor ('y' valor)* NEWLINE
    ;

objeto
    : IDENTIFICADOR ('.' IDENTIFICADOR)*
    ;

estado
    : 'es'
    | 'no es'
    | 'contiene'
    | 'existe'
    | 'debe'
    ;

valor
    : TEXTO
    | NUMERO
    | BOOLEANO
    | VARIABLE
    | lista
    ;

lista
    : '[' valor (',' valor)* ']'
    ;

//Tokens
PRUEBA        : 'prueba';
DADO          : 'dado';
CUANDO        : 'cuando';
ENTONCES      : 'entonces';
Y             : 'y';
ES            : 'es';
NOES          : 'noes';
CONTIENE      : 'contiene';
EXISTE        : 'existe';
DEBE          : 'debe';
LLAVE_ABRE    : '{';
LLAVE_CIERRA  : '}';

TEXTO         : '"' (~["\r\n])* '"' ;
NUMERO        : [0-9]+ ;
BOOLEANO      : 'verdadero' | 'falso' ;
VARIABLE      : '$' IDENTIFICADOR ;
IDENTIFICADOR : [a-zA-Z_][a-zA-Z0-9_]* ;

NEWLINE       : '\r'? '\n' ;
WS            : [ \t]+ -> skip ;
