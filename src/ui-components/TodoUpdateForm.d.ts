/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TodoUpdateFormInputValues = {
    productName?: string;
    productDescription?: string;
    productPrice?: number;
    productImage?: string;
    quantityAvailable?: number;
    brand?: string;
};
export declare type TodoUpdateFormValidationValues = {
    productName?: ValidationFunction<string>;
    productDescription?: ValidationFunction<string>;
    productPrice?: ValidationFunction<number>;
    productImage?: ValidationFunction<string>;
    quantityAvailable?: ValidationFunction<number>;
    brand?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TodoUpdateFormOverridesProps = {
    TodoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    productName?: PrimitiveOverrideProps<TextFieldProps>;
    productDescription?: PrimitiveOverrideProps<TextFieldProps>;
    productPrice?: PrimitiveOverrideProps<TextFieldProps>;
    productImage?: PrimitiveOverrideProps<TextFieldProps>;
    quantityAvailable?: PrimitiveOverrideProps<TextFieldProps>;
    brand?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TodoUpdateFormProps = React.PropsWithChildren<{
    overrides?: TodoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    todo?: any;
    onSubmit?: (fields: TodoUpdateFormInputValues) => TodoUpdateFormInputValues;
    onSuccess?: (fields: TodoUpdateFormInputValues) => void;
    onError?: (fields: TodoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TodoUpdateFormInputValues) => TodoUpdateFormInputValues;
    onValidate?: TodoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TodoUpdateForm(props: TodoUpdateFormProps): React.ReactElement;
