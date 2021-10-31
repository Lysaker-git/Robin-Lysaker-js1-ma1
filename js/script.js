const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// QUESTION 1

const cat = [
    {
        complain: function () {
            console.log("Meow!");
        }
    }
];

// QUESTION 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated Heading";

// QUESTION 3

heading.style.fontSize = "2em";

// QUESTION 4

heading.classList.add("subheading");

// QUESTION 5

const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

paragraphs.forEach (function (p) {
    p.style.color = "red";
});

// ..or 

// paragraphs.forEach ((p) => {
//     p.style.color = "red";
// });

// ..or

// for (let i = 0; i < paragraphs.length; i++) {
//     paragraphs[i].style.color = "red";
// };

// QUESTION 6

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p>New Paragraph</p>`; //or "<p>New Paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// QUESTION 7

// Basic structure
function list (animals) {
    for (let i = 0; i < animals.length; i++) {
        console.log(animals[i].name);
    };
};

// or.. 
// Arrow Function with for loop
// let list = animals => {
//     for (let i = 0; i < animals.length; i++) {
//         console.log(animals[i].name);
//     };
// };

// ..or
// Arrow Function with forEach
// let list = animals => {
//     animals.forEach ((animal) => {
//         console.log(animal.name);
//     });
// };

list(cats);

// QUESTION 8


function createCats (cats) {
    
    let html = ""

    for (let i = 0; i < cats.length; i++) {
        let catName = cats[i].name;
        let catAge = cats[i].age;
        // checking if catAge is truthy
        if (!catAge) {
            // As i add labels in the HTML i skip the Age part of Age unknown
            catAge = "Unknown";
        };

        // Using template literal as its easier then concatenation
        html += `
            <div>
                <h5>Name: ${catName}</h5>
                <p>Age: ${catAge}</p>
            </div>
        `;
        // or.. 
        // html = html  + "<div><h5>Name: " + catName + "</h5><p>Age: " + catAge + "</p></div>";
        // html += "<div><h5>Name: " + catName + "</h5><p>Age: " + catAge + "</p></div>";
    };

    // ..or
    // cats.forEach ((cat) => {
    //     let catName = cat.name;
    //     let catAge = cat.age;

    //     if (!catAge) {
    //         catAge = "Unknown";
    //     };

    //     html += `
    //         <div>
    //         <h5>Name: ${catName}</h5>
    //         <p>Age: ${catAge}</p>
    //         </div>  
    //         `
    // });

    return html;

};

// createCats(cats);
const returnedHTML = createCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = returnedHTML;
