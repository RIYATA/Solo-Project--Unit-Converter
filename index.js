function refresh() {

    let convertNumb = document.getElementById("numb").value
    // metersToFeet
    let metersToFeet = convertNumb * 3.281;
    metersToFeet = metersToFeet.toFixed(3);

    let elementMetres = document.getElementById("n1");
    let elementFeet = document.getElementById("c1");

    elementMetres.innerText = convertNumb;
    elementFeet.innerText = metersToFeet;

    // FeetTometres
    let feetToMetres = convertNumb / 3.281;
    feetToMetres = feetToMetres.toFixed(3);

    let elementFeet1 = document.getElementById("n2");
    let elementMetres1 = document.getElementById("c2");
    elementFeet1.innerText = convertNumb;
    elementMetres1.innerText = feetToMetres;

    //LitresToGallons
    let litreToGallons = convertNumb / 4.546;
    litreToGallons = litreToGallons.toFixed(3);

    let elementLitres = document.getElementById("n3");
    let elementGallons = document.getElementById("c3");
    elementLitres.innerText = convertNumb;
    elementGallons.innerText = litreToGallons;

    //GallonToLitres
    let gallonToLitres = convertNumb * 4.546;
    gallonToLitres = gallonToLitres.toFixed(3);

    let elementGallons1 = document.getElementById("n4");
    let elementLitres1 = document.getElementById("c4");
    elementGallons1.innerText = convertNumb;
    elementLitres1.innerText = gallonToLitres;

    //KilogramsToPound
    let kilogramToPound = convertNumb * 2.205;
    kilogramToPound = kilogramToPound.toFixed(3);

    let elementKilogram = document.getElementById("n5");
    let elementPound = document.getElementById("c5");
    elementKilogram.innerText = convertNumb;
    elementPound.innerText = kilogramToPound;

    //PoundToKilograms
    let poundToKilograms = convertNumb / 2.205;
    poundToKilograms = poundToKilograms.toFixed(3);

    let elementPound1 = document.getElementById("n6");
    let elementKilogram1 = document.getElementById("c6");
    elementPound1.innerText = convertNumb;
    elementKilogram1.innerText = poundToKilograms;


}
