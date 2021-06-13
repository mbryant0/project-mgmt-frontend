import { useState } from 'react';

const useCheckboxes = initialState => {
  const [hookValue, setHookValue] = useState(initialState);

  return {
    hookValue,
    setHookValue,
    bind: {
      onChange: e => {
        const { name, value, type, checked } = e.target;
        setHookValue({
          ...hookValue,
          [name]: { checked: checked, value: value },
        });
        const listOfIds = [];
        const filteredByValue = Object.fromEntries(
          Object.entries(hookValue).filter(([key, value]) => {
            if (value.checked === true) {
              return listOfIds.push(value.value);
            }
          })
        );
        console.log(listOfIds);
      },
    },
  };
};

export default useCheckboxes;
