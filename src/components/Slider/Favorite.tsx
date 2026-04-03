// import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { IconLeft, IconLeftDisabled, IconRight, IconRightDisabled } from '../assets/icons/Icons';
// import { RecipeCard } from '../RecipeCard/RecipeCard';
// import styles from './Favorite.module.css';

// export const Favorite = () => {
// 	const settings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1
//   };
// 	return (
// 		<section className={styles.sliderSection}>
// 			<div className={styles.header}>
// 				<h2 className={styles.title}>favorite recipes</h2>
// 				<div className={styles.arrows}>
// 					<IconLeft/>
// 					<IconRight/>			
// 				</div>
// 			</div>
// 			<div className={`slider-container`}>
// 			<Slider {...settings}>
//           <div><RecipeCard /></div>
//           <div><RecipeCard /></div>
//           <div><RecipeCard /></div>
//           <div><RecipeCard /></div>
//           <div><RecipeCard /></div>
//       </Slider>
// 				{/* <IconLeftDisabled/>
// <IconRightDisabled/> */}
// 			</div>
// 		</section>
// 	)
// }
import { useRef, useState } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IconLeft, IconLeftDisabled, IconRight, IconRightDisabled } from '../assets/icons/Icons';
import { RecipeCard } from '../RecipeCard/RecipeCard';
import styles from './Favorite.module.css';

export const Favorite = () => {
  const sliderRef = useRef<Slider>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (oldIndex:number, newIndex:number) => {
      // Проверяем, можно ли ещё прокрутить назад
      setIsBeginning(newIndex === 0);
      
      // Получаем общее количество слайдов
      const totalSlides = sliderRef.current?.props.children?.length || 0;
      const slidesToShow = 2;
      
      // Проверяем, можно ли прокрутить вперёд
      setIsEnd(newIndex + slidesToShow >= totalSlides);
    }
  };

  const handlePrev = () => {
    if (!isBeginning) {
      sliderRef.current?.slickPrev();
    }
  };

  const handleNext = () => {
    if (!isEnd) {
      sliderRef.current?.slickNext();
    }
  };

  return (
    <section className={styles.sliderSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>favorite recipes</h2>
        <div className={styles.arrows}>
          <button 
            onClick={handlePrev} 
            className={styles.arrowBtn}
            disabled={isBeginning}
          >
            {isBeginning ? <IconLeftDisabled /> : <IconLeft />}
          </button>
          <button 
            onClick={handleNext} 
            className={styles.arrowBtn}
            disabled={isEnd}
          >
            {isEnd ? <IconRightDisabled /> : <IconRight />}
          </button>
        </div>
      </div>
      <div className={styles.sliderContainer}>
        <Slider ref={sliderRef} {...settings}>
          <div><RecipeCard /></div>
          <div><RecipeCard /></div>
          <div><RecipeCard /></div>
          <div><RecipeCard /></div>
          <div><RecipeCard /></div>
        </Slider>
      </div>
    </section>
  );
};