const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const avatarChooser = document.querySelector('.ad-form-header__input');
const avatarPreview = document.querySelector('.ad-form-header__preview img');
const photoChooser = document.querySelector('.ad-form__input');
const photoPreview = document.querySelector('.ad-form__photo-container img');

//для аватара
avatarChooser.addEventListener('change', () => {
  const fileAvatar = avatarChooser.files[0];
  const fileAvatarName = fileAvatar.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileAvatarName.endsWith(it));

  if (matches) {
    avatarPreview.src = URL.createObjectURL(fileAvatar);
  }
});

//для фото жилья
photoChooser.addEventListener('change', () => {
  const filePhoto = photoChooser.files[0];
  const filePhotoName = filePhoto.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => filePhotoName.endsWith(it));
  if (matches) {
    photoPreview.src = URL.createObjectURL(filePhoto);
  }
});
