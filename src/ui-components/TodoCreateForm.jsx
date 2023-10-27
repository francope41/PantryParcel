/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { createTodo } from "../graphql/mutations";
export default function TodoCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    productName: "",
    productDescription: "",
    productPrice: "",
    productImage: "",
    quantityAvailable: "",
    brand: "",
  };
  const [productName, setProductName] = React.useState(
    initialValues.productName
  );
  const [productDescription, setProductDescription] = React.useState(
    initialValues.productDescription
  );
  const [productPrice, setProductPrice] = React.useState(
    initialValues.productPrice
  );
  const [productImage, setProductImage] = React.useState(
    initialValues.productImage
  );
  const [quantityAvailable, setQuantityAvailable] = React.useState(
    initialValues.quantityAvailable
  );
  const [brand, setBrand] = React.useState(initialValues.brand);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setProductName(initialValues.productName);
    setProductDescription(initialValues.productDescription);
    setProductPrice(initialValues.productPrice);
    setProductImage(initialValues.productImage);
    setQuantityAvailable(initialValues.quantityAvailable);
    setBrand(initialValues.brand);
    setErrors({});
  };
  const validations = {
    productName: [{ type: "Required" }],
    productDescription: [{ type: "Required" }],
    productPrice: [{ type: "Required" }],
    productImage: [{ type: "Required" }, { type: "URL" }],
    quantityAvailable: [{ type: "Required" }],
    brand: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          productName,
          productDescription,
          productPrice,
          productImage,
          quantityAvailable,
          brand,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: createTodo.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "TodoCreateForm")}
      {...rest}
    >
      <TextField
        label="Product name"
        isRequired={true}
        isReadOnly={false}
        value={productName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              productName: value,
              productDescription,
              productPrice,
              productImage,
              quantityAvailable,
              brand,
            };
            const result = onChange(modelFields);
            value = result?.productName ?? value;
          }
          if (errors.productName?.hasError) {
            runValidationTasks("productName", value);
          }
          setProductName(value);
        }}
        onBlur={() => runValidationTasks("productName", productName)}
        errorMessage={errors.productName?.errorMessage}
        hasError={errors.productName?.hasError}
        {...getOverrideProps(overrides, "productName")}
      ></TextField>
      <TextField
        label="Product description"
        isRequired={true}
        isReadOnly={false}
        value={productDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              productName,
              productDescription: value,
              productPrice,
              productImage,
              quantityAvailable,
              brand,
            };
            const result = onChange(modelFields);
            value = result?.productDescription ?? value;
          }
          if (errors.productDescription?.hasError) {
            runValidationTasks("productDescription", value);
          }
          setProductDescription(value);
        }}
        onBlur={() =>
          runValidationTasks("productDescription", productDescription)
        }
        errorMessage={errors.productDescription?.errorMessage}
        hasError={errors.productDescription?.hasError}
        {...getOverrideProps(overrides, "productDescription")}
      ></TextField>
      <TextField
        label="Product price"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={productPrice}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              productName,
              productDescription,
              productPrice: value,
              productImage,
              quantityAvailable,
              brand,
            };
            const result = onChange(modelFields);
            value = result?.productPrice ?? value;
          }
          if (errors.productPrice?.hasError) {
            runValidationTasks("productPrice", value);
          }
          setProductPrice(value);
        }}
        onBlur={() => runValidationTasks("productPrice", productPrice)}
        errorMessage={errors.productPrice?.errorMessage}
        hasError={errors.productPrice?.hasError}
        {...getOverrideProps(overrides, "productPrice")}
      ></TextField>
      <TextField
        label="Product image"
        isRequired={true}
        isReadOnly={false}
        value={productImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              productName,
              productDescription,
              productPrice,
              productImage: value,
              quantityAvailable,
              brand,
            };
            const result = onChange(modelFields);
            value = result?.productImage ?? value;
          }
          if (errors.productImage?.hasError) {
            runValidationTasks("productImage", value);
          }
          setProductImage(value);
        }}
        onBlur={() => runValidationTasks("productImage", productImage)}
        errorMessage={errors.productImage?.errorMessage}
        hasError={errors.productImage?.hasError}
        {...getOverrideProps(overrides, "productImage")}
      ></TextField>
      <TextField
        label="Quantity available"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={quantityAvailable}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              productName,
              productDescription,
              productPrice,
              productImage,
              quantityAvailable: value,
              brand,
            };
            const result = onChange(modelFields);
            value = result?.quantityAvailable ?? value;
          }
          if (errors.quantityAvailable?.hasError) {
            runValidationTasks("quantityAvailable", value);
          }
          setQuantityAvailable(value);
        }}
        onBlur={() =>
          runValidationTasks("quantityAvailable", quantityAvailable)
        }
        errorMessage={errors.quantityAvailable?.errorMessage}
        hasError={errors.quantityAvailable?.hasError}
        {...getOverrideProps(overrides, "quantityAvailable")}
      ></TextField>
      <TextField
        label="Brand"
        isRequired={true}
        isReadOnly={false}
        value={brand}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              productName,
              productDescription,
              productPrice,
              productImage,
              quantityAvailable,
              brand: value,
            };
            const result = onChange(modelFields);
            value = result?.brand ?? value;
          }
          if (errors.brand?.hasError) {
            runValidationTasks("brand", value);
          }
          setBrand(value);
        }}
        onBlur={() => runValidationTasks("brand", brand)}
        errorMessage={errors.brand?.errorMessage}
        hasError={errors.brand?.hasError}
        {...getOverrideProps(overrides, "brand")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
