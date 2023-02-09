import {useParams} from 'react-router-dom';
import axios from "axios";
import './index.css';
import { useEffect,useState } from 'react';
function ProductPage(){
    const {id} = useParams();
    const [product,setProduct] = useState(null);
    useEffect(function(){
        axios.
        get(`https://dd0feba1-9559-4a57-9c4b-11d7d097a3f9.mock.pstmn.io/products/${id}`)
        .then(function(result){
            setProduct(result.data)     
        }).catch(function(error){
            console.log(error);
        });
    },[]);
    if (product==null){
        return <h1>상품정보를 받고 있습니다..</h1>
    }
    return (
        <div>
        <div id="image-box">
            <img src = {"/"+product.imageUrl}/>
        </div>
        <div id ="profile-box">
            <img src = "/images/icons/avatar.png"/>
            <span>{product.seller} 
            </span>
        </div>
        <div id="contents-box" >
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdAt">2023년 2월 7일</div>
        <div id="description">{product.description}</div>
        </div>
        </div>
    )
}
export default ProductPage;