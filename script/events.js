
const countriesWrapper = document.querySelector(".home ul")
let data = []

    window.addEventListener("load",e=>{

        connectAPI()
        .then(()=> {
            console.log(data)

            countriesWrapper.innerHTML = data.map((
                {flags,name,continents,population,region,capital},i
                )=> {
                
                const Population = population.toLocaleString().split(".").join(",")
                return `
                <li data-info="${continents}">
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
        })
            
        
    })



//todo:     FILTER BUTtON EVENTS     ///////////////////////////////////

filterBtn.addEventListener("click",()=> {
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
        connectAPI()
    }))

const countryListBtns = document.querySelectorAll(".home li")

    countryListBtns.forEach(btn=>btn.addEventListener("click",e=>{
        adjustEls("add")
        connectAPI()
    }))

//todo:     ///////////////////////////////////////////////////////////



//todo:     GOBACK BUTTON CLICK EVENTS     ////////////////////////////
    backBtn.addEventListener("click",e=>adjustEls("remove") )

//todo:     ///////////////////////////////////////////////////////////



//todo:     BORDERCOUNTRY BUTTONS CLICK EVENTS     ////////////////////////////

    borderCountryBtns.forEach(btn=>btn.addEventListener("click",e=>{
        adjustEls("remove")
    }))

//todo:     ///////////////////////////////////////////////////////////



//todo:     OPTION BUTTONS CLICK EVENTS     ////////////////////////////

    optionBtns.forEach(btn=>btn.addEventListener("click",e=>{
        
        const value = btn.innerText

        const regionSearchedCountries = data.filter((item) => {

            if(item.continents == value){
                return item
            }
        })
        console.log(regionSearchedCountries);
        countriesWrapper.innerHTML = regionSearchedCountries.map((
            {flags,name,continents,population,region,capital}
            )=> {
            
            const Population = population.toLocaleString().split(".").join(",")
            return `
            <li data-info="${continents}">
                <figure>
                  <img src="${flags.png}" alt="" />
                </figure>
                <figcaption>
                  <h2 id="country1">${name.common}</h2>
                  <p>Population: <span>${Population}</span></p>
                  <p>Region: <span>${region}</span></p>
                  <p>Capital: <span>${capital}</span></p>
                </figcaption>
                <button aria-labelledby="country1"></button>
            </li>
            `
        }).join("")
    }))

//todo:     ///////////////////////////////////////////////////////////



//todo:     SEARCH INPUT EVENTS     ////////////////////////////

    searchInp.addEventListener("change",e=>{
        let value = searchInp.value.toLowerCase()

        const country = data.filter(item=> {

            const searchedCountryName = item.name.common.toLowerCase()

            if(searchedCountryName.indexOf(value) >= 0) {
                return item
            }
        })
    
        countriesWrapper.innerHTML = country.map((
            {flags,name,continents,population,region,capital}
            )=> {
            
            const Population = population.toLocaleString().split(".").join(",")
            return `
                <li data-info="${continents}">
                    <figure>
                    <img src="${flags.png}" alt="" />
                    </figure>
                    <figcaption>
                    <h2 id="country1">${name.common}</h2>
                    <p>Population: <span>${Population}</span></p>
                    <p>Region: <span>${region}</span></p>
                    <p>Capital: <span>${capital}</span></p>
                    </figcaption>
                    <button aria-labelledby="country1"></button>
                </li>
            `
        }).join("")
    } )


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


