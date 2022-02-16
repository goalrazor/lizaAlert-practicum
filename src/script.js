// ------------------------------ var\const ---------------------------- //
const content = document.querySelector('.page');
const accordionButtons = content.querySelectorAll('.accordion__button');
const elChipTemplate = content.querySelector('#chip-template').content;
const chipsList = document.querySelector('.tags-list');
const checkboxLists = document.querySelectorAll('.filter__checkbox-list');
const resetCheckboxButton = document.querySelector('.filter__reset-button');
const singUpButtons = document.querySelectorAll('.button');
let checkedBoxes = {};

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

function parseCheckboxData(input) {
    return {
        label: input.parentNode.querySelector('.filter__label-text').textContent.trim(),
        modifier: input.getAttribute('name'),
    };
}

function addChip(input) {
    const checkboxData = parseCheckboxData(input);
    const checkboxLabel = checkboxData.label;
    const checkboxModifier = checkboxData.modifier;
    const elChip = elChipTemplate.querySelector('.filter-chip').cloneNode(true);
    elChip.classList.add('filter-chip_ctrl_' + checkboxModifier.substring(9)); // отпиливаем от имени чекбокса 'checkbox-'
    elChip.querySelector('.filter-chip__text').textContent = checkboxLabel;
    checkedBoxes[checkboxLabel] = {input, chip: elChip};

    function handleClickChips(e) {
        e.preventDefault();
        checkedBoxes[checkboxLabel].input.checked = false;
        delete checkedBoxes[checkboxLabel];
        elChip.remove();
    }

    elChip.addEventListener('click', handleClickChips);
    return elChip;
}

function removeChip(input) {
    const checkboxLabel = parseCheckboxData(input).label;
    const elChip = checkedBoxes[checkboxLabel].chip;
    delete checkedBoxes[checkboxLabel];
    elChip.remove();
}

function handleInputCheckbox(e) {
    const inputCheckbox = e.target;
    if (inputCheckbox.classList.contains('filter__checkbox')) {
        if (inputCheckbox.checked) {
            chipsList.append(addChip(inputCheckbox));
            resetCheckboxButton.classList.add('filter__reset-button_active');
        } else {
            removeChip(inputCheckbox);
        }
    }
}

function resetFilters() {
    chipsList.querySelectorAll('li').forEach(el => {
        el.remove();
    });
    resetCheckboxButton.classList.remove('filter__reset-button_active');
}

// ------------------------------ listeners ---------------------------- //
accordionButtons.forEach((accordionButton) => {
    accordionButton.addEventListener('click', function(event) {
        event.preventDefault();
        toggleAccordion(this);
    });
});

checkboxLists.forEach((checkboxList) => {
    checkboxList.addEventListener('input', handleInputCheckbox);
});

resetCheckboxButton.addEventListener('click', resetFilters);

singUpButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.target.classList.add('button_active');
        event.target.textContent = 'Продолжить';
    });
});
// ------------------------------ execution ---------------------------- //
