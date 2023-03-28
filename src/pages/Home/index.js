import React, {useState, useContext, useEffect} from 'react';
import { FlatList, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Background, Container, Title, CartView, Amount, CartTouch } from './styles';
import Products from '../../components/Products';
import { useNavigation } from '@react-navigation/native';
import { Context } from '../../context';

export default function Home(){

    const navigation = useNavigation();

    
    const { amount, isShopping } = useContext(Context);



    const shopList = [
        {key: 1, product: 'Shampoo', price: 22.30, amount: 1},
        {key: 2, product: 'Sabonete', price: 4.25, amount: 1},
        {key: 3, product: 'Suco Tang', price: 8.95, amount: 1},
        {key: 4, product: 'Pão', price: 5.50, amount: 1},
        {key: 5, product: 'Óleo', price: 10.00, amount: 1},
        {key: 6, product: 'Arroz 5kg', price: 25.50, amount: 1},
        {key: 7, product: 'Carvão', price: 18.90, amount: 1},
        {key: 8, product: 'Feijão 1kg', price: 12.70, amount: 1},
        {key: 9, product: 'Condicionador', price: 15.30, amount: 1},
    ]



    return(
        <Background>
            <Container>
                <Title>Lista de Compras</Title>

                    <CartView>
                        <CartTouch onPress={() => navigation.navigate('Cart')}>
                            <Icon name="shopping-cart" color="#000" size={30} />
                            {isShopping ?

                                (
                                    <Amount>{amount}</Amount>

                                )

                                :

                                (
                                    null
                                )
                                
                            }

                        </CartTouch>
                    </CartView>

            </Container>

            <FlatList
                keyExtractor={item => String(item.key)}
                data={shopList}
                renderItem={({item}) => <Products data={item}/>}
            />
        </Background>
    );
}