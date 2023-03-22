// Code your solution in this file!
//const start = 42;
function distanceFromHqInBlocks(someValue){
    const start = 42
    return Math.abs(someValue - start)
}


function distanceFromHqInFeet(someValue){
    const start = 42
    return Math.abs(someValue - start) * 264
}


function distanceTravelledInFeet(startValue, finishValue){
    //let start = startValue
    //let finish = finishValue 
    //return Math.abs(start - finish) * 264
    return Math.abs(startValue - finishValue) * 264
}

function calculatesFarePrice(start, destination){
    let feetTraveled = Math.abs(start - destination) * 264;
    let fairPrice;    
    if (feetTraveled <= 400) {
        return fairPrice = 0;
    } else if (400 < feetTraveled && feetTraveled <= 2000) {
        return fairPrice = 2.56;
    } else if (2000 < feetTraveled && feetTraveled <= 2500) {
        return fairPrice = 25;  //use "&&"" instead of "< <" alone
    } else {
        return 'cannot travel that far';}
}     
    
    //return Math.abs(start - destination)


 /*if (feetTraveled <= 400) {fairPrice = 0
}else if (400 < feetTraveled <= 2000){fairPrice = 2.56
}else if (2000 < feetTraveled <= 2500){fairPrice = 25
}else {console.log('cannot travel that far')}  *******MUST USE "&&" see above"******
*/
/*function distanceFromHqInBlocks(destination){
        return destination > 42 ? destination - 42 : 42 - destination
     }

distanceFromHqInBlocks = destination
destinstion (43)



function distanceFromHqInFeet(destination) {
        //let blockInFeet = 264
        //return destination > 42 ? (destination - 42) * blockInFeet : (42 - destination) * blockInFeet
        return destination > 42 ? ((destination - 42) * 264) : ((42 - destination) * 264)
    }
distanceFromHqInFeet = destination
//blockInFeet (264)
destination (50)


function distanceFromHqInFeet(){

}


function distanceTravelledInFeet(){

}


function calculatesFarePrice(start, destination){

}


/*function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination)
    if (destination <= 400) 
    {return 0;}
    else if (distance >= 400 && distance < 2000)
    {return (distance - 400) * .02;}
    else if (distance > 2000 && distance <= 2500) {return 25;}
    else 
    return "cannot travel that far";
}*/
