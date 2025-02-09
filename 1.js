let boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    let toggleBtn = box.querySelector('.toggle-btn');
    let icon = toggleBtn.querySelector('i');

    toggleBtn.onclick = () => {
        // إغلاق جميع البوكسات الأخرى
        boxes.forEach(otherBox => {
            if (otherBox !== box) {
                otherBox.classList.remove('active');
                let otherIcon = otherBox.querySelector('.toggle-btn i');
                if (otherIcon) {
                    otherIcon.classList.replace('fa-minus', 'fa-plus');
                }
            }
        });

        // تبديل كلاس الصندوق الحالي
        box.classList.toggle('active');

        // تبديل الأيقونة
        if (box.classList.contains('active')) {
            icon.classList.replace('fa-plus', 'fa-minus');
        } else {
            icon.classList.replace('fa-minus', 'fa-plus');
        }
    };
});




function goBack() {
    window.location.href = "المفردات.html"; // هنا تضع اسم الصفحة التي تريد الرجوع إليها
}
