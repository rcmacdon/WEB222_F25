// -----------------------------
// TItle:     Basics of DOM
// Author:    Clint MacDonald
// Date:      Nov. 2025
// -----------------------------

// This script demonstrates basic DOM manipulation

var ph3_length = 0;

// javascript to run automatically when the page loads
window.onload = function start() {

    ph3_length = document.getElementById('placeholder3').innerHTML.length;

    // select the placeholder div tag
    var ph1 = document.getElementById('placeholder');
    // change it's innerHTML
    ph1.innerHTML = "<h2>DOM Manipulation Successful!</h2><p>This content was added via JavaScript!</p>";

    ph1.appendChild(document.createElement('hr'));

    var ul = document.createElement('ul');
    for (var i = 1; i <= 4; i++) {
        var li = document.createElement('li');
        li.innerText ="Item: " + i;
        ul.appendChild(li);
    }
    ph1.appendChild(ul);
    ph1.appendChild(document.createElement('hr'));

    loadNav();
}

function click1() {
    var ph2 = document.getElementById("placeholder2");
    ph2.innerHTML = "<h3>You clicked on the first button!</h3><p>This content was added after clicking on the first button!</p>"
}

function click2() {

    var ph3 = document.getElementById('placeholder3');

    if (ph3.innerHTML.length <= ph3_length) {
        var ph3_h2 = document.createElement('h2');
        ph3_h2.innerText = "Famous Quotes";
        ph3.appendChild(ph3_h2);

        var ul = document.createElement('ul');
        for (var i = 0; i < quotes.length; i++) {
            var li = document.createElement('li');
            li.innerText = quotes[i];
            ul.appendChild(li)

            li.style.padding = "10px";

            if (i % 2 === 0) {
                li.style.backgroundColor = "#bbbbbb";
            } else {
                li.style.backgroundColor = "#dddddd";
            }

            // make the last one bold
            if (i === quotes.length - 1) {
                li.style.fontWeight = "bold";
            }
        }
        ph3.append(ul);
    }

}

function click3() {
    var ph4 = document.getElementById("placeholder4");
    ph4.innerText = "";

    for(var i = 0; i < sectionContent.length; i++) {
        var section = document.createElement('section');

        var h2 = document.createElement('h2');
        h2.innerText = sectionContent[i].title;

        var p = document.createElement('p');
        p.innerHTML = sectionContent[i].content;

        var a = document.createElement('a');
        a.href = sectionContent[i].link.url;
        a.innerText = sectionContent[i].link.name;

        section.appendChild(h2);
        section.appendChild(p);
        section.appendChild(a);

        ph4.appendChild(section);
    }
}

function loadNav() {
    var nav = document.querySelector('nav');
    var ul = document.createElement('ul');
    for (var i = 0; i < navLinks.length; i++) {
       var li = document.createElement('li');
       var a = document.createElement('a');
       a.href = navLinks[i].url; 
       a.innerText = navLinks[i].name;
       li.appendChild(a);
       ul.appendChild(li);
    }
    nav.appendChild(ul);

}




