import { userState } from "react";
import {useRouter} from 'next/router';

export default function SearchFrom({initialValue = ''}) {
    const [value, setValue] = useState('');
    const router = useRouter();

    function handleChange(e) {
        setValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault(); //막은 이유는 nextjs router를 사용하기 위해서 기본 동작 막음 
        
        if(!value) {
            router.push('/');
            return;
        }

        router.push(`/search?q=${value}`);
    }

    return(
        <form onSubmit={hanldeSubmit}>
            <input type="q" value={value} onChange={handleChange} />
            <button>검색</button>
        </form>
    )

}