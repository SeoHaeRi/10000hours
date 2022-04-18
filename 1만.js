document.addEventListener("DOMContentLoaded", () => {
    const btnExc = document.querySelector(".btn-exc");
    const btnGo = document.querySelector(".btn-go");
    let expertName;
    let practiceTime;
    // 며칠 동안 훈련할지 알려주는 버튼
    btnExc.addEventListener("click", () => {
        expertName = document.querySelector(".expert-name-inp").value;
        practiceTime = document.querySelector(".practice-time-inp").value;
        document.querySelector(".expert-name-result").textContent = expertName;
        document.querySelector(".require-day").textContent = Math.ceil(
            10000 / practiceTime
        );
    });
    // 훈련 버튼
    btnGo.addEventListener("click", () => {
        let howExpert = expertName + "전문가 되는 법";
        let link = "https://www.google.co.kr/search?q=" + howExpert;
        window.open(link);
    });
});