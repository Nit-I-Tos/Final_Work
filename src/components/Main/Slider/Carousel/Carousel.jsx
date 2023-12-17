import { useEffect, useState, Children, cloneElement } from 'react';
import s from './Carousel.module.css'

const PAGE_WIDTH = 350

 const Carousel = ({children}) => {

    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset  = currentOffset + PAGE_WIDTH

            return Math.min(newOffset, 0)
        })
    }

    const handleRightArrowClick = () => {

        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH

            const maxOffset = -(PAGE_WIDTH*(pages.length - 1))

            return Math.max(newOffset, maxOffset)
        })
    }


    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`,

                    },


                })
            })



        )
    }, [])
   
    
    return(
        
       <div className={s.mainConteiner}>
        <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 320 512" className={s.arrow} onClick={handleLeftArrowClick}><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
        <div className={s.window}>
            <div className={s.allItem}
            style={{
                transform: `translateX(${offset}px)`,
            }}
            >{pages}

            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 320 512" className={s.arrow} onClick={handleRightArrowClick}><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
       </div> 
    )
}

export default Carousel;