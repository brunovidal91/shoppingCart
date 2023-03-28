import React, { useContext } from 'react';
import { Container, ProductView, Product, Price, BtnSub, TxtSub, Amount } from './styles';
import { Context } from '../../context';

export default function CarShop({ data }){

    const { rmCart } = useContext( Context );




    return(
        <Container>
            <ProductView>

            <Product>{data.product}</Product>
            <Price>R$ {(data.price).toFixed(2).replace('.', ',')}</Price>

            </ProductView>
            
            <Amount>{data.amount}x</Amount>

            <BtnSub onPress={() => rmCart(data)}>
                <TxtSub>-</TxtSub>
            </BtnSub>
        </Container>
    );
}