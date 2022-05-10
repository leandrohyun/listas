/*
Será usada para armazenar os prédios de uma rua com apenas uma saída.
*/
class Node{
    constructor(data, next){
        this.data = data;
        this.next = next;
    }
    getData(){
        return this.data;
    }
}

class PrediosRuaA{
    init(){
        this.head = new Node("Prédio 1", null);

        var nodeB = new Node ("Prédio 2", null);
        this.head.next = nodeB;

        var nodeC = new Node ("Prédio 3", null);
        nodeB.next = nodeC;

        this.tail = new Node ("Prédio 4", null);
        nodeC.next = this.tail;
    }
}
