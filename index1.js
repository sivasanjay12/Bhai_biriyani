// var fulldiv=document.getElementById('header-contains')

// const  header=document.createElement('header')
// header.className='header'

// const logo=document.createElement('div')
// logo.className='logo'
// const  logoimg=document.createElement('div')
// logoimg.className='logo-img'
// logoimg.innerHTML=' <img src="./images/title.png" alt="" class="img1">'
// const bhai_title=document.createElement('div')
// bhai_title.innerHTML='<h1 class="bhainame">Bhai Biriyani</h1>'

// const loc=document.createElement('div')
// loc.innerHTML='<h4 class="loc">location</h4>'
// const search=document.createElement('button')
// search.className='search'
// search.innerHTML='<i class="fa fa-clock-o" style="font-size:20px"></i> Order Now <i class="fas fa-angle-down" style="font-size:20px"></i>'

// const delivery=document.createElement('div')
// delivery.className='del'
// delivery.innerHTML='<i class="fas fa-bicycle" style="font-size:14px"></i> delivery'

// const menu=document.createElement('div')
// menu.className='menu'
// menu.innerHTML=`  <div class="m2">Search</div>
//      <div class="m3">Outlets</div>
//      <button class="m1">Menu</button>
//      <div class="m4">Book a Table</div>`

//      const login=document.createElement('div')
//      login.className='login'
//      login.innerHTML='<button><i class="material-icons" style="font-size:20px">person</i>   Login</button>'
// // logoText.innerHTML = 'Biriyani<span class="logo-subtext">CEI</span>';

// //header tag fully appended
// logo.appendChild(logoimg)
// logo.appendChild(bhai_title)
// logo.appendChild(loc)
// loc.appendChild(search)
// logo.appendChild(delivery)
// logo.appendChild(menu)
// logo.appendChild(login)

// //header appended to the html tag
// header.appendChild(logo)


const headercontainer = document.querySelector('#header-container')
        const header = document.createElement('header')
        header.className = 'header'

        const logo = document.createElement('div')
        logo.className = 'logo'
        
        // Create logo left section
        const logoLeft = document.createElement('div')
        logoLeft.className = 'logo-left'
        
        const logoimg = document.createElement('div')
        logoimg.className = 'logo-img'
        logoimg.innerHTML = ' <img src="./images/title.png" alt="" class="img1">'
        
        const bhai_title = document.createElement('div')
        bhai_title.innerHTML = '<h1 class="bhainame">Bhai Biriyani</h1>'

        const loc = document.createElement('div')
        loc.className = 'loc'
        loc.innerHTML = '<h4>location</h4>'
        
        const search = document.createElement('button')
        search.className = 'search'
        search.innerHTML = '<i class="fa fa-clock-o" style="font-size:20px"></i> Order Now <i class="fas fa-angle-down" style="font-size:20px"></i>'

        const delivery = document.createElement('div')
        delivery.className = 'del'
        delivery.innerHTML = '<i class="fas fa-bicycle" style="font-size:14px"></i> delivery'

        // Append elements to logoLeft
        logoLeft.appendChild(logoimg)
        logoLeft.appendChild(bhai_title)
        logoLeft.appendChild(loc)
        loc.appendChild(search)
        logoLeft.appendChild(delivery)

        const menu = document.createElement('div')
        menu.className = 'menu'
        menu.innerHTML = `  
            <div class="m2">Search</div>
            <div class="m3">Outlets</div>
            <button class="m1">Menu</button>
            <div class="m4">Book a Table</div>`

        const login = document.createElement('div')
        login.className = 'login'
        login.innerHTML = '<button><i class="material-icons" style="font-size:20px">person</i>   Login</button>'

        // Mobile menu button
        const mobileMenuBtn = document.createElement('button')
        mobileMenuBtn.className = 'mobile-menu-btn'
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>'
        mobileMenuBtn.addEventListener('click', function() {
            menu.classList.toggle('active')
        })

        // Append elements to logo
        logo.appendChild(logoLeft)
        logo.appendChild(menu)
        logo.appendChild(login)
        logo.appendChild(mobileMenuBtn)

        // Append logo to header
        header.appendChild(logo)
        headercontainer.appendChild(header)


//now creating an whole body of  the html
const whole=document.querySelector('.whole')
const content=document.createElement('div')
content.className='sec_div'
// const bliss=document.createElement('div')
// bliss.className='full1'
const leftside=document.createElement('div')
leftside.className='left1'
leftside.innerHTML=`<h1 class="royal  spa"><span>Royal</span> <span>Biriyani Bliss</span>
<h2 class="space2">Savor the rich auroma, bold spices, and melt-in-your-mouth goodness of our authentic, handcraft biriyani</h2>
<div class="btn1">
<div class="org"><i class="fas fa-angle-down" style="font-size:20px"></i></div> 
<div class="ligbro">Order Now</div>
<div class="price_tag">Mutton Biriyani <span class="price_val">$15</span></div> 
</div> 
<div class="truck">

<div class="tr1"><i class="fa-solid fa-truck-fast"></i>
       <div class="tr2">Freshly <span class="line"> Made</span>
       </div>
</div>

<div class="tr1"><i class="fa-solid fa-truck-fast"></i>
<div class="tr2">Authentic  <span class="line">  Flavors</span>
</div>
</div>

<div class="tr1"><i class="fa-solid fa-truck-fast"></i>
<div class="tr2">Fast <span class="line"> Delivery</span>
</div>
</div>

</div>`

const rightside=document.createElement('div')
rightside.className='right1'
rightside.innerHTML=`
<div>
<img src="./images/dish7.png" class="biriyani_img" id="mainImage">
</div>
<div class="click_img4">
    <img src="./images/dish7.png" class="biri_img2">
    <img src="./images/dish7.png" class="biri_img2">
    <img src="./images/dish7.png" class="biri_img2">
    <img src="./images/dish7.png" class="biri_img2">
</div>
`
document.addEventListener('DOMContentLoaded', () => {
 
  const mainImage = document.getElementById('mainImage');
            const thumbnails = document.querySelectorAll('.biri_img2');
            
            function triggerSlideAnimation() {
                console.log("hello")
    
                // Remove any existing animation classes
                mainImage.classList.remove('slide-out', 'slide-in');
               
                // Trigger reflow to restart animation
                void mainImage.offsetWidth;
                
                // Add slide-out class to move image to left
                mainImage.classList.add('slide-out');
                
                // After slide-out completes, slide in from right
                
                setTimeout(() => {
                    mainImage.classList.remove('slide-out');
                    mainImage.classList.add('slide-in');
                }, 700);
                //  thumbnails.style.background.color="white"
                // thumbnails.style.opacity="1"
            }
        
            
            // Add click event to each thumbnail
            thumbnails.forEach(thumbnail => {
                thumbnail.addEventListener('click', 
                    triggerSlideAnimation)
                });
           
                });
        
content.appendChild(rightside)
content.appendChild(leftside)



const content1=document.createElement('div')
content1.className="content1"
content1.innerHTML=`<h1 class="taste">A Taste That Tells A Story</h1>`
const about=document.createElement('div')
about.className="about"
about.innerHTML=`<div class="first_half"><h1>From the royal kitchens of the
 Mughals to the bustling streets of Hyderabad, our biryani carries a legacy of flavor and culture. Made with age-old recipes and premium ingredients, every serving is a tribute to authenticity.</h1>
</div>


<div class="second_half">
 <div class="control">
    <div class="image-container">
        <img src="./images/dish1.png" alt="Boom Image" class="boom-image">
    </div>
      <div class="image-container">  
        <img src="./images/dish2.png" alt="Boom Image" class="boom-image">
    </div>
      <div class="image-container">  
        <img src="./images/dish3.png" alt="Boom Image" class="boom-image">
    </div>
     <div class="image-container">
        <img src="./images/dish4.png" alt="Boom Image" class="boom-image">
    </div>
    </div>

    <div class="control">
    <div class="image-container">
        <img src="./images/dish5.png" alt="Boom Image" class="boom-image">
    </div>
      <div class="image-container">
        <img src="./images/dish6.png" alt="Boom Image" class="boom-image">
    </div>
      <div class="image-container">
        <img src="./images/food1.png" alt="Boom Image" class="boom-image">
    </div>
     <div class="image-container">
        <img src="./images/food2.png" alt="Boom Image" class="boom-image">
    </div>
    </div>

    <div class="control">
    <div class="image-container">
        <img src="./images/dish1.png" alt="Boom Image" class="boom-image">
    </div>
      <div class="image-container">
        <img src="./images/dish2.png" alt="Boom Image" class="boom-image">
    </div>
      <div class="image-container">
        <img src="./images/dish3.png" alt="Boom Image" class="boom-image">
    </div>
     <div class="image-container">
        <img src="./images/dish4.png" alt="Boom Image" class="boom-image">

    </div>
    </div>
</div>`


const content2=document.createElement('div')
content2.className="content2"
content2.innerHTML=`<h1 class="text-center">What Make Our Biriyani Special?
<div class="box">We Are Famous in Spice</div>`

const content3=document.createElement('div')
content3.className="content3"
content3.innerHTML=`<h1 class="text-center">Signature Food Loved By Thousands
<div class="hydrabad">
<div class="menu1">
<div  class="hover_menu">
    <div class="same">
    <img src="./images/dish7.png" class="biri_img">
    <h1 class="biri_space">Biriyani</h1>
    </div>
    
    <div class="same">
    <img src="./images/dish7.png" class="biri_img">
    <h1 class="biri_space">Fried Rice</h1>
    </div>
    <div class="same">
    <img src="./images/dish7.png" class="biri_img">
    <h1 class="biri_space">Fries</h1>
    </div>
    <div class="same">
    <img src="./images/dish7.png" class="biri_img">
    <h1 class="biri_space">Combo</h1>
    </div>
</div>
<div class="line_div">
<div class="line_div1"></div>
</div>
</div>



<div>
        <div class="div1">
        
        <div class="div2">
        <h1 class="letter">Hyderabadi Dum Biriyani</h1>
        <h4 class="letter1">A fragrant mix of basmati rice, marinated meat, and saffron, slow-cooked to perfection in traditional dum style</h4>
        <div class="block">
        <div class="org1"><i class="fas fa-angle-down" style="font-size:20px"></i></div> 
<div class="ligbro1">Order Now</div>
        <button class="right_arrow">  <  >   </button>

        </div>
        </div>
        <div class="div3">
        </div>
        </div>
        <img src="./images/dish1.png" class="img111">
    </div>

</div>`


const content4=document.createElement('div')
content4.className="content4"
content4.innerHTML=`<h1 class="text-center1">What Our Customers Says</h1>


<div class="animation-track">
    <div class="flex-container">
        <!-- Your four review_box divs here -->
        <div class="review_box"><h1 class="review_tag">"Absolutely the best biriyani! The flavors are authentic , and the portions are very generous."</h1>
         <h1 class="review_tag">-Arun.M</h1>
         <img src="./images/star.jpeg" alt="" class="star_img"></div>
        <div class="review_box"><h1 class="review_tag">"Absolutely the best biriyani! The flavors are authentic , and the portions are very generous."</h1>
         <h1 class="review_tag">-Arun.M</h1>
         <img src="./images/star.jpeg" alt="" class="star_img"></div>
        <div class="review_box"><h1 class="review_tag">"Absolutely the best biriyani! The flavors are authentic , and the portions are very generous."</h1>
         <h1 class="review_tag">-Arun.M</h1>
         <img src="./images/star.jpeg" alt="" class="star_img"></div>
        <div class="review_box"><h1 class="review_tag">"Absolutely the best biriyani! The flavors are authentic , and the portions are very generous."</h1>
         <h1 class="review_tag">-Arun.M</h1>
         <img src="./images/star.jpeg" alt="" class="star_img"></div>
        
        <!-- Duplicates for seamless looping -->
        <div class="review_box"><h1 class="review_tag">"Absolutely the best biriyani! The flavors are authentic , and the portions are very generous."</h1>
         <h1 class="review_tag">-Arun.M</h1>
         <img src="./images/star.jpeg" alt="" class="star_img"></div>
        <div class="review_box"><h1 class="review_tag">"Absolutely the best biriyani! The flavors are authentic , and the portions are very generous."</h1>
         <h1 class="review_tag">-Arun.M</h1>
         <img src="./images/star.jpeg" alt="" class="star_img"></div>
        <div class="review_box"><h1 class="review_tag">"Absolutely the best biriyani! The flavors are authentic , and the portions are very generous."</h1>
         <h1 class="review_tag">-Arun.M</h1>
         <img src="./images/star.jpeg" alt="" class="star_img"></div>
        <div class="review_box"><h1 class="review_tag">"Absolutely the best biriyani! The flavors are authentic , and the portions are very generous."</h1>
         <h1 class="review_tag">-Arun.M</h1>
         <img src="./images/star.jpeg" alt="" class="star_img"></div>
    </div>
</div>
`


const content5=document.createElement('div')
content5.className="content5"
content5.innerHTML=`<div class="faq_parent">
    <div class="faq"><h1 class="h1_faq">FAQs</h1>
<h3 class="h3_faq">For any further Enqueries about our menu, orders,or catering services, please feel free to get in touch with us</h3>
<div class="orange_box">bhaibiriyani03@gmail.com</div>
</div>


    <div class="QA">
   <div class="container1">
      
        <div class="faq-container">
            <div class="query_section">
                <div class="query_questions">
                    How can I contact customer support?
                    <i class='fas fa-angle-down'></i>
                </div>
                <div class="query_answer">
                    You can contact our customer support team by email at support@company.com, 
                    by phone at 1-800-123-4567, or through the live chat on our website. 
                    Our support hours are Monday to Friday, 9 AM to 6 PM EST.
                </div>
            </div>
            
            <div class="query_section">
                <div class="query_questions">
                    What is your return policy?
                    <i class='fas fa-angle-down'></i>
                </div>
                <div class="query_answer">
                    We offer a 30-day return policy for all unused items in their original packaging. 
                    To initiate a return, please visit our returns portal and enter your order number 
                    and email address. Return shipping is free for orders over $50.
                </div>
            </div>
            
            <div class="query_section">
                <div class="query_questions">
                    How long does shipping take?
                    <i class='fas fa-angle-down'></i>
                </div>
                <div class="query_answer">
                    Standard shipping typically takes 3-5 business days within the continental US. 
                    Expedited shipping options are available at checkout for an additional fee. 
                </div>
            </div>
            
            <div class="query_section">
                <div class="query_questions">
                    Do you offer international shipping?
                    <i class='fas fa-angle-down'></i>
                </div>
                <div class="query_answer">
                    Yes, we ship to over 50 countries worldwide. International shipping rates 
                    and delivery times vary by destination. Please see our international shipping 
                    page for more details.
                </div>
            </div>
            
            <div class="query_section">
                <div class="query_questions">
                    Can I change or cancel my order?
                    <i class='fas fa-angle-down'></i>
                </div>
                <div class="query_answer">
                    Orders can be changed or cancelled within 1 hour of placement. After this time, 
                    orders enter our processing system and cannot be modified. If you need to make 
                    changes, please contact us immediately with your order number.
                </div>
            </div>
        
  
        </div>
        
    </div>
    
</div>`

document.addEventListener('DOMContentLoaded', () => {
    // Select all question elements
    const questions = document.querySelectorAll('.query_questions');
    
    // Add click event to each question
    questions.forEach(question => {
        question.addEventListener('click', () => {
            // Get the parent section
            const section = question.parentElement;
            // Toggle the active class
            section.classList.toggle('active');
        });
    });
});
        // addEventListener('click',query)
