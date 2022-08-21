// LIst of the 2022 mtn app of the year categories
let mtnCategories = ["Best Consumer Solution",
                     "Best Enterprise Solution",
                     "Most Innovative Solution", 
                     "Best Gaming Solution", 
                     "Best Health Solution", 
                     "Best Agricultural Solution", 
                     "Best Educational Solution",
                     "Best Financial Solution",
                     "Best Hackathon Solution",
                     "Best 'South African' Solution",
                     "Best Campus Cup Soluiton",
                     "Best African Solution",
                     "Huawei Category 15"             
                ];
// code to predict a random winner from the list
let category = mtnCategories[Math.floor(Math.random() * mtnCategories.length)];
// printing out the winner
console.log('And the winner is....' + category);
