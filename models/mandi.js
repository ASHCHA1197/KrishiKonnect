const mongoose = require("mongoose");
const Mandi = require("./models/Mandi"); // Assuming Mandi model is imported correctly

const addMandis = async () => {
    const mandiData = [
        {
            market: "Roorkee",
            crops: [
                { name: "Tomato", price: 1500 },
                { name: "Bottle gourd", price: 700 },
                { name: "Brinjal", price: 500 },
                { name: "Cauliflower", price: 600 },
                { name: "Green Chilli", price: 3000 },
                { name: "Potato", price: 1500 },
                { name: "Water Melon", price: 1000 },
                { name: "Cucumbar (Kheera)", price: 600 },
                { name: "Karbuja (Musk Melon)", price: 2500 },
                { name: "Onion", price: 1800 }
            ]
        },
        {
            market: "Hapur",
            crops: [
                { name: "Bengal Gram (Gram) (Whole)", price: 6360 },
                { name: "Pumpkin", price: 1200 },
                { name: "Raddish", price: 980 },
                { name: "Arhar Dal (Tur Dal)", price: 13400 },
                { name: "Banana - Green", price: 1960 },
                { name: "Cabbage", price: 1270 },
                { name: "Rice", price: 3020 }
            ]
        }
    ];

    mandiData.push(
        {
            market: "Lucknow",
            crops: [
                { name: "Arhar Dal (Tur Dal)", price: 13600 },
                { name: "Green Chilli", price: 3650 },
                { name: "Bengal Gram Dal (Chana Dal)", price: 7100 },
                { name: "Gur (Jaggery)", price: 3950 },
                { name: "Black Gram (Urd Beans) (Whole)", price: 8800 },
                { name: "Spinach", price: 1370 },
                { name: "Cucumbar (Kheera)", price: 1600 },
                { name: "Water Melon", price: 1400 },
                { name: "Ginger (Green)", price: 8400 },
                { name: "Mousambi (Sweet Lime)", price: 3600 }
            ]
        },
        {
            market: "Muzaffarpur",
            crops: [
                { name: "Wheat", price: 2300 },
                { name: "Apple", price: 8200 },
                { name: "Banana", price: 2600 },
                { name: "Bitter gourd", price: 2600 },
                { name: "Orange", price: 4500 },
                { name: "Potato", price: 1575 },
                { name: "White Peas", price: 5220 },
                { name: "Bhindi (Ladies Finger)", price: 3100 },
                { name: "Cucumbar (Kheera)", price: 1200 },
                { name: "Ginger (Green)", price: 7850 },
                { name: "Gur (Jaggery)", price: 4040 }
            ]
        },
        {
            market: "Agra",
            crops: [
                { name: "Carrot", price: 1700 },
                { name: "Green Chilli", price: 2750 },
                { name: "Onion Green", price: 1050 },
                { name: "Pumpkin", price: 650 },
                { name: "Cabbage", price: 900 },
                { name: "French Beans (Frasbean)", price: 5850 },
                { name: "Peas Wet", price: 6000 },
                { name: "Drumstick", price: 1550 },
                { name: "Onion Green", price: 1050 }
            ]
        },
        {
            market: "Aligarh",
            crops: [
                { name: "Water Melon", price: 1350 },
                { name: "Wheat", price: 2290 },
                { name: "Bajra (Pearl Millet/Cumbu)", price: 2120 },
                { name: "Cabbage", price: 940 },
                { name: "Green Chilli", price: 2900 },
                { name: "Lemon", price: 6250 },
                { name: "Maize", price: 2100 },
                { name: "Onion", price: 1750 },
                { name: "Paddy (Dhan)(Basmati)", price: 3400 },
                { name: "Paddy (Dhan)(Common)", price: 2300 }
            ]
        },
        {
            market: "Baghpat",
            crops: [
                { name: "Potato", price: 1400 },
                { name: "Papaya (Raw)", price: 1800 },
                { name: "Tomato", price: 1200 },
                { name: "Onion", price: 2200 }
            ]
        },
        {
            market: "Saharanpur",
            crops: [
                { name: "Apple", price: 7800 },
                { name: "Banana - Green", price: 2000 },
                { name: "Barley (Jau)", price: 2200 },
                { name: "Bengal Gram Dal (Chana Dal)", price: 7100 },
                { name: "Capsicum", price: 3400 },
                { name: "Wheat", price: 2350 },
                { name: "Black Gram (Urd Beans)(Whole)", price: 8920 },
                { name: "Black Gram Dal (Urd Dal)", price: 9970 },
                { name: "Cabbage", price: 1300 },
                { name: "Cucumbar (Kheera)", price: 1500 }
            ]
        },
        {
            market: "Nanuta",
            crops: [
                { name: "Tomato", price: 2200 },
                { name: "Cauliflower", price: 1400 },
                { name: "Potato", price: 900 },
                { name: "Bhindi (Ladies Finger)", price: 2250 },
                { name: "Green Chilli", price: 2800 },
                { name: "Onion", price: 2200 },
                { name: "Green Chilli", price: 2850 },
                { name: "Pumpkin", price: 1500 },
                { name: "Tomato", price: 2500 },
                { name: "Potato", price: 900 }
            ]
        },
        {
            market: "Muzzafarnagar",
            crops: [
                { name: "Arhar Dal (Tur Dal)", price: 13500 },
                { name: "Barley (Jau)", price: 2200 },
                { name: "Capsicum", price: 3400 },
                { name: "Field Pea", price: 3000 },
                { name: "Papaya", price: 2420 },
                { name: "Potato", price: 1600 },
                { name: "Brinjal", price: 1225 },
                { name: "Rice", price: 3170 },
                { name: "Carrot", price: 1450 },
                { name: "Green Chilli", price: 3150 }
            ]
        }
    );

    try {
        await Mandi.deleteMany({}); // Clear existing Mandi collection
        await Mandi.insertMany(mandiData);
        console.log("Mandi data inserted successfully");
    } catch (error) {
        console.error("Error inserting Mandi data:", error);
    }
};

// Calling the addMandis function to populate the Mandi collection
addMandis();

module.exports = Mandi; // Export Mandi model if needed elsewhere
