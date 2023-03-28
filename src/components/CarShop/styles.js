import styled from 'styled-components/native';



export const Container = styled.View`
background-color: #09b35b;
padding: 7px;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-bottom: 5px; 
`;
export const ProductView = styled.View`
width: 40%;
`;
export const Product = styled.Text`
font-size: 20px;
color: #fff;
width: 100%;
`;
export const Price = styled.Text`
font-size: 20px;
color: #fff;`;
export const BtnSub = styled.TouchableOpacity`
background-color: #f00;
width: 30px;
height: 30px;
align-items: center;
justify-content: center;
border-radius: 50px;
`;
export const TxtSub = styled.Text`
color: #fff;
font-size: 20px;
text-align: center;
font-weight: bold;
`;
export const Amount = styled.Text`
background-color: #fff;
width: 40px;
height: 40px;
text-align: center;
font-size: 25px;
font-weight: bold;
color:  #09b35b;
border-radius: 50px;
`;
