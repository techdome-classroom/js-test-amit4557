const getTotalIsles = function (grid) {
  // Function to perform DFS and mark connected land as visited
  function dfs(r, c) {
    // Base cases for recursion
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] === 'W') {
      return;
    }
    // Mark the current cell as visited
    grid[r][c] = 'W';
    // Explore all four directions
    dfs(r + 1, c); // Down
    dfs(r - 1, c); // Up
    dfs(r, c + 1); // Right
    dfs(r, c - 1); // Left
  }

  // Function to count the number of islands
  function countIslands() {
    if (!grid || grid.length === 0) return 0;

    let numIslands = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r][c] === 'L') {
          numIslands++;
          dfs(r, c);
        }
      }
    }

    return numIslands;
  }

  return countIslands();
};

// Example usage
const dispatch1 = [
  ["L", "L", "L", "L", "W"],
  ["L", "L", "W", "L", "W"],
  ["L", "L", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
];

const dispatch2 = [
  ["L", "L", "W", "W", "W"],
  ["L", "L", "W", "W", "W"],
  ["W", "W", "L", "W", "W"],
  ["W", "W", "W", "L", "L"],
];

console.log(getTotalIsles(dispatch1)); // Output: 1
console.log(getTotalIsles(dispatch2)); // Output: 3

module.exports = getTotalIsles;
