let day = document.getElementById("day")
let month = document.getElementById("month")
let year = document.getElementById("year")

function calc() {
    // Create Date Object
    let date = new Date()
    let currentDay = date.getDate()
    let currentMonth = date.getMonth() + 1
    let currentYear = date.getFullYear()
    // Required Fields
    document.querySelectorAll("input").forEach(element => {
        if (element.value === "") {
            let error = document.createElement("span")
            error.innerText = "The Field Is Required"
            error.classList.add("error-text")
            if (element.nextElementSibling) {
                return
            }
            element.parentElement.append(error)
            element.classList.toggle("error")
        } else {
            if (element.nextElementSibling) {
                element.parentElement.removeChild(element.nextElementSibling)
                element.classList.toggle("error")
            }
        }
    })
    // Not Valid Day
    let dayError = document.createElement("span")
    if (day.value > 31 || isNaN(day.value)) {
        dayError.innerText = "Must be a valid day"
        dayError.classList.add("error-text")
        if (day.nextElementSibling) {
            console.log("");
        }
        day.parentElement.append(dayError)
        day.classList.toggle("error")
    } else {
        if (day.nextElementSibling === dayError) {
            day.parentElement.removeChild(day.nextElementSibling)
            day.classList.toggle("error")
        }
    }
    // Not Valid Month
    let monthError = document.createElement("span")
    if (month.value > 12 || isNaN(month.value)) {
        monthError.innerText = "Must be a valid month"
        monthError.classList.add("error-text")
        if (month.nextElementSibling) {
            console.log("");
        }
        month.parentElement.append(monthError)
        month.classList.toggle("error")
    } else {
        if (month.nextElementSibling === monthError) {
            month.parentElement.removeChild(month.nextElementSibling)
            month.classList.toggle("error")
        }
    }
    // Not Valid Year
    let yearError = document.createElement("span")
    if (year.value >= currentYear && month.value >= currentMonth && day.value >= currentDay || isNaN(year.value)) {
        yearError.innerText = "Must be in the past"
        yearError.classList.add("error-text")
        if (year.nextElementSibling) {
            console.log("");
        }
        year.parentElement.append(yearError)
        year.classList.toggle("error")
    } else {
        if (year.nextElementSibling === yearError) {
            year.parentElement.removeChild(year.nextElementSibling)
            year.classList.toggle("error")
        }
    }
    // Calculate Date
    let yearAffiche = document.getElementById("yRes")
    let monthAffiche = document.getElementById("mRes")
    let dayAffiche = document.getElementById("dRes")
    if (year.nextElementSibling || month.nextElementSibling || day.nextElementSibling) {
        yearAffiche.innerText = "--"
        monthAffiche.innerText = "--"
        dayAffiche.innerText = "--"
    } else {
        let countAge = (year.value * 365.25) + (month.value * 30.44) + parseInt(day.value)
        let todayAge = (currentYear * 365.25) + (currentMonth * 30.44) + currentDay
        let totalAge = todayAge - countAge
        let yearAge = Math.trunc(totalAge / 365.25)
        let remainingDays = totalAge - (yearAge * 365.25)
        let monthAge = Math.trunc(remainingDays / 30.44)
        let dayAge = Math.trunc(remainingDays - (monthAge * 30.44))
        yearAffiche.innerText = yearAge
        monthAffiche.innerText = monthAge
        dayAffiche.innerText = dayAge
    }
}