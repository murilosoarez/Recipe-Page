let recipeCards  = document.getElementsByClassName('recipe-card')
recipeCards = Array.from(recipeCards)

let gitSymbol = document.getElementById('git-symbol')

gitSymbol.addEventListener('mouseenter', () => {
    gitSymbol.style.transition = 'transform 0.3s ease'
    gitSymbol.style.transform = 'scale(1.15 , 1.15)'
})

gitSymbol.addEventListener('mouseleave', () => {
    gitSymbol.style.transition = 'transform 0.3s ease'
    gitSymbol.style.transform = 'scale(1 , 1)'
})


recipeCards.forEach(function(recipeCard) {
    recipeCard.addEventListener('mouseenter', () => {
        recipeCard.style.transition = 'transform 0.3s ease'
        recipeCard.style.transform = 'scale(1.15 , 1.15)'
    })

    recipeCard.addEventListener('mouseleave', () => {
        recipeCard.style.transition = 'transform 0.3s ease'
        recipeCard.style.transform = 'scale(1 , 1)'
    })
})