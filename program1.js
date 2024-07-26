const getTotalIsles = function (grid) {
  function dfs(r, c) {
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] === 'W') {
      return;
    }
    grid[r][c] = 'W';
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

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

const dispatch1 = [
  ["L", "L", "L", "L", "W"],
  ["L", "L", "W", "L", "W"],
  ["L", "L", "W", "W", "W"],
  ["W", "W", "W",
