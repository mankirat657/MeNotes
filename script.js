let del = document.getElementById("btn2");
let show = document.getElementById("show");
let cancel = document.getElementById("cancel");
let create = document.getElementById("create");
let input = document.getElementById("title");
let createNote = document.querySelector(".createNote");
let allNotes = document.querySelector('.allNotes');
let thoughts = document.getElementById('Thoughts');
let displayitem = document.getElementById('Disp');
let popup = document.querySelector('.popup')
let body = document.body;
let cancelPopup = document.getElementById('cancel2')
let editTitle = document.getElementById('editTitle')
let popupArea = document.getElementById('Thoughts2')
let editBtn = document.getElementById('create2')
let displayElement;
let h1, thoughtsText;
let button1, button2;
let noteCounter = 0;
let colorCounter = 0;
let fontSizes = document.getElementById('fontSizes')
let bold = document.getElementById('bold')
let italics = document.getElementById('italics')
let underline = document.getElementById('underline')
let colorArray = ['#ff0000', '#ff8000', '#ffff00', '#80ff00', '#00ff00', '#00ffff', '#0000ff', '#bf00ff', '#ff00ff', '#ff0000', '#FFCCCC', '#E5FFCC', '#CCFFFF', '#FFCCE5', "#FF0000", "#008000","#0000FF","#FFFF00","#00FFFF","#FF00FF",
    "#FFFFFF",
    "#000000",
    "#8B0000",
    "#006400",
    "#00008B",
    "#BDB76B",
    "#008B8B",
    "#8B008B",
    "#808080",
    "#F0F8FF",
    "#FAEBD7",
    "#7FFFD4",
    "#F0FFFF",
    "#F5F5DC",
    "#FFE4C4"]
    let selectedColor = "";
    let selectedStyle = "";
    let selectUnderline="";
    let selectfontWeight = "";
    let Fontsize = "";
let ColorDiv;
let Fontcolor = document.getElementById('fontColor')
let colorArea = document.querySelector('.colorArea')
let Area = document.querySelector('.area')
let searchValue = document.getElementById('searchNote')
let searchButton = document.getElementById('Search')
show.addEventListener("click", () => {
    createNote.style.display = "block";
    popup.style.display = "none"
});

cancel.addEventListener("click", () => {
    event.preventDefault();
    createNote.style.display = "none";
    input.value = ''
    thoughts.value = ''
});

create.addEventListener("click", () => {
    event.preventDefault();
    createNote.style.display = "none";
    displayElement = document.createElement('div');
    displayElement.className = "Disp";
    allNotes.appendChild(displayElement);

    const h1Id = `h1_${noteCounter}`;
    const thoughtsTextId = `thoughtsText_${noteCounter}`;
    noteCounter++;

    h1 = document.createElement('h1');
    h1.id = h1Id;
    h1.className = 'HeadingText';
    h1.innerHTML = input.value;
    h1.style.color = selectedColor; 
    h1.style.fontStyle = selectedStyle;
    h1.style.textDecoration = selectUnderline;
    h1.style.fontWeight = selectfontWeight
    h1.style.fontSize = Fontsize + 'px'
    displayElement.appendChild(h1);

    thoughtsText = document.createElement('div');
    thoughtsText.className = 'dispText'
    thoughtsText.id = thoughtsTextId;
    thoughtsText.innerHTML = thoughts.value;
    thoughtsText.style.color = selectedColor; 
    thoughtsText.style.fontStyle = selectedStyle;
    thoughtsText.style.textDecoration = selectUnderline;
    thoughtsText.style.fontWeight = selectfontWeight
    displayElement.appendChild(thoughtsText);

    button1 = document.createElement('button');
    button1.id = 'btn1';
    button1.innerHTML = 'Preview';
    displayElement.appendChild(button1);

    button2 = document.createElement('button');
    button2.id = 'btn2';
    button2.innerHTML = "Delete";
    displayElement.appendChild(button2);

    getBtn1data(button1, h1Id, thoughtsTextId);
    input.value = "";
    thoughts.value = "";
});
allNotes.addEventListener("click", (event) => {
    if (event.target && event.target.id === "btn2") {
        const displayElement = event.target.parentElement;
        deleteContainer(displayElement);
        popup.style.display = "none";
    }
});

cancelPopup.addEventListener("click", () => {
    popup.style.display = "none";
});

