import { useRouter } from 'next/router';
import {useEffect, useState} from 'react';
import axios from '@/lib/axios';

export default function Product() {
    const [product, setProduct] = useState();
    const [sizeReviews, setSizeReviews] = useState([]);
    const router = useRouter(); 
    const {id} = router.query;  //react 쿼리에서 id 값을 받아옴


    async function getProduct(targetId) {
        const res = await axios.get(`/products/${targetId}`);
        const nextProduct = res.data; 
        setProduct(nextProduct);
    }

    async function getSizeReviews(targetId) {
        const res = await axios.get(`/size_reviews/?product_id=$(targetId)`);
        const nextSizeReviews = res.data.results ?? []; 
        setSizeReviews(nextSizeReviews);
    }

    useEffect(() => {
  if(!id) return; 
  getProduct(id);
  getSizeReviews(id);
    }, [id]);

    if(!product) return null;
    
    return <div>product 페이지 - {id} 
    <h1>{product.name}</h1>
    <p>{product.description}</p>
    <p>{product.price}</p>
    <SizeReviewList sizeReviews={sizeReviews} />
    </div>
}