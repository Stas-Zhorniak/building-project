const installBuilds = () => {

    const buildItem = document.querySelectorAll('.build-item path');
    const buildFloors = document.querySelector('#building-floor');
    const buildStreet = document.querySelector('#building-street');
    const buildFlats = document.querySelector('#building-flats');
    
    
    buildItem.forEach(item => {
        const getStreet = item.getAttribute('data-street')
            const getFloors = item.getAttribute('data-floors')
            const getFlats = item.getAttribute('data-flats')
    
            if (getFlats == 0){
                item.classList.add("sales");
            }

            const salesModal = document.querySelectorAll('.sales');
            salesModal.forEach((attr, index) =>{
                attr.setAttribute("data-modal", index + 1)
            })

        item.addEventListener("mouseover", () => {
            buildStreet.innerHTML = getStreet;
            buildFloors.innerHTML = getFloors;
            buildFlats.innerHTML = getFlats;

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
        const customModal = document.querySelectorAll(".custom-content");
        const closeModalWindow = document.querySelectorAll(".custom-btn");
        const modalOverlayClose = document.querySelectorAll(".custom-modal");
    
        customModal.forEach((modalId, index) => {
            modalId.setAttribute("id", "modal-" + (index + 1));
        })
    
        callModalWindow.forEach((call, index) => {
            call.addEventListener("click", () => {
                const callModal = document.querySelector("#modal-" +  (index + 1));
                callModal.style.display = "block";
                
                

            })
        })
    
   
        closeModalWindow.forEach((call, index) => {
            call.addEventListener("click", function closeWindow () {
                const closeModal = document.querySelector("#modal-" +  (index + 1));
                closeModal.style.display = "none";

                window.onclick = (event) =>  modalOverlayClose.forEach(item => {
                    event.target == item ? closeWindow () : false;
                        
                })
                });
            })
 }

    document.querySelector(".custom-modal") ? installModal() : null;