// content5.appendChild('query')

// query_questions.addEventListener('click',review)
// function review(){

//      <div class="query_section">
//     <div  class="query_questions1"></div>
    
// </div>
// }


const content6=document.createElement('div')
content6.className="content6"
content6.innerHTML=`<div class="faq_parent">
    <div class="abt_mandhi">
<div class="padding_box">
      
        <h1>A Feast of flavors!</h1>
        <div class="boder_top"></div>
        <div class="box_boder">MANDHI</div>
        <div class="boder_top"></div>

        <h5>A flavorfull yemeni-style rice dish with tender, slow-cooked meat, aromatic spices, and a smoky essence, served with a tangy sauces</h5>
    <div class="block">
        <div class="org11"><i class="fas fa-angle-down" style="font-size:20px"></i></div> 
<div class="ligbro1">Order Now</div>
      
</div>
        </div>
    </div>
    <div class="mandhi_img">
        <img src="./images/food1.png" class="mandhi_img1">
    </div>
</div>`



const content8=document.createElement('div')
content8.className="content8"
content8.innerHTML=`<img src="./images/footer.jpeg" class="footer_img">`

content1.appendChild(about)
// content.appendChild(bliss)
whole.appendChild(content)
whole.appendChild(content1)
whole.appendChild(content2)
whole.appendChild(content3)
whole.appendChild(content4)
whole.appendChild(content6)
whole.appendChild(content5)
whole.appendChild(content8)



console.log(whole)

 document.getElementById('header-container').appendChild(header);




// document.addEventListener('DOMContentLoaded', () => {

// login.addEventListener("click",login_page)
// function login_page(){
//     console.log("done")
//     whole.innerHTML=""

//     const content=document.createElement('div')
//     content.className="login_page"
//     content.innerHTML=`<div class="login1">
//     <h1 class="Signup">
//         Sign in/Sign up <i class="material-icons" style="font-size:36px">close</i>
//     </h1>
//     <h5>Please Enter Your Mobile Number </h5>
//     <input type="number" placeholder="Enter Here">
//     <button class="sign_btn">Next</button>
// </div>`
    
// whole.appendChild(content)


// }
// });


// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const loginButton = document.querySelector('.login button');
    const whole = document.querySelector('.whole');
    
    // Show home content by default
    // showHomeContent();
    
    // Login button event listener
    loginButton.addEventListener('click', function() {
        showLoginPage();
    });
    
    // Show home content
    // function showHomeContent() {
    //     whole.innerHTML = `
           
    //     `;
    // }
    
    // Show login page with mobile number input
    function showLoginPage() {
        whole.innerHTML = `
            <div class="login_page">
                <div class="login1">
                    <h1 class="Signup">
                        Sign in/Sign up <i class="material-icons close-icon" style="font-size:36px">close</i>
                    </h1>
                    <h5>Please Enter Your Mobile Number</h5>
                    <input type="number" placeholder="Enter Here" class="mobile-input">
                    <button class="sign_btn">Next</button>
                </div>
            </div>
        `;
        
        // Add event listeners
        addLoginEventListeners();
    }
    
    // Add event listeners to login page
    function addLoginEventListeners() {
        // Close button event
        const closeIcon = whole.querySelector('.close-icon');
        if (closeIcon) {
            closeIcon.addEventListener('click', function() {
                // showHomeContent();
            });
        }
        
        // Next button event
        const nextBtn = whole.querySelector('.sign_btn');
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                const mobileInput = whole.querySelector('.mobile-input');
                if (mobileInput && mobileInput.value.length === 10) {
                    showOTPPage(mobileInput.value);
                } else {
                    alert('Please enter a valid 10-digit mobile number');
                }
            });
        }
        
        // Mobile input validation - allow only numbers
        const mobileInput = whole.querySelector('.mobile-input');
        if (mobileInput) {
            mobileInput.addEventListener('input', function() {
                this.value = this.value.replace(/[^0-9]/g, '');
                if (this.value.length > 10) {
                    this.value = this.value.slice(0, 10);
                }
            });
        }
    }
    
    // Function to show OTP page
    function showOTPPage(mobileNumber) {
        whole.innerHTML = `
            <div class="login_page">
                <div class="login1 otp-container">
                    <h1 class="Signup">
                        OTP Verification <i class="material-icons close-icon" style="font-size:36px">close</i>
                    </h1>
                    <h5>Enter the 6-digit OTP sent to your mobile number ending with ${mobileNumber.slice(6)}</h5>
                    
                    <div class="otp-inputs">
                        <input type="text" class="otp-input" maxlength="1" data-index="0">
                        <input type="text" class="otp-input" maxlength="1" data-index="1">
                        <input type="text" class="otp-input" maxlength="1" data-index="2">
                        <input type="text" class="otp-input" maxlength="1" data-index="3">
                        <input type="text" class="otp-input" maxlength="1" data-index="4">
                        <input type="text" class="otp-input" maxlength="1" data-index="5">
                    </div>
                    
                    <button class="sign_btn verify-btn">Verify OTP</button>
                    <p class="resend">Didn't receive the OTP? <span class="resend-btn" style="color: #d31027; font-weight: bold;">Resend</span></p>
                </div>
            </div>
        `;
        
        // Add event listeners to OTP page
        addOTPPageEventListeners(mobileNumber);
    }
    
    // Function to add event listeners to OTP page
    function addOTPPageEventListeners(mobileNumber) {
        // Close button event
        const closeIcon = whole.querySelector('.close-icon');
        if (closeIcon) {
            closeIcon.addEventListener('click', function() {
                showHomeContent();
            });
        }
        
        // OTP input handling
        const otpInputs = whole.querySelectorAll('.otp-input');
        otpInputs.forEach((input, index) => {
            // Allow only numbers
            input.addEventListener('input', function() {
                this.value = this.value.replace(/[^0-9]/g, '');
                
                // Move to next input if current is filled
                if (this.value.length === 1 && index < otpInputs.length - 1) {
                    otpInputs[index + 1].focus();
                }
            });
            
            // Handle backspace
            input.addEventListener('keydown', function(e) {
                if (e.key === 'Backspace' && this.value === '' && index > 0) {
                    otpInputs[index - 1].focus();
                }
            });
        });
        
        // Verify button event
        const verifyBtn = whole.querySelector('.verify-btn');
        if (verifyBtn) {
            verifyBtn.addEventListener('click', function() {
                const otpInputs = whole.querySelectorAll('.otp-input');
                let otp = '';
                let allFilled = true;
                
                otpInputs.forEach(input => {
                    otp += input.value;
                    if (!input.value) allFilled = false;
                });
                
                if (allFilled) {
                    showProfilePage();
                } else {
                    alert('Please enter the complete OTP');
                }
            });
        }
        
        // Resend button event
        const resendBtn = whole.querySelector('.resend-btn');
        if (resendBtn) {
            resendBtn.addEventListener('click', function() {
                alert('OTP has been resent to your mobile number');
            });
        }
    }
    
    // Function to show profile page
    function showProfilePage() {
        whole.innerHTML = `
            <div class="login_page">
                <div class="login1 profile-setup">
                    <h1 class="Signup">
                        Complete Your Profile <i class="material-icons close-icon" style="font-size:36px">close</i>
                    </h1>
                    <h5>Please enter your details to continue</h5>
                    
                    <input type="text" placeholder="Full Name" class="name-input">
                    <input type="email" placeholder="Email Address" class="email-input">
                    
                    <button class="sign_btn complete-btn">Complete Sign Up</button>
                </div>
            </div>
        `;
        
        // Add event listeners to profile page
        addProfilePageEventListeners();
    }
    
    // Function to add event listeners to profile page
    function addProfilePageEventListeners() {
        // Close button event
        const closeIcon = whole.querySelector('.close-icon');
        if (closeIcon) {
            closeIcon.addEventListener('click', function() {
                showHomeContent();
            });
        }
        
        // Complete button event
        const completeBtn = whole.querySelector('.complete-btn');
        if (completeBtn) {
            completeBtn.addEventListener('click', function() {
                const nameInput = whole.querySelector('.name-input');
                const emailInput = whole.querySelector('.email-input');
                
                if (nameInput && emailInput && nameInput.value && emailInput.value) {
                    // Update login button text
                    const loginBtn = document.querySelector('.login button');
                    if (loginBtn) {
                        const firstName = nameInput.value.split(' ')[0];
                        loginBtn.innerHTML = `<i class="material-icons" style="font-size:20px">person</i> ${firstName}`;
                    }
                    
                    // Return to home page
                    whole.innerHTML =``
                    whole.appendChild(content)
whole.appendChild(content1)
whole.appendChild(content2)
whole.appendChild(content3)
whole.appendChild(content4)
whole.appendChild(content6)
whole.appendChild(content5)
whole.appendChild(content8)
                    
                    alert(`Welcome to Bhai Biriyani, ${nameInput.value}! Your account has been created successfully.`);
                } else {
                    alert('Please fill in all fields');
                }
            });
        }
    }
});


// document.addEventListener('DOMContentLoaded', () => {
// const menu_click=document.querySelector('.m1')
// menu_click.addEventListener("click",menu_page)
// function menu_page(){
//     console.log("done")
//     whole.innerHTML=""
//    const content=document.createElement('div')
//    content.className="menu_content"
//    content.innerHTML=`
// <img src="./images/banner.png" >
//    `
//    const content1=document.createElement('div')
//    content1.className="menu_content1"
//    content1.innerHTML=`
// <div class="full_offer">
//     <h1>Offers</h1>
//     <div class="offer_display">
//         <div class="offers_div">
//             <img src="./images/offer.png" alt="">
//             <div>
//             <h6><b>FLAT 25% OFF on Take Away Orders</b></h6>
//             <h6>No minimum order amount.</h6>
//             </div>
//         </div>
//         <div class="offers_div_yel">
//             <img src="./images/offer.png" alt="">
//             <div>
//             <h6><b>FLAT 25% OFF on Take Away Orders</b></h6>
//             <h6>No minimum order amount.</h6>
//             </div>
//         </div>

//         <div class="offers_div">
//             <img src="./images/offer.png" alt="">
//             <div >
//             <h6><b>FLAT 25% OFF on Take Away Orders</b></h6>
//             <h6>No minimum order amount.</h6>
//             </div>
//         </div>
//         <div class="offers_div_yel">
//             <img src="./images/offer.png" alt="">
//             <div>
//             <h6><b>FLAT 25% OFF on Take Away Orders</b></h6>
//             <h6>No minimum order amount.</h6>
//             </div>
//         </div>
        
//     </div>
// </div>
//    `


//    // Assumes all clickable "offers_div" and "offers_div_yel" class elements exist
// // Insert this script after the DOM content loads, e.g., in a <script> tag or with defer

// const offerPopupContent = `
//   <div class="popup-modal">
//     <button class="popup-close" aria-label="Close">&times;</button>
//     <h1>Offer Details</h1>
//     <div class="offer-popup-main">
//         <img class="offer-popup-image" src="./images/special offer.png" alt="Offer Image">
//         <div class="offer-popup-details">
//             <h2>FLAT 25% OFF on Take Away Orders</h2>
//             <p>No minimum order amount.</p>
//             <p style="font-size:1rem;color:#2a2a2a;margin-top:12px">
//                 Now get FLAT 25% OFF on all Take Away Orders for website and APP
//             </p>
//         </div>
//     </div>
//     <div class="terms-section">
//       <h3>Terms and Condition</h3>
//       <ol>
//         <li>This Coupon code can be applied only once in 2 hours</li>
//         <li>Offer Valid on BBK APP and website only</li>
//         <li>This offer cannot be clubbed with any other offer.</li>
//         <li>Offer not valid on combos or already discounted offer.</li>
//         <li>Offer applicable on min. order amount of Rs 199 & above.</li>
//         <li>Max discount Rs 3000 per order.</li>
//       </ol>
//     </div>
//   </div>
// `;

// function showOfferPopup() {
//     // Blur the offers background
//     const offerContainer = document.querySelector('.offer_display');
//     if (offerContainer) offerContainer.classList.add('blurred-bg');

//     // Add overlay
//     const overlay = document.createElement('div');
//     overlay.className = 'popup-overlay';
//     overlay.innerHTML = offerPopupContent;
//     document.body.appendChild(overlay);

//     // Close popup
//     overlay.querySelector('.popup-close').onclick = closeOfferPopup;
//     overlay.onclick = function(e) {
//         if (e.target === overlay) closeOfferPopup();
//     };
// }

// function closeOfferPopup() {
//     // Remove blur and popup
//     const offerContainer = document.querySelector('.offer_display');
//     if (offerContainer) offerContainer.classList.remove('blurred-bg');
//     const overlay = document.querySelector('.popup-overlay');
//     if (overlay) overlay.remove();
// }

// // Attach handler to all offer divs
// [
//     ...document.querySelectorAll('.offers_div'),
//     ...document.querySelectorAll('.offers_div_yel')
// ].forEach(el => {
//     el.addEventListener('click', showOfferPopup);
// });

  
//     const content2=document.createElement('div')
//    content2.className="menu_content2"
//    content2.innerHTML=` 
// <h1>Catogories</h1>
//    <div class="cat_div">
//     <div  class="cat_red">
//         <img src="./images/special offer.png" alt="">
//         <h3>Lunch combo Starting @299</h3>
//     </div>
//     <div  class="cat_red">
//         <img src="./images/offerfood (1).png" alt="">
//         <h3>Hyderabadi Biriyani</h3>
//     </div>
//     <div  class="cat_red">
//         <img src="./images/offerfood (2).png" alt="">
//         <h3>Eveyday Biriyani Combos</h3>
//     </div>
//     <div  class="cat_red">
//         <img src="./images/offerfood (3).png" alt="">
//         <h3>Kebabs</h3>
//     </div>
// </div>
//    `
// const content3 = document.createElement('div');
// content3.className = "menu_content3";
// content3.innerHTML = `
//   <h1>Lunch Combos starting @299</h1>
// `;

// const cardsContainer = document.createElement('div');
// cardsContainer.className = 'cards-row';

// const cardDiv = document.createElement('div');
// cardDiv.className = 'food-card';
// cardDiv.innerHTML = `
//   <img class="food-card-img" src="./images/curry1.png" alt="Dal Makhani Combo">
//   <div class="food-card-details">
//     <div class="food-card-title">
//       Dal Makhani [400gms] + 4 Rumali Roti + [1pc] Gulab Jamun
//     </div>
//     <div class="food-card-order-info">
//       504 People ordered in the last week
//     </div>
//     <div class="food-card-footer">
//       <span class="food-card-price">&#8377;299</span>
//       <button class="food-card-btn">Add +</button>
//     </div>
//   </div>
// `;

// const cardDiv1 = document.createElement('div');
// cardDiv1.className = 'food-card';
// cardDiv1.innerHTML = `
//   <img class="food-card-img" src="./images/menuitem.png" alt="Dal Makhani Combo">
//   <div class="food-card-details">
//     <div class="food-card-title">
//       Paneer Nawabi [500gms] + 4 Rumali Roti + [1pc] Gulab Jamun
//     </div>
//     <div class="food-card-order-info">
//       505 People ordered in the last week
//     </div>
//     <div class="food-card-footer">
//       <span class="food-card-price">&#8377;329</span>
//       <button class="food-card-btn">Add +</button>
//     </div>
//   </div>
// `;


// cardsContainer.appendChild(cardDiv);
// cardsContainer.appendChild(cardDiv1);

// content3.appendChild(cardsContainer);




// // Add event listeners to "Add +" buttons to display modal popup per card

