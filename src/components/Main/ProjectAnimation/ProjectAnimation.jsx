import s from './ProjectAnimation.module.css'
import React from 'react';

const questions = [
    {
        title: 'Мир - это...',
        variants: ['Абсурд', 'Жизнь', 'Матрица'],
        correct: 0,
    },
    {
        title: 'На чем акцентирует внимание экзистенциализм?',
        variants: ['Уникальность времни', 'Уникальность мира', 'Уникальность человека','Уникальность восприятия'],
        correct: 2,
    },
    {
        title: 'Какая основная проблема в философии экзистенциализма?',
        variants: [ 'гносеологическая', 'метафизика', 'бытие человека в мире'],
        correct: 2,
    },
    {
        title: 'Свобода, смерть, одиночество, бессмысленность',
        variants: ['данность', 'выбор', 'божий промысел'],
        correct: 0,
    },
];

function Start({ startRef, onClickStart }){
    return(
        <div className={s.startPage} ref={startRef}>
            <h1>Тест</h1>
            <svg></svg>
            <button onClick={onClickStart}>Начать</button>

        </div>
    ) 
}

function Game({ question, onClickVariant, step, mainRef }){
    const procent = Math.round((step / questions.length) * 100);

    return(
        <>
        <div className={s.progress} ref={mainRef}>
            <div className={s.progressBarBrd}>
            <div style={{width: `${procent}%`}} className={s.progressBar}></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {
                    question.variants.map((text, index) => 
                    <li onClick={() => onClickVariant(index)} key={text}>
                        {text}
                        </li>)
                }
            </ul>
        </div>
        </>
    )
}

function Result({ correct }){
    return(
        <div className={s.result}>
            <svg width="160px" height="160px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 19C16.1046 19 17 18.1046 17 17C17 15.8954 16.1046 15 15 15H10C8.89543 15 8 14.1046 8 13C8 12.2597 8.4022 11.6134 9 11.2676M12 19H10M15 11H17C18.6569 11 20 9.65685 20 8C20 6.34315 18.6569 5 17 5H8M12 3V21M8 5H6C4.89543 5 4 5.89543 4 7C4 8.10457 4.89543 9 6 9C7.10457 9 8 8.10457 8 7V6.5V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> </g></svg>
            <h2>Вы ответили правильно на {correct} из {questions.length}</h2>
        <a href='/projectAnimation'><button>Попробовать снова</button></a>
        </div>
    )
}

function ProjectAnimation(){
    const [step, setStep] = React.useState(0);
    const [correct, setCorrect] = React.useState(0);
    const mainRef = React.useRef(null);
    const startRef = React.useRef(null);
    const question = questions[step];
    const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
    const onClickVariant = (index) => {
        mainRef.current.style.transform+='rotateX(360deg)'
        mainRef.current.style.transform+='rotateY(360deg)'
        setStep(step + 1);
        audio.play();
        navigator.vibrate(100);

        if(index === question.correct){
            setCorrect(correct + 1)
        }
    }

    const onClickStart = () => {
        startRef.current.style.display='none'
        mainRef.current.style.display='flex'
        audio.play();
        navigator.vibrate(100);
    }

    return(
        <div className={s.app}>
            <Start startRef={startRef} onClickStart={onClickStart} />
            {
                step !== questions.length ? (
                <Game mainRef={mainRef} step={step} question={question} onClickVariant={onClickVariant} />
                ) : (
                <Result correct={correct} />)
            }
        </div>
    )
}

export default ProjectAnimation;