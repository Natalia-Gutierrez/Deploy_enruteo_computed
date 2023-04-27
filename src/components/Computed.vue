<template>
    <div>
        <h1>Este es un ejemplo de computed</h1>
        <p>La operacion matematica es: {{ Rvar }}</p>
        <p>El valor de la variable a es: {{ a }}</p>
        <p>El valor de la variable b es: {{ b }}</p>
        <p>El resultado de la multiplicacion es: {{ multiplicacion }}</p>
    </div>
    <br>
    <div>
        <button @click="aumenta">Desea aumentar el valor a</button>
        <button @click="aumenta2">Desea aumentar el valor b</button>
    </div>
    <br>
    <div>
        <button @click="disminui">Desea disminuir el valor a</button>
        <button @click="disminui2">Desea disminuir el valor b</button>
    </div>
</template>
<script setup>
import {ref,computed} from 'vue'
    const a=ref(5);
    const b=ref(4);
    const Rvar=ref("Multiplicacion");
    const multiplicacion=computed(()=>{
        return a.value + b.value
    })
    const aumenta=() =>{
        a.value ++;
    }
    const aumenta2=() =>{
        b.value ++;
    }
    const disminui=() =>{
        a.value --;
    }
    const disminui2=() =>{
        b.value --;
    }
</script>