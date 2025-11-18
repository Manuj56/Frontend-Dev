let bonus = 5000;

function q1() {
    console.clear();

    function calculateSalary(isPermanent) {
        let salary = 40000;  

        if (isPermanent) {
            salary += bonus;  
        }

        console.log("Is Permanent:", isPermanent);
        console.log("Total Salary:", salary);
    }

    calculateSalary(true);
    calculateSalary(false);

    console.log("Global Bonus Still:", bonus); 
}
