//Selectors
let worldwide = document.getElementById('worldwide');
let sackson = document.getElementById('sackson');
let festival = document.getElementById('festival');
let imperial = document.getElementById('imperial');
let american = document.getElementById('american');
let continental = document.getElementById('continental');
let tower = document.getElementById('tower');

let w = document.getElementById('w');
let s = document.getElementById('s');
let f = document.getElementById('f');
let i = document.getElementById('i');
let a = document.getElementById('a');
let c = document.getElementById('c');
let t = document.getElementById('t');

let wAdd = document.getElementById('w-add');
let sAdd = document.getElementById('s-add');
let fAdd = document.getElementById('f-add');
let iAdd = document.getElementById('i-add');
let aAdd = document.getElementById('a-add');
let cAdd = document.getElementById('c-add');
let tAdd = document.getElementById('t-add');

let wSubtract = document.getElementById('w-subtract');
let sSubtract = document.getElementById('s-subtract');
let fSubtract = document.getElementById('f-subtract');
let iSubtract = document.getElementById('i-subtract');
let aSubtract = document.getElementById('a-subtract');
let cSubtract = document.getElementById('c-subtract');
let tSubtract = document.getElementById('t-subtract');

let value = document.getElementById('total');




//Hotel Tiles
let worldwideTiles = 0;
let sacksonTiles = 0;
let festivalTiles = 0;
let imperialTiles = 0;
let americanTiles = 0;
let continentalTiles = 0;
let towerTiles = 0;

//Hotel Price
let worldwidePrice = 0;
let sacksonPrice = 0;
let festivalPrice = 0;
let imperialPrice = 0;
let americanPrice = 0;
let continentalPrice = 0;
let towerPrice = 0;

//Maj and Min
let worldwideMaj = 0;
let sacksonMaj = 0;
let festivalMaj = 0;
let imperialMaj = 0;
let americanMaj = 0;
let continentalMaj = 0;
let towerMaj = 0;
let worldwideMin = 0;
let sacksonMin = 0;
let festivalMin = 0;
let imperialMin = 0;
let americanMin = 0;
let continentalMin = 0;
let towerMin = 0;

//Player Stocks
let wStock = 0;
let sStock = 0;
let fStock = 0;
let iStock = 0;
let aStock = 0;
let cStock = 0;
let tStock = 0;

let wValue = 0;
let sValue = 0;
let fValue = 0;
let iValue = 0;
let aValue = 0;
let cValue = 0;
let tValue = 0;

