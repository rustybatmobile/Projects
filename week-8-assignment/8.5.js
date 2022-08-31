const truth = [[1,3],[2,3]];

function townJudge(truth, n) {
  const inDegree = [];
  const outDegree = [];

  //populating initial values so they can be incremented O(n)

  for(let i = 0 ; i < n; i++) {
    inDegree.push(0);
    outDegree.push(0);
  }

  //outdegrees is the amount of times i points to something else, and we keep track of that with each index being a person in the town
  //Conversely indegrees

  for(let i = 0; i < truth.length; i++) {
    outDegree[truth[i][0] - 1]++;
    inDegree[truth[i][1] - 1]++;
  }

  //finally, we are checking if there exists a judge truth[i] that has n-1 indegrees and 0 outdegrees

  for(let i = 0; i < n; i++) {
    if(outDegree[i] === 0 && inDegree[i] === (n - 1)) {
      return i + 1;
    }
  }

  return -1

}

console.log(townJudge(truth, 3));