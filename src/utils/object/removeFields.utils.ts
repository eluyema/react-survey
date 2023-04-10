type ObjectWithFields = { [key: string]: unknown };
type FieldName = string;

function removeFields(obj: ObjectWithFields, fieldsToRemove: FieldName[]): ObjectWithFields {
  const result: ObjectWithFields = { ...obj };

  for (let i = 0; i < fieldsToRemove.length; i++) {
    const fieldName: FieldName = fieldsToRemove[i];
    // eslint-disable-next-line no-prototype-builtins
    if (result.hasOwnProperty(fieldName)) {
      delete result[fieldName];
    }
  }

  return result;
}

export { removeFields };
