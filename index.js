// code your solution here
function saturdayFun(hobby = 'roller-skate') {
    return `This Saturday, I want to ${hobby}!`
}

function mondayWork(job = 'go to the office') {
    return `This Monday, I will ${job}.`
}

let wrapAdjective = function(style="*") {
    return function(adjective="special") {
    return `You are ${style}${adjective}${style}!`
    }
}



