import styled from 'styled-components/native';

export const Background = styled.View`
flex: 1;
background-color: #eee;
padding: 5px;
`;
export const Container = styled.View`
width: 100%;
height: 100px;
border-bottom-width: 2px;
border-style: solid;
border-color: #ccc;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 10px;
margin-bottom: 15px;

`;
export const Title = styled.Text`
font-size: 25px;
`;
export const CartView = styled.View`
margin-bottom: 40px;
`;
export const Amount = styled.Text`
background-color: #ff0000;
width: 20px;
height: 20px;
position: absolute;
border-radius: 50px;
right: 15px;
top: 15px;
text-align: center;
color: #fff;
`;
export const CartTouch = styled.TouchableOpacity`
`;
