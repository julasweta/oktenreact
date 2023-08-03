import React, { memo, useMemo } from "react";

function TestUseMemo({ data, addTodo }) {

  const hardFunction = (data) => {
    console.log('Calculating .....');
    for(let i=0; i < 10000000; i++){
      data += 1;
    }
    return data
  };

  const changeMemo = useMemo(() => {
    return hardFunction(data);
  }, [data]);

  return <div>
      <button onClick={()=>addTodo()}>Add Todo</button>
      <div>{changeMemo}</div>
  </div>;

}

export default memo(TestUseMemo);
