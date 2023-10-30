let recipeCards  = document.getElementsByClassName('recipe-card')
recipeCards = Array.from(recipeCards)

recipeCards.forEach(function(recipeCard) {
    recipeCard.addEventListener('mouseenter', () => {
        recipeCard.style.transform = 'scale(1.15 , 1.15)'
    })
    recipeCard.addEventListener('mouseleave', () => {
        recipeCard.style.transform = 'scale(1 , 1)'
    })
})