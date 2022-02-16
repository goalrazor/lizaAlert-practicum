// ------------------------------ var\const ---------------------------- //
const birthDate = document.querySelector('#birthday');

// ------------------------------ functions ---------------------------- //

const dateMask = IMask(birthDate, {
    mask: Date,

    pattern: 'DD.MM.YYYY',

    blocks: {
        YYYY: {
            mask: IMask.MaskedRange,
            from: 1920,
            to: 2010,
            placeholderChar: 'г'
        },
        MM: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 12,
            placeholderChar: 'м'
        },
        DD: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 31,
            placeholderChar: 'д'
        },
    },

    autofix: true,
    overwrite: true,
    lazy: false,

});

// ------------------------------ listeners ---------------------------- //

// ------------------------------ execution ---------------------------- //
