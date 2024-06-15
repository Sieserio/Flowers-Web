import React from 'react';
import ButtonCatalog from "./UI/Button/ButtonCatalog";
import '../style/MainTitleImage.css'
import '../style/App.css'
const MainTitleImage = () => {
    return (
        <div className='MainTitleImage'>
            <div className='MainTitleImage--inner'>
                <h1 className='BigTitle BigTitle--marginBottom mukta-bold'  >Цветы для вашего уютного дома</h1>
                <h3 className='NormalText NormalText--marginBottom'>Растения в капшо станут красивым и модным дополнением интерьера вашей квартиры и офиса</h3>
                <ButtonCatalog>Перейти в Каталог</ButtonCatalog>
            </div>
        </div>
    );
};

export default MainTitleImage;