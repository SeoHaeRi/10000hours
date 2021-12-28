document.addEventListener("DOMContentLoaded", () => {
    let btn = document.querySelector(".btn-exc");
    btn.addEventListener("click", () => {
        let expertName = document.querySelector(".expert-name-inp").value;
        let practiceTime = document.querySelector(".practice-time-inp").value;

        document.querySelector(".expert-name-result").textContent = expertName;
        document.querySelector(".require-day").textContent = Math.ceil(
            10000 / practiceTime
        );
    });
});
