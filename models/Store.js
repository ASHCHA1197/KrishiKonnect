const mongoose = require("mongoose");
// mongoose.connect('mongodb://127.0.0.1:27017/krishiKonnectDb')
//     .then(()=>{
//         console.log("Database Connected !!");
//     })
//     .catch((err)=>{
//         console.log("Cannot connect to Database");
//         console.log(err);
//     });


const StoreSchema  = new mongoose.Schema({
    city : String,
    stores : [
        {
            photo : String,
            address : String,
            link : String
        }
    ]
});

const Store = mongoose.model("Store", StoreSchema);

const addStores = async(req,res)=>{
    await Store.deleteMany({});
    await Store.insertMany([
        {
            city : "Deoband",
            store : [
                {photo : "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=DZkwaK60uefHzRwx88JjaQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=319.44666&pitch=0&thumbfov=100", address : "Noorpur dehat, Deoband, Uttar Pradesh 247554", link "https://www.google.co.in/maps/place/National+Agro+Chemicals/@29.6823238,77.6274671,13z/data=!4m10!1m2!2m1!1sagro+stores+deoband!3m6!1s0x390ea52e526a46ff:0xaf358b672825a711!8m2!3d29.6823238!4d77.6686658!15sChNhZ3JvIHN0b3JlcyBkZW9iYW5kkgEWYWdyb2NoZW1pY2Fsc19zdXBwbGllcuABAA!16s%2Fg%2F11n1gyn67n?entry=ttu"},
                {photo : "https://lh5.googleusercontent.com/p/AF1QipNjiZw3vgaebHIjs5llROkRLzdYkJNJpdq3P0Cl=w408-h906-k-no", address : "Pathanpura, Reti chowk, Deoband, Uttar Pradesh 247554", link "https://www.google.co.in/maps/place/Diamond+Agro+Industry+Deoband/@29.6937905,77.6350832,13z/data=!4m10!1m2!2m1!1sagro+stores+deoband!3m6!1s0x390ea4159e890941:0x67cab81ac8264e6f!8m2!3d29.6937905!4d77.6701021!15sChNhZ3JvIHN0b3JlcyBkZW9iYW5kkgEMbWFudWZhY3R1cmVy4AEA!16s%2Fg%2F1tdbv44_?entry=ttu"},
                {photo : "", address : "", link : ""},
                {photo : "", address : "", link : ""},
                {photo : "", address : "", link : ""},
                {photo : "", address : "", link : ""},


            ]
        }
    ])
}

// addStores();

module.exports = Store;



