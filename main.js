// BODY STYLE

document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.background = "#cfe7e1";
document.body.style.padding = "15px";


// NAVIGATION

let nav = document.createElement("div");
nav.style.display = "flex";
nav.style.justifyContent = "center";
nav.style.alignItems = "center";
nav.style.gap = "15px";
nav.style.background = "#5a1c3bff";
nav.style.padding = "15px";
nav.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
document.body.appendChild(nav);


// CONTENT

let content = document.createElement("div");
content.style.marginTop = "30px";
content.style.textAlign = "center";
document.body.appendChild(content);

// CLEAR CONTENT FUNCTION

function clearContent() {
  content.innerHTML = "";
}


// HOME PAGE

function home() {
  clearContent();
  let title = document.createElement("h1");
  title.textContent = "Welcome to My Website";
  title.style.color = "#4a5fb8";
  title.style.fontSize = "36px";
  title.style.opacity = "0";
  title.style.transition = "opacity 1s ease, transform 1s ease";
  content.appendChild(title);

  let text = document.createElement("p");
  text.textContent = "This is the Home Page.";
  text.style.fontSize = "18px";
  content.appendChild(text);

  setTimeout(() => {
    title.style.opacity = "1";
    title.style.transform = "scale(1.05)";
  }, 100);
}


// ABOUT US PAGE

function about() {
  clearContent();
  let container = document.createElement("div");
  container.style.maxWidth = "700px";
  container.style.margin = "0 auto";
  container.style.background = "#dad9e7";
  container.style.padding = "20px";
  container.style.borderRadius = "8px";
  container.style.textAlign = "left";

  let title = document.createElement("h2");
  title.textContent = "About Us";
  title.style.textAlign = "center";
  title.style.marginBottom = "20px";
  container.appendChild(title);

  let flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.alignItems = "center";
  flex.style.gap = "15px";
  flex.style.marginBottom = "15px";

  let img = document.createElement("img");
  img.src = "picture.jpeg"; 
  img.style.width = "130px";
  img.style.height = "130px";
  img.style.borderRadius = "50%";
  img.style.objectFit = "cover";
  img.style.border = "2px solid #4a5fb8";

  let name = document.createElement("h3");
  name.textContent = "Maida Mohamed Abdikarim";
  name.style.margin = "0";
  name.style.color = "#4a5fb8";

  flex.appendChild(img);
  flex.appendChild(name);
  container.appendChild(flex);

  let info = [
    "<strong>ID:</strong> c6240415",
    "<strong>Email:</strong> maaidomahamed90@gmail.com",
    "<strong>Phone:</strong> +252 610522283",
    "<strong>University:</strong> Jamhuriya University",
    "<strong>Faculty:</strong> Networking",
    "<strong>Skills:</strong> Graphic Design",
    
  ];

  info.forEach(i => {
    const p = document.createElement("p");
    p.innerHTML = i;
    container.appendChild(p);
  });

  let desc = document.createElement("p");
  desc.textContent =
    "I am a student at Jamhuriya University";
  container.appendChild(desc);

let link = document.createElement("a");
link.href = "https://maramcharitha.github.io/todolist_javascript/";
link.textContent = "To-Do List ";
link.target = "_blank";
container.appendChild(link);

  content.appendChild(container);
}


// CONTACT PAGE

