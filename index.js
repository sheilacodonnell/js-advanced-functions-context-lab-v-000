/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(record) {
  return {
    firstName: record[0],
    familyName: record[1],
    title: record[2],
    payPerHour: record[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployeeRecords(records) {
  return records.map(record => createEmployeeRecord(record) )
}

// function createTimeInEvent(record, dateStamp) {
//   let dateAndHour = dateStamp.split(" ")
//   record.timeInEvents.push({
//     type: "TimeIn",
//     date: dateAndHour[0],
//     hour: parseInt(dateAndHour[1])
//   })
//   return record
// }

// function createTimeOutEvent(record, dateStamp) {
//   let dateAndHour = dateStamp.split(" ")
//   record.timeOutEvents.push({
//     type: "TimeOut",
//     date: dateAndHour[0],
//     hour: parseInt(dateAndHour[1])
//   })
//   return record
// }

// function hoursWorkedOnDate(record, date) {
//   let outHour = record.timeOutEvents.find(element => element.date === date).hour
//   let inHour = record.timeInEvents.find(element => element.date === date).hour
//   return (outHour - inHour) /100
// }

// function wagesEarnedOnDate(record, date) {
//   let hours = hoursWorkedOnDate(record, date)
//   return hours * record.payPerHour
// }


// function calculatePayroll(records) {
//   return records.reduce((total, employee) => total + allWagesFor(employee), 0)
// }

// function findEmployeeByFirstName(srcArray, firstName) {
//     return srcArray.find(employee => employee.firstName == firstName)
// }