import { useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';

export const useSlider = () => {
	const swiperRef = useRef<SwiperType>(null);
	const [isBegining, setIsBegining] = useState<boolean>(true);
	const [isEnd, setIsEnd] = useState<boolean>(false)

	const handleNext = () => {
		swiperRef.current?.slideNext();
	}

	const handlePrev = () => {
		swiperRef.current?.slidePrev();
	}

	const onSwiperInit = (swiper: SwiperType) => {
		swiperRef.current = swiper;
		setIsBegining(swiper.isBeginning);
		setIsEnd(swiper.isEnd);
	};

	const onSlideChange = (swiper: SwiperType) => {
		setIsBegining(swiper.isBeginning);
		setIsEnd(swiper.isEnd);
	}


	return {
		isBegining,
		isEnd,

		handleNext,
		handlePrev,

		onSwiperInit,
		onSlideChange
	}
}