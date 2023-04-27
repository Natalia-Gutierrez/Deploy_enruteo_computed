/* eslint-disable */
<template>
    <h1> Este es el home</h1>
    <div id="ejem1">
        <h2>Ejemplo de reactividad</h2>
        <p>El valor es: {{ Rvar }} {{ a }}</p>
        <input type="text" v-model="Rvar">
        <button @click="aumenta">Aumenta</button>
        <button @click="quita">Quita</button>
    </div>
</template>
<script setup>
import {ref} from 'vue'
    const a=ref(0);
    const Rvar=ref("Este es un mensaje termporal");
    const aumenta=() =>{
        a.value ++;
    }
    const quita=() =>{
        a.value --;
    }
</script>