function geek() {
    var obj = {
        name: 'peter', age: 25, salary: 3000
    };
    console.log("for(;;)");
    for (var i = 0; i <= 10; i++) {
        console.log(i + " ");
    }
    console.log("for..of");
    for (var _i = 0, _a = ['ha noi', 20.32, 3000]; _i < _a.length; _i++) {
        var i = _a[_i];
        console.log(i + " ");
    }
    console.log("for..in");
    for (var i in obj) {
        console.log(i + " " + obj[i]);
    }
}
geek();
