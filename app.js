const accordion = document.querySelectorAll(".accordion");


accordion.forEach((item) => {
    item.addEventListener("click", () => {
        let answer = item.nextElementSibling;
        let arrow = item.lastElementChild;
        if(answer.classList.contains("answer-hide")){
            answer.classList.remove("answer-hide");
            answer.classList.add("answer-show");
            item.style.border = "0";
            item.style.color = "hsl(238, 29%, 16%)";
            item.style.fontWeight = "700";
            arrow.style.transform = "rotate(180deg)";
        }else if(answer.classList.contains("answer-show")){
            answer.classList.remove("answer-show");
            answer.classList.add("answer-hide");
            item.style.borderBottom = "1px solid hsl(240, 5%, 91%)";
            item.style.fontWeight = "400";
            arrow.style.transform = "rotate(0deg)";
        }
    });
});
