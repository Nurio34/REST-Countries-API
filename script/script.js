
//todo:     FILTER BUTtON EVENTS     //////////
filterBtn.addEventListener("click",()=> {
    optionsList.classList.add("visible")

    setTimeout(() => {
        optionsList.classList.add(`focus`)
        optionBtns.forEach(btn => {
            if(btn.tabIndex === 0) btn.focus()
        })
    }, 200);
})
//todo:     ////////////////////////////////////

//todo:     OPTIONS BUTTONS KEYBOARD EVENTS     //////////
optionBtns.forEach(btn => btn.addEventListener("keydown", e=> {

    const lastBtn = optionBtns[optionBtns.length - 1]
    const firstBtn = optionBtns[0]

        if(e.key === "ArrowDown" || e.key === "ArrowRight") {
                btn.tabIndex = -1

            if(btn !== lastBtn) {
                const nextBtn = btn.parentElement.nextElementSibling.children[0]
                nextBtn.tabIndex = 0
                nextBtn.focus()
            } else {
                firstBtn.tabIndex = 0
                firstBtn.focus()
            }
        }

        else if(e.key === "ArrowUp" || e.key === "ArrowLeft") {
            btn.tabIndex = -1

            if(btn !== firstBtn) {
                const previousBtn = btn.parentElement.previousElementSibling.children[0]
                previousBtn.tabIndex = 0
                previousBtn.focus()
            } else {
                lastBtn.tabIndex = 0
                lastBtn.focus()
            }
        }

        else if(e.key === "Escape") {
            optionsList.classList.remove("visible")
            console.log("ok");
        }

        else if(e.key === "Home") {
            btn.tabIndex = -1
            firstBtn.tabIndex = 0
            firstBtn.focus()        
            console.log(btn);
        }

        else if(e.key === "End") {
            btn.tabIndex = -1
            lastBtn.tabIndex = 0
            lastBtn.focus()        
            console.log(btn);
        }
}))