// // Wait for DOM content loaded before attaching event listeners
// document.addEventListener('DOMContentLoaded', function() {

//   // Your food data
//   const foodItems = [
//     {
//       img: "./images/curry1.png",
//       name: "Dal Makhani [400gms] + 4 Rumali Roti + [1pc] Gulab Jamun",
//       price: 299,
//       desc: "Dal Makhani [400gms] + 4 Rumali Roti + [1pc] Gulab Jamun",
//       prep: "26 min preparation",
//       ordered: "504 People ordered in the last week",
//       serve: "Serve for 1-2",
//       qtyOptions: [
//         { label: "Dal Makhani Combo [Regular]", price: 299 }
//       ],
//       accompaniments: [
//         { label: "Raita.", img: "./images/raita.jpg", price: 0 },
//         { label: "Salna.", img: "./images/salna.jpg", price: 0 },
//         { label: "I Love Biryani without adding anything", img: "./images/plain.jpg", price: 0 }
//       ]
//     },
//     {
//       img: "./images/menuitem.png",
//       name: "Paneer Nawabi [500gms] + 4 Rumali Roti + [1pc] Gulab Jamun",
//       price: 329,
//       desc: "Paneer Nawabi [500gms] + 4 Rumali Roti + [1pc] Gulab Jamun",
//       prep: "30 min preparation",
//       ordered: "505 People ordered in the last week",
//       serve: "Serve for 1-2",
//       qtyOptions: [
//         { label: "Paneer Nawabi Combo [Regular]", price: 329 }
//       ],
//       accompaniments: [
//         { label: "Raita.", img: "./images/raita.jpg", price: 0 },
//         { label: "Salna.", img: "./images/salna.jpg", price: 0 },
//         { label: "I Love Paneer Nawabi without adding anything", img: "./images/plain.jpg", price: 0 }
//       ]
//     }
//   ];

//   const menuMain = document.querySelector('.cards-row') || document.body;

//   function launchModal(foodIndex) {
//     const food = foodItems[foodIndex];
//     let quantity = 1;
//     let selectedQtyIdx = 0;

//     function updateModalAmounts() {
//       const qtyDisplay = document.getElementById('modal-quantity-display');
//       const addBtn = document.getElementById('modal-add-btn');
//       if (qtyDisplay) qtyDisplay.textContent = quantity;
//       if (addBtn) addBtn.textContent = `Add Item ₹${food.qtyOptions[selectedQtyIdx].price * quantity}`;
//     }

//     const qtyOptionsHTML = food.qtyOptions.map((opt, idx) => `
//       <label class="food-modal-qtylist-row">
//         <span>${opt.label}</span>
//         <span class="food-modal-amt">₹${opt.price}</span>
//         <input type="radio" name="modal-qty-radio" value="${idx}" ${idx === 0 ? "checked" : ""} />
//       </label>
//     `).join('');

//     const accompHTML = food.accompaniments.map((acc, idx) => `
//       <div class="food-modal-accomp${idx === 0 ? " selected" : ""}" data-accomp-idx="${idx}">
//         <span class="food-modal-accomp-label">
//           <img src="${acc.img}" alt="" class="food-modal-accomp-img" />
//           ${acc.label}
//         </span>
//         <span class="food-modal-accomp-price">₹${acc.price}</span>
//         <input type="radio" name="modal-accomp-radio" class="accomp-radio" ${idx === 0 ? "checked" : ""} value="${idx}" />
//       </div>
//     `).join('');

//     const overlay = document.createElement('div');
//     overlay.className = 'popup-overlay';
//     overlay.innerHTML = `
//       <div class="food-modal">
//         <button class="food-modal-close" title="Close">&times;</button>
//         <div class="food-modal-left">
//           <img class="food-modal-img" src="${food.img}" alt="" />
//           <div class="food-modal-title-row">
//             <div class="food-modal-title">${food.name}</div>
//             <div class="food-modal-price">₹${food.price}</div>
//           </div>
//           <div class="food-modal-desc">${food.desc}</div>
//           <div class="food-modal-props-row">
//             <span class="food-modal-prop-item">${food.prep}</span>
//             <span class="food-modal-prop-item">${food.ordered}</span>
//             <span class="food-modal-prop-item">${food.serve}</span>
//           </div>
//         </div>
//         <div class="food-modal-right">
//           <div class="modal-section">
//             <div class="modal-section-title">Choose Quantity (select any 1)</div>
//             <div class="food-modal-qtylist">${qtyOptionsHTML}</div>
//           </div>
//           <div class="modal-section">
//             <div class="modal-section-title">Choose your free Accompaniment</div>
//             <div class="food-modal-accomp-list">${accompHTML}</div>
//           </div>
//           <div class="food-modal-qtyaction">
//             <div class="qty-btn-group">
//               <button class="qty-btn" id="qty-minus">-</button>
//               <span class="qty-display" id="modal-quantity-display">1</span>
//               <button class="qty-btn" id="qty-plus">+</button>
//             </div>
//             <button class="food-modal-addbtn" id="modal-add-btn">Add Item ₹${food.price}</button>
//           </div>
//         </div>
//       </div>
//     `;

//     document.body.appendChild(overlay);
//     menuMain.classList.add('main-blur');

//     function closeModal() {
//       overlay.remove();
//       menuMain.classList.remove('main-blur');
//     }

//     overlay.querySelector('.food-modal-close').onclick = closeModal;
//     overlay.onclick = function(e) {
//       if (e.target === overlay) closeModal();
//     };

//     overlay.querySelector('#qty-plus').onclick = function() {
//       quantity++;
//       updateModalAmounts();
//     };
//     overlay.querySelector('#qty-minus').onclick = function() {
//       if (quantity > 1) {
//         quantity--;
//         updateModalAmounts();
//       }
//     };

//     overlay.querySelectorAll('input[name="modal-qty-radio"]').forEach(radio => {
//       radio.onchange = function(e) {
//         selectedQtyIdx = parseInt(e.target.value);
//         updateModalAmounts();
//       };
//     });

//     overlay.querySelectorAll('.food-modal-accomp').forEach(div => {
//       div.onclick = function() {
//         overlay.querySelectorAll('.food-modal-accomp').forEach(d => d.classList.remove('selected'));
//         div.classList.add('selected');
//         const radioInput = div.querySelector('input[type="radio"]');
//         if (radioInput) radioInput.checked = true;
//       };
//     });

//     updateModalAmounts();
//   }

//   // Attach click listeners on all Add+ buttons
//   const buttons = document.querySelectorAll('.food-card-btn');
//   buttons.forEach((btn, index) => {
//     btn.addEventListener('click', () => {
//       launchModal(index);
//     });
//   });

// });


// // Append content3 to your actual document if not already attached
// // document.body.appendChild(content3);


// whole.appendChild(content)
// whole.appendChild(content1)
// whole.appendChild(content2)
// whole.appendChild(content3)



// const offer=document.querySelector('.full_offer')
// offer.addEventListener('click',function(){
// showOfferPopup()
// })




