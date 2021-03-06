import React from 'react'
import '../../style/layout/GSideBar.css';
import Icons from "../common/icons";
import GSearch from "../search/GSearch";
import {useSelector} from "react-redux";
import {GSwiper} from "../common/swiper";


const GSideBar = (props) => {
    let [hidden, setHidden] = React.useState(false);
    let location = useSelector(state => state.global.location);
    let placeholder = location !== 'area' ? `${location}` : `Район`;
    let interestingArray = [
        <div className={`g-side-bar__interesting`}>1</div>,
        <div className={`g-side-bar__interesting`}>2</div>,
        <div className={`g-side-bar__interesting`}>3</div>,
        <div className={`g-side-bar__interesting`}>4</div>
    ]
    return (
        <div className={`g-side-bar`}>
            <div className={`g-side-bar__inner ${hidden ? 'g-side-bar__inner--hidden' : ''}`}>
                <div className={`g-side-bar__header`}>
                    <GSearch />
                    <h3>{placeholder}</h3>
                </div>
                <div className={`g-side-bar__body`}>
                    <h4> Навигация </h4>
                    <ul className={`g-side-bar__nav`}>
                        <li className={`g-side-bar__nav-link`}> Cобытия </li>
                        <li className={`g-side-bar__nav-link`}> Объекты </li>
                        <li className={`g-side-bar__nav-link`}> Места   </li>
                        <li className={`g-side-bar__nav-link`}> Машруты </li>
                    </ul>
                    <h4> Интересное рядом </h4>
                    <GSwiper array={interestingArray}/>
                    <h4> Категории </h4>
                    <ul className={`g-side-bar__categories`}>
                        <li className={`g-side-bar__category`}>
                            <div className={`g-side-bar__category-icon`} />
                            Аптеки
                        </li>
                        <li className={`g-side-bar__category`}>
                            <div className={`g-side-bar__category-icon`} />
                            Автосервисы
                        </li>
                        <li className={`g-side-bar__category`}>
                            <div className={`g-side-bar__category-icon`} />
                            Продукты
                        </li>
                        <li className={`g-side-bar__category`}>
                            <div className={`g-side-bar__category-icon`} />
                            Поесть
                        </li>
                        <li className={`g-side-bar__category`}>
                            <div className={`g-side-bar__category-icon`} />
                            Парки
                        </li>
                        <li className={`g-side-bar__category`}>
                            <div className={`g-side-bar__category-icon`} />
                            Красота
                        </li>
                        <li className={`g-side-bar__category`}>
                            <div className={`g-side-bar__category-icon`} />
                            Спорт
                        </li>
                        <li className={`g-side-bar__category`}>
                            <div className={`g-side-bar__category-icon`} />
                            Избранное
                        </li>
                    </ul>
                    <div className={`g-side-bar__magic`}>Подобрать для меня</div>
                </div>
            </div>
            <div  className={`g-side-bar__hide-btn ${hidden ? 'g-side-bar__hide-btn--active' : ''}`} onClick={() => setHidden(!hidden)}>
                <Icons
                    name='arrow'
                    color='#000'
                    size='32'
                    className=''
                />
            </div>
        </div>
    )
}

export default  GSideBar;