function contact() {
  clearContent();
  let title = document.createElement("h2");
  title.textContent = "Contact Us";
  title.style.marginBottom = "15px";

  let form = document.createElement("div");
  form.style.maxWidth = "300px";
  form.style.margin = "0 auto";
  form.style.display = "flex";
  form.style.flexDirection = "column";
  form.style.gap = "10px";

  let nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.placeholder = "Full Name";
  nameInput.style.padding = "10px";

  let emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.placeholder = "Email";
  emailInput.style.padding = "10px";

  let message = document.createElement("textarea");
  message.placeholder = "Your Message";
  message.style.padding = "10px";

  let submit = document.createElement("button");
  submit.textContent = "Submit";
  submit.style.padding = "10px";
  submit.style.cursor = "pointer";
  submit.style.background = "#4a5fb8";
  submit.style.color = "white";
  submit.style.border = "none";
  submit.style.borderRadius = "5px";

  submit.addEventListener("click", () => {
    if (!nameInput.value || !emailInput.value || !message.value) {
      alert("Please fill all fields.");
      return;
    }
    alert(
      `Message sent!\nName: ${nameInput.value}\nEmail: ${emailInput.value}\nMessage: ${message.value}`
    );
    nameInput.value = "";
    emailInput.value = "";
    message.value = "";
  });

  form.append(nameInput, emailInput, message, submit);
  content.append(title, form);
}


// SERVICE PAGE (FULL)

let currentChapter = 7;

function service() {
  clearContent();

  // Title
  const h1 = document.createElement("h1");
  h1.textContent = "Service - JavaScript Chapters";
  content.appendChild(h1);

  const main = document.createElement("div");
  content.appendChild(main);

  // Run All Button (KOR)
  const runAllBtn = document.createElement("button");
  runAllBtn.textContent = "Run All";
  runAllBtn.style.marginBottom = "10px";
  runAllBtn.onclick = runAllForCurrentChapter;
  main.appendChild(runAllBtn);

  // Chapter Buttons (KOR)
  const chapterRow = document.createElement("div");
  chapterRow.style.display = "flex";
  chapterRow.style.justifyContent = "center";
  chapterRow.style.gap = "10px";
  chapterRow.style.marginBottom = "15px";
  main.appendChild(chapterRow);

  const chapters = [
    { id: 7, name: "Objects" },
    { id: 8, name: "DOM" },
    { id: 9, name: "Events" }
  ];

  chapters.forEach(ch => {
    const b = document.createElement("button");
    b.textContent = ch.name;
    b.style.cursor = "pointer";
    b.onclick = () => showChapter(ch.id);
    chapterRow.appendChild(b);
  });

  // Examples Area (HOOS)
  const exDiv = document.createElement("div");
  exDiv.id = "examples";
  main.appendChild(exDiv);

  showChapter(7);
}


// SHOW CHAPTER

