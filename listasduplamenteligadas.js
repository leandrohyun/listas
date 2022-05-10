/*
No cities skylines as listas duplamente ligadas serão utilizadas para gerenciar
os prédios em uma avenida entre dois cruzamentos já que por ter duas entradas e
saídas nesse local da avenida a contagem da lista pode começar por qualquer lado.
*/
class Node{
    constructor(data,prev,next){
        this.data=data;
        this.prev=prev;
        this.next=next;
    }
    getData(){
        return this.data;
    }
}

class PrediosAvenidaA{
    init(){
        head = New Node("Prédio Residencial"); 
        this.head.prev = null;
        this.head.next = null;

        nodeB = NeW Node("Prédio Comercial");

        nodeB.prev = this.head;
        nodeB.next = null;
        this.head.next = NodeB;

        nodeC = New Node("Escola");
        nodeC.prev = nodeB;
        nodeC.next = null;
        nodeB.next = nodeC;

        this.tail = New Node("Bombeiros");
        this.tail.prev = nodeC;
        this.tail.next = null;
        nodeC.next = this.tail;
    }
}

function print(Node){
    var p = Node;
    var end = null;
    while (p!=null){
        var data = p.getData();
        document.write(data + "->");
        p=p.prev;
    }
}

var PrediosAvenidaA = new PrediosAvenidaA();
PrediosAvenidaA.init();
PrediosAvenidaA.add(new Node("Estação de Metrô"))
print(PrediosAvenidaA.getHead())
