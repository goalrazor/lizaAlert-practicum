// ------------------------------ var\const ---------------------------- //
const content = document.querySelector('.page');
const accordionButtons = content.querySelectorAll('.accordion__button');

// ------------------------------ functions ---------------------------- //
function toggleAccordion(el) {
    const elChevron = el.querySelector('.accordion__chevron');
    const elDropPanel = el.nextElementSibling;
    elChevron.classList.toggle('accordion__chevron_opened');
    elDropPanel.classList.toggle('accordion__drop-panel_active');
    if (elDropPanel.style.maxHeight) {
        elDropPanel.style.maxHeight = null;
    } else {
        elDropPanel.style.maxHeight = elDropPanel.scrollHeight + 'px';
    }
}

// ------------------------------ listeners ---------------------------- //
accordionButtons.forEach((accordionButton) => {
    accordionButton.addEventListener('click', function() {
        toggleAccordion(this);
    });
});
// ------------------------------ execution ---------------------------- //
