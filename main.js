
// GOT API
// TASK: Display any watch characters with info(name, title, img)


// Fetch the GOT API
//let person = 2

// function named displayGOTAPI()
async function displayGOTapi(){
    // const response = await fetch(API Link)
    // fetch data from api link
  const rawApiData = await fetch("https://thronesapi.com/api/v2/Characters/");
  
  // change rawApiData to apiData .json()
  const apiData = await rawApiData.json();

  console.log(apiData);

  // declare variables for name, title, img
  // link the dom elements to named variables -> querySelector
  let name = document.querySelector(".name")
  let title = document.querySelector(".title")
  let image = document.querySelector(".image")

  // link the variables to the api data
  // Example -> Data: apiData[0].fullName
  // display the data on the dom

  
  // Search Feature
  // declare search from the dom elements
  let searchBar = document.querySelector(".search-bar");
  console.log(searchBar.value)
  // search.addEventListnere
  searchBar.addEventListener("input", function(){

    // loop over to match the search to the GOT.name
       for(let i = 0; i < apiData.length; i++){
      // if gotData[i].fullName === search.value
      // API data toLowerCase
      const lowerCase = apiData[i].fullName.toLowerCase();
         if(apiData[i].fullName.includes(searchBar.value) || lowerCase.includes(searchBar.value)){
          name.textContent = apiData[i].fullName
          title.textContent = apiData[i].title
          image.src = apiData[i].imageUrl
        
         }
       }
  })
}

// call the function
displayGOTapi.call()