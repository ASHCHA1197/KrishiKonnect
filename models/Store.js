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
            stores : [
                {photo : "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=DZkwaK60uefHzRwx88JjaQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=319.44666&pitch=0&thumbfov=100", address : "Noorpur dehat, Deoband, Uttar Pradesh 247554", link : "https://www.google.co.in/maps/place/National+Agro+Chemicals/@29.6823238,77.6274671,13z/data=!4m10!1m2!2m1!1sagro+stores+deoband!3m6!1s0x390ea52e526a46ff:0xaf358b672825a711!8m2!3d29.6823238!4d77.6686658!15sChNhZ3JvIHN0b3JlcyBkZW9iYW5kkgEWYWdyb2NoZW1pY2Fsc19zdXBwbGllcuABAA!16s%2Fg%2F11n1gyn67n?entry=ttu"},
                {photo : "https://lh5.googleusercontent.com/p/AF1QipNjiZw3vgaebHIjs5llROkRLzdYkJNJpdq3P0Cl=w408-h906-k-no", address : "Pathanpura, Reti chowk, Deoband, Uttar Pradesh 247554", link : "https://www.google.co.in/maps/place/Diamond+Agro+Industry+Deoband/@29.6937905,77.6350832,13z/data=!4m10!1m2!2m1!1sagro+stores+deoband!3m6!1s0x390ea4159e890941:0x67cab81ac8264e6f!8m2!3d29.6937905!4d77.6701021!15sChNhZ3JvIHN0b3JlcyBkZW9iYW5kkgEMbWFudWZhY3R1cmVy4AEA!16s%2Fg%2F1tdbv44_?entry=ttu"},
                {photo : "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=HqAsAweJ01nSHPu87AwhQw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=98.27921&pitch=0&thumbfov=100", address : "39, Industrial Estate, Railway Rd, Teachers Colony, Deoband, Uttar Pradesh 247554", link : "https://www.google.co.in/maps/place/Shri+Balaji+Agro+Products/@29.685247,77.6735319,3a,75y,103.43h,105.56t/data=!3m6!1e1!3m4!1sHqAsAweJ01nSHPu87AwhQw!2e0!7i13312!8i6656!4m10!1m2!2m1!1sagro+stores+deoband!3m6!1s0x390ea417778bdf87:0x5e27750187134921!8m2!3d29.6852222!4d77.6736564!15sChNhZ3JvIHN0b3JlcyBkZW9iYW5kkgEMbWFudWZhY3R1cmVy4AEA!16s%2Fg%2F11lm11h1g7?entry=ttu"},
                {photo : "https://lh5.googleusercontent.com/p/AF1QipOuv9tSaiGv-alihf4k3WBSfil4vOUYysKJTBIj=w408-h905-k-no", address : "Magan Market, Rankhandi-Deoband Road, Shashtri Nagar, Deoband, Uttar Pradesh 247554", link : "https://www.google.co.in/maps/place/Annupajak+Agro+Pvt+Ltd.(%E0%A4%85%E0%A4%A8%E0%A5%8D%E0%A4%A8%E0%A5%81%E0%A4%AA%E0%A4%BE%E0%A4%9C%E0%A4%95+%E0%A4%8F%E0%A4%97%E0%A5%8D%E0%A4%B0%E0%A5%8B+%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%87%E0%A4%B5%E0%A5%87%E0%A4%9F+%E0%A4%B2%E0%A4%BF%E0%A4%AE%E0%A4%BF%E0%A4%9F%E0%A5%87%E0%A4%A1)/@29.6302929,77.5869001,13z/data=!4m10!1m2!2m1!1sagro+stores+deoband!3m6!1s0x390ea6d4218b3573:0x1fb415f991b97a10!8m2!3d29.6302929!4d77.6589979!15sChNhZ3JvIHN0b3JlcyBkZW9iYW5kWhUiE2Fncm8gc3RvcmVzIGRlb2JhbmSSARdmb29kX3Byb2Nlc3NpbmdfY29tcGFueZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOQ2MyTXpNRkpCRUFF4AEA!16s%2Fg%2F11qrnm6n7f?entry=ttu"}
            ]
        },
        {
            city : "Saharanpur",
            stores : [
                {photo : "https://lh5.googleusercontent.com/p/AF1QipPeEra8hvw0v2gyNSNWDy7O113wxkSPBLZk6xvP=w408-h306-k-no", address : "XGF7+GFP, labour colony, Sharda Nagar, Roop Di Guzar, Saharanpur, Uttar Pradesh 247001", link : "https://www.google.co.in/maps/place/Jai+Bhagwati+Agro+Sale/@29.9738268,77.3736343,11z/data=!4m10!1m2!2m1!1sagro+stores+saharanpur!3m6!1s0x390eeb6161fa53d7:0x623db6f9eb601424!8m2!3d29.9738268!4d77.51371!15sChZhZ3JvIHN0b3JlcyBzYWhhcmFucHVykgERZWxlY3Ryb25pY3Nfc3RvcmXgAQA!16s%2Fg%2F11f9fsympd?entry=ttu"},
                {photo : "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=cPb6d5OXT84Z0pV550snmA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=46.51096&pitch=0&thumbfov=100", address : "Shop no 98, street no 2, Railway Rd, Subhash Nagar, Saharanpur, Uttar Pradesh 247001", link : "https://www.google.co.in/maps/place/karnal+agro+industries/@29.9619803,77.4116434,11z/data=!4m10!1m2!2m1!1sagro+stores+saharanpur!3m6!1s0x390eea99c1c921b3:0xc15ccae6866b7b71!8m2!3d29.9619803!4d77.5517191!15sChZhZ3JvIHN0b3JlcyBzYWhhcmFucHVykgEQYnVzaW5lc3NfcmVsYXRlZOABAA!16s%2Fg%2F11k4tx6fpk?entry=ttu"},
                {photo : "https://lh5.googleusercontent.com/p/AF1QipOuv9tSaiGv-alihf4k3WBSfil4vOUYysKJTBIj=w408-h905-k-no", address : "Ram Nagar, Saharanpur, Uttar Pradesh 247001", link : "https://www.google.co.in/maps/place/Narang+Seed+Store/@29.9664268,77.4087364,11z/data=!4m10!1m2!2m1!1sagro+stores+saharanpur!3m6!1s0x390eea905c3867bf:0x3dd8e0b4af34ce34!8m2!3d29.9664268!4d77.5488121!15sChZhZ3JvIHN0b3JlcyBzYWhhcmFucHVykgENc2VlZF9zdXBwbGllcuABAA!16s%2Fg%2F11gbl4xcds?entry=ttu"},
                {photo : "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=CYJPuVvcB8xptgdj54fyzQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=31.203646&pitch=0&thumbfov=100", address : "Main rod, near petrol station, Saharanpur, Uttar Pradesh 247451", link : "https://www.google.co.in/maps/place/Agro+fertilizer+and+seeds/@29.8337718,77.2686423,11z/data=!4m10!1m2!2m1!1sagro+stores+saharanpur!3m6!1s0x390e939a68432825:0xa4964f165f03f647!8m2!3d29.8337718!4d77.408718!15sChZhZ3JvIHN0b3JlcyBzYWhhcmFucHVykgETZmVydGlsaXplcl9zdXBwbGllcuABAA!16s%2Fg%2F11s5pvy5dq?entry=ttu"},
            ]
        },
        {
            city : "Roorkee",
            stores : [
                {photo : "https://lh5.googleusercontent.com/p/AF1QipO9NYZopyxL4ytmHrtNynWKN2IP-HL9qlSZ5ybV=w408-h302-k-no", address : "Roorkee Laksar Rd, Libberheri, Uttarakhand 247656", link : "https://www.google.co.in/maps/place/Parteek+trading+co./@29.7665299,77.7243466,11z/data=!4m10!1m2!2m1!1sroorkee+agro+stores!3m6!1s0x390ead93c289e3bf:0x7932f41978ea0745!8m2!3d29.7665299!4d77.8644223!15sChNyb29ya2VlIGFncm8gc3RvcmVzWhUiE3Jvb3JrZWUgYWdybyBzdG9yZXOSARRhZ3JpY3VsdHVyYWxfc2VydmljZeABAA!16s%2Fg%2F1q6295c4l?entry=ttu"},
                {photo : "https://lh5.googleusercontent.com/p/AF1QipOmFWptqGqOmSSNmAnpmMFMAUBWBbtEz9JVsQ20=w418-h240-k-no", address : "NH334, Saidpura, Uttarakhand 247666", link : "https://www.google.co.in/maps/place/chandra+agro+works+roorkee+haridwar+(agriculture+production)/@29.8128108,77.7392614,11z/data=!4m10!1m2!2m1!1sroorkee+agro+stores!3m6!1s0x390eb3cd42f525e3:0x3bd7b5c45525df3d!8m2!3d29.8128108!4d77.8793371!15sChNyb29ya2VlIGFncm8gc3RvcmVzkgEOZmFybWVyc19tYXJrZXTgAQA!16s%2Fg%2F11f87t4k99?entry=ttu"},
                {photo : "https://lh5.googleusercontent.com/p/AF1QipM_HNuxU7I_325Kk5SEk4MnB8sbpHiD98RkdSSV=w408-h544-k-no", address : "RAMPUR THRIYA, Roorkee Rd, near SHIV MEDICAL AGENCY, Muzaffarnagar, Uttar Pradesh 251001", link : "https://www.google.co.in/maps/place/VASISHTH+AGRO+CHEMICAL/@29.7022745,77.588344,11z/data=!4m10!1m2!2m1!1sroorkee+agro+stores!3m6!1s0x390c1dc80fe9f80f:0x19afdb204af60bbb!8m2!3d29.519769!4d77.7078336!15sChNyb29ya2VlIGFncm8gc3RvcmVzkgENc2VlZF9zdXBwbGllcuABAA!16s%2Fg%2F11l34rzt54?entry=ttu"},
                {photo : "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=xkMA_-ny_QJBqKo-MW-59w&cb_client=search.gws-prod.gps&w=408&h=240&yaw=265.71838&pitch=0&thumbfov=100", address : "Shop No 1, Puhana - Jhabrera Rd, Roorkee, Jabarhera, Uttarakhand 247667", link : "https://www.google.co.in/maps/place/Kanha+Electrical+And+Agro+Parts/@29.7022745,77.588344,11z/data=!4m10!1m2!2m1!1sroorkee+agro+stores!3m6!1s0x390eb1b4b34f8c63:0x39ccae525f7540a6!8m2!3d29.8106462!4d77.7728221!15sChNyb29ya2VlIGFncm8gc3RvcmVzkgEOaGFyZHdhcmVfc3RvcmXgAQA!16s%2Fg%2F11sxy7x_dd?entry=ttu"}
            ]
        },
        {
            city : "Noida",
            stores : [
            {photo : "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=QqJZRPrzOKV4_auA3yZOEA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=291.2322&pitch=0&thumbfov=100", address : "Shop 12, Shiv Shakti Enclave Rd, near Metro Station, Block A, Sector 81, Noida, Uttar Pradesh 201304", link : "https://www.google.co.in/maps/place/D+R+Agro/@28.5471746,77.2523646,11z/data=!4m10!1m2!2m1!1snoida+agro+stores!3m6!1s0x390ce94b5eee84fd:0xed61df71b4bbec1a!8m2!3d28.5471746!4d77.3924403!15sChFub2lkYSBhZ3JvIHN0b3Jlc5IBDXNlZWRfc3VwcGxpZXLgAQA!16s%2Fg%2F11v64rf23p?entry=ttu"},
            {photo : "https://lh5.googleusercontent.com/p/AF1QipMJe8CumFaMMccwByi1_bWveFpeQC6qdRh4-FOh=w408-h403-k-no", address : "Shop no.6, Hans RajBhatiMarket, Accher, Pi I & II, Greater Noida, Delhi, Uttar Pradesh 201310", link : "https://www.google.co.in/maps/place/Dayal+Bharat+Agro+Products/@28.5141787,77.4453784,11z/data=!4m10!1m2!2m1!1snoida+agro+stores!3m6!1s0x390cc01f507e8bed:0xb65560d43b924b24!8m2!3d28.464814!4d77.5396109!15sChFub2lkYSBhZ3JvIHN0b3Jlc5IBDWdyb2Nlcnlfc3RvcmXgAQA!16s%2Fg%2F11tx24p4t_?entry=ttu"},
            {photo : "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=Jcv9gjc_DXsMLBxk65HkSg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=59.84071&pitch=0&thumbfov=100", address : "vinayak Property, B-2, Sarfabad Village, Sarfabad, Sector 73, Noida, Uttar Pradesh 201304", link : "https://www.google.co.in/maps/place/Jain+Agro/@28.5829005,77.2444862,11z/data=!4m10!1m2!2m1!1snoida+agro+stores!3m6!1s0x390cef441ab71847:0x2f8995b16f6dbf08!8m2!3d28.5829005!4d77.3845619!15sChFub2lkYSBhZ3JvIHN0b3Jlc5IBD2RyeV9mcnVpdF9zdG9yZeABAA!16s%2Fg%2F11v3g315kz?entry=ttu"},
            {photo : "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=Jcv9gjc_DXsMLBxk65HkSg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=59.84071&pitch=0&thumbfov=100", address : "", link : ""},
            {photo : "https://lh5.googleusercontent.com/p/AF1QipOTcTcgBlZ4nnXbxPjNVevww_GzwTNfUEIX15fY=w408-h544-k-no", address : "A - 36, A Block, Sector 58, Noida, Uttar Pradesh 201301", link : "https://www.google.co.in/maps/place/Elworld+Agro+%26+Organic+Foods+Pvt.+Ltd-+Organic+Food+Products/@28.6020053,77.2174113,11z/data=!4m10!1m2!2m1!1snoida+agro+stores!3m6!1s0x390ce56c15555555:0xa970808a2bd72db5!8m2!3d28.6020053!4d77.357487!15sChFub2lkYSBhZ3JvIHN0b3Jlc5IBF2Zvb2RfcHJvY2Vzc2luZ19jb21wYW554AEA!16s%2Fg%2F11c6h_f98y?entry=ttu"}
            ]
        },
        {
          city : "Meerut",
          stores : [
           {photo : "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=EkCAcy7gHaaHl1q6ZdooKw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=87.437775&pitch=0&thumbfov=100",address : "A-1/105 Harsha House, Karampura Commercial Complex, New Delhi, Delhi 110015", link : "https://www.google.co.in/maps/place/Meerut+Agro+Chemical+Industries+Limited/@28.6618527,77.0072273,11z/data=!4m10!1m2!2m1!1smeerut+fertilizers+shop!3m6!1s0x390d02fdc7dd6dd7:0xb95f2f14d452d773!8m2!3d28.6618527!4d77.147303!15sChdtZWVydXQgZmVydGlsaXplcnMgc2hvcJIBFmFncm9jaGVtaWNhbHNfc3VwcGxpZXLgAQA!16s%2Fg%2F1tq4pgvr?entry=ttu"}, 
           {photo : "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=qKt93mSsG8DNE4STHhTxAg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=233.36282&pitch=0&thumbfov=100",address : "1250/1M BABA NAGAR, Meerut Rd, SADDIQUE NAGAR, Ghaziabad, Uttar Pradesh 201003", link : "https://www.google.co.in/maps/place/Balaji+Agro+Chemicals+%26+Fertilizers/@28.6885424,77.2915708,11z/data=!4m10!1m2!2m1!1smeerut+fertilizers+shop!3m6!1s0x390cf1a694c091c1:0xd7d31e53861fbe7c!8m2!3d28.6885424!4d77.4316465!15sChdtZWVydXQgZmVydGlsaXplcnMgc2hvcJIBDG1hbnVmYWN0dXJlcuABAA!16s%2Fg%2F11c6dd070w?entry=ttu"}, 
           {photo : "https://lh5.googleusercontent.com/p/AF1QipPJ4Q5smt-zqA8EMAK7W1RpiRdoLzXgfSsbX_cg=w426-h240-k-no",address : "Rohta Rd, Jawahar Nagar, Fazalpur, Meerut, Uttar Pradesh 250001", link : "https://www.google.co.in/maps/place/Vermicompost,+Worms+(%E0%A4%95%E0%A5%87%E0%A4%82%E0%A4%9A%E0%A5%81%E0%A4%86),+Jaivik+Khad+(%E0%A4%9C%E0%A5%88%E0%A4%B5%E0%A4%BF%E0%A4%95+%E0%A4%96%E0%A4%BE%E0%A4%A6),+Organic+Fertilizer/@28.9905047,77.5179188,11z/data=!4m10!1m2!2m1!1smeerut+fertilizers+shop!3m6!1s0x390c65cc0716e169:0x3a3017197d8b9140!8m2!3d28.9905047!4d77.6579945!15sChdtZWVydXQgZmVydGlsaXplcnMgc2hvcJIBFGFncmljdWx0dXJhbF9zZXJ2aWNl4AEA!16s%2Fg%2F11q8_4ppwy?entry=ttu"}, 
           {photo : "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=kxYGfpENbReuXzzVEc00Zg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=25.545082&pitch=0&thumbfov=100",address : "1, Delhi Rd, Transport Nagar, Raghukul Vihar, Madhav Puram, Meerut, Uttar Pradesh 250002", link : "https://www.google.co.in/maps/place/Nandi+Fertilizers+Pvt+Ltd/@28.9678898,77.5466728,11z/data=!4m10!1m2!2m1!1smeerut+fertilizers+shop!3m6!1s0x390c6442dc510679:0x98b6fdcbe7b50794!8m2!3d28.9678898!4d77.6867485!15sChdtZWVydXQgZmVydGlsaXplcnMgc2hvcJIBE2ZlcnRpbGl6ZXJfc3VwcGxpZXLgAQA!16s%2Fg%2F11fnw19zt9?entry=ttu"}, 
            ]
         },
         {
            city : "Anoopshahar" ,
         stores : [
            {photo : "https://lh5.googleusercontent.com/p/AF1QipNClP8-vICZH7E0TIwgkMqJ9yAZNizYaYrZz2T9=w408-h473-k-no", address : "Block K, Jagat Ram Park, Laxmi Nagar, Delhi, 110092", link : "https://www.google.co.in/maps/place/Gahlot+Organic+Farming+Products/@28.6345336,77.1381528,11z/data=!4m10!1m2!2m1!1sAnoopshahar+fertilizers+store!3m6!1s0x390cfcac2bffffff:0x2cd8c9c7dc785285!8m2!3d28.6345336!4d77.2782285!15sCh1Bbm9vcHNoYWhhciBmZXJ0aWxpemVycyBzdG9yZZIBE2ZlcnRpbGl6ZXJfc3VwcGxpZXLgAQA!16s%2Fg%2F11sszc4xjg?entry=ttu" },
            {photo : "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=4cgJ7KFrlFiL0iIERy23pg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=344.40518&pitch=0&thumbfov=100", address : "132, Indra market, Old, Subzi Mandi, Delhi, 110007", link : "https://www.google.co.in/maps/place/Shree+Salasar+Seeds+%26+Pesticides/@28.6694461,77.064511,11z/data=!4m10!1m2!2m1!1sAnoopshahar+fertilizers+store!3m6!1s0x390cfd406a60337b:0xdd0cb7fc786487f4!8m2!3d28.6694461!4d77.2045867!15sCh1Bbm9vcHNoYWhhciBmZXJ0aWxpemVycyBzdG9yZZIBE2ZlcnRpbGl6ZXJfc3VwcGxpZXLgAQA!16s%2Fg%2F11vd8881x7?entry=ttu" },
            {photo : "https://lh5.googleusercontent.com/p/AF1QipPZB-Jo4Z0hbPvrAq94YWsSOZIhWz5ioim53Mq5=w408-h544-k-no", address : "Khasra No.503, asalatpur, near hanuman mandir, Farukh Nagar, Ghaziabad, Uttar Pradesh 201003", link : "https://www.google.co.in/maps/place/Organic+Outpost/@28.6020053,77.2174113,11z/data=!4m10!1m2!2m1!1sAnoopshahar+fertilizers+store!3m6!1s0x390cfb9705a2ac0f:0x3c31a29db07e1f8e!8m2!3d28.7295711!4d77.3713798!15sCh1Bbm9vcHNoYWhhciBmZXJ0aWxpemVycyBzdG9yZZIBE2ZlcnRpbGl6ZXJfc3VwcGxpZXLgAQA!16s%2Fg%2F11sv64102j?entry=ttu" },
            {photo : "https://lh5.googleusercontent.com/p/AF1QipOEeioHxVRSeKwG3Zwi5BHkMXPijgEEP4h23psN=w426-h240-k-no", address : "KHASRA NO. 265 (M), NANGLI NAGLA, Sector 135, Noida, Uttar Pradesh 201304", link : "https://www.google.co.in/maps/place/A2+VERMI+COMPOST/@28.6020053,77.2174113,11z/data=!4m10!1m2!2m1!1sAnoopshahar+fertilizers+store!3m6!1s0x390ce914104b6f53:0x5d8eee1ba04a49ad!8m2!3d28.4823999!4d77.3842724!15sCh1Bbm9vcHNoYWhhciBmZXJ0aWxpemVycyBzdG9yZZIBE2ZlcnRpbGl6ZXJfc3VwcGxpZXLgAQA!16s%2Fg%2F11qpfnycl3?entry=ttu" },
         ]
        },
        {
            city : "Lucknow",
            stores : [
                {photo : "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=f352YeHwKvar3OS-qc5vLA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=302.16534&pitch=0&thumbfov=100", address : "XWMF+MC9, Sitapur Rd, Bargadi, BKT, Bakshi Ka Talab, Lucknow, Bargadi Magath, Uttar Pradesh 226201", link : "https://www.google.co.in/maps/place/Jain+Fertilizers+%26+Seeds/@28.6020053,77.2174113,6z/data=!4m10!1m2!2m1!1sLuncknow+fertilizers+store!3m6!1s0x3999513707e10acd:0x60fd438324d304d0!8m2!3d26.984161!4d80.923609!15sChhMdWNrbm93IGZlcnRpbGl6ZXIgc3RvcmWSARNmZXJ0aWxpemVyX3N1cHBsaWVy4AEA!16s%2Fg%2F1ptwq9q93?entry=ttu"},
                {photo : "https://lh5.googleusercontent.com/p/AF1QipPQUJNwmc4IodoCIkFIZk6P46wQoNzdN4F-bNNu=w408-h1127-k-no", address : "near kaliji Mandir, Dandiya Bazar, Vishnupuri, Lucknow, Uttar Pradesh 226024", link : "https://www.google.co.in/maps/place/New+Farmer+Seeds+and+fertilizer/@28.6020053,77.2174113,6z/data=!4m10!1m2!2m1!1sLuncknow+fertilizers+store!3m6!1s0x3999575a3f9b70cb:0x6a5a480f658e84c6!8m2!3d26.8863729!4d80.9550811!15sChhMdWNrbm93IGZlcnRpbGl6ZXIgc3RvcmVaGiIYbHVja25vdyBmZXJ0aWxpemVyIHN0b3JlkgETZmVydGlsaXplcl9zdXBwbGllcpoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VRMU9IRXlVMjFuUlJBQuABAA!16s%2Fg%2F11h3m78s_y?entry=ttu"},
                {photo : "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=C8X6cCh-24qBTC6A1ipiUg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=265.8034&pitch=0&thumbfov=100", address : "WW9H+2MC, Madiyaon, Sitapur Road, Madiyanva, Lucknow, Uttar Pradesh 226021", link : "https://www.google.co.in/maps/place/Yogesh+Fertilizers/@28.6020053,77.2174113,6z/data=!4m10!1m2!2m1!1sLuncknow+fertilizers+store!3m6!1s0x3999565ad865d23b:0x9f9768183dce7bc1!8m2!3d26.91756!4d80.929131!15sChhMdWNrbm93IGZlcnRpbGl6ZXIgc3RvcmWSARNmZXJ0aWxpemVyX3N1cHBsaWVy4AEA!16s%2Fg%2F1pp2v0g9k?entry=ttu"},
                {photo : "https://lh5.googleusercontent.com/p/AF1QipMdKfkihE0nKvtlkMdjd0bW7SXXVQHRnVbnjC5S=w426-h240-k-no", address : "3VMX+5C2, Sitapur Rd, Itaunja, Lucknow, Itaunja, Uttar Pradesh 227205", link : "https://www.google.co.in/maps/place/Kribhco+Fertilizers/@28.6020053,77.2174113,6z/data=!4m10!1m2!2m1!1sLuncknow+fertilizers+store!3m6!1s0x39994de2099857cf:0xb09061e8a3eacf2f!8m2!3d27.082897!4d80.89851!15sChhMdWNrbm93IGZlcnRpbGl6ZXIgc3RvcmWSARNmZXJ0aWxpemVyX3N1cHBsaWVy4AEA!16s%2Fg%2F1q5bkywqs?entry=ttu"},
            ]
        }
    ])
}

// addStores();

module.exports = Store;



