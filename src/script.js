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
const  birthDate = document.querySelector('.birthday');
const dateMask = IMask(birthDate, {
	mask: Date,  // enable date mask

	// other options are optional
	pattern: 'Y-`m-`d',  // Pattern mask with defined blocks, default is 'd{.}`m{.}`Y'
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
		from: 1900,
		to: 9999,
	  }
	},
	// define date -> str convertion
	format: function (date) {
	  var day = date.getDate();
	  var month = date.getMonth() + 1;
	  var year = date.getFullYear();

	  if (day < 10) day = "0" + day;
	  if (month < 10) month = "0" + month;

	  return [year, month, day].join('-');
	},
	// define str -> date convertion
	parse: function (str) {
	  var yearMonthDay = str.split('-');
	  return new Date(yearMonthDay[0], yearMonthDay[1] - 1, yearMonthDay[2]);
	},

	// optional interval options
	min: new Date(2000, 0, 1),  // defaults to `1900-01-01`
	max: new Date(2020, 0, 1),  // defaults to `9999-01-01`

	autofix: true,  // defaults to `false`, see details

	// also Pattern options can be set
	lazy: false,

	// and other common options
	overwrite: true  // defaults to `false`
  });
