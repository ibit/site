// 背景色変更ボタン
const btn = document.getElementById('toggleBtn');

btn.addEventListener('click', () => {
    document.body.classList.toggle('invert');
});

document.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('typewriter');

  // アニメーション終了イベントを監視
    el.addEventListener('animationend', () => {
    // タイプライタークラスを外して固定表示クラスをつける
    el.classList.remove('typewriter');
    el.classList.add('typewriter-done');
    });
});

// 挨拶の表示
document.addEventListener('DOMContentLoaded', () => {
    const greeting = getEnglishGreetingByUserTimeZone();
    document.getElementById('greeting').textContent = greeting;

    const el = document.getElementById('typewriter');
    el.addEventListener('animationend', () => {
    el.classList.remove('typewriter');
    el.classList.add('typewriter-done');
    el.style.width = 'auto';
    el.style.borderRight = 'none';
    });
});

// 閲覧ユーザーのタイムゾーンに基づいて挨拶
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
