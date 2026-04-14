import { type ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';
import { useSlider } from '../../hooks/useSlider';

import { IconLeft, IconLeftDisabled, IconRight, IconRightDisabled } from '../assets/icons/Icons';

import styles from './Slider.module.css';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import clsx from 'clsx';

type SlideData = {
	id: string | number;
	[key: string]: any;
};

type Props<T extends SlideData> = {
	slidesInfo: Array<T> | null;
	sliderTitle: string;
	renderCard: (slideItem: T) => ReactNode;
	rows?: number;
	perView?: number;
	border?: boolean;
	backColor?: boolean
};

export const Slider = <T extends SlideData>({ slidesInfo, sliderTitle, renderCard, rows = 1, perView = 2, border = true, backColor = false }: Props<T>) => {
	const {isBegining, isEnd, handleNext, handlePrev, onSwiperInit, onSlideChange} = useSlider();

	const sliderSection = clsx({
		[styles.sliderSection]: true,
		[styles.sliderSectionBorder]: border,
		[styles.sliderSectionBackground]: backColor
	})

	if (slidesInfo === null) {
		return;
	}

	return (
		<section className={sliderSection}>
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
					onSwiper={onSwiperInit}
					onSlideChange={onSlideChange}
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
