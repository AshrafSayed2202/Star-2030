const circleText = document.querySelector('.circle-text');
    circleText.innerHTML = circleText.innerHTML.split("").map(
        (char,i)=>
            `<span style="transform:rotate(${i * 9.2}deg)">${char}</span>`
    ).join("")