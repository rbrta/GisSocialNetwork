import React, {useEffect} from 'react'

import {apiObjects, apiPhoto, apiReviews} from "../../api";

import {GSwiper} from "../common/swiper";
import GReview from "../common/review/GReview";

const GSideBarInfoObject = props => {
    const [data, setData] = React.useState();
    const [photoArray, setPhotoArray] = React.useState([]);

    useEffect(
        () => {
            apiObjects.getInfoById(props.object.idEntity)
                .then(data => setData(data));
            apiPhoto.getPhotosByIds(props.object.idEntity, props.object.typeId)
                .then(data => setPhotoArray(data));
        }, [props.object.idEntity, props.object.typeId]
    );

    const photos = React.useMemo( () => photoArray.map(el => (
        <div className={'g-side-bar-info__image'}>
            <img alt='картинка' src={`http://139.162.168.53:8989/api/Photos/GetImgThumb/${el}`} />
        </div>
    )), [photoArray]);

    let [tab, setTab] = React.useState('contacts');

    const tabs = () => {
        switch(tab) {
            case 'contacts':
                return (
                    <>
                        {
                            data &&
                            <div>
                                {data.address && <p>Адрес: {data.address}</p>}
                                {data.vk && <p>VK: {data.vk}</p>}
                                {data.phone && <p>Телефон: {data.phone}</p>}
                                {data.category && <p>Категория: {data.category.categoryName}</p>}

                            </div>
                        }
                        {
                            photoArray && photoArray.length > 0 ? <GSwiper array={photos}/> : <p>Фотографий нет</p>
                        }

                    </>
                )
            default:
                return (
                    <div>
                        <GReview typeId={props.object.typeId} id={props.object.idEntity} />
                        {/*<form onSubmit={handleSubmit}>*/}
                        {/*    <label>*/}
                        {/*        <p>Оставить отзыв:</p>*/}
                        {/*        <textarea value={newReview} onChange={(e) => setNewReview(e.target.value)}/>*/}
                        {/*    </label>*/}
                        {/*    <button>Отправить</button>*/}
                        {/*</form>*/}
                        {/*<p>Отзывы:</p>*/}
                        {/*{*/}
                        {/*    reviews.map(el => (*/}
                        {/*        <div className={'g-side-bar-info__review'}>*/}
                        {/*            <span>Пользователь {el.userId}</span>*/}
                        {/*            <p>{el.reviewText}</p>*/}
                        {/*            <span>Оценка: {el.ratingValue}</span>*/}
                        {/*        </div>*/}
                        {/*    ))*/}
                        {/*}*/}
                    </div>
                )

        }
    }

    return (
        <div className={'g-side-bar-info'}>
            {   data &&
            <header className={'g-side-bar-info__header'}>
                <h4>{data.title}</h4>
                <p>{data.description}</p>
                <h4>Рейтинг: {data.rating}</h4>
                <div>
                    <button className={`button button--tab ${tab === 'contacts' ? 'active' : ''}`} onClick={() => setTab('contacts')}>Контакты</button>
                    <button className={`button button--tab ${tab === 'reviews' ? 'active' : ''}\``} onClick={() => setTab('reviews')}>Отзывы</button>
                </div>
            </header>
            }
            {tabs(tab)}
        </div>
    )
}

export default GSideBarInfoObject;