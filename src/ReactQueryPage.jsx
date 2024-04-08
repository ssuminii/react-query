import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import React from 'react';

const ReactQueryPage = () => {
    // useQuery: 하나의 매개변수만(객체타입) 받을 수 있음
    // api 호출 data값을 기본으로 받음
    // error: error 메세지
    const {isLoading, data, isError, error} = useQuery({
        // 유니크한 api호출 이름 정해주기
        queryKey: ['posts'],
        // 함수 -> api주소값
        queryFn: () => {
            return axios.get('http://localhost:3004/posts');
        },
        // 재시도 횟수
        retry: 1,
        // data안의 data값만 가져오기
        select:(data) => {
            return data.data;
        }
    });
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
        {data.map((item) => (
            <div>{item.title}</div>
        ))}
    </div>
  )
}

export default ReactQueryPage