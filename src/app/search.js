import {userRouter} from 'next/router';

export default function Search() {
    const router = userRouter(); 
    const {q} = router.query; //react 쿼리에서 q 값을 받아옴

    return <div>search 페이지 {q}</div>
}