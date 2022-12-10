const Intern = require('../lib/Intern')

test ("Creates a new intern team member", () => {
    const internTest = new Intern('Paige', 18, 'paige@email.com', 'U of U')

    expect(internTest.name).toEqual('Paige');
    expect(internTest.id).toEqual(18);
    expect(internTest.email).toEqual('paige@email.com');
    expect(internTest.school).toEqual('U of U');
    expect(internTest.getRole()).toEqual('Intern');
});