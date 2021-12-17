/*

Find the maximum number of units that fit in the truck


boxes = [1, 2, 3]
unitsPerBox = [3, 2, 1]
truckSize = 3

*/

const log = console.log;

const getMaxUnits = (boxes, unitsPerBox, truckSize) => {
    const products = Array.from({length: boxes.length});

    products.map((el, i) => {
        products[i] = [boxes[i], unitsPerBox[i]];
    });

    log(products);
}

const boxes = [1, 2, 3],
unitsPerBox = [3, 2, 1],
truckSize = 3;


log(getMaxUnits(boxes, unitsPerBox, truckSize)) // expected output 7

