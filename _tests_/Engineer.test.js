const Engineer = require('../lib/engineer');

describe('Engineer', () =>  {
    describe('Functionality', () => {
        it("This should hold the basic information of an engineer", () => {
            
            const name = "Marshall";
            const id = 12345;
            const email = "test@email.com";


            const newEngineer = new Engineer(name, id, email);

            const role = "Engineer";

            expect(newEngineer.getName()).toEqual(name);
            expect(newEngineer.getId()).toEqual(id);
            expect(newEngineer.getEmail()).toEqual(email);
            expect(newEngineer.getRole()).toEqual(role);
        });
    })
})