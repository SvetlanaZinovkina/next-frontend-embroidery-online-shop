import axiosClassic from "../api/axios";

const getEmbroideryData = async (page = 1, limit = 20, lang = 'en') => {
    try {
        const { data } = await axiosClassic.get('/api/v1/shop/embroidery', {
            params: {
                page,
                limit,
                language: lang,
            },
        });
        return data;
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        throw error;
    }
};

export default getEmbroideryData;
