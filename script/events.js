
const countriesWrapper = document.querySelector(".home ul")
let data = []
let countryInfo = []

    window.addEventListener("load",e=>{

        connectAPI()
        .then(()=> {
            firstEightCountry = data.slice(0,10)
    
    
           adjustCountriesWrapper(firstEightCountry)
            
        })
        .then(()=> {
            optionBtns.forEach(btn=>btn.addEventListener("click",e=>{
        
                const value = btn.innerText
                const regionSearchedCountries = data.filter((item) => {
        
                    if(item.region == value){
                        return item
                    }
                })

                adjustCountriesWrapper(regionSearchedCountries)
            }))
        })
        .then(()=>{
            searchInp.addEventListener("change",e=>{
                let value = searchInp.value.toLowerCase()
        
                const country = data.filter(item=> {
        
                    const searchedCountryName = item.name.common.toLowerCase()
        
                    if(searchedCountryName.indexOf(value) >= 0) {
                        return item
                    }
                })
            
                adjustCountriesWrapper(country)
            } )
        })
        .then(()=> {
            
        })
        .then(()=>{
            const datatlistEl = document.querySelector("datalist")

                datatlistEl.innerHTML =data.map(data=> {
                    return `
                    <option value="${data.name.common}"></option>
                    `
                }).join("")
        })
    })




//todo:     OPTIONS BUTTONS KEYBOARD EVENTS     //////////

optionBtns.forEach(btn => btn.addEventListener("keydown", e=> {

    const lastBtn = optionBtns[optionBtns.length - 1]
    const firstBtn = optionBtns[0]

        if(e.key === "ArrowDown" || e.key === "ArrowRight") {
            e.preventDefault()

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
            e.preventDefault()

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
            e.preventDefault()

            optionsList.classList.remove("visible")

        }

        else if(e.key === "Home") {
            e.preventDefault()

            btn.tabIndex = -1
            firstBtn.tabIndex = 0
            firstBtn.focus()        

        }

        else if(e.key === "End") {
            e.preventDefault()

            btn.tabIndex = -1
            lastBtn.tabIndex = 0
            lastBtn.focus()        

        }
}))

//todo:     ///////////////////////////////////////////////////////////



//todo:     COUNTRY BUTTONS KEYBOARD EVENTS     //////////

countryBtns.forEach(btn => btn.addEventListener("keydown", e=> {

    const lastBtn = countryBtns[countryBtns.length - 1]
    const firstBtn = countryBtns[0]

        if(e.key === "ArrowDown" || e.key === "ArrowRight") {
                btn.tabIndex = -1

            if(btn !== lastBtn) {
                const nextBtn = btn.parentElement.nextElementSibling.querySelector("button")
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
                const previousBtn = btn.parentElement.previousElementSibling.querySelector("button")
                previousBtn.tabIndex = 0
                previousBtn.focus()
            } else {
                lastBtn.tabIndex = 0
                lastBtn.focus()
            }
        }

        else if(e.key === "Escape") {
            btn.parentElement.classList.remove("focus","hover")
            filterBtn.focus()
        }

        else if(e.key === "Home") {
            btn.tabIndex = -1
            firstBtn.tabIndex = 0
            firstBtn.focus()        

        }

        else if(e.key === "End") {
            btn.tabIndex = -1
            lastBtn.tabIndex = 0
            lastBtn.focus()        

        }
}))

//todo:     ///////////////////////////////////////////////////////////



//todo:     COUNTRY BUTTONS CLICK EVENTS     //////////

const searchNav = document.querySelector(".searchNav")
const homeSection = document.querySelector("section.home")
const detailsSection = document.querySelector("section.details")

    countryBtns.forEach(btn=>btn.addEventListener("click",e=>{
        adjustEls("add")
    }))


    countryListBtns.forEach(btn=>btn.addEventListener("click",e=>{
        adjustEls("add")
    }))

//todo:     ///////////////////////////////////////////////////////////