//Stock Buy & Sell Price Calculations
function updatePrice() {
if (worldwideTiles === 0) {
    worldwidePrice = 0;
} else if (worldwideTiles === 1) {
    worldwidePrice = 0;
} else if (worldwideTiles === 2) {
    worldwidePrice = 200;
} else if (worldwideTiles === 3) {
    worldwidePrice = 300;
} else if (worldwideTiles === 4) {
    worldwidePrice = 400;
} else if (worldwideTiles === 5) {
    worldwidePrice = 500;
} else if (worldwideTiles >= 6 && worldwideTiles < 11) {
    worldwidePrice = 600;
} else if (worldwideTiles >= 11 && worldwideTiles < 21) {
    worldwidePrice = 700;
} else if (worldwideTiles >= 21 && worldwideTiles < 31) {
    worldwidePrice = 800;
} else if (worldwideTiles >= 31 && worldwideTiles < 41) {
    worldwidePrice = 900;
} else if (worldwideTiles >= 41) {
    worldwidePrice = 1000;
}

if (sacksonTiles === 0) {
    sacksonPrice = 0;
} else if (sacksonTiles === 1) {
    sacksonPrice = 0;
} else if (sacksonTiles === 2) {
    sacksonPrice = 200;
} else if (sacksonTiles === 3) {
    sacksonPrice = 300;
} else if (sacksonTiles === 4) {
    sacksonPrice = 400;
} else if (sacksonTiles === 5) {
    sacksonPrice = 500;
} else if (sacksonTiles >= 6 && sacksonTiles < 11) {
    sacksonPrice = 600;
} else if (sacksonTiles >= 11 && sacksonTiles < 21) {
    sacksonPrice = 700;
} else if (sacksonTiles >= 21 && sacksonTiles < 31) {
    sacksonPrice = 800;
} else if (sacksonTiles >= 31 && sacksonTiles < 41) {
    sacksonPrice = 900;
} else if (sacksonTiles >= 41) {
    sacksonPrice = 1000;
}

if (festivalTiles === 0) {
    festivalPrice = 0;
} else if (festivalTiles === 1) {
    festivalPrice = 0;
} else if (festivalTiles === 2) {
    festivalPrice = 300;
} else if (festivalTiles === 3) {
    festivalPrice = 400;
} else if (festivalTiles === 4) {
    festivalPrice = 500;
} else if (festivalTiles === 5) {
    festivalPrice = 600;
} else if (festivalTiles >= 6 && festivalTiles < 11) {
    festivalPrice = 700;
} else if (festivalTiles >= 11 && festivalTiles < 21) {
    festivalPrice = 800;
} else if (festivalTiles >= 21 && festivalTiles < 31) {
    festivalPrice = 900;
} else if (festivalTiles >= 31 && festivalTiles < 41) {
    festivalPrice = 1000;
} else if (festivalTiles >= 41) {
    festivalPrice = 1100;
}

if (imperialTiles === 0) {
    imperialPrice = 0;
} else if (imperialTiles === 1) {
    imperialPrice = 0;
} else if (imperialTiles === 2) {
    imperialPrice = 300;
} else if (imperialTiles === 3) {
    imperialPrice = 400;
} else if (imperialTiles === 4) {
    imperialPrice = 500;
} else if (imperialTiles === 5) {
    imperialPrice = 600;
} else if (imperialTiles >= 6 && imperialTiles < 11) {
    imperialPrice = 700;
} else if (imperialTiles >= 11 && imperialTiles < 21) {
    imperialPrice = 800;
} else if (imperialTiles >= 21 && imperialTiles < 31) {
    imperialPrice = 900;
} else if (imperialTiles >= 31 && imperialTiles < 41) {
    imperialPrice = 1000;
} else if (imperialTiles >= 41) {
    imperialPrice = 1100;
}

if (americanTiles === 0) {
    americanPrice = 0;
} else if (americanTiles === 1) {
    americanPrice = 0;
} else if (americanTiles === 2) {
    americanPrice = 300;
} else if (americanTiles === 3) {
    americanPrice = 400;
} else if (americanTiles === 4) {
    americanPrice = 500;
} else if (americanTiles === 5) {
    americanPrice = 600;
} else if (americanTiles >= 6 && americanTiles < 11) {
    americanPrice = 700;
} else if (americanTiles >= 11 && americanTiles < 21) {
    americanPrice = 800;
} else if (americanTiles >= 21 && americanTiles < 31) {
    americanPrice = 900;
} else if (americanTiles >= 31 && americanTiles < 41) {
    americanPrice = 1000;
} else if (americanTiles >= 41) {
    americanPrice = 1100;
}

if (continentalTiles === 0) {
    continentalPrice = 0;
} else if (continentalTiles === 1) {
    continentalPrice = 0;
} else if (continentalTiles === 2) {
    continentalPrice = 400;
} else if (continentalTiles === 3) {
    continentalPrice = 500;
} else if (continentalTiles === 4) {
    continentalPrice = 600;
} else if (continentalTiles === 5) {
    continentalPrice = 700;
} else if (continentalTiles >= 6 && continentalTiles < 11) {
    continentalPrice = 800;
} else if (continentalTiles >= 11 && continentalTiles < 21) {
    continentalPrice = 900;
} else if (continentalTiles >= 21 && continentalTiles < 31) {
    continentalPrice = 1000;
} else if (continentalTiles >= 31 && continentalTiles < 41) {
    continentalPrice = 1100;
} else if (continentalTiles >= 41) {
    continentalPrice = 1200;
}

if (towerTiles === 0) {
    towerPrice = 0;
} else if (towerTiles === 1) {
    towerPrice = 0;
} else if (towerTiles === 2) {
    towerPrice = 400;
} else if (towerTiles === 3) {
    towerPrice = 500;
} else if (towerTiles === 4) {
    towerPrice = 600;
} else if (towerTiles === 5) {
    towerPrice = 700;
} else if (towerTiles >= 6 && towerTiles < 11) {
    towerPrice = 800;
} else if (towerTiles >= 11 && towerTiles < 21) {
    towerPrice = 900;
} else if (towerTiles >= 21 && towerTiles < 31) {
    towerPrice = 1000;
} else if (towerTiles >= 31 && towerTiles < 41) {
    towerPrice = 1100;
} else if (towerTiles >= 41) {
    towerPrice = 1200;
}

}

