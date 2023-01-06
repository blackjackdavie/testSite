var canvas = document.querySelector('canvas');

canvas.width = 500;
canvas.height = 500;

var c = canvas.getContext('2d');

// filler for room objects
class Room 
{
    constructor({position})
    {
        this.position = position;
        this.width = 100;
        this.height = 100;
    }
    draw()
    {
        c.fillStyle = 'blue';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

class Corridor
{
    constructor({position})
    {
        this.position = position;
        this.width = 100;
        this.height = 100;
    }
    draw()
    {
        c.fillStyle = 'green';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

// generates the array
let level = [];
for (var i = 0; i < 5; i++){
    level[i]=[];
    for (var j = 0; j<5; j++)
    {
        level[i][j] = (Math.floor(Math.random()*2));
    }
}
console.log(level); // for debugging. prints initial randomized array. 

// itterare throug array and add 1 to every emty corridor that has an adjacent room

for (var i = 1; i <4; i++)
{
    for (var j = 1; j<4; j++)
    {
        if (level[i][j] == 0){
            if (level[i][j-1] == 1 && level[i][j+1] == 1 && level[i-1][j] == 1 && level[i+1][j] == 1)
            {
                level[i][j] += 4;
            }else if (level[i][j-1] == 1 && level[i][j+1] == 1 || level[i-1][j] == 1 && level[i+1][j] == 1)
            {
                level[i][j] +=2;
            }
        }
    }
}
console.log(level); // for debugging. prints new array.


// this will draw the map with each room. 
const rooms = [];
level.forEach((row, i)=>{
    row.forEach((column, j) => {
        switch (column) {
            case 1:
                    rooms.push(new Room({
                    position:{
                        x:100 *j,
                        y:100 *i
                    }
                })
            )
            break;
            case 2:
                    rooms.push(new Corridor({
                    position:{
                        X:100 *j,
                        y:100 *i
                    }
                })
            )
            break;
        }
    })
})

rooms.forEach((room)=>{
    room.draw();
})

console.log(rooms)