//todo:     BORDERCOUNTRY BUTTONS CLICK EVENTS     ////////////////////////////

    borderCountryBtns.forEach(btn=>btn.addEventListener("click",e=>{
        adjustEls("remove")
    }))

//todo:     ///////////////////////////////////////////////////////////


function adjustEls(action) {
    searchNav.classList.remove("hidden")
    homeSection.classList.remove("hidden")
    detailsSection.classList.remove("visible")

    if( action === "add" ) {
        searchNav.classList.add("hidden")
        homeSection.classList.add("hidden")
        detailsSection.classList.add("visible")
    }
}

async function connectAPI() {

    const res = await axios.get("https://restcountries.com/v3.1/all")
        data = res.data
}



function adjustCountriesWrapper(filteredData) {

    countriesWrapper.innerHTML = filteredData.map((
        {flags,name,population,region,capital},i
        )=> {
        
        const Population = population.toLocaleString().split(".").join(",")
        return `
        <li data-info="${name.common}">
            <figure>
              <img src="${flags.png}" alt="" />
            </figure>
            <figcaption>
              <h2 id="country${i+1}">${name.common}</h2>
              <p>Population: <span>${Population}</span></p>
              <p>Region: <span>${region}</span></p>
              <p>Capital: <span>${capital}</span></p>
            </figcaption>
            <button aria-labelledby="country${i+1}"></button>
        </li>
        `
    }).join("")

    countryListBtns = document.querySelectorAll(".home li")

    countryListBtns.forEach(btn=>btn.addEventListener("click",e=>{

        const value = btn.dataset.info
            adjustDetailsSection(value)
            
    }))

    adjustCountryBtnsStates()
    adjustCountryBtnsKeyEvents()
}

function adjustBackBtnStates(backBtn) {


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
    
    backBtn.addEventListener("click",e=>adjustEls("remove") )
    
}

function adjustBorderCountryBtns(borderCountryBtns) {

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
}

function adjustCountryBtnsStates() {

    countryBtns = document.querySelectorAll(".home li button")

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
}

function adjustCountryBtnsKeyEvents() {

    countryBtns.forEach(btn=>btn.addEventListener("keydown",e=>{

        countryBtns.forEach(btn=>btn.tabIndex = "-1")
        btn.tabIndex = "0"

        const lastBtn = countryBtns[countryBtns.length - 1]
        const firstBtn = countryBtns[0]
    

            if(e.key === "ArrowDown" || e.key === "ArrowRight") {
                e.preventDefault()

                    btn.tabIndex = -1

                if(btn !== lastBtn) {
                    const nextBtn = btn.parentElement.nextElementSibling.querySelector("button")
                    nextBtn.tabIndex = 0
                    nextBtn.focus()
                } else {
                    firstBtn.tabIndex = 0
                    firstBtn.focus()
                }
            }

            else if(e.key === "ArrowUp" || e.key === "ArrowLeft") {
                e.preventDefault()

                btn.tabIndex = -1

                if(btn !== firstBtn) {
                    const previousBtn = btn.parentElement.previousElementSibling.querySelector("button")
                    previousBtn.tabIndex = 0
                    previousBtn.focus()
                } else {
                    lastBtn.tabIndex = 0
                    lastBtn.focus()
                }
            }

            else if(e.key === "Escape") {
                e.preventDefault()

                btn.parentElement.classList.remove("focus","hover")
                filterBtn.focus()
            }

            else if(e.key === "Home") {
                e.preventDefault()

                btn.tabIndex = -1
                firstBtn.tabIndex = 0
                firstBtn.focus()        

            }

            else if(e.key === "End") {
                e.preventDefault()

                btn.tabIndex = -1
                lastBtn.tabIndex = 0
                lastBtn.focus()        

            }
    }))
}

