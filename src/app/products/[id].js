import { useRouter } from 'next/router';

export default function Product() {
    const router = useRouter(); 
    const {id} = router.query;  //react 쿼리에서 id 값을 받아옴
    
    return <div>product 페이지 - {id} </div>
}