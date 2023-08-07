/* Your Code Here */



 // Function create an employee record
const createEmployeeRecord = (employeeData) => {
    const [firstName, familyName, title, payPerHour] = employeeData;
    return {
      firstName,
      familyName,
      title,
      payPerHour,
      timeInEvents: [],
      timeOutEvents: []
    };
  };
  
  // Function create employee records from an array of arrays
  const createEmployeeRecords = (employeesData) => {
    return employeesData.map((employeeData) => createEmployeeRecord(employeeData));
  };
  
  // Function add a time-in event to an employee's record
  const createTimeInEvent = function (dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    this.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour),
      date
    });
    return this;
  };
  
  // Function add a time-out event to an employee's record
  const createTimeOutEvent = function (dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    this.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour),
      date
    });
    return this;
  };
  
  // Function calculate hours worked on a specific date
  const hoursWorkedOnDate = function (date) {
    const timeInEvent = this.timeInEvents.find(event => event.date === date);
    const timeOutEvent = this.timeOutEvents.find(event => event.date === date);
    const startTime = timeInEvent.hour;
    const endTime = timeOutEvent.hour;
    return (endTime - startTime) / 100;
  };
  
  // Function calculate wages earned on a specific date
  const wagesEarnedOnDate = function (date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
  };
  
  // Function to calculate total pay owed to an employee for all dates worked
  const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(event => event.date);
    return eligibleDates.reduce((totalWages, date) => totalWages + wagesEarnedOnDate.call(this, date), 0);
  };
  
  // Funct to find an employee by their first name
  const findEmployeeByFirstName = (srcArray, firstName) => {
    return srcArray.find(employee => employee.firstName === firstName);
  };
  
  // Function to calculate total pay owed to all employees all dates worked
  const calculatePayroll = (employeeRecords) => {
    return employeeRecords.reduce((totalPay, employee) => totalPay + allWagesFor.call(employee), 0);
  };
  
  // Export the functions
  module.exports = {
    createEmployeeRecord,
    createEmployeeRecords,
    createTimeInEvent,
    createTimeOutEvent,
    hoursWorkedOnDate,
    wagesEarnedOnDate,
    allWagesFor,
    findEmployeeByFirstName,
    calculatePayroll
  };
  



