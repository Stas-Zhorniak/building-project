const installBuilds = () => {

    const buildItem = document.querySelectorAll('.build-item path');
    const buildFloors = document.querySelector('#building-floor');
    const buildStreet = document.querySelector('#building-street');
    const buildFlats = document.querySelector('#building-flats');
    const buildAllFlats = document.querySelector('#building-all-flats');
    
    
    buildItem.forEach(item => {
        const getStreet = item.getAttribute('data-street')
            const getFloors = item.getAttribute('data-floors')
            const getFlats = item.getAttribute('data-flats')
            const getAllFlats = item.getAttribute('data-all-flats')
    
            if (getFlats == 0){
                item.classList.add("sales");
            }

            const salesModal = document.querySelectorAll('.sales');
            salesModal.forEach((attr, index) =>{
                attr.setAttribute("data-modal", (index + 1))
            })

        item.addEventListener("mouseover", () => {
            buildStreet.innerHTML = getStreet;
            buildFloors.innerHTML = getFloors;
            buildFlats.innerHTML = getFlats;
            buildAllFlats.innerHTML = getAllFlats;

            item.addEventListener("click", (event) => {
                    if (item.closest('.sales')){
                        event.preventDefault();
                    }
                    
            })
        })
    })
}

    document.querySelector(".building-container") ? installBuilds() : null;

 
    function installModal () {

        const callModalWindow = document.querySelectorAll("[data-modal]");
        const customModal = document.querySelectorAll(".custom-modal");
        const closeModalWindow = document.querySelectorAll(".custom-btn");
        const closeInputBtn = document.querySelectorAll('.close-btn');
        const closeLabelBtn = document.querySelectorAll('.close-label');

        closeInputBtn.forEach((item,index) => {
        item.setAttribute("id", "close-item-" + (index + 1));
        item.style.display = "none";
        });

        closeLabelBtn.forEach((item,index) => {
         item.setAttribute("for", "close-item-" + (index + 1))
        });
    
        customModal.forEach((modalId, index) => {
            modalId.setAttribute("id", "modal-" + (index + 1));
        })
    


        closeModalWindow.forEach((call, index) => {
                const closeWindow = () => {
                    const closeModal = document.querySelector("#modal-" + (index + 1));
                    closeModal.style.display = "none";
                };
                
                closeLabelBtn.forEach((item,index) => {
                    item.addEventListener("click", (event) => {
                        event.target == item ? closeWindow(index) : false; 
                            });
                            call.addEventListener("click", closeWindow);
                    })


                window.addEventListener("keydown", function(e) {
                    if (e.key === 'Escape') {
                        const closeModal = document.querySelector("#modal-" + (index + 1));
                    closeModal.style.display = "none";
                    }
                });
                call.addEventListener("keydown", closeWindow);

                window.addEventListener("click", (event) => {
                    customModal.forEach((item) => {
                        event.target == item ? closeWindow(index) : false;
                    });
                });
                call.addEventListener("click", closeWindow);
            })

        callModalWindow.forEach((call, index) => {
            call.addEventListener("click", () => {
                const callModal = document.querySelector("#modal-" +  (index + 1));
                callModal.style.display = "block";
            })
        })

 }

    document.querySelector(".custom-modal") ? installModal() : null;


    const installCalcHeight = ()=>{
        const buildNavbar = document.querySelector(".buiding-navbar");
        const buildInfo = document.querySelector(".building-info");
      
        
        function reportWindowSize() {
            const buildNavbarHeight = buildNavbar.offsetHeight;
            const buildInfoHeight = buildInfo.offsetHeight;
            const buildInfoTop = buildNavbarHeight - buildInfoHeight - 20;
            buildInfo.style.top = buildInfoTop + "px";
    
          }

          reportWindowSize();
          window.onresize = reportWindowSize;

          
    }
    document.querySelector(".buiding-navbar") ? installCalcHeight() : null;

const flatArray = [
    {
        id: 1,
        house: 3,
        floor: 4,
        square: "82.3 м²",
        price: "700$",
        totalPrice: "57610$",
        flatNumber: 1,
        status: "sale"
    },
    {
        id: 2,
        house: 3,
        floor: 4,
        square: "60.7 м²",
        price: "700$",
        totalPrice: "42490$",
        flatNumber: 1,
        status: "booking"
    },
    {
        id: 3,
        house: 3,
        floor: 4,
        square: "60.7 м²",
        price: "700$",
        totalPrice: "42490$",
        flatNumber: 1,
        status: "sold"
    },
    {
        id: 4,
        house: 3,
        floor: 4,
        square: "82 м²",
        price: "700$",
        totalPrice: "57400$",
        flatNumber: 1,
        status: "promotion"
    },
    {
        id: 5,
        house: 3,
        floor: 4,
        square: "79.7 м²",
        price: "700$",
        totalPrice: "55790$",
        flatNumber: 1,
        status: "promotion"
    },
    {
        id: 6,
        house: 3,
        floor: 4,
        square: "39.2 м²",
        price: "700$",
        totalPrice: "27440$",
        flatNumber: 1,
        status: "promotion"
    },
    {
        id: 7,
        house: 3,
        floor: 4,
        square: "42 м²",
        price: "700$",
        totalPrice: "30240$",
        flatNumber: 1,
        status: "sold"
    },
    {
        id: 8,
        house: 3,
        floor: 4,
        square: "39.2 м²",
        price: "700$",
        totalPrice: "27440$",
        flatNumber: 1,
        status: "booking"
    },
    {
        id: 9,
        house: 3,
        floor: 4,
        square: "79.3 м²",
        price: "700$",
        totalPrice: "55510$",
        flatNumber: 1,
        status: "sale"
    }

]    

window.addEventListener('load', function () {
    function installFloorPlane () {
        const flats = document.querySelectorAll(".flat");
        const flatInfo = document.querySelector('.flat-info');
        const renderInfo = (array) => {
           const flatInformation = array.map(item => {
                return (`
                <div class="flat-item">Номер дома: <b>${item.house}</b></div>
                <div class="flat-item">Номер квартиры: <b>${item.flatNumber}</b></div>
                <div class="flat-item">Кол-во м²: <b>${item.square}</b></div>
                <div class="flat-item">Цена за м²: <b>${item.price}</b></div>
                <div class="flat-item">Цена квартиры: <b>${item.totalPrice}</b></div>
                `)
            })
            flatInfo.innerHTML = flatInformation;
        }

        const flatRemoveActive =()=> flats.forEach(flat => {
            flat.classList.remove("active");
        });

        flats.forEach(flat => {
            flat.addEventListener('mouseover', function(){
                flatRemoveActive();
                flat.classList.add("active");

                const thisFlat = flat.getAttribute("id");
                const flatId = flatArray.filter(item => item.id === Number(thisFlat))
                
                console.table(flatId)
                renderInfo(flatId);

            })
        
            if (flat.classList.contains('booking')) {
                flat.querySelector(".status-text").innerHTML = "Бронь";
            } else if (flat.classList.contains('sold')) {
                flat.querySelector(".status-text").innerHTML = "Продано";
            } else if (flat.classList.contains('sale')) {
                flat.querySelector(".status-text").innerHTML = "Вільна";
            } else {
                flat.querySelector(".status-text").innerHTML = "Акція";
            }
            
        })
    }
    
    document.querySelector(".page-floor") ? installFloorPlane() : null;
})

