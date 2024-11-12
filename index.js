
let PI = 3.1415;
let radius = 5; 
let = plantSpace = 0.8; 
let = startPlants = 20; 


const area = PI * Math.pow(radius, 2);

const maxPlants = Math.floor(area / plantSpace);


function expectedGrowth(weeks) {
    

    let plantCount = startPlants;

//Iterate with loop
    for (let i = 0; i < weeks; i++) {
        plantCount *= 2; 
    }

    const capacity80 = 0.8 * maxPlants;
    const capacity50 = 0.5 * maxPlants;

    console.log(`After ${weeks} week(s), the plant count is: ${plantCount} plants.`);

    if (plantCount > capacity80) {
        console.log("Action: Prune the plants.");
    } else if (plantCount >= capacity50 && plantCount <= capacity80) {
        console.log("Action: Monitor the plants, the growth is under control.");
    } else {
        console.log("Action: The garden has room.");
    }
}

expectedGrowth(1); 
expectedGrowth(2); 
expectedGrowth(3); 

///Part 2


function calculateGardenExpansion(startPlants, growthFactor, weeks) {
    let initialAreaPerPlant = 1; 
    
    let areaPerPlantAtWeek10 = initialAreaPerPlant * Math.pow(growthFactor, weeks);
    
    let totalAreaAtWeek10 = startPlants * areaPerPlantAtWeek10;
    
    let radiusAtWeek10 = Math.sqrt(totalAreaAtWeek10 / Math.PI);
    
    return radiusAtWeek10;
}


let expandedRadius = calculateGardenExpansion(startPlants, growthFactor, weeks);

console.log("The radius of the expanded garden after 10 weeks is:", expandedRadius.toFixed(2));
//part 3 

function calculateGardenArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

function calculateSpacePerPlant(plants) {
    return 0.5 * plants;
}

function GardenSpace(plants, radius) {
    try {
        const gardenArea = calculateGardenArea(radius);
        const requiredSpace = calculateSpacePerPlant(plants);

        if (requiredSpace > gardenArea) {
            throw new Error("You do not have enough space for that!");
        }

        console.log("All of the plants fit nicely!");
    } catch (error) {
        console.error("Error:", error.message);
    }
}

GardenSpace(100, 5);
