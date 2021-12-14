
const headquarters = 42;
const feet = 264;

function distanceFromHqInBlocks (num){

    if (num > 42){
    return num - headquarters;
    }else if (num < 42){
        return headquarters - num;
    }

}

function distanceFromHqInFeet (num){
    return distanceFromHqInBlocks(num) * feet;
  
}
function distanceTravelledInFeet (headquarters, num2){
  if (num2 > headquarters){
      return (num2 - headquarters)*feet;

  }else{
  return (headquarters - num2)*feet;
  }
}

function calculatesFarePrice(start, destination){
  if (distanceTravelledInFeet(start, destination) <= 400){
      return 0; }
      else if (distanceTravelledInFeet(start,destination) < 2000 ){
          return .02 * (distanceTravelledInFeet(start,destination) - 400);
      }
      else if (distanceTravelledInFeet(start,destination) > 2000 && distanceTravelledInFeet(start,destination) < 2500){
          return 25;
      }

  else if (distanceTravelledInFeet(start,destination) > 2500) { return 'cannot travel that far';
}
}

function calculatesFarePrice(start, destination){
  let calculatesFarePrice;
  let calculatesFeet= distanceTravelledInFeet(start, destination);
 if (calculatesFeet < 400 ){
      return calculatesFarePrice = 0;
 } else if (calculatesFeet > 400 && calculatesFeet < 2000){
     calculatesFarePrice = calculatesFeet - 400;
     return (calculatesFarePrice * 0.02);
 }
 else if (calculatesFeet > 2000 && calculatesFeet < 2499){
     calculatesFarePrice = 25;
     return calculatesFarePrice;
 }
 else if (calculatesFeet > 2500){
     return 'cannot travel that far';
 }

}

