import { useQuery } from '@tanstack/react-query'
import axios from 'axios';

// detail data 불러오기
const fetchPost = (postId) => {
    // console.log('queryData-->', queryData);
    // const id = queryData.queryKey[1];
    return axios.get(`http://localhost:3004/posts/${postId}`);
}

export const usePostQuery = (postId) => {
    // useQuery: 하나의 매개변수만(객체타입) 받을 수 있음
    return useQuery({
        // 유니크한 api호출 이름 정해주기
        queryKey: ['posts', postId],
        // 함수 -> api주소값
        queryFn: () => fetchPost(postId),
        // data안의 data값만 가져오기
        select:(data) => {
            return data.data;
        },
        // error 재시도 횟수
        retry: 1,
    
        // fresh 시간을 늘려줌으로써 api호출 시간 늘려주기
        // staleTime: 50000,
    
        // 기본값: true
        // true,false뿐만 아니라 다양한 조건 넣기 가능
        // enabled: false,
    
        // 캐쉬 관리: grabage collect time
        // 5초가 지나면 캐쉬가 비워짐 설정 안하면 기본값 5분
        // gcTime: 5000,
    
        // 3초마다 api호출하게 하기
        // refetchInterval: 3000,
    
        // component가 시작이 될 때 fetch를 할지말지
        // component를 다시 들어갈때 api호출 안됨 (1번 호출 후 그대로)
        // (기본값) refetchOnMount: true, -> 매번 호출
        // refetchOnMount: false,
    
        // user에게 새로운 값을 빨리빨리 보여주고 싶을 때
        // 다른일 하다가 이 윈도우가 focus되었을 때 api호출
        // refetchOnWindowFocus: true,
    });
}