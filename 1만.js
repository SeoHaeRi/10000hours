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
        /*
        let form = document.createElement('form');
        form.action = 'https://google.com/search';
        form.method = 'GET';

        form.innerHTML = '<input name="q" value="`${}`">';

        // 폼을 제출하려면 반드시 폼이 문서 안에 있어야 합니다.
        document.body.append(form);

        form.submit();
        */
        location.href = "https://www.google.co.kr/search?q=" + expertName;
    });
});
