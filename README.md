# react-formatted-input

## Mask format
```
^ - upercase character
_ - lowercase character
# - number
```

## Exapmle:

```tsx
import {useState} from 'react';
import {defaultFormatter, FormattedInput} from 'react-fmt-input';


const Demo = () => {
  const [phone, setPhone] = useState<string>("");

  return (
    <FormattedInput
      label="Phone"
      value={phone}
      mask="+# (###) ###-##-##"
      placeholder="+7 (999) 123-45-67"
      onChange={setPhone}
      formatter={defaultFormatter}
      errorMessage="Invalid number"
    />
  )
};
```