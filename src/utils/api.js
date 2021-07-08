const handleResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
};

class Api {
  constructor({ token, groupID, baseUrl }) {
    this._token = token;
    this._groupID = groupID;
    this._baseUrl = baseUrl;
  }

  getUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._token,
        method: 'GET',
      },
    })
    .then(handleResponse);
  }

  getCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: {
        authorization: this._token,
      },
    })
    .then(handleResponse);
  }

  sendUser({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    })
    .then(handleResponse);
  }

  addCard(newCard) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: { authorization: this._token, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: newCard.title,
        link: newCard.link,
      }),
    })
    .then(handleResponse);
  }

  removeCard(idCard) {
    return fetch(`${this._baseUrl}/cards/${idCard}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
      },
    })
    .then(handleResponse);
  }

  changeLikeCardStatus(idCard, isLiked) {
    return fetch(`${this._baseUrl}/cards/likes/${idCard}`, {
      method: !isLiked ? 'PUT' : 'DELETE',
      headers: {
        authorization: this._token,
      },
    })
    .then(handleResponse);
  }

  updateAvatar(avatarLink) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        avatar: avatarLink,
      }),
    })
    .then(handleResponse);
  }
}

const api = new Api({
  token: '98ab6b78-4926-4ba2-b164-ff0669091526',
  groupID: 'cohort-22',
  baseUrl: 'http://api.kst.mesto.nomoredomains.club'
});

export default api;
