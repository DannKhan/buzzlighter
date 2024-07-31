document.addEventListener("DOMContentLoaded", function() {
    const currentText = document.getElementById("current-text");
    const currentImage = document.getElementById("current-image");
    const nextText = document.getElementById("next-text");
    const nextImage = document.getElementById("next-image");

    // Получаем текущее время в часовом поясе Москвы
    const now = moment().tz("Europe/Moscow");
    const dayOfWeek = (now.day() + 6) % 7; // Сдвигаем индекс, чтобы 0 был понедельником
    const hour = now.hours(); // 0 - 23
    const minute = now.minutes(); // 0 - 59

    // Определяем наборы картинок и текста для каждого дня недели
    const sets = [
        { day: "понедельник", descriptionPresent: "делаем задание на понедельник", descriptionFuture: "будем делать задание на понедельник", imageBefore: "monday_before.jpg", imageAfter: "monday_after.jpg" },
        { day: "вторник", descriptionPresent: "делаем задание на вторник", descriptionFuture: "будем делать задание на вторник", imageBefore: "tuesday_before.jpg", imageAfter: "tuesday_after.jpg" },
        { day: "среда", descriptionPresent: "делаем задание на среду", descriptionFuture: "будем делать задание на среду", imageBefore: "wednesday_before.jpg", imageAfter: "wednesday_after.jpg" },
        { day: "четверг", descriptionPresent: "делаем задание на четверг", descriptionFuture: "будем делать задание на четверг", imageBefore: "thursday_before.jpg", imageAfter: "thursday_after.jpg" },
        { day: "пятница", descriptionPresent: "делаем задание на пятницу", descriptionFuture: "будем делать задание на пятницу", imageBefore: "friday_before.jpg", imageAfter: "friday_after.jpg" },
        { day: "суббота", descriptionPresent: "делаем задание на субботу", descriptionFuture: "будем делать задание на субботу", imageBefore: "saturday_before.jpg", imageAfter: "saturday_after.jpg" },
        { day: "воскресенье", descriptionPresent: "делаем задание на воскресенье", descriptionFuture: "будем делать задание на воскресенье", imageBefore: "sunday_before.jpg", imageAfter: "sunday_after.jpg" },
    ];

    let currentSet, nextSet;

    if (hour < 18 || (hour === 18 && minute < 30)) {
        // До 18:30
        currentSet = sets[dayOfWeek];
        nextSet = sets[(dayOfWeek + 1) % 7];
        currentText.textContent = `Сегодня ${currentSet.day} до смены заданий ${currentSet.descriptionPresent}`;
        currentImage.src = currentSet.imageBefore;
        nextText.textContent = `После смены готовимся делать ${nextSet.descriptionFuture}`;
        nextImage.src = currentSet.imageAfter;
    } else {
        // После 18:30
        currentSet = sets[(dayOfWeek + 1) % 7];
        nextSet = sets[(dayOfWeek + 2) % 7];
        currentText.textContent = `Сегодня ${currentSet.day} до смены заданий ${currentSet.descriptionPresent}`;
        currentImage.src = currentSet.imageBefore;
        nextText.textContent = `После смены готовимся делать ${nextSet.descriptionFuture}`;
        nextImage.src = currentSet.imageAfter;
    }
});
