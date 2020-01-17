export const addImage = (imgSrc, callbak) => {
    const imageElem = document.createElement('img');
    imageElem.setAttribute('alt', 'My photo');
    imageElem.src = imgSrc;

    const conteinerElem = document.querySelector('.page');
    conteinerElem.append(imageElem);

    callbak = (erorr) => {
        if (error) {
            console.log('error');
            return;
        }
    };

    const onImageLoaded = () => {
        callbak(null, { width: 200, height: 100 });
    };


    imageElem.addEventListener('load', onImageLoaded);
    imgElem.addEventListener('error', () => callback('Image load failed'));
};