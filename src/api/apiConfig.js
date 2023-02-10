const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '5805c824a6a796dd7b66b4d53e70d510',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
