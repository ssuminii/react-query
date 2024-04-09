import React from 'react';
import { usePostQuery } from './hook/usePosts';

const ReactQueryPage = () => {
    const {isLoading, data, isError, error, refetch} = usePostQuery(1);
    console.log('data------->', data, 'isLoading--------->', isLoading);
    // 1번원래 호출 -> 기본 재시도 횟수: 3번
    console.log('error------->', isError, error);

    if(isLoading) {
        return <h1>Loading...</h1>
    }
    if(isError) {
        return <h1>{error.message}</h1>
    }

  return (
    <div>
        {/* {data?.map((item) => (
            <div>{item.title}</div>
        ))} */}
        <button onClick={refetch}>post list 다시 들고오기</button>
    </div>
  )
}

export default ReactQueryPage