let count = 0;

function q6() {
    console.clear();

    function increment() {
        count++;
        console.log("Incremented:", count);

        function inner() {
            console.log("Inner function sees count:", count);
        }
        inner();
    }

    function decrement() {
        count--;
        console.log("Decremented:", count);
    }

    increment();
    increment();
    decrement();
}
