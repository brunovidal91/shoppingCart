import React, {useContext, useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import CarShop from '../../components/CarShop';
import { Background, Title, Total, AreaTotal, StatusView, StatusTxt } from './styles';
import { Context } from '../../context';
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'


export default function Cart(){

    // const route = useRoute();
    const { cartList, total } = useContext(Context);
    const [status, setStatus] = useState(true);

    const navigation = useNavigation();
    
    useEffect(() => {
        function alterStatus(){

            if(total > 0){
                setStatus(false);
            }else{
                setStatus(true);
            }
        }

        alterStatus();

    },[total])




    return(
        <Background>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Icon name="home" color="#000" size={40}/>
            </TouchableOpacity>
            <AreaTotal>
                <Title>Valor Total</Title>
                <Total>R$ {total.toFixed(2)}</Total>
            </AreaTotal>
            
            {
            status ? 
                (
                <StatusView>
                    <StatusTxt>Seu carrinho está vazio</StatusTxt>
                </StatusView>


                )
                :
                (
                    <FlatList
                    keyExtractor={item => item.key}
                    data={cartList}
                    renderItem={({item}) => <CarShop data={item} />}
    
                />
    
                )
            }
           




        </Background>
    );
}