// }
// });
document.addEventListener('DOMContentLoaded', () => {
  // Safely get menu_click and whole
  const menu_click = document.querySelector('.m1');
  // const whole = document.getElementById('whole');
  // if (!menu_click || !whole) {
  //   console.error('.m1 or #whole not found in DOM!');
  //   return;
  // }

  menu_click.addEventListener("click", menu_page);

  function menu_page() {
    whole.innerHTML = "";

    // --- Banner ---
    const content = document.createElement('div');
    content.className = "menu_content";
    content.innerHTML = `<img src="./images/banner.png">`;

    // --- Offers Section ---
    const content1 = document.createElement('div');
    content1.className = "menu_content1";
    content1.innerHTML = `
      <div class="full_offer">
        <h1>Offers</h1>
        <div class="offer_display">
          <div class="offers_div">
            <img src="./images/offer.png" alt="">
            <div>
              <h6><b>FLAT 25% OFF on Take Away Orders</b></h6>
              <h6>No minimum order amount.</h6>
            </div>
          </div>
          <div class="offers_div_yel">
            <img src="./images/offer.png" alt="">
            <div>
              <h6><b>FLAT 25% OFF on Take Away Orders</b></h6>
              <h6>No minimum order amount.</h6>
            </div>
          </div>
          <div class="offers_div">
            <img src="./images/offer.png" alt="">
            <div>
              <h6><b>FLAT 25% OFF on Take Away Orders</b></h6>
              <h6>No minimum order amount.</h6>
            </div>
          </div>
          <div class="offers_div_yel">
            <img src="./images/offer.png" alt="">
            <div>
              <h6><b>FLAT 25% OFF on Take Away Orders</b></h6>
              <h6>No minimum order amount.</h6>
            </div>
          </div>
        </div>
      </div>
    `;

    // --- Categories Section ---
    const content2 = document.createElement('div');
    content2.className = "menu_content2";
    content2.innerHTML = `
      <h1>Catogories</h1>
      <div class="cat_div">
        <div class="cat_red">
          <img src="./images/special offer.png" alt="">
          <h3>Lunch combo Starting @299</h3>
        </div>
        <div class="cat_red">
          <img src="./images/offerfood (1).png" alt="">
          <h3>Hyderabadi Biriyani</h3>
        </div>
        <div class="cat_red">
          <img src="./images/offerfood (2).png" alt="">
          <h3>Eveyday Biriyani Combos</h3>
        </div>
        <div class="cat_red">
          <img src="./images/offerfood (3).png" alt="">
          <h3>Kebabs</h3>
        </div>
      </div>
    `;

    // --- Combos Section + Cards ---
    const content3 = document.createElement('div');
    content3.className = "menu_content3";
    content3.innerHTML = `<h1>Lunch Combos starting @299</h1>`;
    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'cards-row';
    const cardDiv = document.createElement('div');
    cardDiv.className = 'food-card';
    cardDiv.innerHTML = `
      <img class="food-card-img" src="./images/curry1.png" alt="Dal Makhani Combo">
      <div class="food-card-details">
        <div class="food-card-title">
          Dal Makhani [400gms] + 4 Rumali Roti + [1pc] Gulab Jamun
        </div>
        <div class="food-card-order-info">
          504 People ordered in the last week
        </div>
        <div class="food-card-footer">
          <span class="food-card-price">₹299</span>
          <button class="food-card-btn">Add +</button>
        </div>
      </div>
    `;
    const cardDiv1 = document.createElement('div');
    cardDiv1.className = 'food-card';
    cardDiv1.innerHTML = `
      <img class="food-card-img" src="./images/menuitem.png" alt="Paneer Nawabi Combo">
      <div class="food-card-details">
        <div class="food-card-title">
          Paneer Nawabi [500gms] + 4 Rumali Roti + [1pc] Gulab Jamun
        </div>
        <div class="food-card-order-info">
          505 People ordered in the last week
        </div>
        <div class="food-card-footer">
          <span class="food-card-price">₹329</span>
          <button class="food-card-btn">Add +</button>
        </div>
      </div>
    `;
    cardsContainer.appendChild(cardDiv);
    cardsContainer.appendChild(cardDiv1);
    content3.appendChild(cardsContainer);

    // --- Append all content sections ---
    whole.appendChild(content);
    whole.appendChild(content1);
    whole.appendChild(content2);
    whole.appendChild(content3);
    whole.appendChild(content8);


    // --- Offer Popup ---
    const offerPopupContent = `
      <div class="popup-modal">
        <button class="popup-close" aria-label="Close">&times;</button>
        <h1>Offer Details</h1>
        <div class="offer-popup-main">
          <img class="offer-popup-image" src="./images/special offer.png" alt="Offer Image">
          <div class="offer-popup-details">
            <h2>FLAT 25% OFF on Take Away Orders</h2>
            <p>No minimum order amount.</p>
            <p style="font-size:1rem;color:#2a2a2a;margin-top:12px">
              Now get FLAT 25% OFF on all Take Away Orders for website and APP
            </p>
          </div>
        </div>
        <div class="terms-section">
          <h3>Terms and Condition</h3>
          <ol>
            <li>This Coupon code can be applied only once in 2 hours</li>
            <li>Offer Valid on BBK APP and website only</li>
            <li>This offer cannot be clubbed with any other offer.</li>
            <li>Offer not valid on combos or already discounted offer.</li>
            <li>Offer applicable on min. order amount of Rs 199 & above.</li>
            <li>Max discount Rs 3000 per order.</li>
          </ol>
        </div>
      </div>
    `;
    function showOfferPopup() {
      const offerContainer = document.querySelector('.offer_display');
      if (offerContainer) offerContainer.classList.add('blurred-bg');
      const overlay = document.createElement('div');
      overlay.className = 'popup-overlay';
      overlay.innerHTML = offerPopupContent;
      document.body.appendChild(overlay);
      overlay.querySelector('.popup-close').onclick = closeOfferPopup;
      overlay.onclick = e => { if (e.target === overlay) closeOfferPopup(); };
    }
    function closeOfferPopup() {
      const offerContainer = document.querySelector('.offer_display');
      if (offerContainer) offerContainer.classList.remove('blurred-bg');
      const overlay = document.querySelector('.popup-overlay');
      if (overlay) overlay.remove();
    }
    // Attach offer listeners AFTER DOM section is in place
    [...document.querySelectorAll('.offers_div, .offers_div_yel')].forEach(el => {
      el.addEventListener('click', showOfferPopup);
    });
    const offer = document.querySelector('.full_offer');
    offer.addEventListener('click', showOfferPopup);

    // --- Food Item Modal/Order Logic ---
    const foodItems = [
      {
        img: "./images/curry1.png",
        name: "Dal Makhani [400gms] + 4 Rumali Roti + [1pc] Gulab Jamun",
        price: 299,
        desc: "Dal Makhani [400gms] + 4 Rumali Roti + [1pc] Gulab Jamun",
        prep: "26 min preparation",
        ordered: "504 People ordered in the last week",
        serve: "Serve for 1-2",
        qtyOptions: [
          { label: "Dal Makhani Combo [Regular]", price: 299 }
        ],
        accompaniments: [
          { label: "Raita.", img: "./images/raita.png", price: 0 },
          { label: "Salna.", img: "./images/salna (1).png", price: 0 },
          { label: "I Love Biryani without adding anything", img: "./images/salna (1).png", price: 0 }
        ]
      },
      {
        img: "./images/menuitem.png",
        name: "Paneer Nawabi [500gms] + 4 Rumali Roti + [1pc] Gulab Jamun",
        price: 329,
        desc: "Paneer Nawabi [500gms] + 4 Rumali Roti + [1pc] Gulab Jamun",
        prep: "30 min preparation",
        ordered: "505 People ordered in the last week",
        serve: "Serve for 1-2",
        qtyOptions: [
          { label: "Paneer Nawabi Combo [Regular]", price: 329 }
        ],
        accompaniments: [
          { label: "Raita.", img: "./images/raita.png", price: 0 },
          { label: "Salna.", img: "./images/salna (1).png", price: 0 },
          { label: "I Love Paneer Nawabi without adding anything", img: "./images/salna (1).png", price: 0 }
        ]
      }
    ];
    const menuMain = document.querySelector('.cards-row') || document.body;
    function launchModal(foodIndex) {
      const food = foodItems[foodIndex];
      let quantity = 1;
      let selectedQtyIdx = 0;
      function updateModalAmounts() {
        const qtyDisplay = document.getElementById('modal-quantity-display');
        const addBtn = document.getElementById('modal-add-btn');
        if (qtyDisplay) qtyDisplay.textContent = quantity;
        if (addBtn) addBtn.textContent = `Add Item ₹${food.qtyOptions[selectedQtyIdx].price * quantity}`;
      }
      const qtyOptionsHTML = food.qtyOptions.map((opt, idx) => `
        <label class="food-modal-qtylist-row">
          <span>${opt.label}</span>
          <span class="food-modal-amt">₹${opt.price}</span>
          <input type="radio" name="modal-qty-radio" value="${idx}" ${idx === 0 ? "checked" : ""} />
        </label>
      `).join('');
      const accompHTML = food.accompaniments.map((acc, idx) => `
        <div class="food-modal-accomp${idx === 0 ? " selected" : ""}" data-accomp-idx="${idx}">
          <span class="food-modal-accomp-label">
            <img src="${acc.img}" alt="" class="food-modal-accomp-img" />
            ${acc.label}
          </span>
          <span class="food-modal-accomp-price">₹${acc.price}</span>
          <input type="radio" name="modal-accomp-radio" class="accomp-radio" ${idx === 0 ? "checked" : ""} value="${idx}" />
        </div>
      `).join('');
      const overlay = document.createElement('div');
      overlay.className = 'popup-overlay';
      overlay.innerHTML = `
        <div class="food-modal">
          <button class="food-modal-close" title="Close">&times;</button>
          <div class="food-modal-left">
            <img class="food-modal-img" src="${food.img}" alt="" />
            <div class="food-modal-title-row">
              <div class="food-modal-title">${food.name}</div>
              <div class="food-modal-price">₹${food.price}</div>
            </div>
            <div class="food-modal-desc">${food.desc}</div>
            <div class="food-modal-props-row">
              <span class="food-modal-prop-item">${food.prep}</span>
              <span class="food-modal-prop-item">${food.ordered}</span>
              <span class="food-modal-prop-item">${food.serve}</span>
            </div>
          </div>
          <div class="food-modal-right">
            <div class="modal-section">
              <div class="modal-section-title">Choose Quantity (select any 1)</div>
              <div class="food-modal-qtylist">${qtyOptionsHTML}</div>
            </div>
            <div class="modal-section">
              <div class="modal-section-title">Choose your free Accompaniment</div>
              <div class="food-modal-accomp-list">${accompHTML}</div>
            </div>
            <div class="food-modal-qtyaction">
              <div class="qty-btn-group">
                <button class="qty-btn" id="qty-minus">-</button>
                <span class="qty-display" id="modal-quantity-display">1</span>
                <button class="qty-btn" id="qty-plus">+</button>
              </div>
              <button class="food-modal-addbtn" id="modal-add-btn">Add Item ₹${food.price}</button>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(overlay);
      menuMain.classList.add('main-blur');
      function closeModal() {
        overlay.remove();
        menuMain.classList.remove('main-blur');
      }
      overlay.querySelector('.food-modal-close').onclick = closeModal;
      overlay.onclick = e => { if (e.target === overlay) closeModal(); };
      overlay.querySelector('#qty-plus').onclick = () => { quantity++; updateModalAmounts(); };
      overlay.querySelector('#qty-minus').onclick = () => { if (quantity > 1) { quantity--; updateModalAmounts(); } };
      overlay.querySelectorAll('input[name="modal-qty-radio"]').forEach(radio => {
        radio.onchange = (e) => { selectedQtyIdx = parseInt(e.target.value); updateModalAmounts(); };
      });
      overlay.querySelectorAll('.food-modal-accomp').forEach(div => {
        div.onclick = () => {
          overlay.querySelectorAll('.food-modal-accomp').forEach(d => d.classList.remove('selected'));
          div.classList.add('selected');
          const radioInput = div.querySelector('input[type="radio"]');
          if (radioInput) radioInput.checked = true;
        };
      });
      const finalBtn = overlay.querySelector('.food-modal-addbtn');
      if (finalBtn) {
        finalBtn.addEventListener('click', function() {
          closeModal();
          createCheckoutModal();
        });
      }
      updateModalAmounts();
    }
    const buttons = document.querySelectorAll('.food-card-btn');
    buttons.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        launchModal(idx);
      });
    });

    // --- Checkout Modal Logic ---
    function createCheckoutModal() {
      const modalOverlay = document.createElement('div');
      modalOverlay.className = 'modal-overlay';
      modalOverlay.id = 'checkout-modal';
      const modalContent = document.createElement('div');
      modalContent.className = 'modal-content';
      const menuFinalBill = document.createElement('div');
      menuFinalBill.className = 'menu_final_bill';
      const leftSection = document.createElement('div');
      leftSection.className = 'left-section';
      const rightSection = document.createElement('div');
      rightSection.className = 'right-section';
      const userSection = document.createElement('div');
      userSection.className = 'user-section';
      const userName = document.createElement('h2');
      userName.textContent = 'Sri Ram, 7408564910';
      const userSubheading = document.createElement('h3');
      userSubheading.textContent = 'Your Details';
      userSection.appendChild(userName);
      userSection.appendChild(userSubheading);
      const deliveryOptions = document.createElement('div');
      deliveryOptions.className = 'delivery-options';
      const deliveryNow = document.createElement('div');
      deliveryNow.className = 'delivery-option active';
      deliveryNow.textContent = 'Delivery Now';
      const deliveryLater = document.createElement('div');
      deliveryLater.className = 'delivery-option';
      deliveryLater.textContent = 'Delivery Later';
      deliveryOptions.appendChild(deliveryNow);
      deliveryOptions.appendChild(deliveryLater);
      const deliveryAddress = document.createElement('div');
      deliveryAddress.className = 'delivery-address';
      const addressHeading = document.createElement('h4');
      addressHeading.textContent = 'Choose a delivery address';
      deliveryAddress.appendChild(addressHeading);
      const paymentButton = document.createElement('div');
      paymentButton.className = 'payment-button';
      paymentButton.textContent = 'Make Payment';
      leftSection.appendChild(userSection);
      leftSection.appendChild(deliveryOptions);
      leftSection.appendChild(deliveryAddress);
      leftSection.appendChild(paymentButton);
      const cartHeading = document.createElement('h3');
      cartHeading.textContent = 'Your Cart';
      const cartItems = document.createElement('div');
      cartItems.className = 'cart-items';
      const item1 = document.createElement('div');
      item1.className = 'cart-item';
      const item1Name = document.createElement('div');
      item1Name.className = 'item-name';
      item1Name.textContent = 'Mutton Hyderabad! Dum Biryani [1/2 Kg] [2pcs]';
      const item1Price = document.createElement('div');
      item1Price.className = 'item-price';
      item1Price.textContent = '$499/-';
      item1.appendChild(item1Name);
      item1.appendChild(item1Price);
      const item2 = document.createElement('div');
      item2.className = 'cart-item';
      const item2Name = document.createElement('div');
      item2Name.className = 'item-name';
      item2Name.textContent = 'I Love Biryani without adding anything [Rs 0] [1]';
      item2.appendChild(item2Name);
      const item3 = document.createElement('div');
      item3.className = 'cart-item';
      const item3Name = document.createElement('div');
      item3Name.className = 'item-name';
      item3Name.textContent = 'Dal Makhani [400gms] + 4 Rumali Roti [1pc] Gulab Jamun';
      const item3Price = document.createElement('div');
      item3Price.className = 'item-price';
      item3Price.textContent ='$299';
      item3.appendChild(item3Name);
      item3.appendChild(item3Price);
      const removeAllBtn = document.createElement('button');
      removeAllBtn.className = 'remove-all-btn';
      removeAllBtn.textContent = 'Remove All Items';
      removeAllBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to cancel your biryani order?')) {
          modalOverlay.remove();
          document.body.classList.remove('blurred');
        }
      });
      const anchorBox = document.createElement('div');
      anchorBox.className = 'anchor-box';
      const anchorHeading = document.createElement('h4');
      anchorHeading.textContent = 'Add Anchor Box';
      const anchorText = document.createElement('p');
      anchorText.textContent = 'Our mill Angesthis provides extra 8-10 minutes of dum to your Biryani right before serving Free with Every Biryani Order.';
      anchorBox.appendChild(anchorHeading);
      anchorBox.appendChild(anchorText);
      const kitchenInstruction = document.createElement('div');
      kitchenInstruction.className = 'kitchen-instruction';
      const kitchenHeading = document.createElement('h4');
      kitchenHeading.textContent = 'Add Kitchen Instruction';
      const kitchenInput = document.createElement('input');
      kitchenInput.type = 'text';
      kitchenInput.placeholder = 'Write instruction here';
      kitchenInstruction.appendChild(kitchenHeading);
      kitchenInstruction.appendChild(kitchenInput);
      const offerCode = document.createElement('div');
      offerCode.className = 'offer-code';
      const offerHeading = document.createElement('h4');
      offerHeading.textContent = 'Add Offer / Refer Code';
      const offerText = document.createElement('p');
      offerText.innerHTML = '15 = 1 Points<br>BBK Loyalty (Your Points - 100)<br>Use Points (79.80) to get $79.80 discount<br><a href="#">Know more</a>';
      offerCode.appendChild(offerHeading);
      offerCode.appendChild(offerText);
      const donation = document.createElement('div');
      donation.className = 'donation';
      const donationHeading = document.createElement('h4');
      donationHeading.textContent = 'Make a Donation';
      const donationText = document.createElement('p');
      donationText.innerHTML = 'Support Pedal-On in empowering women & fostering environmental sustainability<br><a href="#">Know more</a>';
      donation.appendChild(donationHeading);
      donation.appendChild(donationText);
      const billingDetails = document.createElement('div');
      billingDetails.className = 'billing-details';
      const billingHeading = document.createElement('h4');
      billingHeading.textContent = 'Billing Details';
      const subTotal = createBillingLine('Sub Total', '$798');
      const deliveryCharges = createBillingLine('Delivery Charges', '$39');
      const packingCharge = createBillingLine('Packing charge', '$25');
      const cost = createBillingLine('COST (2.5%)', '$21.55');
      const sost = createBillingLine('SOST (2.5%)', '$21.55');
      billingDetails.appendChild(billingHeading);
      billingDetails.appendChild(subTotal);
      billingDetails.appendChild(deliveryCharges);
      billingDetails.appendChild(packingCharge);
      billingDetails.appendChild(cost);
      billingDetails.appendChild(sost);
      rightSection.appendChild(cartHeading);
      rightSection.appendChild(cartItems);
      rightSection.appendChild(item1);
      rightSection.appendChild(item2);
      rightSection.appendChild(item3);
      rightSection.appendChild(removeAllBtn);
      rightSection.appendChild(anchorBox);
      rightSection.appendChild(kitchenInstruction);
      rightSection.appendChild(offerCode);
      rightSection.appendChild(donation);
      rightSection.appendChild(billingDetails);
      menuFinalBill.appendChild(leftSection);
      menuFinalBill.appendChild(rightSection);
      const closeButton = document.createElement('button');
      closeButton.className = 'close-modal';
      closeButton.innerHTML = '&times;';
      closeButton.addEventListener('click', function() {
        modalOverlay.remove();
        document.body.classList.remove('blurred');
      });
      modalContent.appendChild(closeButton);
      modalContent.appendChild(menuFinalBill);
      modalOverlay.appendChild(modalContent);
      document.body.appendChild(modalOverlay);
      document.body.classList.add('blurred');
      paymentButton.addEventListener('click', function() {
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        const paymentModal = document.createElement('div');
        paymentModal.className = 'payment-modal';
        paymentModal.innerHTML = `

          <div class="modal-header">
          <img src="./images/upi.jpeg" class="upi_img"> UPI ID</div>
          <div class="modal-content">
              <div class="payment-section">
                  <div class="section-title">Debit cards</div>
                  <div class="payment-option">
                      <input type="radio" name="paymentMethod" id="debit1" checked>
                      <label for="debit1" class="card-details">
                          <div class="card-number">XXXX XX73 8189</div>
                      </label>
                  </div>
                  <div class="payment-option">
                      <input type="radio" name="paymentMethod" id="debit2">
                      <label for="debit2" class="card-details">
                          <div class="card-number">XXXX XX79 5743</div>
                      </label>
                  </div>
                  <div class="add-card">Add card +</div>
              </div>
              <div class="payment-section">
                  <div class="section-title">Credit cards</div>
                  <div class="add-method">Add new method +</div>
              </div>
          </div>
          <div class="total-amount">
              <span>Total Amount:</span>
              <span id="dynamicAmount">₹1200</span>
          </div>
          <div class="continue-button" id="continueButton">Continue</div>
        `;
        overlay.appendChild(paymentModal);
        document.body.appendChild(overlay);
        const continueButton = paymentModal.querySelector('#continueButton');
        continueButton.addEventListener('click', function() {
          overlay.removeChild(paymentModal);
          const thankYouModal = document.createElement('div');
          thankYouModal.className = 'thank-you-modal';
          thankYouModal.innerHTML = `
              <div class="close-icon">&times;</div>
              <div class="thank-you-content">
<img src="./images/ok.jpeg" class="success_img">

                  <h2>Thank You!</h2>
                  <p>Your order will arrive soon</p>
              </div>
          `;
          overlay.appendChild(thankYouModal);
          const closeIcon = thankYouModal.querySelector('.close-icon');
          closeIcon.addEventListener('click', function() {
            document.body.removeChild(overlay);
          });
        });
      });
      function createBillingLine(label, value) {
        const line = document.createElement('div');
        line.className = 'billing-line';
        const lineLabel = document.createElement('span');
        lineLabel.textContent = label;
        const lineValue = document.createElement('span');
        lineValue.textContent = value;
        line.appendChild(lineLabel);
        line.appendChild(lineValue);
        return line;
      }
    }
  }
});





//     function createCheckoutModal() {
//       const modalOverlay = document.createElement('div');
//       modalOverlay.className = 'modal-overlay';
//       modalOverlay.id = 'checkout-modal';

//       const modalContent = document.createElement('div');
//       modalContent.className = 'modal-content';

//       const menuFinalBill = document.createElement('div');
//       menuFinalBill.className = 'menu_final_bill';

//       const leftSection = document.createElement('div');
//       leftSection.className = 'left-section';

//       const rightSection = document.createElement('div');
//       rightSection.className = 'right-section';

//       const userSection = document.createElement('div');
//       userSection.className = 'user-section';

//       const userName = document.createElement('h2');
//       userName.textContent = 'Sri Ram, 7408564910';

//       const userSubheading = document.createElement('h3');
//       userSubheading.textContent = 'Your Details';

//       userSection.appendChild(userName);
//       userSection.appendChild(userSubheading);

//       const deliveryOptions = document.createElement('div');
//       deliveryOptions.className = 'delivery-options';

//       const deliveryNow = document.createElement('div');
//       deliveryNow.className = 'delivery-option active';
//       deliveryNow.textContent = 'Delivery Now';

//       const deliveryLater = document.createElement('div');
//       deliveryLater.className = 'delivery-option';
//       deliveryLater.textContent = 'Delivery Later';

//       deliveryOptions.appendChild(deliveryNow);
//       deliveryOptions.appendChild(deliveryLater);

//       const deliveryAddress = document.createElement('div');
//       deliveryAddress.className = 'delivery-address';

//       const addressHeading = document.createElement('h4');
//       addressHeading.textContent = 'Choose a delivery address';

//       deliveryAddress.appendChild(addressHeading);

//       const paymentButton = document.createElement('div');
//       paymentButton.className = 'payment-button';
//       paymentButton.textContent = 'Make Payment';

//       leftSection.appendChild(userSection);
//       leftSection.appendChild(deliveryOptions);
//       leftSection.appendChild(deliveryAddress);
//       leftSection.appendChild(paymentButton);

//       const cartHeading = document.createElement('h3');
//       cartHeading.textContent = 'Your Cart';

//       const cartItems = document.createElement('div');
//       cartItems.className = 'cart-items';

//       const item1 = document.createElement('div');
//       item1.className = 'cart-item';

//       const item1Name = document.createElement('div');
//       item1Name.className = 'item-name';
//       item1Name.textContent = 'Mutton Hyderabad! Dum Biryani [1/2 Kg] [2pcs]';

//       const item1Price = document.createElement('div');
//       item1Price.className = 'item-price';
//       item1Price.textContent = '$499/-';

//       item1.appendChild(item1Name);
//       item1.appendChild(item1Price);

//       const item2 = document.createElement('div');
//       item2.className = 'cart-item';

//       const item2Name = document.createElement('div');
//       item2Name.className = 'item-name';
//       item2Name.textContent = 'I Love Biryani without adding anything [Rs 0] [1]';

//       item2.appendChild(item2Name);

//       const item3 = document.createElement('div');
//       item3.className = 'cart-item';

//       const item3Name = document.createElement('div');
//       item3Name.className = 'item-name';
//       item3Name.textContent = 'Dal Makhani [400gms] + 4 Rumali Roti [1pc] Gulab Jamun';

//       const item3Price = document.createElement('div');
//       item3Price.className = 'item-price';
//       item3Price.textContent = '$299/-';

//       item3.appendChild(item3Name);
//       item3.appendChild(item3Price);

//       const removeAllBtn = document.createElement('button');
//       removeAllBtn.className = 'remove-all-btn';
//       removeAllBtn.textContent = 'Remove All Items';
//       removeAllBtn.addEventListener('click', function() {
//         if (confirm('Are you sure you want to cancel your biryani order?')) {
//           modalOverlay.remove();
//           document.body.classList.remove('blurred');
//         }
//       });

//       const anchorBox = document.createElement('div');
//       anchorBox.className = 'anchor-box';

//       const anchorHeading = document.createElement('h4');
//       anchorHeading.textContent = 'Add Anchor Box';

//       const anchorText = document.createElement('p');
//       anchorText.textContent = 'Our mill Angesthis provides extra 8-10 minutes of dum to your Biryani right before serving Free with Every Biryani Order.';

//       anchorBox.appendChild(anchorHeading);
//       anchorBox.appendChild(anchorText);

//       const kitchenInstruction = document.createElement('div');
//       kitchenInstruction.className = 'kitchen-instruction';

//       const kitchenHeading = document.createElement('h4');
//       kitchenHeading.textContent = 'Add Kitchen Instruction';

//       const kitchenInput = document.createElement('input');
//       kitchenInput.type = 'text';
//       kitchenInput.placeholder = 'Write instruction here';

//       kitchenInstruction.appendChild(kitchenHeading);
//       kitchenInstruction.appendChild(kitchenInput);

//       const offerCode = document.createElement('div');
//       offerCode.className = 'offer-code';

//       const offerHeading = document.createElement('h4');
//       offerHeading.textContent = 'Add Offer / Refer Code';

//       const offerText = document.createElement('p');
//       offerText.innerHTML = '15 = 1 Points<br>BBK Loyalty (Your Points - 100)<br>Use Points (79.80) to get $79.80 discount<br><a href="#">Know more</a>';

//       offerCode.appendChild(offerHeading);
//       offerCode.appendChild(offerText);

//       const donation = document.createElement('div');
//       donation.className = 'donation';

//       const donationHeading = document.createElement('h4');
//       donationHeading.textContent = 'Make a Donation';

//       const donationText = document.createElement('p');
//       donationText.innerHTML = 'Support Pedal-On in empowering women & fostering environmental sustainability<br><a href="#">Know more</a>';

//       donation.appendChild(donationHeading);
//       donation.appendChild(donationText);

//       const billingDetails = document.createElement('div');
//       billingDetails.className = 'billing-details';

//       const billingHeading = document.createElement('h4');
//       billingHeading.textContent = 'Billing Details';

//       const subTotal = createBillingLine('Sub Total', '$798');
//       const deliveryCharges = createBillingLine('Delivery Charges', '$39');
//       const packingCharge = createBillingLine('Packing charge', '$25');
//       const cost = createBillingLine('COST (2.5%)', '$21.55');
//       const sost = createBillingLine('SOST (2.5%)', '$21.55');

//       billingDetails.appendChild(billingHeading);
//       billingDetails.appendChild(subTotal);
//       billingDetails.appendChild(deliveryCharges);
//       billingDetails.appendChild(packingCharge);
//       billingDetails.appendChild(cost);
//       billingDetails.appendChild(sost);

//       rightSection.appendChild(cartHeading);
//       rightSection.appendChild(cartItems);
//       rightSection.appendChild(item1);
//       rightSection.appendChild(item2);
//       rightSection.appendChild(item3);
//       rightSection.appendChild(removeAllBtn);
//       rightSection.appendChild(anchorBox);
//       rightSection.appendChild(kitchenInstruction);
//       rightSection.appendChild(offerCode);
//       rightSection.appendChild(donation);
//       rightSection.appendChild(billingDetails);

//       menuFinalBill.appendChild(leftSection);
//       menuFinalBill.appendChild(rightSection);

//       const closeButton = document.createElement('button');
//       closeButton.className = 'close-modal';
//       closeButton.innerHTML = '&times;';
//       closeButton.addEventListener('click', function() {
//         modalOverlay.remove();
//         document.body.classList.remove('blurred');
//       });

//       modalContent.appendChild(closeButton);
//       modalContent.appendChild(menuFinalBill);
//       modalOverlay.appendChild(modalContent);

//       document.body.appendChild(modalOverlay);
//       document.body.classList.add('blurred');

//       function createBillingLine(label, value) {
//         const line = document.createElement('div');
//         line.className = 'billing-line';

//         const lineLabel = document.createElement('span');
//         lineLabel.textContent = label;

//         const lineValue = document.createElement('span');
//         lineValue.textContent = value;

//         line.appendChild(lineLabel);
//         line.appendChild(lineValue);

//         return line;
//       }
//     }
//   }



//  document.addEventListener('DOMContentLoaded', function() {
//             // Create payment modal
//             const paymentButton = document.querySelector('.payment-button');
            
//             paymentButton.addEventListener('click', function() {
//                 // Create overlay
//                 const overlay = document.createElement('div');
//                 overlay.className = 'modal-overlay';
                
//                 // Create payment modal
//                 const paymentModal = document.createElement('div');
//                 paymentModal.className = 'payment-modal';
                
//                 // Add content to payment modal
//                 paymentModal.innerHTML = `
//                     <div class="modal-header">Letter UP! ID</div>
//                     <div class="modal-content">
//                         <div class="payment-section">
//                             <div class="section-title">Debit cards</div>
//                             <div class="payment-option">
//                                 <input type="radio" name="paymentMethod" id="debit1" checked>
//                                 <label for="debit1" class="card-details">
//                                     <div class="card-number">XXXX XX73 8189</div>
//                                 </label>
//                             </div>
//                             <div class="payment-option">
//                                 <input type="radio" name="paymentMethod" id="debit2">
//                                 <label for="debit2" class="card-details">
//                                     <div class="card-number">XXXX XX79 5743</div>
//                                 </label>
//                             </div>
//                             <div class="add-card">Add card +</div>
//                         </div>
                        
//                         <div class="payment-section">
//                             <div class="section-title">Credit cards</div>
//                             <div class="add-method">Add new method +</div>
//                         </div>
//                     </div>
//                     <div class="total-amount">
//                         <span>Total Amount:</span>
//                         <span id="dynamicAmount">₹200</span>
//                     </div>
//                     <div class="continue-button" id="continueButton">Continue</div>
//                 `;
                
//                 // Append modal to overlay
//                 overlay.appendChild(paymentModal);
                
//                 // Add overlay to body
//                 document.body.appendChild(overlay);
                
//                 // Add event listener to continue button
//                 const continueButton = document.getElementById('continueButton');
//                 continueButton.addEventListener('click', function() {
//                     // Remove payment modal
//                     overlay.removeChild(paymentModal);
                    
//                     // Create thank you modal
//                     const thankYouModal = document.createElement('div');
//                     thankYouModal.className = 'thank-you-modal';
                    
//                     thankYouModal.innerHTML = `
//                         <div class="close-icon">&times;</div>
//                         <div class="thank-you-content">
//                             <h2>Thank You!</h2>
//                             <p>Your order will arrive soon</p>
//                         </div>
//                     `;
                    
//                     // Add thank you modal to overlay
//                     overlay.appendChild(thankYouModal);
                    
//                     // Add event listener to close icon
//                     const closeIcon = thankYouModal.querySelector('.close-icon');
//                     closeIcon.addEventListener('click', function() {
//                         document.body.removeChild(overlay);
//                     });
//                 });
//             });
//         });




// });






//search button actions
document.addEventListener('DOMContentLoaded', () => {
const search_click=document.querySelector('.m2')
search_click.addEventListener("click",search_page)
function search_page(){
    console.log("done")
    whole.innerHTML=""
    const  content=document.createElement('div')
    content.className="search_page"
    content.innerHTML=`
    <div class="search_searchbar">
    <i class="fa fa-search" style="font-size:26px"></i>
    <select >
       <option value="">Search Food</option>
        <option value="">Hyderabad biriyani</option>
        <option value="">Bombay biriyani</option>
        <option value="">Ambur biriyani</option>
        <option value="">Kashmir biriyani</option>
        <option value="">Kolkata biriyani</option>
    </select>
</div>


<div class="overall_curry">
   <div class="menu_left">
    <h1>Regular Orders</h1>
        <div class="gray_div">
             <div class="curry_child">
                 <img src="./images/curry.jpeg" alt="">
                    <h3>Curry rice</h3>
                    <div class="curry_icon"><i class='fas fa-arrow-up' style='font-size:36px'></i></div>

                    <img src="./images/curry.jpeg" alt="">
                    <h3>Curry rice</h3>
                    <div class="curry_icon"><i class='fas fa-arrow-up' style='font-size:36px'></i></div>
             </div>

               <div class="curry_child">
                 <img src="./images/curry.jpeg" alt="">
                    <h3>Curry rice</h3>
                    <div class="curry_icon"><i class='fas fa-arrow-up' style='font-size:36px'></i></div>

                    <img src="./images/curry.jpeg" alt="">
                    <h3>Curry rice</h3>
                    <div class="curry_icon"><i class='fas fa-arrow-up' style='font-size:36px'></i></div>
             </div>

              <div class="curry_child">
                 <img src="./images/curry.jpeg" alt="">
                    <h3>Curry rice</h3>
                    <div class="curry_icon"><i class='fas fa-arrow-up' style='font-size:36px'></i></div>

                    <img src="./images/curry.jpeg" alt="">
                    <h3>Curry rice</h3>
                    <div class="curry_icon"><i class='fas fa-arrow-up' style='font-size:36px'></i></div>
             </div>

              <div class="curry_child">
                 <img src="./images/curry.jpeg" alt="">
                    <h3>Curry rice</h3>
                    <div class="curry_icon"><i class='fas fa-arrow-up' style='font-size:36px'></i></div>

                    <img src="./images/curry.jpeg" alt="">
                    <h3>Curry rice</h3>
                    <div class="curry_icon"><i class='fas fa-arrow-up' style='font-size:36px'></i></div>
             </div>

             

         </div>
    </div>

   <div class="menu_middle">
         <div class="menu_dots"></div>
        <div class="menu_dots"></div>
        <div class="menu_dots"></div>
        <div class="menu_dots"></div>
        <div class="menu_dots"></div>
        <div class="menu_dots"></div>
        <div class="menu_dots"></div>
        <div class="menu_dots"></div>
        <div class="menu_dots"></div>
        <div class="menu_dots"></div>
        <div class="menu_dots"></div>
        <div class="menu_dots"></div>
   </div>

   <div class="menu_right">
    <h1>Popular Orders</h1>
    <div class="gray_div">
             <div class="curry_child">
                 <img src="./images/curry.jpeg" alt="">
                    <h3>Curry rice</h3>
                    <div class="curry_icon"><i class='fas fa-arrow-up' style='font-size:36px'></i></div>

                    <img src="./images/curry.jpeg" alt="">
                    <h3>Curry rice</h3>
                    <div class="curry_icon"><i class='fas fa-arrow-up' style='font-size:36px'></i></div>
             </div>

               <div class="curry_child">
                 <img src="./images/curry.jpeg" alt="">
                    <h3>Curry rice</h3>
                    <div class="curry_icon"><i class='fas fa-arrow-up' style='font-size:36px'></i></div>

                    <img src="./images/curry.jpeg" alt="">
                    <h3>Curry rice</h3>
                    <div class="curry_icon"><i class='fas fa-arrow-up' style='font-size:36px'></i></div>
             </div>

              <div class="curry_child">
                 <img src="./images/curry.jpeg" alt="">
                    <h3>Curry rice</h3>
                    <div class="curry_icon"><i class='fas fa-arrow-up' style='font-size:36px'></i></div>

                    <img src="./images/curry.jpeg" alt="">
                    <h3>Curry rice</h3>
                    <div class="curry_icon"><i class='fas fa-arrow-up' style='font-size:36px'></i></div>
             </div>

              <div class="curry_child">
                 <img src="./images/curry.jpeg" alt="">
                    <h3>Curry rice</h3>
                    <div class="curry_icon"><i class='fas fa-arrow-up' style='font-size:36px'></i></div>

                    <img src="./images/curry.jpeg" alt="">
                    <h3>Curry rice</h3>
                    <div class="curry_icon"><i class='fas fa-arrow-up' style='font-size:36px'></i></div>
             </div>

             

         </div>
    </div>
    
    
    
</div>
`
  
    
whole.appendChild(content)

}
});


    const outlets = document.querySelector('.m3');
    const bookTableBtn = document.querySelector('.m4');

// Wait for DOM to be fully loaded
outlets.addEventListener('click', function() {
    // Get navigation elements
    outlets.addEventListener('click', table_page);
    
    // Add event listeners to navigation
    bookTableBtn.addEventListener('click', table_page);
    
    // Initialize the page
    table_page();
});

// Function to show the table booking page
function table_page() {
    const whole = document.querySelector('.whole');
    whole.innerHTML = "";
    
   const content = document.createElement('div');
    content.className = "table_booking";
     
    content.innerHTML = `
    <div class="overall_table">
        <div class="yellow_profile">
            <i class="material-icons">person</i>
            <div class="abt_profile">
                <h1>User1</h1>
                <h4>Edit profile <i class='fas fa-pen'></i></h4>
            </div>
        </div>

        <div class="store_box">
            <div class="stor_div">
                <i class="fa fa-search" style="font-size:26px"></i>
                <h4>store location</h4>
            </div>
            <div class="div_h5">
                <h5>Bhai birinyani-outlets</h5>
            </div>
        </div>
        
        <div class="Nearby1">
            <h4 class="red_near">All store</h4>
            <h4>Nearby store</h4>
            <h4>Dine in store</h4>
        </div>
    </div>
    `;

   whole.appendChild(content)
    
    // Create main content container
    const content1 = document.createElement('div');
    content1.className = "content1";
    
    // Create restaurant container
    const restaurantContainer = document.createElement('div');
    restaurantContainer.className = 'restaurant-container';
    restaurantContainer.id = 'restaurantContainer';
    
    // Create Chennai branch section
    const chennaiSection = document.createElement('div');
    chennaiSection.className = 'branch-section';
    chennaiSection.innerHTML = '<h2 class="branch-title">Chennai Branches</h2>';
    
    const chennaiCards = document.createElement('div');
    chennaiCards.className = 'restaurant-cards';
    
    // Create Chennai branch cards
    for (let i = 0; i < 6; i++) {
        chennaiCards.appendChild(createRestaurantCard('Chennai', i + 1));
    }
    
    chennaiSection.appendChild(chennaiCards);
    
    // Create Madurai branch section
    const maduraiSection = document.createElement('div');
    maduraiSection.className = 'branch-section';
    maduraiSection.innerHTML = '<h2 class="branch-title">Madurai Branches</h2>';
    
    const maduraiCards = document.createElement('div');
    maduraiCards.className = 'restaurant-cards';
    
    // Create Madurai branch cards
    for (let i = 0; i < 6; i++) {
        maduraiCards.appendChild(createRestaurantCard('Madurai', i + 1));
    }
    
    maduraiSection.appendChild(maduraiCards);
    
    // Append sections to container
    restaurantContainer.appendChild(chennaiSection);
    restaurantContainer.appendChild(maduraiSection);
    
    // Append container to content1 div
    content1.appendChild(restaurantContainer);
    
    // Create map container
    const mapContainer = document.createElement('div');
    mapContainer.className = 'map-container';
    mapContainer.id = 'mapContainer';
    mapContainer.innerHTML = `
        <h2>Directions to <span id="branchName"></span></h2>
        <div class="map-placeholder">
            <img src="./images/map.jpeg" class="map_img">
        </div>
        <p><i class="fas fa-map-marker-alt"></i> Google Maps navigation would be displayed here</p>
        <button class="btn btn-correct-direction" id="correctDirectionBtn">
            <i class="fas fa-arrow-left"></i> Back to Restaurants
        </button>
    `;
    content1.appendChild(mapContainer);
    
    // Create booking container
    const bookingContainer = document.createElement('div');
    bookingContainer.className = 'booking-container';
    bookingContainer.id = 'bookingContainer';
    bookingContainer.innerHTML = `
       <div class="book_overall">
    <div class="available"></div>
    <h2>Available</h2>
    <div class="booked"></div>
    <h2>Booked</h2>
   </div>
  
    `;
    content1.appendChild(bookingContainer);
    
    
    // Append content1 to whole
    whole.appendChild(content1);
whole.appendChild(content8)


// // Ensure elements #whole and .table_book_num exist in your HTML
// // const whole = document.getElementById('whole');
// const tableBookingBtns = document.querySelectorAll('.btn-book');

// tableBookingBtns.forEach(btn => {
//   btn.addEventListener('click', tablebooking);
// });

// function tablebooking() {
//   // Clear the content area before rendering the booking UI
//   whole.innerHTML = '';


//       // Create booking container
//     const bookingContainer = document.createElement('div');
//     bookingContainer.className = 'booking-container';
//     bookingContainer.id = 'bookingContainer';
//     bookingContainer.innerHTML = `
//        <div class="book_overall">
//     <div class="available"></div>
//     <h2>Available</h2>
//     <div class="booked"></div>
//     <h2>Booked</h2>
//    </div>
  
//     `;
//     content1.appendChild(bookingContainer);
    
    
//     // Append content1 to whole
//     whole.appendChild(content1);



//   // Main container
//   const content2 = document.createElement('div');
//   content2.className = 'booking-content';

//   // Summary section
//   const summaryDiv = document.createElement('div');
//   summaryDiv.className = 'summary';
//   summaryDiv.id = 'summary';

//   // Map/Table selection section
//   const mapArea = document.createElement('div');
//   mapArea.className = 'map-area';

// //   // Table data
//   const tables = [
//     {name:'Table 1', type:'table', status:'available', people:2, price:200},
//     {name:'Table 2', type:'table', status:'available', people:3, price:210},
//     {name:'Table 3', type:'table', status:'booked', people:4, price:230},
//     {name:'Table 4', type:'table', status:'available', people:4, price:530},
//     {name:'Table 5', type:'table', status:'booked', people:6, price:0},
//     {name:'Table 6', type:'table', status:'available', people:7, price:230},
//     {name:'Table 7', type:'table', status:'booked', people:8, price:0},
//     {name:'Table 8', type:'table', status:'available', people:8, price:3400},
//     {name:'Round Seat 1', type:'round', status:'available', people:2, price:180},
//     {name:'Round Seat 2', type:'round', status:'available', people:4, price:540},
//     {name:'Round Seat 3', type:'round', status:'booked', people:4, price:0},
//     {name:'Round Seat 4', type:'round', status:'available', people:8, price:1320}
//   ];

// //   // Organize tables into columns
// //   const tableCols = [[], [], []];
// //   tables.forEach((table, i) => {
// //     const div = document.createElement('div');
// //     div.className = (table.type === 'table' ? 'table-div' : 'round-div') + ' ' + table.status;
// //     if(table.status === 'available') {
// //       div.dataset.index = i;
// //       div.dataset.price = table.price;
// //       div.dataset.name = table.name;
// //       div.dataset.people = table.people;
// //     }
// //     div.innerHTML = `<span class="people"><i class="material-icons" style="font-size:13px">person</i>${table.people}</span> ${table.name}`;
// //     if(i <= 3) tableCols[0].push(div);
// //     else if(i <= 7) tableCols[1].push(div);
// //     else tableCols[2].push(div);
// //   });

// //   const tablesDiv = document.createElement('div');
// //   tablesDiv.className = 'tables';
// //   for(const col of tableCols) {
// //     const colDiv = document.createElement('div');
// //     colDiv.className = 'table-col';
// //     col.forEach(tableDiv => colDiv.appendChild(tableDiv));
// //     tablesDiv.appendChild(colDiv);
// //   }
// //   mapArea.appendChild(tablesDiv);


// const tablesDiv = document.createElement('div');
// tablesDiv.className = 'tables-flex';

// // Columns container divs
// const col1 = document.createElement('div');
// col1.className = 'tables-column';
// const col2 = document.createElement('div');
// col2.className = 'tables-column';
// const col3 = document.createElement('div');
// col3.className = 'tables-column';

// // Helper to create a table UI div
// function createTableDiv(table, index) {
//   const tableDiv = document.createElement('div');
//   tableDiv.className = `table-ui ${table.status} ${table.type}`;
//   tableDiv.setAttribute('data-people', table.people);

//   // Person count above table
//   const infoDiv = document.createElement('div');
//   infoDiv.style.textAlign = 'center';
//   infoDiv.innerHTML = `<div><i class="material-icons upper_icon">person</i> ${table.people}<span class="upper_person"></span></div>`;
//   tableDiv.appendChild(infoDiv);

//   // Table shape
//   const shapeDiv = document.createElement('div');
//   shapeDiv.className = 'table-shape';
//   shapeDiv.textContent = table.name;
//   tableDiv.appendChild(shapeDiv);

//   // Chairs around the table
//   for (let c = 0; c < table.people; c++) {
//     const chair = document.createElement('div');
//     chair.className = 'chair' + (table.status === 'booked' ? ' booked' : '');
//     chair.dataset.tableIdx = index;
//     chair.dataset.chair = c;

//     if (table.status === 'available') {
//       chair.onclick = function () {
//         chair.classList.toggle('selected');
//         renderSummary();
//       };
//     }
//     tableDiv.appendChild(chair);
//   }

//   return tableDiv;
// }

// // Separate and append tables to columns
// tables.forEach((table, i) => {
//   const tableDiv = createTableDiv(table, i);

//   if (table.type === 'round') {
//     // Round tables into 3rd column
//     col3.appendChild(tableDiv);
//   } else {
//     // Square tables: first 4 in col1, next 4 in col2
//     if (i < 4) {
//       col1.appendChild(tableDiv);
//     } else {
//       col2.appendChild(tableDiv);
//     }
//   }
// });

// tablesDiv.appendChild(col1);
// tablesDiv.appendChild(col2);
// tablesDiv.appendChild(col3);
// mapArea.appendChild(tablesDiv);

// tables.forEach((table, i) => {
//   const tableDiv = document.createElement('div');
//   tableDiv.className = `table-ui ${table.status} ${table.type}`;

//   // Label and person-count above the table
//   const infoDiv = document.createElement('div');
//   infoDiv.style.textAlign = 'center';
//   infoDiv.innerHTML = `
// <div>
//  <i class="material-icons upper_icon" >person</i> ${table.people}

//   <span class="upper_person">
//  </span>
//  </div>`;
//   tableDiv.appendChild(infoDiv);
//   // Table shape
//   const shapeDiv = document.createElement('div');
//   shapeDiv.className = 'table-shape';
//   shapeDiv.textContent = table.name;
//   tableDiv.appendChild(shapeDiv);

//   // Add chairs around the table
//   for(let c=0; c < table.people; c++) {
//     const chair = document.createElement('div');
//     chair.className = 'chair' + (table.status === 'booked' ? ' booked' : '');
//     chair.dataset.tableIdx = i;
//     chair.dataset.chair = c;
//     if(table.status === 'available') {
//       chair.onclick = function(){
//         // select logic: toggle this chair only, recalc value
//         if (chair.classList.contains('selected')) {
//           chair.classList.remove('selected');
//         } else {
//           chair.classList.add('selected');
//         }
//         // count selected for this table
//         const selectedChairs = tableDiv.querySelectorAll('.chair.selected').length;
//         // Update summary value:
//         let total = 3;
//         document.querySelectorAll('.table-ui.available').forEach((ui, idx) => {
//           const count = ui.querySelectorAll('.chair.selected').length;
//           if(count) total += Math.floor(tables[idx].price / tables[idx].people) * count;
//         });
//         document.getElementById('summary').innerHTML = `<div>Selected: ${table.name} (${selectedChairs})</div><div style="font-size:1.5rem;margin-bottom:10px;">₹${total}</div>`;
//       }
//     }
//     tableDiv.appendChild(chair);
//   }
//   tablesDiv.appendChild(tableDiv);
// });

// mapArea.appendChild(tablesDiv);


// //   Confirm button
//   const confirmBtn = document.createElement('button');
//   confirmBtn.className = 'confirm-btn';
//   confirmBtn.textContent = 'Confirm';
//   mapArea.appendChild(confirmBtn);

//   // Payment modal (hidden by default)
//   const paymentPage = document.createElement('div');
//   paymentPage.className = 'payment-page';
//   paymentPage.id = 'paymentPage';
//   paymentPage.style.display = 'none'; // Start hidden

//   paymentPage.innerHTML = `
//     <h2>Choose Payment Method</h2>
//     <div class="payment-methods">
//       <button onclick="alert('UPI Payment Selected')">UPI</button>
//       <button onclick="alert('Cash on Delivery Selected')">Cash on Delivery</button>
//       <button onclick="alert('Card Payment Selected')">Card</button>
//     </div>
//   `;

//   // Compose the main content area
//   content2.appendChild(summaryDiv);
//   content2.appendChild(mapArea);
//   content2.appendChild(paymentPage);
//   whole.appendChild(content2);
// whole.appendChild(content8)


//   // Interactivity: Table selection & summary
// //   let selectedTables = [];
// //   function renderSummary() {
// //     if (selectedTables.length === 0) {
// //       summaryDiv.innerHTML = '';
// //       return;
// //     }
// //     let total = selectedTables.reduce((sum, i) => sum + tables[i].price, 0);
// //     summaryDiv.innerHTML = `
// //       <div style="font-size:13px;font-weight:600;letter-spacing:0.3px;margin-bottom:2px;">
// //         ${selectedTables.map(i => tables[i].name).join(', ')}
// //       </div>
// //       <div style="margin-bottom:3px;">User Name</div>
// //       <div style="font-size:1.5rem;margin-bottom:10px;">₹${total}</div>
// //       <div class="brand-logo">  <img src="./images/title.png" alt="">
// //   <h1>Bhai Biriyani</h1>
// //       </div>
// //       <button class="make-payment-btn" id="payBtn">Make a Payment</button>
// //     `;
// //     // Show payment modal
// //     document.getElementById('payBtn').onclick = () => {
// //       paymentPage.style.display = 'block';
// //     };
// //   }



// function renderSummary() {
//   if (selectedTables.length === 0) {
//     summaryDiv.innerHTML = '';
//     return;
//   }
//   let total = selectedTables.reduce((sum, i) => sum + tables[i].price, 0);

//   // Show table name, amount, logo, h1, and Confirm button
//   summaryDiv.innerHTML = `
//     <div style="font-size:13px;font-weight:600;letter-spacing:0.3px;margin-bottom:2px;">
//       ${selectedTables.map(i => tables[i].name).join(', ')}
//       <span style="margin-left:8px;color:#888;">₹${total}</span>
//     </div>
//     <div style="margin-bottom:3px;">User Name</div>
//     <div class="brand-logo" style="margin-bottom:10px;">
//       <img src="./images/title.png" alt="">
//       <h1 >Bhai Biriyani</h1>
//     </div>
//     <button class="confirm-btn" id="summaryConfirmBtn" style="margin-top:10px;">Confirm</button>
//   `;

//   // Confirm button click → show payment options & payment button
//   document.getElementById('summaryConfirmBtn').onclick = () => {
//     summaryDiv.innerHTML = `
//       <h2>Choose Payment Method</h2>
//       <div class="payment-methods" style="margin-bottom:14px;">
//         <button type="button" class="payment-type-btn" id="payUpi">UPI</button>
//         <button type="button" class="payment-type-btn" id="payCod">Cash on Delivery</button>
//         <button type="button" class="payment-type-btn" id="payCard">Card</button>
//       </div>
//       <button class="make-payment-btn" id="finalPayBtn" style="margin-top:16px;">Payment</button>
//     `;

//     // Payment button click → show success message
//     document.getElementById('finalPayBtn').onclick = () => {
//       summaryDiv.innerHTML = `
//         <div style="text-align:center;">
//           <h2 style="margin-top:20px;">Payment Successful!</h2>
//           <p>Your table has been booked.<br>Thank you for choosing <b>Bhai Biriyani</b>.</p>
//         </div>
//       `;
//     };
//   };
// }




// // Track selected chairs per table index
// let selectedChairsMap = {};

// // Hook up chair selection to summary rendering
// tablesDiv.querySelectorAll('.chair:not(.booked)').forEach(chair => {
//   chair.onclick = function() {
//     const tableIdx = chair.dataset.tableIdx;
//     const chairIdx = chair.dataset.chair;

//     // Toggle selection
//     chair.classList.toggle('selected');
//     if (!selectedChairsMap[tableIdx]) selectedChairsMap[tableIdx] = {};
//     if (chair.classList.contains('selected')) {
//       selectedChairsMap[tableIdx][chairIdx] = true;
//     } else {
//       delete selectedChairsMap[tableIdx][chairIdx];
//       // Remove table key if no chairs selected
//       if (Object.keys(selectedChairsMap[tableIdx]).length === 0) {
//         delete selectedChairsMap[tableIdx];
//       }
//     }
//     renderSummary();
//   };
// });
// Assuming 'whole', 'content1', and 'content8' are defined globally or outside this snippet
const tableBookingBtns = document.querySelectorAll('.btn-book');

tableBookingBtns.forEach(btn => {
  btn.addEventListener('click', tablebooking);
});

function tablebooking() {
  // Clear the content area before rendering the booking UI
  whole.innerHTML = '';

  // Create booking container with legend
  const bookingContainer = document.createElement('div');
  bookingContainer.className = 'booking-container';
  bookingContainer.id = 'bookingContainer';
  bookingContainer.innerHTML = `
    <div class="book_overall">
      <div class=" available_color"></div>
      <h2>Available</h2>
      <div class=" booked_color"></div>
      <h2>Booked</h2>
    </div>
  `;
  content1.appendChild(bookingContainer);
  whole.appendChild(content1);
bookingContainer.innerHTML =""

  // Main container for summary and map area
  const content2 = document.createElement('div');
  content2.className = 'booking-content';

  // Summary section
  const summaryDiv = document.createElement('div');
  summaryDiv.className = 'summary';
  summaryDiv.id = 'summary';

  // Map/Table selection section
  const mapArea = document.createElement('div');
  mapArea.className = 'map-area';

  // Table data
  const tables = [
    {name:'Table 1', type:'table', status:'available', people:2, price:200},
    {name:'Table 2', type:'table', status:'available', people:3, price:210},
    {name:'Table 3', type:'table', status:'booked', people:4, price:230},
    {name:'Table 4', type:'table', status:'available', people:4, price:530},
    {name:'Table 5', type:'table', status:'booked', people:4, price:0},
    {name:'Table 6', type:'table', status:'available', people:7, price:230},
    {name:'Table 7', type:'table', status:'booked', people:8, price:0},
    {name:'Table 8', type:'table', status:'available', people:8, price:3400},
    {name:'Round Seat 1', type:'round', status:'available', people:2, price:180},
    {name:'Round Seat 2', type:'round', status:'available', people:4, price:540},
    {name:'Round Seat 3', type:'round', status:'booked', people:4, price:0},
    {name:'Round Seat 4', type:'round', status:'available', people:8, price:1320}
  ];

  // -- START: Inserted tables layout code --

  const tablesDiv = document.createElement('div');
  tablesDiv.className = 'tables-flex-parent';

  // Columns container divs
  const col1 = document.createElement('div');
  col1.className = 'tables-column';
  const col2 = document.createElement('div');
  col2.className = 'tables-column';
  const col3 = document.createElement('div');
  col3.className = 'tables-column';

  // Helper to create a single table UI div
  function createTableDiv(table, index) {
    const tableDiv = document.createElement('div');
    tableDiv.className = `table-ui ${table.status} ${table.type}`;
    tableDiv.setAttribute('data-people', table.people);

    // Person count above table
    const infoDiv = document.createElement('div');
    infoDiv.style.textAlign = 'center';
    infoDiv.innerHTML = `<div><i class="material-icons upper_icon">person</i> ${table.people}<span class="upper_person"></span></div>`;
    tableDiv.appendChild(infoDiv);

    // Table shape
    const shapeDiv = document.createElement('div');
    shapeDiv.className = 'table-shape';
    shapeDiv.textContent = table.name;
    tableDiv.appendChild(shapeDiv);

    // Chairs around the table
    for (let c = 0; c < table.people; c++) {
      const chair = document.createElement('div');
      chair.className = 'chair' + (table.status === 'booked' ? ' booked' : '');
      chair.dataset.tableIdx = index;
      chair.dataset.chair = c;

      if (table.status === 'available') {
        chair.onclick = function () {
          chair.classList.toggle('selected');
          renderSummary();
        };
      }
      tableDiv.appendChild(chair);
    }

    return tableDiv;
  }

  // Separate tables by type and split square tables into two columns
  tables.forEach((table, i) => {
    const tableDiv = createTableDiv(table, i);

    if (table.type === 'round') {
      col3.appendChild(tableDiv);
    } else {
      if (i < 4) {
        col1.appendChild(tableDiv);
      } else {
        col2.appendChild(tableDiv);
      }
    }
  });

  tablesDiv.appendChild(col1);
  tablesDiv.appendChild(col2);
  tablesDiv.appendChild(col3);
  mapArea.appendChild(tablesDiv);

  // Hook up chair selection events (already inside createTableDiv, but also double bind safe)
  tablesDiv.querySelectorAll('.chair:not(.booked)').forEach(chair => {
    chair.addEventListener('click', () => {
      chair.classList.toggle('selected');
      renderSummary();
    });
  });

  // -- END: Inserted tables layout code --

  // Payment modal (hidden by default)
  const paymentPage = document.createElement('div');
  paymentPage.className = 'payment-page';
  paymentPage.id = 'paymentPage';
  paymentPage.style.display = 'none'; // Start hidden
  paymentPage.innerHTML = `
    <h2>Choose Payment Method</h2>
    <div class="payment-methods">
      <button onclick="alert('UPI Payment Selected')">UPI</button>
      <button onclick="alert('Cash on Delivery Selected')">Cash on Delivery</button>
      <button onclick="alert('Card Payment Selected')">Card</button>
    </div>
  `;

  // Append main content areas
  content2.appendChild(summaryDiv);
  content2.appendChild(mapArea);
  content2.appendChild(paymentPage);
  whole.appendChild(content2);
  whole.appendChild(content8);

  // Track selected chairs per table index
  let selectedChairsMap = {};

  // Revised renderSummary function
  function renderSummary() {
    const selectedTableIndices = Object.keys(selectedChairsMap);
    if (selectedTableIndices.length === 0) {
      summaryDiv.innerHTML = '';
      return;
    }
    let selectedInfo = [];
    let total = 0;

    selectedTableIndices.forEach(idx => {
      const table = tables[Number(idx)];
      const chairs = Object.keys(selectedChairsMap[idx]).length;
      const pricePerChair = Math.floor(table.price / table.people);
      total += pricePerChair * chairs;
      selectedInfo.push(`${table.name} (${chairs})`);
    });

// var user_names=
//     `${nameInput.value}`

    summaryDiv.innerHTML = `
      <div style="font-size:30px;font-weight:600;letter-spacing:0.3px;margin-bottom:2px;">
        ${selectedInfo.join(', ')}<span style="margin-left:8px;margin-top:40px;color:#888;">₹${total}</span>
      </div>
      <div style="margin-bottom:3px;font-size:20px;">user_name</div>
      <div class="brand-logo" style="margin-bottom:10px;">
        <img src="./images/title.png" alt="">
        <h1>Bhai Biriyani</h1>
      </div>
      <button class="confirm-btn" id="summaryConfirmBtn" style="margin-top:10px;margin:auto;">Confirm</button>
    `;
    bookingContainer.innerHTML =""
    document.getElementById('summaryConfirmBtn').onclick = () => {
      content2.innerHTML = `
        <div id="paymentModal" class="payment-container">
  <span class="close-btn" id="closePayment">&times;</span>
  <div class="upi-section">
    <img src="./images/upi.jpeg" alt="UPI" class="upi-logo">
    <input type="text" class="upi-input" placeholder="Enter UPI ID">
  </div>

  <div class="select-section">
    <select class="payment-select" id="debitSelect">
      <option>Debit cards</option>
    </select>
    <div class="card-section">
      <label>Credit cards</label>
      <div class="card-list">
        <div class="card-item">
          <img src="./images/mastercard.jpeg" class="card-icon">
          <span>XXXX XX73 8189</span>
          <input type="radio" name="card" checked>
        </div>
        <div class="card-item">
          <img src="./images/mastercard.jpeg" class="card-icon">
          <span>XXXX XX79 5743</span>
          <input type="radio" name="card">
        </div>
        <div class="add-card">Add card +</div>
      </div>
    </div>
    <div class="add-method">Add new method +</div>
  </div>
  
  <div class="amount-section">
    <span>Total Amount:</span> <span id="totalValue">₹${total}</span>
  </div>

  <button id="continueBtn" class="continue-btn">Continue</button>
</div>

<!-- Thank you message (initially hidden) -->
<div id="thankYouPage" class="thankyou-container" style="display:none">
  <img src="./images/ok.jpeg" class="thankyou-img">
  <h2>Payment Successful!</h2>
  <p>Your table has been booked.<br>Thank you for choosing <b>Bhai Biriyani</b>.</p>
<button class="continue-btn back">Back</button>

  </div>
`;
document.getElementById('continueBtn').onclick = function() {
  document.getElementById('paymentModal').style.display='none';
  document.getElementById('thankYouPage').style.display='block';
};
document.querySelector('.back').onclick = function() {
  table_page();
};
document.getElementById('closePayment').onclick = function() {
  window.history.back();
};
    bookingContainer.innerHTML =""

      document.getElementById('finalPayBtn').onclick = () => {
        content2.innerHTML = `
          <div style="text-align:center;">
            <h2 style="margin-top:20px;">Payment Successful!</h2>
            <p>Your table has been booked.<br>Thank you for choosing <b>Bhai Biriyani</b>.</p>
          </div>
        `;
      };
    };
  }

  // Hook chair clicks to maintain selection state and render summary
  tablesDiv.querySelectorAll('.chair:not(.booked)').forEach(chair => {
    chair.onclick = function() {
      const tableIdx = chair.dataset.tableIdx;
      const chairIdx = chair.dataset.chair;

      chair.classList.toggle('selected');
      if (!selectedChairsMap[tableIdx]) selectedChairsMap[tableIdx] = {};
      if (chair.classList.contains('selected')) {
        selectedChairsMap[tableIdx][chairIdx] = true;
      } else {
        delete selectedChairsMap[tableIdx][chairIdx];
        if (Object.keys(selectedChairsMap[tableIdx]).length === 0) {
          delete selectedChairsMap[tableIdx];
        }
      }
      renderSummary();
    };
  });

  // Optionally initialize summary empty
  summaryDiv.innerHTML = '';
}


// Revised renderSummary function
function renderSummary() {
  // Calculate which tables are selected and how many chairs
  const selectedTableIndices = Object.keys(selectedChairsMap);
  if (selectedTableIndices.length === 0) {
    summaryDiv.innerHTML = '';
    return;
  }
  let selectedInfo = [];
  let total = 0;

  selectedTableIndices.forEach(idx => {
    const table = tables[Number(idx)];
    const chairs = Object.keys(selectedChairsMap[idx]).length;
    const pricePerChair = Math.floor(table.price / table.people);
    total += pricePerChair * chairs;
    selectedInfo.push(`${table.name} (${chairs})`);
  });

  summaryDiv.innerHTML = `
    <div style="font-size:13px;font-weight:600;letter-spacing:0.3px;margin-bottom:2px;">
      ${selectedInfo.join(', ')}
      <span style="margin-left:8px;margin-top:40px;color:#888;">₹${total}</span>
    </div>
    <div style="margin-bottom:3px;">User Name</div>
    <div class="brand-logo" style="margin-bottom:10px;">
      <img src="./images/title.png" alt="">
      <h1 >Bhai Biriyani</h1>
    </div>
    <button class="confirm-btn" id="summaryConfirmBtn" style="margin-top:10px;margin:auto;">Confirm</button>
  `;

  document.getElementById('summaryConfirmBtn').onclick = () => {
    content1.innerHTML = `
      <h2>Choose Payment Method</h2>
      <div class="payment-methods" style="margin-bottom:14px;">
        <button type="button" class="payment-type-btn" id="payUpi">UPI</button>
        <button type="button" class="payment-type-btn" id="payCod">Cash on Delivery</button>
        <button type="button" class="payment-type-btn" id="payCard">Card</button>
      </div>
      <button class="make-payment-btn" id="finalPayBtn" style="margin-top:16px;">Payment</button>
    `;
    document.getElementById('finalPayBtn').onclick = () => {
      content1.innerHTML = `
        <div style="text-align:center;">
          <h2 style="margin-top:20px;">Payment Successful!</h2>
          <p>Your table has been booked.<br>Thank you for choosing <b>Bhai Biriyani</b>.</p>
        </div>
      `;
    };
  };
}
// paymentButton.addEventListener('click',renderSummary)

// (Optional) Initially hide summary
summaryDiv.innerHTML = '';






  // Table selection event
//   content2.querySelectorAll('.table-div.available, .round-div.available').forEach(el => {
//     el.addEventListener('click', () => {
//       const index = Number(el.dataset.index);
//       if(selectedTables.includes(index)) {
//         selectedTables = selectedTables.filter(i => i !== index);
//         el.classList.remove('selected');
//       } else {
//         selectedTables.push(index);
//         el.classList.add('selected');
//       }
//       renderSummary();
//     });
//   });







// Initial table UI render
renderTables();


  // Confirm button shows summary (if desired)
  confirmBtn.onclick = () => {
    renderSummary();
  };

  // Dismiss payment modal if clicked outside the modal content
  paymentPage.onclick = e => {
    if(e.target === paymentPage) paymentPage.style.display = 'none';
  };
}

    
    // Set minimum date to today for the date input
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').setAttribute('min', today);
    
    // Add event listeners to navigation items
    document.querySelector('.m3').addEventListener('click', table_page);
    document.querySelector('.m4').addEventListener('click', table_page);
    

    // back-to-restaurant.js

// Variables to store references and state
let lastClickedSection = null;

// Call this on page load or appropriate initialization
function initBackNavigation() {
  // Listen to your navigation/menu clicks and track the last clicked section
  document.querySelectorAll('.m3, .m4').forEach(el => {
    el.addEventListener('click', () => {
      lastClickedSection = el.className || el.id || 'unknown-section';
    });
  });

  // Handle back button to restaurant view
  const backButtons = document.querySelectorAll('#correctDirectionBtn, #backFromBookingBtn');
  backButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      goBackTo(lastClickedSection);
    });
  });
}

