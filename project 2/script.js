const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circle = document.querySelectorAll('.circle')

/* Index value of circle : 0,1,2,3 and length = 4 and it will be a nodelist */

let currentActive = 1 /* Varibale is given value of 1 for being active */

next.addEventListener('click', () => {
    currentActive++ /* If a click happens, the active variable should incremented */

    if(currentActive > circle.length) /* This active variable is checked with circle length to check whether it  reached the final end */
    {
        currentActive = circle.length /* If yes, set the length = active variable, so that the next button can be disabled */
    }
    update() /* Function to update the progress bar and the button condition */

})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) /* This active variable is checked with circle length to check whether it reached starting end */
    {
        currentActive = 1 /* If the variable reaches 1, set the active variable = 1, so that the prev button can be disabled */
    }
    update() /* Function to update the progress bar and the button condition */

})

function update()
{
    circle.forEach((circle, index) => {
        if(index < currentActive) /* If index value is less than active value then it means that the index div needs to be activated */
        {
            circle.classList.add('active') /* Active classes are added */
        }
        else /* Else the condition - Active classes are removed */
        {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active') /* Collect the list of active divs */
    progress.style.width = (actives.length -1) / (circle.length - 1) *100 + '%' /* There is only 3 progress points : 1-2, 2-3, 3-4. Thus,the width value of progress bar should be 0, 33.3%, 66.6% and 100% to give a progress bar.

    For that, no. of active classes and no. of circle are taken. No. of circles are reduced by 1 coz only 2,3 and 4 circles will be progressed. And the no. of actives are reduced by 1 coz always one circle will be active. Then they are divided to get the percentage and a % symbol is added and written to the stylesheet dynamically */

    if(currentActive === 1)
    {
        prev.disabled = true /* When active variable becomes 1 - prev gets disabled */
    }
    else if(currentActive === circle.length)
    {
        next.disabled = true /* When active variable equals the circle length - next button gets disabled */
    }
    else /* Else the condition - both will be active */
    {
        prev.disabled = false
        next.disabled = false
    }
}