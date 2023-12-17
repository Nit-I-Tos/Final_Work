import s from './Main.module.css'
import Slider from './Slider/Slider'
import MainInfo from './MainInfo/MainInfo';

function Main(){
    return(
        <main className={s.main}>
            <div className={s.container}>
                <Slider/>
            </div>
            <MainInfo/>
        </main>

    )
}

export default Main;