//total function
function totalValue() {
    total = wValue + sValue + fValue + iValue + aValue + cValue + tValue;
    value.innerHTML = `${total}`;
}

//innerHTML
worldwide.innerHTML = `Tiles: ${worldwideTiles} $: ${worldwidePrice} Maj: ${worldwideMaj} Min: ${worldwideMin}`;
sackson.innerHTML = `Tiles: ${sacksonTiles} $: ${sacksonPrice} Maj: ${sacksonMaj} Min: ${sacksonMin}`;
festival.innerHTML = `Tiles: ${festivalTiles} $: ${festivalPrice} Maj: ${festivalMaj} Min: ${festivalMin}`;
imperial.innerHTML = `Tiles: ${imperialTiles} $: ${imperialPrice} Maj: ${imperialMaj} Min: ${imperialMin}`;
american.innerHTML = `Tiles: ${americanTiles} $: ${americanPrice} Maj: ${americanMaj} Min: ${americanMin}`;
continental.innerHTML = `Tiles: ${continentalTiles} $: ${continentalPrice} Maj: ${continentalMaj} Min: ${continentalMin}`;
tower.innerHTML = `Tiles: ${towerTiles} $: ${towerPrice} Maj: ${towerMaj} Min: ${towerMin}`;

let worldwideAdd = document.getElementById('worldwide-add');
worldwideAdd.addEventListener('click', () => {
    worldwideTiles += 1;
    updatePrice();
    worldwideMaj = worldwidePrice * 10;
    worldwideMin = worldwideMaj / 2;
    worldwide.innerHTML = `Tiles: ${worldwideTiles} $: ${worldwidePrice} Maj: ${worldwideMaj} Min: ${worldwideMin}`;    wValue = wStock * worldwidePrice;
    w.innerHTML = `Owned: ${wStock} Total Value: ${wValue}`;
    totalValue();
});

let worldwideSubtract = document.getElementById('worldwide-subtract');
worldwideSubtract.addEventListener('click', () => {
    worldwideTiles -= 1;
    updatePrice();
    worldwideMaj = worldwidePrice * 10;
    worldwideMin = worldwideMaj / 2;
    worldwide.innerHTML = `Tiles: ${worldwideTiles} $: ${worldwidePrice} Maj: ${worldwideMaj} Min: ${worldwideMin}`;
    wValue = wStock * worldwidePrice;
    w.innerHTML = `Owned: ${wStock} Total Value: ${wValue}`;
    totalValue();
});

let festivalAdd = document.getElementById('festival-add');
festivalAdd.addEventListener('click', () => {
    festivalTiles += 1;
    updatePrice();
    festivalMaj = festivalPrice * 10;
    festivalMin = festivalMaj / 2;
    festival.innerHTML = `Tiles: ${festivalTiles} $: ${festivalPrice} Maj: ${festivalMaj} Min: ${festivalMin}`;
    fValue = fStock * festivalPrice;
    f.innerHTML = `Owned: ${fStock} Total Value: ${fValue}`;
    totalValue();
});

let festivalSubtract = document.getElementById('festival-subtract');
festivalSubtract.addEventListener('click', () => {
    festivalTiles -= 1;
    updatePrice();
    festivalMaj = festivalPrice * 10;
    festivalMin = festivalMaj / 2;
    festival.innerHTML = `Tiles: ${festivalTiles} $: ${festivalPrice} Maj: ${festivalMaj} Min: ${festivalMin}`;
    fValue = fStock * festivalPrice;
    f.innerHTML = `Owned: ${fStock} Total Value: ${fValue}`;
    totalValue();
});

let sacksonAdd = document.getElementById('sackson-add');
sacksonAdd.addEventListener('click', () => {
    sacksonTiles += 1;
    updatePrice();
    sacksonMaj = sacksonPrice * 10;
    sacksonMin = sacksonMaj / 2;
    sackson.innerHTML = `Tiles: ${sacksonTiles} $: ${sacksonPrice} Maj: ${sacksonMaj} Min: ${sacksonMin}`;
    sValue = sStock * sacksonPrice;
    s.innerHTML = `Owned: ${sStock} Total Value: ${sValue}`;
    totalValue();
});

