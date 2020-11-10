//Getting stats from storage || declaring them
if (localStorage.getItem("Scrap") === null) {
    var Scrap = 0;
}else{
    var Scrap = parseInt(localStorage.getItem("Scrap"));
}
if (localStorage.getItem("Pickaxe")=== null){
    var Pickaxe = 0;
}else{
    var Pickaxe = parseInt(localStorage.getItem("Pickaxe"));
}


//declaring the buttons
document.getElementById("PlayerGather").onclick = function() {PlayerClick()};
document.getElementById("BuyPick").onclick = function() {BuyPickaxe()};

//buttons
function PlayerClick() {
    Scrap += 1+Pickaxe;
    UpdateInfo();
}
function BuyPickaxe() {
    if(Scrap >=100){
        Scrap -= 100;
        Pickaxe++;
        UpdateInfo();
    }
}

function UpdateInfo() {
    const backAccountCountSpan = document.getElementById("BankAccountCount");
    const PickaxeCountSpan = document.getElementById("Pickaxes");
        if (backAccountCountSpan instanceof HTMLSpanElement) {
            backAccountCountSpan.textContent = Scrap.toFixed(2);

        }
        if (PickaxeCountSpan instanceof HTMLSpanElement) {
            PickaxeCountSpan.textContent = Pickaxe.toString();
        }
}

function StoreInfo() {
    localStorage.setItem("Scrap", Scrap.toString());
    localStorage.setItem("Pickaxe", Pickaxe.toString());
}



const gameLoop = function() {
    try {
            UpdateInfo();
    } finally {
        setTimeout(gameLoop, 1000);
    }
}
gameLoop();

const StorageLoop = function() {
    try {
            StoreInfo();
    } finally {
        setTimeout(StorageLoop, 10000);
    }
}
StorageLoop();



























// const gameLoop = function() {
//     try {
//         const backAccountCountSpan = document.getElementById("BankAccountCount");
//         if (backAccountCountSpan instanceof HTMLSpanElement) {
//             backAccountCountSpan.textContent = ((parseFloat(backAccountCountSpan.textContent) || 0) + 0.01).toFixed(2);
//         }
//     } finally {
//         setTimeout(gameLoop, 1000);
//     }
// }

// gameLoop();