import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from "class-validator";

@ValidatorConstraint({ name: "role", async: false })
export class IsRole implements ValidatorConstraintInterface {

  validate(text: string, args: ValidationArguments) {
    console.log(args)
    return text === 'student' || text === 'teacher'; // for async validations you must return a Promise<boolean> here
  }

  defaultMessage(args: ValidationArguments) { // here you can provide default error message if validation failed
    console.log(args)
    return "Incorrect role";
  }

}
