window.onload = function () {
    let recipes = document.querySelector('.recipesRows');

    let ajax = new XMLHttpRequest();
    ajax.open('GET', '/homePageData');
    ajax.onreadystatechange = () => {
       
        if (ajax.readyState === 4 && ajax.status === 200) {
            let recipesData = JSON.parse(ajax.responseText);
            let recipesElements = "";
            for(let i = 0; i < recipesData.length; i++) {
                recipesElements += ` <div class="recipeBox" onclick="window.location.href= '/recipes_detail/${recipesData[i].idrecipe}';return false">
                <div class="recipePicture">
                    <img style="width: 280px; height: 100%; border-top-left-radius: 10px; border-top-right-radius: 10px;" src="${recipesData[i].picture}">
                </div>
                <div class="titleAndTime">
                    <a class="title">${recipesData[i].foodname}</a>
                    <a class="time">${recipesData[i].times}</a>
                </div>
            </div>`
            
            
            
                recipes.innerHTML = recipesElements;
            
            }
           
           
            
        }
        
    };
    ajax.send();
    // let categories = document.querySelector('.categories')

}