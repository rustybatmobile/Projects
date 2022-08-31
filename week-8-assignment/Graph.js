class MyGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVextex(value) {
        if(!(value in this.adjacencyList)) {
            this.adjacencyList[value] = [];
        }
    }

    addEdge(val1, val2) {
        if(!(val1 in this.adjacencyList)) {
            this.adjacencyList[val1] = []
        }

        if(!(val2 in this.adjacencyList)) {
            this.adjacencyList[val2] = []
        }

        this.adjacencyList[val1].push(val2);
        this.adjacencyList[val2].push(val1);
    }

    removeVertex(val) {
        if(!(val in this.adjacencyList)) {
            throw "Vertex doesn't exist"
        }
        const neighbours = this.adjacencyList[val];
        neighbours.forEach(neighbour => {
            const index = this.adjacencyList[neighbour].findIndex(value => value === val);
            this.adjacencyList[neighbour].splice(index, 1);
        })

        delete this.adjacencyList[val];

        return this.adjacencyList;
    }

    removeEdge(val1, val2) {
        if(!(val1 in this.adjacencyList)) {
            throw "Vertex not present"
        }
        if(!(val2 in this.adjacencyList)) {
            throw "Vertex not present"
        }

        this.adjacencyList[val1].forEach((vertex, index) => {
            if(vertex === val2) {
                this.adjacencyList[val1].splice(index, 1);
                return
            }
        })

        this.adjacencyList[val2].forEach((vertex, index) => {
            if(vertex === val1) {
                this.adjacencyList[val2].splice(index, 1)
                return
            }
        })
        return this.adjacencyList
    }

    log() {
        console.log(this.adjacencyList);
        return this.adjacencyList;
    }
}

const graph = new MyGraph();

graph.addVextex("a");
graph.addVextex("b");
graph.addVextex("c");
graph.addEdge("a", "d");
graph.addEdge("e", "d");
graph.removeEdge("d", "b")
const adjacencyList = graph.log();

//this one is for undirected graph: 

function depthFirstSearchForUndirectedGraph(start, adjacencyList) {
    const set = new Set();
    const stack = [start];
    set.add(start);

    while( stack.length > 0 ) {
        const value = stack.pop();
        console.log(value);
        adjacencyList[value].forEach(vertex => {
            if(!set.has(vertex)) {
                set.add(vertex);
                stack.push(vertex);
            }
        })
    }
}

depthFirstSearchForUndirectedGraph("a", adjacencyList);


module.exports = {
    MyGraph
}


//this one is for a directed graph
function depthFirstSearch(start, adjacencyList) {
    const stack = [start];

    while(stack.length > 0) {
        const value = stack.pop();
        console.log(value);
        adjacencyList[value].forEach(vertex => {
            stack.push(vertex)
        })
    }
}

// depthFirstSearch("a", adjacencyList);


// const arr = ["a", "b", "c", "d", "e"]

// function removeElement(arr, value) {
//     arr.forEach((item, index) => {
//         if(item === value) {
//             for(let i = index; i < arr.length - 1; i++) {
//                 arr[i] = arr[i+1];
//             }
//             arr.pop();
//             return
//         }
        
//     })
// }

// removeElement(arr, "d");
