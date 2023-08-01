const distanceFromHqInBlocks = (num) => {
    if (num > 42) {
        return num - 42
    } else {
        return 42 - num
    }
}

const distanceFromHqInFeet = (num) => {
    return distanceFromHqInBlocks(num) * 264
}

const distanceTravelledInFeet = (num1, num2) => {
    if (num1 > num2) {
        return (num1 - num2) * 264
    } else {
        return (num2 - num1) * 264
    }
}

const calculatesFarePrice = (num1, num2) => {
    let num 

    if (num1 > num2) {
        num = (num1 - num2) * 264
    } else {
        num = (num2 - num1) * 264
    }

    if (num <= 400) {
        return 0

      } else if (num > 2500) {
        return 'cannot travel that far'
    
      } else if (num > 2000) {
        return 25
    
      } else if (num <= 2000) {
        return (num - 400) * 0.02

      }
}