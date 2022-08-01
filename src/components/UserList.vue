<template>
<div>
    <div class="row">
        <div class="col-md-12">
            <h3 class="text-center heading_text heading_h3"><span class="style_hd">User List</span></h3>
            <br>
            <br>
            <table class="table table-striped table_dg">
                <thead>
                    <tr>
                        <th class="th_heading">Name</th>
                        <th class="th_heading">Email</th>
                        <th class="th_heading">Phone</th>
                        <th class="th_heading">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in Users" :key="user.key">
                        <td class="th_text">{{ user.name }}</td>
                        <td class="th_text">{{ user.email }}</td>
                        <td class="th_text">{{ user.phone }}</td>
                        <td>
                            <router-link :to="{ name: 'edit', params: { id: user.key } }"
                                class="btn custom-btn_ed btn-2 ">Edit
                            </router-link>
                            <button type="button" @click.prevent="deleteUser(user.key)" class="btn custom-btn_ed btn-2"
                                data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>

                        </td>

                    </tr>
                </tbody>
            </table>
        
        </div>
    </div>


    
    </div>
</template>


<script>
import { db } from '../firebaseDb';

export default {
    data() {
        return {
            Users: []
        }
    },
    created() {
        db.collection('users').onSnapshot((snapshotChange) => {
            this.Users = [];
            snapshotChange.forEach((doc) => {
                this.Users.push({
                    key: doc.id,
                    name: doc.data().name,
                    email: doc.data().email,
                    phone: doc.data().phone
                })
            });
        })
    },

    methods: {
        deleteUser(id) {
            if (window.confirm("Do you really want to delete?")) {
                db.collection("users").doc(id).delete().then(() => {
                    console.log("Document deleted!");
                })
                    .catch((error) => {
                        console.error(error);
                    })
            }
        }
    }
}
</script>
<style>
.btn-primary {
    margin-right: 12px;
}

.ccustom-btn_ed {
    width: 130px;
    height: 40px;
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
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
        7px 7px 20px 0px rgba(0, 0, 0, .1),
        4px 4px 5px 0px rgba(0, 0, 0, .1);
    outline: none;
    margin-right: 20px;
}

.btn-2:focus {
    outline: none;
    border: none;
}

.btn-2 {
    color: #fff;
    background: #cc0c32;
    background: linear-gradient(0deg, #cc0c32 0%, #cc0c32e0 100%);
    border: none;margin-left: 21px;

}

.btn-2:before {
    height: 0%;
    width: 2px;
}

.btn-2:hover {
    color: #fff;
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, .5),
        -4px -4px 6px 0 rgba(116, 125, 136, .5),
        inset -4px -4px 6px 0 rgba(255, 255, 255, .2),
        inset 4px 4px 6px 0 rgba(0, 0, 0, .4);
}

/* heading*/
th.th_heading {
    font-size: 20px;
    color: black;
    background: #a52a2a2e;
}

td.th_text {
    font-size: 15px;
}

/* top heading */
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

.table-striped>tbody>tr:nth-of-type(odd)>* {
    --bs-table-accent-bg: rgb(163 40 46 / 11%);
    color: var(--bs-table-striped-color);
}

.table_dg {
    border: 1px solid #ca033930;
    width: 102%;
}



</style>