function adjustDetailsSection(value) {
        const country = value
        countryInfo = data.filter(item=> item.name.common == country)
        adjustEls("add")
            console.log(countryInfo);

        const detailsSection = document.querySelector("section.details")
    
            let Languages
            let Currencies
            let AllCurrencies = []
            let Borders = []

            detailsSection.innerHTML = countryInfo.map(
                ({flags,name,population,region,subregion,capital,currencies,languages,borders,tld})=> {

                const Population = population.toLocaleString().split(".").join(",")

                Currencies = Object.values(currencies)
                AllCurrencies = Currencies.map(item=>{
                    return item.name
                }).join(", ")
            
                Languages = Object.values(languages)

                borders.forEach(border=> {
                    
                    data.filter(item => {

                        if(item.fifa == border) Borders.push(item.name.common)
                    })
                })
                
                

                return  `
                <button class="backBtn">
                &lt; Back
                </button>
                
                <figure>
                    <img src="${flags.png}" alt="">
        
                    <figcaption>
        
                    <h2>${name.common}</h2>
        
                    <div class="wrapper flex clmn-1">
        
                        <div class="wrapper flex clmn-2">
                        <p>Native Name: <span>${name.official}</span></p>
                        <p>Population: <span>${Population}</span></p>
                        <p>Region: <span>${region}</span></p>
                        <p>Sub Region: <span>${subregion}</span></p>
                        <p>Capital: <span>${capital[0]}</span></p>
                        </div>
        
                        <div class="wrapper flex clmn-2">
                        <p>Top Level Domain: <span>${tld}</span></p>
                        <p class="currencies">Currencies:  <span></span></p>
                        <p class="languages">Languages <span></span></p>
                        </div>
        
                    </div>
        
                    <div class="btnsWrapper">
                        <h3>Border Countries:</h3>
                        <ol class="borderCountryBtns flex">
                        </ol>
                    </div>
        
                    </figcaption>
                </figure>
                    `
            }).join()

            const currenciesEl = document.querySelector(".currencies span")
                currenciesEl.innerHTML = AllCurrencies
        

            const languagesEl = document.querySelector(".languages span")
                languagesEl.innerHTML = Languages.map(item=>{
                    return item
                }).join(", ")

            const borderCountryBtnsWrapper = document.querySelector(".borderCountryBtns")
                borderCountryBtnsWrapper.innerHTML = Borders.map(item=> {
                    return `
                    <li><button>${item}</button></li>
                    `
                }).join("")



            const backBtn = detailsSection.querySelector(".backBtn")
                adjustBackBtnStates(backBtn)

            const borderCountryBtns = borderCountryBtnsWrapper.querySelectorAll("button")
                adjustBorderCountryBtns(borderCountryBtns)
        
                borderCountryBtns.forEach(btn=>btn.addEventListener("click",e=>{
                    const value = btn.innerHTML
                        adjustDetailsSection(value)
                }))

                borderCountryBtns.forEach(btn=>btn.addEventListener("keydown",e=>{

                    const lastBtn = borderCountryBtns[borderCountryBtns.length - 1]
                    const firstBtn = borderCountryBtns[0]

                    borderCountryBtns.forEach(btn=>btn.tabIndex = "-1")
                    btn.tabIndex = 0


                        if(e.key === "ArrowDown" || e.key === "ArrowRight") {
                            e.preventDefault()

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
                            e.preventDefault()

                            btn.tabIndex = -1

                            if(btn !== firstBtn) {
                                const previousBtn = btn.parentElement.previousElementSibling.querySelector("button")
                                previousBtn.tabIndex = 0
                                previousBtn.focus()
                            } else {
                                lastBtn.tabIndex = 0
                                lastBtn.focus()
                            }
                        }

                        else if(e.key === "Escape") {
                            e.preventDefault()

                            btn.classList.remove("focus","hover")
                            backBtn.focus()
                        }

                        else if(e.key === "Home") {
                            e.preventDefault()

                            btn.tabIndex = -1
                            firstBtn.tabIndex = 0
                            firstBtn.focus()        

                        }

                        else if(e.key === "End") {
                            e.preventDefault()

                            btn.tabIndex = -1
                            lastBtn.tabIndex = 0
                            lastBtn.focus()
                        }
                }))


}

