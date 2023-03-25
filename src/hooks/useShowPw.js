import { useState } from 'react';

export default function useShowPw() {
  const [show, setShow] = useState(false);

  const handlerType = () => {
    setShow(!show);
  };

  const type = show ? 'text' : 'password';
  const btnText = show ? 'hide' : 'show';

  return {
    type,
    btnText,
    handlerType,
  };
}
