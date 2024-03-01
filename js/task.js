const modalBtn = document.querySelector(".button");
modalBtn.addEventListener("click", handleModal);

function handleModal(event) {
  const instance = basicLightbox.create(`
    <div class="modal-container">
                <button class="close-button" type="button">
                    <svg class="close-icon" width="8" height="8">
                        <use href="./images/icons.svg#icon-close"></use>
                    </svg>
                </button>
                <p class="modal-paragraph">Leave your contacts and we will call you back</p>
                <form class="contact-data-form" name="contacts-from">
                    <div class="contact-position">
                        <label class="contact-data-label" for="user-name">Name</label>
                        <div class="label-container">
                            <input class="contact-input" type="text" name="user-name" id="user-name" autofocus>
                            <svg class="contact-icon" width="18" height="24" aria-label="person icon">
                                <use href="./images/icons.svg#icon-person"></use>
                            </svg>
                        </div>
                    </div>
                    <div class="contact-position">
                        <label class="contact-data-label" for="user-phone">Phone</label>
                        <div class="label-container">
                            <input class="contact-input" type="text" name="username" id="user-phone">
                            <svg class="contact-icon" width="18" height="24" aria-label="phone icon">
                                <use href="./images/icons.svg#icon-phone"></use>
                            </svg>
                        </div>
                    </div>
                    <div class="contact-position">
                        <label class="contact-data-label" for="user-email">Email</label>
                        <div class="label-container">
                            <input class="contact-input" type="email" name="useremail" id="user-email">
                            <svg class="contact-icon" width="18" height="24" aria-label="email icon">
                                <use href="./images/icons.svg#icon-email"></use>
                            </svg>
                        </div>
                    </div>
                    <div class="contact-position-comment">
                        <label class="contact-data-label" for="user-comment">Comment</label>
                        <textarea class="contact-input comment-input" placeholder="Text input" name="user-comment" id="user-comment"></textarea>
                    </div>
                    <div class="checkbox-container">
                        <input class="contact-input visually-hidden" type="checkbox" name="user-privacy" value="true" id="user-privacy">
                        <label class="contact-data-label priv-label" for="user-privacy">
                            <span class="checkbox-icon">
                                <svg width="10" height="8">
                                    <use href="./images/icons.svg#icon-click"></use>
                                </svg>
                            </span>I accept the terms and conditions of the 
                            <a class="privacy-link" href="">Privacy Policy </a>
                        </label>
                    </div>
                    <button class="send-btn" type="submit">Send</button>
                </form>
            </div>
`);

  instance.show();
  const closeModal = document.querySelector(".close-button");
  closeModal.addEventListener("click", handleCloseBtn);

  function handleCloseBtn(event) {
    instance.close();
  }
}