let sacksonSubtract = document.getElementById('sackson-subtract');
sacksonSubtract.addEventListener('click', () => {
    sacksonTiles -= 1;
    updatePrice();
    sacksonMaj = sacksonPrice * 10;
    sacksonMin = sacksonMaj / 2;
    sackson.innerHTML = `Tiles: ${sacksonTiles} $: ${sacksonPrice} Maj: ${sacksonMaj} Min: ${sacksonMin}`;
    sValue = sStock * sacksonPrice;
    s.innerHTML = `Owned: ${sStock} Total Value: ${sValue}`;
    totalValue();
});

let imperialAdd = document.getElementById('imperial-add');
imperialAdd.addEventListener('click', () => {
    imperialTiles += 1;
    updatePrice();
    imperialMaj = imperialPrice * 10;
    imperialMin = imperialMaj / 2;
    imperial.innerHTML = `Tiles: ${imperialTiles} $: ${imperialPrice} Maj: ${imperialMaj} Min: ${imperialMin}`;
    iValue = iStock * imperialPrice;
    i.innerHTML = `Owned: ${iStock} Total Value: ${iValue}`;
    totalValue();
});

let imperialSubtract = document.getElementById('imperial-subtract');
imperialSubtract.addEventListener('click', () => {
    imperialTiles -= 1;
    updatePrice();
    imperialMaj = imperialPrice * 10;
    imperialMin = imperialMaj / 2;
    imperial.innerHTML = `Tiles: ${imperialTiles} $: ${imperialPrice} Maj: ${imperialMaj} Min: ${imperialMin}`;
    iValue = iStock * imperialPrice;
    i.innerHTML = `Owned: ${iStock} Total Value: ${iValue}`;
});

let americanAdd = document.getElementById('american-add');
americanAdd.addEventListener('click', () => {
    americanTiles += 1;
    updatePrice();
    americanMaj = americanPrice * 10;
    americanMin = americanMaj / 2;
    american.innerHTML = `Tiles: ${americanTiles} $: ${americanPrice} Maj: ${americanMaj} Min: ${americanMin}`;
    aValue = aStock * americanPrice;
    a.innerHTML = `Owned: ${aStock} Total Value: ${aValue}`;
    totalValue();
});

let americanSubtract = document.getElementById('american-subtract');
americanSubtract.addEventListener('click', () => {
    americanTiles -= 1;
    updatePrice();
    americanMaj = americanPrice * 10;
    americanMin = americanMaj / 2;
    american.innerHTML = `Tiles: ${americanTiles} $: ${americanPrice} Maj: ${americanMaj} Min: ${americanMin}`;
    aValue = aStock * americanPrice;
    a.innerHTML = `Owned: ${aStock} Total Value: ${aValue}`;
    totalValue();
});

let continentalAdd = document.getElementById('continental-add');
continentalAdd.addEventListener('click', () => {
    continentalTiles += 1;
    updatePrice();
    continentalMaj = continentalPrice * 10;
    continentalMin = continentalMaj / 2;
    continental.innerHTML = `Tiles: ${continentalTiles} $: ${continentalPrice} Maj: ${continentalMaj} Min: ${continentalMin}`;
    cValue = cStock * continentalPrice;
    c.innerHTML = `Owned: ${cStock} Total Value: ${cValue}`;
    totalValue();
});

let continentalSubtract = document.getElementById('continental-subtract');
continentalSubtract.addEventListener('click', () => {
    continentalTiles -= 1;
    updatePrice();
    continentalMaj = continentalPrice * 10;
    continentalMin = continentalMaj / 2;
    continental.innerHTML = `Tiles: ${continentalTiles} $: ${continentalPrice} Maj: ${continentalMaj} Min: ${continentalMin}`;
    cValue = cStock * continentalPrice;
    c.innerHTML = `Owned: ${cStock} Total Value: ${cValue}`;
    totalValue();
});

let towerAdd = document.getElementById('tower-add');
towerAdd.addEventListener('click', () => {
    towerTiles += 1;
    updatePrice();
    towerMaj = towerPrice * 10;
    towerMin = towerMaj / 2;
    tower.innerHTML = `Tiles: ${towerTiles} $: ${towerPrice} Maj: ${towerMaj} Min: ${towerMin}`;
    tValue = tStock * towerPrice;
    t.innerHTML = `Owned: ${tStock} Total Value: ${tValue}`;
    totalValue();
});

