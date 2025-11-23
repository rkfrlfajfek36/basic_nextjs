import {useRouter} from 'next/router';

export default function Search() {
    const router = useRouter(); 
    const {q} = router.query; //react 쿼리에서 q 값을 받아옴

    return <div>
        <div>
              search 페이지 {q}
              <SearchForm initialValue={q} />
        </div>
    </div>
}