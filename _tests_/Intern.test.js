const Intern = require('../lib/intern');

describe('Intern', () =>  {
    describe('Functionality', () => {
        it("This should hold the basic information of an intern", () => {
            
            const name = "Marshall";
            const id = 12345;
            const email = "test@email.com";


            const newIntern = new Intern(name, id, email);
            
            const role = "Intern";

            expect(newIntern.getName()).toEqual(name);
            expect(newIntern.getId()).toEqual(id);
            expect(newIntern.getEmail()).toEqual(email);
            expect(newIntern.getRole()).toEqual(role);
        });
    })
})