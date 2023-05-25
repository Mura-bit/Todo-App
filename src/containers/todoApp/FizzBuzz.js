
const FizzBuzz = () => {


    let fizBuzz = function (number) {
        let arr = [];
        let counter = 1;
        
        while (counter <= number) {
            if (counter % 3 == 0 && counter % 5 == 0) {
                arr.push("FizzBuzz");
            } else if (counter % 5 == 0) {
                arr.push("Buzz");
            } else if (counter % 3 == 0) {
                arr.push("Fizz");
            } else {
                arr.push(counter.toString());
            }
            counter++;
        }
        return fizBuzz;
}

    return (
        <h1>hi</h1>
    )
}

export { FizzBuzz };

