//this is a module file, it is not meant to be run directly, but to be imported by other files

//exporting a function that returns the current date in a specific format   

export function hello() {
    console.log("Hello from the date12 module!");
}
// You can export multiple functions, variables, or classes from a module
// For example, you could also export a variable like this:
// export const myVariable = "This is a variable from the date12 module";       
// To use the exported function or variable in another file, you need to import it using the import statement
// For example, if you want to import the hello function from this module, you can do it like this:
// import { hello } from './date12_module.js';       
// Then you can call the hello function in your code like this:
// hello();       
// Remember to use the correct path to the module file when importing, and to include the .js extension if necessary

//script linking will be done in the end 
//so in script we export the index.js file and then in index.js we will import the date12_module.js file and use the hello function to test if it works correctly       
 

//example dom 
 <script>

        //1️⃣ CLICK EVENT
        
        document.getElementById("clickBtn").addEventListener("click", function() {
           document.getElementById("clickText").innerText = "Button was clicked!";
        });

        // 2️⃣ MOUSEOVER & MOUSEOUT EVENT
        let box = document.getElementById("hoverBox");

        box.addEventListener("mouseover", function() {
            box.style.backgroundColor = "#ffd54f";
            box.innerText = "Mouse is Over Me!";
        });

        box.addEventListener("mouseout", function() {
            box.style.backgroundColor = "#e3f2fd";
            box.innerText = "Hover Over Me";
        });

        // 3️⃣ KEYDOWN EVENT
        document.getElementById("keyInput").addEventListener("keydown", function(event) {
            document.getElementById("keyText").innerText =
                "You pressed: " + event.key;
        });

    </script>