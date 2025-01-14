/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { CommonValidationErrorType } from "./constant/errorType";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

export const ValidateTagErrorType = ExtendEnum(ValidateLengthErrorType, CommonValidationErrorType.invalidFormat);
export type ValidateTagErrorType = Enum<typeof ValidateTagErrorType>;

export interface ValidateTagOptions {
  isRequired?: boolean;
}

export const validateTag = (value: string, { isRequired = true }: ValidateTagOptions = {}) => {
  const MAXIMUM_TAG_LENGTH = 30;
  const REGEX = "^[a-zA-Z]+([_:-]{1}[a-zA-Z]+)*$";
  if (isEmpty(value)) {
    if (!isRequired) {
      return null;
    }
    return ValidateTagErrorType.empty;
  }
  if (!matches(value, REGEX)) {
    return ValidateTagErrorType.invalidFormat;
  }
  return validateLength(value, { max: MAXIMUM_TAG_LENGTH });
};
