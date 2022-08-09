


//factory function
function creatCircle(radius){
    return{
        radius,
        draw : function (){
            console.log('draw')
        }
    };
}

const circle = creatCircle(1)

// Constructor function
function Circle(radius){
    this.radius = radius;

    this.draw = function () {
        console.log("draw")
    }

    let defaultLocation = {x:0,y:0};
    Object.defineProperties(this,'defaultLocation',{
        get: function (){
            return defaultLocation
        },
        set: function (value){
            if(value.x || !value.y)
                throw  new Error("Invalid location")
        }
    })
}








