document.addEventListener("DOMContentLoaded", () => {
    
    let all_faq_btns = document.querySelectorAll(".faq-btn")

    for (let faq_btn of all_faq_btns)
    {
        faq_btn.addEventListener("click", () => {

            let plus_icon = faq_btn.querySelector('.faq-btn-plus');
            let minus_icon = faq_btn.querySelector('.faq-btn-minus')

            faq_btn.classList.toggle('rotate-180');
            plus_icon.classList.toggle('opacity-0');
            minus_icon.classList.toggle('opacity-0');

            let wrapper = faq_btn.closest('label').nextElementSibling;

            // Check if it's open
            if (wrapper.classList.contains('grid-rows-[1fr]')) {
                // It's open, so close it
                wrapper.classList.remove('grid-rows-[1fr]', 'opacity-100');
                wrapper.classList.add('grid-rows-[0fr]', 'opacity-0');
            } else {
                // It's closed, so open it
                wrapper.classList.remove('grid-rows-[0fr]', 'opacity-0');
                wrapper.classList.add('grid-rows-[1fr]', 'opacity-100');
            }
        });
    }
});