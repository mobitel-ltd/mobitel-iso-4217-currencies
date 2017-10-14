const list = require('./list.js');

/** Adding functional for list */
class Currencies {
    /** Class constructor */
    constructor() {
        this.list = list;
    }

    /**
     * Get code property name
     * @param {String} code String with code for validation
     * @returns {String|Null} String with code type name or NULL
     * @private
     */
    _codeType(code) {
        if (/^[a-zA-Z]{3}$/.test(code)) {
            return 'alpha3';
        }

        if (/^\d{3}$/.test(code)) {
            return 'numeric';
        }

        throw `Incorrect code`;
    }

    /**
     * Search currency in list by currency code
     * @param {String} code Code for search
     * @returns {{locale:String, name:String}|Null} Object with currency data or NULL
     * @private
     */
    _search(code) {
        const self = this;
        try {
            const codeType = self._codeType(code);

            let i;
            for (i = 0; i < self.list.length; i++) {
                if (self.list[i][codeType].toLowerCase() === code.toLowerCase()) {
                    return self.list[i];
                }
            }

            throw `Not found`;
        } catch (error) {
            return null;
        }
    }

    /**
     * Validate currency code exist
     * @param {String} code Currency code for validation
     * @returns {boolean} True if code exist or False
     */
    validate(code) {
        return !!(this._search(code));
    }

    /**
     * Get currency info if exist
     * @param {String} code Code for search
     * @returns {{country: String, currency: String, alpha3: String, numeric: String, minor: Number}|Null} Object with
     *     currency data or NULL
     */
    get(code) {
        return this._search(code);
    }
}

module.exports = new Currencies();
