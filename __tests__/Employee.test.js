const Employee = require('../lib/Employee')

test ("Creates a new employee team member", () => {
    const employeeTest = new Employee('Paige', 18, 'paige@email.com')

    expect(employeeTest.name).toEqual('Paige');
    expect(employeeTest.id).toEqual(18);
    expect(employeeTest.email).toEqual('paige@email.com');
    expect(employeeTest.getRole()).toEqual('Employee');
});