// Function to go back to last clicked section/page
function goBackTo(section) {
  // Hide map container and booking container
  document.getElementById('mapContainer').classList.remove('active');
  document.getElementById('bookingContainer').classList.remove('active');

  // Show restaurant container or specific section
  document.getElementById('restaurantContainer').style.display = 'flex';

  // Optionally, you can scroll or highlight the section or do more based on `section`
  // For now, it just shows the restaurant container as main
}

// Initialize back navigation logic
document.addEventListener('DOMContentLoaded', () => {
  initBackNavigation();
});



    // Add event listeners to buttons
    // document.getElementById('correctDirectionBtn').addEventListener('click', goBack);
    // document.getElementById('backFromBookingBtn').addEventListener('click', goBack);
    // document.getElementById('bookingForm').addEventListener('submit', function(e) {
    //     e.preventDefault();
    //     alert('Your table has been booked successfully! We look forward to serving you.');
    //     goBack();
    // });



// }



// Function to create restaurant card
function createRestaurantCard(branch, index) {
    const card = document.createElement('div');
    card.className = 'restaurant-card';
    card.innerHTML = `
        <div class="card">
            <div class="card-header">
                <img src="./images/title.png" class="order_img">
            </div>
            <div class="card-body">
                <h2>Bhai Biryani - ${branch} Branch ${index}</h2>
                <p class="timing"><i class="fas fa-clock"></i> 10:00 AM to 10:00 PM</p>
                <div class="buttons">
                    <button class="btn btn-book " data-branch="${branch} Branch ${index}">
                        <i class="fas fa-utensils"></i> Book A Table
                    </button>
                    <button class="btn btn-direction" data-branch="${branch} Branch ${index}">
                        <i class="fas fa-map-marked-alt"></i> Get Direction
                    </button>
                </div>
            </div>
        </div>
    `;
 

    
    // Add event listeners to buttons
    card.querySelector('.btn-book').addEventListener('click', function() {
        bookTable(this.getAttribute('data-branch'));
    });
    
    card.querySelector('.btn-direction').addEventListener('click', function() {
        getDirection(this.getAttribute('data-branch'));
    });
    
    return card;
}

