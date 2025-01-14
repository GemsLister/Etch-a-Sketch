const gridContainer = document.querySelector(".gridContainer");
const gridContainerSize = 500;
let rangeBar = document.getElementById("rangeBar");
let gridSizeText = document.getElementById("gridSizeText");
let gridDivsSize = 50;
const colorPicker = document.getElementById("colorPicker");
const eraserBtn = document.getElementById("eraser");
const clearBtn = document.getElementById("clear");
let pickedColor = "#000000";
var eraserActive = false;

gridContainer.style.cssText = `display: flex; flex-wrap: wrap; width: ${gridContainerSize}px`;

rangeBar.oninput = ()=>{
    gridDivsSize = rangeBar.value;
    putGridCells(gridDivsSize);
    gridSizeText.textContent = `${gridDivsSize} x ${gridDivsSize}`;           
}

eraserBtn.addEventListener("click", ()=>{
    eraserActive = !eraserActive;
    if(eraserActive){
        eraserBtn.style.cssText = "background-color: #73d673";
        pickedColor = "";
    }
    else{
        eraserBtn.style.backgroundColor = "";
        pickedColor = colorPicker.value;
    }
})

const putGridCells = (gridDivsSize) =>{
    gridContainer.textContent = "";
    colorPicker.oninput = ()=>{
        pickedColor = colorPicker.value;
    }
    for(let i = 0; i < Math.pow(gridDivsSize, 2); i++){
        const gridCells = document.createElement("div");
        gridCells.classList = "gridDivs";
        gridCells.style.cssText = `height: ${gridContainerSize/gridDivsSize}px; width: ${gridContainerSize/gridDivsSize}px`;    
        gridContainer.appendChild(gridCells);
        gridCells.addEventListener("mouseover", (e)=>{
            if(e.target.classList.contains("gridDivs")){
                e.target.style.backgroundColor = `${pickedColor}`;
            }
        }); 
        // Releasing buttons
        ["mousedown", "mouseup"].forEach((e)=>{
            clearBtn.addEventListener(e, ()=>{
                if(e === "mousedown"){
                    clearBtn.style.cssText = "background-color: #73d673";
                    gridCells.style.backgroundColor = "";
                }
                else{
                    clearBtn.style.backgroundColor = "";
                }
            })
        })
    }
}

putGridCells(gridDivsSize);
