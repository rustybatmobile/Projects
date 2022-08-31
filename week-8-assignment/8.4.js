const edges = [
    [0,1],
    [0,2],
    [3,5],
    [5,4],
    [4,3]
]

function findPath(edges, start, dest) {

    const adjacencyList = createAdjacencyList(edges);
    const visited = new Set(); 
    const stack = [start];
    while(stack.length > 0) {
        const val = stack.pop();
        if(val === dest) {
            return true
        }
        const neighbours = adjacencyList[val];

        neighbours.forEach(neighbour => {
            if(!visited.has(neighbour)) {
                stack.push(neighbour);
                visited.add(neighbour);
            }
        })
    }

    return false;

}

console.log(findPath(edges, 4, 2));

function createAdjacencyList(edges) {
    const adjacencyList = {};
    edges.forEach(edge => {
    
        const [val1, val2] = edge;
        
        if(!(val1 in adjacencyList)) {
            adjacencyList[val1] = []
        }
        
        if(!(val2 in adjacencyList)) {
            adjacencyList[val2] = []
        }
    
        adjacencyList[val1].push(val2);
        adjacencyList[val2].push(val1);
    
    })
    return adjacencyList
}






