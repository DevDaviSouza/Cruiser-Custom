AOS.init();


const swiper = new Swiper('.swiper', {
        loop: true,

        autoplay: {
          delay: 3000,
          disableOnInteraction: true 
        },

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        slidesPerView: 1
      });

      function enviarEmail() {
        let nome = document.getElementById('nome').value
        let email = document.getElementById('email').value
        let telefone = document.getElementById('telefone').value
        let descritivo = document.getElementById('descritivo').value

        let templateParams = {
          from_name: nome,
          from_email: email,
          from_telefone: telefone,
          message: descritivo
        }
        
        emailjs.send('service_80yr5je', 'contato_form', templateParams, "gBH1W4QtLdiDuB3so")
        .then(() => {
          console.log('SUCCESS!');
        }, (error) => {
            console.log('FAILED...', error);
        });
      }