function getBtn1data(button1, h1Id, thoughtsTextId) {
    button1.addEventListener("click", () => {
        editTitle.value = document.getElementById(h1Id).innerHTML;
        popupArea.value = document.getElementById(thoughtsTextId).innerHTML;


        editBtn.onclick = (event) => {
            event.preventDefault();

            document.getElementById(h1Id).innerHTML = editTitle.value;
            document.getElementById(thoughtsTextId).innerHTML = popupArea.value;
            popup.style.display = "none";
        };

        popup.style.display = "block";
    });
}
fontSizes.addEventListener("click", () => {
    colorArea.style.display="none"
    let i;
    fontSizes.innerHTML = ''
    for (i = 0; i <= 72; i++) {
        options = document.createElement('option')
        options.innerHTML = i;
        fontSizes.append(options)
    }

})
fontSizes.addEventListener("change", () => {
    let selectedFontSize = parseInt(fontSizes.value);
    Fontsize = selectedFontSize
    input.style.fontSize = selectedFontSize + "px";
});

let toggle = false;

bold.addEventListener("click", () => {
    colorArea.style.display="none"
    if (toggle = !toggle) {

        input.classList.add('bold')
        thoughts.classList.add('bold')
        popupArea.classList.add('bold')
        editTitle.classList.add('bold')
        selectfontWeight = 'bold'
    }
    else {
        input.classList.remove('bold')
        thoughts.classList.remove('bold')
        editTitle.classList.remove('bold')
        popupArea.classList.remove('bold')
        selectfontWeight = ''
        
    }
    colorArea.textContent = '';
})
italics.addEventListener("click", () => {
    colorArea.style.display="none"
    if (toggle = !toggle) {

        input.classList.add('italics')
        thoughts.classList.add('italics')
        editTitle.classList.add('italics')
        popupArea.classList.add('italics')
        selectedStyle = 'italic'
    }
    else {
        input.classList.remove('italics')
        thoughts.classList.remove('italics')
        editTitle.classList.remove('italics')
        popupArea.classList.remove('italics')
        selectedStyle = ''

    }
    colorArea.textContent = '';
})


underline.addEventListener("click", () => {
    colorArea.style.display="none"
    if (toggle = !toggle) {

        input.classList.add('underline')
        thoughts.classList.add('underline')
        editTitle.classList.add('underline')
        popupArea.classList.add('underline')
        selectUnderline = 'underline'
    }
    else {
        input.classList.remove('underline')
        thoughts.classList.remove('underline')
        editTitle.classList.remove('underline')
        popupArea.classList.remove('underline')
        selectUnderline = ''
    }
    colorArea.textContent = '';
})
Fontcolor.addEventListener("click", () => {
    if (toggle && colorArea.style.display === 'none') {
        colorArea.style.display = "flex";
        colorArea.style.flexWrap = "wrap";
        colorArea.style.justifyContent = "space-between";
        colorArea.style.gap = "5px";
        for (let i = 0; i < colorArray.length; i++) {
            let ColorDiv = document.createElement('div');
            const divID = `${colorCounter}`;
            ColorDiv.id = divID;
            colorCounter++;
            ColorDiv.className = "ColorSchema";
            ColorDiv.style.backgroundColor = colorArray[i];
            colorArea.appendChild(ColorDiv);
            
            ColorDiv.addEventListener("click", () => {
                selectedColor = ColorDiv.style.backgroundColor; 
                input.style.color = selectedColor;
                thoughts.style.color = selectedColor;
            });
        }
    } else {
        colorArea.textContent = '';
        colorArea.style.display = "none";
    }

    toggle = !toggle;
    console.log(Fontcolor);
});
let searchText = ''; 

function searchElements() {
    searchText = searchValue.value.toLowerCase(); 
    const allContainers = document.querySelectorAll('.Disp'); 


    allContainers.forEach(container => {
        if (container.classList.contains('deleted')) {
            return;
        }
        const title = container.querySelector('h1').innerText.toLowerCase(); 
        if (title.includes(searchText)) {
            container.style.display = 'block'; 
        } else {
            container.style.display = 'none'; 
        }
    });
}

searchButton.addEventListener("click", searchElements);


searchValue.addEventListener("input", () => {
    if (searchValue.value === '') {

        const allContainers = document.querySelectorAll('.Disp');
        allContainers.forEach(container => {
            container.style.display = 'block';
        });
    }
});
function deleteContainer(container) {
    container.classList.add('deleted'); 
    container.style.display = 'none'; 
}
input.value=''
thoughts.value=''