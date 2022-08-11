const Manager = require('../lib/manager');

describe('Manager', () =>  {
    describe('Functionality', () => {
        it("This should hold the basic information of an manager", () => {
            
            const name = "Marshall";
            const id = 12345;
            const email = "test@email.com";


            const newManager = new Manager(name, id, email);
            
            const role = "Manager";

            expect(newManager.getName()).toEqual(name);
            expect(newManager.getId()).toEqual(id);
            expect(newManager.getEmail()).toEqual(email);
            expect(newManager.getRole()).toEqual(role);
        });
    })
})