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
const birthDate = document.querySelector('#birthday');
const dateMask = IMask(birthDate, {
    mask: Date,

    pattern: 'DD.MM.YYYY',

    blocks: {
        YYYY: {
            mask: IMask.MaskedRange,
            from: 1920,
            to: 2010,
        },
        MM: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 12,
        },
        DD: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 31,
        },
    },
    autofix: true,
    overwrite: true,
    lazy: false,
});
