<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="documents" class="messages" ref="messages">
        <div v-for="doc in formatedDocuments" :key="doc.id" class="single">
            <span class="created-at">{{ doc.createdAt }}</span>
            <span class="name">{{ doc.name }}</span>
            <span class="message">{{ doc.message }}</span>
        </div>
    </div>
  </div>
</template>

<script>

import  getCollection  from '@/composables/getCollection';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { de } from 'date-fns/locale' ;
import { ref, computed, onUpdated } from 'vue';

export default {
    setup(){
        const { error, documents } = getCollection('messages')

        const formatedDocuments = computed(() => {
            if (documents.value) {
                return documents.value.map(doc => {
                    let time = formatDistanceToNow(doc.createdAt.toDate(), { locale: de })
                    return { ...doc, createdAt: time}
                })
            }
        })

        //automatisch scroll zu letzte Nachricht
        const messages = ref(null)

        onUpdated(() => {
           messages.value.scrollTop = messages.value.scrollHeight 
        })

        return { error, documents, formatedDocuments, messages }
    }
}
</script>

<style>
.chat-window {
    background: #fafafa;
    padding: 30px 20px;
}

.single {
    margin: 10px 0;
}

.created-at {
    display: block;
    color: #999;
    font-size: 12;
    margin-bottom: 4px;
}

.name {
    font-weight: bold;
    margin-right: 6px;
}

.messages {
    max-height: 400px;
    overflow: auto;
}

</style>