let towerSubtract = document.getElementById('tower-subtract');
towerSubtract.addEventListener('click', () => {
    towerTiles -= 1;
    updatePrice();
    towerMaj = towerPrice * 10;
    towerMin = towerMaj / 2;
    tower.innerHTML = `Tiles: ${towerTiles} $: ${towerPrice} Maj: ${towerMaj} Min: ${towerMin}`;
    tValue = tStock * towerPrice;
    t.innerHTML = `Owned: ${tStock} Total Value: ${tValue}`;
    totalValue();
});

//Player Tracker
w.innerHTML = `Owned: ${wStock} Total Value: ${wValue}`;
s.innerHTML = `Owned: ${sStock} Total Value: ${sValue}`;
f.innerHTML = `Owned: ${fStock} Total Value: ${fValue}`;
i.innerHTML = `Owned: ${iStock} Total Value: ${iValue}`;
a.innerHTML = `Owned: ${aStock} Total Value: ${aValue}`;
c.innerHTML = `Owned: ${cStock} Total Value: ${cValue}`;
t.innerHTML = `Owned: ${tStock} Total Value: ${tValue}`;

wAdd.addEventListener('click', () => {
    wStock += 1;
    wValue = wStock * worldwidePrice;
    w.innerHTML = `Owned: ${wStock} Total Value: ${wValue}`;
    totalValue();
});

wSubtract.addEventListener('click', () => {
    wStock -= 1;
    wValue = wStock * worldwidePrice;
    w.innerHTML = `Owned: ${wStock} Total Value: ${wValue}`;
    totalValue();
});

sAdd.addEventListener('click', () => {
    sStock += 1;
    sValue = sStock * sacksonPrice;
    s.innerHTML = `Owned: ${sStock} Total Value: ${sValue}`;
    totalValue();
});

sSubtract.addEventListener('click', () => {
    sStock -= 1;
    sValue = sStock * sacksonPrice;
    s.innerHTML = `Owned: ${sStock} Total Value: ${sValue}`;
    totalValue();
});

fAdd.addEventListener('click', () => {
    fStock += 1;
    fValue = fStock * festivalPrice;
    f.innerHTML = `Owned: ${fStock} Total Value: ${fValue}`;
    totalValue();
});

fSubtract.addEventListener('click', () => {
    fStock -= 1;
    fValue = fStock * festivalPrice;
    f.innerHTML = `Owned: ${fStock} Total Value: ${fValue}`;
    totalValue();
});

iAdd.addEventListener('click', () => {
    iStock += 1;
    iValue = iStock * imperialPrice;
    i.innerHTML = `Owned: ${iStock} Total Value: ${iValue}`;
    totalValue();
});

iSubtract.addEventListener('click', () => {
    iStock -= 1;
    iValue = iStock * imperialPrice;
    i.innerHTML = `Owned: ${iStock} Total Value: ${iValue}`;
    totalValue();
});

aAdd.addEventListener('click', () => {
    aStock += 1;
    aValue = aStock * americanPrice;
    a.innerHTML = `Owned: ${aStock} Total Value: ${aValue}`;
    totalValue();
});

aSubtract.addEventListener('click', () => {
    aStock -= 1;
    aValue = aStock * americanPrice;
    a.innerHTML = `Owned: ${aStock} Total Value: ${aValue}`;
    totalValue();
});

cAdd.addEventListener('click', () => {
    cStock += 1;
    cValue = cStock * continentalPrice;
    c.innerHTML = `Owned: ${cStock} Total Value: ${cValue}`;
    totalValue();
});

cSubtract.addEventListener('click', () => {
    cStock -= 1;
    cValue = cStock * continentalPrice;
    c.innerHTML = `Owned: ${cStock} Total Value: ${cValue}`;
    totalValue();
});

tAdd.addEventListener('click', () => {
    tStock += 1;
    tValue = tStock * towerPrice;
    t.innerHTML = `Owned: ${tStock} Total Value: ${tValue}`;
    totalValue();
});

tSubtract.addEventListener('click', () => {
    tStock -= 1;
    tValue = tStock * towerPrice;
    t.innerHTML = `Owned: ${tStock} Total Value: ${tValue}`;
    totalValue();
});

//Player Total Value
let total = wValue + sValue + fValue + iValue + aValue + cValue + tValue;
value.innerHTML = `${total}`;

