
// COLOR MODE ELEMENTS
const modeBtn = document.querySelector(".modeCheck")
const modeLabel = document.querySelector("[for='modeCheck']")
// SEARCH INPUT ELEMENTS
const searchInp = document.querySelector(".searchInp")
const searchWrapper = document.querySelector(".searchNav .wrapper")
const searchIcon = searchWrapper.querySelector("i")
// FILTER ELEMENTS
const filterBtn = document.querySelector(".selectBtn")
const optionsList = document.querySelector(".options ul")
const optionBtns = optionsList.querySelectorAll("button")
const filterIcon = filterBtn.querySelector("i")
let timeOut
// BORDER COUNTRY BUTTONS
const borderCountryBtns = document.querySelectorAll(".borderCountryBtns button")

// COUNTRY BUTTONS
let countryBtns = document.querySelectorAll(".home li button")
let countryListBtns = document.querySelectorAll(".home li")


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

    searchIcon.addEventListener("click",()=> searchInp.focus())
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
            !filterIcon.classList.contains("open") ? filterIcon.classList.add("open") : filterIcon.classList.remove("open")
        }, 900);
    })
    
    filterBtn.addEventListener("click",()=>{
        filterBtn.classList.add("active")
        setTimeout(() => {
            filterBtn.classList.remove("active")
        }, 100);
    })

    filterBtn.addEventListener("mouseleave",()=> {
        filterBtn.classList.remove("focus")

        if(optionsList.classList.contains("visible")) {
            timeOut = setTimeout(() => {
                optionsList.classList.remove("visible")
                !filterIcon.classList.contains("open") ? filterIcon.classList.add("open") : filterIcon.classList.remove("open")
            }, 900);
        }
    })

    filterBtn.addEventListener("mouseenter",()=>{
        clearTimeout(timeOut)
    })
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
    }))
    optionBtns.forEach(btn=> btn.addEventListener("click",e =>{
        const btnWrapper = e.target.parentElement

            btnWrapper.classList.add("active")
            setTimeout(() => {
                btnWrapper.classList.remove("active")
            }, 100);

            optionsList.classList.remove("visible")

            !filterIcon.classList.contains("open") ? filterIcon.classList.add("open") : filterIcon.classList.remove("open")

    }))
    optionBtns.forEach(btn=> btn.addEventListener("mouseleave",e =>{
        const btnWrapper = e.target.parentElement
            btnWrapper.classList.remove("focus")
            optionsList.classList.remove("focus")
    }))

    optionsList.addEventListener("mouseleave",()=> {
        timeOut = setTimeout(() => {
            optionsList.classList.remove("visible")
                
            !filterIcon.classList.contains("open") ? filterIcon.classList.add("open") : filterIcon.classList.remove("open")
        }, 900);
    })
    optionsList.addEventListener("mouseenter",()=> {
        clearTimeout(timeOut)
    })
//todo:     ////////////////////////////////////////////////////////



//todo:     COUNTRY LIST BUTTONS STATES     ///////////////

document.addEventListener("mousemove",e=> {
    
    countryBtns.forEach(btn => {
        const countryItem = btn.parentElement
        
        if( e.target !== countryItem ) {
            countryItem.classList.remove("focus")
            countryItem.classList.remove("hover")
        }

    })
    
})

//todo:     ////////////////////////////////////////////////////////


//todo:     FILTER BUTtON EVENTS     ///////////////////////////////////

filterBtn.addEventListener("click",(e)=> {
    
    !optionsList.classList.contains("visible") ? optionsList.classList.add("visible") : optionsList.classList.remove("visible")

    setTimeout(() => {
        optionsList.classList.add(`focus`)
        optionBtns.forEach(btn => {
            if(btn.tabIndex === 0) btn.focus()
        })
    }, 200);

    !filterIcon.classList.contains("open") ? filterIcon.classList.add("open") : filterIcon.classList.remove("open")
})

//todo:     ///////////////////////////////////////////////////////////////

