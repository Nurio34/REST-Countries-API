
// COLOR MODE ELEMENTS
const modeBtn = document.querySelector(".modeCheck")
const modeLabel = document.querySelector("[for='modeCheck']")
// SEARCH INPUT ELEMENTS
const searchInp = document.querySelector(".searchInp")
const searchWrapper = document.querySelector(".searchNav .wrapper")
const icon = searchWrapper.querySelector("i")
// FILTER ELEMENTS
const filterBtn = document.querySelector(".selectBtn")
const optionsList = document.querySelector(".options ul")
const optionBtns = optionsList.querySelectorAll("button")
let timeOut


//todo:     MODE BUTTON STATES    ///////////////
    modeBtn.addEventListener("focus",()=> modeLabel.classList.add("focus"))
    modeBtn.addEventListener("blur",()=> modeLabel.classList.remove("focus"))
    modeBtn.addEventListener("input",()=>{
        modeLabel.classList.add("active")
        setTimeout(() => {
            modeLabel.classList.remove("active")
        }, 100);
    })
    modeLabel.addEventListener("mouseleave",()=> modeLabel.classList.remove("focus"))
//todo:     //////////////////////////////////////////////////////////

//todo:     SEARCH INPUT STATES     ///////////////
    searchInp.addEventListener("focus",()=> searchWrapper.classList.add("focus"))
    searchInp.addEventListener("blur",()=> searchWrapper.classList.remove("focus"))
    searchInp.addEventListener("keydown",e=> {
        if(e.key === "Enter") searchInp.addEventListener("mouseleave",()=> searchWrapper.classList.remove("focus"))
    })

    icon.addEventListener("click",()=> searchInp.focus())
//todo:     //////////////////////////////////////////////////////////

//todo:     FILTER BUTTON STATES     ///////////////
    filterBtn.addEventListener("focus",()=> {
        filterBtn.classList.add("focus")
        clearTimeout(timeOut)
    })
    filterBtn.addEventListener("blur",()=> {
        filterBtn.classList.remove("focus")
        timeOut = setTimeout(() => {
            optionsList.classList.remove("visible") 
        }, 900);
    })
    
    filterBtn.addEventListener("click",()=>{
        filterBtn.classList.add("active")
        setTimeout(() => {
            filterBtn.classList.remove("active")
        }, 100);
    })
    filterBtn.addEventListener("mouseleave",()=> filterBtn.classList.remove("focus"))
//todo:     /////////////////////////////////////////////////////////

//todo:     OPTION BUTTONS STATES     ///////////////
    optionBtns.forEach(btn=> btn.addEventListener("focus",e =>{
        const btnWrapper = e.target.parentElement
            btnWrapper.classList.add("focus")
            optionsList.classList.add("focus")
            clearTimeout(timeOut)
    }))
    optionBtns.forEach(btn=> btn.addEventListener("blur",e =>{
        const btnWrapper = e.target.parentElement
            btnWrapper.classList.remove("focus")
            timeOut = setTimeout(() => {
                optionsList.classList.remove("visible") 
            }, 900);
            
    }))
    optionBtns.forEach(btn=> btn.addEventListener("click",e =>{
        const btnWrapper = e.target.parentElement
            btnWrapper.classList.add("active")
            setTimeout(() => {
                btnWrapper.classList.remove("active")
            }, 100);

            optionsList.classList.remove("visible")
    }))
    optionBtns.forEach(btn=> btn.addEventListener("mouseleave",e =>{
        const btnWrapper = e.target.parentElement
            btnWrapper.classList.remove("focus")
            optionsList.classList.remove("focus")
    }))


    optionsList.addEventListener("mouseleave",()=> {
        timeOut = setTimeout(() => {
            optionsList.classList.remove("visible")
        }, 900);
    })
    optionsList.addEventListener("mouseenter",()=> {
        clearTimeout(timeOut)
    })
//todo:     ////////////////////////////////////////////////////////

