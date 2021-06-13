import { useState } from 'react';

const useCheckboxes = initialState => {
  const [hookValue, setHookValue] = useState(initialState);

  return {
    hookValue,
    setHookValue,
    bind: {
      onChange: e => {
        const { name, value, type, checked } = e.target;

        // On change (if checkbox is checked/unchecked), updatae state with it's boolean checked value and id retrieved from API
        setHookValue({
          ...hookValue,
          [name]: { checked: checked, value: value },
        });
        const listOfIds = [];

        // Filter out object - if object has a key with a checked value of true, push its value (id) into new array
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
