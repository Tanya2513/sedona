import React from "react";
import Advantage from "./Advantage";

export default function Advantages() {
    return (
        <div className="bg-grey">
            <Advantage
                name="НЕБОЛЬШАЯ ПЛОЩАДЬ"
                description={<>ВСЕ ДОСТОПРИМЕЧАТЕЛЬНОСТИ<br/>НАХОДЯТСЯ ОЧЕНЬ БЛИЗКО</>}
                number="— №3 —"
            />
            <Advantage
                name="КРАСИВАЯ ДОРОГА"
                description={<>ЕХАТЬ В СЕДОНУ ИЗ ЛАС-ВЕГАСА<br/>СОВСЕМ НЕ СКУЧНО!</>}
                number="— №4 —"
            />
            <Advantage
                name="МАЛО ТУРИСТОВ"
                description={<>БОЛЬШИНСТВО ЕДЕТ В ГРАНД<br/>КАНЬОН И ТОЛПИТСЯ ТАМ</>}
                number="— №5 —"
            />
            <div className="clr"/>
        </div>
    );
}