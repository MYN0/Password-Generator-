import alphabet, { lower } from "alphabet";
import names from "docker-names";
import * as fs from "fs";

/**
 * 
 * @param {Object} options 
 */


function generatePassword(options) {

    options = options || {}

    if (options.includes) {


        if (typeof options.includes !== 'string') throw new Error(`Not a valid string, The includes options needs to be a String.`);
        // let stringInclude = '';
        // stringInclude += options.includes
        // var password = '';
        // stringInclude += "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        // stringInclude += '0123456789';

        // for (let i = 0; i < options.includes.length + 2; i++) {
        //     password += stringInclude.charAt(Math.floor(Math.random() * stringInclude.length));
        // }
        // console.log(password)

        const includedString = String(options.includes)
        const formattedString = includedString.charAt(Math.floor(Math.random() * includedString.length)).toUpperCase() + includedString.slice(1);

        var finalString = ''
        let stringInclude = '';
        stringInclude += "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        stringInclude += '0123456789';

        for (let i = 0; i < 10; i++) {
            finalString += stringInclude.charAt(Math.floor(Math.random() * stringInclude.length));
        }

        return formattedString + finalString

    } else
        if (options.length) {
            if (options?.length < 3) return Error(`Password length cannot be smaller than 1.`)
            let stringInclude = '';
            stringInclude += "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
            stringInclude += '0123456789';
            stringInclude += 'abcdefghijklmnopqrstuvwxyz';
            stringInclude += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var password = '';

            if (typeof options.length !== "number") throw new Error(`Not a valid number, The password length must be a number.`);
            var length = options.length
            for (let i = 0; i < length; i++) {
                password += stringInclude.charAt(Math.floor(Math.random() * stringInclude.length));
            }
            return password;
        } else {

            let stringInclude = '';
            stringInclude += "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
            stringInclude += '0123456789';
            stringInclude += 'abcdefghijklmnopqrstuvwxyz';
            stringInclude += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var password = '';

            var password = '';
            for (let i = 0; i < 25; i++) {
                password += stringInclude.charAt(Math.floor(Math.random() * stringInclude.length));
            }
            return password;

        }
}

/**
 * 
 * @param {Object} options 
 * @returns 
 */

function suggestPassword(options) {

    options = {} || options;
    const LeftName = names.left
    const formattingLeftName = LeftName[Math.floor(Math.random() * LeftName.length)];
    const rightname = names.right;
    const formattingRightName = rightname[Math.floor(Math.random() * rightname.length)];

    let stringInclude = '';
    stringInclude += "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    stringInclude += '0123456789';
    var FinalString = ""
    for (let i = 0; i < 9; i++) {
        FinalString += stringInclude.charAt(Math.floor(Math.random() * stringInclude.length));
    }
    return `${formattingLeftName}-${FinalString}-${formattingRightName}`
};
/** 
 * @param {Object} options 
 */

function easyPassword(options) {
    options = options || {}
    var array = []
    if (options?.limit) {

        if (typeof options?.limit !== "number") throw new Error(`Not a valid number, The limit must be a number.`)

        let stringInclude = '';
        stringInclude += "!\"#$*+,-./:>?@[\]^_`{|}";
        stringInclude += "_-!$0123456789";
        var firstString = " "
        firstString += "~=+;@"
        var formattedString = " "
        var FinalString = "";

        for (let i = 0; i < options.limit; i++) {
            FinalString += stringInclude.charAt(Math.floor(Math.random() * stringInclude.length));
            array.push(`${names.getRandomName()}${FinalString}`);
        }
        return array;
    } else {
        let stringInclude = '';
        stringInclude += "!\"#$*+,-./:>?@[\]^_`{|}";
        var numberinlculde = "0123456789";
        var FormattedNumber = numberinlculde.charAt(Math.floor(Math.random() * numberinlculde.length));
        var FinalString = stringInclude.charAt(Math.floor(Math.random() * stringInclude.length));
        return `${names.getRandomName()}${FinalString}${FormattedNumber}`

    }

}

export { generatePassword, suggestPassword, easyPassword }