const Engineer = require('../lib/Engineer')

test ("Creates a new engineer team member", () => {
    const engineerTest = new Engineer('Paige', 18, 'paige@email.com', 'PaigeWing')

    expect(engineerTest.name).toEqual('Paige');
    expect(engineerTest.id).toEqual(18);
    expect(engineerTest.email).toEqual('paige@email.com');
    expect(engineerTest.github).toEqual('PaigeWing');
    expect(engineerTest.getRole()).toEqual('Engineer');
});