// Show direction function
function getDirection(branch) {
    document.getElementById('restaurantContainer').style.display = 'none';
    document.getElementById('mapContainer').classList.add('active');
    document.getElementById('bookingContainer').classList.remove('active');
    document.getElementById('branchName').textContent = branch;
}

// Book table function
function bookTable(branch) {
    document.getElementById('restaurantContainer').style.display = 'none';
    document.getElementById('bookingContainer').classList.add('active');
    // document.getElementById('bookingContainer').classList.add('active');
    const table_booking_num=document.querySelector('#bookingContainer')
  table_booking_num.addEventListener('click',tablebooking)
    document.getElementById('mapContainer').classList.remove('active');
    document.getElementById('bookBranchName').textContent = branch;
    
    // Set default date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    document.getElementById('date').valueAsDate = tomorrow;
}

// Go back to main view
function goBack() {
    document.getElementById('mapContainer').classList.remove('active');
    document.getElementById('bookingContainer').classList.remove('active');
    document.getElementById('restaurantContainer').style.display = 'flex';
}
// Go back to main view
// function goBack() {
//     document.getElementById('mapContainer').classList.remove('active');
//     document.getElementById('bookingContainer').classList.remove('active');
//     document.getElementById('restaurantContainer').style.display = 'flex';
// }

