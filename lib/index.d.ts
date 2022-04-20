interface Options{

    /**
     * ★ Choose the length of the password, The default length of the password if "10"
     *@default false
     */ 

    length?: Number

    /**
     * ★ Includes a particular word in your password,
     * @default false
     */

    includes?: String
}

/**
 * ★ Get a random generated password with the options like "includes" and "length"
 * @throws {Error} if the specified value of the options isn't a Number/String
 * @param options Choose a options.
* @SampleExample

    ```
    // CommonJS
    const password = require("@myno_21/password-generator");

    // EcmaScript/ESM
    import * as password from "@myno_21/password-generator";
    
    password.generatePassword({ length: 10}); //➟ '3isQlH=;usSt%^K(#(wP26}q
    ```

*/

export function generatePassword(options: Options): String


/**
 * ★ Get a random random suggested password!
 * @throws {Error} Throws an error if their is an error.
 */


export function suggestPassword(): String

interface DataString{
    /**
     * ★ Choose the limit of the password, The default limit is 1
     * @The passwords will return in an array form.
     */ 
    limit?: Number
}

/**
 * ★ Get a completely easy random generated password. 
 * @param options You can choose the option limit to generate multiple passwords.
 * @throws {Error} Throw an error if their is any issue while generating the password.
 * @usage [easyPassword()](https://www.npmjs.com) ➟ this will generate only one easy random password, To generate passwords in a bulk choose the option limit. ➟ [easyPassword({limit: 10})](https://www.npmjs.com)
@SampleExample
```
    // CommonJS
    const password = require("@myno_21/password-generator");

    // EcmaScript/ESM
    import * as password from "@myno_21/password-generator";
    
    password.easyPassword({ limit: 10 }); 
    //result
//     [
//   'elated_goldstine-',
//   'dreamy_gagarin-$',
//   'hungry_austin-$"',
//   'upbeat_morse-$"0',
//   'cool_galileo-$"0^',
//   'practical_almeida-$"0^^',
//   'lucid_keller-$"0^^{',
//   'kind_yalow-$"0^^{_',
//   'quizzical_newton-$"0^^{_7',
//   'admiring_dewdney-$"0^^{_7#'
// ]



    ```
*/

export function easyPassword(options: DataString): String