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
	accordionButton.addEventListener('click', function () {
		toggleAccordion(this);
	});
});
// ------------------------------ execution ---------------------------- //
const  birthDate = document.querySelector('#birthday');
console.log(birthDate);
const dateMask = IMask(birthDate, {
	mask: Date,  // enable date mask

	// other options are optional
	pattern: 'd-`m-`Y',  // Pattern mask with defined blocks, default is 'd{.}`m{.}`Y'
	// you can provide your own blocks definitions, default blocks for date mask are:
	blocks: {
	  d: {
		mask: IMask.MaskedRange,
		from: 1,
		to: 31,
		maxLength: 2,
	  },
	  m: {
		mask: IMask.MaskedRange,
		from: 1,
		to: 12,
		maxLength: 2,
	  },
	  Y: {
		mask: IMask.MaskedRange,
		from: 1920,
		to: 2010,
	  }
	},
  });