// Go back to restaurant card view from directions
function goBack() {
    // Hide the map container and booking container
    document.getElementById('mapContainer').classList.remove('active');
    document.getElementById('bookingContainer').classList.remove('active');

    // Show the restaurant cards container
    document.getElementById('restaurantContainer').style.display = 'block'; // or 'flex' if CSS uses flexbox

    // Optionally, you may want to scroll to restaurantContainer if needed:
    // document.getElementById('restaurantContainer').scrollIntoView();
}
document.getElementById('correctDirectionBtn').addEventListener('click', goBack);


const outlets1 = document.querySelector('.m3');
const bookTableBtn1 = document.querySelector('.m4');

// Wait for DOM to be fully loaded
outlets.addEventListener('click', function() {
    outlets1.addEventListener('click', table_page);
    bookTableBtn1.addEventListener('click', table_page);
    table_page();
});
// const btn_click=document.querySelector('.btn-correct-direction')
//      btn_click.onclick = () => {
//     table_page();
//   };



// This event delegation works for both close modal 'X' and back-to-restaurants buttons,
// and will function no matter when the actual buttons are inserted in the DOM
document.addEventListener('click', function(event) {
    if (event.target && event.target.id === 'closePayment') {
        // Close payment modal
        // Show main content or just call table_page to always reload/restaurants
        table_page();
    }
    if (event.target && event.target.id === 'correctDirectionBtn') {
        // Go back to main restaurant list/cards
        goBack();
    }
});

