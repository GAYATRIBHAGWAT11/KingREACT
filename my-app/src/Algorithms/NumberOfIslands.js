// given a grid map of 1's (land) and 0's (water) count the number os islands,
// an island is surrounded by water and is formed by connecting lands horizontally or vertivcally
// you may assume all 4 edged of the grid are sll surrounded by water


// 1 uparse , side se  other one se juda hona chahie then only it forms ilans

// for e.g=> 
// 11000       110
// 11000       110         
// 00100  =>   00        1
// 00011       000      11
// so here we have 3 island

const numIslands=(grid)=>{
    let countIslands=0;

    for(let rowIndex in grid){
        for(let colIndex in grid[rowIndex]){
            if(grid[rowIndex][colIndex]==='1'){
                countIslands++;

                teraform(parseInt(rowIndex),parseInt(colIndex),grid)

            }
        }
    }
    return countIslands;
}
// convert stuff around us to water

const teraform=(rowIn,colIn,grid)=>{
    if(grid[rowIn]===undefined || grid[rowIn][colIn]===undefined || grid[rowIn][colIn]==='0') return;
    grid[rowIn][colIn]='0';
    teraform(rowIn+1,colIn,grid)
    teraform(rowIn-1,colIn,grid)
    teraform(rowIn,colIn+1,grid)
    teraform(rowIn,colIn-1,grid)
}


