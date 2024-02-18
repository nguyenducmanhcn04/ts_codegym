function geek() {
    let obj = {
        name: 'peter', age: 25, salary:3000};
        console.log("for(;;)");
        for (let i = 0; i <= 10; i++) {
            console.log(i + " ");

        }
        console.log("for..of");
        for (let i of ['ha noi', 20.32, 3000]) {
            console.log(i + " ");
        }
        console.log("for..in")
        for (let i in obj) {
            console.log(i + " " + obj[i]);
        }
        
    }

geek();