export function serializeFormData(formData) {
  const serializedData = {};

  formData.forEach((value, key) => {
      setNestedField(serializedData, key, value);
  });

  return serializedData;
}

function setNestedField(obj, key, value) {
  const keys = key.split('[').map((k) => k.replace(']', ''));

  if (keys.length === 1) {
      obj[keys[0]] = value;
  } else {
      const currentKey = keys.shift();

      obj[currentKey] = obj[currentKey] || (isNaN(currentKey) ? [] : {});

      setNestedField(obj[currentKey], keys.join(']['), value);
  }
}
