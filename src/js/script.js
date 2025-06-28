document.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('typewriter');

    // タイプライターアニメーション終了時の処理
    el.addEventListener('animationend', () => {
        el.classList.remove('typewriter');
        el.classList.add('typewriter-done');
        el.style.width = 'auto';
        el.style.borderRight = 'none';
    });

    // 挨拶表示
    const greeting = getEnglishGreetingByUserTimeZone();
    document.getElementById('greeting').textContent = greeting;

    // ハンバーガーメニュー開閉処理
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});

// ユーザーのタイムゾーンに応じた英語挨拶を返す関数
function getEnglishGreetingByUserTimeZone() {
    try {
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const now = new Date().toLocaleString("en-US", { timeZone });
        const local = new Date(now);
        const hour = local.getHours();

        if (hour >= 4 && hour < 11) {
            return "Good morning!";
        } else if (hour >= 11 && hour < 17) {
            return "Good afternoon!";
        } else if (hour >= 17 && hour < 22) {
            return "Good evening!";
        } else {
            return "Still awake...?";
        }
    } catch (e) {
        return "Hello!";
    }
}
