        function FunctionA(){
        let people = ["Greg", "Mary", "Devon", "James"];

        let text = "";

        for (i = 0; i < people.length; i++){
            text += people[i] + "<br>";
            document.getElementById("demo").innerHTML = text;
        }
        }
        function FunctionB(){
            let people = ["Greg", "Mary", "Devon", "James"];
            people.shift();
            document.getElementById("demob").innerHTML = people;
        }
        function FunctionC(){
            let people = ["Greg", "Mary", "Devon", "James"];
            people.pop();
            document.getElementById("democ").innerHTML = people;
        }
        function FunctionD(){
            let people = ["Greg", "Mary", "Devon", "James"];
            people.splice(0,0,"Matt");
            document.getElementById("demod").innerHTML = people;
        }
        function FunctionE(){
            let people = ["Greg", "Mary", "Devon", "James"];
            people.push("Chau");
            document.getElementById("demoe").innerHTML = people;
        }
        function FunctionF(){
            let people = ["Greg", "Mary", "Devon", "James"];
            for (i = 0; i < people.length; i++){
                if (people[i] === "Mary"){
                    document.getElementById("demof").innerHTML = people[i] ;
                    break;
                }
            }
        }
        function FunctionG(){
            let people = ["Greg", "Mary", "Devon", "James"];
            copy_people = people.slice();
            var i = 1;
            copy_people.splice(i, 1);
            document.getElementById("demog").innerHTML = copy_people;
        }
        function FunctionH(){
            let people = ["Greg", "Mary", "Devon", "James"];
            document.getElementById("demoh").innerHTML = people.indexOf("Mary");
        }
        function FunctionI(){
            let people = ["Greg", "Mary", "Devon", "James"];
            document.getElementById("demoi").innerHTML = people.indexOf("Foo");
        }
        function FunctionJ(){
            let people = ["Greg", "Mary", "Devon", "James"];
            people.splice(2,1,"Elizabeth","Artie");

            document.getElementById("demoj").innerHTML = people;
        }
        function FunctionK(){
            let people = ["Greg", "Mary", "Devon", "James"];
            var Bob = ["Bob"];
            var withBob = people.concat(Bob);
            document.getElementById("demok").innerHTML = withBob;
        }




    