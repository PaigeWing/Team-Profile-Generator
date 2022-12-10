const Manager = require('../lib/Manager')

test ("Creates a new manager team member", () => {
    const managerTest = new Manager('Paige', 18, 'paige@email.com', 204)

    expect(managerTest.name).toEqual('Paige');
    expect(managerTest.id).toEqual(18);
    expect(managerTest.email).toEqual('paige@email.com');
    expect(managerTest.officeNumber).toEqual(204);
    expect(managerTest.getRole()).toEqual('Manager');
});