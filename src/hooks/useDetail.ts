import { useEffect } from "react";
import { useRecipeBookContext } from "../context/RecipeContext"
import { getDetail } from "../api/api";
import type { CookingTipsDetail, CookingTipsDetailResponse, Recipe, RecipeDetailResponse, SubSectionType } from "../types/types";

type SectionTypeMap = {
  'recipes': Recipe;
  'cooking_tips': CookingTipsDetail;
};

export const useDetail = <T extends keyof SectionTypeMap>(id: string | undefined, section: T, subSection?: SubSectionType | null) => {
	const {detail, setDetail, isLoadingDetail, setIsLoadingDetail} = useRecipeBookContext();
	

	const loadDetailData = async () => {
		if (id === undefined) return;

		setIsLoadingDetail(true);
		try {
			const data = await getDetail<RecipeDetailResponse | CookingTipsDetailResponse>(id, section, subSection);
			const detailData = {
				id: id,
				...data
			} as SectionTypeMap[T]
			setDetail(detailData)
		} catch (err) {
			console.log(err)
		} finally {
			setIsLoadingDetail(false)
		}
	}

	useEffect(() => {
		loadDetailData();
	}, [id, section]);

	return {
		detail: detail as SectionTypeMap[T] | null,
		isLoadingDetail
	}
}