function showChapter(ch) {
  currentChapter = ch;
  const div = document.getElementById("examples");
  div.innerHTML = "";

  const labels = { 7: "Objects", 8: "DOM", 9: "Events" };
  const h = document.createElement("h3");
  h.textContent = "Chapter " + ch + " - " + labels[ch];
  div.appendChild(h);

  function addExample(title, code) {
    const box = document.createElement("div");
    box.style.marginBottom = "12px";
    box.style.opacity = "0";
    box.style.transform = "translateY(-15px)";
    box.style.transition = "all 0.4s ease";

    const t = document.createElement("strong");
    t.textContent = title;

    const c = document.createElement("div");
    c.textContent = code;

    const runBtn = document.createElement("button");
    runBtn.textContent = "Run";

    const output = document.createElement("div");
    output.style.marginTop = "5px";

    box.append(t, c, runBtn, output);
    div.appendChild(box);

    setTimeout(() => {
      box.style.opacity = "1";
      box.style.transform = "translateY(0)";
    }, 50);

    runBtn.onclick = () => {
      try {
        output.textContent = eval(code);
      } catch (e) {
        output.textContent = "Error: " + e.message;
      }
    };
  }

  // Chapter 7: Objects 
  if (ch === 7) {
    addExample("1. Object Literal", `let p={name:'maida',age:20}; p.name+' '+p.age;`);
    addExample("2. Constructor", `function S(n){this.name=n;} new S('Ali').name;`);
    addExample("3. Bracket Notation", `let o={a:10}; o['a'];`);
    addExample("4. Class", `class P{constructor(n){this.n=n}} new P('Phone').n;`);
    addExample("5. Method", `let x={g(){return 'Hi'}}; x.g();`);
    addExample("6. Object.keys", `Object.keys({a:1,b:2}).join();`);
    addExample("7. Object.values", `Object.values({x:5,y:6}).join();`);
    addExample("8. entries", `Object.entries({a:1})[0].join(':');`);
    addExample("9. JSON.parse", `JSON.parse('{"a":5}').a;`);
    addExample("10. JSON.stringify", `JSON.stringify({x:1});`);
    addExample("11. hasOwnProperty", `let o={a:1}; o.hasOwnProperty('a');`);
    addExample("12. delete", `let o={x:5}; delete o.x; o.x;`);
    addExample("13. this keyword", `let o={n:5,f(){return this.n}}; o.f();`);
    addExample("14. Object.assign", `Object.assign({a:1},{b:2}).b;`);
    addExample("15. Freeze", `let o={a:1}; Object.freeze(o); o.a=5; o.a;`);
    addExample("16. Seal", `let o={a:1}; Object.seal(o); delete o.a; o.a;`);
    addExample("17. Nested Object", `let o={a:{b:2}}; o.a.b;`);
    addExample("18. for...in", `let s=''; for(let k in {a:1,b:2}) s+=k; s;`);
    addExample("19. Object.create", `let o=Object.create({a:5}); o.a;`);
    addExample("20. toString", `({a:1}).toString();`);


  }

  //  Chapter 8: DOM 
  if (ch === 8) {
    addExample("1. createElement", `let p=document.createElement('p'); p.innerText='Hi'; content.appendChild(p); p.innerText;`);
    addExample("2. getElementById", `document.getElementById('examples').id;`);
    addExample("3. querySelector", `document.querySelector('h3').innerText;`);
    addExample("4. appendChild", `let d=document.createElement('div'); content.appendChild(d); 'Added';`);
    addExample("5. remove", `let r=document.createElement('p'); content.appendChild(r); r.remove(); 'Removed';`);
    addExample("6. innerHTML", `let x=document.createElement('div'); x.innerHTML='<b>OK</b>'; content.appendChild(x);`);
    addExample("7. style", `let s=document.createElement('p'); s.style.color='red'; content.appendChild(s); s.style.color;`);
    addExample("8. setAttribute", `let i=document.createElement('img'); i.setAttribute('alt','img'); i.getAttribute('alt');`);
    addExample("9. classList", `let c=document.createElement('div'); c.classList.add('box'); c.className;`);
    addExample("10. textContent", `let t=document.createElement('p'); t.textContent='Text'; t.textContent;`);
    addExample("11. cloneNode", `
let p=document.createElement('p');
p.innerText='Hi';
let c=p.cloneNode(true);
content.appendChild(c);
c.innerText;
`);

   addExample("12. replaceChild", `
let a=document.createElement('span');
a.innerText='Old';
let b=document.createElement('b');
b.innerText='New';
content.appendChild(a);
content.replaceChild(b,a);
'Replaced';
`);

addExample("13. prepend", `
let d=document.createElement('div');
d.innerText='First';
content.prepend(d);
'Prepended';
`);


addExample("14. before", `
let h=document.querySelector('h3');
let p=document.createElement('p');
p.innerText='Before';
h.before(p);
'Inserted';
`);

addExample("15. after", `
let p=document.createElement('p');
p.innerText='After';
document.querySelector('h3').after(p);
'Added';
`);

addExample("16. parentNode", `
document.querySelector('h3').parentNode.tagName;
`);

addExample("17. children", `
content.children.length;
`);

addExample("18. firstChild", `
content.firstChild.nodeType;
`);

addExample("19. lastElementChild", `
content.lastElementChild.tagName;
`);

addExample("20. toggle class", `
let d=document.createElement('div');
d.classList.toggle('box');
d.className;
`);

  }



  //Chapter 9: Events 
  if (ch === 9) {
        addExample('1. Click Event', `let btn=document.createElement('button'); btn.innerText='Click'; content.appendChild(btn); btn.onclick=()=> 'Clicked';`);
        addExample('2. Mouseover', `let mv=document.createElement('div'); mv.innerText='Hover me'; content.appendChild(mv); mv.onmouseover=()=> 'Mouseover';`);
        addExample('3. Mouseout', `mv.onmouseout=()=> 'Mouseout';`);
        addExample('4. Keyup Event', `let inp=document.createElement('input'); content.appendChild(inp); inp.onkeyup=()=> inp.value;`);
        addExample('5. Change Event', `inp.onchange=()=> 'Changed';`);
        addExample('6. Focus Event', `inp.onfocus=()=> 'Focused';`);
        addExample('7. Blur Event', `inp.onblur=()=> 'Blurred';`);
        addExample('8. Double Click', `btn.ondblclick=()=> 'Double Clicked';`);
        addExample('9. Submit Validation', `let f=document.createElement('form'); let s=document.createElement('button'); s.innerText='Submit'; f.appendChild(s); f.onsubmit=e=>{ e.preventDefault(); 'Form submitted'; }; content.appendChild(f);`);
        addExample('10. Simple Validation', `let input2=document.createElement('input'); content.appendChild(input2); if(input2.value===''){ 'Empty input'; }`);
addExample("11. addEventListener", `
let b=document.createElement('button');
b.innerText='Click';
content.appendChild(b);
b.addEventListener('click',()=> 'Clicked');
`);

addExample("12. removeEventListener", `
let f=()=>alert('Hi');
document.body.addEventListener('click',f);
document.body.removeEventListener('click',f);
'Removed';
`);

addExample("13. keydown", `
let i=document.createElement('input');
content.appendChild(i);
i.onkeydown=()=> 'Key down';
`);

addExample("14. keypress", `
i.onkeypress=()=> 'Key press';
`);

addExample("15. contextmenu", `
document.oncontextmenu=()=> 'Right click';
`);

addExample("16. load", `
window.onload=()=> 'Loaded';
`);

addExample("17. resize", `
window.onresize=()=> 'Resized';
`);

addExample("18. scroll", `
window.onscroll=()=> 'Scrolling';
`);

addExample("19. touchstart", `
document.ontouchstart=()=> 'Touched';
`);

addExample("20. input event", `
i.oninput=()=> i.value;
`);

    }
}



