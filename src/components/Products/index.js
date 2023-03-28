import React, {useContext} from 'react';
import {Contaier, Product, Price, ProductView, ShopButton, PlusTxt} from './styles';
import { Context } from '../../context';

export default function Products({ data }){

    const { addCart } = useContext(Context);

    return(
        <Contaier>
            <ProductView>
                <Product>Produto: {data.product}</Product>
                <Price>R$ {(data.price).toFixed(2).replace('.', ',')}</Price>
            </ProductView>
            <ShopButton onPress={() => addCart(data)}>
                <PlusTxt>+</PlusTxt>
            </ShopButton>
        </Contaier>
    );
}