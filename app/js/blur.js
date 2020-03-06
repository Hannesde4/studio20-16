const modal = document.getElementById("myModal");
const containerBlur = document.getElementById("blurContainer");
const btnOpen = document.getElementById("upload-file");
const btnClose = document.getElementById("cancel-upload");

btnOpen.onclick = function(){
    modal.className = "Modal is-visuallyHidden",
    setTimeout(function(){
        containerBlur.className = "BlurContainer is-blurred";
        modal.className="Modal";
    },100),
    containerBlur.parentElement.className = "body-homepage ModalOpen";
}

btnClose.onclick=function(){
    modal.className = "Modal is-hidden is-visuallyHidden";
    containerBlur.className = "BlurContainer";
    containerBlur.parentElement.className = "body-homepage";
}