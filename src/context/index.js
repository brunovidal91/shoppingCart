import React, {createContext, useState} from 'react'


export const Context = createContext({});

export default function ContextComponent({ children }){

   //variaveis
    const [total, setTotal] = useState(0);
    const [amount, setAmount] = useState(0);
    const [isShopping, setIsShopping] = useState(false);
    const [cartList, setCartList] = useState([]);



    //função para adicionar itens ao carrinho.
    function addCart(data){
        let newTotal = total;

        //percorre a lista atual e verifica se o item já havia sido adicionado. Caso sim, ele apenas soma a quantidade e o valor.
        for(item in cartList){
            if(cartList[item].key === data.key){
                cartList[item].amount += 1;
                setTotal(newTotal += data.price)
                return;
            }
        }

        //atualiza a lista do carrinho, o status do carrinho, a quantidade e o valor total.
        setCartList(oldList => [...oldList, data]);
        setIsShopping(true);
        newAmount();
        setTotal(newTotal += data.price);

    }

    //função para controlar a quantidade de itens no carrinho.
    function newAmount(){
        let newAmount = parseInt(amount)
        setAmount(newAmount += 1)
    }

    //função para tirar itens do carrinho.
    function rmCart(data){
        let newTotal = total;
        let newAmount = parseInt(amount)
        
        //verifica se existe mais de uma unidade do mesmo produto. Caso sim, apenas subtrai a quantidade e o valor total.
        if(data.amount > 1){
            data.amount -= 1;
            setTotal(newTotal -= data.price)
            return;
        }

        //Caso tenha apenas uma unidade, exclui o produto da lista do carrinho.
        const itemIndex = cartList.indexOf(data)
        cartList.splice(itemIndex,1)
        //atualiza a quantidade de itens, o valor total e o status do carrinho (faz uma verificação se ainda existem itens. Caso não, o indicador de carrinho não vazio some da Home).
        setAmount(newAmount -= 1)
        setTotal(newTotal -= data.price)
        setStatus(false)
        
    }

    //função que altera o status do carrinho para controlar a visibilidade do indicador de carrinho não vazio na Home.
    function setStatus(status){
        if(amount <= 1){
            setIsShopping(status);
        }
        
    }


    //return da função principal que passa as states e funções em forma de contexto para os outros componentes do aplicativo.
    return(
        <Context.Provider value={{cartList, total, amount, isShopping, addCart, rmCart}}>
            {children}
        </Context.Provider>   
    );
}