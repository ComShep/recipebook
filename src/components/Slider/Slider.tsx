import { useRef, useState, type ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { IconLeft, IconLeftDisabled, IconRight, IconRightDisabled } from '../assets/icons/Icons';
import styles from './Slider.module.css';

type SlideData = {
  id: string | number;
  [key: string]: any;
};

type Props<T extends SlideData> = {
  slidesInfo: Array<T> | null;
  sliderTitle: string;
  renderCard: (slideItem: T) => ReactNode; 
};

export const Slider = <T extends SlideData>({slidesInfo, sliderTitle, renderCard}: Props<T>) => {
	const swiperRef = useRef<SwiperType>(null);
	const [isBegining, setIsBegining] = useState(true);
	const [isEnd, setIsEnd] =useState(false)

	const handleNext= () => {
		swiperRef.current?.slideNext();
	}

	const handlePrev = () => {
		swiperRef.current?.slidePrev();
	}

	if (slidesInfo === null) {
		return;
	}

	return (
		<section className={styles.sliderSection}>
			<div className={styles.header}>
				<h2 className={styles.title}>{sliderTitle}</h2>
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
					{slidesInfo.map(slideItem => 
						<SwiperSlide key={slideItem.id}>
							{renderCard(slideItem)}
						</SwiperSlide>
					)}
				</Swiper>
			</div>
		</section>
	)
}
