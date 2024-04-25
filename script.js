let date = new Date()

let weekDay = ["Sun", "Mon", "Tue", "Web", "Thu", "Fri", "Sat"]
let = months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

document.getElementById('date').innerHTML = date.getDate()
document.getElementById('day').innerHTML = weekDay[date.getDay()]
document.getElementById('month').innerHTML = months[date.getMonth()]
document.getElementById('year').innerHTML = date.getFullYear()