// RUN ALL

function runAllForCurrentChapter() {
  const div = document.getElementById("examples");
  if (!div) return;
  div.querySelectorAll("div").forEach(box => {
    const codeEl = box.querySelector("div:nth-child(2)");
    const out = box.querySelector("div:nth-child(4)");
    if (codeEl && out) {
      try { out.textContent = eval(codeEl.textContent); }
      catch (e) { out.textContent = "Error: " + e.message; }
    }
  });
}



// NAV BUTTONS

let menus = [
  { name: "HOME", action: home },
  { name: "ABOUT US", action: about },
  { name: "SERVICES", action: service },
  { name: "CONTACT US", action: contact }
];

menus.forEach(menu => {
  let btn = document.createElement("button");
  btn.textContent = menu.name;
  btn.style.background = "transparent";
  btn.style.color = "white";
  btn.style.border = "2px solid white";
  btn.style.padding = "10px 18px";
  btn.style.fontSize = "14px";
  btn.style.cursor = "pointer";
  btn.style.borderRadius = "25px";
  btn.style.transition = "all 0.3s ease";
  btn.onmouseenter = () => {
    btn.style.background = "white";
    btn.style.color = "#5a1c3bff";
  };
  btn.onmouseleave = () => {
    btn.style.background = "transparent";
    btn.style.color = "white";
  };
  btn.onclick = menu.action;
  nav.appendChild(btn);
});


// SHOW HOME PAGE BY DEFAULT

home();