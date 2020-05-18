import React from "react";
import Feature from "./Feature";

export default function Features() {
    return (
        <div className="features bg-grey">
            <Feature
                name="ЖИЛЬЕ"
                description={<>РЕКОМЕНДУЕМ ПОЖИТЬ В НАСТОЯЩЕМ <br/>МОТЕЛЕ, ВСЕ КАК В КИНО!</>}
                icon="house"
            />
            <Feature
                name="ЕДА"
                description={<>"ВСЕГДА ЗАКАЗЫВАЙТЕ ФИРМЕННЫЙ БУРГЕР,<br/>ВЫ НЕ РАЗОЧАРУЕТЕСЬ!</>}
                icon="burger"
            />
            <Feature
                name="СУВЕНИРЫ"
                description={<>"НЕ ТОЛЬКО КИТАЙСКОГО, НО И МЕСТНОГО<br/>ПРОИЗВОДСТВА!</>}
                icon="present"
            />
            <div className="clr"/>
        </div>
    );
}