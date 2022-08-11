const Employee = require('../lib/Employee.js');

describe('Employee', () =>  {
    describe('Functionality', () => {
        it("This should hold the basic information of an employee", () => {
            
            const name = "Marshall";
            const id = 12345;
            const email = "test@email.com";
            

            const newEmployee = new Employee(name, id, email);

            const role = "Employee";

            expect(newEmployee.getName()).toEqual(name);
            expect(newEmployee.getId()).toEqual(id);
            expect(newEmployee.getEmail()).toEqual(email);
            expect(newEmployee.getRole()).toEqual(role);
        });
    })
})