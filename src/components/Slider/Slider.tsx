import { useRef, useState, type ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { IconLeft, IconLeftDisabled, IconRight, IconRightDisabled } from '../assets/icons/Icons';
import styles from './Slider.module.css';
import { Grid, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

type SlideData = {
	id: string | number;
	[key: string]: any;
};

type Props<T extends SlideData> = {
	slidesInfo: Array<T> | null;
	sliderTitle: string;
	renderCard: (slideItem: T) => ReactNode;
	rows?: number;
	perView?: number
};

export const Slider = <T extends SlideData>({ slidesInfo, sliderTitle, renderCard, rows = 1, perView = 2 }: Props<T>) => {
	const swiperRef = useRef<SwiperType>(null);
	const [isBegining, setIsBegining] = useState(true);
	const [isEnd, setIsEnd] = useState(false)

	const handleNext = () => {
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
						{isBegining ? <IconLeftDisabled /> : <IconLeft />}
					</button>
					<button onClick={handleNext} disabled={isEnd}>
						{isEnd ? <IconRightDisabled /> : <IconRight />}

					</button>
				</div>
			</div>
			<div className={styles.sliderContainer}>
				<Swiper
					modules={[Grid, Pagination]}
					spaceBetween={16}
					slidesPerView={1}
					slidesPerGroup={1}
					grid={{
						rows: 1,
						fill: 'row'
					}}
					onSwiper={(swiper) => {
						swiperRef.current = swiper;
						setIsBegining(swiper.isBeginning)
						setIsEnd(swiper.isEnd)
					}}
					onSlideChange={(swiper) => {
						setIsBegining(swiper.isBeginning)
						setIsEnd(swiper.isEnd)
					}}
					breakpoints={{
						1024: {
							slidesPerGroup: 1,
							slidesPerView: perView,
							grid: {
								rows: rows,
							}
						},
						768: {
							slidesPerView: perView - 1,
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
