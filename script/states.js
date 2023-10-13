
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
// BACK BUTTON
const backBtn = document.querySelector(".backBtn")
// BORDER COUNTRY BUTTONS
const borderCountryBtns = document.querySelectorAll(".borderCountryBtns button")
// COUNTRY BUTTONS
const countryBtns = document.querySelectorAll(".home li button")


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

//todo:     BACK BUTTON STATES     ///////////////

    backBtn.addEventListener("focus",()=> {
        backBtn.classList.add("focus")
    })

    backBtn.addEventListener("blur",()=> {
        backBtn.classList.remove("focus")
    })

    backBtn.addEventListener("click",()=> {

        backBtn.classList.add("active")
        setTimeout(() => {
            backBtn.classList.remove("active")
        }, 100);
    })

    document.addEventListener("mousemove",e=> {
        
        if(!e.target.classList.contains("backBtn")) backBtn.blur()
        
    })

//todo:     ////////////////////////////////////////////////////////

//todo:     BORDER COUNTRY BUTTONS STATES     ///////////////

    borderCountryBtns.forEach(btn=>btn.addEventListener("focus",()=> {
        btn.classList.add("focus")
    }))

    borderCountryBtns.forEach(btn=>btn.addEventListener("blur",()=> {
        btn.classList.remove("focus")
    }))

    borderCountryBtns.forEach(btn=>btn.addEventListener("click",()=> {
        btn.classList.add("active")
        setTimeout(() => {
            btn.classList.remove("active")

        }, 100);
    }))

    document.addEventListener("mousemove",e=> {
        
        borderCountryBtns.forEach(btn => {

            if(e.target !== btn) btn.blur()  
        })
        
    })

//todo:     ////////////////////////////////////////////////////////

//todo:     COUNTRY LIST BUTTONS STATES     ///////////////

    countryBtns.forEach(btn=>btn.addEventListener("focus",()=> {
        const countryItem = btn.parentElement
        countryItem.classList.add("focus")
        countryItem.classList.add("hover")
    }))

    countryBtns.forEach(btn=>btn.addEventListener("blur",()=> {
        const countryItem = btn.parentElement
        countryItem.classList.remove("focus")
        countryItem.classList.remove("hover")
    }))

    countryBtns.forEach(btn=>btn.addEventListener("click",()=> {
        const countryItem = btn.parentElement
        countryItem.classList.add("active")
        setTimeout(() => {
            countryItem.classList.remove("active")

        }, 100);
    }))

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



