<template>
    <div class="row justify-content-center">
        <div class="col-md-12 col-lg-12 col-xl-12 col-xxl-12 col-sm-12 col-xm-12">

            <h3 class="text-center heading_text heading_h3"><span class="style_hd">Add User</span></h3>
            <br>
            <br>
            <form @submit.prevent="onFormSubmit" class="form_dev">
                <div class="form-group">
                    <!-- <label>Name</label> 
                    <input type="text" class="form-control" v-model="user.name" required>
                </div> -->
                    <div class="group">
                        <input type="text" v-model="user.name" required>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Name</label>
                    </div>
                </div>
                <div class="form-group">
                    <!-- <label>Email</label>
                    <input type="email" class="form-control" v-model="user.email" required> -->
                    <div class="group">
                        <input type="email" v-model="user.email" required>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Email</label>
                    </div>
                </div>
                <div class="form-group">
                    <!-- <label>Phone</label>
                    <input type="text" class="form-control" v-model="user.phone" required> -->
                    <div class="group">
                        <input type="text" v-model="user.phone" required>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Phone</label>
                    </div>
                </div>

                <div class="form-group">
                    <div class="button_add">
                          <button class=" btn-block custom-btn btn-2">Add User</button>
                    </div>
                  
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import { db } from '../firebaseDb';
export default {
    data() {
        return {
            user: {
            }
        }
    },
    methods: {
        onFormSubmit(event) {
            event.preventDefault()
            db.collection('users').add(this.user).then(() => {
                alert("User successfully created!");
                window.location.href = "http://localhost:8080/list"
                this.user.name = ''
                this.user.email = ''
                this.user.phone = ''
            }).catch((error) => {
                console.log(error);
            });
        }
    }
}
</script>
<style>
/* form starting stylings ------------------------------- */
.group {
    position: relative;
    margin-bottom: 30px;
}

input {
    font-size: 20px;
    padding: 15px;
    display: block;
    width: 100%;
    border: none;
    border-bottom: 1px solid #dfdfdf;
}

input:focus {
    outline: none;
}

/* LABEL ======================================= */
label {
    color: #99999970;
    font-size: 15px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
}

/* active state */
input:focus~label,
input:valid~label {
    top: -20px;
    font-size: 14px;
    color: #a3282e;
}

/* BOTTOM BARS ================================= */
.bar {
    position: relative;
    display: block;
    width: 100%;
}

.bar:before,
.bar:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
     background: #a3282e;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
}

.bar:before {
    left: 50%;
}

.bar:after {
    right: 50%;
}

/* active state */
input:focus~.bar:before,
input:focus~.bar:after {
    width: 50%;
}

/* HIGHLIGHTER ================================== */
.highlight {
    position: absolute;
    height: 60%;
    width: 100px;
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
}

/* active state */
input:focus~.highlight {
    -webkit-animation: inputHighlighter 0.3s ease;
    -moz-animation: inputHighlighter 0.3s ease;
    animation: inputHighlighter 0.3s ease;
}

/* ANIMATIONS ================ */
@-webkit-keyframes inputHighlighter {
    from {
        background: #5264AE;
    }

    to {
        width: 0;
        background: transparent;
    }
}

@-moz-keyframes inputHighlighter {
    from {
        background: #5264AE;
    }

    to {
        width: 0;
        background: transparent;
    }
}

@keyframes inputHighlighter {
    from {
        background: #5264AE;
    }

    to {
        width: 0;
        background: transparent;
    }
}

.heading_h3 {
    overflow: hidden;
    position: relative;
    text-align: center;

}

.style_hd {
    padding: 15px;
    letter-spacing: 4.5px;
    font-size: 45px;
    font-weight: 700;
    text-transform: uppercase;
    color: brown;
    text-shadow: 1px 2px 3px #cccc;
}

.heading_text::before {
    content: "";
    border-top: 1px solid #9b9b9b;
    border-bottom: 1px solid #9b9b9b;
    margin-left: calc(-100% + -10px);
    position: absolute;
    top: calc(50% - -1px);
    width: 100%;
}

.heading_text::after {
    content: "";
    border-top: 1px solid #9b9b9b;
    border-bottom: 1px solid #9b9b9b;
    position: absolute;
    margin-left: 10px;
    top: calc(50% - -1px);
    width: 100%;
}


/* button */
.custom-btn {
     width: 240px;
    height: 53px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;margin: 15px;
}
.btn-2:focus{
    outline: none;
    border: none;
}
.btn-2 {
    margin: 12px;
  background: #cc0c32;
  background: linear-gradient(0deg, #cc0c32 0%, #cc0c32e0 100%);
  border: none;
  
}
.btn-2:before {
  height: 0%;
  width: 2px;
}
.btn-2:hover {
  box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
              -4px -4px 6px 0 rgba(116, 125, 136, .5), 
    inset -4px -4px 6px 0 rgba(255,255,255,.2),
    inset 4px 4px 6px 0 rgba(0, 0, 0, .4);
}
.button_add {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
}
</style>