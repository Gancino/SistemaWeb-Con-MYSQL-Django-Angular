import { ERRORS_VALIDATIONS } from "@data/constants";
import { IMAGES_ROUTES } from "@data/constants/routes/images.routes";
import { ENUM_VALIDATION_OPTIONS } from "@data/enum";
import { IField } from "@data/interfaces";
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { ValidationsService } from "@shared/services/validations/validations.service";

export const CONST_LOGIN_PAGE: {
    FORM: {
        email: IField;
        password: IField;
    },
    ICONS: any[];
    STYLE_BACKGROUND: any;
    LOGO: string;
} = {
    FORM: {
        email: {
            val: '',
            error: ERRORS_VALIDATIONS.EMAIL_REQUIRED_FIELD,
            isValid() {
                const validationsService = new ValidationsService();
                const validateEmail = validationsService.validateField(this.val, ENUM_VALIDATION_OPTIONS.EMAIL);
                this.error = validateEmail.msg;
                return validateEmail.isValid;
            }
        },
        password: {
            val: '',
            error: ERRORS_VALIDATIONS.PASSWORD_REQUIRED_FIELD,
            isValid() {
                const validationsService = new ValidationsService();
                const validatePassword = validationsService.validateField(this.val, ENUM_VALIDATION_OPTIONS.PASSWORD);
                this.error = validatePassword.msg;
                return validatePassword.isValid;
            }
        }
    },
    ICONS: [
        faFacebookSquare,
        faTwitterSquare,
        faInstagramSquare
    ],
    STYLE_BACKGROUND: {
        backgroundImage: `url(${IMAGES_ROUTES.BACKGROUND_LOGIN})`
    },
    LOGO: IMAGES_ROUTES.LOGO
}