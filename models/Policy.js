const mongoose = require("mongoose");

const PolicySchema  = new mongoose.Schema({
    name : {
        type: String,
        required : [true,'Name is required']
    },
    body :{
        type: String,
        required : [true, 'Body is required']
    },
    age :  {
        type: Number,
        required : [true, 'Age is required']
    },
    land : {
        type: Number,
        required : [true, 'Land is required']
    },
    income : {
        type : Number,
        required : [true, "Income is required"]
    },
    link : {
        type : String,
    }
});

const Policy = mongoose.model("Policy", PolicySchema);

const addPolicies = async(req,res)=>{
    await Policy.deleteMany({});
    await Policy.insertMany([
        {
            name : " Pradhan Mantri KISAN Samman Nidhi(PM-KISAN) ",
            body : 'the government provides a direct benefit of Rs 6,000 per year to all small and marginal farmers in the country. This benefit is provided in three installments every 4 months.',
            age : 0,
            land : 7.90,
            link: 'https://pmkisan.gov.in/',
            income : 100000000
        },
        {
            name : "The Pradhan Mantri Fasal Bima Yojana ",
            body : "The government bears 50% of the premium for small and marginal farmers, while the farmers bear the remaining 50%.Applicable regionally ",
            age : 0,
            land : 1000000000,
            link: 'https://nationalinsurance.nic.co.in/en/pradhan-mantri-fasal-bima-yojana-pmfby',
            income : 100000000
        },
        {
            name : "Pradhan Mantri Krishi Sinchai Yojana",
            body : "The scheme aims to provide financial assistance to farmers for the installation of micro-irrigation systems. ",
            age : 0,
            land : 7.90,
            link: 'https://pmksy.gov.in/',
            income : 100000000
        },
        {
            name : "Ayushman Sahakar Scheme",
            body : "The scheme was launched in 2023 with a budget of Rs. 10,000 crore. ",
            age : 0,
            land :100000000,
            link: 'https://www.ncdc.in/documents/other/Ayushman-sahakar20102020.pdf',
            income : 100000000
        },
        {
            name : "Pradhan Mantri Kisan Maan-Dhan Yojana (PM-KMY)",
            body : 'guaranteed monthly pension of Rs. 3,000 to small and marginal farmers ',
            age : 18,
            land :7.90,
            link: 'https://cish.icar.gov.in/hindi/event_page.php?a=Launch%20of%20Pradhan%20Mantri%20Kisan%20Maandhan%20Yojana%20(PMKMY)#:~:text=%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%A7%E0%A4%BE%E0%A4%A8%E0%A4%AE%E0%A4%82%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A5%80%20%E0%A4%95%E0%A4%BF%E0%A4%B8%E0%A4%BE%E0%A4%A8%20%E0%A4%AE%E0%A4%BE%E0%A4%A8%E0%A4%A7%E0%A4%A8%20%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8%E0%A4%BE%20(%E0%A4%AA%E0%A5%80%E0%A4%8F%E0%A4%AE%E0%A4%95%E0%A5%87%E0%A4%8F%E0%A4%AE%E0%A4%B5%E0%A4%BE%E0%A4%88)%20%E0%A4%95%E0%A4%BE%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%AE%E0%A5%8B%E0%A4%9A%E0%A4%A8&text=%E0%A4%AF%E0%A4%B9%20%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8%E0%A4%BE%2018%20%E0%A4%B8%E0%A5%87%2040,%E0%A4%89%E0%A4%A8%E0%A4%95%E0%A5%80%20%E0%A4%89%E0%A4%AE%E0%A5%8D%E0%A4%B0%20%E0%A4%AA%E0%A4%B0%20%E0%A4%A8%E0%A4%BF%E0%A4%B0%E0%A5%8D%E0%A4%AD%E0%A4%B0%20%E0%A4%B9%E0%A5%88%E0%A5%A4',
            income : 100000000
        },
        {
            name : " Krishi Kalyan Abhiyan",
            body : ' The scheme aims to improve the income and livelihood of farmers in aspirational districts of India. ',
            age : 0,
            land :1000000,
            link: 'https://kvk.icar.gov.in/kka3_dashboard.aspx',
            income : 100000000
        },
        {
            name : " Soil Health Cards (SHC) Scheme",
            body : ' The scheme aims to provide farmers with a detailed analysis of the nutrient content of their soil, along with recommendations for how to improve soil health and productivity. ',
            age : 0,
            land :1000000,
            link: 'https://soilhealth.dac.gov.in/home',
            income : 100000000
        },
        {
            name : " National Bamboo Mission ",
            body : ' For promoting Bamboo development ',
            age : 0,
            land :1000000,
            link: 'https://nbm.da.gov.in/',
            income : 100000000
        },
        {
            name : " Green Revolution Krishonnati Yojana",
            body : ' This flagship initiative comprises 11 distinct schemes under one umbrella',
            age : 0,
            land :1000000,
            link: 'https://www.myscheme.gov.in/hi/schemes/ky-smsp',
            income : 100000000
        },
        {
            name : " Pradhan Mantri Annadata Aay SanraksHan Abhiyan (PM-AASHA)",
            body : ' It is a centrally sponsored scheme launched by the Government of India in 2018 to provide price support to farmers for their produce.',
            age : 0,
            land :1000000,
            link: 'https://vikaspedia.in/agriculture/policies-and-schemes/crops-related/pradhan-mantri-annadata-aay-sanrakshan-abhiyan',
            income : 100000000
        },
        {
            name : ' Paramparagat Krishi Vikas Yojana ',
            body : ' an Indian government scheme launched in 2015 to promote organic farming.',
            age : 0,
            land :1000000,
            link: 'https://dmsouthwest.delhi.gov.in/scheme/paramparagat-krishi-vikas-yojana/',
            income : 100000000
        },
        {
            name : " National Food Security Mission",
            body : ' It is a government scheme launched in 2007 to increase the production of rice, wheat, and pulses in India.Available in 638 Districts ',
            age : 0,
            land :1000000,
            link: 'https://www.nfsm.gov.in/',
            income : 100000000
        }
    ])
}

addPolicies();

module.exports = Policy;



