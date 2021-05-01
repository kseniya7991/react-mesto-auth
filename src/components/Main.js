import addButton from '../images/__add-button.svg';

function Main() {
  return (
    <main>
    <section class="profile">
      <div class="user">
        <div class="user-photo">
          <img class="user__avatar" src="#" alt="фото пользователя" title="фото пользователя" /> 
        </div>
        <div class="user__profile-info">
          <div class="user__name-block">
            <h1 class="user__name">Ксения Стойчикова</h1>
            <button class="user__edit-button" type="submit" aria-label="edit"></button>
          </div>    
          <p class="user__about">Исследователь</p>
        </div>
      </div>
      
      <button class="add-button" type="button">
         <img src={addButton} class="add-button__image"  alt="кнопка" title="кнопка" />
      </button>
    </section>

    <section class="photo-tape">
      <ul class="photos-grid">
      </ul>
    </section>
  </main>
  );
}

export default Main;
