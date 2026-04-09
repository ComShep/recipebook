// import { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import type { Swiper as SwiperType } from 'swiper';

// import { RecipeCard } from '../RecipeCard/RecipeCard';
// import { IconLeft, IconLeftDisabled, IconRight, IconRightDisabled } from '../assets/icons/Icons';

import styles from './Favorite.module.css';

export const Favorite = () => {
	// const swiperRef = useRef<SwiperType>(null);
	// const [isBegining, setIsBegining] = useState(true);
	// const [isEnd, setIsEnd] =useState(false)

	// const handleNext= () => {
	// 	swiperRef.current?.slideNext();
	// }

	// const handlePrev = () => {
	// 	swiperRef.current?.slidePrev();
	// }

	return (
		<section className={styles.sliderSection}>
			{/* <div className={styles.header}>
				<h2 className={styles.title}>favorite recipes</h2>
				<div className={styles.arrows}>
					<button onClick={handlePrev} disabled={isBegining}>
						{isBegining ? <IconLeftDisabled/> : <IconLeft />}
					</button>
					<button onClick={handleNext} disabled={isEnd}>
						{isEnd ? <IconRightDisabled/> : <IconRight />}
						
					</button>
				</div>
			</div>
			<div className={styles.sliderContainer}>
				<Swiper
					spaceBetween={16}
					slidesPerView={1}
					onSwiper={(swiper) => {
						swiperRef.current = swiper;
						setIsBegining(swiper.isBeginning)
						setIsEnd(swiper.isEnd)
					}}
					onSlideChange={(swiper) => {
						setIsBegining(swiper.isBeginning)
						setIsEnd(swiper.isEnd)
					}}
					breakpoints= {{
						768: {
							slidesPerView: 2
						}
					}}
				>
					<SwiperSlide><RecipeCard /></SwiperSlide>
					<SwiperSlide><RecipeCard /></SwiperSlide>
					<SwiperSlide><RecipeCard /></SwiperSlide>
					<SwiperSlide><RecipeCard /></SwiperSlide>
				</Swiper>
			</div> */}
		</section>
	)
}
