const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';
userAvatarElem.src = defaultAvatar;


const fetchUsarData = userName => {
    return fetch(`https://api.github.com/user/${userName}`)
        .then(response => response.json());
}
const renderUserData = () => {
    const { avatar_upl, name, location } = userData;
    userAvatarElem.src = avatar_upl;
    userNameElem.textContent = name;
    userLocationElem.textContent = location ?
        `from ${location}` :
        '';
};

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');



const onSearchUser = () => {
    const userName = userNameInputElem.value;
    fetchUsarData(userName)
        .then(userData => renderUserData(userData));

};

showUserBtnElem.addEventListener('click', onSearchUser);