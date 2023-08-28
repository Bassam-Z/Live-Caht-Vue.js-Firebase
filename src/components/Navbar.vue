<template>
  <nav v-if="user">
    <div>
        <p>Hallo {{ user.displayName }}</p>
        <p class="email">{{ user.email }}</p>
    </div>
    <button @click="handelClick">Logout</button>
  </nav>
</template>

<script>
import useLogout from '@/composables/useLogout';
import getUser from '@/composables/getUser';

export default {
    setup(){
        const {error, logout} = useLogout();

        //User Data Aufreuf
        const { user } = getUser();

        const handelClick = async () => {
            await logout()
            if(!error.value){
                // context.emit('logout')
                console.log('user logged out')
            }
        }

        return {error, handelClick, user}

    }

}
</script>

<style>
nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
}
nav p.email {
    font-size: 14px;
    color: #999;
}
</style>