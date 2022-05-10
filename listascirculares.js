class Node{
    constructor(data, next){
        this.data=data;
        this.next=next;
    }
    getData(){
        return this.data;
    }
}

class PrediosQuarteiraoA{
    init(){
        this.head = new Node ("Prédio Comercial 1");
        this.head.next = null;
        
        var nodeB = new Node ("Prédio Comercial 2");
        nodeB.next = null;
        this.head.next = nodeB;

        var nodeC = new Node ("Predio Comercial 3");
        nodeC.next = null;
        nodeB.next = nodeC;

        this.tail = new Node ("Prédio Comercial 4");
        this.tail.next = this.head;
        nodeC.next - this.tail;
    }
}

function print(head){
    var p = head;
    do {
        var data = p.getData();
        document.write(data +"->");
        p= p.next;
    }while(p !=head);
    var data = p.getData();
    document.write(data + "<br> <br>");
}