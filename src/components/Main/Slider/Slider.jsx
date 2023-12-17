import s from './Slider.module.css'
import Carousel from './Carousel/Carousel'

function Slider(){
    return(
        <Carousel>
            <div className={s.item} id={s.item1}>Сёрен Обье Кьеркегор</div>
            <div className={s.item} id={s.item2}>Фёдор Миха́йлович Достое́вский</div>
            <div className={s.item} id={s.item3}>Жан-Поль Сартр</div>
            <div className={s.item} id={s.item4}>Фри́дрих Ни́цше</div>
        </Carousel>
    )
}

export default Slider;