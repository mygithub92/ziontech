import { AbstractControl, FormArray, FormGroup, ValidationErrors } from '@angular/forms';

export class AppValidators {

    static alphaHyphenSpaceApos(control: AbstractControl): ValidationErrors | null {
        return testControlWithRegex(/^[ A-Za-z-']*$/, control, 'alphaHyphenSpaceApos');
    }

    static numberSpace(control: AbstractControl): ValidationErrors | null {
        return testControlWithRegex(/^[ 0-9]*$/, control, 'numberSpace');
    }

    static float(control: AbstractControl): ValidationErrors | null {
        return testControlWithRegex(/^[0-9]*(?:\.[0-9]+)?$/, control, 'float');
    }
}

function testControlWithRegex(regex: RegExp, control: AbstractControl, errorLabel: string): ValidationErrors | null {
    if (control && control.value && !(regex.test(control.value))) {
        return Object.defineProperty({}, errorLabel, { value: { value: control.value }, enumerable: true });
    } else {
        return null;
    }
}