// Optionally, for initial load
document.addEventListener('DOMContentLoaded', () => {
    table_page();
});





// const outlets = document.querySelector('.m3');
// const bookTableBtn = document.querySelector('.m4');

// // Wait for DOM to be fully loaded
// outlets.addEventListener('click', function() {
//     // Get navigation elements
//     outlets.addEventListener('click', table_page);
    
//     // Add event listeners to navigation
//     bookTableBtn.addEventListener('click', table_page);
    
//     // Initialize the page
//     table_page();
// });

// // Function to show the table booking page
// function table_page() {
//     const whole = document.querySelector('.whole');
//     whole.innerHTML = "";
    
//     const content = document.createElement('div');
//     content.className = "table_booking";
    
//     content.innerHTML = `
//     <div class="overall_table">
//         <div class="yellow_profile">
//             <i class="material-icons">person</i>
//             <div class="abt_profile">
//                 <h1>User1</h1>
//                 <h4>Edit profile <i class='fas fa-pen'></i></h4>
//             </div>
//         </div>

//         <div class="store_box">
//             <div class="stor_div">
//                 <i class="fa fa-search" style="font-size:26px"></i>
//                 <h4>store location</h4>
//             </div>
//             <div class="div_h5">
//                 <h5>Bhai birinyani-outlets</h5>
//             </div>
//         </div>
        
//         <div class="Nearby1">
//             <h4 class="red_near">All store</h4>
//             <h4>Nearby store</h4>
//             <h4>Dine in store</h4>
//         </div>
//     </div>
//     `;

//     whole.appendChild(content)
    
//     // Create main content container
//     const content1 = document.createElement('div');
//     content1.className = "content1";
    
//     // Create restaurant container
//     const restaurantContainer = document.createElement('div');
//     restaurantContainer.className = 'restaurant-container';
//     restaurantContainer.id = 'restaurantContainer';
    
//     // Create Chennai branch section
//     const chennaiSection = document.createElement('div');
//     chennaiSection.className = 'branch-section';
//     chennaiSection.innerHTML = '<h2 class="branch-title">Chennai Branches</h2>';
    
//     const chennaiCards = document.createElement('div');
//     chennaiCards.className = 'restaurant-cards';
    
//     // Create Chennai branch cards
//     for (let i = 0; i < 6; i++) {
//         chennaiCards.appendChild(createRestaurantCard('Chennai', i + 1));
//     }
    
//     chennaiSection.appendChild(chennaiCards);
    
//     // Create Madurai branch section
//     const maduraiSection = document.createElement('div');
//     maduraiSection.className = 'branch-section';
//     maduraiSection.innerHTML = '<h2 class="branch-title">Madurai Branches</h2>';
    
//     const maduraiCards = document.createElement('div');
//     maduraiCards.className = 'restaurant-cards';
    
//     // Create Madurai branch cards
//     for (let i = 0; i < 6; i++) {
//         maduraiCards.appendChild(createRestaurantCard('Madurai', i + 1));
//     }
    
//     maduraiSection.appendChild(maduraiCards);
    
//     // Append sections to container
//     restaurantContainer.appendChild(chennaiSection);
//     restaurantContainer.appendChild(maduraiSection);
    
//     // Append container to content1 div
//     content1.appendChild(restaurantContainer);
    
//     // Create map container
//     const mapContainer = document.createElement('div');
//     mapContainer.className = 'map-container';
//     mapContainer.id = 'mapContainer';
//     mapContainer.innerHTML = `
//         <h2>Directions to <span id="branchName"></span></h2>
//         <div class="map-placeholder">
//             <img src="./images/map.jpeg" class="map_img">
//         </div>
//         <p><i class="fas fa-map-marker-alt"></i> Google Maps navigation would be displayed here</p>
//         <button class="btn btn-correct-direction" id="correctDirectionBtn">
//             <i class="fas fa-arrow-left"></i> Back to Restaurants
//         </button>
//     `;
//     content1.appendChild(mapContainer);
    
//     // Create booking container
//     const bookingContainer = document.createElement('div');
//     bookingContainer.className = 'booking-container';
//     bookingContainer.id = 'bookingContainer';
//     bookingContainer.innerHTML = `
//        <div class="book_overall">
//         <div class="available"></div>
//         <h2>Available</h2>
//         <div class="booked"></div>
//         <h2>Booked</h2>
//        </div>
//     `;
//     content1.appendChild(bookingContainer);

//     // Your inserted booking UI and logic start here
//     const content2 = document.createElement('div');
//     content2.className = 'table_show';

//     const bookingContainer2 = document.createElement('div');
//     bookingContainer2.className = 'booking-container';
//     bookingContainer2.id = 'bookingContainer2';

//     const bookOverall = document.createElement('div');
//     bookOverall.className = 'book_overall';
//     bookOverall.innerHTML = `
//       <div class="available"></div>
//       <h2>Available</h2>
//       <div class="booked"></div>
//       <h2>Booked</h2>
//     `;
//     bookingContainer2.appendChild(bookOverall);

//     const summaryDiv = document.createElement('div');
//     summaryDiv.className = 'summary';
//     summaryDiv.id = 'summary';

//     const mapArea = document.createElement('div');
//     mapArea.className = 'map-area';

//     const tables = [
//       {name:'Table 1', type:'table', status:'available', people:2, price:200},
//       {name:'Table 2', type:'table', status:'available', people:3, price:210},
//       {name:'Table 3', type:'table', status:'available', people:4, price:230},
//       {name:'Table 4', type:'table', status:'available', people:4, price:230},
//       {name:'Table 5', type:'table', status:'booked', people:6, price:0},
//       {name:'Table 6', type:'table', status:'booked', people:7, price:0},
//       {name:'Table 7', type:'table', status:'booked', people:8, price:0},
//       {name:'Table 8', type:'table', status:'booked', people:8, price:0},
//       {name:'Round Seat 1', type:'round', status:'available', people:2, price:180},
//       {name:'Round Seat 2', type:'round', status:'booked', people:4, price:0},
//       {name:'Round Seat 3', type:'round', status:'booked', people:4, price:0},
//       {name:'Round Seat 4', type:'round', status:'available', people:8, price:320}
//     ];

//     const tableCols = [[],[],[]];
//     tables.forEach((table, i) => {
//       const div = document.createElement('div');
//       div.className = (table.type === 'table' ? 'table-div' : 'round-div') + ' ' + table.status;
//       if(table.status === 'available') {
//         div.dataset.index = i;
//         div.dataset.price = table.price;
//         div.dataset.name = table.name;
//         div.dataset.people = table.people;
//       }
//       div.innerHTML = `<span class="people">${table.people}</span>${table.name}`;
//       if(i <= 3) tableCols[0].push(div);
//       else if(i <= 7) tableCols[1].push(div);
//       else tableCols[2].push(div);
//     });

//     const tablesDiv = document.createElement('div');
//     tablesDiv.className = 'tables';
//     for(const col of tableCols) {
//       const colDiv = document.createElement('div');
//       colDiv.className = 'table-col';
//       col.forEach(tableDiv => colDiv.appendChild(tableDiv));
//       tablesDiv.appendChild(colDiv);
//     }
//     mapArea.appendChild(tablesDiv);

//     const confirmBtn = document.createElement('button');
//     confirmBtn.className = 'confirm-btn';
//     confirmBtn.textContent = 'Confirm';
//     mapArea.appendChild(confirmBtn);

//     const paymentPage = document.createElement('div');
//     paymentPage.className = 'payment-page';
//     paymentPage.id = 'paymentPage';
//     paymentPage.innerHTML = `
//       <h2>Choose Payment Method</h2>
//       <div class="payment-methods">
//         <button onclick="alert('UPI Payment Selected')">UPI</button>
//         <button onclick="alert('Cash on Delivery Selected')">Cash on Delivery</button>
//         <button onclick="alert('Card Payment Selected')">Card</button>
//       </div>
//     `;

//     content2.appendChild(bookingContainer2);
//     content2.appendChild(summaryDiv);
//     content2.appendChild(mapArea);
//     content2.appendChild(paymentPage);

//     whole.appendChild(content2);

//     let selectedTables = [];

//     function renderSummary() {
//       if (selectedTables.length === 0) {
//         summaryDiv.innerHTML = '';
//         return;
//       }
//       let total = selectedTables.reduce((sum, i) => sum + tables[i].price, 0);
//       summaryDiv.innerHTML = `
//         <div style="font-size:13px;font-weight:600;letter-spacing:0.3px;margin-bottom:2px;">
//           TABLE 1<br>ID 2002278, 2002279
//         </div>
//         <div style="margin-bottom:3px;">User Name</div>
//         <div style="font-size:1.5rem;margin-bottom:10px;">₹${total}</div>
//         <div class="brand-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Biryani_icon_with_gold.png" /></div>
//         <button class="make-payment-btn" id="payBtn">Make a Payment</button>
//       `;
//       document.getElementById('payBtn').onclick = () => {
//         paymentPage.style.display = 'block';
//       };
//     }

//     document.querySelectorAll('.table-div.available, .round-div.available').forEach(el => {
//       el.addEventListener('click', () => {
//         const index = Number(el.dataset.index);
//         if(selectedTables.includes(index)) {
//           selectedTables = selectedTables.filter(i => i !== index);
//           el.classList.remove('selected');
//         } else {
//           selectedTables.push(index);
//           el.classList.add('selected');
//         }
//         renderSummary();
//       });
//     });

//     confirmBtn.onclick = () => {
//       renderSummary();
//     };

//     paymentPage.onclick = e => {
//       if(e.target === paymentPage) paymentPage.style.display = 'none';
//     };
    
//     // Set minimum date to today for the date input if it exists in booking form
//     const dateInput = document.getElementById('date');
//     if(dateInput) {
//       const today = new Date().toISOString().split('T')[0];
//       dateInput.setAttribute('min', today);
//     }

//     // Add event listeners for navigation (reapplied)
//     document.querySelector('.m3').addEventListener('click', table_page);
//     document.querySelector('.m4').addEventListener('click', table_page);
    
//     // Add event listeners to buttons if present for navigation and booking
//     const correctDirectionBtn = document.getElementById('correctDirectionBtn');
//     if(correctDirectionBtn) {
//         correctDirectionBtn.addEventListener('click', goBack);
//     }
//     const backFromBookingBtn = document.getElementById('backFromBookingBtn');
//     if(backFromBookingBtn) {
//         backFromBookingBtn.addEventListener('click', goBack);
//     }
//     const bookingForm = document.getElementById('bookingForm');
//     if(bookingForm) {
//         bookingForm.addEventListener('submit', function(e) {
//             e.preventDefault();
//             alert('Your table has been booked successfully! We look forward to serving you.');
//             goBack();
//         });
//     }
// }

// // Function to create restaurant card
// function createRestaurantCard(branch, index) {
//     const card = document.createElement('div');
//     card.className = 'restaurant-card';
//     card.innerHTML = `
//         <div class="card">
//             <div class="card-header">
//                 <img src="./images/title.png" class="order_img">
//             </div>
//             <div class="card-body">
//                 <h2>Bhai Biryani - ${branch} Branch ${index}</h2>
//                 <p class="timing"><i class="fas fa-clock"></i> 10:00 AM to 10:00 PM</p>
//                 <div class="buttons">
//                     <button class="btn btn-book" data-branch="${branch} Branch ${index}">
//                         <i class="fas fa-utensils"></i> Book A Table
//                     </button>
//                     <button class="btn btn-direction" data-branch="${branch} Branch ${index}">
//                         <i class="fas fa-map-marked-alt"></i> Get Direction
//                     </button>
//                 </div>
//             </div>
//         </div>
//     `;
    
//     // Add event listeners to buttons
//     card.querySelector('.btn-book').addEventListener('click', function() {
//         bookTable(this.getAttribute('data-branch'));
//     });
    
//     card.querySelector('.btn-direction').addEventListener('click', function() {
//         getDirection(this.getAttribute('data-branch'));
//     });
    
//     return card;
// }

// // Show direction function
// function getDirection(branch) {
//     document.getElementById('restaurantContainer').style.display = 'none';
//     document.getElementById('mapContainer').classList.add('active');
//     document.getElementById('bookingContainer').classList.remove('active');
//     document.getElementById('branchName').textContent = branch;
// }

// // Book table function
// function bookTable(branch) {
//     document.getElementById('restaurantContainer').style.display = 'none';
//     document.getElementById('bookingContainer').classList.add('active');
//     document.getElementById('mapContainer').classList.remove('active');
//     // Assuming an element with id bookBranchName exists in your booking container to show branch name on booking page
//     const bookBranchName = document.getElementById('bookBranchName');
//     if(bookBranchName) {
//       bookBranchName.textContent = branch;
//     }
    
//     // Set default date to tomorrow if date input exists
//     const dateInput = document.getElementById('date');
//     if(dateInput) {
//       const tomorrow = new Date();
//       tomorrow.setDate(tomorrow.getDate() + 1);
//       dateInput.valueAsDate = tomorrow;
//     }
// }

// // Go back to main view
// function goBack() {
//     document.getElementById('mapContainer').classList.remove('active');
//     document.getElementById('bookingContainer').classList.remove('active');
//     document.getElementById('restaurantContainer').style.display = 'flex';
// }



























